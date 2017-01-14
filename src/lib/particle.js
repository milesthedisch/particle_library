/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel like physical movments.
*/

const extend = require("extend");
const clone = require("lodash/cloneDeep");
const Vector = require("../../src/lib/vectors.js");
const vector = new Vector();

/* The default state a particle starts with It should not move. */

const INITIAL_STATE = {
  position: vector.create(),
  velocity: vector.create(),
  gravity: vector.create(),
  magnitude: 0,
  radius: 0,
  mass: 1,
  direction: Math.PI * 2,
};

/**
 * @class Particle
 * @param {state} state initial state to pass the constructor
 */
function Particle(state=INITIAL_STATE) {
  this.state = state;
}

/**
 * get - A getter for the particles state.
 * @memberOf Particle
 * @param  {String} prop
 * @return {Value}  A value assosiated with the property.
 */
Particle.prototype.get = function get(prop) {
  return this.state[prop];
};

/**
 * set - A setter for the particles state.
 * @memberOf Particle
 * @param   {Object} prop
 * @param   {Object} val
 * @return  {Boolean} 		A boolean to tell wether the property
 *                        exsist on the inital state
 */
Particle.prototype.set = function set(prop, val) {
  if (this.state.hasOwnProperty(prop)) {
    this.state[prop] = val;
    return true;
  }

  return false;
};

/**
 * @memberOf Particle
 * @param  {Object} 	opts optional state values to pass to create.
 * @return {Particle} returns a particle
 */
Particle.prototype.create = function(opts=clone(INITIAL_STATE)) {
  opts = extend(true, clone(INITIAL_STATE), opts);
  const particle = new Particle(opts);

  // Set up vectors.
  particle.set("position", opts.position);
  particle.set("velocity", opts.velocity);

  // Create the magnitude and angle of a vector.
  // These are the basic building blocks of vectors.
  particle.get("velocity").setLength(opts.magnitude);
  particle.get("velocity").setAngle(opts.direction);

  // Create a gravity vector.
  particle.set("gravity", opts.gravity);

  return particle;
};

/**
 * Accelerate - A change in velocity.
 *
 * @memberOf Particle
 * @param  {Vector} accel The change in distance / time
 * @return {Value} 	state of the particle after accelerating.
 */
Particle.prototype.accelerate = function accelerate(accel) {
  this.get("velocity").addTo(accel);
  return this.get("velocity");
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
  const gravity = this.accelerate(grav);
  const position = this.get("position").addTo(gravity);
  return position;
};

/**
 * angleTo - Asumming we know where
 * the other particle is on the canvas. can use
 * the angle formulae to figure out the angle
 * between two particle. Using arctangent is fine.
 * but because the corrdinate plane is filped on the
 * Y axis we use atan2 to get the right values. Explained
 * in API Docs.
 *
 * @memberOf Particle
 * @param  {Particle} p2 			A particle instance.
 * @return {Integer}  Angle  	A angle.
 */
Particle.prototype.angleTo = function angelTo(p2) {
  const dx = p2.get("position").get("x") - this.get("position").get("x");
  const dy = p2.get("position").get("y") - this.get("position").get("y");
  return Math.atan2(dy, dx);
};

/**
 * distanceTo - particle.
 * Assuming we know where both particle are on the canvas.
 * we can use the distance formuale to figure out the distance
 * between the two particles.
 *
 * @memberOf Particle
 * @param  {Particle} p2 			A particle instance
 * @return {Integer}  Angle  	A Distance
 */
Particle.prototype.distanceTo = function distanceTo(p2) {
  const deltaX = p2.get("position").get("x") - this.get("position").get("x");
  const deltaY = p2.get("position").get("y") - this.get("position").get("y");
  return Math.hypot(deltaX, deltaY);
};

/**
 * gravitateTo - Creates a gravity vector if he
 *
 * @memberOf Particle
 * @param  {Particle} p2     			A particle instance.
 * @return {Vector}   veclocity 	The velocity of the current state.
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
 * generate
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
      this.push(p);
    }
  }

  if (!callback) {
    for(let i = 0; i < num; i++) {
      this.push(this.create(opts));
    }
  }

  return particles;
};

/**
 * Generator callback
 * @callback Particle~generatorCallback
 * @param {Particle}
 */

module.exports = Particle;
