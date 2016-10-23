const INITAL_STATE = {
	x: 0,
	y: 1,
};

/**
 * Vector
 * @param {Object} state object.
 */
function Vector(state={x: 0, y: 1}) {
	state = Object.assign(INITAL_STATE, state);
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
	
	if (this.hasOwnProperty(prop)) {
		this[prop] = val;
		return true;
	}

	return false;
};

Vector.prototype.setAngle = function(rad) {
	// TODO: Add check rad is number
	// 1. Create utils.isNumber function.
	
	const length = this.getLength();

	this.set("x", Math.cos(rad) * length);
	this.set("y", Math.sin(rad) * length);
};

// let vector = (function (window, ctx) {
//   ctx = ctx || {};

//   const state = {
//     x: 1,
//     y: 0
//   };

//   const api = {
//     create: (x, y) => {
//       const vec = Object.create(vector);
//       vec.set.x(x);
//       vec.set.y(y);
//       return vec;
//     },
//     set: {
//       x: (x) => state.x = x,
//       y: (y) => state.y = y,
//       angle: function (rad) {
//         const l = this.get.length();
//         state.x = Math.cos(rad) * length;
//         state.y = Math.sin(rad) * length;
//       },
//       length: function (length) {
//         const rad = this.get.angle();
//         state.x = Math.cos(rad) * length;
//         state.y = Math.sin(rad) * length;
//       }
//     },
//     get: {
//       x: (x) => state.x,
//       y: (y) => state.y,
//       angle: () => Math.atan2(state.x, state.y),
//       length: () => Math.sqrt((state.x * state.x) + (state.y * state.y))
//     }
//   };

//   return api;
// })(window, document)
module.exports = Vector;
