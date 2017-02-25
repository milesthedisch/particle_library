/* eslint max-len: 0 */
/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel like physical movments.
*/

const extend = require("extend");
const clone = require("lodash/cloneDeep");
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
  const angle = Math.atan2(particle.state.vx, particle.state.vy);
  particle.state.vx = Math.cos(angle) * opts.magnitude;
  particle.state.vy = Math.sin(angle) * opts.magnitude;

  // Set angle.
  const length = Math.hypot(particle.state.vx, particle.state.vy);
  particle.state.vx = Math.cos(opts.direction) * length;
  particle.state.vy = Math.sin(opts.direction) * length;

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
Particle.prototype.accelerate = function accelerate(ax=this.state.vx, ay=this.state.vy) {
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
 * setSpeed - sets the internal speed of the particle given the force
 * @param {number} speed
 */
Particle.prototype.setSpeed = function setSpeed(speed) {
  const angle = this.getHeading();
  this.state.vx = Math.cos(angle) * speed;
  this.state.vy = Math.sin(angle) * speed;
};

/**
 * setHeading - sets the internal speed of the particle given the angle
 * @param {[type]} angle [description]
 */
Particle.prototype.setHeading = function setHeading(angle) {
  const speed = this.getSpeed();
  this.state.vx = Math.cos(angle) * speed;
  this.state.vy = Math.sin(angle) * speed;
};

/**
 * getSpeed - get the length of the velocity vector.
 * @param  {number} x
 * @param  {number} y
 * @return {number} force of velocity vector.
 */
Particle.prototype.getSpeed = function getSpeed(x=this.state.vx, y=this.state.vy) {
  return Math.hypot(this.state.vx, this.state.vy);
};

/**
 * getSpeed - get the angle of the velocity vector.
 * @param  {number} x
 * @param  {number} y
 * @return {number} angle of velocity vector.
 */
Particle.prototype.getHeading = function getHeading(x=this.state.vx, y=this.state.vy) {
  return Math.atan2(x, y);
};

Particle.prototype.addSpring = function addSpring(spring) {
  this.springs.push(spring);
};

Particle.prototype.removeSpring = function removeSpring(spring) {
  this.spring.splice();
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
Particle.prototype.generator = function gen(num, opts=clone(INITIAL_STATE), callback) {
  Object.freeze(opts);
  const particles = [];
  const self = this;

  if (typeof callback === "function") {
    for(let i = 0; i < num; i++) {
      callback(opts, i, function(p) {
        if (!p) {
          console.log("No particle passed to generator. Will use default state.");
          const newParticle = self.create(opts);
          particles.push(newParticle);
          return newParticle;
        }

        const newParticle = self.create(p);
        particles.push(newParticle);
        return newParticle;
      });
    }
  }

  if (!callback) {
    for(let i = 0; i < num; i++) {
      particles.push(self.create(opts));
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
Particle.prototype.updatePos = function updatePos(vx, vy) {
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
 * @name springFromTo
 * @description Given two particles calculate the
 * spring force applied to both particles.
 * @param  {Particle} p
 * @param  {Integer}  offset  Given offset for the particles
 * @param  {Integer}  spring  The spring coefficent
 * @return {Particle[]}
 */
Particle.prototype.springFromTo = function springFromTo(p, offset=100, spring=0.05) {
  // Postion delta
  const dx = (p.state.x - this.state.x);
  const dy = (p.state.y - this.state.y);

  // Setting up magnitude and angle of the vector
  const distance = Math.hypot(dx, dy) - offset;
  const angle = Math.atan2(dy, dx);

  // Spring acceleration vector
  const sx = (Math.cos(angle) * distance) * spring;
  const sy = (Math.sin(angle) * distance) * spring;

  // Accelerate with the spring vector
  this.accelerate(sx, sy);

  // Accelerate the opposite direction.
  p.state.vx -= sx;
  p.state.vy -= sy;

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
Particle.prototype.springToPoint = function springToPoint(point, offset=100, spring=0.05) {
  // Postion delta
  const dx = (point.state.x - this.state.x);
  const dy = (point.state.y - this.state.y);

  // Setting up magnitude and angle of the vector
  const distance = Math.hypot(dx, dy) - offset;
  const angle = Math.atan2(dy, dx);

  // Spring acceleration vector
  const sx = (Math.cos(angle) * distance) * spring;
  const sy = (Math.sin(angle) * distance) * spring;

  // Accelerate with the spring vector
  this.accelerate(sx, sy);

  return [this, point];
};

module.exports = Particle;
