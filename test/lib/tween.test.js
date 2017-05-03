/* eslint max-len: 0*/
const tween = require("../../src/lib/tween.js");
const event = require("../../src/lib/event.js");
const clock = require("../../src/lib/clock.js");
const assert = require("chai").assert;

describe("#Tween", function() {
  let tweenInstance;

  beforeEach(function() {
    // Pass clock instance
    tweenInstance = tween.init({clock});
  });

  it("should have methods from event object", function() {
    const event = Object.getPrototypeOf(tweenInstance);
    const Event = require("../../src/lib/event.js");
    const eventMethods = Object.keys(Event);

    assert.deepEqual(eventMethods, Object.keys(event));
  });

  it("should reference to event object as its parent", function() {
  });

  describe("#init", function() {
  });

  describe("#create", function() {
  });
  describe("#continue", function() {});
  describe("#finish", function() {});
  describe("#reset", function() {});
  describe("#rewind", function() {});
  describe("#start", function() {});
  describe("#stop", function() {});
});
