/* eslint max-len: 0*/
const event = require("../../src/lib/event");
const assert = require("chai").assert;

describe("#Event", function() {
  let eventInstance;
  let noop

  describe("#on", function() {
    beforeEach(function() {
      noop = function noop(){};
      eventInstance = Object.create(event).init();
    });

    it("should add a listener to the list of listeners on that type", function() {
      const doOnType = function doOnType() {};

      eventInstance.on("type1", doOnType);
      assert(eventInstance.callbacks["type1"], "There is no event of type1");
      assert.equal(eventInstance.callbacks["type1"].length, 1);
      assert.equal(eventInstance.callbacks["type1"][0], doOnType);
    });

    it("should add multiple listeners if given a string with spaces between words", function() {
      const doOnBothTypes = function doOnBothTypes() {};
      eventInstance.on("type1 type2", doOnBothTypes);

      assert(eventInstance.callbacks["type1"]);
      assert(eventInstance.callbacks["type2"]);
      assert.equal(eventInstance.callbacks["type1"].length, 1);
      assert.equal(eventInstance.callbacks["type2"].length, 1);
      assert.equal(eventInstance.callbacks["type1"][0], doOnBothTypes);
      assert.equal(eventInstance.callbacks["type2"][0], doOnBothTypes);
    });

    it("should not create duplicate events of the same name", function() {
      eventInstance.on("type1", noop);
      eventInstance.on("type1", noop);
      assert.deepEqual(eventInstance.callbacks, {"type1": [noop]});
    });

    it("should throw an error if not given first and second argument", function() {
      assert.throws(eventInstance.on.bind(null), "Please provide truthy arguments");
    });
  });

  describe("#listeners", function() {
    it("should return the all listeners if not given arguments", function() {
      eventInstance.on("type1 type2", function() {});
      eventInstance.on("type3", function() {});
      assert.deepEqual(eventInstance.listeners(), ["type1", "type2", "type3"]);
    });
  });
  describe("#emit", function() {});
  describe("#remove", function() {});
});
