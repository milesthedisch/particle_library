/* eslint max-len: 0*/
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { installRaf, stepRaf, resetRaf, uninstallRaf } from "../raf-helper";
import testUtils from "../utils";
import YAT from "../../src/lib/tween";
import Event from "../../src/lib/event";
import Clock from "../../src/lib/clock";

testUtils.perfNowPolyfill(globalThis);

const DEFAULTS = {
  obj: {x: 0, y: 0},
  props: {x: 100, y: 100},
  easing: "ease",
  duration: 1000,
};

describe("#Tween", function() {
  let tweenInstance: any;

  beforeEach(function() {
    installRaf();
    resetRaf();
    tweenInstance = YAT.init({
      clock: Clock.init(),
    });
  });

  afterEach(function() {
    resetRaf();
    tweenInstance._clock.reset();
    uninstallRaf();
  });

  describe("#init", function() {
    it("should have methods from event class", function() {
      const event = Object.getPrototypeOf(tweenInstance);
      const eventMethods = Object.keys(Event);

      expect(Object.keys(event)).toEqual(eventMethods);
    });

    it("should have reference to clock", function() {
      expect(tweenInstance._clock).toBe(Clock.init());
    });

    it("should have references to event", function() {
      expect(tweenInstance.parent).toBe(Event);
    });

    it("should set up a handler for when the clock has updated", function() {
      const clockHandlers = Object.keys(tweenInstance._clock.callbacks);
      expect(clockHandlers.length).toBe(1);
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

      expect(actual).toEqual(DEFAULTS);
    });

    it("should throw an error when given a non existent easing function", function() {
      const willThrow = tweenInstance.create.bind(tweenInstance, {
        "easing": "badEasing",
      });

      expect(willThrow).toThrow();
    });

    it("should use the id that the tweens index is at", function() {
      const t1 = tweenInstance.create();
      const t2 = tweenInstance.create();
      expect([t1.id, t2.id]).toEqual(tweenInstance.tweens.map((x: any) => x.id));
    });

    it("should attach the id thats given", function() {
      const tweenA = tweenInstance.create({id: "A"});
      expect(tweenA.id).toBe("A");
    });

    it("should throw an error when the id of a tween already exists", function() {
      tweenInstance.create({id: "A"});
      const willThrow = tweenInstance.create.bind(tweenInstance, {id: "A"});
      expect(willThrow).toThrow(/already exists/);
    });

    it("should create a slave and attach it to the tween", function() {
      const t1 = tweenInstance.create();
      expect(t1.ticker).toBeTruthy();
    });
  });

  describe("#startAll", function() {
    it("should start initialize all the tickers start times", function() {
      const t1 = tweenInstance.create();
      const t2 = tweenInstance.create();
      const t3 = tweenInstance.create();
      tweenInstance.startAll();

      const actual = [t1, t2, t3]
        .map((x: any) => x.ticker.startTime)
        .reduce((x: any[], y: any) => {
          if (x.indexOf(y) === -1) x.push(y);
          return x;
        }, [])
        .length;

      const expected = 2;
      expect(actual).toBeLessThanOrEqual(expected);
    });

    it("should emit tick event once enough time has passed", function() {
      return new Promise<void>((resolve) => {
        tweenInstance.create();
        tweenInstance.startAll();
        tweenInstance._clock.on("tick", function() {
          resolve();
        });

        // Need enough time increments to exceed one frame duration
        stepRaf(3, 1000/60 + 1);
      });
    });

    it("should throw an error if given no tweens", function() {
      expect(tweenInstance.startAll.bind(tweenInstance)).toThrow();
    });
  });

  describe("#stop", function() {
    it("should call stop method on its ticker and change its state to STOPPED", function() {
      const t1 = tweenInstance.create();
      tweenInstance.startAll();
      expect(t1.ticker.STATE).toBe("RUNNING");
      t1.stop();
      expect(t1.ticker.STATE).toBe("STOPPED");
    });
  });

  describe("#update", function() {
    let t1: any;
    let easingSpy: any;

    beforeEach(function() {
      t1 = tweenInstance.create({duration: 1000});
      tweenInstance.startAll();
      easingSpy = vi.spyOn(t1, "easing");
    });

    afterEach(function() {
      easingSpy.mockRestore();
      resetRaf();
    });

    it("should call easing fn multiple times based on the amount of props", function() {
      stepRaf(1, tweenInstance._clock.startTime);
      stepRaf(1, 1000/60);
      expect(easingSpy.mock.calls.length).toBeLessThanOrEqual(4);
    });

    it("should update state", function() {
      const oldState = structuredClone(t1.state);
      stepRaf(1, tweenInstance._clock.startTime);
      stepRaf(1, 1000/60);
      expect(t1.state).not.toBe(oldState);
    });
  });

  describe("#stop (second)", function() {
    it("should stop the tween", function() {
      const t1 = tweenInstance.create();
      tweenInstance.startAll();
      stepRaf(1, tweenInstance._clock.startTime);
      expect(t1.ticker.needsUpdate).toBe(true);
      t1.stop();
      stepRaf(1, 17);
      expect(t1.ticker.STATE).toBe("STOPPED");
    });
  });

  describe("#finish", function() {
    it("should finish the tween to the end and skip the rest of the tween", function() {
      const t1 = tweenInstance.create({duration: 1000});
      tweenInstance.startAll();
      stepRaf(1, 100);
      expect(t1.state.x).toBeLessThan(100);
      t1.finish();
      expect(t1.state.x).toBe(100);
    });
  });

  describe("#delay", function() {
    it("should delay the easing updating", async function() {
      const t1 = tweenInstance.create();
      tweenInstance.startAll();
      // Step enough frames to ensure the tween updates
      stepRaf(50, 20);
      expect(t1.state.x).toBeGreaterThan(0);
      t1.delay(500);
      expect(t1.ticker.STATE).toBe("STOPPED");
      await new Promise<void>((resolve) => {
        setTimeout(function() {
          expect(t1.ticker.STATE).toBe("RUNNING");
          resolve();
        }, 600);
      });
    }, 2000);
  });
});
