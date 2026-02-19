/* eslint max-len: 0 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { installRaf, stepRaf, resetRaf, uninstallRaf } from "../raf-helper";
import testUtils from "../utils";
import Clock from "../../src/lib/clock";
import Event from "../../src/lib/event";

// Polyfill for performance.now
testUtils.perfNowPolyfill(globalThis);

describe("#Clock", function() {
  let clockInstance: any;
  let whipSlavesSpy: any;

  beforeEach(function() {
    installRaf();
    clockInstance = Object.create(Clock).init();
    whipSlavesSpy = vi.spyOn(Object.getPrototypeOf(clockInstance), "whipSlaves");
  });

  afterEach(function() {
    resetRaf();
    whipSlavesSpy.mockRestore();
    uninstallRaf();
  });

  it("should have methods from event object", function() {
    const event = Object.getPrototypeOf(Clock);
    const eventMethods = Object.keys(Event);

    expect(Object.keys(event)).toEqual(eventMethods);
  });

  it("should have reference to its parent 'event'", function() {
    expect(clockInstance.parent).toEqual(Event);
  });

  describe("#init", function() {
    it("should run a loop that calls whipSlaves every 16.67 milliseconds defaultly", function() {
      clockInstance.start();

      stepRaf(1, clockInstance.startTime);
      stepRaf(1, 1000/60);
      stepRaf(1, 1000/60);

      expect(whipSlavesSpy.mock.calls.length).toBeLessThanOrEqual(3);
      expect(clockInstance.index).toBeLessThanOrEqual(2);
    });

    it("should run a loop that calls whipSlaves every given fps", function() {
      const FPS = 50;
      clockInstance.start(FPS);

      stepRaf(1, clockInstance.startTime);
      stepRaf(1, 1000/FPS);
      stepRaf(1, 1000/FPS);

      expect(whipSlavesSpy.mock.calls.length).toBeLessThanOrEqual(3);
      expect(clockInstance.index).toBeLessThanOrEqual(2);
    });
  });

  describe("#tick", function() {
    it("should update based on startTime given and lastTime state", function() {
      clockInstance.lastTime = 0;
      clockInstance.loop(0);

      stepRaf(1, 61);
      expect(clockInstance.index).toBe(0);
    });

    it("should update based on start time given and lastTime state", function() {
      clockInstance.lastTime = 200;
      clockInstance.loop(100);

      expect(clockInstance.index).toBe(-1);
    });
  });

  describe("#stop", function() {
    it("should cancel the next frame", function() {
      clockInstance.start();

      stepRaf(1, clockInstance.startTime);
      stepRaf(1, 1000/60 + 1);

      clockInstance.stop();

      expect(whipSlavesSpy.mock.calls.length).toBe(1);
      expect(clockInstance.index).toBe(0);
    });

    it("should clear the slaves queue and save the timeSinceStart and the stopped time", async function() {
      clockInstance.start();

      stepRaf(1, clockInstance.startTime);
      stepRaf(1, 1000/60);

      await new Promise<void>((resolve) => {
        setTimeout(function() {
          clockInstance.stop();
          expect(clockInstance.stopTime).toBeGreaterThanOrEqual(clockInstance.startTime + 1000/60);
          expect(clockInstance.timeSinceStart).toBeGreaterThanOrEqual(clockInstance.stopTime - clockInstance.startTime);
          resolve();
        }, 1000/60);
      });
    });
  });

  describe("#start", function() {
    let tickSpy: any;

    beforeEach(function() {
      tickSpy = vi.spyOn(Object.getPrototypeOf(clockInstance), "loop");
    });

    afterEach(function() {
      tickSpy.mockRestore();
    });

    it("should throw an error given an fps that is too high.", function() {
      const FPS_TO_HIGH = 70;
      expect(clockInstance.start.bind(null, FPS_TO_HIGH)).toThrow();
    });

    it("should throw an error given an fps that is not an integer.", function() {
      testUtils.forEachFalsy((falsy: any) => {
        expect(clockInstance.start.bind(null, falsy)).toThrow();
      });
    });

    it("should call tick to start the loop", function() {
      clockInstance.start();
      expect(tickSpy).toHaveBeenCalledOnce();
    });
  });

  describe("#createSlave", function() {
    it("should throw an error if not given any arguments", function() {
      expect(clockInstance.createSlave).toThrow();
    });

    it("should create a ticker with a given id", function() {
      expect(clockInstance.slaves.length).toBe(0);
      clockInstance.createSlave({id: "ticker1"});
      expect(clockInstance.slaves.length).toBe(1);
      expect(clockInstance.slaves[0].id).toBe("ticker1");
    });

    it("should create a ticker where it was pushed to", function() {
      clockInstance.createSlave({});
      expect(clockInstance.slaves[0].id).toBe(1);
      clockInstance.createSlave({});
      expect(clockInstance.slaves[1].id).toBe(2);
    });
  });

  describe("#removeSlave", function() {
    it("should not remove a slave from the slaves array if given no arguments", function() {
      clockInstance.createSlave({id: "ticker1"});
      clockInstance.removeSlave();
      expect(clockInstance.slaves.length).toBe(1);
    });

    it("should remove a slave with given id", function() {
      clockInstance.createSlave({});
      clockInstance.removeSlave(1);
      expect(clockInstance.slaves.length).toBe(0);
    });
  });

  describe("#whipSlaves", function() {
    let fakeSlave: any;
    let nudgeSpy: any;
    let removeAllListenersSpy: any;

    beforeEach(function() {
      nudgeSpy = vi.fn();
      removeAllListenersSpy = vi.fn();
      fakeSlave = {
        id: null,
        nudge: nudgeSpy,
        needsUpdate: true,
        removeAllListeners: removeAllListenersSpy,
      };
    });

    it("should nudge all slaves that need to be updated", function() {
      clockInstance.slaves = [fakeSlave, fakeSlave];
      clockInstance.whipSlaves();
      expect(nudgeSpy).toHaveBeenCalledTimes(2);
    });

    it("should emit an event after all slave have been iterated through.", function() {
      return new Promise<void>((resolve) => {
        clockInstance.slaves = [fakeSlave, fakeSlave].map((s: any) => {
          s.needsUpdate = true;
          return s;
        });

        clockInstance.on("tick", function complete() {
          expect(nudgeSpy).toHaveBeenCalledTimes(2);
          resolve();
        });
        clockInstance.whipSlaves();
      });
    });

    it("should not emit done event if there is no slaves", function() {
      clockInstance.whipSlaves();
      expect(nudgeSpy).not.toHaveBeenCalled();
      expect(removeAllListenersSpy).not.toHaveBeenCalled();
    });
  });
});
