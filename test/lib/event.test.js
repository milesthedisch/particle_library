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

    it("should bind the context of the last argument to the provided callback", function() {
      const testFn = function testFn() {
        return this.foo;
      };

      eventInstance.on("type1", testFn, {foo: "bar"});
      assert.equal(eventInstance.listeners("type1")[0](), "bar");
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

    it("should call all handelers attached to emitted events", function() {
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

    it("should emit the event and arguments passed as well", function(done) {
      const extraData = {a: 1};

      eventInstance.on("type1", function(data) {
        assert.deepEqual(extraData, data);
        done();
      });

      eventInstance.emit("type1", extraData);
    });
  });

  describe("#off", function() {
    it("should remove an event thats been attached", function() {
      eventInstance.on("type1", noop);
      eventInstance.off("type1");
      assert.deepEqual(eventInstance.callbacks, {});
    });

    it("should remove an events function", function() {
      const a = ()=>{};
      eventInstance.on("type1", a);
      eventInstance.on("type1", noop);
      eventInstance.off("type1", noop);
      assert.deepEqual(eventInstance.listeners("type1"), [a]);
    });

    it("should remove all event given no params", function() {
      const b = ()=>{};
      const a = ()=>{};

      eventInstance.on("type1", a);
      eventInstance.on("type2", noop);
      eventInstance.on("type3", b);

      eventInstance.removeAllListeners();
      assert.deepEqual(eventInstance.callbacks, {});
    });

    it("should only remove the handler that its given on the specific event", function() {
      const a = ()=>{};
      const b = ()=>{};
      const c = ()=>{};

      eventInstance.on("type1", a);
      eventInstance.on("type1", b);
      eventInstance.on("type1", c);
      eventInstance.off("type1", a);

      assert.deepEqual(eventInstance.get("type1"), [b, c]);
    });
  });

  describe("#once", function() {
    it("should only called the given call back once", function() {
      let calledLength = 0;
      const a = () => {
        ++calledLength;
      };

      eventInstance.once("type1", a);
      eventInstance.emit("type1");
      eventInstance.emit("type1");

      assert.equal(calledLength, 1);
    });
  });

  describe("Aliases", function() {
    it("should have a on aliases", function() {
      assert.ok(eventInstance.on === eventInstance.addListener);
      assert.ok(eventInstance.off === eventInstance.removeListener);
      assert.ok(eventInstance.off === eventInstance.removeAllListeners);
    });
  });
});
