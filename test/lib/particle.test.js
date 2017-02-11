/* eslint max-len: 0*/
const extend = require("extend");
const assert = require("chai").assert;
const util = require("util");
const clone = require("lodash/cloneDeep");

const Particle = require("../../src/lib/particle.js");
const Vector = require("../../src/lib/vectors.js");
const utils = require("../../src/lib/utils.js");

const vector = new Vector();

describe("#Particle", function() {
  let defaultParticleState;
  let createdParticleState;

  beforeEach(function() {
    defaultParticleState = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      gravity: 0,
      magnitude: 0,
      radius: 0,
      mass: 1,
      direction: Math.PI * 2,
      friction: 1,
    };

    createdParticleState = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      gravity: 0,
      magnitude: 0,
      radius: 0,
      mass: 1,
      direction: Math.PI * 2,
      friction: 1,
    };
  });

  it("should create a new particle with given state", function() {
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
      assert.deepEqual(p1.state, createdParticleState);
    });

    it("should return extend particle state that has been passed in", function() { // eslint-disable-line
      const p = new Particle();

      const p1 = p.create({
        x: 1,
        y: 1,
        vx: 1,
        vy: 1,
        gravity: 1,
        radius: 1,
      });

      assert.deepEqual(p1.state, extend(defaultParticleState, {
        x: 1,
        y: 1,
        vx: 1,
        vy: 1,
        gravity: 1,
        radius: 1,
      }));
    });
  });

  describe("#accelerate", function() {
    it("should increase the velocity of a particle", function() {
      const particle = new Particle();
      const p1 = particle.create();
      p1.accelerate(1, 1);
      assert.equal(p1.state.vx, 1);
      assert.equal(p1.state.vy, 1);
    });

    it("should decrease the velocity of a particle", function() {
      const particle = new Particle();
      const p1 = particle.create();
      p1.accelerate(-1, -1);
      assert.equal(p1.state.vx, -1);
      assert.equal(p1.state.vy, -1);
    });
  });

  describe.only("#update", function() {
    it("should change the velocity with the given gravity", function() {
      const particle = new Particle();
      const p1 = particle.create({
        gravity: 1,
      });

      p1.update();
      assert.equal(p1.state.gravity, 1);
      assert.equal(p1.state.vx, 0);
      assert.equal(p1.state.vy, 1);
      assert.equal(p1.state.x, 0);
      assert.equal(p1.state.y, 1);

      p1.update();
      assert.equal(p1.state.gravity, 1);
      assert.equal(p1.state.vx, 0);
      assert.equal(p1.state.vy, 2);
      assert.equal(p1.state.x, 0);
      assert.equal(p1.state.y, 3);
    });

    it("should not change given no gravity", function() {
      const particle = new Particle();
      const p1 = particle.create();
      p1.update();
      assert.equal(p1.state.gravity, 0);
      assert.equal(p1.state.vx, 0);
      assert.equal(p1.state.vy, 0);
      assert.equal(p1.state.x, 0);
      assert.equal(p1.state.y, 0);
    });

    it("should change given friction and some velocity", function() {
      const particle = new Particle();
      const p1 = particle.create({
        vx: 2,
        vy: 2,     
        friction: 0.95   
      });
      p1.update();
      assert.equal(p1.state.vx, 1.9);
      assert.equal(p1.state.vy, 1.9);
      assert.equal(p1.state.x, 1.9);
      assert.equal(p1.state.y, 1.9);
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

  describe("#generator", function() {
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
      assert.deepEqual(particles[0].state, defaultParticleState, "particle 1: ");
      assert.deepEqual(particles[1].state, defaultParticleState, "particle 2: ");
    });

    it("should use opts passed in to each particle and extended.", function() {
      const p = new Particle();
      const particles = p.generator(2, {a: 1});

      extend(true, defaultParticleState, {
        a: 1,
        velocity: vector.create(0, -0),
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
        velocity: vector.create(0, -0),
      });

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, defaultParticleState);
      assert.deepEqual(particles[1].state, defaultParticleState);
    });
  });

  describe("#springs", function() {
    describe("#springFromTo", function() {
      it("it should fail if not given a particle as the first argument", function() {
        const particle = new Particle();
        try {
          particle.springFromTo(undefined);
        } catch (e) {
          assert.equal(e.message, "Cannot read property \'get\' of undefined");
        };
      });

      it("it should move the springed particle closer to its attracting point", function() {
        const particle = new Particle();
        const p1 = particle.create({
          position: vector.create(100, 100),
        });
        const p2 = particle.create({
          position: vector.create(100, 400),
        });
        p1.springFromTo(p2);
        assert.equal(p1.get("velocity").get("y"), -10);
        assert.equal(p2.get("velocity").get("y"), 10);
      });
    });

    describe("#springPoint", function() {
      it("should return an error if not given a point.", function() {
        const particle = new Particle();
        const p1 = particle.create({
          position: vector.create(100, 100),
        });

        try {
          p1.springToPoint(undefined);
        } catch (e) {
          assert.ok(e.message);
        }
      });
      it("should move the springed particle scloser to its attracting point", function() {
        const particle = new Particle();
        const p1 = particle.create({
          position: vector.create(100, 100),
        });
        const point = vector.create(100, 400);

        p1.springToPoint(point, 100, 0.9);
        assert.equal(p1.get("velocity").get("y"), 180);
        p1.springToPoint(point, 100, 0.9);
        assert.equal(p1.get("velocity").get("y"), 360);
      });
    });
  });

  describe("#speed", function() {
    it("should add the vector to the position", function() {
      const particle = new Particle();
      const vector = new Vector();

      const p = particle.create();
      const vec = vector.create(1, 1);
      p.speed(vec);
      assert.deepEqual(p.get("position"), vector.create(1, 1));
    });

    it("should add the internal velocity vector to the position", function() {
      const vec = new Vector();

      const p = new Particle({"velocity": vec.create(1, 1)});
      p.speed();
      assert.deepEqual(p.get("position"), vec.create(1, 1));
    });

    it("should add the internal velocity twice if we call speed twice", function() {
      const vec = new Vector();
      const p = new Particle({"velocity": vec.create(1, 1)});
      p.speed();
      p.speed();
      assert.deepEqual(p.get("position"), vec.create(2, 2));
    });
  });

  describe("#distanceFrom", function() {
    it("should calculate the distance from one particles center to another (diagonal)", function() {
      const particle1 = new Particle({"position": vector.create(10, 10)});
      const particle2 = new Particle({"position": vector.create(0, 0)});
      assert.equal(particle1.distanceFrom(particle2), Math.sqrt(200));
    });

    it("should calculate the distance from one particles center to another", function() {
      const particle1 = new Particle({"position": vector.create(10, 0)});
      const particle2 = new Particle({"position": vector.create(0, 0)});
      assert.equal(particle1.distanceFrom(particle2), 10);
    });
  });
});
