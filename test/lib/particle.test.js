/* eslint max-len: 0*/
const extend = require("extend");
const assert = require("chai").assert;

const Particle = require("../../src/lib/particle.js");
const Vector = require("../../src/lib/vectors.js");

const vector = new Vector();

describe("#Particle", function() {
  const defaultParticleState = {
    direction: 6.283185307179586,
    position: vector.create(),
    velocity: vector.create(),
    gravity: vector.create(),
    magnitude: 0,
    radius: 0,
    mass: 1,
  };

  it("should create a new particle with the initial state", function() {
    const p = new Particle({});
    assert.deepEqual(p.state, {});
  });

  it("should create a new particle with default state", function() {
    const p = new Particle();
    assert.deepEqual(p.state, defaultParticleState);
  });

  describe("#create", function() {
    it("should return a default particle state", function() {
      const p = new Particle();
      const p1 = p.create();
      const createState = extend(true, defaultParticleState, {
        velocity: vector.create(0, -0),
      });
      assert.deepEqual(p1.state, createState);
    });

    it("should return extend particle state that has been passed in", function() { // eslint-disable-line
      const p = new Particle();

      const p1 = p.create({
        position: vector.create(1, 1),
        velocity: vector.create(1, 1),
        gravity: vector.create(1, 1),
        radius: 0,
      });

      assert.deepEqual(p1.state, {
        position: vector.create(1, 1),
        velocity: vector.create(0, -0),
        gravity: vector.create(1, 1),
        radius: 0,
        magnitude: 0,
        direction: 6.283185307179586,
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

  describe("#update", function() {
    it("should change the velocity with the given gravity", function() {
      const particle = new Particle();
      const vector = new Vector();
      particle.set("gravity", vector.create(0, 1));
      particle.set("velocity", vector.create(0, 0));
      particle.set("position", vector.create(0, 0));
      particle.update();

      assert.deepEqual(particle.get("gravity").state, {x: 0, y: 1});
      assert.deepEqual(particle.get("velocity").state, {x: 0, y: 1});
      assert.deepEqual(particle.get("position").state, {x: 0, y: 1});

      particle.update();
      assert.deepEqual(particle.get("gravity").state, {x: 0, y: 1});
      assert.deepEqual(particle.get("velocity").state, {x: 0, y: 2});
      assert.deepEqual(particle.get("position").state, {x: 0, y: 3});
    });
  });

  describe("#angleTo", function() {
    let particle;
    let vector;
    let p1;
    let p2;

    beforeEach(function() {
      particle = new Particle();
      vector = new Vector();
      p1 = particle.create();
      p2 = particle.create();
    });

    afterEach(function() {
      particle = undefined;
      vector = undefined;
      p1 = undefined;
      p2 = undefined;
    });

    it("should return 0 given two coordinates that are in the same position", function() {
      p1.set("position", vector.create(0, 0));
      p2.set("position", vector.create(0, 0));
      assert.equal(p1.angleTo(p2), 0);
    });

    it("should return 45 degress in radians when the triangle is a isoleces.", function() {
      const vec1 = vector.create(0, 0);
      const vec2 = vector.create(1, 1);
      p1.set("position", vec1);
      p2.set("position", vec2);
      const degress = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degress, 45);
    });

    it("should return -90 degress given a point slightly above it", function() {
      const vec1 = vector.create(0, 0);
      const vec2 = vector.create(0, -1);
      p1.set("position", vec1);
      p2.set("position", vec2);
      const degress = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degress, -90);
    });

    it("should return -135 degress given a point opposite 45 degress", function() {
      const vec1 = vector.create(0, 0);
      const vec2 = vector.create(-1, -1);
      p1.set("position", vec1);
      p2.set("position", vec2);
      const degress = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degress, -135);
    });
  });

  describe("#distanceTo", function() {
    it("should give the distance between two particles.", function() {
      const vector = new Vector();
      const particle = new Particle();
      const vec1 = vector.create(2, 2);
      const vec2 = vector.create(0, 0);
      const p1 = particle.create();
      const p2 = particle.create();
      p1.set("position", vec1);
      p2.set("position", vec2);
      assert.equal(p1.distanceTo(p2), Math.hypot(2, 2));
    });
  });

  describe("#gravitateTo", function() {
    const HEAVY = 100;
    const LIGHT = 100;

    it("should gravitate towards the heavier mass", function() {
      const p = new Particle();
      const v = new Vector();
      const heavy = p.create({mass: HEAVY, position: v.create(1000, 1000)});
      const light = p.create({mass: LIGHT, position: v.create(1000, 100)});

      light.gravitateTo(heavy);
      light.update();

      assert.isAbove(light.get("position").get("y"), 100);
    });
  });

  describe.only("#generator", function() {
    it("should generate default particles", function() {
      const p = new Particle();
      const particles = p.generator(1);

      // When we create a particle the velocity gets setLength and setAngle called. And because the
      // particles are a 0, 0 to start with and the magnitude is 1 its the velocity vector gets set
      // to 0, -0
      extend(true, defaultParticleState, {
        velocity: vector.create(0, -0),
      });

      assert.equal(particles.length, 1);
      assert.deepEqual(particles[0].state, defaultParticleState);
    });

    it("should generate multiple particles", function() {
      const p = new Particle();
      const particles = p.generator(2);

      // When we create a particle the velocity gets setLength and setAngle called. And because the
      // particles are a 0, 0 to start with and the magnitude is 1 its the velocity vector gets set
      // to 0, -0
      extend(true, defaultParticleState, {
        velocity: vector.create(0, -0),
      });

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, defaultParticleState);
      assert.deepEqual(particles[1].state, defaultParticleState);
    });

    it("should use opts passed in to each particle and extended.", function() {
      const p = new Particle();
      const particles = p.generator(2, {a: 1});

      extend(true, defaultParticleState, {
        a: 1,
      });

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, defaultParticleState);
      assert.deepEqual(particles[1].state, defaultParticleState);
    });

    it("should use callback if the third arguments is defined as a fn.", function() {
      const p = new Particle();
      const particles = p.generator(2, {a: 1}, function(_p) {
        _p.set("a", _p.get("a") + 1);
        return _p;
      });

      extend(true, defaultParticleState, {
        a: 2,
      });

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, defaultParticleState);
      assert.deepEqual(particles[1].state, defaultParticleState);
    });
  });
});
