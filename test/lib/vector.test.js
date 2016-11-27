/* eslint max-len: 0  */
const Vector = require("../../src/lib/vectors.js");
const assert = require("chai").assert;

describe("#Vector", function() {
	let vec;

	beforeEach(function() {
		vec = new Vector();
		vec = vec.create(0, 1);
	});

	afterEach(function() {
		vec = undefined;
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
			assert.deepEqual(vec.state, {x: 3, y: 0});
		});

		it("should return false if the property is not part of state", function() {
			assert.equal(vec.set("apples", 0), false);
		});

		it.skip("should return false if the property val is a not a number", function() { // eslint-disable-line
			assert.equal(vec.set("x", "oranges"), false);
		});
	});

	describe("vector.get", function() {
		it("should get the property asked for on the vector.", function() {
			vec.set("x", 1);
			assert.equal(vec.get("x"), 1);
		});

		it("should return undefined when asked to return a unexsistant value", function() { // eslint-disable-line
			assert.equal(vec.get("abc"), undefined);
		});
	});

	describe("vector.setAngle", function() {
		it("should return -1 for Y and 0 for X", function() {
			// Move upwards.
			vec.setAngle(-Math.PI / 2);
			/*
				Math.cos(-Math.PI / 2) is expected to be 0,
			  but we get a really small number instead. This isn't realy what we want.
			  ---
			  TODO: Investigate wether floating points that are draw on canvas
			  affect the rendering performance.
			 */
			assert.equal(~~vec.state.x, 0);
			assert.equal(vec.state.y, -1);
		});
	});

	describe("vector.setLength", function() {
		it('given the length it should set cooridnates according to angle ', function() { // eslint-disable-line
			vec.setLength(1);
			assert.equal(~~vec.state.x, 0);
			assert.equal(vec.state.y, 1);
		});
	});

	describe("vector.getLength", function() {
		it("should return the length of the vector/magnitude", function() {
			const x = 10;
			const y = 10;
			vec.set("x", x);
			vec.set("y", y);
			assert.equal(vec.getLength(), Math.sqrt((x * x) + (y * y)));
		});
	});

	describe("vector.getAngle", function() {
		it("should return the angle in radians.", function() {
			const x = 10;
			const y = 10;
			vec.set("x", x);
			vec.set("y", y);
			assert.equal(vec.getAngle(), Math.atan2(y, x));
		});
	});

	describe("vector.add", function() {
		it("should return a new vector resulting from the addition", function() {
			const v1 = vec.create(1, 1);
			const v2 = vec.create(1, 1);
			assert.deepEqual((v1.add(v2)).state, (vec.create(2, 2)).state);
		});

		it("should return a reduced vector if given a array", function() {
			const vecs = [];
			for (let i = 0; i <= 10; i++) {
				vecs.push(vec.create(i, i));
			}
			const v1 = vecs.pop();
			assert.deepEqual((v1.add(vecs)).state, vec.create(55, 55).state);
		});

		it("should have alias '+'", function() {
			const v1 = vec.create(1, 1);
			const v2 = vec.create(1, 1);
			assert.deepEqual((v1["+"](v2)).state, (vec.create(2, 2)).state);
		});
	});

	describe("vector.substract", function() {
		it("should return a vector substracted from vector2", function() {
			const v1 = vec.create(1, 1);
			const v2 = vec.create(1, 1);
			assert.deepEqual((v1.subtract(v2)).state, (vec.create(0, 0)).state);
		});

		it("should return a reduced vector if given a array", function() {
			const vecs = [];
			for (let i = 0; i <= 10; i++) {
				vecs.push(vec.create(i, i));
			}
			const v1 = vecs.pop();
			assert.deepEqual((v1.subtract(vecs)).state, vec.create(-35, -35).state);
		});

		it("should have alias '-'", function() {
			const v1 = vec.create(1, 1);
			const v2 = vec.create(1, 1);
			assert.deepEqual((v1["-"](v2)).state, (vec.create(0, 0)).state);
		});
	});

	describe("vector.mulitply", function() {
		it("should return a vector multiplied by vector2", function() {
			const v1 = vec.create(2, 2);
			const v2 = vec.create(2, 2);
			assert.deepEqual((v1.multiply(v2)).state, (vec.create(4, 4)).state);
		});

		it("should have alias '*'", function() {
			const v1 = vec.create(2, 2);
			const v2 = vec.create(2, 2);
			assert.deepEqual((v1["*"](v2)).state, (vec.create(4, 4)).state);
		});
	});

	describe("vector.divide", function() {
		it("should return a vector divided by vector2", function() {
			const v1 = vec.create(2, 2);
			const v2 = vec.create(2, 2);
			assert.deepEqual((v1.divide(v2)).state, (vec.create(1, 1)).state);
		});

		it("should have alias '*'", function() {
			const v1 = vec.create(2, 2);
			const v2 = vec.create(2, 2);
			assert.deepEqual((v1["/"](v2)).state, (vec.create(1, 1)).state);
		});
	});

	describe("vector.addTo", function() {
		it("should add the given vector to the calling vector", function() {
			const v1 = vec.create(5, 5);
			const v2 = vec.create(5, 5);
			v1.addTo(v2);
			assert.deepEqual(vec.create(10, 10).state, v1.state);
		});
	});

	describe("vector.subtractFrom", function() {
		it("should subtract the given vector to the calling vector", function() {
			const v1 = vec.create(5, 5);
			const v2 = vec.create(5, 5);
			v1.subtractFrom(v2);
			assert.deepEqual(vec.create(0, 0).state, v1.state);
		});
	});

	describe("vector.multiplyBy", function() {
		it("should multiply the given vector by the calling vector", function() {
			const v1 = vec.create(5, 5);
			const v2 = vec.create(5, 5);
			v1.multiplyBy(v2);
			assert.deepEqual(vec.create(25, 25).state, v1.state);
		});
	});

	describe("vector.divideBy", function() {
		it("should divide the given vector by the calling vector", function() {
			const v1 = vec.create(5, 5);
			const v2 = vec.create(5, 5);
			v1.divideBy(v2);
			assert.deepEqual(vec.create(1, 1).state, v1.state);
		});
	});
});
