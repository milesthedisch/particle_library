/* eslint max-len: 0 */
import { describe, it, expect, beforeEach } from "vitest";
import utils from "../../src/lib/utils";
import Vector from "../../src/lib/vectors";
import Particle from "../../src/lib/particle";
import testUtils from "../utils";

describe("#Util", function() {
  let vector: Vector;

  beforeEach(function() {
    vector = new Vector();
  });

  describe("#normalize", function() {
    it("should return 1 when the max value is the same as the value", function() {
      expect(utils.normalize(10, 0, 10)).toBe(1);
    });

    it("should return 2 when give double the value of max.", function() {
      expect(utils.normalize(20, 0, 10)).toBe(2);
    });

    it("should return 0.5 when given half between the min and max", function() {
      expect(utils.normalize(7.5, 5, 10)).toBe(0.5);
    });
  });

  describe("#lerp", function() {
    it("should return 1 when the max value is the same as the value", function() {
      expect(utils.lerp(0.1, 0, 10)).toBe(1);
    });

    it("should return 2 when give double the value of max.", function() {
      expect(utils.lerp(2, 0, 10)).toBe(20);
    });

    it("should return 0.5 when given half between the min and max", function() {
      expect(utils.lerp(0.5, 5, 10)).toBe(7.5);
    });
  });

  describe("#map", function() {
    it("should return the lowest destination value when given the lowest source value as the first param", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 1;

      expect(utils.map(0, lowestSource, highestSource, lowestDestination, highestDestination)).toBe(1);
    });

    it("should return the highest destination value when given the highest source value as the first param", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 1;

      expect(utils.map(100, lowestSource, highestSource, lowestDestination, highestDestination)).toBe(1000);
    });

    it("should return a value * 0.5 or half if the first param given is half the value of the highest source value", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 0;

      expect(utils.map(highestSource * 0.5, lowestSource, highestSource, lowestDestination, highestDestination)).toBe(highestDestination * 0.5);
    });
  });

  describe("#clamp", function() {
    it("should return the value if the value lie in the range", function() {
      expect(utils.clamp(1, 0, 10)).toBe(1);
    });

    it("should return the min if the value lies below the range", function() {
      expect(utils.clamp(-10, 0, 10)).toBe(0);
    });

    it("should return the max if the value lies above the range", function() {
      expect(utils.clamp(20, 0, 5)).toBe(5);
    });
  });

  describe("#percent", function() {
    it("should take a decimal number and multiply it by 100", function() {
      expect(utils.percent(0.5)).toBe(50);
    });

    it("should return zero when given zero", function() {
      expect(utils.percent(0)).toBe(0);
    });
  });

  describe("#inRange", function() {
    it("should return true if the number is in the range", function() {
      expect(utils.inRange(1, 0, 1)).toBeTruthy();
    });

    it("should return true if the range is negative", function() {
      expect(utils.inRange(0, -10, 10)).toBeTruthy();
    });

    it("should return false if the value is not in the range", function() {
      expect(utils.inRange(1, 2, 10)).toBeFalsy();
    });
  });

  describe("#rangeIntersect", function() {
    it("should return true if two ranges intersect each other", function() {
      expect(utils.rangeIntersect(0, 6, 5, 10)).toBeTruthy();
    });

    it("should return false if the ranges do not intersect", function() {
      expect(utils.rangeIntersect(0, 10, 20, 30)).toBeFalsy();
    });

    it("should return correct intersection given negative numbers", function() {
      expect(utils.rangeIntersect(-10, -5, -5, -1)).toBeTruthy();
    });

    it("should return false given no values", function() {
      expect(utils.rangeIntersect(undefined as any, undefined as any, undefined as any, undefined as any)).toBeFalsy();
    });
  });

  describe("#vectorIntersect", function() {
    it("should return true when the two vectors are intersecting", function() {
      const vec0 = vector.create(1, 10);
      const vec1 = vector.create(3, 6);
      expect(Vector.vectorIntersect(vec0, vec1)).toBeTruthy();
    });

    it("should return false when the two vectors are not intersecting", function() {
      const vec0 = vector.create(1, 10);
      const vec1 = vector.create(-10, 0);
      expect(Vector.vectorIntersect(vec0, vec1)).toBeFalsy();
    });

    it("should return false when the two vectors are not intersecting", function() {
      const vec0 = vector.create(-1, 10);
      const vec1 = vector.create(-10, 0);
      expect(Vector.vectorIntersect(vec0, vec1)).toBeTruthy();
    });

    it("should return false when given no values", function() {
      try {
        (utils as any).vectorIntersect();
      } catch (e) {
        expect(e).toBeTruthy();
      }
    });
  });

  describe("#distanceXY", function() {
    it("should return the distance between to particles", function() {
      expect(utils.distanceXY(0, 0, 0, 1)).toBe(1);
    });

    it("should return the distance between two diagonal points", function() {
      expect(utils.distanceXY(0, 0, 1, 1)).toBe(Math.sqrt(2));
    });
  });

  describe("#collisionCircle", function() {
    it("should return true when the circles radi are greater than the distance", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 19.9} as any);
      const particle2 = new Particle({radius: 10, x: 0, y: 0} as any);
      expect(utils.collisionCircle(particle1, particle2)).toBeTruthy();
    });

    it("should return false when the circles radi are less than the distance", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 20} as any);
      const particle2 = new Particle({radius: 10, x: 0, y: 0} as any);
      expect(utils.collisionCircle(particle1, particle2)).toBeFalsy();
    });

    it("should return true when the circles are in the same spot", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 0} as any);
      const particle2 = new Particle({radius: 10, x: 0, y: 0} as any);
      expect(utils.collisionCircle(particle1, particle2)).toBeTruthy();
    });
  });

  describe("#collisionCirclePoint", function() {
    it("should return false when the distance is greater than the circles radius", function() {
      const p = new Particle({radius: 5, x: 0, y: 0} as any);
      expect(utils.collisionCirclePoint(5, 0, p)).toBeFalsy();
    });

    it("should return true when the distance is less than the radius", function() {
      const p = new Particle({radius: 10, x: 0, y: 0} as any);
      expect(utils.collisionCirclePoint(4.9, 0, p)).toBeTruthy();
    });
  });

  describe("#collisionRectPoint", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      expect(utils.collisionRectPoint(5, 5, rect)).toBeTruthy();
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      const point = vector.create(-1, -1);
      expect(utils.collisionRectPoint(point.get("x"), point.get("y"), rect)).toBeFalsy();
    });
  });

  describe("#collisionRectVec", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      const point = vector.create(5, 5);
      expect(utils.collisionRectVec(point, rect)).toBeTruthy();
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      const point = vector.create(-1, -1);
      expect(utils.collisionRectVec(point, rect)).toBeFalsy();
    });
  });

  describe("#collisionRect", function() {
    it("should return true when to rectanges are in range of each other", function() {
      const rect1 = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      const rect2 = new Particle({x: 10, y: 10, width: 10, height: 10} as any);
      const rect3 = new Particle({x: 5, y: 5, width: 10, height: 10} as any);
      expect(utils.collisionRect(rect1, rect2)).toBeTruthy();
      expect(utils.collisionRect(rect1, rect3)).toBeTruthy();
    });

    it("should return false when given rectangles that arent in the same region. ", function() {
      const rect1 = new Particle({x: 0, y: 0, width: 10, height: 10} as any);
      const rect2 = new Particle({x: 11, y: 11, width: 10, height: 10} as any);
      const rect3 = new Particle({x: -11, y: -11, width: 10, height: 10} as any);
      expect(utils.collisionRect(rect1, rect2)).toBeFalsy();
      expect(utils.collisionRect(rect1, rect3)).toBeFalsy();
    });
  });

  describe("#randomRange", function() {
    it("should return a value in between the given range", function() {
      const max = 10000;
      const min = 0;
      for (let i = min; i <= max; i++) {
        const actualVal = utils.randomBetween(min, max);
        expect(actualVal).toBeGreaterThanOrEqual(min);
        expect(actualVal).toBeLessThanOrEqual(max);
      }
    });
    it("should return a value in between the given range when one number is negative", function() {
      const max = 1000;
      const min = -1000;
      for (let i = min; i <= max; i++) {
        const actualVal = utils.randomBetween(min, max);
        expect(actualVal).toBeGreaterThanOrEqual(min);
        expect(actualVal).toBeLessThanOrEqual(max);
      }
    });
  });

  describe("#setLength", function() {
    it("should set the y to 1 if x and y are 0 and length is 1", function() {
      const [x, y] = utils.setLength(1, 0, 0);
      expect(x).toBe(1);
      expect(y).toBe(0);
    });

    it("should should set x and y to zero give a length of zero", function() {
      const [x, y] = utils.setLength(0, 0, 0);
      expect(x).toBe(0);
      expect(y).toBe(0);
    });

    it("should given non number inputs return NaN values", function() {
      const [x] = utils.setLength("" as any, null as any, undefined as any);
      expect(Number.isNaN(x)).toBe(true);
    });
  });

  describe("#setAngle", function() {
    it("should set the y to 1 if x and y are 0 and length is 1", function() {
      const [x, y] = utils.setAngle(Math.PI, 0, 0);
      expect(x).toBe(-0);
      expect(y).toBe(0);
    });

    it("should should set x and y to zero give a length of zero", function() {
      const [x, y] = utils.setAngle(Math.PI * 2, 0, 0);
      expect(x).toBe(0);
      // Math.sin(Math.PI * 2) produces -0 in JS
      expect(y).toBe(-0);
    });

    it("should given non number inputs return NaN values", function() {
      const [x] = utils.setLength("" as any, null as any, undefined as any);
      expect(Number.isNaN(x)).toBe(true);
    });
  });

  describe("#roundToPlaces", function() {
    it("should round PI to the nearest tenth given an exponent of 1", function() {
      expect(utils.roundToPlaces(Math.PI, 1)).toBe(3.1);
    });

    it("should round PI to the nearest hundredth given an exponent of 2", function() {
      expect(utils.roundToPlaces(Math.PI, 2)).toBe(3.14);
    });

    it("should round PI to the nearest integer given an exponent of 0", function() {
      expect(utils.roundToPlaces(Math.PI, 0)).toBe(3);
    });

    it("should round PI to the nearest hundred given an exponent of -1", function() {
      expect(utils.roundToPlaces(Math.PI, -1)).toBe(0);
    });

    it("should round PI * 1000 to the nearest hundred given an exponent of -2", function() {
      expect(utils.roundToPlaces(Math.PI * 1000, -2)).toBe(3100);
    });
  });

  describe("#roundToMultiple", function() {
    it("should round PI to the nearest multiple of 2", function() {
      expect(utils.roundToMultiple(Math.PI, 2)).toBe(4);
    });

    it("should round PI to the nearest multiple of 3", function() {
      expect(utils.roundToMultiple(Math.PI, 3)).toBe(3);
    });

    it("should return NaN when rounding to a multiple of 0", function() {
      expect(Number.isNaN(utils.roundToMultiple(Math.PI, 0))).toBe(true);
    });

    it("should round PI to the nearest multiple of -1", function() {
      expect(utils.roundToMultiple(Math.PI, -1)).toBe(3);
    });

    it("should round PI to the nearest multiple of -2", function() {
      expect(utils.roundToMultiple(Math.PI, -2)).toBe(4);
    });
  });

  describe("#bezier", function() {
    describe("#quadraticBezier", function() {
      it("should return number that are in range of the the three value given", function() {
        for (let i = 0; i < 1; i += 0.01) {
          expect(utils.quadraticBezier(1, 2, 3, i)).toBeGreaterThanOrEqual(1);
          expect(utils.quadraticBezier(1, 2, 3, i)).toBeLessThanOrEqual(3);
        }
      });
    });

    describe("#cubicBezier", function() {
      it("should return number that are in range of the the three value given", function() {
        for (let i = 0; i < 1; i += 0.01) {
          expect(utils.cubicBezier(1, 2, 3, 1, i)).toBeGreaterThanOrEqual(2);
          expect(utils.cubicBezier(1, 2, 3, 1, i)).toBeLessThanOrEqual(3.2);
        }
      });
    });

    describe("#quadraticBezierPoint", function() {
      it("Given some points and the last argument as one, the test should return the exact values of the last point", function() {
        const points: [any, any, any] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1}];
        expect(utils.quadraticBezierPoint(...points, 1)).toEqual({x: 3, y: 1});
      });

      it("Given some points and the last argument as one, the test should return the exact values of the first point", function() {
        const points: [any, any, any] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1}];
        expect(utils.quadraticBezierPoint(...points, 0)).toEqual({x: 1, y: 1});
      });
    });

    describe("#quadraticBezierPoint (duplicate)", function() {
      it("Given some points and the last argument as one, the test should return the exact values of the last point", function() {
        const points: [any, any, any] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1}];
        expect(utils.quadraticBezierPoint(...points, 1)).toEqual({x: 3, y: 1});
      });

      it("Given some points and the last argument as one, the test should return the exact values of the first point", function() {
        const points: [any, any, any] = [{x: 1, y: 1}, {x: 2, y: 2}, {x: 3, y: 1}];
        expect(utils.quadraticBezierPoint(...points, 0)).toEqual({x: 1, y: 1});
      });
    });
  });

  describe("#easing/tweening", function() {
    describe("#ease", function() {
      it("should return false if the range between the number is below 0.1", function() {
        const a = 1;
        const b = 1;
        expect(utils.ease(0.5, a, b)).toBe(false);
      });

      it("should return a value that is half of the range given a ease value of 0.5", function() {
        const a = 0;
        const b = 2;
        expect(utils.ease(0.5, a, b)).toBe(1);
      });
    });

    describe("#easeTo", function() {
      it("should return false if the distance between the points is below 0.1", function() {
        const a = {x: 1, y: 1};
        const b = {x: 1, y: 1};
        expect(utils.easeTo(0.5, a, b)).toBe(false);
      });

      it("should return a value that is half of the distance given a ease value of 0.5", function() {
        const a = {x: 0, y: 0};
        const b = {x: 1, y: 1};
        const distance = {x: b.x - a.x, y: b.y - a.y};
        const halfOfDistance = {x: distance.x * 0.5, y: distance.y * 0.5};

        expect(utils.easeTo(0.5, a, b)).toEqual(halfOfDistance);
      });
    });

    describe("#isObject", function() {
      it("should return false for all falsy things", function() {
        testUtils.forEachFalsy(function(falsy: any) {
          expect(utils.isObject(falsy)).toBe(false);
        });
      });

      it("should return true object like things", function() {
        [{}, Object.create({}), Object.create(null), new Object()].map((obj) => {
          expect(utils.isObject(obj)).toBe(true);
        });
      });

      it("should return false for non object things", function() {
        [
          new String(),
          new Number(),
          new Function(),
          new Date(),
          [],
          new Error(),
          Object.__proto__,
          NaN.__proto__,
          NaN.prototype,
        ].map((obj) => {
          expect(utils.isObject(obj)).toBe(false);
        });
      });
    });

    describe("#unique", function() {
      it("should return values that in an array that are not duplicates", function() {
        const sample = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9, 10, 10];
        expect(utils.unique(sample).length).toBe(10);
        expect(utils.unique(sample).reduce((x: number, y: number) => x+y)).toBe(55);
      });
    });

    describe("#radToDeg", function () {
      it("should return 180 degs for PI", function () {
        expect(utils.radToDeg(Math.PI)).toBe(180);
      });

      it("should return 360 deg for PI * 2 radians", function() {
        expect(utils.radToDeg(Math.PI * 2)).toBe(360);
      });

      it("should return 0 deg for 0 radians", function () {
        expect(utils.radToDeg(0)).toBe(0);
      });
    });

    describe("#degToRad", function () {
      it("should return PI radians for 180 deg", function () {
        expect(utils.degToRad(180)).toBe(Math.PI);
      });

      it("should return PI * 2 radians for 360 deg", function() {
        expect(utils.degToRad(360)).toBe(Math.PI * 2);
      });

      it("should return 0 radians for 0 deg", function () {
        expect(utils.degToRad(0)).toBe(0);
      });
    });
  });
});
