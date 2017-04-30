/* eslint max-len: 0 */
// Stub framework for requestAnimationFrame
require("raf-stub").replaceRaf();
// Polyfill for perf now
require("../utils.js").perfNowPolyfill(global);
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
    whipSlavesSpy.restore();
  });

  describe("#init", function() {
    it("should run a loop that calls whipSlaves every 16.67 milliseconds defaultly", function() {
      clockInstance.start();
      // We need to warm the clock up because the first few
      // frames willneed to catch up to the start time
      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/60);
      requestAnimationFrame.step(1, 1000/60);

      assert.equal(whipSlavesSpy.callCount, 2);

      // Which frame we are in. Its a zero based index. So the first frame is 0.
      assert.equal(clockInstance.index, 1);
    });

    it("should run a loop that calls whipSlaves every given a fps", function() {
      // 50fps translates to one frame every 20sec.
      const FPS = 50;
      clockInstance.start(FPS);

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/FPS);
      requestAnimationFrame.step(1, 1000/FPS);
      assert.equal(whipSlavesSpy.callCount, 2);
      assert.equal(clockInstance.index, 1);
    });


    // rAF cant to tick faster than the 16.667ms between intervals.
    it("should run a loop that runs every 16.66..7ms given a interval that is less that 16.66..7ms", function() {
      const FPS_TO_HIGH = 70;
      assert.throw(clockInstance.start.bind(null, FPS_TO_HIGH));
    });
  });

  describe("#tick", function() {
    it("should update based on start time given and lastTime state", function() {
      // Start time and last time should be equal on the first tick.
      clockInstance.lastTime = 0;
      clockInstance.tick(0);

      // Once we've called tick the ticker will keep running every rAF.
      requestAnimationFrame.step();
      assert.equal(clockInstance.index, 0);
    });

    it("should update based on start time given and lastTime state", function() {
      // Start time and last time should be equal on the first tick.
      clockInstance.lastTime = 100;
      clockInstance.tick(200);

      // Once we've called tick the ticker will keep running every rAF.
      requestAnimationFrame.step();
      assert.equal(clockInstance.index, 0);
    });

    it("should update based on start time given and lastTime state", function() {
      // Start time and last time should be equal on the first tick.
      clockInstance.lastTime = 200;
      clockInstance.tick(100);

      // Once we've called tick the ticker will keep running every rAF.
      requestAnimationFrame.step();
      assert.equal(clockInstance.index, -1);
    });
  });

  describe.only("#stop", function() {
    it.skip("should cancel the next frame", function() {
      clockInstance.start();

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/60);

      clockInstance.stop();

      // This frame should not get called and not update index.
      requestAnimationFrame.step(1, 1000/60);
      assert.equal(whipSlavesSpy.callCount, 1);
      assert.equal(clockInstance.index, 0);
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

  describe("#start", function() {});
  describe("#createSlave", function() {});
  describe("#removeSlave", function() {});
  describe("#whipSlaves", function() {});
});
