/**
 * The particle libary is used for physics animations.
 * they are not extremely accurate but still represent
 * and feel like physical movments.
 */

// The default state a particle starts with.
// It should not move.
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
 * Create constructor
 * @param  {Object} 	opts 	optional state values to pass to create.
 * @return {Particle}     	returns a particle
 */
Particle.prototype.create = function(opts) {
	// A really basic flat level extend.
	for (property in INITIAL_STATE) {
		if (opts.hasOwnProperty(property)) {
			INTITAL_STATE[property] = opts[property];
		}
	}

	return new Particle();
};

/**
 * Accelerate - A change in velocity.
 * @param  {Vector} accel The change in distance / time
 * @return {Value} 	state of the particle after accelerating.
 */
Particle.prototype.accelerate = function accelerate(accel) {
	this.state.velocity.addTo(accel);
	return this.state;
};

/**
 * Update - A update a position of a particle
 * based on its gravity
 *
 * @param  {Vector} grav gravity given.
 * @return {State}       state of the particle
 */
Particle.prototype.update = function update(grav=this.state.gravity) {
	this.state.velocity.addTo(this.state.gravity);
	this.state.position.addTo(this.state.velocity);
	return this.state;
};

module.exports = Particle;

var particle = {
	
	position: null,
	velocity: null,
	gravity: null,
	radius: 0,
	mass: 1,

	create: function (x, y, speed, direction, grav) {
		var obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.gravity = vector.create(0, grav || 0);
		return obj; 
	},
	
	accelerate: function (accel) {
		this.velocity.addTo(accel);
	},

	update: function () {
		this.velocity.addTo(this.gravity);
		this.position.addTo(this.velocity);
	},

	angleTo: function (p2) {
		return Math.atan2(p2.position.getY() - this.position.getY(), p2.position.getX() - this.position.getX());
	},

	distanceTo: function (p2) {
		var dx = p2.position.getX() - this.position.getX();
				dy = p2.position.getY() - this.position.getY();

		return Math.sqrt(dx * dx + dy * dy);
	},

	gravitateTo: function (p2) {
		var grav = vector.create(0, 0),
				dist = this.distanceTo(p2);

		grav.setLength(p2.mass / (dist * dist));  
		grav.setAngle(this.angleTo(p2));

		this.velocity.addTo(grav);
	} 

};
