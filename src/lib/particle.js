/**
 * The particle libary is used for physics animations.
 * they are not extremely accurate but still represent
 * and feel like physical movments.
 */
const extend = require("extend");

// The default state a particle starts with It should not move.
const INITIAL_STATE = {
	position: null,
	velocity: null,
	gravity: null,
	radius: 0,
	mass: 1,
};

/**
 * Particle constructor
 * @param {state} state initial state to pass the constructor
 */
function Particle(state=INITIAL_STATE) {
	this.state = state;
}

/**
 * get - A getter for the particles state.
 * @param  {String} prop
 * @return {Value}  A value assosiated with the property.
 */
Particle.prototype.get = function get(prop) {
	return this.state[prop];
};

/**
 * set - A setter for the particles state.
 * @param {[type]} prop [description]
 * @param {[type]} val  [description]
 * @return {Boolean} 		A boolean to tell wether the property
 *                      exsist on the inital state
 */
Particle.prototype.set = function set(prop, val) {
	if (this.state.hasOwnProperty(prop)) {
		this.state[prop] = val;
		return true;
	}

	return false;
};

/**
 * Create constructor
 * @param  {Object} 	opts 	optional state values to pass to create.
 * @return {Particle}     		returns a particle
 */
Particle.prototype.create = function(opts=INITIAL_STATE) {
	// A really basic flat level extend.
	opts = extend(true, {}, INITIAL_STATE, opts);
	const particle = new Particle(opts);
	return particle;
};

/**
 * Accelerate - A change in velocity.
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
 * @param  {Vector} grav gravity given.
 * @return {State}       state of position
 */
Particle.prototype.update = function update(grav=this.get("gravity")) {
	const velocity = this.accelerate(grav);
	const position = this.get("position").addTo(velocity);
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
 * @param  {Particle} p2     			A particle instance.
 * @param  {Vector} 	vector 			A vector instance.
 * @return {Vector}   veclocity 	The velocity of the current state.
 */
Particle.prototype.gravitateTo = function(p2, vector) {
	const grav = this.get("gravity") === null ?
		(vector.create(0, 0)) :
			(this.get("gravity"));

	const dist = this.distanceTo(p2);
	const velocity = this.get("velocity");

	grav.setLength(p2.mass / (dist * dist));
	grav.setAngle(this.angleTo(p2));

	velocity["+="](grav);
	return velocity;
};

module.exports = Particle;
