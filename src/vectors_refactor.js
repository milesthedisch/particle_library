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
	console.log('NEW VECTOR', vec.state);
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
 * getLength - Gets length of the coordinates.
 * @return {Integer} - Cooridinates.
 */
Vector.prototype.getLength = function() {
	const x = this.state.x;
	const y = this.state.y;
	return Math.sqrt((x * x) + (y * y));
};

/**
 * getAngle - Get the angle the coordinates.
 * @return {Integer} - Cooridinates.
 */
Vector.prototype.getAngle = function() {
	const x = this.state.x;
	const y = this.state.y;
	return Math.atan2(y, x);
};

/**
 * add - Should add vectors together given a vector
 * @param {Vector} - A given vector to add.
 * @return {[Vector]} - A vector with cooridnates, or multiple vectors.
 */

Vector.prototype.add = function(v2) {
	if (typeof v2 === "array" && v2.length()) {
		const v = v2.reduce((v) => ({
			x: v.state.x + this.state.x,
			y: v.state.y + this.state.y,
		}), this.state);

		return vector.create(v);
	}

	return this.create(
		this.state.x + v2.state.x,
		this.state.y + v2.state.y
	);
};

module.exports = Vector;
