/* eslint max-len: 0*/
const sinon = require("sinon");
const tween = require("../../src/lib/tween.js");
const event = require("../../src/lib/event.js");
const clock = require("../../src/lib/clock.js");

// Testing dependcies //
const utils = require("../utils.js").perfNowPolyfill(global); // eslint-disable-line
const rAF = require("raf-stub").replaceRaf(); // eslint-disable-line
const assert = require("chai").assert;


const DEFAULTS = {
  obj: {x: 0, y: 0},
  props: {x: 100, y: 100},
  easing: "ease",
  duration: 1000,
};

describe("#Tween", function() {
  let tweenInstance;

  beforeEach(function() {
    tweenInstance = tween.init({clock});
  });

  afterEach(function() {
    requestAnimationFrame.reset();
  });

  describe("#init", function() {
    it("should have methods from event object", function() {
      const event = Object.getPrototypeOf(tweenInstance);
      const Event = require("../../src/lib/event.js");
      const eventMethods = Object.keys(Event);

      assert.deepEqual(eventMethods, Object.keys(event));
    });

    it("should have reference to clock", function() {
      assert.equal(tweenInstance._clock, clock.init());
    });

    it("should have references to event", function() {
      assert.equal(tweenInstance.parent, event);
    });

    it("should set up a handler for when the clock has updated", function() {
      const clockHandlers = Object.keys(tweenInstance._clock.callbacks);
      assert.equal(clockHandlers.length, 1);
    });
  });

  describe("#create", function() {
    it("should create a default tween given no arguments", function() {
      const t1 = tweenInstance.create();
      const actual = {
        duration: t1.duration,
        props: t1.props,
        obj: t1.obj,
        easing: t1.easing.name.replace("bound ", ""),
      };

      assert.deepEqual(DEFAULTS, actual);
    });

    it("should throw an error when given a non existant easing function", function() {
      const willThrow = tweenInstance.create.bind(tweenInstance, {
        "easing": "badEasing",
      });

      assert.throws(willThrow);
    });

    it("should use the id that the tweens index is at", function() {
      const t1 = tweenInstance.create();
      const t2 = tweenInstance.create();
      assert.deepEqual([t1.id, t2.id], tweenInstance.tweens.map((x) => x.id));
    });

    it("should attach the id thats given", function() {
      const tweenA = tweenInstance.create({id: "A"});
      assert.equal(tweenA.id, "A");
    });

    it("should throw an error when the id of a tween already exists", function() {
      tweenInstance.create({id: "A"});
      const willThrow = tweenInstance.create.bind(tweenInstance, {id: "A"});
      assert.throws(willThrow, Error, /already exists/);
    });

    it("should create a slave and attach it to the tween", function() {
      const t1 = tweenInstance.create();
      assert.ok(t1.ticker);
    });

    it("should bind the props and objects to the ease function", function() {
      const spy = sinon.spy(tweenInstance.easingFns, "ease");
      const t1 = tweenInstance.create();
      t1.easing();
      assert.deepEqual(spy.getCall(0).args, [t1.obj, t1.props]);
      spy.restore();
    });

    it("should bind the start and end times to normalize", function() {
      const t1 = tweenInstance.create();
      t1.ticker.duration.ms = 100;
      tweenInstance.startAll();
      assert.equal(t1.normalizer(0), 0);
      assert.equal(t1.normalizer(100), 1);
    });
  });

  describe("#startAll", function() {
    it("should start initalize all the tickers start times", function() {
      const t1 = tweenInstance.create();
      const t2 = tweenInstance.create();
      const t3 = tweenInstance.create();
      tweenInstance.startAll();

      const actual = [t1, t2, t3]
        .map((x) => x.ticker.startTime)
        .reduce((x, y) => {
          if (x.indexOf(y) === -1) x.push(y);
          return x;
        }, [])
        .length;

      const expected = 1;
      // All the startTimes should be the same.
      assert.equal(actual, expected);
    });

    it("should start the clock and the ticker, there start times should be equal", function() {
      const t1 = tweenInstance.create();
      tweenInstance.startAll();
      assert.equal(t1.ticker.startTime, tweenInstance._clock.startTime);
    });

    it("should emit tick event once enough time has passed", function(done) {
      tweenInstance._clock.on("tick", function() {
        done();
      });

      tweenInstance.create();
      tweenInstance.startAll();
      requestAnimationFrame.step(1, 60);
    });

    it("should throw an error if given no tweens", function() {
      assert.throws(tweenInstance.startAll.bind(tweenInstance));
    });
  });

  describe("#stop", function() {
    it("should call stop method on its ticker and change its state to STOPPED", function() {
      const t1 = tweenInstance.create();
      tweenInstance.startAll();
      assert.equal(t1.ticker.STATE, "RUNNING");
      t1.stop();
      assert.equal(t1.ticker.STATE, "STOPPED");
    });
  });

  describe("#update", function() {
    let t1;
    let normalizerSpy;
    let easingSpy;

    beforeEach(function() {
      t1 = tweenInstance.create({duration: 120});
      tweenInstance.startAll();
      normalizerSpy = sinon.spy(t1, "normalizer");
      easingSpy = sinon.spy(t1, "easing");
    });

    it("should call normalizer with the delta", function(done) {
      requestAnimationFrame.step(3, t1.ticker.duration.ms);
      assert.ok(normalizerSpy.called);
    });
  });
});
