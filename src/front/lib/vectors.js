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
 * get - A getter for the vector class.
 * @param  {String} prop 	The prop to set on state.
 * @return {Value} 				The value assosiated with the prop.
 */
Vector.prototype.get = function get(prop) {
	return this.state[prop];
};

/**
 * setAngle - Plot the corrdinates based on radians given.
 * @param {Radians}	rad A floating point number.
 */
Vector.prototype.setAngle = function setAngle(rad) {
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
Vector.prototype.setLength = function setLength(length) {
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
Vector.prototype.getLength = function getLength() {
	const x = this.get("x");
	const y = this.get("y");
	return Math.hypot(x, y);
};

/**
 * getAngle - Get the angle of coordinates from center plane.
 * @return {Integer} - Cooridinates.
 */
Vector.prototype.getAngle = function getAngle() {
	const x = this.get("x");
	const y = this.get("y");
	return Math.atan2(y, x);
};

/**
 * add - Should add vectors together given a vector
 * @name add
 * @override ["+"]
 * @param {Vector} - A given vector to add.
 * @return {Vector} - A vector with cooridnates, or multiple vectors.
 */

Vector.prototype.add = Vector.prototype["+"] = function add(v2) {
	const self = this;

	if (v2.constructor.name === "Array" && v2.length) {
		// Refactor to make more effecient //
		const vecs = v2.map((v) => ({x: v.get("x"), y: v.get("y")}))
		.reduce((v0, vn) =>
			({x: v0.x + vn.x, y: v0.y + vn.y}),
		self.state);

		return self.create(vecs.x, vecs.y);
	}

	return this.create(
		self.get("x") + v2.get("x"),
		self.get("y") + v2.get("y")
	);
};

/**
 * subtract - should subtract the given vector with its own vector.
 * ie: {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
 * @name subtract
 * @override ["-"]
 * @param  {Vector} v2 A vector that contains state.
 * @return {Vector} A vector that contains a reduced state.
 */
Vector.prototype.subtract = Vector.prototype["-"] = function(v2) {
	const self = this;

	if (v2.constructor.name === "Array" && v2.length) {
		// Refactor to make more effecient //
		const vecs = v2.map((v) => ({x: v.get("x"), y: v.get("y")}))
		.reduce((v0, vn) =>
			({x: v0.x - vn.x, y: v0.y - vn.y}),
		self.state);

		return self.create(vecs.x, vecs.y);
	}

	return this.create(
		self.get("x") - v2.get("x"),
		self.get("y") - v2.get("y")
	);
};

/**
 * Mulitplying vectors together
 * ie: {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
 * @name multiply
 * @override ["*"]
 * @param  {Vector} v2 A vector that contains state.
 * @return {Vector}    A vector that contains a reduced state.
 */
Vector.prototype.multiply = Vector.prototype["*"] = function(v2) {
	return this.create(
		this.get("x") * v2.get("x"),
		this.get("y") * v2.get("y")
	);
};

/**
 * Divide vectors together.
 * @name Divide
 * @override ["/"]
 * @param  {Vector} v2 A vector that contains state.
 * @return {Vector}    A vector that contains a reduced state.
 */
Vector.prototype.divide = Vector.prototype["/"] = function(v2) {
	return this.create(
		this.get("x") / v2.get("x"),
		this.get("y") / v2.get("y")
	);
};

/**
 * Adds to current state the state of v2
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
Vector.prototype.addTo = Vector.prototype["+="] = function(v2) {
	this.state.x = this.get("x") + v2.get("x");
	this.state.y = this.get("y") + v2.get("y");
	return this.state;
};

/**
 * Subtracts from current state the state of v2
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
Vector.prototype.subtractFrom = Vector.prototype["-="] = function(v2) {
	this.state.x = this.get("x") - v2.get("x");
	this.state.y = this.get("y") - v2.get("y");
	return this.state;
};

/**
 * mulitplies by current state the state of v2
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
Vector.prototype.multiplyBy = Vector.prototype["*="] = function(v2) {
	this.state.x = this.get("x") * v2.get("x");
	this.state.y = this.get("y") * v2.get("y");
	return this.state;
};

/**
 * Divides by current state the state of v2
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
Vector.prototype.divideBy = Vector.prototype["/="] = function(v2) {
	this.state.x = this.get("x") / v2.get("x");
	this.state.y = this.get("y") / v2.get("y");
	return this.state;
};

module.exports = Vector;
