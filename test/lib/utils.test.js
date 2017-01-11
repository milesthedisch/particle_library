/* eslint max-len: 0 */
const utils = require("../../src/lib/utils");
const assert = require("assert");

describe("#Util", function() {
  let util;

  beforeEach(function() {
    util = utils;
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
});
