"use strict";

/* eslint max-len: 0 */
/*
* The particle libary is used for physics animations.
* they are not extremely accurate but still represent
* and feel like physical movments.
*/

var extend = require("extend");
var clone = require("lodash/cloneDeep");
/* The default state a particle starts with It should not move. */

var INITIAL_STATE = {
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
  masses: []
};

/**
 * @class Particle
 * @param {state} state initial state to pass the constructor
 */
function Particle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);

  this.state = state;
}

/**
 * @description Create a particle given a direction and magnitude.
 * @memberOf Particle
 * @param  {Object}   opts optional state values to pass to create.
 * @returns {Particle} returns a particle
 */
Particle.prototype.create = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);

  // Extend the optional state on to the default state.
  opts = extend(true, clone(INITIAL_STATE), opts);

  // Create particle with the new options.
  var particle = new Particle(opts);

  // Set length.
  particle.setSpeed(opts.magnitude);

  // Set angle.
  particle.setHeading(opts.direction);

  // Return new particle.
  return particle;
};

/**
 * @description A change in velocity.
 *
 * @memberOf Particle
 * @param  {Integer} ax
 * @param  {Integer} ay
 * @returns {Object} Acceleration vector.
 */
Particle.prototype.accelerate = function accelerate() {
  var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
  var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;

  this.state.vx += ax | 0;
  this.state.vy += ay | 0;
  return { ax: ax, ay: ay };
};

/**
 * @description A update a position of a particle
 * based on its gravity and fricition. Gravity is usually a acceleration
 * vector.
 *
 * @memberOf Particle
 * @param  {Integer} fric Fricition to apply.
 * @param  {Integer} grav Gravity to apply.
 * @returns {Object} Position state.
 */
Particle.prototype.update = function update() {
  var fric = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.friction;
  var grav = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.gravity;

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
Particle.prototype.setSpeed = function setSpeed(speed) {
  var angle = this.getHeading();
  this.state.vx = Math.cos(angle) * speed;
  this.state.vy = Math.sin(angle) * speed;
};

/**
 * @memberOf Particle
 * @description sets the internal speed of the particle given the angle
 * @param {number} angle
 */
Particle.prototype.setHeading = function setHeading(angle) {
  var speed = this.getSpeed();
  this.state.vx = Math.cos(angle) * speed;
  this.state.vy = Math.sin(angle) * speed;
};

/**
 * @description get the length of the velocity vector.
 * @memberOf Particle
 * @param  {number} x
 * @param  {number} y
 * @returns {number} force of velocity vector.
 */
Particle.prototype.getSpeed = function getSpeed() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;

  return Math.hypot(this.state.vx, this.state.vy);
};

/**
 * @description get the angle of the velocity vector.
 * @memberOf Particle
 * @param  {number} x
 * @param  {number} y
 * @returns {number} angle of velocity vector.
 */
Particle.prototype.getHeading = function getHeading() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;

  return Math.atan2(y, x);
};

/**
 * @description add spring to springs array
 * @memberOf Particle
 * @param {Object} spring A spring object
 * @returns {Object}
 */
Particle.prototype.addSpring = function addSpring(spring) {
  this.removeSpring(spring);
  this.state.springs.push(spring);
  return spring;
};

/**
 * @description remove a specific string from the springs array
 * @memberOf Particle
 * @param  {Object} spring
 */
Particle.prototype.removeSpring = function removeSpring(_ref) {
  var p = _ref.point.state;

  var springs = this.state.springs;

  for (var i = 0; i < springs.length; i++) {
    if (p.x === springs[i].point.state.x && p.y === springs[i].point.state.y) {
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
 * @param  {Particle} p2      A particle instance.
 * @returns {Integer}  Angle   A angle.
 */
Particle.prototype.angleTo = function angelTo(_ref2) {
  var _ref2$state = _ref2.state,
      x = _ref2$state.x,
      y = _ref2$state.y;
  var _x$y = { x: x - this.state.x, y: y - this.state.y },
      dx = _x$y.x,
      dy = _x$y.y;

  return Math.atan2(dy, dx);
};

/**
 * @description Assuming we know where both particle are on the canvas.
 * we can use the distance formuale to figure out the distance
 * between the two particles.
 *
 * @memberOf Particle
 * @param  {Particle} p2      A particle instance
 * @returns {Integer}  Angle   A Distance
 */
Particle.prototype.distanceTo = function distanceTo(_ref3) {
  var _ref3$state = _ref3.state,
      x = _ref3$state.x,
      y = _ref3$state.y;
  var _x$y2 = { x: x - this.state.x, y: y - this.state.y },
      dx = _x$y2.x,
      dy = _x$y2.y;

  return Math.hypot(dx, dy);
};

/**
 * @memberOf Particle
 * @description Append a particle to the masses array.
 * @param {Particle} mass
 */
Particle.prototype.addMass = function (mass) {
  this.removeMass(mass);
  this.state.masses.push(mass);
};

/**
 * @memberOf Particle
 * @description Remove a particle for the masses array.
 * @param  {Particle} mass
 */
Particle.prototype.removeMass = function (_ref4) {
  var mass = _ref4.state;

  var masses = this.state.masses;

  for (var i = 0; i < masses.length; i++) {
    if (mass.x === masses[i].state.x && mass.y === masses[i].state.y) {
      masses.splice(i, 1);
      break;
    }
  }
};

/**
 * @memberOf Particle
 * @description Applys gravitation to the input particle.
 * @param  {Particle} p2
 * @returns {Object}
 */
Particle.prototype.gravitateTo = function (p2) {
  var dx = p2.state.x - this.state.x;
  var dy = p2.state.y - this.state.y;

  // Distance between the two particles
  var distSQ = dx * dx + dy * dy;
  var dist = Math.sqrt(distSQ);

  // Magnitude of the vector [F = G(m1)(m2)/r^2]
  var force = p2.state.mass / distSQ;

  // Setting up angles of the vector
  var sin = dy / dist;
  var cos = dx / dist;

  // Setting vetor angle
  var ax = cos * force;
  var ay = sin * force;

  return this.accelerate(ax, ay);
};

// This generatorr function is pretty gross Miles fix this you lazy pile of developer.
/**
 * @memberOf Particle
 * @description generate a bunch of particles.
 * @param  {Number}                     num       The maximum amount of generated particles needed.
 * @param  {Object}                     opts      Options to pass each particle
 * @param  {Particle~generatorCallback} callback  Function to allow mapping.
 * @returns {Particle[]}
 */
Particle.prototype.generator = function gen(num) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone(INITIAL_STATE);
  var callback = arguments[2];

  // Should not mutate the options after they have been given //
  Object.freeze(opts);

  var particles = [];
  var self = this;

  if (typeof callback === "function") {
    for (var i = 0; i < num; i++) {
      callback(opts, i, function (p) {
        if (!p) {
          console.log("No particle passed to generator. Will use default state.");
          var _newParticle = self.create(opts);
          particles.push(_newParticle);
          return _newParticle;
        }

        var newParticle = self.create(p);
        particles.push(newParticle);
        return newParticle;
      });
    }
  }

  if (!callback) {
    for (var _i = 0; _i < num; _i++) {
      particles.push(self.create(opts));
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
 * @returns {Object} Position state after velocity has been applied
 */
Particle.prototype.updatePos = function updatePos(vx, vy) {
  if (vx === undefined && vy === undefined) {
    this.state.x += this.state.vx;
    this.state.y += this.state.vy;
    return { x: this.state.x, y: this.state.y };
  }

  this.state.x += vx;
  this.state.y += vy;
  return { x: this.state.x, y: this.state.y };
};

/**
 * @memberOf Particle
 * @description Given two particles calculate the
 * spring force applied to both particles.
 * @param  {Particle} p
 * @param  {Integer}  spring  Given offset for the particles
 * @param  {Integer}  offset  The spring coefficent
 * @returns {Particle[]}
 */
Particle.prototype.springFromTo = function springFromTo(p) {
  var spring = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;

  // Postion delta
  var dx = p.state.x - this.state.x;
  var dy = p.state.y - this.state.y;

  // Setting up magnitude and angle of the vector
  var distance = Math.hypot(dx, dy);
  var springForce = (distance - offset) * spring;

  // Spring acceleration vector
  var sx = dx / distance * springForce;
  var sy = dy / distance * springForce;

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
 * @returns {Particle}
 */
Particle.prototype.springToPoint = function springToPoint(p) {
  // Postion delta
  var dx = p.point.state.x - this.state.x;
  var dy = p.point.state.y - this.state.y;

  // Setting up magnitude and angle of the vector
  var distance = Math.hypot(dx, dy);
  var springForce = (distance - p.offset) * p.spring;

  // Spring acceleration vector
  var sx = dx / distance * springForce;
  var sy = dy / distance * springForce;

  // Accelerate with the spring vector
  this.accelerate(sx, sy);

  return [this, p];
};

/**
 * @memberOf Particle
 * @description Apply spring point to all internal springs.
 * @param  {springs} springs An array of springs to spring to.
 * @returns {Object[]}
 */
Particle.prototype.handleSprings = function handleSprings() {
  var springs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.springs;

  for (var i = 0; i < springs.length; i++) {
    this.springToPoint(springs[i]);
  }
  return springs;
};

/**
 * @memberOf Particle
 * @description For each mass in the masses array apply gravitate to it.
 * @param  {Particles[]|Object[]} masses
 * @returns {Particles[]|Object[]}
 */
Particle.prototype.handleMasses = function handleMasses() {
  var masses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.masses;

  for (var i = 0; i < masses.length; i++) {
    this.gravitateTo(masses[i]);
  }
  return masses;
};

module.exports = Particle;