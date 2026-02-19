/* eslint max-len: 0  */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import Vector from "../../src/lib/vectors";
import utils from "../../src/lib/utils";

describe("#Vector", function() {
  let vec: Vector;

  beforeEach(function() {
    vec = new Vector();
    vec = vec.create(0, 1);
  });

  it("should have a state of x and y", function() {
    expect(vec.state).toEqual({x: 0, y: 1});
  });

  describe("vector.create", function() {
    it("should return a new vector", function() {
      const myNewVec = vec.create();
      expect(myNewVec.constructor.name).toBe("Vector");
    });

    it("should return a new vector given different state", function() {
      const myNewVec = vec.create(1, 2);
      expect(myNewVec.state).toEqual({x: 1, y: 2});
    });
  });

  describe("vector.set", function() {
    it("should return true if the property is part of state", function() {
      vec.set("x", 3);
      vec.set("y", 0);
      expect(vec.state).toEqual({x: 3, y: 0});
    });

    it("should return false if the property is not part of state", function() {
      expect(vec.set("apples", 0)).toBe(false);
    });

    it.skip("should return false if the property val is a not a number", function() {
      expect(vec.set("x", "oranges")).toBe(false);
    });
  });

  describe("vector.get", function() {
    it("should get the property asked for on the vector.", function() {
      vec.set("x", 1);
      expect(vec.get("x")).toBe(1);
    });

    it("should return undefined when asked to return a nonexistent value", function() {
      expect(vec.get("abc")).toBe(undefined);
    });
  });

  describe("vector.setAngle", function() {
    it("should return -1 for Y and 0 for X", function() {
      // Move upwards.
      vec.setAngle(-Math.PI / 2);
      expect(~~vec.state.x).toBe(0);
      expect(vec.state.y).toBe(-1);
    });
  });

  describe("vector.setLength", function() {
    it("given the length it should set coordinates according to angle", function() {
      vec.setLength(1);
      expect(~~vec.state.x).toBe(0);
      expect(vec.state.y).toBe(1);
    });
  });

  describe("vector.getLength", function() {
    it("should return the length of the vector/magnitude", function() {
      const x = 10;
      const y = 10;
      vec.set("x", x);
      vec.set("y", y);
      expect(vec.getLength()).toBe(Math.sqrt((x * x) + (y * y)));
    });
  });

  describe("vector.getAngle", function() {
    it("should return the angle in radians.", function() {
      const x = 10;
      const y = 10;
      vec.set("x", x);
      vec.set("y", y);
      expect(vec.getAngle()).toBe(Math.atan2(y, x));
    });
  });

  describe("vector.add", function() {
    it("should return a new vector resulting from the addition", function() {
      const v1 = vec.create(1, 1);
      const v2 = vec.create(1, 1);
      expect((v1.add(v2)).state).toEqual((vec.create(2, 2)).state);
    });
  });

  describe("vector.subtract", function() {
    it("should return a vector subtracted from vector2", function() {
      const v1 = vec.create(1, 1);
      const v2 = vec.create(1, 1);
      expect((v1.subtract(v2)).state).toEqual((vec.create(0, 0)).state);
    });
  });

  describe("vector.multiply", function() {
    it("should return a vector multiplied by vector2", function() {
      const v1 = vec.create(2, 2);
      const v2 = vec.create(2, 2);
      expect((v1.multiply(v2)).state).toEqual((vec.create(4, 4)).state);
    });
  });

  describe("vector.divide", function() {
    it("should return a vector divided by vector2", function() {
      const v1 = vec.create(2, 2);
      const v2 = vec.create(2, 2);
      expect((v1.divide(v2)).state).toEqual((vec.create(1, 1)).state);
    });
  });

  describe("vector.addTo", function() {
    it("should add the given vector to the calling vector", function() {
      const v1 = vec.create(5, 5);
      const v2 = vec.create(5, 5);
      v1.addTo(v2);
      expect(v1.state).toEqual(vec.create(10, 10).state);
    });
    it("should take no arg and do the vector operation with one arg.");
  });

  describe("vector.subtractFrom", function() {
    it("should subtract the given vector to the calling vector", function() {
      const v1 = vec.create(5, 5);
      const v2 = vec.create(5, 5);
      v1.subtractFrom(v2);
      expect(v1.state).toEqual(vec.create(0, 0).state);
    });
  });

  describe("vector.multiplyBy", function() {
    it("should multiply the given vector by the calling vector", function() {
      const v1 = vec.create(5, 5);
      const v2 = vec.create(5, 5);
      v1.multiplyBy(v2);
      expect(v1.state).toEqual(vec.create(25, 25).state);
    });
  });

  describe("vector.divideBy", function() {
    it("should divide the given vector by the calling vector", function() {
      const v1 = vec.create(5, 5);
      const v2 = vec.create(5, 5);
      v1.divideBy(v2);
      expect(v1.state).toEqual(vec.create(1, 1).state);
    });
  });

  describe("vector.random", function() {
    it("should provide a random vector thats between 0 and 10", function() {
      const randomVector = vec.random();
      expect(randomVector.state.x).toBeGreaterThan(0);
      expect(randomVector.state.x).toBeLessThan(10);
      expect(randomVector.state.y).toBeGreaterThan(0);
      expect(randomVector.state.y).toBeLessThan(10);
    });
    it("should give a random vector with in range of the two arguments", function() {
      const min = 1;
      const max = 10000;
      const randomVector = vec.random(min, max);
      expect(randomVector.state.x).toBeGreaterThan(min);
      expect(randomVector.state.x).toBeLessThan(max);
      expect(randomVector.state.y).toBeGreaterThan(min);
      expect(randomVector.state.y).toBeLessThan(max);
    });
  });

  describe("vector.randomBetween", function() {
    let rndBetweenSpy: any;

    beforeEach(function() {
      rndBetweenSpy = vi.spyOn(utils, "randomBetween");
    });

    afterEach(function() {
      rndBetweenSpy.mockRestore();
    });

    it("should return a random vector between a given range", function() {
      const minX = 0;
      const maxX = 100;
      const minY = 0;
      const maxY = 100;

      const randomVector = vec.randomBetween(minX, maxX, minY, maxY);
      expect(randomVector.get("x")).toBeGreaterThanOrEqual(minX);
      expect(randomVector.get("x")).toBeLessThanOrEqual(maxX);
      expect(randomVector.get("y")).toBeGreaterThanOrEqual(minY);
      expect(randomVector.get("y")).toBeLessThanOrEqual(maxY);
    });
  });

  describe("#distanceVec", function() {
    it("should return the distance between two vectors", function() {
      const vec1 = vec.create(0, 0);
      const vec2 = vec.create(0, 1);
      expect(Vector.distanceBetween(vec1, vec2)).toBe(1);
    });

    it("should return the distance between two diagonal vectors", function() {
      const vec1 = vec.create(0, 0);
      const vec2 = vec.create(1, 1);
      expect(Vector.distanceBetween(vec1, vec2)).toBe(Math.sqrt(2));
    });
  });

  describe("#rotateBy", function() {
    let vec: Vector;

    beforeEach(function() {
      vec = new Vector({
        x: 1,
        y: 0,
      });
    });

    describe("rotate the vector clock wise by the given radians", function() {
      it("should return y as 1 if x is 1 and radians given is 90", function() {
        const result = vec.rotateBy(Math.PI / 2);
        expect(result.state.y).toBe(1);
        expect(utils.roundToPlaces(result.state.x, 0.1)).toBe(0);
      });

      it("should return the same coordinates when radians given is Math.PI * 2", function() {
        const result = vec.rotateBy(Math.PI * 2);
        expect(vec.state.x).toBe(1);
        expect(utils.roundToPlaces(result.state.y, 0.1) + 0).toBe(0);
      });
    });
  });
});
