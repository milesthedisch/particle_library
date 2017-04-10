/* eslint max-len: 0*/
const assert = require("chai").assert;
const event = require("../../src/lib/event");
const utils = require("../utils");

describe("#Event", function() {
  let eventInstance;
  let noop;

  beforeEach(function() {
    noop = function noop() {};
    eventInstance = Object.create(event).init();
  });

  describe("#on", function() {
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

    it("should return listeners for the one event if given an event", function() {
      eventInstance.on("type1", noop);
      assert.deepEqual(eventInstance.listeners("type1"), [noop]);
    });
  });

  describe("#emit", function() {
    it("should throw a error when given falsy or no arguements", function() {
      utils.forEachFalsy(function(falsy) {
        assert.throws(
          eventInstance.emit.bind(null, falsy),
          "Event: Please provide truthy arguments"
        );
      });
    });

    it("should create the event that its given if the event doesn't exsist.", function() {
      eventInstance.emit("type1");
      assert.equal(eventInstance.callbacks["type1"].length, 0);
    });

    it("should call the methods attached to event that was emitted", function() {
      let actualCalls = [];
      let expectedCalls = ["a", "b"];

      const a = () => {
        actualCalls.push("a");
      };
      const b = () => {
        actualCalls.push("b");
      };

      eventInstance.on("type1", a);
      eventInstance.on("type1", b);
      eventInstance.emit("type1");

      assert.deepEqual(actualCalls, expectedCalls);
    });

    it.only("should call all handelers attached to emitted events", function() {
      let actualCalls = [];
      let expectedCalls = ["a", "b", "a", "b", "a", "b"];

      const a = () => {
        actualCalls.push("a");
      };
      const b = () => {
        actualCalls.push("b");
      };

      eventInstance.on("type1", a);
      eventInstance.on("type1", b);
      eventInstance.on("type2", a);
      eventInstance.on("type2", b);
      eventInstance.on("type3", a);
      eventInstance.on("type3", b);

      eventInstance.emit("type1");
      eventInstance.emit("type2");
      eventInstance.emit("type3");

      assert.deepEqual(actualCalls, expectedCalls);
    });
  });

  // describe("#remove", function() {});

  describe("Aliases", function() {
    it("should have a on aliases", function() {
      assert(eventInstance.on === eventInstance.addListener);
      assert(eventInstance.off === eventInstance.remove);
      assert(eventInstance.off === eventInstance.removeListener);
      assert(eventInstance.off === eventInstance.removeAllListeners);
    });
  });
});
