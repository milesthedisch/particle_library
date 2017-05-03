/* eslint max-len: 0*/
const tween = require("../../src/lib/tween.js");
const event = require("../../src/lib/event.js");
const clock = require("../../src/lib/clock.js");
const assert = require("chai").assert;

describe.only("#Tween", function() {
  let tweenInstance;
  const DEFAULTS = {
    obj: {x: 0, y: 0},
    props: {x: 100, y: 100},
    easingFn: "ease",
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
      tweenInstance.create();
      const actual = {
        duration: tweenInstance.duration,
        props: tweenInstance.props,
        obj: tweenInstance.obj,
        easing: tweenInstance.easing,
      };
    
      assert.deepEqual(actual, DEFAULTS);
    });
  });

  describe("#continue", function() {});
  describe("#finish", function() {});
  describe("#reset", function() {});
  describe("#rewind", function() {});
  describe("#start", function() {});
  describe("#stop", function() {});
});
