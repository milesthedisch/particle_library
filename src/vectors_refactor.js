const INITIAL_STATE = {
	x: 0,
	y: 1,
};

/**
 * Vector
 * @param {Object} state object.
 */
function Vector(state=INITIAL_STATE) {
	this.state = state;
};

/**
 * Create - Easy way to instantiate a vector.
 * @param  {Int} x
 * @param  {Int} y
 * @return {Vector}   A object inheriting from Vector.
 */
Vector.prototype.create = function create(x, y) {
	const vec = new Vector({x, y});
	return vec;
};

/**
 * Set - A setter for the vector class.
 * @param  {*} prop
 * @param  {*} val
 * @return {Boolean} Is the prop your passing in exsist.
 */
Vector.prototype.set = function set(prop, val) {
	// TODO: Add check val is number
	// 1. Create utils.isNumber function.

	if (this.state.hasOwnProperty(prop)) {
		this.state[prop] = val;
		return true;
	}

	return false;
};

/**
 * setAngle - Plot the corrdinates based on radians given.
 * @param {radians} rad
 */
Vector.prototype.setAngle = function(rad) {
	// TODO: Add check rad is number
	// 1. Create utils.isNumber function.

	const length = this.getLength();

	this.set("x", Math.cos(rad) * length);
	this.set("y", Math.sin(rad) * length);
};

/**
 * setLength - Takes a length and sets coordinate.
 * @param {Integer} length
 */
Vector.prototype.setLength = function(length) {
	// TODO: Add check rad is number
	// 1. Create utils.isNumber function.

	const rad = this.getAngle();

	this.set("x", Math.cos(rad) * length);
	this.set("y", Math.sin(rad) * length);
};

/**
 * getLength - Gets length of the coordinates from center plane.
 * @return {Integer} - Cooridinates.
 */
Vector.prototype.getLength = function() {
	const x = this.state.x;
	const y = this.state.y;
	return Math.sqrt((x * x) + (y * y));
};

/**
 * getAngle - Get the angle of coordinates from center plane.
 * @return {Integer} - Cooridinates.
 */
Vector.prototype.getAngle = function() {
	const x = this.state.x;
	const y = this.state.y;
	return Math.atan2(y, x);
};

/**
 * add - Should add vectors together given a vector
 * @name subtract
 * @override ["-"]
 * @param {Vector} - A given vector to add.
 * @return {[Vector]} - A vector with cooridnates, or multiple vectors.
 */

Vector.prototype.add = Vector.prototype["+"] = function(v2) {
	const self = this;

	if (v2.constructor.name === "Array" && v2.length) {
		const vecs = v2.map((v) => ({x: v.state.x, y: v.state.y}))
		.reduce((v0, vn) =>
			({x: v0.x + vn.x, y: v0.y + vn.y}),
		self.state);

		return self.create(vecs.x, vecs.y);
	}

	return this.create(
		self.state.x + v2.state.x,
		self.state.y + v2.state.y
	);
};

/**
 * subtract - should subtract the given vector with its own vector.
 * @name subtract
 * @override ["-"]
 * @param  {[type]} v2 [description]
 * @return {[type]}    [description]
 */
Vector.prototype.subtract = Vector.prototype["-"] = function(v2) {
	const self = this;

	if (v2.constructor.name === "Array" && v2.length) {
		const vecs = v2.map((v) => ({x: v.state.x, y: v.state.y}))
		.reduce((v0, vn) =>
			({x: v0.x - vn.x, y: v0.y - vn.y}),
		self.state);

		return self.create(vecs.x, vecs.y);
	}

	return this.create(
		self.state.x - v2.state.x,
		self.state.y - v2.state.y
	);
};

module.exports = Vector;
