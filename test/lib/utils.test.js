/* eslint max-len: 0 */
const utils = require("../../src/lib/utils");
const Vector = require("../../src/lib/vectors");
const Particle = require("../../src/lib/particle");
const assert = require("assert");

describe("#Util", function() {
  let util;
  let vector;
  beforeEach(function() {
    util = utils;
    vector = new Vector();
  });

  describe("#normalize", function() {
    it("should return 1 when the max value is the same as the value", function() {
      assert.equal(util.normalize(10, 0, 10), 1);
    });

    it("should return 2 when give double the value of max.", function() {
      assert.equal(util.normalize(20, 0, 10), 2);
    });

    it("should return 0.5 when given half between the min and max", function() {
      assert.equal(util.normalize(7.5, 5, 10), 0.5);
    });
  });

  describe("#lerp", function() {
    it("should return 1 when the max value is the same as the value", function() {
      assert.equal(util.lerp(0.1, 0, 10), 1);
    });

    it("should return 2 when give double the value of max.", function() {
      assert.equal(util.lerp(2, 0, 10), 20);
    });

    it("should return 0.5 when given half between the min and max", function() {
      assert.equal(util.lerp(0.5, 5, 10), 7.5);
    });
  });

  describe("#map", function() {
    it("should return the lowest destination value when given the lowest source value as the first param", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 1;

      assert.equal(1, util.map(0, lowestSource, highestSource, lowestDestination, highestDestination));
    });

    it("should return the highest destination value when given the highest source value as the first param", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 1;

      assert.equal(1000, util.map(100, lowestSource, highestSource, lowestDestination, highestDestination));
    });

    it("should return a value * 0.5 or half if the first param given is half the value of the highest source value", function() {
      const highestSource = 100;
      const highestDestination = 1000;
      const lowestSource = 0;
      const lowestDestination = 0;

      assert.equal(highestDestination * 0.5, util.map(highestSource * 0.5, lowestSource, highestSource, lowestDestination, highestDestination));
    });
  });

  describe("#clamp", function() {
    it("should return the value if the value lie in the range", function() {
      assert.equal(util.clamp(1, 0, 10), 1);
    });

    it("should return the min if the value lies below the range", function() {
      assert.equal(util.clamp(-10, 0, 10), 0);
    });

    it("should return the max if the value lies above the range", function() {
      assert.equal(util.clamp(20, 0, 5), 5);
    });
  });

  describe("#percent", function() {
    it("should take a decimal number and multiply it by 100", function() {
      assert.equal(util.percent(0.5), 50);
    });

    it("should return zero when given zero", function() {
      assert.equal(util.percent(0), 0);
    });
  });

  describe("#inRange", function() {
    it("should return true if the number is in the range", function() {
      assert.ok(utils.inRange(1, 0, 1));
    });

    it("should return true if the range is negative", function() {
      assert.ok(utils.inRange(0, -10, 10));
    });

    it("should return false if the value is not in the range", function() {
      assert.ok(!utils.inRange(1, 2, 10));
    });
  });

  describe("#rangeIntersect", function() {
    it("should return true if two ranges intersect each other", function() {
      assert.ok(utils.rangeIntersect(0, 6, 5, 10));
    });

    it("should return false if the ranges do not intersect", function() {
      assert.ok(!utils.rangeIntersect(0, 10, 20, 30));
    });

    it("should return correct intersection given negative numbers", function() {
      assert.ok(utils.rangeIntersect(-10, -5, -5, -1));
    });

    it("should return false given no values", function() {
      assert.ok(!utils.rangeIntersect());
    });
  });

  describe("#vectorIntersect", function() {
    it("should return true when the two vectors are intersecting", function() {
      const vec0 = vector.create(1, 10);
      const vec1 = vector.create(3, 6);
      assert.ok(utils.vectorIntersect(vec0, vec1));
    });

    it("should return false when the two vectors are not intersecting", function() {
      const vec0 = vector.create(1, 10);
      const vec1 = vector.create(-10, 0);
      assert.ok(!utils.vectorIntersect(vec0, vec1));
    });

    it("should return false when the two vectors are not intersecting", function() {
      const vec0 = vector.create(-1, 10);
      const vec1 = vector.create(-10, 0);
      assert.ok(utils.vectorIntersect(vec0, vec1));
    });

    it("should return false when given no values", function() {
      try {
        utils.vectorIntersect();
      } catch(e) {
        assert.ok(e);
      }
    });
  });

  describe("#distanceXY", function() {
    it("should return the distance between to particles", function() {
      assert.equal(util.distanceXY(0, 0, 0, 1), 1);
    });

    it("should return the distance between two diagonal points", function() {
      assert.equal(util.distanceXY(0, 0, 1, 1), Math.sqrt(2));
    });
  });

  describe("#distanceVec", function() {
    it("should return the distance between two vectors", function() {
      const vec1 = vector.create(0, 0);
      const vec2 = vector.create(0, 1);
      assert.equal(util.distanceVec(vec1, vec2), 1);
    });

    it("should return the distance between two diagonal vectors", function() {
      const vec1 = vector.create(0, 0);
      const vec2 = vector.create(1, 1);
      assert.equal(util.distanceVec(vec1, vec2), Math.sqrt(2));
    });
  });

  describe("#collisionCirlce", function() {
    it("should return true when the circles radi are greater than the distance", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 19.9});
      const particle2 = new Particle({radius: 10, x: 0, y: 0});
      assert.ok(utils.collisionCircle(particle1, particle2));
    });

    it("should return false when the circles radi are less than the distance", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 20});
      const particle2 = new Particle({radius: 10, x: 0, y: 0});
      assert.ok(!utils.collisionCircle(particle1, particle2));
    });

    it("should return true when the circles are in the same spot", function() {
      const particle1 = new Particle({radius: 10, x: 0, y: 0});
      const particle2 = new Particle({radius: 10, x: 0, y: 0});
      assert.ok(utils.collisionCircle(particle1, particle2));
    });
  });

  describe("#collisionCirclePoint", function() {
    it("should return false when the distance is greater than the circles radius", function() {
      const p = new Particle({radius: 5, x: 0, y: 0});
      assert.ok(!utils.collisionCirclePoint(5, 0, p));
    });

    it("should return true when the distance is less than the radius", function() {
      const p = new Particle({radius: 10, x: 0, y: 0});
      assert.ok(utils.collisionCirclePoint(4.9, 0, p));
    });
  });

  describe("#collisionRectPoint", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10});
      assert.ok(utils.collisionRectPoint(5, 5, rect));
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10});
      const point = vector.create(-1, -1);
      assert.ok(!utils.collisionRectPoint(point.get("x"), point.get("y"), rect));
    });
  });

  describe("#collisionRectVec", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10});
      const point = vector.create(5, 5);
      assert.ok(utils.collisionRectVec(point, rect));
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({x: 0, y: 0, width: 10, height: 10});
      const point = vector.create(-1, -1);
      assert.ok(!utils.collisionRectVec(point, rect));
    });
  });

  describe("#collisionRect", function() {
    it("should return true when to rectanges are in range of each other", function() {
      const rect1 = new Particle({x: 0, y: 0, width: 10, height: 10});
      const rect2 = new Particle({x: 10, y: 10, width: 10, height: 10});
      const rect3 = new Particle({x: 5, y: 5, width: 10, height: 10});
      assert.ok(utils.collisionRect(rect1, rect2));
      assert.ok(utils.collisionRect(rect1, rect3));
    });

    it("should return false when given rectangles that arent in the same region. ", function() {
      const rect1 = new Particle({x: 0, y: 0, width: 10, height: 10});
      const rect2 = new Particle({x: 11, y: 11, width: 10, height: 10});
      const rect3 = new Particle({x: -11, y: -11, width: 10, height: 10});
      assert.ok(!utils.collisionRect(rect1, rect2));
      assert.ok(!utils.collisionRect(rect1, rect3));
    });
  });

  describe("#randomRange", function() {
    it("should return a value in between the given range", function() {
      let max = 10000;
      let min = 0;
      for (let i = min; i <= max; i++) {
        let actualVal = utils.randomBetween(min, max);
        assert.ok((min <= actualVal) && (actualVal <= max), `${actualVal} is not in range of ${min} and ${max}`);
      }
    });
    it("should return a value in between the given range when one number is negative", function() {
      let max = 1000;
      let min = -1000;
      for (let i = min; i <= max; i++) {
        let actualVal = utils.randomBetween(min, max);
        assert.ok((min <= actualVal) && (actualVal <= max), `${actualVal} is not in range of ${min} and ${max}`);
      }
    });
  });

  describe("#setLength", function() {
    it("should set the y to 1 if x and y are 0 and length is 1", function() {
      const [x, y] = utils.setLength(1, 0, 0);
      assert.equal(x, 1);
      assert.equal(y, 0);
    });

    it("should should set x and y to zero give a length of zero", function() {
      const [x, y] = utils.setLength(0, 0, 0);
      assert.equal(x, 0);
      assert.equal(y, 0);
    });

    it("should given non number inputs throw an error", function() {
      const fn = utils.setLength.bind(null, "", null, undefined);
      assert.throws(fn, Error, "provide valid");
    });
  });

  describe("#setAngle", function() {
    it("should set the y to 1 if x and y are 0 and length is 1", function() {
      const [x, y] = utils.setAngle(Math.PI, 0, 0);
      assert.equal(x, -0);
      assert.equal(y, 0);
    });

    it("should should set x and y to zero give a length of zero", function() {
      const [x, y] = utils.setAngle(Math.PI * 2, 0, 0);
      assert.equal(x, 0);
      assert.equal(y, 0);
    });

    it("should given non number inputs throw an error", function() {
      const fn = utils.setLength.bind(null, "", null, undefined);
      assert.throws(fn, Error, "provide valid");
    });
  });

  describe("#roundToPlaces", function() {
    it("should round PI to the nearest tenth given an exponent of 1", function() {
      assert.equal(3.1, utils.roundToPlaces(Math.PI, 1));
    });

    it("should round PI to the nearest hunderth given an exponent of 2", function() {
      assert.equal(3.14, utils.roundToPlaces(Math.PI, 2));
    });

    it("should round PI to the nearest integer given an exponent of 0", function() {
      assert.equal(3, utils.roundToPlaces(Math.PI, 0));
    });

    it("should round PI to the nearest hundred given an exponent of -1", function() {
      assert.equal(0, utils.roundToPlaces(Math.PI, -1));
    });

    it("should round PI * 1000 to the nearest hundred given an exponent of -2", function() {
      assert.equal(3100, utils.roundToPlaces(Math.PI * 1000, -2));
    });
  });

  describe("#roundToMultiple", function() {
    it("should round PI to the nearest multiple of 2", function() {
      assert.equal(4, utils.roundToMultiple(Math.PI, 2));
    });

    it("should round PI to the nearest multiple of 3", function() {
      assert.equal(3, utils.roundToMultiple(Math.PI, 3));
    });

    it("should round PI to the nearest multiple of 0", function() {
      const fn = utils.roundToMultiple.bind(null, Math.PI, 0);
      assert.throws(fn, Error, "Nothing can be a multiple");
    });

    it("should round PI to the nearest multiple of -1", function() {
      assert.equal(3, utils.roundToMultiple(Math.PI, -1));
    });

    it("should round PI to the nearest multiple of -2", function() {
      assert.equal(4, utils.roundToMultiple(Math.PI, -2));
    });
  });

  describe.only("#bezier", function() {
    describe("#quadraticBezier", function() {
      for (let i = 0; i < 1; i += 0.01) {
        assert(utils.quadraticBezier(1, 2, 3, i) >= 1 && utils.quadraticBezier(1, 2, 3, i) <= 3);
      }
    });

    describe("#cubicBezier", function() {
      for (let i = 0; i < 1; i += 0.01) {
        console.log(i, utils.cubicBezier(1, 2, 3, 1, i));
        assert(utils.cubicBezier(1, 2, 3, 1, i) >= 2 && utils.cubicBezier(1, 2, 3, 1, i) <= 3.2);
      }
    });
  });
});
