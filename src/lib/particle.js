// @flow

/* eslint max-len: 0 */

/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel somewhat like physical movments.
*/

const extend = require("extend");
const clone = require("lodash/cloneDeep");


type Spring = {
  point: {
    state: {
      x: number,
      y: number,
    },
  },
};

type Mass = {
  state: {
    x: number,
    y: number,
  },
};

/* The default state a particle starts with It should not move. */
type state = {
  x: number,
  y: number,
  vx: number,
  vy: number,
  gravity: number,
  magnitude: number,
  radius: number,
  mass: number,
  direction: number,
  friction: number,
  springs: Array<Spring>,
  masses: Array<Mass>,
};

const INITIAL_STATE: state = {
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
  springs: [],
  masses: [],
};

/**
 * @class Particle
 * @param {state} state initial state to pass the constructor
 */
class Particle {
  state: state;

  /**
   * constructor
   * @constructor
   * @param  {state} state Particle state coordinates, etc.
   * @return {void}
   */
  constructor(state: state=clone(INITIAL_STATE)): void {
    this.state = state || {};
  };

  /**
   * @description Create a particle given a direction and magnitude.
   * @memberOf Particle
   * @param  {Object}   state optional state values to pass to create.
   * @return {Particle} returns a particle
   */
  static create(state: state = clone(INITIAL_STATE)): Particle {
    // Extend the optional state on to the default state.
    state = extend(true, clone(INITIAL_STATE), state);

    // Create particle with the new options.
    const particle = new Particle(state);

    // Set length.
    particle.setSpeed(state.magnitude);

    // Set angle.
    particle.setHeading(state.direction);

    // Return new particle.
    return particle;
  };

  /**
   * @description A change in velocity.
   *
   * @memberOf Particle
   * @param  {Integer} ax
   * @param  {Integer} ay
   * @return {void} Acceleration vector.
   */
  accelerate(ax: number=this.state.vx, ay: number=this.state.vy): void {
    this.state.vx += ax;
    this.state.vy += ay;
  };

  /**
   * @description A update a position of a particle
   * based on its gravity and fricition. Gravity is usually a acceleration
   * vector.
   *
   * @memberOf Particle
   * @param  {Integer} fric Fricition to apply.
   * @param  {Integer} grav Gravity to apply.
   * @return {Object} Position state.
   */
  update(fric: number = this.state.friction, grav: number = this.state.gravity) {
    // Apply springs
    this.handleSprings();

    // Apply gravitations
    this.handleMasses();

    // Apply fake fricition to velocity
    this.state.vx *= fric;
    this.state.vy *= fric;

    // Apply gravity to velocity
    this.accelerate(0, grav);

    // Update position based on acceleration
    return this.updatePos();
  };

  /**
   * @description sets the internal speed of the particle given the force
   * @memberOf Particle
   * @param {number} speed
   */
  setSpeed(speed: number): void {
    const angle = this.getHeading();
    this.state.vx = Math.cos(angle) * speed;
    this.state.vy = Math.sin(angle) * speed;
  };

  /**
   * @memberOf Particle
   * @description sets the internal speed of the particle given the angle
   * @param {number} angle
   */
  setHeading(angle: number): void {
    const speed = this.getSpeed();
    this.state.vx = Math.cos(angle) * speed;
    this.state.vy = Math.sin(angle) * speed;
  };

  /**
   * @description get the length of the velocity vector.
   * @memberOf Particle
   * @param  {number} x
   * @param  {number} y
   * @return {number} force of velocity vector.
   */
  getSpeed(x: number = this.state.vx, y: number = this.state.vy): number {
    return Math.hypot(this.state.vx, this.state.vy);
  };

  /**
   * @description get the angle of the velocity vector.
   * @memberOf Particle
   * @param  {number} x
   * @param  {number} y
   * @return {number} angle of velocity vector.
   */
  getHeading(x: number = this.state.vx, y: number = this.state.vy): number {
    return Math.atan2(y, x);
  };

  /**
   * @description add spring to springs array
   * @memberOf Particle
   * @param {Object} spring A spring object
   * @return {Object}
   */
  addSpring(spring: Spring): Spring {
    this.removeSpring(spring);
    this.state.springs.push(spring);
    return spring;
  };

  /**
   * @description remove a specific string from the springs array
   * @memberOf Particle
   * @param  {Object} spring
   */
  removeSpring({point: {state: p}}: Spring): void {
    const springs = this.state.springs;

    for (let i = 0; i < springs.length; i++) {
      if (p.x === springs[i].point.state.x &&
          p.y === springs[i].point.state.y) {
        springs.splice(i, 1);
        break;
      }
    }
  };

  /**
   * @description Asumming we know where
   * the other particle is on the canvas. We can use
   * the angle formulae to figure out the angle
   * between two particle. Using arctangent is fine.
   * but because the corrdinate plane is filped on the
   * Y axis we use atan2 to get the right values. Explained
   * in API Docs.
   *
   * @memberOf Particle
   * @param  {Particle} p      A particle instance.
   * @return {Integer}  Angle   A angle.
   */
  angelTo(p: Particle): number {
    const dx = p.state.x - this.state.x;
    const dy = p.state.y - this.state.y;
    return Math.atan2(dy, dx);
  };

  /**
   * @description Assuming we know where both particle are on the canvas.
   * we can use the distance formuale to figure out the distance
   * between the two particles.
   *
   * @memberOf Particle
   * @param  {Particle} p      A particle instance
   * @return {number}  Angle   A Distance
   */
  distanceTo(p: Particle): number {
    const dx = p.state.x - this.state.x;
    const dy = p.state.y - this.state.y;
    return Math.hypot(dx, dy);
  };

  /**
   * @memberOf Particle
   * @description Append a particle to the masses array.
   * @param {Particle} mass
   */
  addMass(mass: Mass): void {
    this.removeMass(mass);
    this.state.masses.push(mass);
  };

  /**
   * @memberOf Particle
   * @description Remove a particle for the masses array.
   * @param  {Particle} mass
   */
  removeMass({state: mass}: Mass): void {
    const masses = this.state.masses;

    for (let i = 0; i < masses.length; i++) {
      if (mass.x === masses[i].state.x &&
          mass.y === masses[i].state.y) {
        masses.splice(i, 1);
        break;
      }
    }
  };

  /**
   * @memberOf Particle
   * @description Applys gravitation to the input particle.
   * @param  {Particle} p
   * @return {Object}
   */
  gravitateTo(p: Particle) {
    const dx = p.state.x - this.state.x;
    const dy = p.state.y - this.state.y;

    // Distance between the two particles
    const distSQ = dx * dx + dy * dy;
    const dist = Math.sqrt(distSQ);

    // Magnitude of the vector [F = G(m1)(m2)/r^2]
    const force = p.state.mass / distSQ;

    // Setting up angles of the vector
    const sin = dy / dist;
    const cos = dx / dist;

    // Setting vetor angle
    const ax = cos * force;
    const ay = sin * force;

    return this.accelerate(ax, ay);
  };

  // TODO:FIX this function MILES its gross
  /**
   * @memberOf Particle
   * @description generate a bunch of particles.
   * @param  {Number}                     num       The maximum amount of generated particles needed.
   * @param  {Object}                     opts      Options to pass each particle
   * @param  {Particle~generatorCallback} callback  Function to allow mapping.
   * @return {Particle[]}
   */
  generator(num, opts=clone(INITIAL_STATE), callback) {
    // Should not mutate the options after they have been given //
    Object.freeze(opts);

    const particles = [];

    if (typeof callback === "function") {
      for (let i = 0; i < num; i++) {
        callback(opts, i, function(p) {
          if (!p) {
            console.warn("No particle passed to generator. Will use default state.");
            const newParticle = Particle.create(opts);
            particles.push(newParticle);
            return newParticle;
          }

          const newParticle = Particle.create(p);
          particles.push(newParticle);
          return newParticle;
        });
      }
    }

    if (!callback) {
      for (let i = 0; i < num; i++) {
        particles.push(Particle.create(opts));
      }
    }

    return particles;
  };

  /**
   * Generator callback
   * @memberOf Particle
   * @callback Particle~generatorCallback
   * @param {Object} opts Options to be extend on to each particle.
   * @param {Number} i Index of particle in Array.
   * @param {Function} {} A call back to be called with the generated particle.
   */
  
  /**
   * @memberOf Particle
   * @description Apply velocity to the position.
   * @param  {Integer} vx
   * @param  {Integer} vy
   * @return {Object} Position state after velocity has been applied
   */
  updatePos(vx, vy) {
    if (vx === undefined && vy === undefined) {
      this.state.x += this.state.vx;
      this.state.y += this.state.vy;
      return {x: this.state.x, y: this.state.y};
    }

    this.state.x += vx;
    this.state.y += vy;
    return {x: this.state.x, y: this.state.y};
  };

  /**
   * @memberOf Particle
   * @description Given two particles calculate the
   * spring force applied to both particles.
   * @param  {Particle} p
   * @param  {Integer}  spring  Given offset for the particles
   * @param  {Integer}  offset  The spring coefficent
   * @return {Particle[]}
   */
  springFromTo(p, spring=0.05, offset=100) {
    // Postion delta
    const dx = (p.state.x - this.state.x);
    const dy = (p.state.y - this.state.y);

    // Setting up magnitude and angle of the vector
    const distance = Math.hypot(dx, dy);
    const springForce = (distance - offset) * spring;

    // Spring acceleration vector
    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    // Accelerate with the spring vector
    this.accelerate(sx, sy);

    // Accelerate the opposite direction.
    p.state.vx -= sx;
    p.state.vy -= sy;

    return [this, p];
  };

  /**
   * @memberOf Particle
   * @description Given a particle, a vector, and a spring coeffiencent accelerate
   * the particle according to the distance its is from the point.
   * @param  {Object} p A spring object.
   * @return {Particle}
   */
  springToPoint(p) {
    // Postion delta
    const dx = (p.point.state.x - this.state.x);
    const dy = (p.point.state.y - this.state.y);

    // Setting up magnitude and angle of the vector
    const distance = Math.hypot(dx, dy);
    const springForce = (distance - p.offset) * p.spring;

    // Spring acceleration vector
    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    // Accelerate with the spring vector
    this.accelerate(sx, sy);

    return [this, p];
  };

  /**
   * @memberOf Particle
   * @description Apply spring point to all internal springs.
   * @param  {springs} springs An array of springs to spring to.
   * @return {Object[]}
   */
  handleSprings(springs: Array<Spring>=this.state.springs) {
    for (let i = 0; i < springs.length; i++) {
      this.springToPoint(springs[i]);
    }
    return springs;
  };

  /**
   * @memberOf Particle
   * @description For each mass in the masses array apply gravitate to it.
   * @param  {Particles[]|Object[]} masses
   * @return {Particles[]|Object[]}
   */
  handleMasses(masses=this.state.masses) {
    for (let i = 0; i < masses.length; i++) {
      this.gravitateTo(masses[i]);
    }
    return masses;
  };
};

module.exports = Particle;
