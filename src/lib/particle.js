// @flow

/* eslint max-len: 0 */

/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel somewhat like physical movments.
*/

const extend = require("extend");
const clone = require("lodash/cloneDeep");

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
  masses: Array<Particle>,
  color: string,
  width: number,
  height: number,
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
  color: "#000000",
  width: 10,
  height: 10,
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
   * @memberOf Particle
   * @description generate a bunch of particles.
   * @param  {Number} number    The maximum amount of generated particles needed.
   * @param  {Object} opts      Options to pass each particle
   * @return {Array<Particle>}
   */
  static generate(number: number, opts: state=clone(INITIAL_STATE)): Array<Particle> {
    const particles = [];

    for (let i = 0; i < number; i++) {
      particles.push(Particle.create(opts));
    }

    return particles;
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
  angleTo(p: Particle): number {
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
  addMass(mass: Particle): void {
    this.removeMass(mass);
    this.state.masses.push(mass);
  };

  /**
   * @memberOf Particle
   * @description Remove a particle for the masses array.
   * @param  {Particle} mass
   */
  removeMass({state: mass}: Particle): void {
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
   * @param  {Particle} particle
   * @return {Object}
   */
  gravitateTo(particle: Particle): void {
    const dx = particle.state.x - this.state.x;
    const dy = particle.state.y - this.state.y;

    // Distance between the two particles
    // we dont use the distanceTo fn cause we want
    // to optimzie the code to not have to calculate
    // distSqrd again.
    const distSqrd = dx * dx + dy * dy;
    const dist = Math.sqrt(distSqrd);

    // Magnitude of the vector [F = G(m1)(m2)/r^2]
    const force = particle.state.mass / distSqrd;

    // Setting up angles of the vector
    const sin = dy / dist;
    const cos = dx / dist;

    // Setting vetor angle
    const ax = cos * force;
    const ay = sin * force;

    return this.accelerate(ax, ay);
  };

  /**
   * @memberOf Particle
   * @description Apply velocity to the position.
   * @param  {Integer} vx
   * @param  {Integer} vy
   * @return {void}
   */
  updatePos(vx: ?number, vy: ?number): {x: number, y: number} {
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
   * @memberOf Particle
   * @description Given two particles calculate the
   * spring force applied to both particles.
   * @param  {Particle} particle
   * @param  {Integer}  springy  Given offset for the particles
   * @param  {Integer}  offset  The spring coefficent
   * @return {Particle[]}
   */
  springFromTo(particle: Particle, springy: number = 0.05, offset: number = 100): [Particle, Particle] {
    // Postion delta
    const dx = (particle.state.x - this.state.x);
    const dy = (particle.state.y - this.state.y);

    // Setting up magnitude and angle of the vector
    const distance = Math.hypot(dx, dy);
    const springForce = (distance - offset) * springy;

    // Spring acceleration vector
    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    // Accelerate with the spring vector
    this.accelerate(sx, sy);

    // Accelerate the opposite direction.
    particle.state.vx -= sx;
    particle.state.vy -= sy;

    return [this, particle];
  };

  /**
   * @memberOf Particle
   * @description Given a particle, a vector, and a spring coeffiencent accelerate
   * the particle according to the distance its is from the point.
   * @param  {Spring} spring A spring object.
   * @return {Particle}
   */
  springToPoint(spring: Spring): [Particle, Spring] {
    // Postion delta
    const dx = (spring.point.state.x - this.state.x);
    const dy = (spring.point.state.y - this.state.y);

    // Setting up magnitude and angle of the vector
    const distance = Math.hypot(dx, dy);
    const springForce = (distance - spring.offset) * spring["spring"];

    // Spring acceleration vector
    const sx = dx / distance * springForce;
    const sy = dy / distance * springForce;

    // Accelerate with the spring vector
    this.accelerate(sx, sy);

    return [this, spring];
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
  handleMasses(masses: Array<Particle>=this.state.masses) {
    for (let i = 0; i < masses.length; i++) {
      this.gravitateTo(masses[i]);
    }

    return masses;
  };
};

module.exports = Particle;
