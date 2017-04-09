/* eslint max-len: 0*/
const event = require("../../src/lib/event");
const assert = require("chai").assert;

describe("#Event", function() {
  let eventInstance;

  describe.only("#on", function() {
    beforeEach(function() {
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

    it("should throw an error if not given first and second argument", function() {
      assert.throws(eventInstance.on.bind(null), "Please provide truthy arguments");
    });
  });
  describe("#emit", function() {});
  describe("#listeners", function() {});
  describe("#remove", function() {});
});
