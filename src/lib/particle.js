/* eslint max-len: 0 */
/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel like physical movments.
*/

const extend = require("extend");
const clone = require("lodash/cloneDeep");
const Vector = require("../../src/lib/vectors.js");
const utils = require("../../src/lib/utils.js");
const vector = new Vector();

/* The default state a particle starts with It should not move. */

const INITIAL_STATE = {
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

/**
 * @class Particle
 * @param {state} state initial state to pass the constructor
 */
function Particle(state=clone(INITIAL_STATE)) {
  this.state = state;
}

/**
 * @memberOf Particle
 * @param  {Object}   opts optional state values to pass to create.
 * @return {Particle} returns a particle
 */
Particle.prototype.create = function(opts=clone(INITIAL_STATE)) {
  // Extend the optional state on to the default state.
  opts = extend(true, clone(INITIAL_STATE), opts);

  // Create particle with the new options.
  const particle = new Particle(opts);

  // Set length.
  const angle = Math.atan2(this.state.vx, this.state.vy);
  this.state.vx = Math.cos(angle) * opts.magnitude;
  this.state.vy = Math.sin(angle) * opts.magnitude;

  // Set angle.
  const length = Math.hypot(this.state.vx, this.state.vy);
  this.state.vx = Math.cos(opts.direction) * length;
  this.state.vy = Math.sin(opts.direction) * length;

  // Return new particle.
  return particle;
};

/**
 * Accelerate - A change in velocity.
 *
 * @memberOf Particle
 * @param  {Integer} ax
 * @param  {Integer} ay
 * @return {Object} Acceleration vector.
 */
Particle.prototype.accelerate = function accelerate(ax, ay) {
  this.state.vx += ax;
  this.state.vy += ay;
  return {ax, ay};
};

/**
 * Update - A update a position of a particle
 * based on its gravity and fricition. Gravity is usually a acceleration
 * vector.
 *
 * @memberOf Particle
 * @param  {Integer} fric Fricition to apply.
 * @param  {Integer} grav Gravity to apply.
 * @return {Object} Position state.
 */
Particle.prototype.update = function update(fric=this.state.friction, grav=this.state.gravity) {
  // Apply fake fricition to velocity
  this.state.vx *= fric;
  this.state.vy *= fric;

  // Apply gravity to velocity
  this.accelerate(0, grav);

  // Update position based on acceleration
  return this.updatePos();
};

/**
 * angleTo - Asumming we know where
 * the other particle is on the canvas. We can use
 * the angle formulae to figure out the angle
 * between two particle. Using arctangent is fine.
 * but because the corrdinate plane is filped on the
 * Y axis we use atan2 to get the right values. Explained
 * in API Docs.
 *
 * @memberOf Particle
 * @param  {Particle} p2      A particle instance.
 * @return {Integer}  Angle   A angle.
 */
Particle.prototype.angleTo = function angelTo(p2) {
  const dx = p2.state.x - this.state.x;
  const dy = p2.state.y - this.state.y;
  return Math.atan2(dy, dx);
};

/**
 * distanceTo - particle.
 * Assuming we know where both particle are on the canvas.
 * we can use the distance formuale to figure out the distance
 * between the two particles.
 *
 * @memberOf Particle
 * @param  {Particle} p2      A particle instance
 * @return {Integer}  Angle   A Distance
 */
Particle.prototype.distanceTo = function distanceTo(p2) {
  const dx = p2.state.x - this.state.x;
  const dy = p2.state.y - this.state.y;
  return Math.hypot(dx, dy);
};

/**
 * @name gravitateTo
 * @description Applys gravitation to the input particle.
 * @param  {Particle} p2
 * @return {Object}
 */
Particle.prototype.gravitateTo = function(p2) {
  const dx = p2.state.x - this.state.x;
  const dy = p2.state.y - this.state.y;

  // Distance between the two particles
  const distSQ = dx * dx + dy * dy;
  const dist = Math.sqrt(distSQ);

  // Magnitude of the vector [F = G(m1)(m2)/r^2]
  const force = p2.state.mass / distSQ;

  // Setting up angles of the vector
  const sin = dy / dist;
  const cos = dx / dist;

  // Setting vetor angle
  const ax = cos * force;
  const ay = sin * force;

  console.log(ax, ay);
  return this.accelerate(ax, ay);
};

/**
 * @name  generator
 * @description generate a bunch of particles.
 * @param  {Number}                     num       The maximum amount of generated particles needed.
 * @param  {Object}                     opts      Options to pass each particle
 * @param  {Particle~generatorCallback} callback  Function to allow mapping.
 * @return {Particle[]}
 */
Particle.prototype.generator = function(num, opts=INITIAL_STATE, callback) {
  opts = clone(opts);
  const particles = [];

  if (typeof callback === "function") {
    for(let i = 0; i < num; i++) {
      let p = callback(this.create(opts));
      particles.push(p);
    }
  }

  if (!callback) {
    for(let i = 0; i < num; i++) {
      particles.push(this.create(opts));
    }
  }

  return particles;
};

/**
 * Generator callback
 * @callback Particle~generatorCallback
 * @param {Particle}
 */

/**
 * @name updatePos
 * @description Apply velocity to the position.
 * @param  {Integer} vx
 * @param  {Integer} vy
 * @return {Object} Position state after velocity has been applied
 */
Particle.prototype.updatePos = function(vx, vy) {
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
 * @description Calculate the distance between two paticles centers.
 * @name  distanceFrom
 * @param  {Particle} p2
 * @return {Number}
 */
Particle.prototype.distanceFrom = function(p2) {
  const pos1 = p2.get("position");
  const pos2 = this.get("position");
  return utils.distanceVec(pos1, pos2);
};

/**
 * @name springFromTo
 * @description Given two particles calculate the
 * velocity applied to both of them particles.
 * @param  {Particle} p
 * @param  {Integer}  offset  Given offset for the particles
 * @param  {Integer}  spring  The spring coefficent
 * @return {Particle[]}
 */
Particle.prototype.springFromTo = function(p, offset=100, spring=0.05) {
  const springVec = vector.create(spring, spring);
  const distance = p.get("position")["-"](this.get("position"));

  distance.setLength(distance.getLength() - offset);
  const springForce = distance["*"](springVec);

  this.accelerate(springForce);
  p.get("velocity")["-="](springForce);
  return [this, p];
};

/**
 * @name  springToPoint
 * @description Given a particle, a vector, and a spring coeffiencent accelerate
 * the particle according to the distance its is from the point.
 * @param  {Vector}     point
 * @param  {Number}     offset Offset from the spring
 * @param  {Integer}    spring The spring coeffiecent the higher
 *                      the value the more springy it gets.
 * @return {Particle}
 */
Particle.prototype.springToPoint = function(point, offset=100, spring=0.05) {
  const springVec = vector.create(spring, spring);
  const distance = point["-"](this.get("position"));

  distance.setLength(distance.getLength() - offset);
  const springForce = distance["*"](springVec);

  return this.accelerate(springForce);
};

module.exports = Particle;
