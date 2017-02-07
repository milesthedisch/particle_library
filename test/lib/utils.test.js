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
      const particle1 = new Particle({radius: 10, position: vector.create(0, 19.9)});
      const particle2 = new Particle({radius: 10, position: vector.create(0, 0)});
      assert.ok(utils.collisionCircle(particle1, particle2));
    });

    it("should return false when the circles radi are less than the distance", function() {
      const particle1 = new Particle({radius: 10, position: vector.create(0, 20)});
      const particle2 = new Particle({radius: 10, position: vector.create(0, 0)});
      assert.ok(!utils.collisionCircle(particle1, particle2));
    });

    it("should return true when the circles are in the same spot", function() {
      const particle1 = new Particle({radius: 0, position: vector.create(0, 0)});
      const particle2 = new Particle({radius: 0, position: vector.create(0, 0)});
      assert.ok(utils.collisionCircle(particle1, particle2));
    });
  });

  describe("#collisionCirclePoint", function() {
    it("should return false when the distance is greater than the circles radius", function() {
      const p = new Particle({radius: 5, position: vector.create(0, 0)});
      assert.ok(!utils.collisionCirclePoint(5, 0, p));
    });

    it("should return true when the distance is less than the radius", function() {
      const p = new Particle({radius: 5, position: vector.create(0, 0)});
      assert.ok(utils.collisionCirclePoint(4.9, 0, p));
    });
  });

  describe("#collisionRectPoint", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(5, 5);
      assert.ok(utils.collisionRectPoint(point.get("x"), point.get("y"), rect));
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(-1, -1);
      assert.ok(!utils.collisionRectPoint(point.get("x"), point.get("y"), rect));
    });
  });

  describe("#collisionRectVec", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(5, 5);
      assert.ok(utils.collisionRectVec(point, rect));
    });

    it("should return false when given a point outside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(-1, -1);
      assert.ok(!utils.collisionRectVec(point, rect));
    });
  });

  describe("#collisionRect", function() {
    it("should return true when to rectanges are in range of each other", function() {
      const rect1 = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const rect2 = new Particle({position: vector.create(10, 10), width: 10, height: 10});
      const rect3 = new Particle({position: vector.create(5, 5), width: 10, height: 10});
      assert.ok(utils.collisionRect(rect1, rect2));
      assert.ok(utils.collisionRect(rect1, rect3));
    });

    it("should return fales when given rectangles that arent in the same region. ", function() {
      const rect1 = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const rect2 = new Particle({position: vector.create(11, 11), width: 10, height: 10});
      const rect3 = new Particle({position: vector.create(-11, -11), width: 10, height: 10});
      assert.ok(!utils.collisionRect(rect1, rect2));
      assert.ok(!utils.collisionRect(rect1, rect3));
    });
  });

  describe("#randomRange", function() {
    it("should return a value in between the given range", function() {
      let max = 1000000;
      let min = 0;
      for (let i = min; i <= max; i++) {
        let actualVal = utils.randomRange(min, max);
        assert.ok((min <= actualVal) && (actualVal <= max), `${actualVal} is not in range of ${min} and ${max}`);
      }
    });
    it("should return a value in between the given range when one number is negative", function() {
      let max = 0;
      let min = -1000000;
      for (let i = min; i <= max; i++) {
        let actualVal = utils.randomRange(min, max);
        assert.ok((min <= actualVal) && (actualVal <= max), `${actualVal} is not in range of ${min} and ${max}`);
      }
    });
  });
});
