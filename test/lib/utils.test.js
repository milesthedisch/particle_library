/* eslint max-len: 0 */
const Utils = require("../../src/lib/Utils");
const assert = require("assert");

describe("#Util", function() {
	let util;

	beforeEach(function() {
		util = new Utils();
	});

	describe("#normalize", function() {
		it("should return 1 when the max value is the same as the value", function() {
			assert.equal(util.normalize(10, 10, 0), 1);
		});

		it("should return 2 when give double the value of max.", function() {
			assert.equal(util.normalize(20, 10, 0), 2);
		});

		it("should return 0.5 when given half between the min and max", function() {
			assert.equal(util.normalize(7.5, 10, 5), 0.5);
		});
	});
});
