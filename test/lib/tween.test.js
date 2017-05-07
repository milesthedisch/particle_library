/* eslint max-len: 0*/
const tween = require("../../src/lib/tween.js");
const event = require("../../src/lib/event.js");
const clock = require("../../src/lib/clock.js");
const assert = require("chai").assert;
const sinon = require("sinon");

describe.only("#Tween", function() {
  let tweenInstance;
  const DEFAULTS = {
    obj: {x: 0, y: 0},
    props: {x: 100, y: 100},
    easing: "ease",
    duration: 1000,
  };

  beforeEach(function() {
    // Pass clock instance
    tweenInstance = tween.init({clock});
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
        easing: t1.easing.name,
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
  });

  describe("#continue", function() {});
  describe("#finish", function() {});
  describe("#reset", function() {});
  describe("#rewind", function() {});
  describe("#start", function() {});
  describe("#stop", function() {});
});
