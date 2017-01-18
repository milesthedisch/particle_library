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

  describe("#percent", function() {
    it("should take a decimal number and multiply it by 100", function() {
      assert.equal(util.percent(0.5), 50);
    });

    it("should return zero when given zero", function() {
      assert.equal(util.percent(0), 0);
    });
  });

  describe("#inRange", function() {
    //TODO...
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

  describe.only("#collisionRectPoint", function() {
    it("should return true when given a point inside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(5, 5);
      assert.ok(utils.collisionRectPoint(point.get("x"), point.get("y"), rect));
    });

    it.skip("should return false when given a point outside the rect", function() {
      const rect = new Particle({position: vector.create(0, 0), width: 10, height: 10});
      const point = vector.create(5, 5);
      utils.collisionRectPoint(point.get("x"), point.get("y"), rect);
    });
  });
});
