/* eslint max-len: 0  */
const Particle = require("../src/lib/particle.js");
const Vector = require("../src/lib/vectors.js");
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

	describe("#set", function() {
		it("should set the state with the given value and return true", function() {
			const particle = new Particle();
			assert.equal(particle.set("position", {x: 1, y: 1}), true);
			assert.equal(particle.get("position").x, 1);
			assert.equal(particle.get("position").y, 1);
		});

		it("should set the state and return false if the property dosent exsist", function() {
			const particle = new Particle();
			assert.equal(particle.set("apples", "apples"), false);
		});
	});

	describe("#get", function() {
		it("should return the state of a property", function() {
			const particle = new Particle();
			particle.set("position", {x: 1, y: 1});
			assert.deepEqual(particle.get("position"), {x: 1, y: 1});
		});

		it("should return undefined when asked to for a prop that does not exsist", function() {
			const particle = new Particle();
			assert.equal(particle.get("apple"), undefined);
		});
	});

	describe("#accelerate", function() {
		it("should change the velocity of a particle every time its called", function() {
			const particle = new Particle();
			const vector = new Vector();
			const p1 = particle.create();

			p1.state.velocity = vector.create(1, 1);
			p1.accelerate(p1.state.velocity);
			assert.deepEqual(p1.state.velocity.state, {x: 2, y: 2});
		});
	});
});
