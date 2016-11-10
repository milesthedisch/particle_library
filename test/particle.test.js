const Particle = require("../src/lib/particle.js");
const assert = require("chai").assert;

describe("#Particle", function() {
	it("should create a new particle with the initial state", function() {
		const p = new Particle({});
		assert.deepEqual(p.state, {});
	});

	it("should create a new particle with default state", function() {
		const p = new Particle();
		assert.deepEqual(p.state, {
			position: null,
			velocity: null,
			gravity: null,
			radius: 0,
			mass: 1,
		});
	});

	describe("#create", function() {
		it("should return a default particle state", function() {
			const p = new Particle();
			const p1 = p.create();
			assert.deepEqual(p1.state, {
				position: null,
				velocity: null,
				gravity: null,
				radius: 0,
				mass: 1,
			});
		});

		/* eslint-disable */
		it("should return extend particle state that has been passed in", function() { 
		/* eslint-enable */
			const p = new Particle();
			const p1 = p.create({
				position: 1,
				velocity: 1,
				gravity: 1,
				radius: 0,
			});
			assert.deepEqual(p1.state, {
				position: 1,
				velocity: 1,
				gravity: 1,
				radius: 0,
				mass: 1,
			});
		});
	});
});
