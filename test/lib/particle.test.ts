/* eslint max-len: 0*/
import { describe, it, expect, beforeEach } from "vitest";

import Particle from "../../src/lib/particle";
import Vector from "../../src/lib/vectors";

const vector = new Vector();

describe("#Particle", function() {
  let defaultParticleState: any;
  let createdParticleState: any;

  beforeEach(function() {
    defaultParticleState = {
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      gravity: 0,
      magnitude: 0,
      radius: 1,
      mass: 1,
      direction: Math.PI * 2,
      friction: 1,
      masses: [],
      springs: [],
      color: "#000000",
      width: 10,
      height: 10,
    };

    createdParticleState = {
      x: 0,
      y: 0,
      vx: 0,
      vy: -0,
      gravity: 0,
      magnitude: 0,
      radius: 1,
      mass: 1,
      direction: Math.PI * 2,
      friction: 1,
      masses: [],
      springs: [],
      color: "#000000",
      width: 10,
      height: 10,
    };
  });

  it("should create a new particle with given state", function() {
    const p = new Particle({} as any);
    expect(p.state).toEqual({});
  });

  it("should create a new particle with default state", function() {
    const p = new Particle();
    expect(p.state).toEqual(defaultParticleState);
  });

  describe("#create", function() {
    it("should return a default particle state", function() {
      const p1 = Particle.create();
      expect(p1.state).toEqual(createdParticleState);
    });

    it("should return extend particle state that has been passed in", function() {
      const p1 = Particle.create({
        x: 1,
        y: 1,
        gravity: 1,
        radius: 1,
        magnitude: 0,
      });

      expect(p1.state).toEqual({
        ...defaultParticleState,
        x: 1,
        y: 1,
        vx: 0,
        vy: -0,
        gravity: 1,
        radius: 1,
      });
    });
  });

  describe("#accelerate", function() {
    it("should increase the velocity of a particle", function() {
      const p1 = Particle.create();
      p1.accelerate(1, 1);
      expect(p1.state.vx).toBe(1);
      expect(p1.state.vy).toBe(1);
    });

    it("should decrease the velocity of a particle", function() {
      const p1 = Particle.create();
      p1.accelerate(-1, -1);
      expect(p1.state.vx).toBe(-1);
      expect(p1.state.vy).toBe(-1);
    });
  });

  describe("#update", function() {
    it("should change the velocity with the given gravity", function() {
      const p1 = Particle.create({
        gravity: 1,
      });

      p1.update();
      expect(p1.state.gravity).toBe(1);
      expect(p1.state.vx).toBe(0);
      expect(p1.state.vy).toBe(1);
      expect(p1.state.x).toBe(0);
      expect(p1.state.y).toBe(1);

      p1.update();
      expect(p1.state.gravity).toBe(1);
      expect(p1.state.vx).toBe(0);
      expect(p1.state.vy).toBe(2);
      expect(p1.state.x).toBe(0);
      expect(p1.state.y).toBe(3);
    });

    it("should not change given no gravity", function() {
      const p1 = Particle.create();
      p1.update();
      expect(p1.state.gravity).toBe(0);
      expect(p1.state.vx).toBe(0);
      expect(p1.state.vy).toBe(0);
      expect(p1.state.x).toBe(0);
      expect(p1.state.y).toBe(0);
    });

    it("should change given friction and some velocity", function() {
      const p1 = Particle.create({
        magnitude: 2,
        direction: Math.PI * 2,
        friction: 0.95,
      });
      p1.update();
      expect(p1.state.vx).toBe(1.9);
      expect(p1.state.x).toBe(1.9);
    });

    it("should call handleSprings");
  });

  describe("#angleTo", function() {
    let p1: any;
    let p2: any;

    beforeEach(function() {
      p1 = Particle.create();
      p2 = Particle.create();
    });

    it("should return 0 given two coordinates that are in the same position", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 0;
      p2.state.y = 0;
      expect(p1.angleTo(p2)).toBe(0);
    });

    it("should return 45 degrees in radians when the triangle is a isosceles.", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 1;
      p2.state.y = 1;

      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      expect(degrees).toBe(45);
    });

    it("should return -90 degrees given a point slightly above it", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = 0;
      p2.state.y = -1;

      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      expect(degrees).toBe(-90);
    });

    it("should return -135 degrees given a point opposite 45 degrees", function() {
      p1.state.x = 0;
      p1.state.y = 0;
      p2.state.x = -1;
      p2.state.y = -1;

      const degrees = p1.angleTo(p2) * 180 / Math.PI;
      expect(degrees).toBe(-135);
    });
  });

  describe("#distanceTo", function() {
    it("should give the distance between two particles.", function() {
      const p1 = Particle.create({x: 2, y: 2});
      const p2 = Particle.create({x: -1, y: -1});
      expect(p1.distanceTo(p2)).toBe(Math.hypot(3, 3));
    });

    it("should calculate the distance from one particles center to another (diagonal)", function() {
      const particle1 = new Particle({x: 10, y: 10} as any);
      const particle2 = new Particle({x: 0, y: 0} as any);
      expect(particle1.distanceTo(particle2)).toBe(Math.sqrt(200));
    });

    it("should calculate the distance from one particles center to another", function() {
      const particle1 = new Particle({x: 10, y: 0} as any);
      const particle2 = new Particle({x: 0, y: 0} as any);
      expect(particle1.distanceTo(particle2)).toBe(10);
    });
  });

  describe("#gravitateTo", function() {
    it("should gravitate towards the heavier mass", function() {
      const p1 = Particle.create({mass: 100, x: 1000, y: 1000});
      const p2 = Particle.create({mass: 100, x: 1000, y: 100});

      p2.gravitateTo(p1);
      p2.update();

      expect(p2.state.y).toBeGreaterThan(100);
    });

    it("should stand still if the mass of the object that its gravitating to is 0", function() {
      const p1 = Particle.create({mass: 0, x: 1000, y: 1000});
      const p2 = Particle.create({mass: 100, x: 1000, y: 100});

      p2.gravitateTo(p1);
      p2.update();

      expect(p2.state.y).toBe(100);
      expect(p2.state.x).toBe(1000);
    });
  });

  describe("#Masses", function() {
    describe("#addMass", function() {
      it("should add a mass to the masses array", function() {
        const p1 = Particle.create();
        const m1 = {mass: 100, state: {x: 1, y: 1}};

        p1.addMass(m1 as any);
        expect(p1.state.masses.length).toBe(1);
      });

      it("should not add a duplicate mass", function() {
        const p1 = Particle.create();
        const m1 = {mass: 100, state: {x: 1, y: 1}};

        p1.addMass(m1 as any);
        p1.addMass(m1 as any);
        expect(p1.state.masses.length).toBe(1);
      });
    });

    describe("#removeMass", function() {
      it("should remove a mass from the masses array", function() {
        const p1 = Particle.create();
        const m1 = {mass: 100, state: {x: 1, y: 1}};

        p1.addMass(m1 as any);
        p1.removeMass(m1 as any);
        expect(p1.state.masses.length).toBe(0);
      });

      it("should do nothing given a non existent mass", function() {
        const p1 = Particle.create();
        const m1 = {mass: 100, state: {x: 1, y: 1}};

        p1.removeMass(m1 as any);
        expect(p1.state.masses.length).toBe(0);
      });
    });

    describe("#handleMasses", function() {
      it("should do nothing given no masses", function() {
        const p1 = Particle.create();

        p1.handleMasses();
        expect(p1.state).toEqual(createdParticleState);
      });

      it("should gravitate towards each masses in the masses array");
    });
  });

  describe("#generator", function() {
    it("should generate default particles", function() {
      const particles = Particle.generate(1);

      const expected = {
        ...defaultParticleState,
        vx: 0,
        vy: -0,
      };

      expect(particles.length).toBe(1);
      expect(particles[0].state).toEqual(expected);
    });

    it("should generate multiple particles", function() {
      const particles = Particle.generate(2);

      expect(particles.length).toBe(2);
      expect(particles[0].state).toEqual(createdParticleState);
      expect(particles[1].state).toEqual(createdParticleState);
    });

    it("should use opts passed in to each particle and extended.", function() {
      const particles = Particle.generate(2, {a: 1} as any);

      const expected = {
        ...createdParticleState,
        a: 1,
        vy: -0,
      };

      expect(particles.length).toBe(2);
      expect(particles[0].state).toEqual(expected);
      expect(particles[1].state).toEqual(expected);
    });
  });

  describe("#updatePos", function() {
    it("should add the vector to the position", function() {
      const p = Particle.create();
      expect(p.updatePos(1, 1)).toEqual({x: 1, y: 1});
    });

    it("should add the internal velocity vector to the position", function() {
      const p1 = Particle.create({
        vx: 1,
        vy: 0,
        magnitude: 1,
      });
      expect(p1.updatePos().x).toBe(1);
    });

    it("should add the internal velocity twice if we call speed twice", function() {
      const p1 = Particle.create({
        vx: 1,
        vy: 0,
        magnitude: 1,
      });
      p1.updatePos();
      expect(p1.updatePos().x).toBe(2);
    });
  });

  describe("#springs", function() {
    describe("#springFromTo", function() {
      it("it should fail if not given a particle as the first argument", function() {
        const particle = Particle.create();
        try {
          particle.springFromTo(undefined as any);
        } catch (e: any) {
          expect(e.message).toContain("Cannot read propert");
        }
      });

      it("it should move the springed particle closer to its attracting point", function() {
        const p1 = Particle.create({
          x: 100,
          y: 100,
        });
        const p2 = Particle.create({
          x: 100,
          y: 400,
        });

        p1.springFromTo(p2);

        expect(p1.state.vy).toBe(10);
        expect(p2.state.vy).toBe(-10);
      });
    });

    describe("#springPoint", function() {
      it("should return an error if not given a point.", function() {
        const p1 = Particle.create({
          position: vector.create(100, 100),
        } as any);

        try {
          p1.springToPoint(undefined as any);
        } catch (e: any) {
          expect(e.message).toBeTruthy();
        }
      });

      it("should move the springed particle closer to its attracting point", function() {
        const p1 = Particle.create({
          x: 100,
          y: 100,
        });

        const point = {
          point: vector.create(100, 400),
          spring: 0.9,
          offset: 100,
        };

        p1.springToPoint(point);
        expect(p1.state.vy).toBe(180);
        p1.springToPoint(point);
        expect(p1.state.vy).toBe(360);
      });
    });

    describe("#addSpring", function() {
      it("should add a spring to the springs array", function() {
        const p1 = Particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        expect(p1.state.springs[0]).toEqual(point);
      });

      it("should remove the same spring and add it again if we try to add a duplicate", function() {
        const p1 = Particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        p1.addSpring(point);
        expect(p1.state.springs.length).toBe(1);
      });
    });

    describe("#removeSpring", function() {
      it("should remove a spring to the springs array", function() {
        const p1 = Particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        p1.addSpring(point);
        expect(p1.state.springs.length).toBe(1);
        p1.removeSpring(point);
        expect(p1.state.springs.length).toBe(0);
      });

      it("should do nothing if removing a non existent point", function() {
        const p1 = Particle.create();
        const point = {point: vector.create(0, 0), offset: 0, spring: 0};

        expect(p1.state.springs.length).toBe(0);
        p1.removeSpring(point);
        expect(p1.state.springs.length).toBe(0);
      });
    });

    describe("#handleSprings", function() {
      it("should call handleSprings twice", function() {
        const p1 = Particle.create();
        const point1 = {point: vector.create(0, 0), offset: 0, spring: 0};
        const point2 = {point: vector.create(1, 1), offset: 0, spring: 0};

        p1.addSpring(point1);
        p1.addSpring(point2);

        expect(p1.handleSprings()).toEqual([point1, point2]);
      });

      it("should do nothing when its called without any springs.", function() {
        const p1 = Particle.create();
        p1.handleSprings();
      });
    });
  });
});
