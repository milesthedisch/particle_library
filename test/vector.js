const Vector = require("../src/vectors_refactor.js");
const assert = require("chai").assert;

describe("#Vector", function() {
	describe("Vector should have a state of x and y", function() {
		const vec = new Vector();
		assert.equal(vec.x, 0);
		assert.equal(vec.y, 1);
	});
});
