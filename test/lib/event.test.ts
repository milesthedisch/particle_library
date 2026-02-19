/* eslint max-len: 0*/
import { describe, it, expect, beforeEach } from "vitest";
import Event from "../../src/lib/event";
import testUtils from "../utils";

describe("#Event", function() {
  let eventInstance: any;
  let noop: () => void;

  beforeEach(function() {
    noop = function noop() {};
    eventInstance = Object.create(Event).init();
  });

  describe("#on", function() {
    it("should add a listener to the list of listeners on that type", function() {
      const doOnType = function doOnType() {};

      eventInstance.on("type1", doOnType);
      expect(eventInstance.callbacks["type1"]).toBeTruthy();
      expect(eventInstance.callbacks["type1"].length).toBe(1);
      expect(eventInstance.callbacks["type1"][0]).toBe(doOnType);
    });

    it("should add multiple listeners if given a string with spaces between words", function() {
      const doOnBothTypes = function doOnBothTypes() {};
      eventInstance.on("type1 type2", doOnBothTypes);

      expect(eventInstance.callbacks["type1"]).toBeTruthy();
      expect(eventInstance.callbacks["type2"]).toBeTruthy();
      expect(eventInstance.callbacks["type1"].length).toBe(1);
      expect(eventInstance.callbacks["type2"].length).toBe(1);
      expect(eventInstance.callbacks["type1"][0]).toBe(doOnBothTypes);
      expect(eventInstance.callbacks["type2"][0]).toBe(doOnBothTypes);
    });

    it("should not create duplicate events of the same name", function() {
      eventInstance.on("type1", noop);
      eventInstance.on("type1", noop);
      expect(eventInstance.callbacks).toEqual({"type1": [noop]});
    });

    it("should throw an error if not given first and second argument", function() {
      expect(eventInstance.on.bind(null)).toThrow("Please provide truthy arguments");
    });

    it("should bind the context of the last argument to the provided callback", function() {
      const testFn = function testFn(this: any) {
        return this.foo;
      };

      eventInstance.on("type1", testFn, {foo: "bar"});
      expect(eventInstance.listeners("type1")[0]()).toBe("bar");
    });
  });

  describe("#listeners", function() {
    it("should return the all listeners if not given arguments", function() {
      eventInstance.on("type1 type2", function() {});
      eventInstance.on("type3", function() {});
      expect(eventInstance.listeners()).toEqual(["type1", "type2", "type3"]);
    });

    it("should return listeners for the one event if given an event", function() {
      eventInstance.on("type1", noop);
      expect(eventInstance.listeners("type1")).toEqual([noop]);
    });
  });

  describe("#emit", function() {
    it("should throw a error when given falsy or no arguments", function() {
      testUtils.forEachFalsy(function(falsy: any) {
        expect(
          eventInstance.emit.bind(null, falsy)
        ).toThrow("Event: Please provide truthy arguments");
      });
    });

    it("should create the event that its given if the event doesn't exist.", function() {
      eventInstance.emit("type1");
      expect(eventInstance.callbacks["type1"].length).toBe(0);
    });

    it("should call the methods attached to event that was emitted", function() {
      const actualCalls: string[] = [];
      const expectedCalls = ["a", "b"];

      const a = () => {
        actualCalls.push("a");
      };
      const b = () => {
        actualCalls.push("b");
      };

      eventInstance.on("type1", a);
      eventInstance.on("type1", b);
      eventInstance.emit("type1");

      expect(actualCalls).toEqual(expectedCalls);
    });

    it("should call all handlers attached to emitted events", function() {
      const actualCalls: string[] = [];
      const expectedCalls = ["a", "b", "a", "b", "a", "b"];

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

      expect(actualCalls).toEqual(expectedCalls);
    });

    it("should emit the event and arguments passed as well", function() {
      const extraData = {a: 1};

      return new Promise<void>((resolve) => {
        eventInstance.on("type1", function(data: any) {
          expect(extraData).toEqual(data);
          resolve();
        });

        eventInstance.emit("type1", extraData);
      });
    });
  });

  describe("#off", function() {
    it("should remove an event thats been attached", function() {
      eventInstance.on("type1", noop);
      eventInstance.off("type1");
      expect(eventInstance.callbacks).toEqual({});
    });

    it("should remove an events function", function() {
      const a = () => {};
      eventInstance.on("type1", a);
      eventInstance.on("type1", noop);
      eventInstance.off("type1", noop);
      expect(eventInstance.listeners("type1")).toEqual([a]);
    });

    it("should remove all event given no params", function() {
      const b = () => {};
      const a = () => {};

      eventInstance.on("type1", a);
      eventInstance.on("type2", noop);
      eventInstance.on("type3", b);

      eventInstance.removeAllListeners();
      expect(eventInstance.callbacks).toEqual({});
    });

    it("should only remove the handler that its given on the specific event", function() {
      const a = () => {};
      const b = () => {};
      const c = () => {};

      eventInstance.on("type1", a);
      eventInstance.on("type1", b);
      eventInstance.on("type1", c);
      eventInstance.off("type1", a);

      expect(eventInstance.get("type1")).toEqual([b, c]);
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

      expect(calledLength).toBe(1);
    });
  });

  describe("Aliases", function() {
    it("should have on aliases", function() {
      expect(eventInstance.on).toBe(eventInstance.addListener);
      expect(eventInstance.off).toBe(eventInstance.removeListener);
      expect(eventInstance.off).toBe(eventInstance.removeAllListeners);
    });
  });
});
