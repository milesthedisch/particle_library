/* eslint max-len: 0 */
const utils = require("../../src/lib/utils");
const Vector = require("../../src/lib/vectors");
const Particle = require("../../src/lib/particle");
const assert = require("assert");

describe("#Util", function() {
  let util;
  let vector;
  let particle;
  beforeEach(function() {
    util = utils;
    vector = new Vector();
    particle = new Particle();
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

  describe("#circleCollision", function() {
    it("should return true when the circles radi are greater than the distance", function() {
      const particle1 = new Particle({radius: 10});
      const particle2 = new Particle({radius: 10});
    });
  });
});
