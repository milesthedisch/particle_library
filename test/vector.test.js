const Vector = require("../src/vectors_refactor.js");
const assert = require("chai").assert;

describe("#Vector", function() {
	let vec;

	beforeEach(function() {
		vec = new Vector();
	});

	it("should have a state of x and y", function() {
		assert.deepEqual(vec.state, {x: 0, y: 1});
	});

	describe("vector.create", function() {
		it("should return a new vector", function() {
			const myNewVec = vec.create();
			assert.equal(myNewVec.constructor.name, "Vector");
		});

		it("should return a new vector given diffrent state", function() {
			const myNewVec = vec.create(1, 2);
			assert.deepEqual(myNewVec.state, {x: 1, y: 2});
		});
	});

	describe("vector.set", function() {
		it("should return true if the property is part of state", function() {
			vec.set("x", 3);
			vec.set("y", 0);
			assert.deepEqual(vec.state, {x: 0, y: 1});
		});

		it("should return false if the property is not part of state", function() {
			assert.equal(vec.set("apples", 0), false);
		});

		it("should return false if the property val is a not a number", function() {
			assert.equal(vec.set("x", "oranges"), false);
		});
	});
});
