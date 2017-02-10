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
function Particle(state=INITIAL_STATE) {
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
 * based on its gravity. Gravity is usually a acceleration
 * vector.
 *
 * @memberOf Particle
 * @param  {Vector} grav gravity given.
 * @return {State}       state of position
 */
Particle.prototype.update = function update(grav=this.get("gravity")) {
  // Apply fake fricition to velocity
  this.state.vx *= this.state.friction;
  this.state.vy *= this.state.friction;
  const gravity = this.accelerate(0, grav);
  const position = this.speed(gravity.ax, gravity.ay);
  return position;
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
 * gravitateTo - Creates a gravity vector if he
 *
 * @memberOf Particle
 * @param  {Particle} p2          A particle instance.
 * @return {Vector}   veclocity   The velocity of the current state.
 */
Particle.prototype.gravitateTo = function(p2) {
  const grav = this.get("gravity");
  const velocity = this.get("velocity");

  const dist = this.distanceTo(p2);

  grav.setLength(p2.get("mass") / (dist * dist));
  grav.setAngle(this.angleTo(p2));

  velocity["+="](grav);
  return velocity;
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
 * @description Add a vector to the position.
 * @name speed
 * @param  {Vector} vector
 * @return {Vector}
 */
Particle.prototype.speed = function(vector) {
  if (!vector) {
    let velocity = this.get("velocity");
    (this.get("position")).addTo(velocity);
    return this.get("position");
  }

  this.get("position").addTo(vector);
  return this.get("position");
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
