/* eslint max-len: 0 */
// Stub framework for requestAnimationFrame
require("raf-stub").replaceRaf();
// Polyfill for perf now
const utils = require("../utils.js");
utils.perfNowPolyfill(global);
const sinon = require("sinon");
const assert = require("chai").assert;
const clock = require("../../src/lib/clock.js");

describe("#Clock", function() {
  let clockInstance;
  let whipSlavesSpy;

  beforeEach(function() {
    clockInstance = Object.create(clock).init();
    whipSlavesSpy = sinon.spy(Object.getPrototypeOf(clockInstance), "whipSlaves");
  });

  afterEach(function() {
    // Clean up requestAnimationFrame stub.
    requestAnimationFrame.reset();
    // clockInstance.stop();
    whipSlavesSpy.restore();
  });

  it("should have methods from event object", function() {
    const event = Object.getPrototypeOf(clock);
    const Event = require("../../src/lib/event.js");
    const eventMethods = Object.keys(Event);

    assert.deepEqual(eventMethods, Object.keys(event));
  });

  it("should have reference to its parent 'event'", function() {
    const Event = require("../../src/lib/event.js");
    assert.deepEqual(clockInstance.parent, Event);
  });


  describe("#init", function() {
    it("should run a loop that calls whipSlaves every 16.67 milliseconds defaultly", function() {
      clockInstance.start();

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/60);
      requestAnimationFrame.step(1, 1000/60);

      assert.isAtMost(whipSlavesSpy.callCount, 3, "whipSlaves call count");

      // Which frame we are in. Its a zero based index. So the first frame is 0.
      assert.isAtMost(clockInstance.index, 2, "frame index");
    });

    it("should run a loop that calls whipSlaves every given fps", function() {
      // 50fps translates to one frame every 20sec.
      const FPS = 50;
      clockInstance.start(FPS);

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/FPS);
      requestAnimationFrame.step(1, 1000/FPS);

      assert.isAtMost(whipSlavesSpy.callCount, 3, "whipSlaves call count");
      assert.isAtMost(clockInstance.index, 2, "frame index");
    });
  });

  describe("#tick", function() {
    it("should update based on startTime given and lastTime state", function() {
      // Start time and last time should be equal on the first tick.
      clockInstance.lastTime = 0;
      clockInstance.loop(0);

      // Once we've called tick the ticker will keep running every rAF.
      requestAnimationFrame.step();
      assert.equal(clockInstance.index, 0);
    });

    it("should update based on start time given and lastTime state", function() {
      // Start time and last time should be equal on the first tick.
      clockInstance.lastTime = 200;
      clockInstance.loop(100);

      assert.equal(clockInstance.index, -1);
    });
  });

  describe("#stop", function() {
    it("should cancel the next frame", function() {
      clockInstance.start();

      requestAnimationFrame.step(1, clockInstance.startTime);

      clockInstance.stop();

      assert.equal(whipSlavesSpy.callCount, 1, "whip salves call count");
      assert.equal(clockInstance.index, 0, "frame index");
    });

    it("should clear the slaves queue and save the timeSinceStart and the stopped time", function(done) {
      clockInstance.start();

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/60);

      setTimeout(function() {
        clockInstance.stop();
        assert.isAtLeast(clockInstance.stopTime, clockInstance.startTime + 1000/60);
        assert.isAtLeast(clockInstance.timeSinceStart, clockInstance.stopTime - clockInstance.startTime);
        done();
      }, 1000/60);
    });
  });

  describe("#start", function() {
    let tickSpy;

    beforeEach(function() {
      tickSpy = sinon.spy(Object.getPrototypeOf(clockInstance), "loop");
    });

    afterEach(function() {
      tickSpy.restore();
    });

    // rAF cant to tick faster than the 16.667ms between intervals.
    it("should throw an error given an fps that is to high.", function() {
      const FPS_TO_HIGH = 70;
      assert.throw(clockInstance.start.bind(null, FPS_TO_HIGH));
    });

    it("should throw an error given an fps that is not an integer.", function() {
      utils.forEachFalsy((falsy) => {
        assert.throw(clockInstance.start.bind(null, falsy));
      });
    });

    it("should call tick to start the loop", function() {
      clockInstance.start();
      assert.ok(tickSpy.calledOnce, "Tick was not called once");
    });
  });

  describe("#createSlave", function() {
    it("should throw an error if not given any arguments", function() {
      assert.throw(clockInstance.createSlave);
    });

    it("should create a ticker with a given id", function() {
      assert.equal(clockInstance.slaves.length, 0);
      clockInstance.createSlave({id: "ticker1"});
      assert.equal(clockInstance.slaves.length, 1);
      assert.equal(clockInstance.slaves[0].id, "ticker1");
    });

    it("should create a ticker where it was pushed to", function() {
      clockInstance.createSlave({});
      assert.equal(clockInstance.slaves[0].id, 1);
      clockInstance.createSlave({});
      assert.equal(clockInstance.slaves[1].id, 2);
    });
  });

  describe("#removeSlave", function() {
    it("should not remove a slave from the slaves array if given no argumets", function() {
      clockInstance.createSlave({id: "ticker1"});
      clockInstance.removeSlave();
      assert.equal(clockInstance.slaves.length, 1);
    });

    it("should remove a slave with given id", function() {
      clockInstance.createSlave({});
      clockInstance.removeSlave(1);
      assert.equal(clockInstance.slaves.length, 0);
    });
  });

  describe("#whipSlaves", function() {
    let fakeSlave;
    let nudgeSpy;
    let removeAllListenersSpy;

    beforeEach(function() {
      nudgeSpy = sinon.spy();
      removeAllListenersSpy = sinon.spy();
      fakeSlave = {
        id: null,
        nudge: nudgeSpy,
        needsUpdate: true,
        removeAllListeners: removeAllListenersSpy,
      };
    });

    it("should nudge all slaves that need to be updated", function() {
      clockInstance.slaves = [fakeSlave, fakeSlave];
      clockInstance.whipSlaves();
      assert.ok(nudgeSpy.calledTwice);
    });

    it("should emit an event after all slave have been iterated through.", function(done) {
      clockInstance.slaves = [fakeSlave, fakeSlave].map((s) => {
        s.needsUpdate = true;
        return s;
      });

      clockInstance.on("tick", function complete() {
        assert.ok(nudgeSpy.calledTwice);
        done();
      });
      clockInstance.whipSlaves();
    });

    it("should not emit done event if there is no slaves", function() {
      clockInstance.whipSlaves();
      assert.notOk(nudgeSpy.called);
      assert.notOk(removeAllListenersSpy.called);
    });
  });
});
