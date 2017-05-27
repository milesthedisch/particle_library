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
	var Shapes = __webpack_require__(118);
	var YAT = __webpack_require__(119);
	var Clock = __webpack_require__(121);
	var Ticker = __webpack_require__(122);
	
	module.exports = {
	  Vector: Vector,
	  Particle: Particle,
	  Utils: Utils,
	  Shapes: Shapes,
	  YAT: YAT,
	  Ticker: Ticker,
	  Clock: Clock
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* eslint max-len: 0 */
	
	var utils = __webpack_require__(3);
	
	var INITIAL_STATE = {
	  x: 0,
	  y: 1
	};
	
	/**
	 * @class Vector
	 * @param {Object} state object.
	 */
	function Vector() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	  this.state = state;
	};
	
	/**
	 * Create - Easy way to instantiate a vector.
	 * @memberOf Vector
	 * @param  {Int} x
	 * @param  {Int} y
	 * @return {Vector}   A object inheriting from Vector.
	 */
	Vector.prototype.create = function create() {
	  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	  var vec = new Vector({ x: x, y: y });
	  return vec;
	};
	
	/**
	 * Set - A setter for the vector class.
	 * @memberOf Vector
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
	 * @memberOf Vector
	 * @param  {String} prop  The prop to set on state.
	 * @return {Value}        The value assosiated with the prop.
	 */
	Vector.prototype.get = function get(prop) {
	  return this.state[prop];
	};
	
	/**
	 * setAngle - Plot the corrdinates based on radians given.
	 * @memberOf Vector
	 * @param {Radians} rad A floating point number.
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
	 * @memberOf Vector
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
	 * @memberOf Vector
	 * @return {Integer} Cooridinates.
	 */
	Vector.prototype.getLength = function getLength() {
	  var x = this.get("x");
	  var y = this.get("y");
	  return Math.hypot(x, y);
	};
	
	/**
	 * getAngle - Get the angle of coordinates from center plane.
	 * @memberOf Vector
	 * @return {Integer} Cooridinates.
	 */
	Vector.prototype.getAngle = function getAngle() {
	  var x = this.get("x");
	  var y = this.get("y");
	  return Math.atan2(y, x);
	};
	
	/**
	 * add - Should add vectors together given a vector
	 * @memberOf Vector
	 * @param {Vector} v2 A given vector to add.
	 * @return {Vector} A vector with cooridnates, or multiple vectors.
	 */
	
	Vector.prototype.add = function add(v2) {
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
	 * @memberOf Vector
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector} A vector that contains a reduced state.
	 * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	 */
	Vector.prototype.subtract = function subtract(v2) {
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
	 * @memberOf Vector
	 * @example {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.multiply = function multiply(v2) {
	  return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
	};
	
	/**
	 * Divide vectors together.
	 * @memberOf Vector
	 * @param  {Vector} v2 A vector that contains state.
	 * @return {Vector}    A vector that contains a reduced state.
	 */
	Vector.prototype.divide = function divide(v2) {
	  return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
	};
	
	/**
	 * Adds to current state the state of v2
	 * @memberOf Vector
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.addTo = function addTo(v2) {
	  this.state.x = this.get("x") + v2.get("x");
	  this.state.y = this.get("y") + v2.get("y");
	  return this.state;
	};
	
	/**
	 * Subtracts from current state the state of v2
	 * @memberOf Vector
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.subtractFrom = function subtractFrom(v2) {
	  this.state.x = this.get("x") - v2.get("x");
	  this.state.y = this.get("y") - v2.get("y");
	  return this.state;
	};
	
	/**
	 * mulitplies by current state the state of v2
	 * @memberOf Vector
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.multiplyBy = function multiplyBy(v2) {
	  this.state.x = this.get("x") * v2.get("x");
	  this.state.y = this.get("y") * v2.get("y");
	  return this.state;
	};
	
	/**
	 * Divides by current state the state of v2
	 * @memberOf Vector
	 * @param {Vector} [v2] - A vector that contains state.
	 * @return {Object} [state] - Key value pair of coordinates
	 */
	Vector.prototype.divideBy = function divideBy(v2) {
	  this.state.x = this.get("x") / v2.get("x");
	  this.state.y = this.get("y") / v2.get("y");
	  return this.state;
	};
	
	/**
	 * @memberOf Vector
	 * @param  {Number} angle A number of radians to rotate clockwise by.
	*/
	Vector.prototype.rotate = function (delta) {
	  var cos = Math.cos(delta);
	  var sin = Math.sin(delta);
	
	  //
	  var x = this.state.x * cos - this.state.y * sin;
	  var y = this.state.y * cos + this.state.x * sin;
	
	  this.state.x = x;
	  this.state.y = y;
	};
	
	/**
	 * random generate a vector with random states.
	 * @memberOf Vector
	 * @param {Number} min - A min range on the random vector state.
	 * @param {Number} max - A max range on the random vector state.
	 * @return {Vector}
	 */
	Vector.prototype.random = function rVector() {
	  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
	  var x = utils.lerp(Math.random(), min, max);
	  var y = utils.lerp(Math.random(), min, max);
	  return this.create(x, y);
	};
	
	/**
	 * @memberOf Vector
	 * @description Return a vector that has a x between the given range.
	 *              and y given a range.
	 * @param  {Number} xMin Minmum x value
	 * @param  {Number} xMax Maximum x value
	 * @param  {Number} yMin Minmum y value
	 * @param  {Number} yMax Maximum y value
	 * @return {Vector}
	 */
	Vector.prototype.randomBetween = function rBetween() {
	  var xMin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	  var xMax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	  var yMin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  var yMax = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	
	  xMax = Math.max(xMin, xMax);
	  xMin = Math.min(xMin, xMax);
	  yMax = Math.max(yMin, yMax);
	  yMin = Math.min(yMin, yMax);
	
	  var y = utils.randomBetween(yMin, yMax);
	  var x = utils.randomBetween(xMin, xMax);
	
	  return this.create(x, y);
	};
	
	Vector.prototype["+"] = Vector.prototype.add;
	Vector.prototype["-"] = Vector.prototype.subtract;
	Vector.prototype["*"] = Vector.prototype.multiply;
	Vector.prototype["/"] = Vector.prototype.divide;
	Vector.prototype["+="] = Vector.prototype.addTo;
	Vector.prototype["-="] = Vector.prototype.subtractFrom;
	Vector.prototype["*="] = Vector.prototype.multiplyBy;
	Vector.prototype["/="] = Vector.prototype.divideBy;
	
	module.exports = Vector;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* eslint max-len: 0 */
	
	/**
	 * This module is composed of small function that
	 * should be used when needed. Most functions are pure
	 * and only return values. For more info read the docs.
	 */
	
	/**
	 * @class Utils
	 * @return {Utils}
	 */
	var Utils = Object.create(null);
	
	/**
	 * normalize - Takes a max and min value and returns
	 * a floating point number, that when multiplied
	 * by one hundred represents a precentage of the range
	 * between max and min.
	 *
	 * @memberOf Utils
	 * @param  {Int} val - The value that lies in the range.
	 * @param  {Int} min - The maxium value in the range.
	 * @param  {Int} max - The minimum value in the range.
	 * @return {Int} Int - The value represented in that range.
	 */
	Utils.normalize = function normalize(val, min, max) {
	  return (val - min) / (max - min);
	};
	
	/**
	 * lerp - linear interpolation takes a range and a given normalized value
	 * and returns a value that represents that normalized value in that range.
	 * @memberOf Utils
	 * @param  {Interger} val
	 * @param  {Interger} min
	 * @param  {Interger} max
	 * @return {Interger}
	 */
	Utils.lerp = function lerp(val, min, max) {
	  return (max - min) * val + min;
	};
	
	/**
	 * map - Given 2 set of values map them to another set.
	 * @memberOf Utils
	 * @param  {number} value
	 * @param  {number} srcMin
	 * @param  {number} srcMax
	 * @param  {number} destMin
	 * @param  {number} destMax
	 * @return {number}
	 */
	Utils.map = function map(value, srcMin, srcMax, destMin, destMax) {
	  srcMax = Math.max(srcMax, srcMin);
	  srcMin = Math.min(srcMax, srcMin);
	  destMin = Math.min(destMin, destMax);
	  destMax = Math.max(destMin, destMax);
	  return this.lerp(this.normalize(value, srcMin, srcMax), destMin, destMax);
	};
	
	/**
	 * @description Takes a value and returns a precentage.
	 *              you can pass arbitrary large numbers in but thats not
	 *              the intended purpose of this function.
	 * @param  {Float} val 	A value.
	 * @memberOf Utils
	 * @return {Percent}    A value.
	 */
	Utils.percent = function (val) {
	  return val * 100;
	};
	
	/**
	 * @description Given a number and a range return the
	 *              value between that range or the max number or min number.
	 * @memberOf Utils
	 * @param  {Number} value
	 * @param  {Number} min
	 * @param  {Number} max
	 * @return {Number}
	 */
	Utils.clamp = function (value, min, max) {
	  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	};
	
	/**
	 * @memberOf  Utils
	 * @description Given two numbers return a random number between the two.
	 * @param  {Integer} x
	 * @param  {Integer} y
	 * @return {Integer}
	 */
	Utils.randomBetween = function (x, y) {
	  var min = Math.min(x, y);
	  var max = Math.max(x, y);
	  return Math.floor(Math.random() * (max - min)) + min;
	};
	
	/**
	 * @description Given two coordinates return the distance between the two.
	 * @memberOf Utils
	 * @param  {Number} x0
	 * @param  {Number} y0
	 * @param  {Number} x1
	 * @param  {Number} y1
	 * @return {Number}
	 */
	Utils.distanceXY = function (x0, y0, x1, y1) {
	  var dx = x0 - x1;
	  var dy = y0 - y1;
	  return Math.hypot(dx, dy);
	};
	
	/**
	 * @description Given two vectors return the distance between the two.
	 * @memberOf Utils
	 * @param  {Vector} v1
	 * @param  {Vector} v2
	 * @return {Number}
	 */
	Utils.distanceVec = function (v1, v2) {
	  var dVec = v1["-"](v2);
	  return Math.hypot(dVec.get("x"), dVec.get("y"));
	};
	
	/**
	 * @description given a number
	 * @memberOf Utils
	 * @param  {Number} val
	 * @param  {Number} min
	 * @param  {Number} max
	 * @return {Boolean}
	 */
	Utils.inRange = function (val, min, max) {
	  return val <= Math.max(max, min) && Math.min(max, min) <= val;
	};
	
	/**
	 * @description Given a two ranges see if both intersect each other.
	 * @memberOf Utils
	 * @param  {Number} min0
	 * @param  {Number} max0
	 * @param  {Number} min1
	 * @param  {Number} max1
	 * @return {Boolean}
	 */
	Utils.rangeIntersect = function (min0, max0, min1, max1) {
	  return Math.max(max0, min0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(max1, min1);
	};
	
	/**
	 * @description Given twos vectors see if they intersect.
	 * @memberOf Utils
	 * @param  {Vector} vec0
	 * @param  {Vector} vec1
	 * @return {Boolean}
	 */
	Utils.vectorIntersect = function (vec0, vec1) {
	  var x0 = vec0.get("x");
	  var y0 = vec0.get("y");
	  var x1 = vec1.get("x");
	  var y1 = vec1.get("y");
	  return this.rangeIntersect(x0, y0, x1, y1);
	};
	
	/**
	 * @description Given two rectange see if the intersect.
	 * @memberOf Utils
	 * @param  {Particle} r0
	 * @param  {Particle} r1
	 * @return {Boolean}
	 */
	Utils.collisionRect = function (r0, r1) {
	  var r0x = r0.state.x;
	  var r0y = r0.state.y;
	  var r1x = r1.state.x;
	  var r1y = r1.state.y;
	
	  var r0w = r0x + r0.state.width;
	  var r0h = r0y + r0.state.height;
	  var r1w = r1x + r1.state.width;
	  var r1h = r1y + r1.state.height;
	
	  return this.rangeIntersect(r0x, r0w, r1x, r1w) && this.rangeIntersect(r0y, r0h, r1y, r1h);
	};
	
	/**
	 * @description Given to particle with radi return wether they collide are not
	 * @memberOf Utils
	 * @param  {Particle} c1
	 * @param  {Particle} c2
	 * @return {Boolean}
	 */
	Utils.collisionCircle = function (c1, c2) {
	  var radi = c1.state.radius + c2.state.radius;
	  var distance = this.distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);
	
	  if (distance) {
	    return radi > distance;
	  }
	  return true;
	};
	
	/**
	 * @description Given a point and a circle return a boolean regarding wether they are colliding.
	 * @memberOf Utils
	 * @param  {Number}   x
	 * @param  {Number}   y
	 * @param  {Particle} circle
	 * @return {Boolean}
	 */
	Utils.collisionCirclePoint = function (x, y, circle) {
	  // TODO Write tests.
	  var dist = this.distanceXY(x, y, circle.state.x, circle.state.y);
	  return circle.state.radius > dist;
	};
	
	/**
	 * @description detect a collision between circles a vector.
	 * @memberOf Utils
	 * @param  {Vector}   vec
	 * @param  {Particle} circle
	 * @return {Boolean}
	 */
	Utils.collisionCircleVec = function (vec, circle) {
	  return circle.state.radius > this.distanceXY(vec.get("x"), vec.get("y"), circle.state.x, circle.state.y);
	};
	
	/**
	 * @description detect collision of a rectangle and a point.
	 * @memberOf Utils
	 * @param  {Number}   x
	 * @param  {Number}   y
	 * @param  {Particle} rect
	 * @return {Boolean}
	 */
	Utils.collisionRectPoint = function (x, y, rect) {
	  var rectX = rect.state.x;
	  var rectY = rect.state.y;
	  return this.inRange(x, rectX, rectX + rect.state.width) && this.inRange(y, rectY, rectY + rect.state.height);
	};
	
	/**
	 * @description Given a vector and a retangle check wether they collided.
	 * @memberOf Utils
	 * @param  {Vector}   vec
	 * @param  {Particle} rect
	 * @return {Boolean}
	 */
	Utils.collisionRectVec = function (vec, rect) {
	  return this.collisionRectPoint(vec.get("x"), vec.get("y"), rect);
	};
	
	/**
	 * @memberOf Utils
	 * @description Run a function only if the given time to allow the function execute
	 * has passed. If
	 * @param  {Function} func A function to call every delta.
	 * @param  {Number} wait The minimum time to wait.
	 * @param  {Object} options
	 * @return {Function}
	 * @see underscore
	 */
	Utils.throttle = function throttle(func, wait, options) {
	  var context = void 0;
	  var args = void 0;
	  var result = void 0;
	  var timeout = null;
	  var previous = 0;
	  if (!options) options = {};
	  var later = function later() {
	    previous = options.leading === false ? 0 : Date.now();
	    timeout = null;
	    result = func.apply(context, args);
	    if (!timeout) context = args = null;
	  };
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var now = Date.now();
	    if (!previous && options.leading === false) previous = now;
	    var remaining = wait - (now - previous);
	    context = this;
	    args = args;
	    if (remaining <= 0 || remaining > wait) {
	      if (timeout) {
	        clearTimeout(timeout);
	        timeout = null;
	      }
	      previous = now;
	      result = func.apply(context, args);
	      if (!timeout) context = args = null;
	    } else if (!timeout && options.trailing !== false) {
	      timeout = setTimeout(later, remaining);
	    }
	    return result;
	  };
	};
	
	/**
	 * @memberOf Utils
	 * @description - Setting the length of a vector.
	 * @param   {number} length
	 * @param   {number} x
	 * @param   {number} y
	 * @return  {number[]} Coordinates
	 */
	Utils.setLength = function (length, x, y) {
	  if (typeof x !== "number" || typeof y !== "number" || typeof length !== "number") {
	    throw new Error("Please provide valid x and y values");
	  }
	
	  var angle = Math.atan2(y, x);
	  x = Math.cos(angle) * length;
	  y = Math.sin(angle) * length;
	
	  return [x, y];
	};
	
	/**
	 * @memberOf Utils
	 * @description - Setting the angle of a vector.
	 * @param   {number} angle
	 * @param   {number} x
	 * @param   {number} y
	 * @return  {number[]} coordinates
	 */
	Utils.setAngle = function (angle, x, y) {
	  if (typeof x !== "number" || typeof y !== "number" || typeof angle !== "number") {
	    throw new Error("Please provide valid x and y values");
	  }
	
	  var length = Math.hypot(x, y);
	  x = Math.cos(angle) * length;
	  y = Math.sin(angle) * length;
	
	  return [x, y];
	};
	
	/**
	 * @memberOf Utils
	 * @description Coverts degrees to radians
	 * @param  {number} deg Degress
	 * @return {number}
	 */
	Utils.degToRad = function (deg) {
	  return deg / 180 * Math.PI;
	};
	
	/**
	 * @memberOf Utils
	 * @description Coverts radians to degress
	 * @param  {number} rad
	 * @return {number}
	 */
	Utils.radToDeg = function (rad) {
	  return rad * 180 / Math.PI;
	};
	
	/**
	 * @memberOf Utils
	 * @description Round to nearest place given.
	 * @param  {number} val
	 * @param  {number} places An exponent
	 * @return {number}
	 */
	Utils.roundToPlaces = function (val, places) {
	  var mult = Math.pow(10, places);
	  return Math.round(val * mult) / mult;
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} val
	 * @param  {number} nearest
	 * @return {number}
	 */
	Utils.roundToMultiple = function (val, nearest) {
	  if (!nearest) {
	    throw new Error("Nothing can be a multiple of " + String(nearest));
	  }
	  return Math.round(val / nearest) * nearest;
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} v0
	 * @param  {number} v1
	 * @param  {number} v2
	 * @param  {number} t
	 * @param  {number} pFinal
	 * @return {number}
	 */
	Utils.quadraticBezier = function (v0, v1, v2, t) {
	  return Math.pow(1 - t, 2) * v0 + (1 - t) * 2 * t * v1 + t * t * v2;
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} v0
	 * @param  {number} v1
	 * @param  {number} v2
	 * @param  {number} v3
	 * @param  {number} t
	 * @param  {number} pFinal
	 * @return {number}
	 */
	Utils.cubicBezier = function (v0, v1, v2, v3, t) {
	  return Math.pow(1 - t, 3) * v0 + Math.pow(1 - t, 2) * 3 * t * v1 + (1 - t) * 3 * t * t * v2 + t * t * t + v3;
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} p0
	 * @param  {number} p1
	 * @param  {number} p2
	 * @param  {number} t
	 * @param  {Object} pFinal
	 * @return {number}
	 */
	Utils.quadraticBezierPoint = function (p0, p1, p2, t) {
	  var x = this.quadraticBezier(p0.x, p1.x, p2.x, t);
	  var y = this.quadraticBezier(p0.y, p1.y, p2.y, t);
	  return { x: x, y: y };
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} p0
	 * @param  {number} p1
	 * @param  {number} p2
	 * @param  {number} p3
	 * @param  {number} t
	 * @param  {Object} pFinal
	 * @return {number}
	 */
	Utils.cubicBezierPoint = function (p0, p1, p2, p3, t) {
	  x = this.cubicBezier(p0.x, p1.x, p2.x, t);
	  y = this.cubicBezier(p0.y, p1.y, p2.y, t);
	  return { x: x, y: y };
	};
	
	/**
	 * @memberOf Utils
	 * @description Given points on the plane draw a curved line between
	 * all of them.
	 * @param  {{number, number}} points
	 * @param  {CanvasRenderingContext2D} ctx
	 */
	Utils.multiCurve = function (points, ctx) {
	  var p0 = void 0;
	  var p1 = void 0;
	  var midX = void 0;
	  var midY = void 0;
	
	  ctx.moveTo(points[0].x, points[0].y);
	
	  for (var i = 1; i < points.length - 2; i++) {
	    p0 = points[i];
	    p1 = points[i + 1];
	    midX = (p0.x + p1.x) / 2;
	    midY = (p0.y + p1.y) / 2;
	    ctx.quadraticCurveTo(p0.x, p0.y, midX, midY);
	  }
	
	  p0 = points[points.length - 2];
	  p1 = points[points.length - 1];
	  ctx.quadraticCurveTo(p0.x, p0.y, p1.x, p1.y);
	};
	
	/**
	 * ease
	 * @memberOf Utils
	 * @param  {Float} ease [description]
	 * @param  {Int} a    [description]
	 * @param  {Int} b    [description]
	 * @return {Int}      [description]
	 */
	Utils.ease = function (ease, a, b) {
	  // the delta can get extremely small and its not performant to keep
	  // on rendering or calculating for animation purposes.
	  if (Math.abs(b - a) < 0.1) {
	    return false;
	  }
	
	  return (b - a) * ease;
	};
	
	Utils.easeTo = function (ease, origin, target) {
	  var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
	
	  var dx = target.x - origin.x;
	  var dy = target.y - origin.y;
	
	  // the delta can get extremely small and its not performant to keep
	  // on rendering or calculating for animation purposes.
	  if (Math.abs(dx) < threshold && Math.abs(dy) < threshold) {
	    return false;
	  }
	
	  origin.x += dx * ease;
	  origin.y += dy * ease;
	
	  return origin;
	};
	
	/**
	 * isPlainObject
	 * @param  {*}  data
	 * @return {Boolean}
	 */
	Utils.isObject = function (data) {
	  return (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]";
	};
	
	/**
	 * unique return an array with no duplicate values
	 * @param  {Array} array
	 * @return {Array}
	 */
	Utils.unique = function (array) {
	  return array.reduce(function (x, y) {
	    if (x.indexOf(y) === -1) x.push(y);
	    return x;
	  }, []);
	};
	
	module.exports = Object.create(Utils);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/* eslint max-len: 0 */
	/*
	* The particle libary is used for physics animations.
	* they are not extremely accurate but still represent
	* and feel like physical movments.
	*/
	
	var extend = __webpack_require__(5);
	var clone = __webpack_require__(6);
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
	
	  this.state.vx += ax;
	  this.state.vy += ay;
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
/***/ function(module, exports, __webpack_require__) {

	var baseClone = __webpack_require__(7);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
	}
	
	module.exports = cloneDeep;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(8),
	    arrayEach = __webpack_require__(52),
	    assignValue = __webpack_require__(53),
	    baseAssign = __webpack_require__(56),
	    baseAssignIn = __webpack_require__(79),
	    cloneBuffer = __webpack_require__(83),
	    copyArray = __webpack_require__(84),
	    copySymbols = __webpack_require__(85),
	    copySymbolsIn = __webpack_require__(89),
	    getAllKeys = __webpack_require__(93),
	    getAllKeysIn = __webpack_require__(95),
	    getTag = __webpack_require__(96),
	    initCloneArray = __webpack_require__(101),
	    initCloneByTag = __webpack_require__(102),
	    initCloneObject = __webpack_require__(116),
	    isArray = __webpack_require__(64),
	    isBuffer = __webpack_require__(65),
	    isObject = __webpack_require__(32),
	    keys = __webpack_require__(58);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1,
	    CLONE_FLAT_FLAG = 2,
	    CLONE_SYMBOLS_FLAG = 4;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} bitmask The bitmask flags.
	 *  1 - Deep clone
	 *  2 - Flatten inherited properties
	 *  4 - Clone symbols
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, bitmask, customizer, key, object, stack) {
	  var result,
	      isDeep = bitmask & CLONE_DEEP_FLAG,
	      isFlat = bitmask & CLONE_FLAT_FLAG,
	      isFull = bitmask & CLONE_SYMBOLS_FLAG;
	
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;
	
	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      result = (isFlat || isFunc) ? {} : initCloneObject(value);
	      if (!isDeep) {
	        return isFlat
	          ? copySymbolsIn(value, baseAssignIn(result, value))
	          : copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);
	
	  var keysFunc = isFull
	    ? (isFlat ? getAllKeysIn : getAllKeys)
	    : (isFlat ? keysIn : keys);
	
	  var props = isArr ? undefined : keysFunc(value);
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
	  });
	  return result;
	}
	
	module.exports = baseClone;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(9),
	    stackClear = __webpack_require__(17),
	    stackDelete = __webpack_require__(18),
	    stackGet = __webpack_require__(19),
	    stackHas = __webpack_require__(20),
	    stackSet = __webpack_require__(21);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(10),
	    listCacheDelete = __webpack_require__(11),
	    listCacheGet = __webpack_require__(14),
	    listCacheHas = __webpack_require__(15),
	    listCacheSet = __webpack_require__(16);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}
	
	module.exports = listCacheClear;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}
	
	module.exports = listCacheDelete;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(13);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;


/***/ },
/* 13 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}
	
	module.exports = eq;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(12);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(9);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	  this.size = 0;
	}
	
	module.exports = stackClear;


/***/ },
/* 18 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);
	
	  this.size = data.size;
	  return result;
	}
	
	module.exports = stackDelete;


/***/ },
/* 19 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;


/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(9),
	    Map = __webpack_require__(22),
	    MapCache = __webpack_require__(37);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}
	
	module.exports = stackSet;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23),
	    root = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(24),
	    getValue = __webpack_require__(36);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(25),
	    isMasked = __webpack_require__(33),
	    isObject = __webpack_require__(32),
	    toSource = __webpack_require__(35);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isObject = __webpack_require__(32);
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    proxyTag = '[object Proxy]';
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27),
	    getRawTag = __webpack_require__(30),
	    objectToString = __webpack_require__(31);
	
	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	module.exports = baseGetTag;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(28);
	
	/** Built-in value references. */
	var Symbol = root.Symbol;
	
	module.exports = Symbol;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(29);
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	module.exports = root;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	module.exports = freeGlobal;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}
	
	module.exports = getRawTag;


/***/ },
/* 31 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	module.exports = objectToString;


/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(34);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}
	
	module.exports = isMasked;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(28);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;


/***/ },
/* 35 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to convert.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(38),
	    mapCacheDelete = __webpack_require__(46),
	    mapCacheGet = __webpack_require__(49),
	    mapCacheHas = __webpack_require__(50),
	    mapCacheSet = __webpack_require__(51);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(39),
	    ListCache = __webpack_require__(9),
	    Map = __webpack_require__(22);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}
	
	module.exports = mapCacheClear;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(40),
	    hashDelete = __webpack_require__(42),
	    hashGet = __webpack_require__(43),
	    hashHas = __webpack_require__(44),
	    hashSet = __webpack_require__(45);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries == null ? 0 : entries.length;
	
	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}
	
	module.exports = hashClear;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;


/***/ },
/* 42 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = hashDelete;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(41);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(47);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}
	
	module.exports = mapCacheDelete;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(48);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}
	
	module.exports = getMapData;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}
	
	module.exports = isKeyable;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(47);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(47);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(47);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;
	
	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}
	
	module.exports = mapCacheSet;


/***/ },
/* 52 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseAssignValue = __webpack_require__(54),
	    eq = __webpack_require__(13);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    baseAssignValue(object, key, value);
	  }
	}
	
	module.exports = assignValue;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var defineProperty = __webpack_require__(55);
	
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function baseAssignValue(object, key, value) {
	  if (key == '__proto__' && defineProperty) {
	    defineProperty(object, key, {
	      'configurable': true,
	      'enumerable': true,
	      'value': value,
	      'writable': true
	    });
	  } else {
	    object[key] = value;
	  }
	}
	
	module.exports = baseAssignValue;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23);
	
	var defineProperty = (function() {
	  try {
	    var func = getNative(Object, 'defineProperty');
	    func({}, '', {});
	    return func;
	  } catch (e) {}
	}());
	
	module.exports = defineProperty;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    keys = __webpack_require__(58);
	
	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}
	
	module.exports = baseAssign;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(53),
	    baseAssignValue = __webpack_require__(54);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  var isNew = !object;
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;
	
	    if (newValue === undefined) {
	      newValue = source[key];
	    }
	    if (isNew) {
	      baseAssignValue(object, key, newValue);
	    } else {
	      assignValue(object, key, newValue);
	    }
	  }
	  return object;
	}
	
	module.exports = copyObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(59),
	    baseKeys = __webpack_require__(74),
	    isArrayLike = __webpack_require__(78);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}
	
	module.exports = keys;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(60),
	    isArguments = __webpack_require__(61),
	    isArray = __webpack_require__(64),
	    isBuffer = __webpack_require__(65),
	    isIndex = __webpack_require__(68),
	    isTypedArray = __webpack_require__(69);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  var isArr = isArray(value),
	      isArg = !isArr && isArguments(value),
	      isBuff = !isArr && !isArg && isBuffer(value),
	      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
	      skipIndexes = isArr || isArg || isBuff || isType,
	      result = skipIndexes ? baseTimes(value.length, String) : [],
	      length = result.length;
	
	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (
	           // Safari 9 has enumerable `arguments.length` in strict mode.
	           key == 'length' ||
	           // Node.js 0.10 has enumerable non-index properties on buffers.
	           (isBuff && (key == 'offset' || key == 'parent')) ||
	           // PhantomJS 2 has enumerable non-index properties on typed arrays.
	           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
	           // Skip index properties.
	           isIndex(key, length)
	        ))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = arrayLikeKeys;


/***/ },
/* 60 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsArguments = __webpack_require__(62),
	    isObjectLike = __webpack_require__(63);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
	  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
	    !propertyIsEnumerable.call(value, 'callee');
	};
	
	module.exports = isArguments;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isObjectLike = __webpack_require__(63);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/**
	 * The base implementation of `_.isArguments`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 */
	function baseIsArguments(value) {
	  return isObjectLike(value) && baseGetTag(value) == argsTag;
	}
	
	module.exports = baseIsArguments;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 64 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(28),
	    stubFalse = __webpack_require__(67);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
	
	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;
	
	module.exports = isBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}
	
	module.exports = stubFalse;


/***/ },
/* 68 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}
	
	module.exports = isIndex;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(70),
	    baseUnary = __webpack_require__(72),
	    nodeUtil = __webpack_require__(73);
	
	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
	
	module.exports = isTypedArray;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetTag = __webpack_require__(26),
	    isLength = __webpack_require__(71),
	    isObjectLike = __webpack_require__(63);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;
	
	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
	}
	
	module.exports = baseIsTypedArray;


/***/ },
/* 71 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 72 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}
	
	module.exports = baseUnary;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(29);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;
	
	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());
	
	module.exports = nodeUtil;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(75),
	    nativeKeys = __webpack_require__(76);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeys;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(77);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);
	
	module.exports = nativeKeys;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}
	
	module.exports = overArg;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(25),
	    isLength = __webpack_require__(71);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}
	
	module.exports = isArrayLike;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    keysIn = __webpack_require__(80);
	
	/**
	 * The base implementation of `_.assignIn` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssignIn(object, source) {
	  return object && copyObject(source, keysIn(source), object);
	}
	
	module.exports = baseAssignIn;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(59),
	    baseKeysIn = __webpack_require__(81),
	    isArrayLike = __webpack_require__(78);
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}
	
	module.exports = keysIn;


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32),
	    isPrototype = __webpack_require__(75),
	    nativeKeysIn = __webpack_require__(82);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];
	
	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = baseKeysIn;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = nativeKeysIn;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(28);
	
	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	
	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
	
	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;
	
	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
	
	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
	
	  buffer.copy(result);
	  return result;
	}
	
	module.exports = cloneBuffer;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(66)(module)))

/***/ },
/* 84 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;
	
	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}
	
	module.exports = copyArray;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    getSymbols = __webpack_require__(86);
	
	/**
	 * Copies own symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}
	
	module.exports = copySymbols;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(87),
	    stubArray = __webpack_require__(88);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
	  if (object == null) {
	    return [];
	  }
	  object = Object(object);
	  return arrayFilter(nativeGetSymbols(object), function(symbol) {
	    return propertyIsEnumerable.call(object, symbol);
	  });
	};
	
	module.exports = getSymbols;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      resIndex = 0,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}
	
	module.exports = stubArray;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(57),
	    getSymbolsIn = __webpack_require__(90);
	
	/**
	 * Copies own and inherited symbols of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbolsIn(source, object) {
	  return copyObject(source, getSymbolsIn(source), object);
	}
	
	module.exports = copySymbolsIn;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(91),
	    getPrototype = __webpack_require__(92),
	    getSymbols = __webpack_require__(86),
	    stubArray = __webpack_require__(88);
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols;
	
	/**
	 * Creates an array of the own and inherited enumerable symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};
	
	module.exports = getSymbolsIn;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(77);
	
	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);
	
	module.exports = getPrototype;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(94),
	    getSymbols = __webpack_require__(86),
	    keys = __webpack_require__(58);
	
	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}
	
	module.exports = getAllKeys;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(91),
	    isArray = __webpack_require__(64);
	
	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}
	
	module.exports = baseGetAllKeys;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(94),
	    getSymbolsIn = __webpack_require__(90),
	    keysIn = __webpack_require__(80);
	
	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}
	
	module.exports = getAllKeysIn;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(97),
	    Map = __webpack_require__(22),
	    Promise = __webpack_require__(98),
	    Set = __webpack_require__(99),
	    WeakMap = __webpack_require__(100),
	    baseGetTag = __webpack_require__(26),
	    toSource = __webpack_require__(35);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;
	
	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = baseGetTag(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : '';
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23),
	    root = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23),
	    root = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23),
	    root = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(23),
	    root = __webpack_require__(28);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);
	
	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}
	
	module.exports = initCloneArray;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(103),
	    cloneDataView = __webpack_require__(105),
	    cloneMap = __webpack_require__(106),
	    cloneRegExp = __webpack_require__(110),
	    cloneSet = __webpack_require__(111),
	    cloneSymbol = __webpack_require__(114),
	    cloneTypedArray = __webpack_require__(115);
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);
	
	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);
	
	    case dataViewTag:
	      return cloneDataView(object, isDeep);
	
	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);
	
	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);
	
	    case numberTag:
	    case stringTag:
	      return new Ctor(object);
	
	    case regexpTag:
	      return cloneRegExp(object);
	
	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);
	
	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}
	
	module.exports = initCloneByTag;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(104);
	
	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}
	
	module.exports = cloneArrayBuffer;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(28);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(103);
	
	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}
	
	module.exports = cloneDataView;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(107),
	    arrayReduce = __webpack_require__(108),
	    mapToArray = __webpack_require__(109);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	
	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}
	
	module.exports = cloneMap;


/***/ },
/* 107 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}
	
	module.exports = addMapEntry;


/***/ },
/* 108 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;
	
	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}
	
	module.exports = arrayReduce;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;


/***/ },
/* 110 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;
	
	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}
	
	module.exports = cloneRegExp;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(112),
	    arrayReduce = __webpack_require__(108),
	    setToArray = __webpack_require__(113);
	
	/** Used to compose bitmasks for cloning. */
	var CLONE_DEEP_FLAG = 1;
	
	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}
	
	module.exports = cloneSet;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}
	
	module.exports = addSetEntry;


/***/ },
/* 113 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(27);
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}
	
	module.exports = cloneSymbol;


/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(103);
	
	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}
	
	module.exports = cloneTypedArray;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(117),
	    getPrototype = __webpack_require__(92),
	    isPrototype = __webpack_require__(75);
	
	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}
	
	module.exports = initCloneObject;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(32);
	
	/** Built-in value references. */
	var objectCreate = Object.create;
	
	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(proto) {
	    if (!isObject(proto)) {
	      return {};
	    }
	    if (objectCreate) {
	      return objectCreate(proto);
	    }
	    object.prototype = proto;
	    var result = new object;
	    object.prototype = undefined;
	    return result;
	  };
	}());
	
	module.exports = baseCreate;


/***/ },
/* 118 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * @class Shapes
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
	 * @memberOf Shapes
	 * @description draw a circle.
	 * @param {Number} x     The x coordinate of the circle.
	 * @param {Number} y     The y coordinate of the circle.
	 * @param {Number} r     The radius of the circle.
	 * @param {String} color The color of the circle.
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
	
	/**
	 * @memberOf Shapes
	 * @description Fill a rectangle
	 * @param  {Number} x     Starting point X
	 * @param  {Number} y     Starting point Y
	 * @param  {Number} w     Width of the rectangle
	 * @param  {Number} h     Height of the rectangle
	 * @param  {String} color A hex string.
	 */
	Shapes.prototype.rect = function drawRect(x, y) {
	  var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	  var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
	  this.ctx.fillStyle = color;
	  this.ctx.fillRect(x, y, w, h);
	};
	
	/**
	 * pCircle
	 * @memberOf Shapes
	 * @param  {Particle} p
	 * @return {Particle}
	 */
	Shapes.prototype.pCircle = function particleCircle(p) {
	  this.circle(p.state.x, p.state.y, p.state.radius, p.state.color);
	  return p;
	};
	
	/**
	 * pRect
	 * @memberOf Shapes
	 * @param  {Particle} p
	 * @return {Particle}
	 */
	Shapes.prototype.pRect = function particleRect(p) {
	  this.rect(p.state.x, p.state.y, p.state.width, p.state.height, p.state.color);
	  return p;
	};
	
	/**
	 * @memberOf Shapes
	 * @description Draw a line between these two points.
	 * @param  {Number} x0
	 * @param  {Number} y0
	 * @param  {Number} x1
	 * @param  {Number} y1
	 * @param  {string} style
	 */
	Shapes.prototype.drawLineXY = function (x0, y0, x1, y1) {
	  var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
	  this.ctx.beginPath();
	  this.ctx.strokeStyle = style;
	  this.ctx.moveTo(x0, y0);
	  this.ctx.lineTo(x1, y1);
	  this.ctx.stroke();
	};
	
	/**
	 * @memberOf Shapes
	 * @param  {Vector} vec0
	 * @param  {Vector} vec1
	 * @return {Void}
	 */
	Shapes.prototype.drawLineVec = function (vec0, vec1) {
	  this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
	  return void 0;
	};
	
	Shapes.prototype.drawLinePoints = function () {
	  for (var _len = arguments.length, points = Array(_len), _key = 0; _key < _len; _key++) {
	    points[_key] = arguments[_key];
	  }
	
	  var firstPoint = points[0];
	
	
	  if (!firstPoint) {
	    throw new Error("Please provide valid inputs");
	  }
	
	  if (points.length < 1) {
	    throw new Error("Must be given a a number of points greater than 1");
	  }
	
	  var sx = firstPoint.x,
	      sy = firstPoint.y;
	
	  this.ctx.beginPath();
	  this.ctx.moveTo(sx, sy);
	
	  // Some tricky destructing going on here.
	  // I need some practice so... just testing it out.
	  // The ...points bit is just a shallow copying array
	  // but getting rid of the first argument.
	  // The second bit is destructing the object that
	  // it gets for each iteration and aliasing
	  // the values to px and py.
	
	  var xs = points.slice(1);
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var _step$value = _step.value,
	          px = _step$value.x,
	          py = _step$value.y;
	
	      this.ctx.lineTo(px, py);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  this.ctx.stroke();
	};
	
	/**
	 * @memberOf Shapes
	 * @param  {number} width
	 * @param  {number} height
	 * @param  {Number} gridSize
	 * @param  {String} color
	 */
	Shapes.prototype.grid = function (width, height) {
	  var gridSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
	  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#ccc";
	
	  this.ctx.beginPath();
	  this.ctx.strokeStyle = color;
	
	  for (var x = 0; x < width; x += gridSize) {
	    this.ctx.moveTo(x, 0);
	    this.ctx.lineTo(x, height);
	  }
	
	  for (var y = 0; y < height; y += gridSize) {
	    this.ctx.moveTo(0, y);
	    this.ctx.lineTo(width, y);
	  }
	
	  this.ctx.stroke();
	};
	
	module.exports = Shapes;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	/**
	 * YAT stands for Yet Another Tween.
	 * Why not have one more package that does the same thing as the 50 out there?
	 * Well thats a good question that will not be answered in this comment block.
	 * To be honest its for practice and learning purposes. And if anyone in their
	 * right mind actaully benefits from this then so be it.
	 */
	
	var extend = __webpack_require__(5);
	var clone = __webpack_require__(6);
	var event = __webpack_require__(120);
	var utils = __webpack_require__(3);
	
	var DEFAULTS = {
	  obj: { x: 0, y: 0 },
	  props: { x: 100, y: 100 },
	  easing: "ease",
	  duration: 1000
	};
	
	var eventInstance = event.init();
	// Inherit methods from eventInstance
	var YAT = Object.create(eventInstance);
	
	YAT.init = function initTween(opts) {
	  // Can and uses Event and Clock methods.
	
	  if (!opts.clock) {
	    throw new Error("Please provide a clock API.");
	  }
	
	  this._clock = opts.clock;
	  this.parent = eventInstance;
	  this.tweens = [];
	
	  /**
	   * easingFns
	   * @description All easing functions are orignially written
	   * by robert penner, the tweening god.
	   * Here each method is passed a normalized value. Which is
	   * usually a number between 0 and 1. You can think of this number as
	   * a percentage of a range. With that normlized value / percentage we
	   * can map that percentage to another range. This is called interpolation.
	   * @see {@link http://robertpenner.com/easing/}
	   * @type {Object}
	   */
	  this.easingFns = {
	    // Here this ease function is linear as there is only one
	    // n value. Each ease function can be mapped to a polynomial.
	    ease: function ease(c, b, n) {
	      // polynomial: ax + b = c; where x is the normalized value
	      return c * n + b;
	    },
	    easeInQuad: function easeInQuad(c, b, n) {
	      // polynomial: 1x^2 + 0x + 0 = d;
	      return c * (n * n) + b;
	    },
	    easeOutQuad: function easeOutQuad(c, b, n) {
	      // polynomial: -1x^2 + 2x + 0 = d;
	      return c * (n * (2 - n)) + b;
	    },
	    easeInOutQuad: function easeInOutQuad(c, b, n) {
	      if ((n *= 2) < 1) {
	        return c / 2 * (n * n) + b; // Polynomial for half the range:
	        // 2x^2 + 0x + 0 = d;
	      }
	      return -c / 2 * (--n * (n - 2) - 1) + b; // Polynomial for the the upper
	      // half of the range: -2x^2 + 4x - 1
	    }
	  };
	
	  this._clock.on("tick", this.updateTweens, this);
	  return this;
	};
	
	/**
	 * updateTweens
	 * 
	 * @return {}
	 */
	YAT.updateTweens = function updateTeens() {
	  this.tweens.forEach(function (tween) {
	    if (tween.ticker.needsUpdate) {
	      tween.update(tween.ticker);
	    }
	
	    if (tween.ticker.done) {
	      tween.remove();
	    }
	
	    if (tween.ticker.stopped) {
	      console.log("Your tween is stopped.");
	    }
	  });
	};
	
	YAT.create = function () {
	  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var YATInstance = Object.create(YAT);
	  var _opts = Object.assign(clone(DEFAULTS), opts);
	  var duration = _opts.duration,
	      obj = _opts.obj,
	      props = _opts.props,
	      easing = _opts.easing,
	      id = _opts.id;
	
	
	  if (!YATInstance.easingFns[easing]) {
	    throw new Error("The easing function " + easing + " does not exists");
	  }
	
	  if (id) {
	    if (this.tweens.some(function (x) {
	      return x.id === id;
	    })) {
	      throw new Error("The tween with id: " + id + " already exists.");
	    }
	
	    YATInstance.id = id;
	  } else {
	    YATInstance.id = this.tweens.length + 1;
	  }
	
	  YATInstance.state = clone(obj);
	  YATInstance.obj = obj;
	  YATInstance.props = props;
	  YATInstance.duration = duration;
	  YATInstance.easing = YATInstance.easingFns[easing];
	  YATInstance.ticker = this._clock.createSlave({
	    id: YATInstance.id,
	    duration: YATInstance.duration
	  });
	
	  this.tweens.push(YATInstance);
	  return YATInstance;
	};
	
	YAT.get = function (id) {
	  if (this.tweens.length === 1) {
	    return YAT[0];
	  }
	
	  for (var i = 0; i < this.tween.length; i++) {
	    if (this.tween[i].id === id) {
	      return this.tween[i];
	    }
	  }
	
	  return false;
	};
	
	YAT.rewind = function () {
	  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
	
	  var tween = this.get(id);
	
	  if (!this.stopped) {
	    tween.stop();
	  }
	
	  // Figure out a way to cache the old props //
	  this.opts.obj = this.opts.props;
	  this.opts.props = this.opts.propsBeforeTween;
	
	  tween.start();
	};
	
	YAT.startAll = function startAll() {
	  if (!this.tweens.length) {
	    throw new Error("There are no tweens to start");
	  }
	
	  this.tweens.forEach(function (t) {
	    t.ticker.start();
	    t.normalizer = bindNormalize(0, t.ticker.duration.ms, utils.normalize);
	  });
	
	  this._clock.start();
	};
	
	/**
	 * delay - how long to delay the animation
	 * @param  {number} duration
	 * @return {YAT}
	 */
	YAT.delay = function delay(duration) {
	  var _this = this;
	
	  this.ticker.stop();
	  setTimeout(function () {
	    return _this.ticker.start();
	  }, duration);
	  return this;
	};
	
	/**
	 * stop - stops the ticker
	 * @return {YAT}
	 */
	YAT.stop = function stop() {
	  this.ticker.stop();
	  return this;
	};
	
	/**
	 * finish - finishes the tween animation
	 * @return {YAT}
	 */
	YAT.finish = function finish() {
	  this.stop();
	  this._clock.removeSlave(this.ticker.id);
	  this.state = this.props;
	  return this;
	};
	
	YAT.remove = function remove() {
	  var _this2 = this;
	
	  var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.id;
	
	  this.tweens = this.tween.filter(function (t) {
	    if (t.id === id) {
	      _this2._clock.removeSlave(t.ticker.id);
	      return false;
	    }
	
	    return true;
	  });
	};
	
	YAT.update = function update(ticker) {
	  var delta = ticker.timeSinceStart;
	
	  var norm = this.normalizer(delta);
	
	  for (var key in this.obj) {
	    if (this.obj.hasOwnProperty(key)) {
	      if (this.obj[key] !== undefined && this.props[key] !== undefined) {
	        this.state[key] = this.easing(this.props[key], this.obj[key], norm);
	      }
	    }
	  }
	};
	
	/**
	 * bindNormalize - To bind normalizer values.
	 * @param  {Number} a
	 * @param  {Number} b
	 * @param  {Function} normalize
	 * @return {Function}
	 */
	function bindNormalize(a, b, normalize) {
	  return function (delta) {
	    return normalize(delta, a, b);
	  };
	}
	
	module.exports = YAT;
	
	/* eslint-disable */
	
	/*
	 *
	 * TERMS OF USE - EASING EQUATIONS
	 * 
	 * Open source under the BSD License. 
	 * 
	 * Copyright © 2001 Robert Penner
	 * All rights reserved.
	 * 
	 * Redistribution and use in source and binary forms, with or without modification, 
	 * are permitted provided that the following conditions are met:
	 * 
	 * Redistributions of source code must retain the above copyright notice, this list of 
	 * conditions and the following disclaimer.
	 * Redistributions in binary form must reproduce the above copyright notice, this list 
	 * of conditions and the following disclaimer in the documentation and/or other materials 
	 * provided with the distribution.
	 *
	 * Neither the name of the author nor the names of contributors may be used to endorse
	 * or promote products derived from this software without specific prior written permission
	 *
	 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
	 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES O
	 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL TH
	 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL
	 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUT
	 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
	 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDIN
	 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
	 * OF THE POSSIBILITY OF SUCH DAMAGE.
	 *
	 */

/***/ },
/* 120 */
/***/ function(module, exports) {

	"use strict";
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Event
	 * @type {Object}
	 * @implements {utils}
	 */
	var Event = Object.create(null);
	
	/**
	 * init
	 * @memberOf Event
	 * @description Initializes the event object.
	 * @return {Event}
	 */
	Event.init = function initEvent() {
	  this.callbacks = {};
	  return this;
	};
	
	/**
	 * emit
	 * @description Executes the handeler that assocaited with the emitted event.
	 * @param {Array} args
	 * @return {Event}
	 */
	Event.emit = function emit() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var event = args[0],
	      rest = args.slice(1);
	
	
	  if (!event) {
	    throw new TypeError("Event: Please provide truthy arguments");
	  }
	
	  this.callbacks[event] = this.callbacks[event] || [];
	
	  if (this.callbacks[event].length) {
	    this.callbacks[event].forEach(function (callback) {
	      callback.apply(undefined, _toConsumableArray(rest));
	    });
	  }
	
	  return this;
	};
	
	/**
	 * on
	 * @description Attach a handler to an event.
	 * @param  {String}   event
	 * @param  {Function} fn
	 * @param  {Object}   context
	 * @return {Event}
	 */
	Event.on = function on(event, fn, context) {
	  var _this = this;
	
	  if (!event || !fn) {
	    throw new TypeError("Event: Please provide truthy arguments");
	  }
	
	  if (context) {
	    fn = fn.bind(context);
	  }
	
	  var events = event.split(" ");
	
	  this.callbacks = this.callbacks || {};
	
	  events.forEach(function (e) {
	    _this.callbacks[e] = _this.callbacks[e] || [];
	
	    if (!_this.callbacks[e].length) {
	      _this.callbacks[e].push(fn);
	      return _this;
	    }
	
	    // Dont create duplicates of the same handeled function.
	    // If you want your function run twice wrap it in a function.
	    return _this.callbacks[e].every(function (cb, i, col) {
	      return cb !== fn;
	    }) ? _this.callbacks[e].push(fn) : console.warn("Event: That function " + fn + " has already been declared a" + "handler for this event.");
	  });
	
	  return this;
	};
	
	/**
	 * off
	 * @description Remove an event handeler.
	 * @param  {String}   event
	 * @param  {Function} fn
	 * @return {Event}
	 */
	Event.off = function off() {
	  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var event = args[0],
	      fn = args[1];
	
	
	  if (!event) {
	    this.callbacks = {};
	    return this;
	  }
	
	  var callbacks = this.callbacks[event];
	
	  if (!callbacks) {
	    console.warn("Event: No event named " + event + " has been registered");
	    return this;
	  }
	
	  if (!fn) {
	    delete this.callbacks[event];
	    return this;
	  }
	
	  this.callbacks[event] = callbacks.filter(function (cb) {
	    return cb !== fn;
	  });
	
	  return this;
	};
	
	/**
	 * listeners - Return all callbacks attached to a certain event
	 * @param  {any<Array>} args
	 * @return {function[]}
	 */
	Event.listeners = function listeners() {
	  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	    args[_key3] = arguments[_key3];
	  }
	
	  var event = args[0];
	
	
	  if (!event) {
	    return Object.keys(this.callbacks);
	  }
	
	  if (!this.callbacks[event]) {
	    console.warn("Event: No event named " + event + " has been registered");
	  }
	
	  return this.callbacks[event];
	};
	
	Event.once = function once() {
	  var self = this;
	
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }
	
	  var event = args[0],
	      fn = args[1],
	      context = args[2];
	
	
	  var wrap = function wrap() {
	    fn.bind(context)();
	    self.off(event, wrap);
	  };
	
	  this.on(event, wrap, context);
	};
	
	// Aliases //
	Event.removeListener = Event.removeAllListeners = Event.off;
	Event.fire = Event.emit;
	Event.addListener = Event.on;
	Event.get = Event.listeners;
	
	module.exports = Event;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var ticker = __webpack_require__(122);
	var event = __webpack_require__(120).init();
	var Clock = Object.create(event);
	var MAX_FPS = 1000 / 60;
	var noop = function noop() {};
	
	/**
	 * init - Initalizes the clock with correct properties.
	 * @param  {Object} opts
	 * @param  {Number} opts.fps The fps you want the clock to tick at.
	 * @return {Clock}
	 */
	Clock.init = function initClock() {
	  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  opts = Object.assign({
	    fps: MAX_FPS,
	    renderer: noop
	  }, opts);
	
	  console.log(opts);
	
	  this.slaves = [];
	  this.parent = event;
	
	  // Zero based frame count.
	  this.index = -1;
	
	  // Save a reference to the animation frame so we can cancel it
	  this.rAF = 0;
	
	  // Time properties
	  this.startTime;
	  this.lastTime;
	  this.stopTime;
	  this.timeSinceStart = 0;
	  this.renderer = opts.renderer;
	
	  // The maximum FPS the browser can deliver is 60.
	  this.fps = opts.fps > MAX_FPS ? MAX_FPS : opts.fps || MAX_FPS;
	
	  return this;
	};
	
	/**
	 * start - Starts the clock with starting time properties.
	 * @param  {Number} fps The fps you want the clock to tick at.
	 * @return {Clock}
	 */
	Clock.start = function start() {
	  var fps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
	
	  if (fps > 60) {
	    throw new Error("The given fps is too high");
	  }
	
	  if (+fps === NaN) {
	    throw new Error("The given fps is not valid");
	  }
	
	  this.fps = 1000 / fps;
	  this.startTime = performance.now();
	  this.lastTime = this.startTime;
	
	  // Start ticking
	  this.loop(this.startTime);
	  return this;
	};
	
	/**
	 * tick
	 * @param  {Number} newTime A value in ms that is equal to the current time.
	 * @return {Clock}
	 */
	Clock.loop = function loop(newTime) {
	  this.rAF = requestAnimationFrame(loop.bind(this));
	
	  var delta = newTime - this.lastTime;
	  this.timeSinceStart = newTime - this.startTime;
	
	  this.renderer();
	
	  if (delta > this.fps) {
	    this.index++;
	    this.whipSlaves({
	      newTime: newTime,
	      delta: delta,
	      index: this.index,
	      lastTime: this.lastTime,
	      clockStart: this.startTime,
	      timeSinceStart: this.timeSinceStart
	    });
	    this.lastTime = newTime - delta % this.fps;
	  }
	
	  return this;
	};
	
	/**
	 * stop - Stop the clock and call the last tick if needed.
	 * @return {Clock}
	 */
	Clock.stop = function stopClock() {
	  cancelAnimationFrame(this.rAF);
	
	  // Record when we stopped.
	  this.stopTime = performance.now();
	  this.timeSinceStart += this.stopTime - this.startTime;
	  this.clearSlaves();
	
	  this.emit("stopped");
	  return this;
	};
	
	/**
	 * whipSlaves - Run all slaves in sequence and pass in
	 * the given state of the clock.
	 * @param  {Object} state
	 * @return {Clock}
	 */
	Clock.whipSlaves = function whipSlaves(state) {
	  var _this = this;
	
	  if (!this.slaves.length) return;
	
	  this.slaves.forEach(function (slave, index) {
	    if (slave.done) {
	      _this.removeSlave(slave.id);
	    }
	
	    if (slave.needsUpdate) {
	      // Can i set a timeout here and have the nudges run async?
	      // Give it a shoot.
	      slave.nudge(state);
	    }
	  });
	
	  this.emit("tick");
	  return this;
	};
	
	Clock.createSlave = function createSlave(opts) {
	  if (!opts) {
	    throw new Error("Please provide a options object");
	  }
	
	  var id = opts.id,
	      duration = opts.duration;
	
	  var timeStamp = performance.now();
	
	  var slave = Object.create(ticker).init({ timeStamp: timeStamp, id: id, duration: duration });
	
	  if (id) {
	    this.slaves.push(slave);
	    return slave;
	  }
	
	  slave.id = this.slaves.push(slave);
	  return slave;
	};
	
	Clock.removeSlave = function removeSlave(id) {
	  this.slaves = this.slaves.filter(function (slave) {
	    if (slave.id !== id) {
	      return true;
	    }
	    slave.removeAllListeners();
	    return false;
	  });
	};
	
	Clock.clearSlaves = function clearSlaves() {
	  if (this.slaves.length) this.slaves = [];
	};
	
	Clock.reset = function () {
	  this.stop();
	  this.clearSlaves();
	  this.removeAllListeners();
	  this.rAF = 0;
	};
	
	Clock.removeAllSlaves = Clock.clearSlaves;
	
	module.exports = Clock;

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var event = __webpack_require__(120);
	var MAX_FPS = 1000 / 60;
	var Ticker = Object.create(event);
	var STATE = {
	  STOPPED: "STOPPED",
	  RUNNING: "RUNNING",
	  DONE: "DONE"
	};
	
	Ticker.init = function init(_ref) {
	  var _ref$timeStamp = _ref.timeStamp,
	      timeStamp = _ref$timeStamp === undefined ? performance.now() : _ref$timeStamp,
	      id = _ref.id,
	      _ref$duration = _ref.duration,
	      duration = _ref$duration === undefined ? 1000 : _ref$duration,
	      _ref$interval = _ref.interval,
	      interval = _ref$interval === undefined ? MAX_FPS : _ref$interval;
	
	  this.id = id;
	  this.parent = event;
	  this.parent.name = "event";
	
	  // Probably cant support this??
	  // You have to have your own clock.
	  this.interval = interval;
	  this.duration = this.tickFor(duration, "ms");
	
	  this.STATE;
	  this.delta;
	  this.stopTime;
	  this.startTime = 0;
	  this.timeSinceStart = 0;
	  this.timeSinceStart2 = 0;
	
	  // Fire the first time you get called.
	  this.needsUpdate = true;
	
	  return this;
	};
	
	Ticker.tickFor = function tickFor(duration, string) {
	  switch (string) {
	    case "frames":case "f":
	      return {
	        type: "frames",
	        value: duration,
	        ms: duration * MAX_FPS
	      };
	    case "seconds":case "s":
	      return {
	        type: "seconds",
	        value: duration,
	        ms: duration * 1000
	      };
	    case "milliseconds":case "ms":default:
	      return {
	        type: "milliseconds",
	        value: duration,
	        ms: duration
	      };
	  };
	};
	
	Ticker.start = function start() {
	  if (this.STATE === STATE.RUNNING) return false;
	  this.STATE = STATE.RUNNING;
	  this.startTime = performance.now();
	};
	
	Ticker.stop = function stop() {
	  if (this.STATE === STATE.STOPPED) return false;
	  this.STATE = STATE.STOPPED;
	
	  // Know what time it stopped.
	  // so that if it starts again it
	  // it can recalculate how far it needs to go.
	  var newDuration = this.timeSinceStart - this.duration.ms || 0;
	
	  this.duration = {
	    type: "frames",
	    value: newDuration,
	    ms: newDuration
	  };
	
	  this.stopTime = performance.now();
	};
	
	Ticker.nudge = function nudge(state) {
	  if (!state) {
	    throw new Error("Please provide a state object");
	  }
	
	  if (this.STATE === STATE.STOPPED || this.STATE !== STATE.RUNNING) {
	    this.needsUpdate = false;
	    return null;
	  }
	
	  this.STATE = STATE.RUNNING;
	  this.timeSinceStart += state.delta;
	
	  if (this.timeSinceStart < this.duration.ms) {
	    this.needsUpdate = true;
	  } else {
	    this.STATE = STATE.DONE;
	    this.needsUpdate = false;
	  }
	};
	
	module.exports = Ticker;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzMjljNzg0ZmVlMjU5YWMxOGRlYyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90aWNrZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwicmVxdWlyZSIsIlBhcnRpY2xlIiwiVXRpbHMiLCJTaGFwZXMiLCJZQVQiLCJDbG9jayIsIlRpY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1dGlscyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwicHJvdG90eXBlIiwiY3JlYXRlIiwidmVjIiwic2V0IiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwiZ2V0Iiwic2V0QW5nbGUiLCJyYWQiLCJsZW5ndGgiLCJnZXRMZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2V0TGVuZ3RoIiwiZ2V0QW5nbGUiLCJoeXBvdCIsImF0YW4yIiwiYWRkIiwidjIiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmVjcyIsIm1hcCIsInYiLCJyZWR1Y2UiLCJ2MCIsInZuIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImRpdmlkZSIsImFkZFRvIiwic3VidHJhY3RGcm9tIiwibXVsdGlwbHlCeSIsImRpdmlkZUJ5Iiwicm90YXRlIiwiZGVsdGEiLCJyYW5kb20iLCJyVmVjdG9yIiwibWluIiwibWF4IiwibGVycCIsInJhbmRvbUJldHdlZW4iLCJyQmV0d2VlbiIsInhNaW4iLCJ4TWF4IiwieU1pbiIsInlNYXgiLCJPYmplY3QiLCJub3JtYWxpemUiLCJ2YWx1ZSIsInNyY01pbiIsInNyY01heCIsImRlc3RNaW4iLCJkZXN0TWF4IiwicGVyY2VudCIsImNsYW1wIiwiZmxvb3IiLCJkaXN0YW5jZVhZIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeCIsImR5IiwiZGlzdGFuY2VWZWMiLCJ2MSIsImRWZWMiLCJpblJhbmdlIiwicmFuZ2VJbnRlcnNlY3QiLCJtaW4wIiwibWF4MCIsIm1pbjEiLCJtYXgxIiwidmVjdG9ySW50ZXJzZWN0IiwidmVjMCIsInZlYzEiLCJjb2xsaXNpb25SZWN0IiwicjAiLCJyMSIsInIweCIsInIweSIsInIxeCIsInIxeSIsInIwdyIsIndpZHRoIiwicjBoIiwiaGVpZ2h0IiwicjF3IiwicjFoIiwiY29sbGlzaW9uQ2lyY2xlIiwiYzEiLCJjMiIsInJhZGkiLCJyYWRpdXMiLCJkaXN0YW5jZSIsImNvbGxpc2lvbkNpcmNsZVBvaW50IiwiY2lyY2xlIiwiZGlzdCIsImNvbGxpc2lvbkNpcmNsZVZlYyIsImNvbGxpc2lvblJlY3RQb2ludCIsInJlY3QiLCJyZWN0WCIsInJlY3RZIiwiY29sbGlzaW9uUmVjdFZlYyIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJEYXRlIiwibm93IiwiYXBwbHkiLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiLCJFcnJvciIsImFuZ2xlIiwiZGVnVG9SYWQiLCJkZWciLCJQSSIsInJhZFRvRGVnIiwicm91bmRUb1BsYWNlcyIsInBsYWNlcyIsIm11bHQiLCJwb3ciLCJyb3VuZCIsInJvdW5kVG9NdWx0aXBsZSIsIm5lYXJlc3QiLCJTdHJpbmciLCJxdWFkcmF0aWNCZXppZXIiLCJ0IiwiY3ViaWNCZXppZXIiLCJ2MyIsInF1YWRyYXRpY0JlemllclBvaW50IiwicDAiLCJwMSIsInAyIiwiY3ViaWNCZXppZXJQb2ludCIsInAzIiwibXVsdGlDdXJ2ZSIsInBvaW50cyIsImN0eCIsIm1pZFgiLCJtaWRZIiwibW92ZVRvIiwiaSIsInF1YWRyYXRpY0N1cnZlVG8iLCJlYXNlIiwiYSIsImIiLCJhYnMiLCJlYXNlVG8iLCJvcmlnaW4iLCJ0YXJnZXQiLCJ0aHJlc2hvbGQiLCJpc09iamVjdCIsImRhdGEiLCJ0b1N0cmluZyIsImNhbGwiLCJ1bmlxdWUiLCJhcnJheSIsImluZGV4T2YiLCJwdXNoIiwiZXh0ZW5kIiwiY2xvbmUiLCJ2eCIsInZ5IiwiZ3Jhdml0eSIsIm1hZ25pdHVkZSIsIm1hc3MiLCJkaXJlY3Rpb24iLCJmcmljdGlvbiIsInNwcmluZ3MiLCJtYXNzZXMiLCJvcHRzIiwicGFydGljbGUiLCJzZXRTcGVlZCIsInNldEhlYWRpbmciLCJhY2NlbGVyYXRlIiwiYXgiLCJheSIsInVwZGF0ZSIsImZyaWMiLCJncmF2IiwiaGFuZGxlU3ByaW5ncyIsImhhbmRsZU1hc3NlcyIsInVwZGF0ZVBvcyIsInNwZWVkIiwiZ2V0SGVhZGluZyIsImdldFNwZWVkIiwiYWRkU3ByaW5nIiwic3ByaW5nIiwicmVtb3ZlU3ByaW5nIiwicCIsInBvaW50Iiwic3BsaWNlIiwiYW5nbGVUbyIsImFuZ2VsVG8iLCJkaXN0YW5jZVRvIiwiYWRkTWFzcyIsInJlbW92ZU1hc3MiLCJncmF2aXRhdGVUbyIsImRpc3RTUSIsInNxcnQiLCJmb3JjZSIsImdlbmVyYXRvciIsImdlbiIsIm51bSIsImNhbGxiYWNrIiwiZnJlZXplIiwicGFydGljbGVzIiwiY29uc29sZSIsImxvZyIsIm5ld1BhcnRpY2xlIiwidW5kZWZpbmVkIiwic3ByaW5nRnJvbVRvIiwib2Zmc2V0Iiwic3ByaW5nRm9yY2UiLCJzeCIsInN5Iiwic3ByaW5nVG9Qb2ludCIsImRvY3VtZW50Iiwid2luZG93IiwiZHJhd0NpcmNsZSIsInIiLCJjb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJkcmF3UmVjdCIsInciLCJoIiwiZmlsbFJlY3QiLCJwQ2lyY2xlIiwicGFydGljbGVDaXJjbGUiLCJwUmVjdCIsInBhcnRpY2xlUmVjdCIsImRyYXdMaW5lWFkiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhd0xpbmVWZWMiLCJkcmF3TGluZVBvaW50cyIsImZpcnN0UG9pbnQiLCJ4cyIsInB4IiwicHkiLCJncmlkIiwiZ3JpZFNpemUiLCJldmVudCIsIkRFRkFVTFRTIiwib2JqIiwicHJvcHMiLCJlYXNpbmciLCJkdXJhdGlvbiIsImV2ZW50SW5zdGFuY2UiLCJpbml0IiwiaW5pdFR3ZWVuIiwiY2xvY2siLCJfY2xvY2siLCJwYXJlbnQiLCJ0d2VlbnMiLCJlYXNpbmdGbnMiLCJjIiwibiIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJvbiIsInVwZGF0ZVR3ZWVucyIsInVwZGF0ZVRlZW5zIiwiZm9yRWFjaCIsInR3ZWVuIiwidGlja2VyIiwibmVlZHNVcGRhdGUiLCJkb25lIiwicmVtb3ZlIiwic3RvcHBlZCIsIllBVEluc3RhbmNlIiwiX29wdHMiLCJhc3NpZ24iLCJpZCIsInNvbWUiLCJjcmVhdGVTbGF2ZSIsInJld2luZCIsInN0b3AiLCJwcm9wc0JlZm9yZVR3ZWVuIiwic3RhcnQiLCJzdGFydEFsbCIsIm5vcm1hbGl6ZXIiLCJiaW5kTm9ybWFsaXplIiwibXMiLCJkZWxheSIsImZpbmlzaCIsInJlbW92ZVNsYXZlIiwiZmlsdGVyIiwidGltZVNpbmNlU3RhcnQiLCJub3JtIiwia2V5IiwiRXZlbnQiLCJpbml0RXZlbnQiLCJjYWxsYmFja3MiLCJlbWl0IiwicmVzdCIsIlR5cGVFcnJvciIsImZuIiwiYmluZCIsImV2ZW50cyIsInNwbGl0IiwiZSIsImV2ZXJ5IiwiY2IiLCJjb2wiLCJ3YXJuIiwib2ZmIiwibGlzdGVuZXJzIiwia2V5cyIsIm9uY2UiLCJ3cmFwIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJmaXJlIiwiYWRkTGlzdGVuZXIiLCJNQVhfRlBTIiwibm9vcCIsImluaXRDbG9jayIsImZwcyIsInJlbmRlcmVyIiwic2xhdmVzIiwiaW5kZXgiLCJyQUYiLCJzdGFydFRpbWUiLCJsYXN0VGltZSIsInN0b3BUaW1lIiwiTmFOIiwicGVyZm9ybWFuY2UiLCJsb29wIiwibmV3VGltZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndoaXBTbGF2ZXMiLCJjbG9ja1N0YXJ0Iiwic3RvcENsb2NrIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjbGVhclNsYXZlcyIsInNsYXZlIiwibnVkZ2UiLCJ0aW1lU3RhbXAiLCJyZXNldCIsInJlbW92ZUFsbFNsYXZlcyIsIlNUQVRFIiwiU1RPUFBFRCIsIlJVTk5JTkciLCJET05FIiwiaW50ZXJ2YWwiLCJ0aWNrRm9yIiwidGltZVNpbmNlU3RhcnQyIiwic3RyaW5nIiwidHlwZSIsIm5ld0R1cmF0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBTUEsU0FBUyxtQkFBQUMsQ0FBUSxDQUFSLENBQWY7QUFDQSxLQUFNQyxXQUFXLG1CQUFBRCxDQUFRLENBQVIsQ0FBakI7QUFDQSxLQUFNRSxRQUFRLG1CQUFBRixDQUFRLENBQVIsQ0FBZDtBQUNBLEtBQU1HLFNBQVMsbUJBQUFILENBQVEsR0FBUixDQUFmO0FBQ0EsS0FBTUksTUFBTSxtQkFBQUosQ0FBUSxHQUFSLENBQVo7QUFDQSxLQUFNSyxRQUFRLG1CQUFBTCxDQUFRLEdBQVIsQ0FBZDtBQUNBLEtBQU1NLFNBQVMsbUJBQUFOLENBQVEsR0FBUixDQUFmOztBQUVBTyxRQUFPQyxP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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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S0FBTCxHQUFhQSxNQUFNRSxPQUFuQjtBQUNBLFFBQUt2RCxjQUFMLElBQXVCclQsTUFBTXVDLEtBQTdCOztBQUVBLE9BQUksS0FBSzhRLGNBQUwsR0FBc0IsS0FBSzFDLFFBQUwsQ0FBY3FDLEVBQXhDLEVBQTRDO0FBQzFDLFVBQUtqQixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsSUFGRCxNQUVPO0FBQ0wsVUFBSzJFLEtBQUwsR0FBYUEsTUFBTUcsSUFBbkI7QUFDQSxVQUFLOUUsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0YsRUFuQkQ7O0FBcUJBclMsUUFBT0MsT0FBUCxHQUFpQkYsTUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzI5Yzc4NGZlZTI1OWFjMThkZWMiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKFwiLi9saWIvdmVjdG9yc1wiKTtcbmNvbnN0IFBhcnRpY2xlID0gcmVxdWlyZShcIi4vbGliL3BhcnRpY2xlXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9saWIvdXRpbHNcIik7XG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9saWIvc2hhcGVzXCIpO1xuY29uc3QgWUFUID0gcmVxdWlyZShcIi4vbGliL3R3ZWVuXCIpO1xuY29uc3QgQ2xvY2sgPSByZXF1aXJlKFwiLi9saWIvY2xvY2suanNcIik7XG5jb25zdCBUaWNrZXIgPSByZXF1aXJlKFwiLi9saWIvdGlja2VyLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVmVjdG9yLFxuICBQYXJ0aWNsZSxcbiAgVXRpbHMsXG4gIFNoYXBlcyxcbiAgWUFULFxuICBUaWNrZXIsXG4gIENsb2NrLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgeDogMCxcbiAgeTogMSxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVmVjdG9yKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgLSBFYXN5IHdheSB0byBpbnN0YW50aWF0ZSBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge0ludH0geFxuICogQHBhcmFtICB7SW50fSB5XG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoeD0wLCB5PTApIHtcbiAgY29uc3QgdmVjID0gbmV3IFZlY3Rvcih7eCwgeX0pO1xuICByZXR1cm4gdmVjO1xufTtcblxuLyoqXG4gKiBTZXQgLSBBIHNldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAgeyp9IHByb3BcbiAqIEBwYXJhbSAgeyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcCwgdmFsKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayB2YWwgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gKiBAcmV0dXJuIHtWYWx1ZX0gICAgICAgIFRoZSB2YWx1ZSBhc3Nvc2lhdGVkIHdpdGggdGhlIHByb3AuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KHByb3ApIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcF07XG59O1xuXG4vKipcbiAqIHNldEFuZ2xlIC0gUGxvdCB0aGUgY29ycmRpbmF0ZXMgYmFzZWQgb24gcmFkaWFucyBnaXZlbi5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7UmFkaWFuc30gcmFkIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24gc2V0QW5nbGUocmFkKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBzZXRMZW5ndGggLSBUYWtlcyBhIGxlbmd0aCBhbmQgc2V0cyBjb29yZGluYXRlLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRMZW5ndGggPSBmdW5jdGlvbiBzZXRMZW5ndGgobGVuZ3RoKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCByYWQgPSB0aGlzLmdldEFuZ2xlKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIGdldExlbmd0aCAtIEdldHMgbGVuZ3RoIG9mIHRoZSBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xufTtcblxuLyoqXG4gKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiBnZXRBbmdsZSgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIGFkZCAtIFNob3VsZCBhZGQgdmVjdG9ycyB0b2dldGhlciBnaXZlbiBhIHZlY3RvclxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IHYyIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3Igd2l0aCBjb29yaWRuYXRlcywgb3IgbXVsdGlwbGUgdmVjdG9ycy5cbiAqL1xuXG5WZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuICAgIC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjJcbiAgICAgIC5tYXAoKHYpID0+ICh7eDogdi5nZXQoXCJ4XCIpLCB5OiB2LmdldChcInlcIil9KSlcbiAgICAgIC5yZWR1Y2UoKHYwLCB2bikgPT4gKHt4OiB2MC54ICsgdm4ueCwgeTogdjAueSArIHZuLnl9KSwgc2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHNlbGYuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG4gICAgc2VsZi5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBzdWJ0cmFjdCAtIHNob3VsZCBzdWJ0cmFjdCB0aGUgZ2l2ZW4gdmVjdG9yIHdpdGggaXRzIG93biB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9IEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiBzdWJ0cmFjdCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuICAgIC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjIubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG4gICAgLnJlZHVjZSgodjAsIHZuKSA9PlxuICAgICAgKHt4OiB2MC54IC0gdm4ueCwgeTogdjAueSAtIHZuLnl9KSxcbiAgICBzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgc2VsZi5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKSxcbiAgICBzZWxmLmdldChcInlcIikgLSB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIE11bGl0cGx5aW5nIHZlY3RvcnMgdG9nZXRoZXJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBleGFtcGxlIHt4OiAyLCB5OiAyfSAqIHt4OiAyLCB5OiAyfSA9IHt4OiA0LCB5OiA0fVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICB0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpLFxuICAgIHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogRGl2aWRlIHZlY3RvcnMgdG9nZXRoZXIuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uIGRpdmlkZSh2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIEFkZHMgdG8gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuYWRkVG8gPSBmdW5jdGlvbiBhZGRUbyh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIGZyb20gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3RGcm9tID0gZnVuY3Rpb24gc3VidHJhY3RGcm9tKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBtdWxpdHBsaWVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnkgPSBmdW5jdGlvbiBtdWx0aXBseUJ5KHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5ID0gZnVuY3Rpb24gZGl2aWRlQnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge051bWJlcn0gYW5nbGUgQSBudW1iZXIgb2YgcmFkaWFucyB0byByb3RhdGUgY2xvY2t3aXNlIGJ5LlxuKi9cblZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MoZGVsdGEpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihkZWx0YSk7XG5cbiAgLy9cbiAgY29uc3QgeCA9IHRoaXMuc3RhdGUueCAqIGNvcyAtIHRoaXMuc3RhdGUueSAqIHNpbjtcbiAgY29uc3QgeSA9IHRoaXMuc3RhdGUueSAqIGNvcyArIHRoaXMuc3RhdGUueCAqIHNpbjtcblxuICB0aGlzLnN0YXRlLnggPSB4O1xuICB0aGlzLnN0YXRlLnkgPSB5O1xufTtcblxuLyoqXG4gKiByYW5kb20gZ2VuZXJhdGUgYSB2ZWN0b3Igd2l0aCByYW5kb20gc3RhdGVzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAtIEEgbWluIHJhbmdlIG9uIHRoZSByYW5kb20gdmVjdG9yIHN0YXRlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCAtIEEgbWF4IHJhbmdlIG9uIHRoZSByYW5kb20gdmVjdG9yIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfVxuICovXG5WZWN0b3IucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIHJWZWN0b3IobWluPTEsIG1heD0xMCkge1xuICBjb25zdCB4ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gIGNvbnN0IHkgPSB1dGlscy5sZXJwKE1hdGgucmFuZG9tKCksIG1pbiwgbWF4KTtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKHgsIHkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGEgdmVjdG9yIHRoYXQgaGFzIGEgeCBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZS5cbiAqICAgICAgICAgICAgICBhbmQgeSBnaXZlbiBhIHJhbmdlLlxuICogQHBhcmFtICB7TnVtYmVyfSB4TWluIE1pbm11bSB4IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhNYXggTWF4aW11bSB4IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlNaW4gTWlubXVtIHkgdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0geU1heCBNYXhpbXVtIHkgdmFsdWVcbiAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5yYW5kb21CZXR3ZWVuID0gZnVuY3Rpb24gckJldHdlZW4oeE1pbj0wLCB4TWF4PTEwLCB5TWluPTAsIHlNYXg9MTApIHtcbiAgeE1heCA9IE1hdGgubWF4KHhNaW4sIHhNYXgpO1xuICB4TWluID0gTWF0aC5taW4oeE1pbiwgeE1heCk7XG4gIHlNYXggPSBNYXRoLm1heCh5TWluLCB5TWF4KTtcbiAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlNYXgpO1xuXG4gIGNvbnN0IHkgPSB1dGlscy5yYW5kb21CZXR3ZWVuKHlNaW4sIHlNYXgpO1xuICBjb25zdCB4ID0gdXRpbHMucmFuZG9tQmV0d2Vlbih4TWluLCB4TWF4KTtcblxuICByZXR1cm4gdGhpcy5jcmVhdGUoeCwgeSk7XG59O1xuXG5WZWN0b3IucHJvdG90eXBlW1wiK1wiXSA9IFZlY3Rvci5wcm90b3R5cGUuYWRkO1xuVmVjdG9yLnByb3RvdHlwZVtcIi1cIl0gPSBWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0O1xuVmVjdG9yLnByb3RvdHlwZVtcIipcIl0gPSBWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5O1xuVmVjdG9yLnByb3RvdHlwZVtcIi9cIl0gPSBWZWN0b3IucHJvdG90eXBlLmRpdmlkZTtcblZlY3Rvci5wcm90b3R5cGVbXCIrPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuYWRkVG87XG5WZWN0b3IucHJvdG90eXBlW1wiLT1cIl0gPSBWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0RnJvbTtcblZlY3Rvci5wcm90b3R5cGVbXCIqPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeTtcblZlY3Rvci5wcm90b3R5cGVbXCIvPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi92ZWN0b3JzLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyBjb21wb3NlZCBvZiBzbWFsbCBmdW5jdGlvbiB0aGF0XG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIG5lZWRlZC4gTW9zdCBmdW5jdGlvbnMgYXJlIHB1cmVcbiAqIGFuZCBvbmx5IHJldHVybiB2YWx1ZXMuIEZvciBtb3JlIGluZm8gcmVhZCB0aGUgZG9jcy5cbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBVdGlsc1xuICogQHJldHVybiB7VXRpbHN9XG4gKi9cbmNvbnN0IFV0aWxzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBub3JtYWxpemUgLSBUYWtlcyBhIG1heCBhbmQgbWluIHZhbHVlIGFuZCByZXR1cm5zXG4gKiBhIGZsb2F0aW5nIHBvaW50IG51bWJlciwgdGhhdCB3aGVuIG11bHRpcGxpZWRcbiAqIGJ5IG9uZSBodW5kcmVkIHJlcHJlc2VudHMgYSBwcmVjZW50YWdlIG9mIHRoZSByYW5nZVxuICogYmV0d2VlbiBtYXggYW5kIG1pbi5cbiAqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1pbiAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtYXggLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5VdGlscy5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbCAtIG1pbikgLyAobWF4IC0gbWluKTtcbn07XG5cbi8qKlxuICogbGVycCAtIGxpbmVhciBpbnRlcnBvbGF0aW9uIHRha2VzIGEgcmFuZ2UgYW5kIGEgZ2l2ZW4gbm9ybWFsaXplZCB2YWx1ZVxuICogYW5kIHJldHVybnMgYSB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBub3JtYWxpemVkIHZhbHVlIGluIHRoYXQgcmFuZ2UuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSB2YWxcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtaW5cbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtYXhcbiAqIEByZXR1cm4ge0ludGVyZ2VyfVxuICovXG5VdGlscy5sZXJwID0gZnVuY3Rpb24gbGVycCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLm1hcCA9IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgc3JjTWluLCBzcmNNYXgsIGRlc3RNaW4sIGRlc3RNYXgpIHtcbiAgc3JjTWF4ID0gTWF0aC5tYXgoc3JjTWF4LCBzcmNNaW4pO1xuICBzcmNNaW4gPSBNYXRoLm1pbihzcmNNYXgsIHNyY01pbik7XG4gIGRlc3RNaW4gPSBNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KTtcbiAgZGVzdE1heCA9IE1hdGgubWF4KGRlc3RNaW4sIGRlc3RNYXgpO1xuICByZXR1cm4gdGhpcy5sZXJwKHRoaXMubm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cblV0aWxzLnBlcmNlbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCAqIDEwMDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgbnVtYmVyIGFuZCBhIHJhbmdlIHJldHVybiB0aGVcbiAqICAgICAgICAgICAgICB2YWx1ZSBiZXR3ZWVuIHRoYXQgcmFuZ2Ugb3IgdGhlIG1heCBudW1iZXIgb3IgbWluIG51bWJlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4obWluLCBtYXgpKSwgTWF0aC5tYXgobWluLCBtYXgpKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mICBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBudW1iZXJzIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiB0aGUgdHdvLlxuICogQHBhcmFtICB7SW50ZWdlcn0geFxuICogQHBhcmFtICB7SW50ZWdlcn0geVxuICogQHJldHVybiB7SW50ZWdlcn1cbiAqL1xuVXRpbHMucmFuZG9tQmV0d2VlbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoeCwgeSk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuZGlzdGFuY2VYWSA9IGZ1bmN0aW9uKHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnN0IGR4ID0geDAgLSB4MTtcbiAgY29uc3QgZHkgPSB5MCAtIHkxO1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHZlY3RvcnMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjFcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuZGlzdGFuY2VWZWMgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgY29uc3QgZFZlYyA9ICh2MSlbXCItXCJdKHYyKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZFZlYy5nZXQoXCJ4XCIpLCBkVmVjLmdldChcInlcIikpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBudW1iZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuaW5SYW5nZSA9IGZ1bmN0aW9uKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWwgPD0gTWF0aC5tYXgobWF4LCBtaW4pKSAmJiAoTWF0aC5taW4obWF4LCBtaW4pIDw9IHZhbCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHR3byByYW5nZXMgc2VlIGlmIGJvdGggaW50ZXJzZWN0IGVhY2ggb3RoZXIuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMFxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjFcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMucmFuZ2VJbnRlcnNlY3QgPSBmdW5jdGlvbihtaW4wLCBtYXgwLCBtaW4xLCBtYXgxKSB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5tYXgobWF4MCwgbWluMCkgPj0gTWF0aC5taW4obWluMSwgbWF4MSkgJiZcbiAgICBNYXRoLm1pbihtaW4wLCBtYXgwKSA8PSBNYXRoLm1heChtYXgxLCBtaW4xKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvcyB2ZWN0b3JzIHNlZSBpZiB0aGV5IGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLnZlY3RvckludGVyc2VjdCA9IGZ1bmN0aW9uKHZlYzAsIHZlYzEpIHtcbiAgY29uc3QgeDAgPSB2ZWMwLmdldChcInhcIik7XG4gIGNvbnN0IHkwID0gdmVjMC5nZXQoXCJ5XCIpO1xuICBjb25zdCB4MSA9IHZlYzEuZ2V0KFwieFwiKTtcbiAgY29uc3QgeTEgPSB2ZWMxLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnJhbmdlSW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byByZWN0YW5nZSBzZWUgaWYgdGhlIGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IHIwXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3QgPSBmdW5jdGlvbihyMCwgcjEpIHtcbiAgY29uc3QgcjB4ID0gcjAuc3RhdGUueDtcbiAgY29uc3QgcjB5ID0gcjAuc3RhdGUueTtcbiAgY29uc3QgcjF4ID0gcjEuc3RhdGUueDtcbiAgY29uc3QgcjF5ID0gcjEuc3RhdGUueTtcblxuICBjb25zdCByMHcgPSByMHggKyByMC5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjBoID0gcjB5ICsgcjAuc3RhdGUuaGVpZ2h0O1xuICBjb25zdCByMXcgPSByMXggKyByMS5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjFoID0gcjF5ICsgcjEuc3RhdGUuaGVpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHgsIHIwdywgcjF4LCByMXcpICYmXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHksIHIwaCwgcjF5LCByMWgpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0byBwYXJ0aWNsZSB3aXRoIHJhZGkgcmV0dXJuIHdldGhlciB0aGV5IGNvbGxpZGUgYXJlIG5vdFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzFcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlID0gZnVuY3Rpb24oYzEsIGMyKSB7XG4gIGNvbnN0IHJhZGkgPSAoYzEuc3RhdGUucmFkaXVzICsgYzIuc3RhdGUucmFkaXVzKTtcbiAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgcG9pbnQgYW5kIGEgY2lyY2xlIHJldHVybiBhIGJvb2xlYW4gcmVnYXJkaW5nIHdldGhlciB0aGV5IGFyZSBjb2xsaWRpbmcuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlUG9pbnQgPSBmdW5jdGlvbih4LCB5LCBjaXJjbGUpIHtcbiAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgY29uc3QgZGlzdCA9IHRoaXMuZGlzdGFuY2VYWShcbiAgICB4LFxuICAgIHksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGEgY29sbGlzaW9uIGJldHdlZW4gY2lyY2xlcyBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlVmVjID0gZnVuY3Rpb24odmVjLCBjaXJjbGUpIHtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiB0aGlzLmRpc3RhbmNlWFkoXG4gICAgdmVjLmdldChcInhcIiksXG4gICAgdmVjLmdldChcInlcIiksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb24gb2YgYSByZWN0YW5nbGUgYW5kIGEgcG9pbnQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3RQb2ludCA9IGZ1bmN0aW9uKHgsIHksIHJlY3QpIHtcbiAgY29uc3QgcmVjdFggPSByZWN0LnN0YXRlLng7XG4gIGNvbnN0IHJlY3RZID0gcmVjdC5zdGF0ZS55O1xuICByZXR1cm4gKFxuICAgIHRoaXMuaW5SYW5nZSh4LCByZWN0WCwgcmVjdFggKyByZWN0LnN0YXRlLndpZHRoKSAmJlxuICAgIHRoaXMuaW5SYW5nZSh5LCByZWN0WSwgcmVjdFkgKyByZWN0LnN0YXRlLmhlaWdodClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdmVjdG9yIGFuZCBhIHJldGFuZ2xlIGNoZWNrIHdldGhlciB0aGV5IGNvbGxpZGVkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uUmVjdFZlYyA9IGZ1bmN0aW9uKHZlYywgcmVjdCkge1xuICByZXR1cm4gdGhpcy5jb2xsaXNpb25SZWN0UG9pbnQodmVjLmdldChcInhcIiksIHZlYy5nZXQoXCJ5XCIpLCByZWN0KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUnVuIGEgZnVuY3Rpb24gb25seSBpZiB0aGUgZ2l2ZW4gdGltZSB0byBhbGxvdyB0aGUgZnVuY3Rpb24gZXhlY3V0ZVxuICogaGFzIHBhc3NlZC4gSWZcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBldmVyeSBkZWx0YS5cbiAqIEBwYXJhbSAge051bWJlcn0gd2FpdCBUaGUgbWluaW11bSB0aW1lIHRvIHdhaXQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSB1bmRlcnNjb3JlXG4gKi9cblV0aWxzLnRocm90dGxlID0gZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICBsZXQgY29udGV4dDtcbiAgbGV0IGFyZ3M7XG4gIGxldCByZXN1bHQ7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzID0gMDtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IERhdGUubm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIGxldCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJncztcbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGxlbmd0aCBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBDb29yZGluYXRlc1xuICovXG5VdGlscy5zZXRMZW5ndGggPSBmdW5jdGlvbihsZW5ndGgsIHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBhbmdsZVxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBjb29yZGluYXRlc1xuICovXG5VdGlscy5zZXRBbmdsZSA9IGZ1bmN0aW9uKGFuZ2xlLCB4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBhbmdsZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICogQHBhcmFtICB7bnVtYmVyfSBkZWcgRGVncmVzc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5kZWdUb1JhZCA9IGZ1bmN0aW9uKGRlZykge1xuICByZXR1cm4gZGVnIC8gMTgwICogTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyByYWRpYW5zIHRvIGRlZ3Jlc3NcbiAqIEBwYXJhbSAge251bWJlcn0gcmFkXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJhZFRvRGVnID0gZnVuY3Rpb24ocmFkKSB7XG4gIHJldHVybiByYWQgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBSb3VuZCB0byBuZWFyZXN0IHBsYWNlIGdpdmVuLlxuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gcGxhY2VzIEFuIGV4cG9uZW50XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJvdW5kVG9QbGFjZXMgPSBmdW5jdGlvbih2YWwsIHBsYWNlcykge1xuICBjb25zdCBtdWx0ID0gTWF0aC5wb3coMTAsIHBsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIG11bHQpIC8gbXVsdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBuZWFyZXN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJvdW5kVG9NdWx0aXBsZSA9IGZ1bmN0aW9uKHZhbCwgbmVhcmVzdCkge1xuICBpZiAoIW5lYXJlc3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RoaW5nIGNhbiBiZSBhIG11bHRpcGxlIG9mIFwiICsgU3RyaW5nKG5lYXJlc3QpKTtcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgLyBuZWFyZXN0KSAqIG5lYXJlc3Q7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5xdWFkcmF0aWNCZXppZXIgPSBmdW5jdGlvbih2MCwgdjEsIHYyLCB0KSB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMikgKiB2MCArICgxIC0gdCkgKiAyICogdCAqIHYxICsgdCAqIHQgKiB2Mjtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLmN1YmljQmV6aWVyID0gZnVuY3Rpb24odjAsIHYxLCB2MiwgdjMsIHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAzKSAqIHYwICtcbiAgICAgICAgIE1hdGgucG93KDEgLSB0LCAyKSAqIDMgKiB0ICogdjEgK1xuICAgICAgICAgKDEgLSB0KSAqIDMgKiB0ICogdCAqIHYyICtcbiAgICAgICAgIHQgKiB0ICogdCArIHYzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucXVhZHJhdGljQmV6aWVyUG9pbnQgPSBmdW5jdGlvbihwMCwgcDEsIHAyLCB0KSB7XG4gIGNvbnN0IHggPSB0aGlzLnF1YWRyYXRpY0JlemllcihwMC54LCBwMS54LCBwMi54LCB0KTtcbiAgY29uc3QgeSA9IHRoaXMucXVhZHJhdGljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHQpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gcDNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMuY3ViaWNCZXppZXJQb2ludCA9IGZ1bmN0aW9uKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG4gIHggPSB0aGlzLmN1YmljQmV6aWVyKHAwLngsIHAxLngsIHAyLngsIHQpO1xuICB5ID0gdGhpcy5jdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gcG9pbnRzIG9uIHRoZSBwbGFuZSBkcmF3IGEgY3VydmVkIGxpbmUgYmV0d2VlblxuICogYWxsIG9mIHRoZW0uXG4gKiBAcGFyYW0gIHt7bnVtYmVyLCBudW1iZXJ9fSBwb2ludHNcbiAqIEBwYXJhbSAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XG4gKi9cblV0aWxzLm11bHRpQ3VydmUgPSBmdW5jdGlvbihwb2ludHMsIGN0eCkge1xuICBsZXQgcDA7XG4gIGxldCBwMTtcbiAgbGV0IG1pZFg7XG4gIGxldCBtaWRZO1xuXG4gIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICBwMCA9IHBvaW50c1tpXTtcbiAgICBwMSA9IHBvaW50c1tpICsgMV07XG4gICAgbWlkWCA9IChwMC54ICsgcDEueCkvMjtcbiAgICBtaWRZID0gKHAwLnkgKyBwMS55KS8yO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIG1pZFgsIG1pZFkpO1xuICB9XG5cbiAgcDAgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdO1xuICBwMSA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIHAxLngsIHAxLnkpO1xufTtcblxuLyoqXG4gKiBlYXNlXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0Zsb2F0fSBlYXNlIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge0ludH0gYSAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtJbnR9IGIgICAgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7SW50fSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuVXRpbHMuZWFzZSA9IGZ1bmN0aW9uKGVhc2UsIGEsIGIpIHtcbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGIgLSBhKSA8IDAuMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoYiAtIGEpICogZWFzZTtcbn07XG5cblV0aWxzLmVhc2VUbyA9IGZ1bmN0aW9uKGVhc2UsIG9yaWdpbiwgdGFyZ2V0LCB0aHJlc2hvbGQ9MC4xKSB7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIG9yaWdpbi55O1xuXG4gIC8vIHRoZSBkZWx0YSBjYW4gZ2V0IGV4dHJlbWVseSBzbWFsbCBhbmQgaXRzIG5vdCBwZXJmb3JtYW50IHRvIGtlZXBcbiAgLy8gb24gcmVuZGVyaW5nIG9yIGNhbGN1bGF0aW5nIGZvciBhbmltYXRpb24gcHVycG9zZXMuXG4gIGlmIChNYXRoLmFicyhkeCkgPCB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZHkpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3JpZ2luLnggKz0gZHggKiBlYXNlO1xuICBvcmlnaW4ueSArPSBkeSAqIGVhc2U7XG5cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbi8qKlxuICogaXNQbGFpbk9iamVjdFxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmlzT2JqZWN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKHt9KS50b1N0cmluZy5jYWxsKGRhdGEpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufTtcblxuLyoqXG4gKiB1bmlxdWUgcmV0dXJuIGFuIGFycmF5IHdpdGggbm8gZHVwbGljYXRlIHZhbHVlc1xuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuVXRpbHMudW5pcXVlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoeCwgeSkgPT4ge1xuICAgIGlmICh4LmluZGV4T2YoeSkgPT09IC0xKSB4LnB1c2goeSk7XG4gICAgcmV0dXJuIHg7XG4gIH0sIFtdKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZShVdGlscyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3V0aWxzLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cbi8qXG4qIFRoZSBwYXJ0aWNsZSBsaWJhcnkgaXMgdXNlZCBmb3IgcGh5c2ljcyBhbmltYXRpb25zLlxuKiB0aGV5IGFyZSBub3QgZXh0cmVtZWx5IGFjY3VyYXRlIGJ1dCBzdGlsbCByZXByZXNlbnRcbiogYW5kIGZlZWwgbGlrZSBwaHlzaWNhbCBtb3ZtZW50cy5cbiovXG5cbmNvbnN0IGV4dGVuZCA9IHJlcXVpcmUoXCJleHRlbmRcIik7XG5jb25zdCBjbG9uZSA9IHJlcXVpcmUoXCJsb2Rhc2gvY2xvbmVEZWVwXCIpO1xuLyogVGhlIGRlZmF1bHQgc3RhdGUgYSBwYXJ0aWNsZSBzdGFydHMgd2l0aCBJdCBzaG91bGQgbm90IG1vdmUuICovXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDAsXG4gIHZ4OiAwLFxuICB2eTogMCxcbiAgZ3Jhdml0eTogMCxcbiAgbWFnbml0dWRlOiAwLFxuICByYWRpdXM6IDEsXG4gIG1hc3M6IDEsXG4gIGRpcmVjdGlvbjogTWF0aC5QSSAqIDIsXG4gIGZyaWN0aW9uOiAxLFxuICBzcHJpbmdzOiBbXSxcbiAgbWFzc2VzOiBbXSxcbn07XG5cbi8qKlxuICogQGNsYXNzIFBhcnRpY2xlXG4gKiBAcGFyYW0ge3N0YXRlfSBzdGF0ZSBpbml0aWFsIHN0YXRlIHRvIHBhc3MgdGhlIGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFBhcnRpY2xlKHN0YXRlPWNsb25lKElOSVRJQUxfU1RBVEUpKSB7XG4gIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIGEgcGFydGljbGUgZ2l2ZW4gYSBkaXJlY3Rpb24gYW5kIG1hZ25pdHVkZS5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7T2JqZWN0fSAgIG9wdHMgb3B0aW9uYWwgc3RhdGUgdmFsdWVzIHRvIHBhc3MgdG8gY3JlYXRlLlxuICogQHJldHVybnMge1BhcnRpY2xlfSByZXR1cm5zIGEgcGFydGljbGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9Y2xvbmUoSU5JVElBTF9TVEFURSkpIHtcbiAgLy8gRXh0ZW5kIHRoZSBvcHRpb25hbCBzdGF0ZSBvbiB0byB0aGUgZGVmYXVsdCBzdGF0ZS5cbiAgb3B0cyA9IGV4dGVuZCh0cnVlLCBjbG9uZShJTklUSUFMX1NUQVRFKSwgb3B0cyk7XG5cbiAgLy8gQ3JlYXRlIHBhcnRpY2xlIHdpdGggdGhlIG5ldyBvcHRpb25zLlxuICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShvcHRzKTtcblxuICAvLyBTZXQgbGVuZ3RoLlxuICBwYXJ0aWNsZS5zZXRTcGVlZChvcHRzLm1hZ25pdHVkZSk7XG5cbiAgLy8gU2V0IGFuZ2xlLlxuICBwYXJ0aWNsZS5zZXRIZWFkaW5nKG9wdHMuZGlyZWN0aW9uKTtcblxuICAvLyBSZXR1cm4gbmV3IHBhcnRpY2xlLlxuICByZXR1cm4gcGFydGljbGU7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBIGNoYW5nZSBpbiB2ZWxvY2l0eS5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBheVxuICogQHJldHVybnMge09iamVjdH0gQWNjZWxlcmF0aW9uIHZlY3Rvci5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFjY2VsZXJhdGUgPSBmdW5jdGlvbiBhY2NlbGVyYXRlKGF4PXRoaXMuc3RhdGUudngsIGF5PXRoaXMuc3RhdGUudnkpIHtcbiAgdGhpcy5zdGF0ZS52eCArPSBheDtcbiAgdGhpcy5zdGF0ZS52eSArPSBheTtcbiAgcmV0dXJuIHtheCwgYXl9O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQSB1cGRhdGUgYSBwb3NpdGlvbiBvZiBhIHBhcnRpY2xlXG4gKiBiYXNlZCBvbiBpdHMgZ3Jhdml0eSBhbmQgZnJpY2l0aW9uLiBHcmF2aXR5IGlzIHVzdWFsbHkgYSBhY2NlbGVyYXRpb25cbiAqIHZlY3Rvci5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGZyaWMgRnJpY2l0aW9uIHRvIGFwcGx5LlxuICogQHBhcmFtICB7SW50ZWdlcn0gZ3JhdiBHcmF2aXR5IHRvIGFwcGx5LlxuICogQHJldHVybnMge09iamVjdH0gUG9zaXRpb24gc3RhdGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoZnJpYz10aGlzLnN0YXRlLmZyaWN0aW9uLCBncmF2PXRoaXMuc3RhdGUuZ3Jhdml0eSkge1xuICAvLyBBcHBseSBzcHJpbmdzXG4gIHRoaXMuaGFuZGxlU3ByaW5ncygpO1xuXG4gIC8vIEFwcGx5IGdyYXZpdGF0aW9uc1xuICB0aGlzLmhhbmRsZU1hc3NlcygpO1xuXG4gIC8vIEFwcGx5IGZha2UgZnJpY2l0aW9uIHRvIHZlbG9jaXR5XG4gIHRoaXMuc3RhdGUudnggKj0gZnJpYztcbiAgdGhpcy5zdGF0ZS52eSAqPSBmcmljO1xuXG4gIC8vIEFwcGx5IGdyYXZpdHkgdG8gdmVsb2NpdHlcbiAgdGhpcy5hY2NlbGVyYXRlKDAsIGdyYXYpO1xuXG4gIC8vIFVwZGF0ZSBwb3NpdGlvbiBiYXNlZCBvbiBhY2NlbGVyYXRpb25cbiAgcmV0dXJuIHRoaXMudXBkYXRlUG9zKCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGZvcmNlXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc2V0U3BlZWQgPSBmdW5jdGlvbiBzZXRTcGVlZChzcGVlZCkge1xuICBjb25zdCBhbmdsZSA9IHRoaXMuZ2V0SGVhZGluZygpO1xuICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBhbmdsZVxuICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXRIZWFkaW5nID0gZnVuY3Rpb24gc2V0SGVhZGluZyhhbmdsZSkge1xuICBjb25zdCBzcGVlZCA9IHRoaXMuZ2V0U3BlZWQoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAge251bWJlcn0geVxuICogQHJldHVybnMge251bWJlcn0gZm9yY2Ugb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0U3BlZWQgPSBmdW5jdGlvbiBnZXRTcGVlZCh4PXRoaXMuc3RhdGUudngsIHk9dGhpcy5zdGF0ZS52eSkge1xuICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnN0YXRlLnZ4LCB0aGlzLnN0YXRlLnZ5KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdldCB0aGUgYW5nbGUgb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGFuZ2xlIG9mIHZlbG9jaXR5IHZlY3Rvci5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdldEhlYWRpbmcgPSBmdW5jdGlvbiBnZXRIZWFkaW5nKHg9dGhpcy5zdGF0ZS52eCwgeT10aGlzLnN0YXRlLnZ5KSB7XG4gIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gYWRkIHNwcmluZyB0byBzcHJpbmdzIGFycmF5XG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzcHJpbmcgQSBzcHJpbmcgb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWRkU3ByaW5nID0gZnVuY3Rpb24gYWRkU3ByaW5nKHNwcmluZykge1xuICB0aGlzLnJlbW92ZVNwcmluZyhzcHJpbmcpO1xuICB0aGlzLnN0YXRlLnNwcmluZ3MucHVzaChzcHJpbmcpO1xuICByZXR1cm4gc3ByaW5nO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gcmVtb3ZlIGEgc3BlY2lmaWMgc3RyaW5nIGZyb20gdGhlIHNwcmluZ3MgYXJyYXlcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7T2JqZWN0fSBzcHJpbmdcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnJlbW92ZVNwcmluZyA9IGZ1bmN0aW9uIHJlbW92ZVNwcmluZyh7cG9pbnQ6IHtzdGF0ZTogcH19KSB7XG4gIGNvbnN0IHNwcmluZ3MgPSB0aGlzLnN0YXRlLnNwcmluZ3M7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHAueCA9PT0gc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS54ICYmXG4gICAgICAgIHAueSA9PT0gc3ByaW5nc1tpXS5wb2ludC5zdGF0ZS55KSB7XG4gICAgICBzcHJpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQXN1bW1pbmcgd2Uga25vdyB3aGVyZVxuICogdGhlIG90aGVyIHBhcnRpY2xlIGlzIG9uIHRoZSBjYW52YXMuIFdlIGNhbiB1c2VcbiAqIHRoZSBhbmdsZSBmb3JtdWxhZSB0byBmaWd1cmUgb3V0IHRoZSBhbmdsZVxuICogYmV0d2VlbiB0d28gcGFydGljbGUuIFVzaW5nIGFyY3RhbmdlbnQgaXMgZmluZS5cbiAqIGJ1dCBiZWNhdXNlIHRoZSBjb3JyZGluYXRlIHBsYW5lIGlzIGZpbHBlZCBvbiB0aGVcbiAqIFkgYXhpcyB3ZSB1c2UgYXRhbjIgdG8gZ2V0IHRoZSByaWdodCB2YWx1ZXMuIEV4cGxhaW5lZFxuICogaW4gQVBJIERvY3MuXG4gKiBcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7UGFydGljbGV9IHAyICAgICAgQSBwYXJ0aWNsZSBpbnN0YW5jZS5cbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAgQW5nbGUgICBBIGFuZ2xlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYW5nbGVUbyA9IGZ1bmN0aW9uIGFuZ2VsVG8oe3N0YXRlOiB7eDogeCwgeTogeX19KSB7XG4gIGNvbnN0IHt4OiBkeCwgeTogZHl9ID0ge3g6IHggLSB0aGlzLnN0YXRlLngsIHk6IHkgLSB0aGlzLnN0YXRlLnl9O1xuICByZXR1cm4gTWF0aC5hdGFuMihkeSwgZHgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQXNzdW1pbmcgd2Uga25vdyB3aGVyZSBib3RoIHBhcnRpY2xlIGFyZSBvbiB0aGUgY2FudmFzLlxuICogd2UgY2FuIHVzZSB0aGUgZGlzdGFuY2UgZm9ybXVhbGUgdG8gZmlndXJlIG91dCB0aGUgZGlzdGFuY2VcbiAqIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXMuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gIEFuZ2xlICAgQSBEaXN0YW5jZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZGlzdGFuY2VUbyA9IGZ1bmN0aW9uIGRpc3RhbmNlVG8oe3N0YXRlOiB7eDogeCwgeTogeX19KSB7XG4gIGNvbnN0IHt4OiBkeCwgeTogZHl9ID0ge3g6IHggLSB0aGlzLnN0YXRlLngsIHk6IHkgLSB0aGlzLnN0YXRlLnl9O1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBlbmQgYSBwYXJ0aWNsZSB0byB0aGUgbWFzc2VzIGFycmF5LlxuICogQHBhcmFtIHtQYXJ0aWNsZX0gbWFzc1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWRkTWFzcyA9IGZ1bmN0aW9uKG1hc3MpIHtcbiAgdGhpcy5yZW1vdmVNYXNzKG1hc3MpO1xuICB0aGlzLnN0YXRlLm1hc3Nlcy5wdXNoKG1hc3MpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYSBwYXJ0aWNsZSBmb3IgdGhlIG1hc3NlcyBhcnJheS5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBtYXNzXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5yZW1vdmVNYXNzID0gZnVuY3Rpb24oe3N0YXRlOiBtYXNzfSkge1xuICBjb25zdCBtYXNzZXMgPSB0aGlzLnN0YXRlLm1hc3NlcztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtYXNzLnggPT09IG1hc3Nlc1tpXS5zdGF0ZS54ICYmXG4gICAgICAgIG1hc3MueSA9PT0gbWFzc2VzW2ldLnN0YXRlLnkpIHtcbiAgICAgIG1hc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwbHlzIGdyYXZpdGF0aW9uIHRvIHRoZSBpbnB1dCBwYXJ0aWNsZS5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMlxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdyYXZpdGF0ZVRvID0gZnVuY3Rpb24ocDIpIHtcbiAgY29uc3QgZHggPSBwMi5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICBjb25zdCBkeSA9IHAyLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG5cbiAgLy8gRGlzdGFuY2UgYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlc1xuICBjb25zdCBkaXN0U1EgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgY29uc3QgZGlzdCA9IE1hdGguc3FydChkaXN0U1EpO1xuXG4gIC8vIE1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIFtGID0gRyhtMSkobTIpL3JeMl1cbiAgY29uc3QgZm9yY2UgPSBwMi5zdGF0ZS5tYXNzIC8gZGlzdFNRO1xuXG4gIC8vIFNldHRpbmcgdXAgYW5nbGVzIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3Qgc2luID0gZHkgLyBkaXN0O1xuICBjb25zdCBjb3MgPSBkeCAvIGRpc3Q7XG5cbiAgLy8gU2V0dGluZyB2ZXRvciBhbmdsZVxuICBjb25zdCBheCA9IGNvcyAqIGZvcmNlO1xuICBjb25zdCBheSA9IHNpbiAqIGZvcmNlO1xuXG4gIHJldHVybiB0aGlzLmFjY2VsZXJhdGUoYXgsIGF5KTtcbn07XG5cbi8vIFRoaXMgZ2VuZXJhdG9yciBmdW5jdGlvbiBpcyBwcmV0dHkgZ3Jvc3MgTWlsZXMgZml4IHRoaXMgeW91IGxhenkgcGlsZSBvZiBkZXZlbG9wZXIuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIGdlbmVyYXRlIGEgYnVuY2ggb2YgcGFydGljbGVzLlxuICogQHBhcmFtICB7TnVtYmVyfSAgICAgICAgICAgICAgICAgICAgIG51bSAgICAgICBUaGUgbWF4aW11bSBhbW91bnQgb2YgZ2VuZXJhdGVkIHBhcnRpY2xlcyBuZWVkZWQuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgICAgICAgICAgICAgICAgICAgb3B0cyAgICAgIE9wdGlvbnMgdG8gcGFzcyBlYWNoIHBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX5nZW5lcmF0b3JDYWxsYmFja30gY2FsbGJhY2sgIEZ1bmN0aW9uIHRvIGFsbG93IG1hcHBpbmcuXG4gKiBAcmV0dXJucyB7UGFydGljbGVbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdlbmVyYXRvciA9IGZ1bmN0aW9uIGdlbihudW0sIG9wdHM9Y2xvbmUoSU5JVElBTF9TVEFURSksIGNhbGxiYWNrKSB7XG4gIC8vIFNob3VsZCBub3QgbXV0YXRlIHRoZSBvcHRpb25zIGFmdGVyIHRoZXkgaGF2ZSBiZWVuIGdpdmVuIC8vXG4gIE9iamVjdC5mcmVlemUob3B0cyk7XG5cbiAgY29uc3QgcGFydGljbGVzID0gW107XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIGNhbGxiYWNrKG9wdHMsIGksIGZ1bmN0aW9uKHApIHtcbiAgICAgICAgaWYgKCFwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJObyBwYXJ0aWNsZSBwYXNzZWQgdG8gZ2VuZXJhdG9yLiBXaWxsIHVzZSBkZWZhdWx0IHN0YXRlLlwiKTtcbiAgICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IHNlbGYuY3JlYXRlKG9wdHMpO1xuICAgICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcbiAgICAgICAgICByZXR1cm4gbmV3UGFydGljbGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdQYXJ0aWNsZSA9IHNlbGYuY3JlYXRlKHApO1xuICAgICAgICBwYXJ0aWNsZXMucHVzaChuZXdQYXJ0aWNsZSk7XG4gICAgICAgIHJldHVybiBuZXdQYXJ0aWNsZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBwYXJ0aWNsZXMucHVzaChzZWxmLmNyZWF0ZShvcHRzKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhcnRpY2xlcztcbn07XG5cbi8qKlxuICogR2VuZXJhdG9yIGNhbGxiYWNrXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBjYWxsYmFjayBQYXJ0aWNsZX5nZW5lcmF0b3JDYWxsYmFja1xuICogQHBhcmFtIHtPYmplY3R9IG9wdHMgT3B0aW9ucyB0byBiZSBleHRlbmQgb24gdG8gZWFjaCBwYXJ0aWNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBpIEluZGV4IG9mIHBhcnRpY2xlIGluIEFycmF5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ge30gQSBjYWxsIGJhY2sgdG8gYmUgY2FsbGVkIHdpdGggdGhlIGdlbmVyYXRlZCBwYXJ0aWNsZS5cbiAqL1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGx5IHZlbG9jaXR5IHRvIHRoZSBwb3NpdGlvbi5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IHZ4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eVxuICogQHJldHVybnMge09iamVjdH0gUG9zaXRpb24gc3RhdGUgYWZ0ZXIgdmVsb2NpdHkgaGFzIGJlZW4gYXBwbGllZFxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlUG9zID0gZnVuY3Rpb24gdXBkYXRlUG9zKHZ4LCB2eSkge1xuICBpZiAodnggPT09IHVuZGVmaW5lZCAmJiB2eSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuc3RhdGUudng7XG4gICAgdGhpcy5zdGF0ZS55ICs9IHRoaXMuc3RhdGUudnk7XG4gICAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG4gIH1cblxuICB0aGlzLnN0YXRlLnggKz0gdng7XG4gIHRoaXMuc3RhdGUueSArPSB2eTtcbiAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBwYXJ0aWNsZXMgY2FsY3VsYXRlIHRoZVxuICogc3ByaW5nIGZvcmNlIGFwcGxpZWQgdG8gYm90aCBwYXJ0aWNsZXMuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHBhcmFtICB7SW50ZWdlcn0gIHNwcmluZyAgR2l2ZW4gb2Zmc2V0IGZvciB0aGUgcGFydGljbGVzXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSAgb2Zmc2V0ICBUaGUgc3ByaW5nIGNvZWZmaWNlbnRcbiAqIEByZXR1cm5zIHtQYXJ0aWNsZVtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc3ByaW5nRnJvbVRvID0gZnVuY3Rpb24gc3ByaW5nRnJvbVRvKHAsIHNwcmluZz0wLjA1LCBvZmZzZXQ9MTAwKSB7XG4gIC8vIFBvc3Rpb24gZGVsdGFcbiAgY29uc3QgZHggPSAocC5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54KTtcbiAgY29uc3QgZHkgPSAocC5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55KTtcblxuICAvLyBTZXR0aW5nIHVwIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgY29uc3Qgc3ByaW5nRm9yY2UgPSAoZGlzdGFuY2UgLSBvZmZzZXQpICogc3ByaW5nO1xuXG4gIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgLy8gQWNjZWxlcmF0ZSB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uLlxuICBwLnN0YXRlLnZ4IC09IHN4O1xuICBwLnN0YXRlLnZ5IC09IHN5O1xuXG4gIHJldHVybiBbdGhpcywgcF07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgcGFydGljbGUsIGEgdmVjdG9yLCBhbmQgYSBzcHJpbmcgY29lZmZpZW5jZW50IGFjY2VsZXJhdGVcbiAqIHRoZSBwYXJ0aWNsZSBhY2NvcmRpbmcgdG8gdGhlIGRpc3RhbmNlIGl0cyBpcyBmcm9tIHRoZSBwb2ludC5cbiAqIEBwYXJhbSAge09iamVjdH0gcCBBIHNwcmluZyBvYmplY3QuXG4gKiBAcmV0dXJucyB7UGFydGljbGV9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zcHJpbmdUb1BvaW50ID0gZnVuY3Rpb24gc3ByaW5nVG9Qb2ludChwKSB7XG4gIC8vIFBvc3Rpb24gZGVsdGFcbiAgY29uc3QgZHggPSAocC5wb2ludC5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54KTtcbiAgY29uc3QgZHkgPSAocC5wb2ludC5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55KTtcblxuICAvLyBTZXR0aW5nIHVwIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgY29uc3Qgc3ByaW5nRm9yY2UgPSAoZGlzdGFuY2UgLSBwLm9mZnNldCkgKiBwLnNwcmluZztcblxuICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gIHJldHVybiBbdGhpcywgcF07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGx5IHNwcmluZyBwb2ludCB0byBhbGwgaW50ZXJuYWwgc3ByaW5ncy5cbiAqIEBwYXJhbSAge3NwcmluZ3N9IHNwcmluZ3MgQW4gYXJyYXkgb2Ygc3ByaW5ncyB0byBzcHJpbmcgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0W119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5oYW5kbGVTcHJpbmdzID0gZnVuY3Rpb24gaGFuZGxlU3ByaW5ncyhzcHJpbmdzPXRoaXMuc3RhdGUuc3ByaW5ncykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnNwcmluZ1RvUG9pbnQoc3ByaW5nc1tpXSk7XG4gIH1cbiAgcmV0dXJuIHNwcmluZ3M7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEZvciBlYWNoIG1hc3MgaW4gdGhlIG1hc3NlcyBhcnJheSBhcHBseSBncmF2aXRhdGUgdG8gaXQuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZXNbXXxPYmplY3RbXX0gbWFzc2VzXG4gKiBAcmV0dXJucyB7UGFydGljbGVzW118T2JqZWN0W119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5oYW5kbGVNYXNzZXMgPSBmdW5jdGlvbiBoYW5kbGVNYXNzZXMobWFzc2VzPXRoaXMuc3RhdGUubWFzc2VzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5ncmF2aXRhdGVUbyhtYXNzZXNbaV0pO1xuICB9XG4gIHJldHVybiBtYXNzZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnRpY2xlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9wYXJ0aWNsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2V4dGVuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUNsb25lID0gcmVxdWlyZSgnLi9fYmFzZUNsb25lJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uY2xvbmVgIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IGNsb25lcyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZWN1cnNpdmVseSBjbG9uZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBkZWVwIGNsb25lZCB2YWx1ZS5cbiAqIEBzZWUgXy5jbG9uZVxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICdhJzogMSB9LCB7ICdiJzogMiB9XTtcbiAqXG4gKiB2YXIgZGVlcCA9IF8uY2xvbmVEZWVwKG9iamVjdHMpO1xuICogY29uc29sZS5sb2coZGVlcFswXSA9PT0gb2JqZWN0c1swXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBjbG9uZURlZXAodmFsdWUpIHtcbiAgcmV0dXJuIGJhc2VDbG9uZSh2YWx1ZSwgQ0xPTkVfREVFUF9GTEFHIHwgQ0xPTkVfU1lNQk9MU19GTEFHKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURlZXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2Nsb25lRGVlcC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4vX2FycmF5RWFjaCcpLFxuICAgIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbicpLFxuICAgIGJhc2VBc3NpZ25JbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25JbicpLFxuICAgIGNsb25lQnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVCdWZmZXInKSxcbiAgICBjb3B5QXJyYXkgPSByZXF1aXJlKCcuL19jb3B5QXJyYXknKSxcbiAgICBjb3B5U3ltYm9scyA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzJyksXG4gICAgY29weVN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2NvcHlTeW1ib2xzSW4nKSxcbiAgICBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpLFxuICAgIGdldEFsbEtleXNJbiA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXNJbicpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGluaXRDbG9uZUFycmF5ID0gcmVxdWlyZSgnLi9faW5pdENsb25lQXJyYXknKSxcbiAgICBpbml0Q2xvbmVCeVRhZyA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUJ5VGFnJyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX0ZMQVRfRkxBRyA9IDIsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xudmFyIGNsb25lYWJsZVRhZ3MgPSB7fTtcbmNsb25lYWJsZVRhZ3NbYXJnc1RhZ10gPSBjbG9uZWFibGVUYWdzW2FycmF5VGFnXSA9XG5jbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbmNsb25lYWJsZVRhZ3NbYm9vbFRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGVUYWddID1cbmNsb25lYWJsZVRhZ3NbZmxvYXQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW2Zsb2F0NjRUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbbWFwVGFnXSA9XG5jbG9uZWFibGVUYWdzW251bWJlclRhZ10gPSBjbG9uZWFibGVUYWdzW29iamVjdFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbmNsb25lYWJsZVRhZ3Nbc3RyaW5nVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc3ltYm9sVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9XG5jbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuY2xvbmVhYmxlVGFnc1tlcnJvclRhZ10gPSBjbG9uZWFibGVUYWdzW2Z1bmNUYWddID1cbmNsb25lYWJsZVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jbG9uZWAgYW5kIGBfLmNsb25lRGVlcGAgd2hpY2ggdHJhY2tzXG4gKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIERlZXAgY2xvbmVcbiAqICAyIC0gRmxhdHRlbiBpbmhlcml0ZWQgcHJvcGVydGllc1xuICogIDQgLSBDbG9uZSBzeW1ib2xzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICogQHBhcmFtIHtzdHJpbmd9IFtrZXldIFRoZSBrZXkgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgcGFyZW50IG9iamVjdCBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgb2JqZWN0LCBzdGFjaykge1xuICB2YXIgcmVzdWx0LFxuICAgICAgaXNEZWVwID0gYml0bWFzayAmIENMT05FX0RFRVBfRkxBRyxcbiAgICAgIGlzRmxhdCA9IGJpdG1hc2sgJiBDTE9ORV9GTEFUX0ZMQUcsXG4gICAgICBpc0Z1bGwgPSBiaXRtYXNrICYgQ0xPTkVfU1lNQk9MU19GTEFHO1xuXG4gIGlmIChjdXN0b21pemVyKSB7XG4gICAgcmVzdWx0ID0gb2JqZWN0ID8gY3VzdG9taXplcih2YWx1ZSwga2V5LCBvYmplY3QsIHN0YWNrKSA6IGN1c3RvbWl6ZXIodmFsdWUpO1xuICB9XG4gIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gIGlmIChpc0Fycikge1xuICAgIHJlc3VsdCA9IGluaXRDbG9uZUFycmF5KHZhbHVlKTtcbiAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgcmV0dXJuIGNvcHlBcnJheSh2YWx1ZSwgcmVzdWx0KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhZyA9IGdldFRhZyh2YWx1ZSksXG4gICAgICAgIGlzRnVuYyA9IHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG5cbiAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICByZXR1cm4gY2xvbmVCdWZmZXIodmFsdWUsIGlzRGVlcCk7XG4gICAgfVxuICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgIHJlc3VsdCA9IChpc0ZsYXQgfHwgaXNGdW5jKSA/IHt9IDogaW5pdENsb25lT2JqZWN0KHZhbHVlKTtcbiAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgIHJldHVybiBpc0ZsYXRcbiAgICAgICAgICA/IGNvcHlTeW1ib2xzSW4odmFsdWUsIGJhc2VBc3NpZ25JbihyZXN1bHQsIHZhbHVlKSlcbiAgICAgICAgICA6IGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgcmV0dXJuIG9iamVjdCA/IHZhbHVlIDoge307XG4gICAgICB9XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgfVxuICB9XG4gIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KHZhbHVlKTtcbiAgaWYgKHN0YWNrZWQpIHtcbiAgICByZXR1cm4gc3RhY2tlZDtcbiAgfVxuICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgdmFyIGtleXNGdW5jID0gaXNGdWxsXG4gICAgPyAoaXNGbGF0ID8gZ2V0QWxsS2V5c0luIDogZ2V0QWxsS2V5cylcbiAgICA6IChpc0ZsYXQgPyBrZXlzSW4gOiBrZXlzKTtcblxuICB2YXIgcHJvcHMgPSBpc0FyciA/IHVuZGVmaW5lZCA6IGtleXNGdW5jKHZhbHVlKTtcbiAgYXJyYXlFYWNoKHByb3BzIHx8IHZhbHVlLCBmdW5jdGlvbihzdWJWYWx1ZSwga2V5KSB7XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgIHN1YlZhbHVlID0gdmFsdWVba2V5XTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBhc3NpZ25WYWx1ZShyZXN1bHQsIGtleSwgYmFzZUNsb25lKHN1YlZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ2xvbmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ2xvbmUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIHN0YWNrQ2xlYXIgPSByZXF1aXJlKCcuL19zdGFja0NsZWFyJyksXG4gICAgc3RhY2tEZWxldGUgPSByZXF1aXJlKCcuL19zdGFja0RlbGV0ZScpLFxuICAgIHN0YWNrR2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tHZXQnKSxcbiAgICBzdGFja0hhcyA9IHJlcXVpcmUoJy4vX3N0YWNrSGFzJyksXG4gICAgc3RhY2tTZXQgPSByZXF1aXJlKCcuL19zdGFja1NldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFN0YWNrYC5cblN0YWNrLnByb3RvdHlwZS5jbGVhciA9IHN0YWNrQ2xlYXI7XG5TdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG5TdGFjay5wcm90b3R5cGUuZ2V0ID0gc3RhY2tHZXQ7XG5TdGFjay5wcm90b3R5cGUuaGFzID0gc3RhY2tIYXM7XG5TdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhY2s7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TdGFjay5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUGVyZm9ybXMgYVxuICogW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAqXG4gKiBfLmVxKG9iamVjdCwgb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKG9iamVjdCwgb3RoZXIpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKCdhJywgJ2EnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmVxKCdhJywgT2JqZWN0KCdhJykpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmVxKE5hTiwgTmFOKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gZXEodmFsdWUsIG90aGVyKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9lcS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIEdldHMgdGhlIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgcmV0dXJuIGluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IGRhdGFbaW5kZXhdWzFdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0NsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0RlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSBzdGFjayB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0hhcyhrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0hhcy5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja1NldC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXROYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNNYXNrZWQgPSByZXF1aXJlKCcuL19pc01hc2tlZCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqXG4gKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgXG4gKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAqL1xudmFyIHJlUmVnRXhwQ2hhciA9IC9bXFxcXF4kLiorPygpW1xcXXt9fF0vZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkpLiAqL1xudmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaWYgYSBtZXRob2QgaXMgbmF0aXZlLiAqL1xudmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgZnVuY1RvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UocmVSZWdFeHBDaGFyLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTmF0aXZlYCB3aXRob3V0IGJhZCBzaGltIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSB8fCBpc01hc2tlZCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHBhdHRlcm4gPSBpc0Z1bmN0aW9uKHZhbHVlKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gIHJldHVybiBwYXR0ZXJuLnRlc3QodG9Tb3VyY2UodmFsdWUpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYXRpdmU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNOYXRpdmUuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXN5bmNUYWcgPSAnW29iamVjdCBBc3luY0Z1bmN0aW9uXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBwcm94eVRhZyA9ICdbb2JqZWN0IFByb3h5XSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24sIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0Z1bmN0aW9uKF8pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNGdW5jdGlvbigvYWJjLyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIFRoZSB1c2Ugb2YgYE9iamVjdCN0b1N0cmluZ2AgYXZvaWRzIGlzc3VlcyB3aXRoIHRoZSBgdHlwZW9mYCBvcGVyYXRvclxuICAvLyBpbiBTYWZhcmkgOSB3aGljaCByZXR1cm5zICdvYmplY3QnIGZvciB0eXBlZCBhcnJheXMgYW5kIG90aGVyIGNvbnN0cnVjdG9ycy5cbiAgdmFyIHRhZyA9IGJhc2VHZXRUYWcodmFsdWUpO1xuICByZXR1cm4gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZyB8fCB0YWcgPT0gYXN5bmNUYWcgfHwgdGFnID09IHByb3h5VGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzRnVuY3Rpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cbm1vZHVsZS5leHBvcnRzID0gU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBzZWxmYC4gKi9cbnZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4vKiogVXNlZCBhcyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdC4gKi9cbnZhciByb290ID0gZnJlZUdsb2JhbCB8fCBmcmVlU2VsZiB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJvb3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19yb290LmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRSYXdUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcmVKc0RhdGEgPSByZXF1aXJlKCcuL19jb3JlSnNEYXRhJyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtZXRob2RzIG1hc3F1ZXJhZGluZyBhcyBuYXRpdmUuICovXG52YXIgbWFza1NyY0tleSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgcmV0dXJuIHVpZCA/ICgnU3ltYm9sKHNyYylfMS4nICsgdWlkKSA6ICcnO1xufSgpKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBpdHMgc291cmNlIG1hc2tlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc01hc2tlZChmdW5jKSB7XG4gIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNNYXNrZWQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc01hc2tlZC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYGZ1bmNgIHRvIGl0cyBzb3VyY2UgY29kZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHNvdXJjZSBjb2RlLlxuICovXG5mdW5jdGlvbiB0b1NvdXJjZShmdW5jKSB7XG4gIGlmIChmdW5jICE9IG51bGwpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGZ1bmNUb1N0cmluZy5jYWxsKGZ1bmMpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAoZnVuYyArICcnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG4gIHJldHVybiAnJztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1NvdXJjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3RvU291cmNlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHByb3BlcnR5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRWYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBoYXNoQ2xlYXIgPSByZXF1aXJlKCcuL19oYXNoQ2xlYXInKSxcbiAgICBoYXNoRGVsZXRlID0gcmVxdWlyZSgnLi9faGFzaERlbGV0ZScpLFxuICAgIGhhc2hHZXQgPSByZXF1aXJlKCcuL19oYXNoR2V0JyksXG4gICAgaGFzaEhhcyA9IHJlcXVpcmUoJy4vX2hhc2hIYXMnKSxcbiAgICBoYXNoU2V0ID0gcmVxdWlyZSgnLi9faGFzaFNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbkhhc2gucHJvdG90eXBlLmNsZWFyID0gaGFzaENsZWFyO1xuSGFzaC5wcm90b3R5cGVbJ2RlbGV0ZSddID0gaGFzaERlbGV0ZTtcbkhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG5IYXNoLnByb3RvdHlwZS5oYXMgPSBoYXNoSGFzO1xuSGFzaC5wcm90b3R5cGUuc2V0ID0gaGFzaFNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fSGFzaC5qc1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgSGFzaFxuICovXG5mdW5jdGlvbiBoYXNoQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuYXRpdmVDcmVhdGUgPyBuYXRpdmVDcmVhdGUobnVsbCkgOiB7fTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaFNldC5qc1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGdldE1hcERhdGEodGhpcywga2V5KVsnZGVsZXRlJ10oa2V5KTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0tleWFibGUgPSByZXF1aXJlKCcuL19pc0tleWFibGUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUgcmVmZXJlbmNlIGtleS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXAgZGF0YS5cbiAqL1xuZnVuY3Rpb24gZ2V0TWFwRGF0YShtYXAsIGtleSkge1xuICB2YXIgZGF0YSA9IG1hcC5fX2RhdGFfXztcbiAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgPyBkYXRhW3R5cGVvZiBrZXkgPT0gJ3N0cmluZycgPyAnc3RyaW5nJyA6ICdoYXNoJ11cbiAgICA6IGRhdGEubWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hcERhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRNYXBEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBtYXAgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmdldChrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIG1hcCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZm9yRWFjaGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkgPT09IGZhbHNlKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RWFjaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RWFjaC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnRcbiAqIHVzaW5nIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHZhciBvYmpWYWx1ZSA9IG9iamVjdFtrZXldO1xuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkpIHtcbiAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2RlZmluZVByb3BlcnR5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGFzc2lnblZhbHVlYCBhbmQgYGFzc2lnbk1lcmdlVmFsdWVgIHdpdGhvdXRcbiAqIHZhbHVlIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgPT0gJ19fcHJvdG9fXycgJiYgZGVmaW5lUHJvcGVydHkpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShvYmplY3QsIGtleSwge1xuICAgICAgJ2NvbmZpZ3VyYWJsZSc6IHRydWUsXG4gICAgICAnZW51bWVyYWJsZSc6IHRydWUsXG4gICAgICAndmFsdWUnOiB2YWx1ZSxcbiAgICAgICd3cml0YWJsZSc6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnblZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5cyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduLmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ25WYWx1ZScpO1xuXG4vKipcbiAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBwcm9wcyBUaGUgcHJvcGVydHkgaWRlbnRpZmllcnMgdG8gY29weS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyB0by5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICB2YXIgaXNOZXcgPSAhb2JqZWN0O1xuICBvYmplY3QgfHwgKG9iamVjdCA9IHt9KTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG5cbiAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICA/IGN1c3RvbWl6ZXIob2JqZWN0W2tleV0sIHNvdXJjZVtrZXldLCBrZXksIG9iamVjdCwgc291cmNlKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbmV3VmFsdWUgPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgaWYgKGlzTmV3KSB7XG4gICAgICBiYXNlQXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5T2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5cyhuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLmtleXMoJ2hpJyk7XG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QpIDogYmFzZUtleXMob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZVRpbWVzID0gcmVxdWlyZSgnLi9fYmFzZVRpbWVzJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtib29sZWFufSBpbmhlcml0ZWQgU3BlY2lmeSByZXR1cm5pbmcgaW5oZXJpdGVkIHByb3BlcnR5IG5hbWVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYXJyYXlMaWtlS2V5cyh2YWx1ZSwgaW5oZXJpdGVkKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpLFxuICAgICAgaXNBcmcgPSAhaXNBcnIgJiYgaXNBcmd1bWVudHModmFsdWUpLFxuICAgICAgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSksXG4gICAgICBpc1R5cGUgPSAhaXNBcnIgJiYgIWlzQXJnICYmICFpc0J1ZmYgJiYgaXNUeXBlZEFycmF5KHZhbHVlKSxcbiAgICAgIHNraXBJbmRleGVzID0gaXNBcnIgfHwgaXNBcmcgfHwgaXNCdWZmIHx8IGlzVHlwZSxcbiAgICAgIHJlc3VsdCA9IHNraXBJbmRleGVzID8gYmFzZVRpbWVzKHZhbHVlLmxlbmd0aCwgU3RyaW5nKSA6IFtdLFxuICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICBpZiAoKGluaGVyaXRlZCB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSAmJlxuICAgICAgICAhKHNraXBJbmRleGVzICYmIChcbiAgICAgICAgICAgLy8gU2FmYXJpIDkgaGFzIGVudW1lcmFibGUgYGFyZ3VtZW50cy5sZW5ndGhgIGluIHN0cmljdCBtb2RlLlxuICAgICAgICAgICBrZXkgPT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gTm9kZS5qcyAwLjEwIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIGJ1ZmZlcnMuXG4gICAgICAgICAgIChpc0J1ZmYgJiYgKGtleSA9PSAnb2Zmc2V0JyB8fCBrZXkgPT0gJ3BhcmVudCcpKSB8fFxuICAgICAgICAgICAvLyBQaGFudG9tSlMgMiBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiB0eXBlZCBhcnJheXMuXG4gICAgICAgICAgIChpc1R5cGUgJiYgKGtleSA9PSAnYnVmZmVyJyB8fCBrZXkgPT0gJ2J5dGVMZW5ndGgnIHx8IGtleSA9PSAnYnl0ZU9mZnNldCcpKSB8fFxuICAgICAgICAgICAvLyBTa2lwIGluZGV4IHByb3BlcnRpZXMuXG4gICAgICAgICAgIGlzSW5kZXgoa2V5LCBsZW5ndGgpXG4gICAgICAgICkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TGlrZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vICh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgbGVuZ3RoID0gbGVuZ3RoID09IG51bGwgPyBNQVhfU0FGRV9JTlRFR0VSIDogbGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICh2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0luZGV4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNJbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VJc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19iYXNlSXNUeXBlZEFycmF5JyksXG4gICAgYmFzZVVuYXJ5ID0gcmVxdWlyZSgnLi9fYmFzZVVuYXJ5JyksXG4gICAgbm9kZVV0aWwgPSByZXF1aXJlKCcuL19ub2RlVXRpbCcpO1xuXG4vKiBOb2RlLmpzIGhlbHBlciByZWZlcmVuY2VzLiAqL1xudmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIHR5cGVkIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlSXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgbGVuZ3RoLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvTGVuZ3RoYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9sZW5ndGgpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNMZW5ndGgoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgJiZcbiAgICB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDw9IE1BWF9TQUZFX0lOVEVHRVI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNMZW5ndGg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzTGVuZ3RoLmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuYXJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yIHN0b3JpbmcgbWV0YWRhdGEuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhcCBhcmd1bWVudHMgZm9yLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY2FwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlVW5hcnkoZnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuYXJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbm9kZVV0aWwuanNcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbkluYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduSW4ob2JqZWN0LCBzb3VyY2UpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBjb3B5T2JqZWN0KHNvdXJjZSwga2V5c0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbkluO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbkluLmpzXG4vLyBtb2R1bGUgaWQgPSA3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5c0luID0gcmVxdWlyZSgnLi9fYmFzZUtleXNJbicpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzSW4obmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYicsICdjJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqL1xuZnVuY3Rpb24ga2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0LCB0cnVlKSA6IGJhc2VLZXlzSW4ob2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBrZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzSW4gPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXNJbihvYmplY3QpO1xuICB9XG4gIHZhciBpc1Byb3RvID0gaXNQcm90b3R5cGUob2JqZWN0KSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAoIShrZXkgPT0gJ2NvbnN0cnVjdG9yJyAmJiAoaXNQcm90byB8fCAhaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkpKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2VcbiAqIFtgT2JqZWN0LmtleXNgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAob2JqZWN0ICE9IG51bGwpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgYWxsb2NVbnNhZmUgPSBCdWZmZXIgPyBCdWZmZXIuYWxsb2NVbnNhZmUgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQnVmZmVyKGJ1ZmZlciwgaXNEZWVwKSB7XG4gIGlmIChpc0RlZXApIHtcbiAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gIH1cbiAgdmFyIGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhbGxvY1Vuc2FmZSA/IGFsbG9jVW5zYWZlKGxlbmd0aCkgOiBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgYnVmZmVyLmNvcHkocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcGllcyB0aGUgdmFsdWVzIG9mIGBzb3VyY2VgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IHNvdXJjZSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gc291cmNlLmxlbmd0aDtcblxuICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtpbmRleF0gPSBzb3VyY2VbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9scyhzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RmlsdGVyKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlGaWx0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpO1xuXG4vKipcbiAqIENvcGllcyBvd24gYW5kIGluaGVyaXRlZCBzeW1ib2xzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIGZyb20uXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgdG8uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBjb3B5U3ltYm9sc0luKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9sc0luKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHNJbiA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgd2hpbGUgKG9iamVjdCkge1xuICAgIGFycmF5UHVzaChyZXN1bHQsIGdldFN5bWJvbHMob2JqZWN0KSk7XG4gICAgb2JqZWN0ID0gZ2V0UHJvdG90eXBlKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UHJvdG90eXBlLmpzXG4vLyBtb2R1bGUgaWQgPSA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlR2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0luLCBnZXRTeW1ib2xzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19Qcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fV2Vha01hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBhcnJheS5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gIGlmIChsZW5ndGggJiYgdHlwZW9mIGFycmF5WzBdID09ICdzdHJpbmcnICYmIGhhc093blByb3BlcnR5LmNhbGwoYXJyYXksICdpbmRleCcpKSB7XG4gICAgcmVzdWx0LmluZGV4ID0gYXJyYXkuaW5kZXg7XG4gICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyksXG4gICAgY2xvbmVEYXRhVmlldyA9IHJlcXVpcmUoJy4vX2Nsb25lRGF0YVZpZXcnKSxcbiAgICBjbG9uZU1hcCA9IHJlcXVpcmUoJy4vX2Nsb25lTWFwJyksXG4gICAgY2xvbmVSZWdFeHAgPSByZXF1aXJlKCcuL19jbG9uZVJlZ0V4cCcpLFxuICAgIGNsb25lU2V0ID0gcmVxdWlyZSgnLi9fY2xvbmVTZXQnKSxcbiAgICBjbG9uZVN5bWJvbCA9IHJlcXVpcmUoJy4vX2Nsb25lU3ltYm9sJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZSBiYXNlZCBvbiBpdHMgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNsb25pbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVCeVRhZyhvYmplY3QsIHRhZywgY2xvbmVGdW5jLCBpc0RlZXApIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBhcnJheUJ1ZmZlclRhZzpcbiAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICBjYXNlIGJvb2xUYWc6XG4gICAgY2FzZSBkYXRlVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgY2FzZSBkYXRhVmlld1RhZzpcbiAgICAgIHJldHVybiBjbG9uZURhdGFWaWV3KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgIGNhc2UgaW50OFRhZzogY2FzZSBpbnQxNlRhZzogY2FzZSBpbnQzMlRhZzpcbiAgICBjYXNlIHVpbnQ4VGFnOiBjYXNlIHVpbnQ4Q2xhbXBlZFRhZzogY2FzZSB1aW50MTZUYWc6IGNhc2UgdWludDMyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHJldHVybiBjbG9uZU1hcChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgcmV0dXJuIG5ldyBDdG9yKG9iamVjdCk7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVJlZ0V4cChvYmplY3QpO1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVN5bWJvbChvYmplY3QpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQnlUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVCeVRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lQXJyYXlCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fVWludDhBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgZGF0YSB2aWV3LlxuICovXG5mdW5jdGlvbiBjbG9uZURhdGFWaWV3KGRhdGFWaWV3LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIoZGF0YVZpZXcuYnVmZmVyKSA6IGRhdGFWaWV3LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFkZE1hcEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkTWFwRW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVNYXAobWFwLCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCBDTE9ORV9ERUVQX0ZMQUcpIDogbWFwVG9BcnJheShtYXApO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZU1hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBZGRzIHRoZSBrZXktdmFsdWUgYHBhaXJgIHRvIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gcGFpciBUaGUga2V5LXZhbHVlIHBhaXIgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAqL1xuZnVuY3Rpb24gYWRkTWFwRW50cnkobWFwLCBwYWlyKSB7XG4gIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIG1hcC5zZXQocGFpclswXSwgcGFpclsxXSk7XG4gIHJldHVybiBtYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWFwRW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRNYXBFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwVG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIHRvIG1hdGNoIGBSZWdFeHBgIGZsYWdzIGZyb20gdGhlaXIgY29lcmNlZCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgcmVnZXhwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHJlZ2V4cCBUaGUgcmVnZXhwIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVSZWdFeHAocmVnZXhwKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgcmVzdWx0Lmxhc3RJbmRleCA9IHJlZ2V4cC5sYXN0SW5kZXg7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVSZWdFeHA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qc1xuLy8gbW9kdWxlIGlkID0gMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhZGRTZXRFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZFNldEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzZXQuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKHNldFRvQXJyYXkoc2V0KSwgQ0xPTkVfREVFUF9GTEFHKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRTZXRFbnRyeSwgbmV3IHNldC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgc2V0YC5cbiAqL1xuZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAvLyBEb24ndCByZXR1cm4gYHNldC5hZGRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBzZXQuYWRkKHZhbHVlKTtcbiAgcmV0dXJuIHNldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRTZXRFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc2V0VG9BcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gY29udmVydCBzeW1ib2xzIHRvIHByaW1pdGl2ZXMgYW5kIHN0cmluZ3MuICovXG52YXIgc3ltYm9sUHJvdG8gPSBTeW1ib2wgPyBTeW1ib2wucHJvdG90eXBlIDogdW5kZWZpbmVkLFxuICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoZSBgc3ltYm9sYCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzeW1ib2wgVGhlIHN5bWJvbCBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc3ltYm9sIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTeW1ib2woc3ltYm9sKSB7XG4gIHJldHVybiBzeW1ib2xWYWx1ZU9mID8gT2JqZWN0KHN5bWJvbFZhbHVlT2YuY2FsbChzeW1ib2wpKSA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU3ltYm9sO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVTeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDExNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBjbG9uZVR5cGVkQXJyYXkodHlwZWRBcnJheSwgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKHR5cGVkQXJyYXkuYnVmZmVyKSA6IHR5cGVkQXJyYXkuYnVmZmVyO1xuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVR5cGVkQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVR5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDExNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdENyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICogcHJvcGVydGllcyB0byB0aGUgY3JlYXRlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm90byBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKi9cbnZhciBiYXNlQ3JlYXRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBvYmplY3QoKSB7fVxuICByZXR1cm4gZnVuY3Rpb24ocHJvdG8pIHtcbiAgICBpZiAoIWlzT2JqZWN0KHByb3RvKSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICBpZiAob2JqZWN0Q3JlYXRlKSB7XG4gICAgICByZXR1cm4gb2JqZWN0Q3JlYXRlKHByb3RvKTtcbiAgICB9XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHByb3RvO1xuICAgIHZhciByZXN1bHQgPSBuZXcgb2JqZWN0O1xuICAgIG9iamVjdC5wcm90b3R5cGUgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBjbGFzcyBTaGFwZXNcbiAqIEBwYXJhbSB7T2JqZWN0fSBjdHggICAgICBDYW52YXMgY29udGV4dC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2N1bWVudCBUaGUgZG9jdW1lbnQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBTaGFwZXMoY3R4LCBkb2N1bWVudCkge1xuICBpZiAoIWN0eCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlNoYXBlczogUGxlYXNlIHByb3ZpZGUgYSBjb250ZXh0IGFyZ3VtZW50IFthcmc6OjFdXCIpO1xuICB9XG4gIHRoaXMuY3R4ID0gY3R4O1xuICB0aGlzLmRvY3VtZW50ID0gZG9jdW1lbnQgfHwgd2luZG93LmRvY3VtZW50O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gZHJhdyBhIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB4ICAgICBUaGUgeCBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0geSAgICAgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHIgICAgIFRoZSByYWRpdXMgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBjb2xvciBUaGUgY29sb3Igb2YgdGhlIGNpcmNsZS5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5jaXJjbGUgPSBmdW5jdGlvbiBkcmF3Q2lyY2xlKHg9NCwgeT00LCByPTIsIGNvbG9yPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gIHRoaXMuY3R4LmZpbGwoKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIEZpbGwgYSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge051bWJlcn0geCAgICAgU3RhcnRpbmcgcG9pbnQgWFxuICogQHBhcmFtICB7TnVtYmVyfSB5ICAgICBTdGFydGluZyBwb2ludCBZXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHcgICAgIFdpZHRoIG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge051bWJlcn0gaCAgICAgSGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3IgQSBoZXggc3RyaW5nLlxuICovXG5TaGFwZXMucHJvdG90eXBlLnJlY3QgPSBmdW5jdGlvbiBkcmF3UmVjdCh4LCB5LCB3PTEwLCBoPTEwLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG59O1xuXG4vKipcbiAqIHBDaXJjbGVcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5wQ2lyY2xlID0gZnVuY3Rpb24gcGFydGljbGVDaXJjbGUocCkge1xuICB0aGlzLmNpcmNsZShcbiAgICBwLnN0YXRlLngsXG4gICAgcC5zdGF0ZS55LFxuICAgIHAuc3RhdGUucmFkaXVzLFxuICAgIHAuc3RhdGUuY29sb3JcbiAgKTtcbiAgcmV0dXJuIHA7XG59O1xuXG4vKipcbiAqIHBSZWN0XG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucFJlY3QgPSBmdW5jdGlvbiBwYXJ0aWNsZVJlY3QocCkge1xuICB0aGlzLnJlY3QoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLndpZHRoLFxuICAgIHAuc3RhdGUuaGVpZ2h0LFxuICAgIHAuc3RhdGUuY29sb3JcbiAgKTtcbiAgcmV0dXJuIHA7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBEcmF3IGEgbGluZSBiZXR3ZWVuIHRoZXNlIHR3byBwb2ludHMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHgxXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkxXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0eWxlXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuZHJhd0xpbmVYWSA9IGZ1bmN0aW9uKHgwLCB5MCwgeDEsIHkxLCBzdHlsZT1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBzdHlsZTtcbiAgdGhpcy5jdHgubW92ZVRvKHgwLCB5MCk7XG4gIHRoaXMuY3R4LmxpbmVUbyh4MSwgeTEpO1xuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAqIEByZXR1cm4ge1ZvaWR9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUuZHJhd0xpbmVWZWMgPSBmdW5jdGlvbih2ZWMwLCB2ZWMxKSB7XG4gIHRoaXMuZHJhd0xpbmVYWSh2ZWMwLmdldChcInhcIiksIHZlYzAuZ2V0KFwieVwiKSwgdmVjMS5nZXQoXCJ4XCIpLCB2ZWMxLmdldChcInlcIikpO1xuICByZXR1cm4gdm9pZCgwKTtcbn07XG5cblNoYXBlcy5wcm90b3R5cGUuZHJhd0xpbmVQb2ludHMgPSBmdW5jdGlvbiguLi5wb2ludHMpIHtcbiAgY29uc3QgW2ZpcnN0UG9pbnRdID0gcG9pbnRzO1xuXG4gIGlmICghZmlyc3RQb2ludCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIGlucHV0c1wiKTtcbiAgfVxuXG4gIGlmIChwb2ludHMubGVuZ3RoIDwgMSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk11c3QgYmUgZ2l2ZW4gYSBhIG51bWJlciBvZiBwb2ludHMgZ3JlYXRlciB0aGFuIDFcIik7XG4gIH1cblxuICBjb25zdCB7eDogc3gsIHk6IHN5fSA9IGZpcnN0UG9pbnQ7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5tb3ZlVG8oc3gsIHN5KTtcblxuICAvLyBTb21lIHRyaWNreSBkZXN0cnVjdGluZyBnb2luZyBvbiBoZXJlLlxuICAvLyBJIG5lZWQgc29tZSBwcmFjdGljZSBzby4uLiBqdXN0IHRlc3RpbmcgaXQgb3V0LlxuICAvLyBUaGUgLi4ucG9pbnRzIGJpdCBpcyBqdXN0IGEgc2hhbGxvdyBjb3B5aW5nIGFycmF5XG4gIC8vIGJ1dCBnZXR0aW5nIHJpZCBvZiB0aGUgZmlyc3QgYXJndW1lbnQuXG4gIC8vIFRoZSBzZWNvbmQgYml0IGlzIGRlc3RydWN0aW5nIHRoZSBvYmplY3QgdGhhdFxuICAvLyBpdCBnZXRzIGZvciBlYWNoIGl0ZXJhdGlvbiBhbmQgYWxpYXNpbmdcbiAgLy8gdGhlIHZhbHVlcyB0byBweCBhbmQgcHkuXG5cbiAgY29uc3QgWywgLi4ueHNdID0gcG9pbnRzO1xuICBmb3IgKGxldCB7eDogcHgsIHk6IHB5fSBvZiB4cykge1xuICAgIHRoaXMuY3R4LmxpbmVUbyhweCwgcHkpO1xuICB9XG5cbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge251bWJlcn0gd2lkdGhcbiAqIEBwYXJhbSAge251bWJlcn0gaGVpZ2h0XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGdyaWRTaXplXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuZ3JpZCA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQsIGdyaWRTaXplPTIwLCBjb2xvcj1cIiNjY2NcIikge1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcblxuICBmb3IgKGxldCB4ID0gMDsgeCA8IHdpZHRoOyB4ICs9IGdyaWRTaXplKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgsIDApO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh4LCBoZWlnaHQpO1xuICB9XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gZ3JpZFNpemUpIHtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oMCwgeSk7XG4gICAgdGhpcy5jdHgubGluZVRvKHdpZHRoLCB5KTtcbiAgfVxuXG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaGFwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3NoYXBlcy5qcyIsIi8qKlxuICogWUFUIHN0YW5kcyBmb3IgWWV0IEFub3RoZXIgVHdlZW4uXG4gKiBXaHkgbm90IGhhdmUgb25lIG1vcmUgcGFja2FnZSB0aGF0IGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIDUwIG91dCB0aGVyZT9cbiAqIFdlbGwgdGhhdHMgYSBnb29kIHF1ZXN0aW9uIHRoYXQgd2lsbCBub3QgYmUgYW5zd2VyZWQgaW4gdGhpcyBjb21tZW50IGJsb2NrLlxuICogVG8gYmUgaG9uZXN0IGl0cyBmb3IgcHJhY3RpY2UgYW5kIGxlYXJuaW5nIHB1cnBvc2VzLiBBbmQgaWYgYW55b25lIGluIHRoZWlyXG4gKiByaWdodCBtaW5kIGFjdGF1bGx5IGJlbmVmaXRzIGZyb20gdGhpcyB0aGVuIHNvIGJlIGl0LlxuICovXG5cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIG9iajoge3g6IDAsIHk6IDB9LFxuICBwcm9wczoge3g6IDEwMCwgeTogMTAwfSxcbiAgZWFzaW5nOiBcImVhc2VcIixcbiAgZHVyYXRpb246IDEwMDAsXG59O1xuXG5jb25zdCBldmVudEluc3RhbmNlID0gZXZlbnQuaW5pdCgpO1xuLy8gSW5oZXJpdCBtZXRob2RzIGZyb20gZXZlbnRJbnN0YW5jZVxuY29uc3QgWUFUID0gT2JqZWN0LmNyZWF0ZShldmVudEluc3RhbmNlKTtcblxuWUFULmluaXQgPSBmdW5jdGlvbiBpbml0VHdlZW4ob3B0cykge1xuICAvLyBDYW4gYW5kIHVzZXMgRXZlbnQgYW5kIENsb2NrIG1ldGhvZHMuXG5cbiAgaWYgKCFvcHRzLmNsb2NrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBjbG9jayBBUEkuXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2sgPSBvcHRzLmNsb2NrO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50SW5zdGFuY2U7XG4gIHRoaXMudHdlZW5zID0gW107XG5cbiAgLyoqXG4gICAqIGVhc2luZ0Zuc1xuICAgKiBAZGVzY3JpcHRpb24gQWxsIGVhc2luZyBmdW5jdGlvbnMgYXJlIG9yaWduaWFsbHkgd3JpdHRlblxuICAgKiBieSByb2JlcnQgcGVubmVyLCB0aGUgdHdlZW5pbmcgZ29kLlxuICAgKiBIZXJlIGVhY2ggbWV0aG9kIGlzIHBhc3NlZCBhIG5vcm1hbGl6ZWQgdmFsdWUuIFdoaWNoIGlzXG4gICAqIHVzdWFsbHkgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxLiBZb3UgY2FuIHRoaW5rIG9mIHRoaXMgbnVtYmVyIGFzXG4gICAqIGEgcGVyY2VudGFnZSBvZiBhIHJhbmdlLiBXaXRoIHRoYXQgbm9ybWxpemVkIHZhbHVlIC8gcGVyY2VudGFnZSB3ZVxuICAgKiBjYW4gbWFwIHRoYXQgcGVyY2VudGFnZSB0byBhbm90aGVyIHJhbmdlLiBUaGlzIGlzIGNhbGxlZCBpbnRlcnBvbGF0aW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwOi8vcm9iZXJ0cGVubmVyLmNvbS9lYXNpbmcvfVxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdGhpcy5lYXNpbmdGbnMgPSB7XG4gICAgLy8gSGVyZSB0aGlzIGVhc2UgZnVuY3Rpb24gaXMgbGluZWFyIGFzIHRoZXJlIGlzIG9ubHkgb25lXG4gICAgLy8gbiB2YWx1ZS4gRWFjaCBlYXNlIGZ1bmN0aW9uIGNhbiBiZSBtYXBwZWQgdG8gYSBwb2x5bm9taWFsLlxuICAgIGVhc2UoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiBheCArIGIgPSBjOyB3aGVyZSB4IGlzIHRoZSBub3JtYWxpemVkIHZhbHVlXG4gICAgICByZXR1cm4gYyAqIG4gKyBiO1xuICAgIH0sXG4gICAgZWFzZUluUXVhZChjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IDF4XjIgKyAweCArIDAgPSBkO1xuICAgICAgcmV0dXJuIGMgKiAobiAqIG4pICsgYjtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWFkKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogLTF4XjIgKyAyeCArIDAgPSBkO1xuICAgICAgcmV0dXJuIGMgKiAobiAqICgyIC0gbikpICsgYjtcbiAgICB9LFxuICAgIGVhc2VJbk91dFF1YWQoYywgYiwgbikge1xuICAgICAgaWYgKChuKj0yKSA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGMvMiAqIChuKm4pICsgYjsgLy8gUG9seW5vbWlhbCBmb3IgaGFsZiB0aGUgcmFuZ2U6XG4gICAgICAgIC8vIDJ4XjIgKyAweCArIDAgPSBkO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC1jLzIgKiAoKC0tbikqKG4tMikgLSAxKSArIGI7IC8vIFBvbHlub21pYWwgZm9yIHRoZSB0aGUgdXBwZXJcbiAgICAgIC8vIGhhbGYgb2YgdGhlIHJhbmdlOiAtMnheMiArIDR4IC0gMVxuICAgIH0sXG4gIH07XG5cbiAgdGhpcy5fY2xvY2sub24oXCJ0aWNrXCIsIHRoaXMudXBkYXRlVHdlZW5zLCB0aGlzKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHVwZGF0ZVR3ZWVuc1xuICogXG4gKiBAcmV0dXJuIHt9XG4gKi9cbllBVC51cGRhdGVUd2VlbnMgPSBmdW5jdGlvbiB1cGRhdGVUZWVucygpIHtcbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodHdlZW4pID0+IHtcbiAgICBpZiAodHdlZW4udGlja2VyLm5lZWRzVXBkYXRlKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW4udGlja2VyLmRvbmUpIHtcbiAgICAgIHR3ZWVuLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0d2Vlbi50aWNrZXIuc3RvcHBlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIHR3ZWVuIGlzIHN0b3BwZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5ZQVQuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz17fSkge1xuICBjb25zdCBZQVRJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoWUFUKTtcbiAgY29uc3QgX29wdHMgPSBPYmplY3QuYXNzaWduKGNsb25lKERFRkFVTFRTKSwgb3B0cyk7XG4gIGNvbnN0IHtkdXJhdGlvbiwgb2JqLCBwcm9wcywgZWFzaW5nLCBpZH0gPSBfb3B0cztcblxuICBpZiAoIVlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZWFzaW5nIGZ1bmN0aW9uICR7ZWFzaW5nfSBkb2VzIG5vdCBleGlzdHNgKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIGlmICh0aGlzLnR3ZWVucy5zb21lKCh4KSA9PiB4LmlkID09PSBpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHR3ZWVuIHdpdGggaWQ6ICR7aWR9IGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIFlBVEluc3RhbmNlLmlkID0gaWQ7XG4gIH0gZWxzZSB7XG4gICAgWUFUSW5zdGFuY2UuaWQgPSB0aGlzLnR3ZWVucy5sZW5ndGggKyAxO1xuICB9XG5cbiAgWUFUSW5zdGFuY2Uuc3RhdGUgPSBjbG9uZShvYmopO1xuICBZQVRJbnN0YW5jZS5vYmogPSBvYmo7XG4gIFlBVEluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIFlBVEluc3RhbmNlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIFlBVEluc3RhbmNlLmVhc2luZyA9IFlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddO1xuICBZQVRJbnN0YW5jZS50aWNrZXIgPSB0aGlzLl9jbG9jay5jcmVhdGVTbGF2ZSh7XG4gICAgaWQ6IFlBVEluc3RhbmNlLmlkLFxuICAgIGR1cmF0aW9uOiBZQVRJbnN0YW5jZS5kdXJhdGlvbixcbiAgfSk7XG5cbiAgdGhpcy50d2VlbnMucHVzaChZQVRJbnN0YW5jZSk7XG4gIHJldHVybiBZQVRJbnN0YW5jZTtcbn07XG5cbllBVC5nZXQgPSBmdW5jdGlvbihpZCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFlBVFswXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2Vlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLnR3ZWVuW2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudHdlZW5baV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuWUFULnJld2luZCA9IGZ1bmN0aW9uKGlkPXRoaXMuaWQpIHtcbiAgY29uc3QgdHdlZW4gPSB0aGlzLmdldChpZCk7XG5cbiAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICB0d2Vlbi5zdG9wKCk7XG4gIH1cblxuICAvLyBGaWd1cmUgb3V0IGEgd2F5IHRvIGNhY2hlIHRoZSBvbGQgcHJvcHMgLy9cbiAgdGhpcy5vcHRzLm9iaiA9IHRoaXMub3B0cy5wcm9wcztcbiAgdGhpcy5vcHRzLnByb3BzID0gdGhpcy5vcHRzLnByb3BzQmVmb3JlVHdlZW47XG5cbiAgdHdlZW4uc3RhcnQoKTtcbn07XG5cbllBVC5zdGFydEFsbCA9IGZ1bmN0aW9uIHN0YXJ0QWxsKCkge1xuICBpZiAoIXRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RhcnRcIik7XG4gIH1cblxuICB0aGlzLnR3ZWVucy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgdC50aWNrZXIuc3RhcnQoKTtcbiAgICB0Lm5vcm1hbGl6ZXIgPSBiaW5kTm9ybWFsaXplKDAsIHQudGlja2VyLmR1cmF0aW9uLm1zLCB1dGlscy5ub3JtYWxpemUpO1xuICB9KTtcblxuICB0aGlzLl9jbG9jay5zdGFydCgpO1xufTtcblxuLyoqXG4gKiBkZWxheSAtIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb25cbiAqIEBwYXJhbSAge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZHVyYXRpb24pIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGlja2VyLnN0YXJ0KCksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBzdG9wcyB0aGUgdGlja2VyXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZmluaXNoIC0gZmluaXNoZXMgdGhlIHR3ZWVuIGFuaW1hdGlvblxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5fY2xvY2sucmVtb3ZlU2xhdmUodGhpcy50aWNrZXIuaWQpO1xuICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5ZQVQucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGlkPXRoaXMuaWQpIHtcbiAgdGhpcy50d2VlbnMgPSB0aGlzLnR3ZWVuLmZpbHRlcigodCkgPT4ge1xuICAgIGlmICh0LmlkID09PSBpZCkge1xuICAgICAgdGhpcy5fY2xvY2sucmVtb3ZlU2xhdmUodC50aWNrZXIuaWQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbn07XG5cbllBVC51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUodGlja2VyKSB7XG4gIGNvbnN0IHt0aW1lU2luY2VTdGFydDogZGVsdGF9ID0gdGlja2VyO1xuICBjb25zdCBub3JtID0gdGhpcy5ub3JtYWxpemVyKGRlbHRhKTtcblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmopIHtcbiAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRoaXMub2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB0aGlzLmVhc2luZyh0aGlzLnByb3BzW2tleV0sIHRoaXMub2JqW2tleV0sIG5vcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBiaW5kTm9ybWFsaXplIC0gVG8gYmluZCBub3JtYWxpemVyIHZhbHVlcy5cbiAqIEBwYXJhbSAge051bWJlcn0gYVxuICogQHBhcmFtICB7TnVtYmVyfSBiXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gbm9ybWFsaXplXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gYmluZE5vcm1hbGl6ZShhLCBiLCBub3JtYWxpemUpIHtcbiAgcmV0dXJuIChkZWx0YSkgPT4gbm9ybWFsaXplKGRlbHRhLCBhLCBiKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBZQVQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9cbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5cbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90d2Vlbi5qcyIsIi8qKlxuICogRXZlbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAaW1wbGVtZW50cyB7dXRpbHN9XG4gKi9cbmNvbnN0IEV2ZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBpbml0XG4gKiBAbWVtYmVyT2YgRXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgZXZlbnQgb2JqZWN0LlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmluaXQgPSBmdW5jdGlvbiBpbml0RXZlbnQoKSB7XG4gIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBlbWl0XG4gKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGhhbmRlbGVyIHRoYXQgYXNzb2NhaXRlZCB3aXRoIHRoZSBlbWl0dGVkIGV2ZW50LlxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmVtaXQgPSBmdW5jdGlvbiBlbWl0KC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50LCAuLi5yZXN0XSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudDogUGxlYXNlIHByb3ZpZGUgdHJ1dGh5IGFyZ3VtZW50c1wiKTtcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcblxuICBpZiAodGhpcy5jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCkge1xuICAgIHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soLi4ucmVzdCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb25cbiAqIEBkZXNjcmlwdGlvbiBBdHRhY2ggYSBoYW5kbGVyIHRvIGFuIGV2ZW50LlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge09iamVjdH0gICBjb250ZXh0XG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgaWYgKCFldmVudCB8fCAhZm4pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICBpZiAoY29udGV4dCkge1xuICAgIGZuID0gZm4uYmluZChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50LnNwbGl0KFwiIFwiKTtcblxuICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGV2ZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgdGhpcy5jYWxsYmFja3NbZV0gPSB0aGlzLmNhbGxiYWNrc1tlXSB8fCBbXTtcblxuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZV0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERvbnQgY3JlYXRlIGR1cGxpY2F0ZXMgb2YgdGhlIHNhbWUgaGFuZGVsZWQgZnVuY3Rpb24uXG4gICAgLy8gSWYgeW91IHdhbnQgeW91ciBmdW5jdGlvbiBydW4gdHdpY2Ugd3JhcCBpdCBpbiBhIGZ1bmN0aW9uLlxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1tlXS5ldmVyeSgoY2IsIGksIGNvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNiICE9PSBmbjtcbiAgICB9KSA/IHRoaXMuY2FsbGJhY2tzW2VdLnB1c2goZm4pIDpcbiAgICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IFRoYXQgZnVuY3Rpb24gJHtmbn0gaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZCBhYCArXG4gICAgICAgIFwiaGFuZGxlciBmb3IgdGhpcyBldmVudC5cIik7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBvZmZcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYW4gZXZlbnQgaGFuZGVsZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9mZiA9IGZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgZm5dID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIWZuKSB7XG4gICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IGNhbGxiYWNrcy5maWx0ZXIoKGNiKSA9PiBjYiAhPT0gZm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBsaXN0ZW5lcnMgLSBSZXR1cm4gYWxsIGNhbGxiYWNrcyBhdHRhY2hlZCB0byBhIGNlcnRhaW4gZXZlbnRcbiAqIEBwYXJhbSAge2FueTxBcnJheT59IGFyZ3NcbiAqIEByZXR1cm4ge2Z1bmN0aW9uW119XG4gKi9cbkV2ZW50Lmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWxsYmFja3MpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNhbGxiYWNrc1tldmVudF0pIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xufTtcblxuRXZlbnQub25jZSA9IGZ1bmN0aW9uIG9uY2UoLi4uYXJncykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgW2V2ZW50LCBmbiwgY29udGV4dF0gPSBhcmdzO1xuXG4gIGNvbnN0IHdyYXAgPSBmdW5jdGlvbiB3cmFwKCkge1xuICAgIGZuLmJpbmQoY29udGV4dCkoKTtcbiAgICBzZWxmLm9mZihldmVudCwgd3JhcCk7XG4gIH07XG5cbiAgdGhpcy5vbihldmVudCwgd3JhcCwgY29udGV4dCk7XG59O1xuXG4vLyBBbGlhc2VzIC8vXG5FdmVudC5yZW1vdmVMaXN0ZW5lciA9IEV2ZW50LnJlbW92ZUFsbExpc3RlbmVycyA9IEV2ZW50Lm9mZjtcbkV2ZW50LmZpcmUgPSBFdmVudC5lbWl0O1xuRXZlbnQuYWRkTGlzdGVuZXIgPSBFdmVudC5vbjtcbkV2ZW50LmdldCA9IEV2ZW50Lmxpc3RlbmVycztcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZXZlbnQuanMiLCJjb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpLmluaXQoKTtcbmNvbnN0IENsb2NrID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBNQVhfRlBTID0gMTAwMC82MDtcbmNvbnN0IG5vb3AgPSAoKSA9PiB7fTtcblxuLyoqXG4gKiBpbml0IC0gSW5pdGFsaXplcyB0aGUgY2xvY2sgd2l0aCBjb3JyZWN0IHByb3BlcnRpZXMuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdHNcbiAqIEBwYXJhbSAge051bWJlcn0gb3B0cy5mcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5pbml0ID0gZnVuY3Rpb24gaW5pdENsb2NrKG9wdHM9e30pIHtcbiAgb3B0cyA9IE9iamVjdC5hc3NpZ24oe1xuICAgIGZwczogTUFYX0ZQUyxcbiAgICByZW5kZXJlcjogbm9vcCxcbiAgfSwgb3B0cyk7XG5cbiAgY29uc29sZS5sb2cob3B0cyk7XG5cbiAgdGhpcy5zbGF2ZXMgPSBbXTtcbiAgdGhpcy5wYXJlbnQgPSBldmVudDtcblxuICAvLyBaZXJvIGJhc2VkIGZyYW1lIGNvdW50LlxuICB0aGlzLmluZGV4ID0gLTE7XG5cbiAgLy8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgYW5pbWF0aW9uIGZyYW1lIHNvIHdlIGNhbiBjYW5jZWwgaXRcbiAgdGhpcy5yQUYgPSAwO1xuXG4gIC8vIFRpbWUgcHJvcGVydGllc1xuICB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5sYXN0VGltZTtcbiAgdGhpcy5zdG9wVGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMucmVuZGVyZXIgPSBvcHRzLnJlbmRlcmVyO1xuXG4gIC8vIFRoZSBtYXhpbXVtIEZQUyB0aGUgYnJvd3NlciBjYW4gZGVsaXZlciBpcyA2MC5cbiAgdGhpcy5mcHMgPSBvcHRzLmZwcyA+IE1BWF9GUFMgP1xuICAgIE1BWF9GUFMgOlxuICAgIChvcHRzLmZwcyB8fCBNQVhfRlBTKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RhcnQgLSBTdGFydHMgdGhlIGNsb2NrIHdpdGggc3RhcnRpbmcgdGltZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7TnVtYmVyfSBmcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KGZwcz02MCkge1xuICBpZiAoZnBzID4gNjApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIHRvbyBoaWdoXCIpO1xuICB9XG5cbiAgaWYgKCtmcHMgPT09IE5hTikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgbm90IHZhbGlkXCIpO1xuICB9XG5cbiAgdGhpcy5mcHMgPSAxMDAwIC8gZnBzO1xuICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG5cbiAgLy8gU3RhcnQgdGlja2luZ1xuICB0aGlzLmxvb3AodGhpcy5zdGFydFRpbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogdGlja1xuICogQHBhcmFtICB7TnVtYmVyfSBuZXdUaW1lIEEgdmFsdWUgaW4gbXMgdGhhdCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCB0aW1lLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmxvb3AgPSBmdW5jdGlvbiBsb29wKG5ld1RpbWUpIHtcbiAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTtcblxuICBsZXQgZGVsdGEgPSBuZXdUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IG5ld1RpbWUgLSB0aGlzLnN0YXJ0VGltZTtcblxuICB0aGlzLnJlbmRlcmVyKCk7XG5cbiAgaWYgKGRlbHRhID4gdGhpcy5mcHMpIHtcbiAgICB0aGlzLmluZGV4Kys7XG4gICAgdGhpcy53aGlwU2xhdmVzKHtcbiAgICAgIG5ld1RpbWUsXG4gICAgICBkZWx0YSxcbiAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgbGFzdFRpbWU6IHRoaXMubGFzdFRpbWUsXG4gICAgICBjbG9ja1N0YXJ0OiB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRpbWVTaW5jZVN0YXJ0OiB0aGlzLnRpbWVTaW5jZVN0YXJ0LFxuICAgIH0pO1xuICAgIHRoaXMubGFzdFRpbWUgPSBuZXdUaW1lIC0gKGRlbHRhICUgdGhpcy5mcHMpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBTdG9wIHRoZSBjbG9jayBhbmQgY2FsbCB0aGUgbGFzdCB0aWNrIGlmIG5lZWRlZC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdG9wID0gZnVuY3Rpb24gc3RvcENsb2NrKCkge1xuICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJBRik7XG5cbiAgLy8gUmVjb3JkIHdoZW4gd2Ugc3RvcHBlZC5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ICs9IHRoaXMuc3RvcFRpbWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgdGhpcy5jbGVhclNsYXZlcygpO1xuXG4gIHRoaXMuZW1pdChcInN0b3BwZWRcIik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB3aGlwU2xhdmVzIC0gUnVuIGFsbCBzbGF2ZXMgaW4gc2VxdWVuY2UgYW5kIHBhc3MgaW5cbiAqIHRoZSBnaXZlbiBzdGF0ZSBvZiB0aGUgY2xvY2suXG4gKiBAcGFyYW0gIHtPYmplY3R9IHN0YXRlXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2sud2hpcFNsYXZlcyA9IGZ1bmN0aW9uIHdoaXBTbGF2ZXMoc3RhdGUpIHtcbiAgaWYgKCF0aGlzLnNsYXZlcy5sZW5ndGgpIHJldHVybjtcblxuICB0aGlzLnNsYXZlcy5mb3JFYWNoKChzbGF2ZSwgaW5kZXgpID0+IHtcbiAgICBpZiAoc2xhdmUuZG9uZSkge1xuICAgICAgdGhpcy5yZW1vdmVTbGF2ZShzbGF2ZS5pZCk7XG4gICAgfVxuXG4gICAgaWYgKHNsYXZlLm5lZWRzVXBkYXRlKSB7XG4gICAgICAvLyBDYW4gaSBzZXQgYSB0aW1lb3V0IGhlcmUgYW5kIGhhdmUgdGhlIG51ZGdlcyBydW4gYXN5bmM/XG4gICAgICAvLyBHaXZlIGl0IGEgc2hvb3QuXG4gICAgICBzbGF2ZS5udWRnZShzdGF0ZSk7XG4gICAgfVxuICB9KTtcblxuICB0aGlzLmVtaXQoXCJ0aWNrXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkNsb2NrLmNyZWF0ZVNsYXZlID0gZnVuY3Rpb24gY3JlYXRlU2xhdmUob3B0cykge1xuICBpZiAoIW9wdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIG9wdGlvbnMgb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3Qge2lkLCBkdXJhdGlvbn0gPSBvcHRzO1xuICBjb25zdCB0aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBzbGF2ZSA9IE9iamVjdC5jcmVhdGUodGlja2VyKVxuICAgIC5pbml0KHt0aW1lU3RhbXAsIGlkLCBkdXJhdGlvbn0pO1xuXG4gIGlmIChpZCkge1xuICAgIHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICAgIHJldHVybiBzbGF2ZTtcbiAgfVxuXG4gIHNsYXZlLmlkID0gdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gIHJldHVybiBzbGF2ZTtcbn07XG5cbkNsb2NrLnJlbW92ZVNsYXZlID0gZnVuY3Rpb24gcmVtb3ZlU2xhdmUoaWQpIHtcbiAgdGhpcy5zbGF2ZXMgPSB0aGlzLnNsYXZlcy5maWx0ZXIoKHNsYXZlKSA9PiB7XG4gICAgaWYgKHNsYXZlLmlkICE9PSBpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNsYXZlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5DbG9jay5jbGVhclNsYXZlcyA9IGZ1bmN0aW9uIGNsZWFyU2xhdmVzKCkge1xuICBpZiAodGhpcy5zbGF2ZXMubGVuZ3RoKSB0aGlzLnNsYXZlcyA9IFtdO1xufTtcblxuQ2xvY2sucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgdGhpcy5yQUYgPSAwO1xufTtcblxuQ2xvY2sucmVtb3ZlQWxsU2xhdmVzID0gQ2xvY2suY2xlYXJTbGF2ZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy50aW1lU2luY2VTdGFydCAtIHRoaXMuZHVyYXRpb24ubXMgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0ge1xuICAgIHR5cGU6IFwiZnJhbWVzXCIsXG4gICAgdmFsdWU6IG5ld0R1cmF0aW9uLFxuICAgIG1zOiBuZXdEdXJhdGlvbixcbiAgfTtcblxuICB0aGlzLnN0b3BUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG59O1xuXG5UaWNrZXIubnVkZ2UgPSBmdW5jdGlvbiBudWRnZShzdGF0ZSkge1xuICBpZiAoIXN0YXRlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBzdGF0ZSBvYmplY3RcIik7XG4gIH1cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==