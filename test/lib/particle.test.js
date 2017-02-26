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
      springs: [],
    };

    createdParticleState = {
      x: 0,
      y: 0,
      vx: 0,
      vy: -0,
      gravity: 0,
      magnitude: 0,
      radius: 0,
      mass: 1,
      direction: Math.PI * 2,
      friction: 1,
      springs: [],
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
        gravity: 1,
        radius: 1,
        magnitude: 0,
      });

      assert.deepEqual(p1.state, extend(defaultParticleState, {
        x: 1,
        y: 1,
        vx: 0,
        vy: -0,
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

  describe("#update", function() {
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
        magnitude: 2,
        direction: Math.PI * 2,
        friction: 0.95,
      });
      p1.update();
      assert.equal(p1.state.vx, 1.9);
      assert.equal(p1.state.x, 1.9);
    });

    it("should call handleSprings");
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
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 0;
      p2.state.y = 0;
      assert.equal(p1.angleTo(p2), 0);
    });

    it("should return 45 degrees in radians when the triangle is a isoleces.", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 1;
      p2.state.y = 1;

      // Convert to degrees.
      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degrees, 45);
    });

    it("should return -90 degrees given a point slightly above it", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 0;
      p2.state.y = -1;

      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degrees, -90);
    });

    it("should return -135 degrees given a point opposite 45 degrees", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = -1;
      p2.state.y = -1;

      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      assert.equal(degrees, -135);
    });
  });

  describe("#distanceTo", function() {
    it("should give the distance between two particles.", function() {
      const particle = new Particle();
      const p1 = particle.create({x: 2, y: 2});
      const p2 = particle.create({x: -1, y: -1});
      assert.equal(p1.distanceTo(p2), Math.hypot(3, 3));
    });

    it("should calculate the distance from one particles center to another (diagonal)", function() {
      const particle1 = new Particle({x: 10, y: 10});
      const particle2 = new Particle({x: 0, y: 0});
      assert.equal(particle1.distanceTo(particle2), Math.sqrt(200));
    });

    it("should calculate the distance from one particles center to another", function() {
      const particle1 = new Particle({x: 10, y: 0});
      const particle2 = new Particle({x: 0, y: 0});
      assert.equal(particle1.distanceTo(particle2), 10);
    });
  });

  describe("#gravitateTo", function() {
    it("should gravitate towards the heavier mass", function() {
      const p = new Particle();

      const p1 = p.create({mass: 100, x: 1000, y: 1000});
      const p2 = p.create({mass: 100, x: 1000, y: 100});

      p2.gravitateTo(p1);
      p2.update();

      assert.isAbove(p2.state.y, 100);
    });

    it("should stand still if the mass of the object that its gravitating to is 0", function() {
      const p = new Particle();

      const p1 = p.create({mass: 0, x: 1000, y: 1000});
      const p2 = p.create({mass: 100, x: 1000, y: 100});

      p2.gravitateTo(p1);
      p2.update();

      assert.equal(p2.state.y, 100);
      assert.equal(p2.state.x, 1000);
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
        vx: 0,
        vy: -0,
      });

      assert.equal(particles.length, 1);
      assert.deepEqual(particles[0].state, defaultParticleState);
    });

    it("should generate multiple particles", function() {
      const p = new Particle();
      const particles = p.generator(2);

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, createdParticleState, "particle 1: ");
      assert.deepEqual(particles[1].state, createdParticleState, "particle 2: ");
    });

    it("should use opts passed in to each particle and extended.", function() {
      const p = new Particle();
      const particles = p.generator(2, {a: 1});

      extend(true, createdParticleState, {
        a: 1,
        vy: -0,
      });

      assert.equal(particles.length, 2);
      assert.deepEqual(particles[0].state, createdParticleState);
      assert.deepEqual(particles[1].state, createdParticleState);
    });

    describe("give a third argument as a function", function() {
      it("should use passed in defaults if the create fn is not given anything", function() {
        const p = new Particle();

        const particles = p.generator(2, {a: 2}, function map(_, __, create) {
          create();
        });

        extend(true, createdParticleState, {
          a: 2,
        });

        assert.deepEqual(particles[0].state, createdParticleState);
        assert.deepEqual(particles[1].state, createdParticleState);
      });

      it("should return an empty array if given no cb arguments", function() {
        const p = new Particle();
        const particles = p.generator(2, {a: 2}, function noop() {});

        assert.deepEqual(particles, []);
      });

      it("should not be able mutate default state within callback", function() {
        const p = new Particle();

        try {
          p.generator(2, {a: 2}, function map(opts, i, create) {
            opts.a += 1;
            create(opts);
          });
        } catch (e) {
          assert.ok(e instanceof TypeError);
        }
      });

      it("should be passed the index of particle", function() {
        const p = new Particle();
        const indexs = [];
        const particles = p.generator(2, {a: 2}, function map(opts, i, create) {
          indexs.push(i);
        });

        assert.equal(indexs.length, 2);
        assert.deepEqual(particles, []);
      });

      it("should create particles given to the the create method", function() {
        const p = new Particle();
        const particles = p.generator(2, {a: 2}, function map(opts, i, create) {
          const newState = extend({}, opts, {
            a: opts.a + i,
          });

          create(newState);
        });

        createdParticleState.a = 2;
        assert.deepEqual(particles[0].state, createdParticleState);
        createdParticleState.a = 3;
        assert.deepEqual(particles[1].state, createdParticleState);
      });
    });
  });

  describe("#updatePos", function() {
    it("should add the vector to the position", function() {
      const particle = new Particle();
      const p = particle.create();
      assert.deepEqual(p.updatePos(1, 1), {x: 1, y: 1});
    });

    it("should add the internal velocity vector to the position", function() {
      const particle = new Particle();
      const p1 = particle.create({
        vx: 1,
        vy: 0,
        magnitude: 1,
      });
      assert.equal(p1.updatePos().x, 1);
    });

    it("should add the internal velocity twice if we call speed twice", function() {
      const particle = new Particle();
      const p1 = particle.create({
        vx: 1,
        vy: 0,
        magnitude: 1,
      });
      p1.updatePos();
      assert.equal(p1.updatePos().x, 2);
    });
  });

  describe("#springs", function() {
    describe("#springFromTo", function() {
      it("it should fail if not given a particle as the first argument", function() {
        const particle = new Particle();
        try {
          particle.springFromTo(undefined);
        } catch (e) {
          assert.equal(e.message, "Cannot read property \'state\' of undefined");
        };
      });

      it("it should move the springed particle closer to its attracting point", function() {
        const particle = new Particle();
        const p1 = particle.create({
          x: 100,
          y: 100,
        });
        const p2 = particle.create({
          x: 100,
          y: 400,
        });

        p1.springFromTo(p2);

        assert.equal(p1.state.vy, 10);
        assert.equal(p2.state.vy, -10);
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
      it("should move the springed particle closer to its attracting point", function() {
        const particle = new Particle();
        const p1 = particle.create({
          x: 100,
          y: 100,
        });

        const point = {
          point: vector.create(100, 400),
          spring: 0.9,
          offset: 100,
        };

        p1.springToPoint(point);
        assert.equal(p1.state.vy, 180);
        p1.springToPoint(point);
        assert.equal(p1.state.vy, 360);
      });
    });

    describe("#addSpring", function() {
      it("should add a spring to the springs array", function() {
        const particle = new Particle();
        const p1 = particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        assert.deepEqual(p1.state.springs[0], point);
      });

      it("should remove the same spring and add it again if we try to add a duplicate", function() {
        const particle = new Particle();
        const p1 = particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        p1.addSpring(point);
        assert.deepEqual(p1.state.springs.length, 1);
      });
    });

    describe("#removeSpring", function() {
      it("should remove a spring to the springs array", function() {
        const particle = new Particle();
        const p1 = particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        assert.equal(p1.state.springs.length, 1);
        p1.removeSpring(point);
        assert.equal(p1.state.springs.length, 0);
      });

      it("should do nothing if removing a non exsistant point", function() {
        const particle = new Particle();
        const p1 = particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        assert.equal(p1.state.springs.length, 0);
        p1.removeSpring(point);
        assert.equal(p1.state.springs.length, 0);
      });
    });

    describe("#handleSprings", function() {
      it("should call handleSprings twice", function() {
        const particle = new Particle();
        const p1 = particle.create();
        const point1 = {point: vector.create(0, 0), offset: 0, spring: 0};
        const point2 = {point: vector.create(1, 1), offset: 0, spring: 0};

        p1.addSpring(point1);
        p1.addSpring(point2);

        assert.deepEqual([point1, point2], p1.handleSprings());
      });

      it("should do nothing when its called without and springs.", function() {
        const particle = new Particle();
        const p1 = particle.create();
        p1.handleSprings();
      });
    });
  });
});
