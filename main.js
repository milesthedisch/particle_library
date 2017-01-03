(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["particle"] = factory();
	else
		root["particle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Vector = __webpack_require__(2);
	var Particle = __webpack_require__(4);
	var Utils = __webpack_require__(3);
	var Shapes = __webpack_require__(6);
	
	module.exports = {
	  Vector: Vector,
	  Particle: Particle,
	  Utils: Utils,
	  Shapes: Shapes
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var utils = __webpack_require__(3);
	
	var INITIAL_STATE = {
	  x: 0,
	  y: 1
	};
	
	/**
	 * Vector
	 * @param {Object} state object.
	 */
	function Vector() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  this.state = state;
	};
	
	/**
	 * Create - Easy way to instantiate a vector.
	 * @param  {Int} x
	 * @param  {Int} y
	 * @return {Vector}   A object inheriting from Vector.
	 */
	Vector.prototype.create = function create(x, y) {
	  var vec = new Vector({ x: x, y: y });
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
	
	  var length = this.getLength();
	
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
	
	  var rad = this.getAngle();
	
	  this.set("x", Math.cos(rad) * length);
	  this.set("y", Math.sin(rad) * length);
	};
	
	/**
	 * getLength - Gets length of the coordinates from center plane.
	 * @return {Integer} - Cooridinates.
	 */
	Vector.prototype.getLength = function getLength() {
	  var x = this.get("x");
	  var y = this.get("y");
	  return Math.hypot(x, y);
	};
	
	/**
	 * getAngle - Get the angle of coordinates from center plane.
	 * @return {Integer} - Cooridinates.
	 */
	Vector.prototype.getAngle = function getAngle() {
	  var x = this.get("x");
	  var y = this.get("y");
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
	  var self = this;
	
	  if (v2.constructor.name === "Array" && v2.length) {
	    // Refactor to make more effecient //
	    var vecs = v2.map(function (v) {
	      return { x: v.get("x"), y: v.get("y") };
	    }).reduce(function (v0, vn) {
	      return { x: v0.x + vn.x, y: v0.y + vn.y };
	    }, self.state);
	
	    return self.create(vecs.x, vecs.y);
	  }
	
	  return this.create(self.get("x") + v2.get("x"), self.get("y") + v2.get("y"));
	};
	
	/**
	 * subtract - should subtract the given vector with its own vector.
	 * ie: {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	 * @name subtract
	 * @override ["-"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector} A vector that contains a reduced state.
	 */
	Vector.prototype.subtract = Vector.prototype["-"] = function subtract(v2) {
	  var self = this;
	
	  if (v2.constructor.name === "Array" && v2.length) {
	    // Refactor to make more effecient //
	    var vecs = v2.map(function (v) {
	      return { x: v.get("x"), y: v.get("y") };
	    }).reduce(function (v0, vn) {
	      return { x: v0.x - vn.x, y: v0.y - vn.y };
	    }, self.state);
	
	    return self.create(vecs.x, vecs.y);
	  }
	
	  return this.create(self.get("x") - v2.get("x"), self.get("y") - v2.get("y"));
	};
	
	/**
	 * Mulitplying vectors together
	 * ie: {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	 * @name multiply
	 * @override ["*"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.multiply = Vector.prototype["*"] = function multiply(v2) {
	  return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
	};
	
	/**
	 * Divide vectors together.
	 * @name Divide
	 * @override ["/"]
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.divide = Vector.prototype["/"] = function divide(v2) {
	  return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
	};
	
	/**
	 * Adds to current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.addTo = Vector.prototype["+="] = function addTo(v2) {
	  this.state.x = this.get("x") + v2.get("x");
	  this.state.y = this.get("y") + v2.get("y");
	  return this.state;
	};
	
	/**
	 * Subtracts from current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.subtractFrom = Vector.prototype["-="] = function subtractFrom(v2) {
	  this.state.x = this.get("x") - v2.get("x");
	  this.state.y = this.get("y") - v2.get("y");
	  return this.state;
	};
	
	/**
	 * mulitplies by current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.multiplyBy = Vector.prototype["*="] = function multiplyBy(v2) {
	  this.state.x = this.get("x") * v2.get("x");
	  this.state.y = this.get("y") * v2.get("y");
	  return this.state;
	};
	
	/**
	 * Divides by current state the state of v2
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.divideBy = Vector.prototype["/="] = function divideBy(v2) {
	  this.state.x = this.get("x") / v2.get("x");
	  this.state.y = this.get("y") / v2.get("y");
	  return this.state;
	};
	
	/**
	 * random generate a vector with random states.
	 * @param {Number} min - A min range on the random vector state.
	 * @param {Number} max - A max range on the random vector state.
	 * @return {Vector}
	 */
	Vector.prototype.random = function randomVector() {
	  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
	  var x = Math.floor(utils.lerp(Math.random(), min, max));
	  var y = Math.floor(utils.lerp(Math.random(), min, max));
	  return this.create(x, y);
	};
	
	module.exports = Vector;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * This module is composed of small function that
	 * should be used when needed. Most functions are pure
	 * and only return values. For more info read the docs.
	 */
	
	/**
	 * Utils constructor
	 * @return {Self} it self
	 */
	function Utils() {
	  return this;
	};
	
	/**
	 * normalize - Takes a max and min value and returns
	 * a floating point number, that when multiplied
	 * by one hundred represents a precentage of the range
	 * between max and min.
	 *
	 * @param  {Int} val - The value that lies in the range.
	 * @param  {Int} max - The maxium value in the range.
	 * @param  {Int} min - The minimum value in the range.
	 * @return {Int} Int - The value represented in that range.
	 */
	Utils.prototype.normalize = function normalize(val, max, min) {
	  return (val - min) / (max - min);
	};
	
	/**
	 * lerp - linear interpolation takes a range and a given normalized value
	 * and returns a value that represents that normalized value in that range.
	 * @param  {Interger} val
	 * @param  {Interger} min
	 * @param  {Interger} max
	 * @return {Interger}
	 */
	Utils.prototype.lerp = function lerp(val, min, max) {
	  return (max - min) * val + min;
	};
	
	/**
	 * precent - Takes a value and returns a precentage.
	 * you can pass arbitrary large numbers in but thats not
	 * the intended purpose of this function.
	 *
	 * @param  {Float} val 	A value.
	 * @return {Percent}    A value.
	 */
	Utils.prototype.precent = function (val) {
	  return val * 100;
	};
	
	module.exports = new Utils();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * The particle libary is used for physics animations.
	 * they are not extremely accurate but still represent
	 * and feel like physical movments.
	 */
	var extend = __webpack_require__(5);
	
	// The default state a particle starts with It should not move.
	var INITIAL_STATE = {
	  position: null,
	  velocity: null,
	  gravity: null,
	  radius: 0,
	  mass: 1
	};
	
	/**
	 * Particle constructor
	 * @param {state} state initial state to pass the constructor
	 */
	function Particle() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
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
	Particle.prototype.create = function () {
	  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  // A really basic flat level extend.
	  opts = extend(true, {}, INITIAL_STATE, opts);
	  var particle = new Particle(opts);
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
	Particle.prototype.update = function update() {
	  var grav = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.get("gravity");
	
	  var velocity = this.accelerate(grav);
	  var position = this.get("position").addTo(velocity);
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
	  var dx = p2.get("position").get("x") - this.get("position").get("x");
	  var dy = p2.get("position").get("y") - this.get("position").get("y");
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
	  var deltaX = p2.get("position").get("x") - this.get("position").get("x");
	  var deltaY = p2.get("position").get("y") - this.get("position").get("y");
	  return Math.hypot(deltaX, deltaY);
	};
	
	/**
	 * gravitateTo - Creates a gravity vector if he
	 * @param  {Particle} p2     			A particle instance.
	 * @param  {Vector} 	vector 			A vector instance.
	 * @return {Vector}   veclocity 	The velocity of the current state.
	 */
	Particle.prototype.gravitateTo = function (p2, vector) {
	  var grav = this.get("gravity") === null ? vector.create(0, 0) : this.get("gravity");
	
	  var dist = this.distanceTo(p2);
	  var velocity = this.get("velocity");
	
	  grav.setLength(p2.mass / (dist * dist));
	  grav.setAngle(this.angleTo(p2));
	
	  velocity["+="](grav);
	  return velocity;
	};
	
	module.exports = Particle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Shapes constuctor
	 * @param {Object} ctx      Canvas context.
	 * @param {Object} document The document object.
	 */
	function Shapes(ctx, document) {
	  if (!ctx) {
	    throw new Error("Shapes: Please provide a context argument [arg::1]");
	  }
	  this.ctx = ctx;
	  this.document = document || window.document;
	};
	
	/**
	 * circle - Draws a simples circle
	 * @param  {Number} x     The x coordinate of the circle.
	 * @param  {Number} y     The y coordinate of the circle.
	 * @param  {Number} r     The radius of the circle.
	 * @param  {String} color The color of the circle.
	 */
	Shapes.prototype.circle = function drawCircle() {
	  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
	  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
	  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
	
	  this.ctx.fillStyle = color;
	  this.ctx.beginPath();
	  this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
	  this.ctx.fill();
	};
	
	module.exports = Shapes;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjZmJjMDAyYTM2MWNkZTUzZjQ1MiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvc2hhcGVzLmpzIl0sIm5hbWVzIjpbIlZlY3RvciIsInJlcXVpcmUiLCJQYXJ0aWNsZSIsIlV0aWxzIiwiU2hhcGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsInV0aWxzIiwiSU5JVElBTF9TVEFURSIsIngiLCJ5Iiwic3RhdGUiLCJwcm90b3R5cGUiLCJjcmVhdGUiLCJ2ZWMiLCJzZXQiLCJwcm9wIiwidmFsIiwiaGFzT3duUHJvcGVydHkiLCJnZXQiLCJzZXRBbmdsZSIsInJhZCIsImxlbmd0aCIsImdldExlbmd0aCIsIk1hdGgiLCJjb3MiLCJzaW4iLCJzZXRMZW5ndGgiLCJnZXRBbmdsZSIsImh5cG90IiwiYXRhbjIiLCJhZGQiLCJ2MiIsInNlbGYiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2ZWNzIiwibWFwIiwidiIsInJlZHVjZSIsInYwIiwidm4iLCJzdWJ0cmFjdCIsIm11bHRpcGx5IiwiZGl2aWRlIiwiYWRkVG8iLCJzdWJ0cmFjdEZyb20iLCJtdWx0aXBseUJ5IiwiZGl2aWRlQnkiLCJyYW5kb20iLCJyYW5kb21WZWN0b3IiLCJtaW4iLCJtYXgiLCJmbG9vciIsImxlcnAiLCJub3JtYWxpemUiLCJwcmVjZW50IiwiZXh0ZW5kIiwicG9zaXRpb24iLCJ2ZWxvY2l0eSIsImdyYXZpdHkiLCJyYWRpdXMiLCJtYXNzIiwib3B0cyIsInBhcnRpY2xlIiwiYWNjZWxlcmF0ZSIsImFjY2VsIiwidXBkYXRlIiwiZ3JhdiIsImFuZ2xlVG8iLCJhbmdlbFRvIiwicDIiLCJkeCIsImR5IiwiZGlzdGFuY2VUbyIsImRlbHRhWCIsImRlbHRhWSIsImdyYXZpdGF0ZVRvIiwidmVjdG9yIiwiZGlzdCIsImN0eCIsImRvY3VtZW50IiwiRXJyb3IiLCJ3aW5kb3ciLCJjaXJjbGUiLCJkcmF3Q2lyY2xlIiwiciIsImNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiUEkiLCJmaWxsIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBTUEsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7QUFDQSxLQUFNQyxXQUFXLG1CQUFBRCxDQUFRLENBQVIsQ0FBakI7QUFDQSxLQUFNRSxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDtBQUNBLEtBQU1HLFNBQVMsbUJBQUFILENBQVEsQ0FBUixDQUFmOztBQUVBSSxRQUFPQyxPQUFQLEdBQWlCO0FBQ2ZOLGlCQURlO0FBRWZFLHFCQUZlO0FBR2ZDLGVBSGU7QUFJZkM7QUFKZSxFQUFqQixDOzs7Ozs7OztBQ0xBLEtBQU1HLFFBQVEsbUJBQUFOLENBQVEsQ0FBUixDQUFkOztBQUVBLEtBQU1PLGdCQUFnQjtBQUNwQkMsTUFBRyxDQURpQjtBQUVwQkMsTUFBRztBQUZpQixFQUF0Qjs7QUFLQTs7OztBQUlBLFVBQVNWLE1BQVQsR0FBcUM7QUFBQSxPQUFyQlcsS0FBcUIsdUVBQWZILGFBQWU7O0FBQ25DLFFBQUtHLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVEOzs7Ozs7QUFNQVgsUUFBT1ksU0FBUCxDQUFpQkMsTUFBakIsR0FBMEIsU0FBU0EsTUFBVCxDQUFnQkosQ0FBaEIsRUFBbUJDLENBQW5CLEVBQXNCO0FBQzlDLE9BQU1JLE1BQU0sSUFBSWQsTUFBSixDQUFXLEVBQUNTLElBQUQsRUFBSUMsSUFBSixFQUFYLENBQVo7QUFDQSxVQUFPSSxHQUFQO0FBQ0QsRUFIRDs7QUFLQTs7Ozs7O0FBTUFkLFFBQU9ZLFNBQVAsQ0FBaUJHLEdBQWpCLEdBQXVCLFNBQVNBLEdBQVQsQ0FBYUMsSUFBYixFQUFtQkMsR0FBbkIsRUFBd0I7QUFDOUM7QUFDQTs7QUFFQyxPQUFJLEtBQUtOLEtBQUwsQ0FBV08sY0FBWCxDQUEwQkYsSUFBMUIsQ0FBSixFQUFxQztBQUNuQyxVQUFLTCxLQUFMLENBQVdLLElBQVgsSUFBbUJDLEdBQW5CO0FBQ0EsWUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTyxLQUFQO0FBQ0QsRUFWRDs7QUFZQTs7Ozs7QUFLQWpCLFFBQU9ZLFNBQVAsQ0FBaUJPLEdBQWpCLEdBQXVCLFNBQVNBLEdBQVQsQ0FBYUgsSUFBYixFQUFtQjtBQUN4QyxVQUFPLEtBQUtMLEtBQUwsQ0FBV0ssSUFBWCxDQUFQO0FBQ0QsRUFGRDs7QUFJQTs7OztBQUlBaEIsUUFBT1ksU0FBUCxDQUFpQlEsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDbEQ7QUFDQTs7QUFFQyxPQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjs7QUFFQSxRQUFLUixHQUFMLENBQVMsR0FBVCxFQUFjUyxLQUFLQyxHQUFMLENBQVNKLEdBQVQsSUFBZ0JDLE1BQTlCO0FBQ0EsUUFBS1AsR0FBTCxDQUFTLEdBQVQsRUFBY1MsS0FBS0UsR0FBTCxDQUFTTCxHQUFULElBQWdCQyxNQUE5QjtBQUNELEVBUkQ7O0FBVUE7Ozs7QUFJQXRCLFFBQU9ZLFNBQVAsQ0FBaUJlLFNBQWpCLEdBQTZCLFNBQVNBLFNBQVQsQ0FBbUJMLE1BQW5CLEVBQTJCO0FBQ3ZEO0FBQ0E7O0FBRUMsT0FBTUQsTUFBTSxLQUFLTyxRQUFMLEVBQVo7O0FBRUEsUUFBS2IsR0FBTCxDQUFTLEdBQVQsRUFBY1MsS0FBS0MsR0FBTCxDQUFTSixHQUFULElBQWdCQyxNQUE5QjtBQUNBLFFBQUtQLEdBQUwsQ0FBUyxHQUFULEVBQWNTLEtBQUtFLEdBQUwsQ0FBU0wsR0FBVCxJQUFnQkMsTUFBOUI7QUFDRCxFQVJEOztBQVVBOzs7O0FBSUF0QixRQUFPWSxTQUFQLENBQWlCVyxTQUFqQixHQUE2QixTQUFTQSxTQUFULEdBQXFCO0FBQ2hELE9BQU1kLElBQUksS0FBS1UsR0FBTCxDQUFTLEdBQVQsQ0FBVjtBQUNBLE9BQU1ULElBQUksS0FBS1MsR0FBTCxDQUFTLEdBQVQsQ0FBVjtBQUNBLFVBQU9LLEtBQUtLLEtBQUwsQ0FBV3BCLENBQVgsRUFBY0MsQ0FBZCxDQUFQO0FBQ0QsRUFKRDs7QUFNQTs7OztBQUlBVixRQUFPWSxTQUFQLENBQWlCZ0IsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxHQUFvQjtBQUM5QyxPQUFNbkIsSUFBSSxLQUFLVSxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsT0FBTVQsSUFBSSxLQUFLUyxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsVUFBT0ssS0FBS00sS0FBTCxDQUFXcEIsQ0FBWCxFQUFjRCxDQUFkLENBQVA7QUFDRCxFQUpEOztBQU1BOzs7Ozs7OztBQVFBVCxRQUFPWSxTQUFQLENBQWlCbUIsR0FBakIsR0FBdUIvQixPQUFPWSxTQUFQLENBQWlCLEdBQWpCLElBQXdCLFNBQVNtQixHQUFULENBQWFDLEVBQWIsRUFBaUI7QUFDOUQsT0FBTUMsT0FBTyxJQUFiOztBQUVBLE9BQUlELEdBQUdFLFdBQUgsQ0FBZUMsSUFBZixLQUF3QixPQUF4QixJQUFtQ0gsR0FBR1YsTUFBMUMsRUFBa0Q7QUFDbEQ7QUFDRSxTQUFNYyxPQUFPSixHQUFHSyxHQUFILENBQU8sVUFBQ0MsQ0FBRDtBQUFBLGNBQVEsRUFBQzdCLEdBQUc2QixFQUFFbkIsR0FBRixDQUFNLEdBQU4sQ0FBSixFQUFnQlQsR0FBRzRCLEVBQUVuQixHQUFGLENBQU0sR0FBTixDQUFuQixFQUFSO0FBQUEsTUFBUCxFQUNkb0IsTUFEYyxDQUNQLFVBQUNDLEVBQUQsRUFBS0MsRUFBTDtBQUFBLGNBQ04sRUFBQ2hDLEdBQUcrQixHQUFHL0IsQ0FBSCxHQUFPZ0MsR0FBR2hDLENBQWQsRUFBaUJDLEdBQUc4QixHQUFHOUIsQ0FBSCxHQUFPK0IsR0FBRy9CLENBQTlCLEVBRE07QUFBQSxNQURPLEVBR2Z1QixLQUFLdEIsS0FIVSxDQUFiOztBQUtBLFlBQU9zQixLQUFLcEIsTUFBTCxDQUFZdUIsS0FBSzNCLENBQWpCLEVBQW9CMkIsS0FBSzFCLENBQXpCLENBQVA7QUFDRDs7QUFFRCxVQUFPLEtBQUtHLE1BQUwsQ0FDUG9CLEtBQUtkLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQURULEVBRVBjLEtBQUtkLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUZULENBQVA7QUFJRCxFQWpCRDs7QUFtQkE7Ozs7Ozs7O0FBUUFuQixRQUFPWSxTQUFQLENBQWlCOEIsUUFBakIsR0FBNEIxQyxPQUFPWSxTQUFQLENBQWlCLEdBQWpCLElBQXdCLFNBQVM4QixRQUFULENBQWtCVixFQUFsQixFQUFzQjtBQUN4RSxPQUFNQyxPQUFPLElBQWI7O0FBRUEsT0FBSUQsR0FBR0UsV0FBSCxDQUFlQyxJQUFmLEtBQXdCLE9BQXhCLElBQW1DSCxHQUFHVixNQUExQyxFQUFrRDtBQUNsRDtBQUNFLFNBQU1jLE9BQU9KLEdBQUdLLEdBQUgsQ0FBTyxVQUFDQyxDQUFEO0FBQUEsY0FBUSxFQUFDN0IsR0FBRzZCLEVBQUVuQixHQUFGLENBQU0sR0FBTixDQUFKLEVBQWdCVCxHQUFHNEIsRUFBRW5CLEdBQUYsQ0FBTSxHQUFOLENBQW5CLEVBQVI7QUFBQSxNQUFQLEVBQ2RvQixNQURjLENBQ1AsVUFBQ0MsRUFBRCxFQUFLQyxFQUFMO0FBQUEsY0FDTixFQUFDaEMsR0FBRytCLEdBQUcvQixDQUFILEdBQU9nQyxHQUFHaEMsQ0FBZCxFQUFpQkMsR0FBRzhCLEdBQUc5QixDQUFILEdBQU8rQixHQUFHL0IsQ0FBOUIsRUFETTtBQUFBLE1BRE8sRUFHZnVCLEtBQUt0QixLQUhVLENBQWI7O0FBS0EsWUFBT3NCLEtBQUtwQixNQUFMLENBQVl1QixLQUFLM0IsQ0FBakIsRUFBb0IyQixLQUFLMUIsQ0FBekIsQ0FBUDtBQUNEOztBQUVELFVBQU8sS0FBS0csTUFBTCxDQUNQb0IsS0FBS2QsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRFQsRUFFUGMsS0FBS2QsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRlQsQ0FBUDtBQUlELEVBakJEOztBQW1CQTs7Ozs7Ozs7QUFRQW5CLFFBQU9ZLFNBQVAsQ0FBaUIrQixRQUFqQixHQUE0QjNDLE9BQU9ZLFNBQVAsQ0FBaUIsR0FBakIsSUFBd0IsU0FBUytCLFFBQVQsQ0FBa0JYLEVBQWxCLEVBQXNCO0FBQ3hFLFVBQU8sS0FBS25CLE1BQUwsQ0FDUCxLQUFLTSxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FEVCxFQUVQLEtBQUtBLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUZULENBQVA7QUFJRCxFQUxEOztBQU9BOzs7Ozs7O0FBT0FuQixRQUFPWSxTQUFQLENBQWlCZ0MsTUFBakIsR0FBMEI1QyxPQUFPWSxTQUFQLENBQWlCLEdBQWpCLElBQXdCLFNBQVNnQyxNQUFULENBQWdCWixFQUFoQixFQUFvQjtBQUNwRSxVQUFPLEtBQUtuQixNQUFMLENBQ1AsS0FBS00sR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRFQsRUFFUCxLQUFLQSxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FGVCxDQUFQO0FBSUQsRUFMRDs7QUFPQTs7Ozs7QUFLQW5CLFFBQU9ZLFNBQVAsQ0FBaUJpQyxLQUFqQixHQUF5QjdDLE9BQU9ZLFNBQVAsQ0FBaUIsSUFBakIsSUFBeUIsU0FBU2lDLEtBQVQsQ0FBZWIsRUFBZixFQUFtQjtBQUNuRSxRQUFLckIsS0FBTCxDQUFXRixDQUFYLEdBQWUsS0FBS1UsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBQS9CO0FBQ0EsUUFBS1IsS0FBTCxDQUFXRCxDQUFYLEdBQWUsS0FBS1MsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBQS9CO0FBQ0EsVUFBTyxLQUFLUixLQUFaO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7QUFLQVgsUUFBT1ksU0FBUCxDQUFpQmtDLFlBQWpCLEdBQWdDOUMsT0FBT1ksU0FBUCxDQUFpQixJQUFqQixJQUF5QixTQUFTa0MsWUFBVCxDQUFzQmQsRUFBdEIsRUFBMEI7QUFDakYsUUFBS3JCLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlLEtBQUtVLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFFBQUtSLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtTLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFVBQU8sS0FBS1IsS0FBWjtBQUNELEVBSkQ7O0FBTUE7Ozs7O0FBS0FYLFFBQU9ZLFNBQVAsQ0FBaUJtQyxVQUFqQixHQUE4Qi9DLE9BQU9ZLFNBQVAsQ0FBaUIsSUFBakIsSUFBeUIsU0FBU21DLFVBQVQsQ0FBb0JmLEVBQXBCLEVBQXdCO0FBQzdFLFFBQUtyQixLQUFMLENBQVdGLENBQVgsR0FBZSxLQUFLVSxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FBL0I7QUFDQSxRQUFLUixLQUFMLENBQVdELENBQVgsR0FBZSxLQUFLUyxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FBL0I7QUFDQSxVQUFPLEtBQUtSLEtBQVo7QUFDRCxFQUpEOztBQU1BOzs7OztBQUtBWCxRQUFPWSxTQUFQLENBQWlCb0MsUUFBakIsR0FBNEJoRCxPQUFPWSxTQUFQLENBQWlCLElBQWpCLElBQXlCLFNBQVNvQyxRQUFULENBQWtCaEIsRUFBbEIsRUFBc0I7QUFDekUsUUFBS3JCLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlLEtBQUtVLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFFBQUtSLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtTLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFVBQU8sS0FBS1IsS0FBWjtBQUNELEVBSkQ7O0FBTUE7Ozs7OztBQU1BWCxRQUFPWSxTQUFQLENBQWlCcUMsTUFBakIsR0FBMEIsU0FBU0MsWUFBVCxHQUFxQztBQUFBLE9BQWZDLEdBQWUsdUVBQVgsQ0FBVztBQUFBLE9BQVJDLEdBQVEsdUVBQUosRUFBSTs7QUFDN0QsT0FBTTNDLElBQUllLEtBQUs2QixLQUFMLENBQVc5QyxNQUFNK0MsSUFBTixDQUFXOUIsS0FBS3lCLE1BQUwsRUFBWCxFQUEwQkUsR0FBMUIsRUFBK0JDLEdBQS9CLENBQVgsQ0FBVjtBQUNBLE9BQU0xQyxJQUFJYyxLQUFLNkIsS0FBTCxDQUFXOUMsTUFBTStDLElBQU4sQ0FBVzlCLEtBQUt5QixNQUFMLEVBQVgsRUFBMEJFLEdBQTFCLEVBQStCQyxHQUEvQixDQUFYLENBQVY7QUFDQSxVQUFPLEtBQUt2QyxNQUFMLENBQVlKLENBQVosRUFBZUMsQ0FBZixDQUFQO0FBQ0QsRUFKRDs7QUFNQUwsUUFBT0MsT0FBUCxHQUFpQk4sTUFBakIsQzs7Ozs7Ozs7QUNoUEE7Ozs7OztBQU1BOzs7O0FBSUEsVUFBU0csS0FBVCxHQUFpQjtBQUNmLFVBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7OztBQVdBQSxPQUFNUyxTQUFOLENBQWdCMkMsU0FBaEIsR0FBNEIsU0FBU0EsU0FBVCxDQUFtQnRDLEdBQW5CLEVBQXdCbUMsR0FBeEIsRUFBNkJELEdBQTdCLEVBQWtDO0FBQzVELFVBQU8sQ0FBQ2xDLE1BQU1rQyxHQUFQLEtBQWVDLE1BQU1ELEdBQXJCLENBQVA7QUFDRCxFQUZEOztBQUlBOzs7Ozs7OztBQVFBaEQsT0FBTVMsU0FBTixDQUFnQjBDLElBQWhCLEdBQXVCLFNBQVNBLElBQVQsQ0FBY3JDLEdBQWQsRUFBbUJrQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDbEQsVUFBTyxDQUFDQSxNQUFNRCxHQUFQLElBQWNsQyxHQUFkLEdBQW9Ca0MsR0FBM0I7QUFDRCxFQUZEOztBQUlBOzs7Ozs7OztBQVFBaEQsT0FBTVMsU0FBTixDQUFnQjRDLE9BQWhCLEdBQTBCLFVBQVN2QyxHQUFULEVBQWM7QUFDdEMsVUFBT0EsTUFBTSxHQUFiO0FBQ0QsRUFGRDs7QUFJQVosUUFBT0MsT0FBUCxHQUFpQixJQUFJSCxLQUFKLEVBQWpCLEM7Ozs7Ozs7O0FDckRBOzs7OztBQUtBLEtBQU1zRCxTQUFTLG1CQUFBeEQsQ0FBUSxDQUFSLENBQWY7O0FBRUE7QUFDQSxLQUFNTyxnQkFBZ0I7QUFDcEJrRCxhQUFVLElBRFU7QUFFcEJDLGFBQVUsSUFGVTtBQUdwQkMsWUFBUyxJQUhXO0FBSXBCQyxXQUFRLENBSlk7QUFLcEJDLFNBQU07QUFMYyxFQUF0Qjs7QUFRQTs7OztBQUlBLFVBQVM1RCxRQUFULEdBQXVDO0FBQUEsT0FBckJTLEtBQXFCLHVFQUFmSCxhQUFlOztBQUNyQyxRQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7QUFLQVQsVUFBU1UsU0FBVCxDQUFtQk8sR0FBbkIsR0FBeUIsU0FBU0EsR0FBVCxDQUFhSCxJQUFiLEVBQW1CO0FBQzFDLFVBQU8sS0FBS0wsS0FBTCxDQUFXSyxJQUFYLENBQVA7QUFDRCxFQUZEOztBQUlBOzs7Ozs7O0FBT0FkLFVBQVNVLFNBQVQsQ0FBbUJHLEdBQW5CLEdBQXlCLFNBQVNBLEdBQVQsQ0FBYUMsSUFBYixFQUFtQkMsR0FBbkIsRUFBd0I7QUFDL0MsT0FBSSxLQUFLTixLQUFMLENBQVdPLGNBQVgsQ0FBMEJGLElBQTFCLENBQUosRUFBcUM7QUFDbkMsVUFBS0wsS0FBTCxDQUFXSyxJQUFYLElBQW1CQyxHQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNEOztBQUVELFVBQU8sS0FBUDtBQUNELEVBUEQ7O0FBU0E7Ozs7O0FBS0FmLFVBQVNVLFNBQVQsQ0FBbUJDLE1BQW5CLEdBQTRCLFlBQTZCO0FBQUEsT0FBcEJrRCxJQUFvQix1RUFBZnZELGFBQWU7O0FBQ3hEO0FBQ0N1RCxVQUFPTixPQUFPLElBQVAsRUFBYSxFQUFiLEVBQWlCakQsYUFBakIsRUFBZ0N1RCxJQUFoQyxDQUFQO0FBQ0EsT0FBTUMsV0FBVyxJQUFJOUQsUUFBSixDQUFhNkQsSUFBYixDQUFqQjtBQUNBLFVBQU9DLFFBQVA7QUFDRCxFQUxEOztBQU9BOzs7OztBQUtBOUQsVUFBU1UsU0FBVCxDQUFtQnFELFVBQW5CLEdBQWdDLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3pELFFBQUsvQyxHQUFMLENBQVMsVUFBVCxFQUFxQjBCLEtBQXJCLENBQTJCcUIsS0FBM0I7QUFDQSxVQUFPLEtBQUsvQyxHQUFMLENBQVMsVUFBVCxDQUFQO0FBQ0QsRUFIRDs7QUFLQTs7Ozs7Ozs7QUFRQWpCLFVBQVNVLFNBQVQsQ0FBbUJ1RCxNQUFuQixHQUE0QixTQUFTQSxNQUFULEdBQTBDO0FBQUEsT0FBMUJDLElBQTBCLHVFQUFyQixLQUFLakQsR0FBTCxDQUFTLFNBQVQsQ0FBcUI7O0FBQ3BFLE9BQU13QyxXQUFXLEtBQUtNLFVBQUwsQ0FBZ0JHLElBQWhCLENBQWpCO0FBQ0EsT0FBTVYsV0FBVyxLQUFLdkMsR0FBTCxDQUFTLFVBQVQsRUFBcUIwQixLQUFyQixDQUEyQmMsUUFBM0IsQ0FBakI7QUFDQSxVQUFPRCxRQUFQO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7Ozs7Ozs7O0FBWUF4RCxVQUFTVSxTQUFULENBQW1CeUQsT0FBbkIsR0FBNkIsU0FBU0MsT0FBVCxDQUFpQkMsRUFBakIsRUFBcUI7QUFDaEQsT0FBTUMsS0FBS0QsR0FBR3BELEdBQUgsQ0FBTyxVQUFQLEVBQW1CQSxHQUFuQixDQUF1QixHQUF2QixJQUE4QixLQUFLQSxHQUFMLENBQVMsVUFBVCxFQUFxQkEsR0FBckIsQ0FBeUIsR0FBekIsQ0FBekM7QUFDQSxPQUFNc0QsS0FBS0YsR0FBR3BELEdBQUgsQ0FBTyxVQUFQLEVBQW1CQSxHQUFuQixDQUF1QixHQUF2QixJQUE4QixLQUFLQSxHQUFMLENBQVMsVUFBVCxFQUFxQkEsR0FBckIsQ0FBeUIsR0FBekIsQ0FBekM7QUFDQSxVQUFPSyxLQUFLTSxLQUFMLENBQVcyQyxFQUFYLEVBQWVELEVBQWYsQ0FBUDtBQUNELEVBSkQ7O0FBTUE7Ozs7Ozs7OztBQVNBdEUsVUFBU1UsU0FBVCxDQUFtQjhELFVBQW5CLEdBQWdDLFNBQVNBLFVBQVQsQ0FBb0JILEVBQXBCLEVBQXdCO0FBQ3RELE9BQU1JLFNBQVNKLEdBQUdwRCxHQUFILENBQU8sVUFBUCxFQUFtQkEsR0FBbkIsQ0FBdUIsR0FBdkIsSUFBOEIsS0FBS0EsR0FBTCxDQUFTLFVBQVQsRUFBcUJBLEdBQXJCLENBQXlCLEdBQXpCLENBQTdDO0FBQ0EsT0FBTXlELFNBQVNMLEdBQUdwRCxHQUFILENBQU8sVUFBUCxFQUFtQkEsR0FBbkIsQ0FBdUIsR0FBdkIsSUFBOEIsS0FBS0EsR0FBTCxDQUFTLFVBQVQsRUFBcUJBLEdBQXJCLENBQXlCLEdBQXpCLENBQTdDO0FBQ0EsVUFBT0ssS0FBS0ssS0FBTCxDQUFXOEMsTUFBWCxFQUFtQkMsTUFBbkIsQ0FBUDtBQUNELEVBSkQ7O0FBTUE7Ozs7OztBQU1BMUUsVUFBU1UsU0FBVCxDQUFtQmlFLFdBQW5CLEdBQWlDLFVBQVNOLEVBQVQsRUFBYU8sTUFBYixFQUFxQjtBQUNwRCxPQUFNVixPQUFPLEtBQUtqRCxHQUFMLENBQVMsU0FBVCxNQUF3QixJQUF4QixHQUNaMkQsT0FBT2pFLE1BQVAsQ0FBYyxDQUFkLEVBQWlCLENBQWpCLENBRFksR0FFWCxLQUFLTSxHQUFMLENBQVMsU0FBVCxDQUZGOztBQUlBLE9BQU00RCxPQUFPLEtBQUtMLFVBQUwsQ0FBZ0JILEVBQWhCLENBQWI7QUFDQSxPQUFNWixXQUFXLEtBQUt4QyxHQUFMLENBQVMsVUFBVCxDQUFqQjs7QUFFQWlELFFBQUt6QyxTQUFMLENBQWU0QyxHQUFHVCxJQUFILElBQVdpQixPQUFPQSxJQUFsQixDQUFmO0FBQ0FYLFFBQUtoRCxRQUFMLENBQWMsS0FBS2lELE9BQUwsQ0FBYUUsRUFBYixDQUFkOztBQUVBWixZQUFTLElBQVQsRUFBZVMsSUFBZjtBQUNBLFVBQU9ULFFBQVA7QUFDRCxFQWJEOztBQWVBdEQsUUFBT0MsT0FBUCxHQUFpQkosUUFBakIsQzs7Ozs7O0FDM0lBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTs7QUFFQSxRQUFPLFlBQVk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRkE7Ozs7O0FBS0EsVUFBU0UsTUFBVCxDQUFnQjRFLEdBQWhCLEVBQXFCQyxRQUFyQixFQUErQjtBQUM3QixPQUFJLENBQUNELEdBQUwsRUFBVTtBQUNSLFdBQU0sSUFBSUUsS0FBSixDQUFVLG9EQUFWLENBQU47QUFDRDtBQUNELFFBQUtGLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFFBQUtDLFFBQUwsR0FBZ0JBLFlBQVlFLE9BQU9GLFFBQW5DO0FBQ0Q7O0FBRUQ7Ozs7Ozs7QUFPQTdFLFFBQU9RLFNBQVAsQ0FBaUJ3RSxNQUFqQixHQUEwQixTQUFTQyxVQUFULEdBQW9EO0FBQUEsT0FBaEM1RSxDQUFnQyx1RUFBOUIsQ0FBOEI7QUFBQSxPQUEzQkMsQ0FBMkIsdUVBQXpCLENBQXlCO0FBQUEsT0FBdEI0RSxDQUFzQix1RUFBcEIsQ0FBb0I7QUFBQSxPQUFqQkMsS0FBaUIsdUVBQVgsU0FBVzs7QUFDNUUsUUFBS1AsR0FBTCxDQUFTUSxTQUFULEdBQXFCRCxLQUFyQjtBQUNBLFFBQUtQLEdBQUwsQ0FBU1MsU0FBVDtBQUNBLFFBQUtULEdBQUwsQ0FBU1UsR0FBVCxDQUFhakYsQ0FBYixFQUFnQkMsQ0FBaEIsRUFBbUI0RSxDQUFuQixFQUFzQixDQUF0QixFQUF5QjlELEtBQUttRSxFQUFMLEdBQVUsQ0FBbkMsRUFBc0MsS0FBdEM7QUFDQSxRQUFLWCxHQUFMLENBQVNZLElBQVQ7QUFDRCxFQUxEOztBQU9BdkYsUUFBT0MsT0FBUCxHQUFpQkYsTUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGNmYmMwMDJhMzYxY2RlNTNmNDUyXG4gKiovIiwiY29uc3QgVmVjdG9yID0gcmVxdWlyZShcIi4vbGliL3ZlY3RvcnNcIik7XG5jb25zdCBQYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2xpYi9wYXJ0aWNsZVwiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vbGliL3V0aWxzXCIpO1xuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vbGliL3NoYXBlc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZlY3RvcixcbiAgUGFydGljbGUsXG4gIFV0aWxzLFxuICBTaGFwZXMsXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbWFpbi5qc1xuICoqLyIsImNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVmVjdG9yKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgLSBFYXN5IHdheSB0byBpbnN0YW50aWF0ZSBhIHZlY3Rvci5cbiAqIEBwYXJhbSAge0ludH0geFxuICogQHBhcmFtICB7SW50fSB5XG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoeCwgeSkge1xuICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gIHJldHVybiB2ZWM7XG59O1xuXG4vKipcbiAqIFNldCAtIEEgc2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQHBhcmFtICB7Kn0gcHJvcFxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJcyB0aGUgcHJvcCB5b3VyIHBhc3NpbmcgaW4gZXhzaXN0LlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wLCB2YWwpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgXHRUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gKiBAcmV0dXJuIHtWYWx1ZX0gXHRcdFx0XHRUaGUgdmFsdWUgYXNzb3NpYXRlZCB3aXRoIHRoZSBwcm9wLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwcm9wKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xufTtcblxuLyoqXG4gKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gKiBAcGFyYW0ge1JhZGlhbnN9XHRyYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbiBzZXRBbmdsZShyYWQpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGxlbmd0aFxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldExlbmd0aCA9IGZ1bmN0aW9uIHNldExlbmd0aChsZW5ndGgpIHtcblx0Ly8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcblx0Ly8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcbn07XG5cbi8qKlxuICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQHJldHVybiB7SW50ZWdlcn0gLSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0TGVuZ3RoID0gZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xuICBjb25zdCB4ID0gdGhpcy5nZXQoXCJ4XCIpO1xuICBjb25zdCB5ID0gdGhpcy5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5oeXBvdCh4LCB5KTtcbn07XG5cbi8qKlxuICogZ2V0QW5nbGUgLSBHZXQgdGhlIGFuZ2xlIG9mIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQHJldHVybiB7SW50ZWdlcn0gLSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiBnZXRBbmdsZSgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIGFkZCAtIFNob3VsZCBhZGQgdmVjdG9ycyB0b2dldGhlciBnaXZlbiBhIHZlY3RvclxuICogQG5hbWUgYWRkXG4gKiBAb3ZlcnJpZGUgW1wiK1wiXVxuICogQHBhcmFtIHtWZWN0b3J9IC0gQSBnaXZlbiB2ZWN0b3IgdG8gYWRkLlxuICogQHJldHVybiB7VmVjdG9yfSAtIEEgdmVjdG9yIHdpdGggY29vcmlkbmF0ZXMsIG9yIG11bHRpcGxlIHZlY3RvcnMuXG4gKi9cblxuVmVjdG9yLnByb3RvdHlwZS5hZGQgPSBWZWN0b3IucHJvdG90eXBlW1wiK1wiXSA9IGZ1bmN0aW9uIGFkZCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuXHRcdC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjIubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG5cdFx0LnJlZHVjZSgodjAsIHZuKSA9PlxuXHRcdFx0KHt4OiB2MC54ICsgdm4ueCwgeTogdjAueSArIHZuLnl9KSxcblx0XHRzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG5cdFx0c2VsZi5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKSxcblx0XHRzZWxmLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG5cdCk7XG59O1xuXG4vKipcbiAqIHN1YnRyYWN0IC0gc2hvdWxkIHN1YnRyYWN0IHRoZSBnaXZlbiB2ZWN0b3Igd2l0aCBpdHMgb3duIHZlY3Rvci5cbiAqIGllOiB7eDogMiwgeTogMn0gLSB7eDogMiwgeTogMn0gPSB7eDogMCwgeTogMH1cbiAqIEBuYW1lIHN1YnRyYWN0XG4gKiBAb3ZlcnJpZGUgW1wiLVwiXVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IFZlY3Rvci5wcm90b3R5cGVbXCItXCJdID0gZnVuY3Rpb24gc3VidHJhY3QodjIpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHYyLmNvbnN0cnVjdG9yLm5hbWUgPT09IFwiQXJyYXlcIiAmJiB2Mi5sZW5ndGgpIHtcblx0XHQvLyBSZWZhY3RvciB0byBtYWtlIG1vcmUgZWZmZWNpZW50IC8vXG4gICAgY29uc3QgdmVjcyA9IHYyLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuXHRcdC5yZWR1Y2UoKHYwLCB2bikgPT5cblx0XHRcdCh7eDogdjAueCAtIHZuLngsIHk6IHYwLnkgLSB2bi55fSksXG5cdFx0c2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuXHRcdHNlbGYuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIiksXG5cdFx0c2VsZi5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuXHQpO1xufTtcblxuLyoqXG4gKiBNdWxpdHBseWluZyB2ZWN0b3JzIHRvZ2V0aGVyXG4gKiBpZToge3g6IDIsIHk6IDJ9ICoge3g6IDIsIHk6IDJ9ID0ge3g6IDQsIHk6IDR9XG4gKiBAbmFtZSBtdWx0aXBseVxuICogQG92ZXJyaWRlIFtcIipcIl1cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHkgPSBWZWN0b3IucHJvdG90eXBlW1wiKlwiXSA9IGZ1bmN0aW9uIG11bHRpcGx5KHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcblx0XHR0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpLFxuXHRcdHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcblx0KTtcbn07XG5cbi8qKlxuICogRGl2aWRlIHZlY3RvcnMgdG9nZXRoZXIuXG4gKiBAbmFtZSBEaXZpZGVcbiAqIEBvdmVycmlkZSBbXCIvXCJdXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZSA9IFZlY3Rvci5wcm90b3R5cGVbXCIvXCJdID0gZnVuY3Rpb24gZGl2aWRlKHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcblx0XHR0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpLFxuXHRcdHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcblx0KTtcbn07XG5cbi8qKlxuICogQWRkcyB0byBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5hZGRUbyA9IFZlY3Rvci5wcm90b3R5cGVbXCIrPVwiXSA9IGZ1bmN0aW9uIGFkZFRvKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdEZyb20gPSBWZWN0b3IucHJvdG90eXBlW1wiLT1cIl0gPSBmdW5jdGlvbiBzdWJ0cmFjdEZyb20odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeSA9IFZlY3Rvci5wcm90b3R5cGVbXCIqPVwiXSA9IGZ1bmN0aW9uIG11bHRpcGx5QnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnkgPSBWZWN0b3IucHJvdG90eXBlW1wiLz1cIl0gPSBmdW5jdGlvbiBkaXZpZGVCeSh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW4gLSBBIG1pbiByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5yYW5kb20gPSBmdW5jdGlvbiByYW5kb21WZWN0b3IobWluPTEsIG1heD0xMCkge1xuICBjb25zdCB4ID0gTWF0aC5mbG9vcih1dGlscy5sZXJwKE1hdGgucmFuZG9tKCksIG1pbiwgbWF4KSk7XG4gIGNvbnN0IHkgPSBNYXRoLmZsb29yKHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpKTtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKHgsIHkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9saWIvdmVjdG9ycy5qc1xuICoqLyIsIi8qKlxuICogVGhpcyBtb2R1bGUgaXMgY29tcG9zZWQgb2Ygc21hbGwgZnVuY3Rpb24gdGhhdFxuICogc2hvdWxkIGJlIHVzZWQgd2hlbiBuZWVkZWQuIE1vc3QgZnVuY3Rpb25zIGFyZSBwdXJlXG4gKiBhbmQgb25seSByZXR1cm4gdmFsdWVzLiBGb3IgbW9yZSBpbmZvIHJlYWQgdGhlIGRvY3MuXG4gKi9cblxuLyoqXG4gKiBVdGlscyBjb25zdHJ1Y3RvclxuICogQHJldHVybiB7U2VsZn0gaXQgc2VsZlxuICovXG5mdW5jdGlvbiBVdGlscygpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtaW4gLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5VdGlscy5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKHZhbCwgbWF4LCBtaW4pIHtcbiAgcmV0dXJuICh2YWwgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59O1xuXG4vKipcbiAqIGxlcnAgLSBsaW5lYXIgaW50ZXJwb2xhdGlvbiB0YWtlcyBhIHJhbmdlIGFuZCBhIGdpdmVuIG5vcm1hbGl6ZWQgdmFsdWVcbiAqIGFuZCByZXR1cm5zIGEgdmFsdWUgdGhhdCByZXByZXNlbnRzIHRoYXQgbm9ybWFsaXplZCB2YWx1ZSBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cblV0aWxzLnByb3RvdHlwZS5sZXJwID0gZnVuY3Rpb24gbGVycCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogcHJlY2VudCAtIFRha2VzIGEgdmFsdWUgYW5kIHJldHVybnMgYSBwcmVjZW50YWdlLlxuICogeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqIHRoZSBpbnRlbmRlZCBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAcmV0dXJuIHtQZXJjZW50fSAgICBBIHZhbHVlLlxuICovXG5VdGlscy5wcm90b3R5cGUucHJlY2VudCA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdmFsICogMTAwO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgVXRpbHMoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xpYi91dGlscy5qc1xuICoqLyIsIi8qKlxuICogVGhlIHBhcnRpY2xlIGxpYmFyeSBpcyB1c2VkIGZvciBwaHlzaWNzIGFuaW1hdGlvbnMuXG4gKiB0aGV5IGFyZSBub3QgZXh0cmVtZWx5IGFjY3VyYXRlIGJ1dCBzdGlsbCByZXByZXNlbnRcbiAqIGFuZCBmZWVsIGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4gKi9cbmNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoXCJleHRlbmRcIik7XG5cbi8vIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLlxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgcG9zaXRpb246IG51bGwsXG4gIHZlbG9jaXR5OiBudWxsLFxuICBncmF2aXR5OiBudWxsLFxuICByYWRpdXM6IDAsXG4gIG1hc3M6IDEsXG59O1xuXG4vKipcbiAqIFBhcnRpY2xlIGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge3N0YXRlfSBzdGF0ZSBpbml0aWFsIHN0YXRlIHRvIHBhc3MgdGhlIGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufVxuXG4vKipcbiAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgcGFydGljbGVzIHN0YXRlLlxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wXG4gKiBAcmV0dXJuIHtWYWx1ZX0gIEEgdmFsdWUgYXNzb3NpYXRlZCB3aXRoIHRoZSBwcm9wZXJ0eS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIGdldChwcm9wKSB7XG4gIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xufTtcblxuLyoqXG4gKiBzZXQgLSBBIHNldHRlciBmb3IgdGhlIHBhcnRpY2xlcyBzdGF0ZS5cbiAqIEBwYXJhbSB7W3R5cGVdfSBwcm9wIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSB7W3R5cGVdfSB2YWwgIFtkZXNjcmlwdGlvbl1cbiAqIEByZXR1cm4ge0Jvb2xlYW59IFx0XHRBIGJvb2xlYW4gdG8gdGVsbCB3ZXRoZXIgdGhlIHByb3BlcnR5XG4gKiAgICAgICAgICAgICAgICAgICAgICBleHNpc3Qgb24gdGhlIGluaXRhbCBzdGF0ZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KHByb3AsIHZhbCkge1xuICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENyZWF0ZSBjb25zdHJ1Y3RvclxuICogQHBhcmFtICB7T2JqZWN0fSBcdG9wdHMgXHRvcHRpb25hbCBzdGF0ZSB2YWx1ZXMgdG8gcGFzcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX0gICAgIFx0XHRyZXR1cm5zIGEgcGFydGljbGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9SU5JVElBTF9TVEFURSkge1xuXHQvLyBBIHJlYWxseSBiYXNpYyBmbGF0IGxldmVsIGV4dGVuZC5cbiAgb3B0cyA9IGV4dGVuZCh0cnVlLCB7fSwgSU5JVElBTF9TVEFURSwgb3B0cyk7XG4gIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKG9wdHMpO1xuICByZXR1cm4gcGFydGljbGU7XG59O1xuXG4vKipcbiAqIEFjY2VsZXJhdGUgLSBBIGNoYW5nZSBpbiB2ZWxvY2l0eS5cbiAqIEBwYXJhbSAge1ZlY3Rvcn0gYWNjZWwgVGhlIGNoYW5nZSBpbiBkaXN0YW5jZSAvIHRpbWVcbiAqIEByZXR1cm4ge1ZhbHVlfSBcdHN0YXRlIG9mIHRoZSBwYXJ0aWNsZSBhZnRlciBhY2NlbGVyYXRpbmcuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hY2NlbGVyYXRlID0gZnVuY3Rpb24gYWNjZWxlcmF0ZShhY2NlbCkge1xuICB0aGlzLmdldChcInZlbG9jaXR5XCIpLmFkZFRvKGFjY2VsKTtcbiAgcmV0dXJuIHRoaXMuZ2V0KFwidmVsb2NpdHlcIik7XG59O1xuXG4vKipcbiAqIFVwZGF0ZSAtIEEgdXBkYXRlIGEgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxuICogYmFzZWQgb24gaXRzIGdyYXZpdHkuIEdyYXZpdHkgaXMgdXN1YWxseSBhIGFjY2VsZXJhdGlvblxuICogdmVjdG9yLlxuICpcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gZ3JhdiBncmF2aXR5IGdpdmVuLlxuICogQHJldHVybiB7U3RhdGV9ICAgICAgIHN0YXRlIG9mIHBvc2l0aW9uXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoZ3Jhdj10aGlzLmdldChcImdyYXZpdHlcIikpIHtcbiAgY29uc3QgdmVsb2NpdHkgPSB0aGlzLmFjY2VsZXJhdGUoZ3Jhdik7XG4gIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXQoXCJwb3NpdGlvblwiKS5hZGRUbyh2ZWxvY2l0eSk7XG4gIHJldHVybiBwb3NpdGlvbjtcbn07XG5cbi8qKlxuICogYW5nbGVUbyAtIEFzdW1taW5nIHdlIGtub3cgd2hlcmVcbiAqIHRoZSBvdGhlciBwYXJ0aWNsZSBpcyBvbiB0aGUgY2FudmFzLiBjYW4gdXNlXG4gKiB0aGUgYW5nbGUgZm9ybXVsYWUgdG8gZmlndXJlIG91dCB0aGUgYW5nbGVcbiAqIGJldHdlZW4gdHdvIHBhcnRpY2xlLiBVc2luZyBhcmN0YW5nZW50IGlzIGZpbmUuXG4gKiBidXQgYmVjYXVzZSB0aGUgY29ycmRpbmF0ZSBwbGFuZSBpcyBmaWxwZWQgb24gdGhlXG4gKiBZIGF4aXMgd2UgdXNlIGF0YW4yIHRvIGdldCB0aGUgcmlnaHQgdmFsdWVzLiBFeHBsYWluZWRcbiAqIGluIEFQSSBEb2NzLlxuICpcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiBcdFx0XHRBIHBhcnRpY2xlIGluc3RhbmNlLlxuICogQHJldHVybiB7SW50ZWdlcn0gIEFuZ2xlICBcdEEgYW5nbGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hbmdsZVRvID0gZnVuY3Rpb24gYW5nZWxUbyhwMikge1xuICBjb25zdCBkeCA9IHAyLmdldChcInBvc2l0aW9uXCIpLmdldChcInhcIikgLSB0aGlzLmdldChcInBvc2l0aW9uXCIpLmdldChcInhcIik7XG4gIGNvbnN0IGR5ID0gcDIuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieVwiKSAtIHRoaXMuZ2V0KFwicG9zaXRpb25cIikuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZHksIGR4KTtcbn07XG5cbi8qKlxuICogZGlzdGFuY2VUbyAtIHBhcnRpY2xlLlxuICogQXNzdW1pbmcgd2Uga25vdyB3aGVyZSBib3RoIHBhcnRpY2xlIGFyZSBvbiB0aGUgY2FudmFzLlxuICogd2UgY2FuIHVzZSB0aGUgZGlzdGFuY2UgZm9ybXVhbGUgdG8gZmlndXJlIG91dCB0aGUgZGlzdGFuY2VcbiAqIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXMuXG4gKlxuICogQHBhcmFtICB7UGFydGljbGV9IHAyIFx0XHRcdEEgcGFydGljbGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0ludGVnZXJ9ICBBbmdsZSAgXHRBIERpc3RhbmNlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5kaXN0YW5jZVRvID0gZnVuY3Rpb24gZGlzdGFuY2VUbyhwMikge1xuICBjb25zdCBkZWx0YVggPSBwMi5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ4XCIpIC0gdGhpcy5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ4XCIpO1xuICBjb25zdCBkZWx0YVkgPSBwMi5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ5XCIpIC0gdGhpcy5nZXQoXCJwb3NpdGlvblwiKS5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5oeXBvdChkZWx0YVgsIGRlbHRhWSk7XG59O1xuXG4vKipcbiAqIGdyYXZpdGF0ZVRvIC0gQ3JlYXRlcyBhIGdyYXZpdHkgdmVjdG9yIGlmIGhlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgIFx0XHRcdEEgcGFydGljbGUgaW5zdGFuY2UuXG4gKiBAcGFyYW0gIHtWZWN0b3J9IFx0dmVjdG9yIFx0XHRcdEEgdmVjdG9yIGluc3RhbmNlLlxuICogQHJldHVybiB7VmVjdG9yfSAgIHZlY2xvY2l0eSBcdFRoZSB2ZWxvY2l0eSBvZiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdyYXZpdGF0ZVRvID0gZnVuY3Rpb24ocDIsIHZlY3Rvcikge1xuICBjb25zdCBncmF2ID0gdGhpcy5nZXQoXCJncmF2aXR5XCIpID09PSBudWxsID9cblx0XHQodmVjdG9yLmNyZWF0ZSgwLCAwKSkgOlxuXHRcdFx0KHRoaXMuZ2V0KFwiZ3Jhdml0eVwiKSk7XG5cbiAgY29uc3QgZGlzdCA9IHRoaXMuZGlzdGFuY2VUbyhwMik7XG4gIGNvbnN0IHZlbG9jaXR5ID0gdGhpcy5nZXQoXCJ2ZWxvY2l0eVwiKTtcblxuICBncmF2LnNldExlbmd0aChwMi5tYXNzIC8gKGRpc3QgKiBkaXN0KSk7XG4gIGdyYXYuc2V0QW5nbGUodGhpcy5hbmdsZVRvKHAyKSk7XG5cbiAgdmVsb2NpdHlbXCIrPVwiXShncmF2KTtcbiAgcmV0dXJuIHZlbG9jaXR5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xpYi9wYXJ0aWNsZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXh0ZW5kL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBTaGFwZXMgY29uc3R1Y3RvclxuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIGNpcmNsZSAtIERyYXdzIGEgc2ltcGxlcyBjaXJjbGVcbiAqIEBwYXJhbSAge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xpYi9zaGFwZXMuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9