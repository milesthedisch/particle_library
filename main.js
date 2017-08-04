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
	Utils.isObject = function isObject(data) {
	  return (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]";
	};
	
	/**
	 * unique return an array with no duplicate values
	 * @param  {Array} array
	 * @return {Array}
	 */
	Utils.unique = function unique(array) {
	  return array.reduce(function (x, y) {
	    if (x.indexOf(y) === -1) x.push(y);
	    return x;
	  }, []);
	};
	
	
	Utils.colorInterpolation = function colorInterpolation(float, colorFrom, colorTo) {
	  var r1 = colorFrom.r1,
	      g1 = colorFrom.g1,
	      b1 = colorFrom.b1;
	  var r2 = colorTo.r2,
	      g2 = colorTo.g2,
	      b2 = colorTo.b2;
	
	
	  r = r1 + (r2 - r1) / float;
	  g = g1 + (g2 - g1) / float;
	  b = b1 + (b2 - b1) / float;
	
	  return "someHex";
	};
	
	Utils.perspective = function perspective(focalLength, distance) {
	  return focalLength / (focalLength - distance);
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
	      var _ref = _step.value;
	      var px = _ref.x;
	      var py = _ref.y;
	
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
	
	  this._clock = opts.clock.init({
	    fps: opts.fps || 60
	  });
	
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
	 * updateTweens - Updates all the tween instances.
	 */
	YAT.updateTweens = function updateTeens() {
	  this.tweens.forEach(function (tween) {
	    if (tween.ticker.needsUpdate) {
	      tween.update(tween.ticker);
	    }
	
	    if (!tween.ticker.needsUpdate && tween.ticker.STATE === "DONE") {
	      tween.update(tween.ticker);
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
	  });
	
	  this._clock.start();
	};
	
	/**
	 * stopAll - Stops all tweens
	 */
	YAT.stopAll = function stopAll() {
	  if (this.tweens.length) {
	    throw new Error("There are no tweens to stop");
	  }
	
	  this._clock.stop();
	};
	
	/**
	 * delay - how long to delay the animation
	 * @param  {number} duration
	 * @return {YAT}
	 */
	YAT.delay = function delay(duration) {
	  var _this = this;
	
	  this.ticker.stop();
	  this.obj = clone(this.state);
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
	
	  this.tweens = this.tweens.filter(function (t) {
	    if (t.id === id) {
	      _this2._clock.removeSlave(t.ticker.id);
	      return false;
	    }
	
	    return true;
	  });
	};
	
	YAT.update = function update(ticker) {
	  if (!ticker.needsUpdate) {
	    this.state = Object.assign({}, this.props);
	    return this.state;
	  }
	
	  var delta = ticker.timeSinceStart,
	      duration = ticker.duration;
	
	  var norm = utils.normalize(delta, 0, duration.ms);
	
	  for (var key in this.obj) {
	    if (this.obj.hasOwnProperty(key)) {
	      if (this.obj[key] !== undefined && this.props[key] !== undefined) {
	        this.state[key] = this.easing(this.props[key] - this.obj[key], this.obj[key], norm);
	      }
	    }
	  }
	
	  return this.state;
	};
	
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
	var MAX_FPS = 60;
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
	    fps: MAX_FPS
	  }, opts);
	
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
	  if (this.fps > 60) {
	    throw new Error("The given fps is too high");
	  }
	
	  if (+this.fps === NaN) {
	    throw new Error("The given fps is not valid");
	  }
	
	  this.fps = 1000 / this.fps;
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
	
	  this.emit("render");
	
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
	  if (!this.slaves.length) return;
	
	  this.slaves.forEach(function (slave, index) {
	    slave.nudge(state);
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
	  var newDuration = this.duration.ms - this.timeSinceStart || 0;
	
	  this.duration = this.tickFor(newDuration, "milliseconds");
	  this.timeSinceStart = 0;
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMWM5NzVhZTZjNjAyOGU3ODRmYiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90aWNrZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwicmVxdWlyZSIsIlBhcnRpY2xlIiwiVXRpbHMiLCJTaGFwZXMiLCJZQVQiLCJDbG9jayIsIlRpY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1dGlscyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwicHJvdG90eXBlIiwiY3JlYXRlIiwidmVjIiwic2V0IiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwiZ2V0Iiwic2V0QW5nbGUiLCJyYWQiLCJsZW5ndGgiLCJnZXRMZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2V0TGVuZ3RoIiwiZ2V0QW5nbGUiLCJoeXBvdCIsImF0YW4yIiwiYWRkIiwidjIiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmVjcyIsIm1hcCIsInYiLCJyZWR1Y2UiLCJ2MCIsInZuIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImRpdmlkZSIsImFkZFRvIiwic3VidHJhY3RGcm9tIiwibXVsdGlwbHlCeSIsImRpdmlkZUJ5Iiwicm90YXRlIiwiZGVsdGEiLCJyYW5kb20iLCJyVmVjdG9yIiwibWluIiwibWF4IiwibGVycCIsInJhbmRvbUJldHdlZW4iLCJyQmV0d2VlbiIsInhNaW4iLCJ4TWF4IiwieU1pbiIsInlNYXgiLCJPYmplY3QiLCJub3JtYWxpemUiLCJ2YWx1ZSIsInNyY01pbiIsInNyY01heCIsImRlc3RNaW4iLCJkZXN0TWF4IiwicGVyY2VudCIsImNsYW1wIiwiZmxvb3IiLCJkaXN0YW5jZVhZIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeCIsImR5IiwiZGlzdGFuY2VWZWMiLCJ2MSIsImRWZWMiLCJpblJhbmdlIiwicmFuZ2VJbnRlcnNlY3QiLCJtaW4wIiwibWF4MCIsIm1pbjEiLCJtYXgxIiwidmVjdG9ySW50ZXJzZWN0IiwidmVjMCIsInZlYzEiLCJjb2xsaXNpb25SZWN0IiwicjAiLCJyMSIsInIweCIsInIweSIsInIxeCIsInIxeSIsInIwdyIsIndpZHRoIiwicjBoIiwiaGVpZ2h0IiwicjF3IiwicjFoIiwiY29sbGlzaW9uQ2lyY2xlIiwiYzEiLCJjMiIsInJhZGkiLCJyYWRpdXMiLCJkaXN0YW5jZSIsImNvbGxpc2lvbkNpcmNsZVBvaW50IiwiY2lyY2xlIiwiZGlzdCIsImNvbGxpc2lvbkNpcmNsZVZlYyIsImNvbGxpc2lvblJlY3RQb2ludCIsInJlY3QiLCJyZWN0WCIsInJlY3RZIiwiY29sbGlzaW9uUmVjdFZlYyIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJEYXRlIiwibm93IiwiYXBwbHkiLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiLCJFcnJvciIsImFuZ2xlIiwiZGVnVG9SYWQiLCJkZWciLCJQSSIsInJhZFRvRGVnIiwicm91bmRUb1BsYWNlcyIsInBsYWNlcyIsIm11bHQiLCJwb3ciLCJyb3VuZCIsInJvdW5kVG9NdWx0aXBsZSIsIm5lYXJlc3QiLCJTdHJpbmciLCJxdWFkcmF0aWNCZXppZXIiLCJ0IiwiY3ViaWNCZXppZXIiLCJ2MyIsInF1YWRyYXRpY0JlemllclBvaW50IiwicDAiLCJwMSIsInAyIiwiY3ViaWNCZXppZXJQb2ludCIsInAzIiwibXVsdGlDdXJ2ZSIsInBvaW50cyIsImN0eCIsIm1pZFgiLCJtaWRZIiwibW92ZVRvIiwiaSIsInF1YWRyYXRpY0N1cnZlVG8iLCJlYXNlIiwiYSIsImIiLCJhYnMiLCJlYXNlVG8iLCJvcmlnaW4iLCJ0YXJnZXQiLCJ0aHJlc2hvbGQiLCJpc09iamVjdCIsImRhdGEiLCJ0b1N0cmluZyIsImNhbGwiLCJ1bmlxdWUiLCJhcnJheSIsImluZGV4T2YiLCJwdXNoIiwiY29sb3JJbnRlcnBvbGF0aW9uIiwiZmxvYXQiLCJjb2xvckZyb20iLCJjb2xvclRvIiwiZzEiLCJiMSIsInIyIiwiZzIiLCJiMiIsInIiLCJnIiwicGVyc3BlY3RpdmUiLCJmb2NhbExlbmd0aCIsImV4dGVuZCIsImNsb25lIiwidngiLCJ2eSIsImdyYXZpdHkiLCJtYWduaXR1ZGUiLCJtYXNzIiwiZGlyZWN0aW9uIiwiZnJpY3Rpb24iLCJzcHJpbmdzIiwibWFzc2VzIiwib3B0cyIsInBhcnRpY2xlIiwic2V0U3BlZWQiLCJzZXRIZWFkaW5nIiwiYWNjZWxlcmF0ZSIsImF4IiwiYXkiLCJ1cGRhdGUiLCJmcmljIiwiZ3JhdiIsImhhbmRsZVNwcmluZ3MiLCJoYW5kbGVNYXNzZXMiLCJ1cGRhdGVQb3MiLCJzcGVlZCIsImdldEhlYWRpbmciLCJnZXRTcGVlZCIsImFkZFNwcmluZyIsInNwcmluZyIsInJlbW92ZVNwcmluZyIsInAiLCJwb2ludCIsInNwbGljZSIsImFuZ2xlVG8iLCJhbmdlbFRvIiwiZGlzdGFuY2VUbyIsImFkZE1hc3MiLCJyZW1vdmVNYXNzIiwiZ3Jhdml0YXRlVG8iLCJkaXN0U1EiLCJzcXJ0IiwiZm9yY2UiLCJnZW5lcmF0b3IiLCJnZW4iLCJudW0iLCJjYWxsYmFjayIsImZyZWV6ZSIsInBhcnRpY2xlcyIsImNvbnNvbGUiLCJsb2ciLCJuZXdQYXJ0aWNsZSIsInVuZGVmaW5lZCIsInNwcmluZ0Zyb21UbyIsIm9mZnNldCIsInNwcmluZ0ZvcmNlIiwic3giLCJzeSIsInNwcmluZ1RvUG9pbnQiLCJkb2N1bWVudCIsIndpbmRvdyIsImRyYXdDaXJjbGUiLCJjb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJkcmF3UmVjdCIsInciLCJoIiwiZmlsbFJlY3QiLCJwQ2lyY2xlIiwicGFydGljbGVDaXJjbGUiLCJwUmVjdCIsInBhcnRpY2xlUmVjdCIsImRyYXdMaW5lWFkiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhd0xpbmVWZWMiLCJkcmF3TGluZVBvaW50cyIsImZpcnN0UG9pbnQiLCJ4cyIsInB4IiwicHkiLCJncmlkIiwiZ3JpZFNpemUiLCJldmVudCIsIkRFRkFVTFRTIiwib2JqIiwicHJvcHMiLCJlYXNpbmciLCJkdXJhdGlvbiIsImV2ZW50SW5zdGFuY2UiLCJpbml0IiwiaW5pdFR3ZWVuIiwiY2xvY2siLCJfY2xvY2siLCJmcHMiLCJwYXJlbnQiLCJ0d2VlbnMiLCJlYXNpbmdGbnMiLCJjIiwibiIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJvbiIsInVwZGF0ZVR3ZWVucyIsInVwZGF0ZVRlZW5zIiwiZm9yRWFjaCIsInR3ZWVuIiwidGlja2VyIiwibmVlZHNVcGRhdGUiLCJTVEFURSIsInJlbW92ZSIsInN0b3BwZWQiLCJZQVRJbnN0YW5jZSIsIl9vcHRzIiwiYXNzaWduIiwiaWQiLCJzb21lIiwiY3JlYXRlU2xhdmUiLCJyZXdpbmQiLCJzdG9wIiwicHJvcHNCZWZvcmVUd2VlbiIsInN0YXJ0Iiwic3RhcnRBbGwiLCJzdG9wQWxsIiwiZGVsYXkiLCJmaW5pc2giLCJyZW1vdmVTbGF2ZSIsImZpbHRlciIsInRpbWVTaW5jZVN0YXJ0Iiwibm9ybSIsIm1zIiwia2V5IiwiRXZlbnQiLCJpbml0RXZlbnQiLCJjYWxsYmFja3MiLCJlbWl0IiwicmVzdCIsIlR5cGVFcnJvciIsImZuIiwiYmluZCIsImV2ZW50cyIsInNwbGl0IiwiZSIsImV2ZXJ5IiwiY2IiLCJjb2wiLCJ3YXJuIiwib2ZmIiwibGlzdGVuZXJzIiwia2V5cyIsIm9uY2UiLCJ3cmFwIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJmaXJlIiwiYWRkTGlzdGVuZXIiLCJNQVhfRlBTIiwibm9vcCIsImluaXRDbG9jayIsInNsYXZlcyIsImluZGV4IiwickFGIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJzdG9wVGltZSIsIk5hTiIsInBlcmZvcm1hbmNlIiwibG9vcCIsIm5ld1RpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aGlwU2xhdmVzIiwiY2xvY2tTdGFydCIsInN0b3BDbG9jayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJTbGF2ZXMiLCJzbGF2ZSIsIm51ZGdlIiwidGltZVN0YW1wIiwicmVzZXQiLCJyZW1vdmVBbGxTbGF2ZXMiLCJTVE9QUEVEIiwiUlVOTklORyIsIkRPTkUiLCJpbnRlcnZhbCIsInRpY2tGb3IiLCJ0aW1lU2luY2VTdGFydDIiLCJzdHJpbmciLCJ0eXBlIiwibmV3RHVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUNBLEtBQU1DLFdBQVcsbUJBQUFELENBQVEsQ0FBUixDQUFqQjtBQUNBLEtBQU1FLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsS0FBTUcsU0FBUyxtQkFBQUgsQ0FBUSxHQUFSLENBQWY7QUFDQSxLQUFNSSxNQUFNLG1CQUFBSixDQUFRLEdBQVIsQ0FBWjtBQUNBLEtBQU1LLFFBQVEsbUJBQUFMLENBQVEsR0FBUixDQUFkO0FBQ0EsS0FBTU0sU0FBUyxtQkFBQU4sQ0FBUSxHQUFSLENBQWY7O0FBRUFPLFFBQU9DLE9BQVAsR0FBaUI7QUFDZlQsaUJBRGU7QUFFZkUscUJBRmU7QUFHZkMsZUFIZTtBQUlmQyxpQkFKZTtBQUtmQyxXQUxlO0FBTWZFLGlCQU5lO0FBT2ZEO0FBUGUsRUFBakIsQzs7Ozs7Ozs7QUNSQTs7QUFFQSxLQUFNSSxRQUFRLG1CQUFBVCxDQUFRLENBQVIsQ0FBZDs7QUFFQSxLQUFNVSxnQkFBZ0I7QUFDcEJDLE1BQUcsQ0FEaUI7QUFFcEJDLE1BQUc7QUFGaUIsRUFBdEI7O0FBS0E7Ozs7QUFJQSxVQUFTYixNQUFULEdBQXFDO0FBQUEsT0FBckJjLEtBQXFCLHVFQUFmSCxhQUFlOztBQUNuQyxRQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7OztBQU9BZCxRQUFPZSxTQUFQLENBQWlCQyxNQUFqQixHQUEwQixTQUFTQSxNQUFULEdBQTBCO0FBQUEsT0FBVkosQ0FBVSx1RUFBUixDQUFRO0FBQUEsT0FBTEMsQ0FBSyx1RUFBSCxDQUFHOztBQUNsRCxPQUFNSSxNQUFNLElBQUlqQixNQUFKLENBQVcsRUFBQ1ksSUFBRCxFQUFJQyxJQUFKLEVBQVgsQ0FBWjtBQUNBLFVBQU9JLEdBQVA7QUFDRCxFQUhEOztBQUtBOzs7Ozs7O0FBT0FqQixRQUFPZSxTQUFQLENBQWlCRyxHQUFqQixHQUF1QixTQUFTQSxHQUFULENBQWFDLElBQWIsRUFBbUJDLEdBQW5CLEVBQXdCO0FBQzdDO0FBQ0E7O0FBRUEsT0FBSSxLQUFLTixLQUFMLENBQVdPLGNBQVgsQ0FBMEJGLElBQTFCLENBQUosRUFBcUM7QUFDbkMsVUFBS0wsS0FBTCxDQUFXSyxJQUFYLElBQW1CQyxHQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNEOztBQUVELFVBQU8sS0FBUDtBQUNELEVBVkQ7O0FBWUE7Ozs7OztBQU1BcEIsUUFBT2UsU0FBUCxDQUFpQk8sR0FBakIsR0FBdUIsU0FBU0EsR0FBVCxDQUFhSCxJQUFiLEVBQW1CO0FBQ3hDLFVBQU8sS0FBS0wsS0FBTCxDQUFXSyxJQUFYLENBQVA7QUFDRCxFQUZEOztBQUlBOzs7OztBQUtBbkIsUUFBT2UsU0FBUCxDQUFpQlEsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDakQ7QUFDQTs7QUFFQSxPQUFNQyxTQUFTLEtBQUtDLFNBQUwsRUFBZjs7QUFFQSxRQUFLUixHQUFMLENBQVMsR0FBVCxFQUFjUyxLQUFLQyxHQUFMLENBQVNKLEdBQVQsSUFBZ0JDLE1BQTlCO0FBQ0EsUUFBS1AsR0FBTCxDQUFTLEdBQVQsRUFBY1MsS0FBS0UsR0FBTCxDQUFTTCxHQUFULElBQWdCQyxNQUE5QjtBQUNELEVBUkQ7O0FBVUE7Ozs7O0FBS0F6QixRQUFPZSxTQUFQLENBQWlCZSxTQUFqQixHQUE2QixTQUFTQSxTQUFULENBQW1CTCxNQUFuQixFQUEyQjtBQUN0RDtBQUNBOztBQUVBLE9BQU1ELE1BQU0sS0FBS08sUUFBTCxFQUFaOztBQUVBLFFBQUtiLEdBQUwsQ0FBUyxHQUFULEVBQWNTLEtBQUtDLEdBQUwsQ0FBU0osR0FBVCxJQUFnQkMsTUFBOUI7QUFDQSxRQUFLUCxHQUFMLENBQVMsR0FBVCxFQUFjUyxLQUFLRSxHQUFMLENBQVNMLEdBQVQsSUFBZ0JDLE1BQTlCO0FBQ0QsRUFSRDs7QUFVQTs7Ozs7QUFLQXpCLFFBQU9lLFNBQVAsQ0FBaUJXLFNBQWpCLEdBQTZCLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEQsT0FBTWQsSUFBSSxLQUFLVSxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsT0FBTVQsSUFBSSxLQUFLUyxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsVUFBT0ssS0FBS0ssS0FBTCxDQUFXcEIsQ0FBWCxFQUFjQyxDQUFkLENBQVA7QUFDRCxFQUpEOztBQU1BOzs7OztBQUtBYixRQUFPZSxTQUFQLENBQWlCZ0IsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxHQUFvQjtBQUM5QyxPQUFNbkIsSUFBSSxLQUFLVSxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsT0FBTVQsSUFBSSxLQUFLUyxHQUFMLENBQVMsR0FBVCxDQUFWO0FBQ0EsVUFBT0ssS0FBS00sS0FBTCxDQUFXcEIsQ0FBWCxFQUFjRCxDQUFkLENBQVA7QUFDRCxFQUpEOztBQU1BOzs7Ozs7O0FBT0FaLFFBQU9lLFNBQVAsQ0FBaUJtQixHQUFqQixHQUF1QixTQUFTQSxHQUFULENBQWFDLEVBQWIsRUFBaUI7QUFDdEMsT0FBTUMsT0FBTyxJQUFiOztBQUVBLE9BQUlELEdBQUdFLFdBQUgsQ0FBZUMsSUFBZixLQUF3QixPQUF4QixJQUFtQ0gsR0FBR1YsTUFBMUMsRUFBa0Q7QUFDaEQ7QUFDQSxTQUFNYyxPQUFPSixHQUNWSyxHQURVLENBQ04sVUFBQ0MsQ0FBRDtBQUFBLGNBQVEsRUFBQzdCLEdBQUc2QixFQUFFbkIsR0FBRixDQUFNLEdBQU4sQ0FBSixFQUFnQlQsR0FBRzRCLEVBQUVuQixHQUFGLENBQU0sR0FBTixDQUFuQixFQUFSO0FBQUEsTUFETSxFQUVWb0IsTUFGVSxDQUVILFVBQUNDLEVBQUQsRUFBS0MsRUFBTDtBQUFBLGNBQWEsRUFBQ2hDLEdBQUcrQixHQUFHL0IsQ0FBSCxHQUFPZ0MsR0FBR2hDLENBQWQsRUFBaUJDLEdBQUc4QixHQUFHOUIsQ0FBSCxHQUFPK0IsR0FBRy9CLENBQTlCLEVBQWI7QUFBQSxNQUZHLEVBRTZDdUIsS0FBS3RCLEtBRmxELENBQWI7O0FBSUEsWUFBT3NCLEtBQUtwQixNQUFMLENBQVl1QixLQUFLM0IsQ0FBakIsRUFBb0IyQixLQUFLMUIsQ0FBekIsQ0FBUDtBQUNEOztBQUVELFVBQU8sS0FBS0csTUFBTCxDQUNMb0IsS0FBS2QsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRFgsRUFFTGMsS0FBS2QsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRlgsQ0FBUDtBQUlELEVBaEJEOztBQWtCQTs7Ozs7OztBQU9BdEIsUUFBT2UsU0FBUCxDQUFpQjhCLFFBQWpCLEdBQTRCLFNBQVNBLFFBQVQsQ0FBa0JWLEVBQWxCLEVBQXNCO0FBQ2hELE9BQU1DLE9BQU8sSUFBYjs7QUFFQSxPQUFJRCxHQUFHRSxXQUFILENBQWVDLElBQWYsS0FBd0IsT0FBeEIsSUFBbUNILEdBQUdWLE1BQTFDLEVBQWtEO0FBQ2hEO0FBQ0EsU0FBTWMsT0FBT0osR0FBR0ssR0FBSCxDQUFPLFVBQUNDLENBQUQ7QUFBQSxjQUFRLEVBQUM3QixHQUFHNkIsRUFBRW5CLEdBQUYsQ0FBTSxHQUFOLENBQUosRUFBZ0JULEdBQUc0QixFQUFFbkIsR0FBRixDQUFNLEdBQU4sQ0FBbkIsRUFBUjtBQUFBLE1BQVAsRUFDWm9CLE1BRFksQ0FDTCxVQUFDQyxFQUFELEVBQUtDLEVBQUw7QUFBQSxjQUNMLEVBQUNoQyxHQUFHK0IsR0FBRy9CLENBQUgsR0FBT2dDLEdBQUdoQyxDQUFkLEVBQWlCQyxHQUFHOEIsR0FBRzlCLENBQUgsR0FBTytCLEdBQUcvQixDQUE5QixFQURLO0FBQUEsTUFESyxFQUdidUIsS0FBS3RCLEtBSFEsQ0FBYjs7QUFLQSxZQUFPc0IsS0FBS3BCLE1BQUwsQ0FBWXVCLEtBQUszQixDQUFqQixFQUFvQjJCLEtBQUsxQixDQUF6QixDQUFQO0FBQ0Q7O0FBRUQsVUFBTyxLQUFLRyxNQUFMLENBQ0xvQixLQUFLZCxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FEWCxFQUVMYyxLQUFLZCxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FGWCxDQUFQO0FBSUQsRUFqQkQ7O0FBbUJBOzs7Ozs7O0FBT0F0QixRQUFPZSxTQUFQLENBQWlCK0IsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxDQUFrQlgsRUFBbEIsRUFBc0I7QUFDaEQsVUFBTyxLQUFLbkIsTUFBTCxDQUNMLEtBQUtNLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQURYLEVBRUwsS0FBS0EsR0FBTCxDQUFTLEdBQVQsSUFBZ0JhLEdBQUdiLEdBQUgsQ0FBTyxHQUFQLENBRlgsQ0FBUDtBQUlELEVBTEQ7O0FBT0E7Ozs7OztBQU1BdEIsUUFBT2UsU0FBUCxDQUFpQmdDLE1BQWpCLEdBQTBCLFNBQVNBLE1BQVQsQ0FBZ0JaLEVBQWhCLEVBQW9CO0FBQzVDLFVBQU8sS0FBS25CLE1BQUwsQ0FDTCxLQUFLTSxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FEWCxFQUVMLEtBQUtBLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUZYLENBQVA7QUFJRCxFQUxEOztBQU9BOzs7Ozs7QUFNQXRCLFFBQU9lLFNBQVAsQ0FBaUJpQyxLQUFqQixHQUF5QixTQUFTQSxLQUFULENBQWViLEVBQWYsRUFBbUI7QUFDMUMsUUFBS3JCLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlLEtBQUtVLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFFBQUtSLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtTLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFVBQU8sS0FBS1IsS0FBWjtBQUNELEVBSkQ7O0FBTUE7Ozs7OztBQU1BZCxRQUFPZSxTQUFQLENBQWlCa0MsWUFBakIsR0FBZ0MsU0FBU0EsWUFBVCxDQUFzQmQsRUFBdEIsRUFBMEI7QUFDeEQsUUFBS3JCLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlLEtBQUtVLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFFBQUtSLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtTLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFVBQU8sS0FBS1IsS0FBWjtBQUNELEVBSkQ7O0FBTUE7Ozs7OztBQU1BZCxRQUFPZSxTQUFQLENBQWlCbUMsVUFBakIsR0FBOEIsU0FBU0EsVUFBVCxDQUFvQmYsRUFBcEIsRUFBd0I7QUFDcEQsUUFBS3JCLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlLEtBQUtVLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFFBQUtSLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlLEtBQUtTLEdBQUwsQ0FBUyxHQUFULElBQWdCYSxHQUFHYixHQUFILENBQU8sR0FBUCxDQUEvQjtBQUNBLFVBQU8sS0FBS1IsS0FBWjtBQUNELEVBSkQ7O0FBTUE7Ozs7OztBQU1BZCxRQUFPZSxTQUFQLENBQWlCb0MsUUFBakIsR0FBNEIsU0FBU0EsUUFBVCxDQUFrQmhCLEVBQWxCLEVBQXNCO0FBQ2hELFFBQUtyQixLQUFMLENBQVdGLENBQVgsR0FBZSxLQUFLVSxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FBL0I7QUFDQSxRQUFLUixLQUFMLENBQVdELENBQVgsR0FBZSxLQUFLUyxHQUFMLENBQVMsR0FBVCxJQUFnQmEsR0FBR2IsR0FBSCxDQUFPLEdBQVAsQ0FBL0I7QUFDQSxVQUFPLEtBQUtSLEtBQVo7QUFDRCxFQUpEOztBQU1BOzs7O0FBSUFkLFFBQU9lLFNBQVAsQ0FBaUJxQyxNQUFqQixHQUEwQixVQUFTQyxLQUFULEVBQWdCO0FBQ3hDLE9BQU16QixNQUFNRCxLQUFLQyxHQUFMLENBQVN5QixLQUFULENBQVo7QUFDQSxPQUFNeEIsTUFBTUYsS0FBS0UsR0FBTCxDQUFTd0IsS0FBVCxDQUFaOztBQUVBO0FBQ0EsT0FBTXpDLElBQUksS0FBS0UsS0FBTCxDQUFXRixDQUFYLEdBQWVnQixHQUFmLEdBQXFCLEtBQUtkLEtBQUwsQ0FBV0QsQ0FBWCxHQUFlZ0IsR0FBOUM7QUFDQSxPQUFNaEIsSUFBSSxLQUFLQyxLQUFMLENBQVdELENBQVgsR0FBZWUsR0FBZixHQUFxQixLQUFLZCxLQUFMLENBQVdGLENBQVgsR0FBZWlCLEdBQTlDOztBQUVBLFFBQUtmLEtBQUwsQ0FBV0YsQ0FBWCxHQUFlQSxDQUFmO0FBQ0EsUUFBS0UsS0FBTCxDQUFXRCxDQUFYLEdBQWVBLENBQWY7QUFDRCxFQVZEOztBQVlBOzs7Ozs7O0FBT0FiLFFBQU9lLFNBQVAsQ0FBaUJ1QyxNQUFqQixHQUEwQixTQUFTQyxPQUFULEdBQWdDO0FBQUEsT0FBZkMsR0FBZSx1RUFBWCxDQUFXO0FBQUEsT0FBUkMsR0FBUSx1RUFBSixFQUFJOztBQUN4RCxPQUFNN0MsSUFBSUYsTUFBTWdELElBQU4sQ0FBVy9CLEtBQUsyQixNQUFMLEVBQVgsRUFBMEJFLEdBQTFCLEVBQStCQyxHQUEvQixDQUFWO0FBQ0EsT0FBTTVDLElBQUlILE1BQU1nRCxJQUFOLENBQVcvQixLQUFLMkIsTUFBTCxFQUFYLEVBQTBCRSxHQUExQixFQUErQkMsR0FBL0IsQ0FBVjtBQUNBLFVBQU8sS0FBS3pDLE1BQUwsQ0FBWUosQ0FBWixFQUFlQyxDQUFmLENBQVA7QUFDRCxFQUpEOztBQU1BOzs7Ozs7Ozs7O0FBVUFiLFFBQU9lLFNBQVAsQ0FBaUI0QyxhQUFqQixHQUFpQyxTQUFTQyxRQUFULEdBQW9EO0FBQUEsT0FBbENDLElBQWtDLHVFQUE3QixDQUE2QjtBQUFBLE9BQTFCQyxJQUEwQix1RUFBckIsRUFBcUI7QUFBQSxPQUFqQkMsSUFBaUIsdUVBQVosQ0FBWTtBQUFBLE9BQVRDLElBQVMsdUVBQUosRUFBSTs7QUFDbkZGLFVBQU9uQyxLQUFLOEIsR0FBTCxDQUFTSSxJQUFULEVBQWVDLElBQWYsQ0FBUDtBQUNBRCxVQUFPbEMsS0FBSzZCLEdBQUwsQ0FBU0ssSUFBVCxFQUFlQyxJQUFmLENBQVA7QUFDQUUsVUFBT3JDLEtBQUs4QixHQUFMLENBQVNNLElBQVQsRUFBZUMsSUFBZixDQUFQO0FBQ0FELFVBQU9wQyxLQUFLNkIsR0FBTCxDQUFTTyxJQUFULEVBQWVDLElBQWYsQ0FBUDs7QUFFQSxPQUFNbkQsSUFBSUgsTUFBTWlELGFBQU4sQ0FBb0JJLElBQXBCLEVBQTBCQyxJQUExQixDQUFWO0FBQ0EsT0FBTXBELElBQUlGLE1BQU1pRCxhQUFOLENBQW9CRSxJQUFwQixFQUEwQkMsSUFBMUIsQ0FBVjs7QUFFQSxVQUFPLEtBQUs5QyxNQUFMLENBQVlKLENBQVosRUFBZUMsQ0FBZixDQUFQO0FBQ0QsRUFWRDs7QUFZQWIsUUFBT2UsU0FBUCxDQUFpQixHQUFqQixJQUF3QmYsT0FBT2UsU0FBUCxDQUFpQm1CLEdBQXpDO0FBQ0FsQyxRQUFPZSxTQUFQLENBQWlCLEdBQWpCLElBQXdCZixPQUFPZSxTQUFQLENBQWlCOEIsUUFBekM7QUFDQTdDLFFBQU9lLFNBQVAsQ0FBaUIsR0FBakIsSUFBd0JmLE9BQU9lLFNBQVAsQ0FBaUIrQixRQUF6QztBQUNBOUMsUUFBT2UsU0FBUCxDQUFpQixHQUFqQixJQUF3QmYsT0FBT2UsU0FBUCxDQUFpQmdDLE1BQXpDO0FBQ0EvQyxRQUFPZSxTQUFQLENBQWlCLElBQWpCLElBQXlCZixPQUFPZSxTQUFQLENBQWlCaUMsS0FBMUM7QUFDQWhELFFBQU9lLFNBQVAsQ0FBaUIsSUFBakIsSUFBeUJmLE9BQU9lLFNBQVAsQ0FBaUJrQyxZQUExQztBQUNBakQsUUFBT2UsU0FBUCxDQUFpQixJQUFqQixJQUF5QmYsT0FBT2UsU0FBUCxDQUFpQm1DLFVBQTFDO0FBQ0FsRCxRQUFPZSxTQUFQLENBQWlCLElBQWpCLElBQXlCZixPQUFPZSxTQUFQLENBQWlCb0MsUUFBMUM7O0FBRUEzQyxRQUFPQyxPQUFQLEdBQWlCVCxNQUFqQixDOzs7Ozs7Ozs7O0FDeFNBOztBQUVBOzs7Ozs7QUFNQTs7OztBQUlBLEtBQU1HLFFBQVE4RCxPQUFPakQsTUFBUCxDQUFjLElBQWQsQ0FBZDs7QUFFQTs7Ozs7Ozs7Ozs7O0FBWUFiLE9BQU0rRCxTQUFOLEdBQWtCLFNBQVNBLFNBQVQsQ0FBbUI5QyxHQUFuQixFQUF3Qm9DLEdBQXhCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNsRCxVQUFPLENBQUNyQyxNQUFNb0MsR0FBUCxLQUFlQyxNQUFNRCxHQUFyQixDQUFQO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7Ozs7O0FBU0FyRCxPQUFNdUQsSUFBTixHQUFhLFNBQVNBLElBQVQsQ0FBY3RDLEdBQWQsRUFBbUJvQyxHQUFuQixFQUF3QkMsR0FBeEIsRUFBNkI7QUFDeEMsVUFBTyxDQUFDQSxNQUFNRCxHQUFQLElBQWNwQyxHQUFkLEdBQW9Cb0MsR0FBM0I7QUFDRCxFQUZEOztBQUlBOzs7Ozs7Ozs7O0FBVUFyRCxPQUFNcUMsR0FBTixHQUFZLFNBQVNBLEdBQVQsQ0FBYTJCLEtBQWIsRUFBb0JDLE1BQXBCLEVBQTRCQyxNQUE1QixFQUFvQ0MsT0FBcEMsRUFBNkNDLE9BQTdDLEVBQXNEO0FBQ2hFRixZQUFTMUMsS0FBSzhCLEdBQUwsQ0FBU1ksTUFBVCxFQUFpQkQsTUFBakIsQ0FBVDtBQUNBQSxZQUFTekMsS0FBSzZCLEdBQUwsQ0FBU2EsTUFBVCxFQUFpQkQsTUFBakIsQ0FBVDtBQUNBRSxhQUFVM0MsS0FBSzZCLEdBQUwsQ0FBU2MsT0FBVCxFQUFrQkMsT0FBbEIsQ0FBVjtBQUNBQSxhQUFVNUMsS0FBSzhCLEdBQUwsQ0FBU2EsT0FBVCxFQUFrQkMsT0FBbEIsQ0FBVjtBQUNBLFVBQU8sS0FBS2IsSUFBTCxDQUFVLEtBQUtRLFNBQUwsQ0FBZUMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEJDLE1BQTlCLENBQVYsRUFBaURDLE9BQWpELEVBQTBEQyxPQUExRCxDQUFQO0FBQ0QsRUFORDs7QUFRQTs7Ozs7Ozs7QUFRQXBFLE9BQU1xRSxPQUFOLEdBQWdCLFVBQVNwRCxHQUFULEVBQWM7QUFDNUIsVUFBT0EsTUFBTSxHQUFiO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7Ozs7O0FBU0FqQixPQUFNc0UsS0FBTixHQUFjLFVBQVNOLEtBQVQsRUFBZ0JYLEdBQWhCLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN0QyxVQUFPOUIsS0FBSzZCLEdBQUwsQ0FBUzdCLEtBQUs4QixHQUFMLENBQVNVLEtBQVQsRUFBZ0J4QyxLQUFLNkIsR0FBTCxDQUFTQSxHQUFULEVBQWNDLEdBQWQsQ0FBaEIsQ0FBVCxFQUE4QzlCLEtBQUs4QixHQUFMLENBQVNELEdBQVQsRUFBY0MsR0FBZCxDQUE5QyxDQUFQO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7OztBQU9BdEQsT0FBTXdELGFBQU4sR0FBc0IsVUFBUy9DLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ25DLE9BQUkyQyxNQUFNN0IsS0FBSzZCLEdBQUwsQ0FBUzVDLENBQVQsRUFBWUMsQ0FBWixDQUFWO0FBQ0EsT0FBSTRDLE1BQU05QixLQUFLOEIsR0FBTCxDQUFTN0MsQ0FBVCxFQUFZQyxDQUFaLENBQVY7QUFDQSxVQUFPYyxLQUFLK0MsS0FBTCxDQUFXL0MsS0FBSzJCLE1BQUwsTUFBaUJHLE1BQU1ELEdBQXZCLENBQVgsSUFBMENBLEdBQWpEO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7Ozs7O0FBU0FyRCxPQUFNd0UsVUFBTixHQUFtQixVQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixFQUF5QjtBQUMxQyxPQUFNQyxLQUFLSixLQUFLRSxFQUFoQjtBQUNBLE9BQU1HLEtBQUtKLEtBQUtFLEVBQWhCO0FBQ0EsVUFBT3BELEtBQUtLLEtBQUwsQ0FBV2dELEVBQVgsRUFBZUMsRUFBZixDQUFQO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7OztBQU9BOUUsT0FBTStFLFdBQU4sR0FBb0IsVUFBU0MsRUFBVCxFQUFhaEQsRUFBYixFQUFpQjtBQUNuQyxPQUFNaUQsT0FBUUQsRUFBRCxDQUFLLEdBQUwsRUFBVWhELEVBQVYsQ0FBYjtBQUNBLFVBQU9SLEtBQUtLLEtBQUwsQ0FBV29ELEtBQUs5RCxHQUFMLENBQVMsR0FBVCxDQUFYLEVBQTBCOEQsS0FBSzlELEdBQUwsQ0FBUyxHQUFULENBQTFCLENBQVA7QUFDRCxFQUhEOztBQUtBOzs7Ozs7OztBQVFBbkIsT0FBTWtGLE9BQU4sR0FBZ0IsVUFBU2pFLEdBQVQsRUFBY29DLEdBQWQsRUFBbUJDLEdBQW5CLEVBQXdCO0FBQ3RDLFVBQVFyQyxPQUFPTyxLQUFLOEIsR0FBTCxDQUFTQSxHQUFULEVBQWNELEdBQWQsQ0FBUixJQUFnQzdCLEtBQUs2QixHQUFMLENBQVNDLEdBQVQsRUFBY0QsR0FBZCxLQUFzQnBDLEdBQTdEO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7Ozs7O0FBU0FqQixPQUFNbUYsY0FBTixHQUF1QixVQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUJDLElBQXJCLEVBQTJCQyxJQUEzQixFQUFpQztBQUN0RCxVQUNFL0QsS0FBSzhCLEdBQUwsQ0FBUytCLElBQVQsRUFBZUQsSUFBZixLQUF3QjVELEtBQUs2QixHQUFMLENBQVNpQyxJQUFULEVBQWVDLElBQWYsQ0FBeEIsSUFDQS9ELEtBQUs2QixHQUFMLENBQVMrQixJQUFULEVBQWVDLElBQWYsS0FBd0I3RCxLQUFLOEIsR0FBTCxDQUFTaUMsSUFBVCxFQUFlRCxJQUFmLENBRjFCO0FBSUQsRUFMRDs7QUFPQTs7Ozs7OztBQU9BdEYsT0FBTXdGLGVBQU4sR0FBd0IsVUFBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCO0FBQzNDLE9BQU1qQixLQUFLZ0IsS0FBS3RFLEdBQUwsQ0FBUyxHQUFULENBQVg7QUFDQSxPQUFNdUQsS0FBS2UsS0FBS3RFLEdBQUwsQ0FBUyxHQUFULENBQVg7QUFDQSxPQUFNd0QsS0FBS2UsS0FBS3ZFLEdBQUwsQ0FBUyxHQUFULENBQVg7QUFDQSxPQUFNeUQsS0FBS2MsS0FBS3ZFLEdBQUwsQ0FBUyxHQUFULENBQVg7QUFDQSxVQUFPLEtBQUtnRSxjQUFMLENBQW9CVixFQUFwQixFQUF3QkMsRUFBeEIsRUFBNEJDLEVBQTVCLEVBQWdDQyxFQUFoQyxDQUFQO0FBQ0QsRUFORDs7QUFRQTs7Ozs7OztBQU9BNUUsT0FBTTJGLGFBQU4sR0FBc0IsVUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQWlCO0FBQ3JDLE9BQU1DLE1BQU1GLEdBQUdqRixLQUFILENBQVNGLENBQXJCO0FBQ0EsT0FBTXNGLE1BQU1ILEdBQUdqRixLQUFILENBQVNELENBQXJCO0FBQ0EsT0FBTXNGLE1BQU1ILEdBQUdsRixLQUFILENBQVNGLENBQXJCO0FBQ0EsT0FBTXdGLE1BQU1KLEdBQUdsRixLQUFILENBQVNELENBQXJCOztBQUVBLE9BQU13RixNQUFNSixNQUFNRixHQUFHakYsS0FBSCxDQUFTd0YsS0FBM0I7QUFDQSxPQUFNQyxNQUFNTCxNQUFNSCxHQUFHakYsS0FBSCxDQUFTMEYsTUFBM0I7QUFDQSxPQUFNQyxNQUFNTixNQUFNSCxHQUFHbEYsS0FBSCxDQUFTd0YsS0FBM0I7QUFDQSxPQUFNSSxNQUFNTixNQUFNSixHQUFHbEYsS0FBSCxDQUFTMEYsTUFBM0I7O0FBRUEsVUFDRSxLQUFLbEIsY0FBTCxDQUFvQlcsR0FBcEIsRUFBeUJJLEdBQXpCLEVBQThCRixHQUE5QixFQUFtQ00sR0FBbkMsS0FDQSxLQUFLbkIsY0FBTCxDQUFvQlksR0FBcEIsRUFBeUJLLEdBQXpCLEVBQThCSCxHQUE5QixFQUFtQ00sR0FBbkMsQ0FGRjtBQUlELEVBZkQ7O0FBaUJBOzs7Ozs7O0FBT0F2RyxPQUFNd0csZUFBTixHQUF3QixVQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUI7QUFDdkMsT0FBTUMsT0FBUUYsR0FBRzlGLEtBQUgsQ0FBU2lHLE1BQVQsR0FBa0JGLEdBQUcvRixLQUFILENBQVNpRyxNQUF6QztBQUNBLE9BQU1DLFdBQVcsS0FBS3JDLFVBQUwsQ0FBZ0JpQyxHQUFHOUYsS0FBSCxDQUFTRixDQUF6QixFQUE0QmdHLEdBQUc5RixLQUFILENBQVNELENBQXJDLEVBQXdDZ0csR0FBRy9GLEtBQUgsQ0FBU0YsQ0FBakQsRUFBb0RpRyxHQUFHL0YsS0FBSCxDQUFTRCxDQUE3RCxDQUFqQjs7QUFFQSxPQUFJbUcsUUFBSixFQUFjO0FBQ1osWUFBT0YsT0FBT0UsUUFBZDtBQUNEO0FBQ0QsVUFBTyxJQUFQO0FBQ0QsRUFSRDs7QUFVQTs7Ozs7Ozs7QUFRQTdHLE9BQU04RyxvQkFBTixHQUE2QixVQUFTckcsQ0FBVCxFQUFZQyxDQUFaLEVBQWVxRyxNQUFmLEVBQXVCO0FBQ2xEO0FBQ0EsT0FBTUMsT0FBTyxLQUFLeEMsVUFBTCxDQUNYL0QsQ0FEVyxFQUVYQyxDQUZXLEVBR1hxRyxPQUFPcEcsS0FBUCxDQUFhRixDQUhGLEVBSVhzRyxPQUFPcEcsS0FBUCxDQUFhRCxDQUpGLENBQWI7QUFNQSxVQUFPcUcsT0FBT3BHLEtBQVAsQ0FBYWlHLE1BQWIsR0FBc0JJLElBQTdCO0FBQ0QsRUFURDs7QUFXQTs7Ozs7OztBQU9BaEgsT0FBTWlILGtCQUFOLEdBQTJCLFVBQVNuRyxHQUFULEVBQWNpRyxNQUFkLEVBQXNCO0FBQy9DLFVBQU9BLE9BQU9wRyxLQUFQLENBQWFpRyxNQUFiLEdBQXNCLEtBQUtwQyxVQUFMLENBQzNCMUQsSUFBSUssR0FBSixDQUFRLEdBQVIsQ0FEMkIsRUFFM0JMLElBQUlLLEdBQUosQ0FBUSxHQUFSLENBRjJCLEVBRzNCNEYsT0FBT3BHLEtBQVAsQ0FBYUYsQ0FIYyxFQUkzQnNHLE9BQU9wRyxLQUFQLENBQWFELENBSmMsQ0FBN0I7QUFNRCxFQVBEOztBQVNBOzs7Ozs7OztBQVFBVixPQUFNa0gsa0JBQU4sR0FBMkIsVUFBU3pHLENBQVQsRUFBWUMsQ0FBWixFQUFleUcsSUFBZixFQUFxQjtBQUM5QyxPQUFNQyxRQUFRRCxLQUFLeEcsS0FBTCxDQUFXRixDQUF6QjtBQUNBLE9BQU00RyxRQUFRRixLQUFLeEcsS0FBTCxDQUFXRCxDQUF6QjtBQUNBLFVBQ0UsS0FBS3dFLE9BQUwsQ0FBYXpFLENBQWIsRUFBZ0IyRyxLQUFoQixFQUF1QkEsUUFBUUQsS0FBS3hHLEtBQUwsQ0FBV3dGLEtBQTFDLEtBQ0EsS0FBS2pCLE9BQUwsQ0FBYXhFLENBQWIsRUFBZ0IyRyxLQUFoQixFQUF1QkEsUUFBUUYsS0FBS3hHLEtBQUwsQ0FBVzBGLE1BQTFDLENBRkY7QUFJRCxFQVBEOztBQVNBOzs7Ozs7O0FBT0FyRyxPQUFNc0gsZ0JBQU4sR0FBeUIsVUFBU3hHLEdBQVQsRUFBY3FHLElBQWQsRUFBb0I7QUFDM0MsVUFBTyxLQUFLRCxrQkFBTCxDQUF3QnBHLElBQUlLLEdBQUosQ0FBUSxHQUFSLENBQXhCLEVBQXNDTCxJQUFJSyxHQUFKLENBQVEsR0FBUixDQUF0QyxFQUFvRGdHLElBQXBELENBQVA7QUFDRCxFQUZEOztBQUlBOzs7Ozs7Ozs7O0FBVUFuSCxPQUFNdUgsUUFBTixHQUFpQixTQUFTQSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQ3RELE9BQUlDLGdCQUFKO0FBQ0EsT0FBSUMsYUFBSjtBQUNBLE9BQUlDLGVBQUo7QUFDQSxPQUFJQyxVQUFVLElBQWQ7QUFDQSxPQUFJQyxXQUFXLENBQWY7QUFDQSxPQUFJLENBQUNMLE9BQUwsRUFBY0EsVUFBVSxFQUFWO0FBQ2QsT0FBTU0sUUFBUSxTQUFSQSxLQUFRLEdBQVc7QUFDdkJELGdCQUFXTCxRQUFRTyxPQUFSLEtBQW9CLEtBQXBCLEdBQTRCLENBQTVCLEdBQWdDQyxLQUFLQyxHQUFMLEVBQTNDO0FBQ0FMLGVBQVUsSUFBVjtBQUNBRCxjQUFTTCxLQUFLWSxLQUFMLENBQVdULE9BQVgsRUFBb0JDLElBQXBCLENBQVQ7QUFDQSxTQUFJLENBQUNFLE9BQUwsRUFBY0gsVUFBVUMsT0FBTyxJQUFqQjtBQUNmLElBTEQ7QUFNQSxVQUFPLFlBQWtCO0FBQUEsdUNBQU5BLElBQU07QUFBTkEsV0FBTTtBQUFBOztBQUN2QixTQUFJTyxNQUFNRCxLQUFLQyxHQUFMLEVBQVY7QUFDQSxTQUFJLENBQUNKLFFBQUQsSUFBYUwsUUFBUU8sT0FBUixLQUFvQixLQUFyQyxFQUE0Q0YsV0FBV0ksR0FBWDtBQUM1QyxTQUFJRSxZQUFZWixRQUFRVSxNQUFNSixRQUFkLENBQWhCO0FBQ0FKLGVBQVUsSUFBVjtBQUNBQyxZQUFPQSxJQUFQO0FBQ0EsU0FBSVMsYUFBYSxDQUFiLElBQWtCQSxZQUFZWixJQUFsQyxFQUF3QztBQUN0QyxXQUFJSyxPQUFKLEVBQWE7QUFDWFEsc0JBQWFSLE9BQWI7QUFDQUEsbUJBQVUsSUFBVjtBQUNEO0FBQ0RDLGtCQUFXSSxHQUFYO0FBQ0FOLGdCQUFTTCxLQUFLWSxLQUFMLENBQVdULE9BQVgsRUFBb0JDLElBQXBCLENBQVQ7QUFDQSxXQUFJLENBQUNFLE9BQUwsRUFBY0gsVUFBVUMsT0FBTyxJQUFqQjtBQUNmLE1BUkQsTUFRTyxJQUFJLENBQUNFLE9BQUQsSUFBWUosUUFBUWEsUUFBUixLQUFxQixLQUFyQyxFQUE0QztBQUNqRFQsaUJBQVVVLFdBQVdSLEtBQVgsRUFBa0JLLFNBQWxCLENBQVY7QUFDRDtBQUNELFlBQU9SLE1BQVA7QUFDRCxJQWxCRDtBQW1CRCxFQWhDRDs7QUFrQ0E7Ozs7Ozs7O0FBUUE3SCxPQUFNMkIsU0FBTixHQUFrQixVQUFTTCxNQUFULEVBQWlCYixDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDdkMsT0FBSSxPQUFPRCxDQUFQLEtBQWEsUUFBYixJQUNBLE9BQU9DLENBQVAsS0FBYSxRQURiLElBRUEsT0FBT1ksTUFBUCxLQUFrQixRQUZ0QixFQUVnQztBQUM5QixXQUFNLElBQUltSCxLQUFKLENBQVUscUNBQVYsQ0FBTjtBQUNEOztBQUVELE9BQU1DLFFBQVFsSCxLQUFLTSxLQUFMLENBQVdwQixDQUFYLEVBQWNELENBQWQsQ0FBZDtBQUNBQSxPQUFJZSxLQUFLQyxHQUFMLENBQVNpSCxLQUFULElBQWtCcEgsTUFBdEI7QUFDQVosT0FBSWMsS0FBS0UsR0FBTCxDQUFTZ0gsS0FBVCxJQUFrQnBILE1BQXRCOztBQUVBLFVBQU8sQ0FBQ2IsQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDRCxFQVpEOztBQWNBOzs7Ozs7OztBQVFBVixPQUFNb0IsUUFBTixHQUFpQixVQUFTc0gsS0FBVCxFQUFnQmpJLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNyQyxPQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFiLElBQ0EsT0FBT0MsQ0FBUCxLQUFhLFFBRGIsSUFFQSxPQUFPZ0ksS0FBUCxLQUFpQixRQUZyQixFQUUrQjtBQUM3QixXQUFNLElBQUlELEtBQUosQ0FBVSxxQ0FBVixDQUFOO0FBQ0Q7O0FBRUQsT0FBTW5ILFNBQVNFLEtBQUtLLEtBQUwsQ0FBV3BCLENBQVgsRUFBY0MsQ0FBZCxDQUFmO0FBQ0FELE9BQUllLEtBQUtDLEdBQUwsQ0FBU2lILEtBQVQsSUFBa0JwSCxNQUF0QjtBQUNBWixPQUFJYyxLQUFLRSxHQUFMLENBQVNnSCxLQUFULElBQWtCcEgsTUFBdEI7O0FBRUEsVUFBTyxDQUFDYixDQUFELEVBQUlDLENBQUosQ0FBUDtBQUNELEVBWkQ7O0FBY0E7Ozs7OztBQU1BVixPQUFNMkksUUFBTixHQUFpQixVQUFTQyxHQUFULEVBQWM7QUFDN0IsVUFBT0EsTUFBTSxHQUFOLEdBQVlwSCxLQUFLcUgsRUFBeEI7QUFDRCxFQUZEOztBQUlBOzs7Ozs7QUFNQTdJLE9BQU04SSxRQUFOLEdBQWlCLFVBQVN6SCxHQUFULEVBQWM7QUFDN0IsVUFBT0EsTUFBTSxHQUFOLEdBQVlHLEtBQUtxSCxFQUF4QjtBQUNELEVBRkQ7O0FBSUE7Ozs7Ozs7QUFPQTdJLE9BQU0rSSxhQUFOLEdBQXNCLFVBQVM5SCxHQUFULEVBQWMrSCxNQUFkLEVBQXNCO0FBQzFDLE9BQU1DLE9BQU96SCxLQUFLMEgsR0FBTCxDQUFTLEVBQVQsRUFBYUYsTUFBYixDQUFiO0FBQ0EsVUFBT3hILEtBQUsySCxLQUFMLENBQVdsSSxNQUFNZ0ksSUFBakIsSUFBeUJBLElBQWhDO0FBQ0QsRUFIRDs7QUFLQTs7Ozs7O0FBTUFqSixPQUFNb0osZUFBTixHQUF3QixVQUFTbkksR0FBVCxFQUFjb0ksT0FBZCxFQUF1QjtBQUM3QyxPQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaLFdBQU0sSUFBSVosS0FBSixDQUFVLGtDQUFrQ2EsT0FBT0QsT0FBUCxDQUE1QyxDQUFOO0FBQ0Q7QUFDRCxVQUFPN0gsS0FBSzJILEtBQUwsQ0FBV2xJLE1BQU1vSSxPQUFqQixJQUE0QkEsT0FBbkM7QUFDRCxFQUxEOztBQU9BOzs7Ozs7Ozs7QUFTQXJKLE9BQU11SixlQUFOLEdBQXdCLFVBQVMvRyxFQUFULEVBQWF3QyxFQUFiLEVBQWlCaEQsRUFBakIsRUFBcUJ3SCxDQUFyQixFQUF3QjtBQUM5QyxVQUFPaEksS0FBSzBILEdBQUwsQ0FBUyxJQUFJTSxDQUFiLEVBQWdCLENBQWhCLElBQXFCaEgsRUFBckIsR0FBMEIsQ0FBQyxJQUFJZ0gsQ0FBTCxJQUFVLENBQVYsR0FBY0EsQ0FBZCxHQUFrQnhFLEVBQTVDLEdBQWlEd0UsSUFBSUEsQ0FBSixHQUFReEgsRUFBaEU7QUFDRCxFQUZEOztBQUlBOzs7Ozs7Ozs7O0FBVUFoQyxPQUFNeUosV0FBTixHQUFvQixVQUFTakgsRUFBVCxFQUFhd0MsRUFBYixFQUFpQmhELEVBQWpCLEVBQXFCMEgsRUFBckIsRUFBeUJGLENBQXpCLEVBQTRCO0FBQzlDLFVBQU9oSSxLQUFLMEgsR0FBTCxDQUFTLElBQUlNLENBQWIsRUFBZ0IsQ0FBaEIsSUFBcUJoSCxFQUFyQixHQUNBaEIsS0FBSzBILEdBQUwsQ0FBUyxJQUFJTSxDQUFiLEVBQWdCLENBQWhCLElBQXFCLENBQXJCLEdBQXlCQSxDQUF6QixHQUE2QnhFLEVBRDdCLEdBRUEsQ0FBQyxJQUFJd0UsQ0FBTCxJQUFVLENBQVYsR0FBY0EsQ0FBZCxHQUFrQkEsQ0FBbEIsR0FBc0J4SCxFQUZ0QixHQUdBd0gsSUFBSUEsQ0FBSixHQUFRQSxDQUhSLEdBR1lFLEVBSG5CO0FBSUQsRUFMRDs7QUFPQTs7Ozs7Ozs7O0FBU0ExSixPQUFNMkosb0JBQU4sR0FBNkIsVUFBU0MsRUFBVCxFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQk4sQ0FBckIsRUFBd0I7QUFDbkQsT0FBTS9JLElBQUksS0FBSzhJLGVBQUwsQ0FBcUJLLEdBQUduSixDQUF4QixFQUEyQm9KLEdBQUdwSixDQUE5QixFQUFpQ3FKLEdBQUdySixDQUFwQyxFQUF1QytJLENBQXZDLENBQVY7QUFDQSxPQUFNOUksSUFBSSxLQUFLNkksZUFBTCxDQUFxQkssR0FBR2xKLENBQXhCLEVBQTJCbUosR0FBR25KLENBQTlCLEVBQWlDb0osR0FBR3BKLENBQXBDLEVBQXVDOEksQ0FBdkMsQ0FBVjtBQUNBLFVBQU8sRUFBQy9JLElBQUQsRUFBSUMsSUFBSixFQUFQO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7Ozs7OztBQVVBVixPQUFNK0osZ0JBQU4sR0FBeUIsVUFBU0gsRUFBVCxFQUFhQyxFQUFiLEVBQWlCQyxFQUFqQixFQUFxQkUsRUFBckIsRUFBeUJSLENBQXpCLEVBQTRCO0FBQ25EL0ksT0FBSSxLQUFLZ0osV0FBTCxDQUFpQkcsR0FBR25KLENBQXBCLEVBQXVCb0osR0FBR3BKLENBQTFCLEVBQTZCcUosR0FBR3JKLENBQWhDLEVBQW1DK0ksQ0FBbkMsQ0FBSjtBQUNBOUksT0FBSSxLQUFLK0ksV0FBTCxDQUFpQkcsR0FBR2xKLENBQXBCLEVBQXVCbUosR0FBR25KLENBQTFCLEVBQTZCb0osR0FBR3BKLENBQWhDLEVBQW1DOEksQ0FBbkMsQ0FBSjtBQUNBLFVBQU8sRUFBQy9JLElBQUQsRUFBSUMsSUFBSixFQUFQO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7OztBQU9BVixPQUFNaUssVUFBTixHQUFtQixVQUFTQyxNQUFULEVBQWlCQyxHQUFqQixFQUFzQjtBQUN2QyxPQUFJUCxXQUFKO0FBQ0EsT0FBSUMsV0FBSjtBQUNBLE9BQUlPLGFBQUo7QUFDQSxPQUFJQyxhQUFKOztBQUVBRixPQUFJRyxNQUFKLENBQVdKLE9BQU8sQ0FBUCxFQUFVekosQ0FBckIsRUFBd0J5SixPQUFPLENBQVAsRUFBVXhKLENBQWxDOztBQUVBLFFBQUssSUFBSTZKLElBQUksQ0FBYixFQUFnQkEsSUFBSUwsT0FBTzVJLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNpSixHQUF2QyxFQUE0QztBQUMxQ1gsVUFBS00sT0FBT0ssQ0FBUCxDQUFMO0FBQ0FWLFVBQUtLLE9BQU9LLElBQUksQ0FBWCxDQUFMO0FBQ0FILFlBQU8sQ0FBQ1IsR0FBR25KLENBQUgsR0FBT29KLEdBQUdwSixDQUFYLElBQWMsQ0FBckI7QUFDQTRKLFlBQU8sQ0FBQ1QsR0FBR2xKLENBQUgsR0FBT21KLEdBQUduSixDQUFYLElBQWMsQ0FBckI7QUFDQXlKLFNBQUlLLGdCQUFKLENBQXFCWixHQUFHbkosQ0FBeEIsRUFBMkJtSixHQUFHbEosQ0FBOUIsRUFBaUMwSixJQUFqQyxFQUF1Q0MsSUFBdkM7QUFDRDs7QUFFRFQsUUFBS00sT0FBT0EsT0FBTzVJLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FBTDtBQUNBdUksUUFBS0ssT0FBT0EsT0FBTzVJLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FBTDtBQUNBNkksT0FBSUssZ0JBQUosQ0FBcUJaLEdBQUduSixDQUF4QixFQUEyQm1KLEdBQUdsSixDQUE5QixFQUFpQ21KLEdBQUdwSixDQUFwQyxFQUF1Q29KLEdBQUduSixDQUExQztBQUNELEVBbkJEOztBQXFCQTs7Ozs7Ozs7QUFRQVYsT0FBTXlLLElBQU4sR0FBYSxVQUFTQSxJQUFULEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCO0FBQ2hDO0FBQ0E7QUFDQSxPQUFJbkosS0FBS29KLEdBQUwsQ0FBU0QsSUFBSUQsQ0FBYixJQUFrQixHQUF0QixFQUEyQjtBQUN6QixZQUFPLEtBQVA7QUFDRDs7QUFFRCxVQUFPLENBQUNDLElBQUlELENBQUwsSUFBVUQsSUFBakI7QUFDRCxFQVJEOztBQVVBekssT0FBTTZLLE1BQU4sR0FBZSxVQUFTSixJQUFULEVBQWVLLE1BQWYsRUFBdUJDLE1BQXZCLEVBQThDO0FBQUEsT0FBZkMsU0FBZSx1RUFBTCxHQUFLOztBQUMzRCxPQUFNbkcsS0FBS2tHLE9BQU90SyxDQUFQLEdBQVdxSyxPQUFPckssQ0FBN0I7QUFDQSxPQUFNcUUsS0FBS2lHLE9BQU9ySyxDQUFQLEdBQVdvSyxPQUFPcEssQ0FBN0I7O0FBRUE7QUFDQTtBQUNBLE9BQUljLEtBQUtvSixHQUFMLENBQVMvRixFQUFULElBQWVtRyxTQUFmLElBQTRCeEosS0FBS29KLEdBQUwsQ0FBUzlGLEVBQVQsSUFBZWtHLFNBQS9DLEVBQTBEO0FBQ3hELFlBQU8sS0FBUDtBQUNEOztBQUVERixVQUFPckssQ0FBUCxJQUFZb0UsS0FBSzRGLElBQWpCO0FBQ0FLLFVBQU9wSyxDQUFQLElBQVlvRSxLQUFLMkYsSUFBakI7O0FBRUEsVUFBT0ssTUFBUDtBQUNELEVBZEQ7O0FBZ0JBOzs7OztBQUtBOUssT0FBTWlMLFFBQU4sR0FBaUIsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdkMsVUFBTyxRQUFPQSxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTZCLEVBQUQsQ0FBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixJQUFuQixNQUE2QixpQkFBaEU7QUFDRCxFQUZEOztBQUlBOzs7OztBQUtBbEwsT0FBTXFMLE1BQU4sR0FBZSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUNwQyxVQUFPQSxNQUFNL0ksTUFBTixDQUFhLFVBQUM5QixDQUFELEVBQUlDLENBQUosRUFBVTtBQUM1QixTQUFJRCxFQUFFOEssT0FBRixDQUFVN0ssQ0FBVixNQUFpQixDQUFDLENBQXRCLEVBQXlCRCxFQUFFK0ssSUFBRixDQUFPOUssQ0FBUDtBQUN6QixZQUFPRCxDQUFQO0FBQ0QsSUFITSxFQUdKLEVBSEksQ0FBUDtBQUlELEVBTEQ7OztBQVFBVCxPQUFNeUwsa0JBQU4sR0FBMkIsU0FBU0Esa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQTJDQyxTQUEzQyxFQUE2REMsT0FBN0QsRUFBb0Y7QUFBQSxPQUN0Ry9GLEVBRHNHLEdBQ3hGOEYsU0FEd0YsQ0FDdEc5RixFQURzRztBQUFBLE9BQ2xHZ0csRUFEa0csR0FDeEZGLFNBRHdGLENBQ2xHRSxFQURrRztBQUFBLE9BQzlGQyxFQUQ4RixHQUN4RkgsU0FEd0YsQ0FDOUZHLEVBRDhGO0FBQUEsT0FFdEdDLEVBRnNHLEdBRXhGSCxPQUZ3RixDQUV0R0csRUFGc0c7QUFBQSxPQUVsR0MsRUFGa0csR0FFeEZKLE9BRndGLENBRWxHSSxFQUZrRztBQUFBLE9BRTlGQyxFQUY4RixHQUV4RkwsT0FGd0YsQ0FFOUZLLEVBRjhGOzs7QUFJN0dDLE9BQUlyRyxLQUFLLENBQUNrRyxLQUFLbEcsRUFBTixJQUFZNkYsS0FBckI7QUFDQVMsT0FBSU4sS0FBSyxDQUFDRyxLQUFLSCxFQUFOLElBQVlILEtBQXJCO0FBQ0FmLE9BQUltQixLQUFLLENBQUNHLEtBQUtILEVBQU4sSUFBWUosS0FBckI7O0FBRUEsVUFBTyxTQUFQO0FBQ0QsRUFURDs7QUFXQTFMLE9BQU1vTSxXQUFOLEdBQW9CLFNBQVNBLFdBQVQsQ0FBcUJDLFdBQXJCLEVBQWtDeEYsUUFBbEMsRUFBNEM7QUFDOUQsVUFBT3dGLGVBQWVBLGNBQWN4RixRQUE3QixDQUFQO0FBQ0QsRUFGRDs7QUFJQXhHLFFBQU9DLE9BQVAsR0FBaUJ3RCxPQUFPakQsTUFBUCxDQUFjYixLQUFkLENBQWpCLEM7Ozs7Ozs7O0FDdGpCQTtBQUNBOzs7Ozs7QUFNQSxLQUFNc00sU0FBUyxtQkFBQXhNLENBQVEsQ0FBUixDQUFmO0FBQ0EsS0FBTXlNLFFBQVEsbUJBQUF6TSxDQUFRLENBQVIsQ0FBZDtBQUNBOztBQUVBLEtBQU1VLGdCQUFnQjtBQUNwQkMsTUFBRyxDQURpQjtBQUVwQkMsTUFBRyxDQUZpQjtBQUdwQjhMLE9BQUksQ0FIZ0I7QUFJcEJDLE9BQUksQ0FKZ0I7QUFLcEJDLFlBQVMsQ0FMVztBQU1wQkMsY0FBVyxDQU5TO0FBT3BCL0YsV0FBUSxDQVBZO0FBUXBCZ0csU0FBTSxDQVJjO0FBU3BCQyxjQUFXckwsS0FBS3FILEVBQUwsR0FBVSxDQVREO0FBVXBCaUUsYUFBVSxDQVZVO0FBV3BCQyxZQUFTLEVBWFc7QUFZcEJDLFdBQVE7QUFaWSxFQUF0Qjs7QUFlQTs7OztBQUlBLFVBQVNqTixRQUFULEdBQThDO0FBQUEsT0FBNUJZLEtBQTRCLHVFQUF0QjRMLE1BQU0vTCxhQUFOLENBQXNCOztBQUM1QyxRQUFLRyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRDs7Ozs7O0FBTUFaLFVBQVNhLFNBQVQsQ0FBbUJDLE1BQW5CLEdBQTRCLFlBQW9DO0FBQUEsT0FBM0JvTSxJQUEyQix1RUFBdEJWLE1BQU0vTCxhQUFOLENBQXNCOztBQUM5RDtBQUNBeU0sVUFBT1gsT0FBTyxJQUFQLEVBQWFDLE1BQU0vTCxhQUFOLENBQWIsRUFBbUN5TSxJQUFuQyxDQUFQOztBQUVBO0FBQ0EsT0FBTUMsV0FBVyxJQUFJbk4sUUFBSixDQUFha04sSUFBYixDQUFqQjs7QUFFQTtBQUNBQyxZQUFTQyxRQUFULENBQWtCRixLQUFLTixTQUF2Qjs7QUFFQTtBQUNBTyxZQUFTRSxVQUFULENBQW9CSCxLQUFLSixTQUF6Qjs7QUFFQTtBQUNBLFVBQU9LLFFBQVA7QUFDRCxFQWZEOztBQWlCQTs7Ozs7Ozs7QUFRQW5OLFVBQVNhLFNBQVQsQ0FBbUJ5TSxVQUFuQixHQUFnQyxTQUFTQSxVQUFULEdBQXdEO0FBQUEsT0FBcENDLEVBQW9DLHVFQUFqQyxLQUFLM00sS0FBTCxDQUFXNkwsRUFBc0I7QUFBQSxPQUFsQmUsRUFBa0IsdUVBQWYsS0FBSzVNLEtBQUwsQ0FBVzhMLEVBQUk7O0FBQ3RGLFFBQUs5TCxLQUFMLENBQVc2TCxFQUFYLElBQWlCYyxLQUFLLENBQXRCO0FBQ0EsUUFBSzNNLEtBQUwsQ0FBVzhMLEVBQVgsSUFBaUJjLEtBQUssQ0FBdEI7QUFDQSxVQUFPLEVBQUNELE1BQUQsRUFBS0MsTUFBTCxFQUFQO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7Ozs7OztBQVVBeE4sVUFBU2EsU0FBVCxDQUFtQjRNLE1BQW5CLEdBQTRCLFNBQVNBLE1BQVQsR0FBbUU7QUFBQSxPQUFuREMsSUFBbUQsdUVBQTlDLEtBQUs5TSxLQUFMLENBQVdtTSxRQUFtQztBQUFBLE9BQXpCWSxJQUF5Qix1RUFBcEIsS0FBSy9NLEtBQUwsQ0FBVytMLE9BQVM7O0FBQzdGO0FBQ0EsUUFBS2lCLGFBQUw7O0FBRUE7QUFDQSxRQUFLQyxZQUFMOztBQUVBO0FBQ0EsUUFBS2pOLEtBQUwsQ0FBVzZMLEVBQVgsSUFBaUJpQixJQUFqQjtBQUNBLFFBQUs5TSxLQUFMLENBQVc4TCxFQUFYLElBQWlCZ0IsSUFBakI7O0FBRUE7QUFDQSxRQUFLSixVQUFMLENBQWdCLENBQWhCLEVBQW1CSyxJQUFuQjs7QUFFQTtBQUNBLFVBQU8sS0FBS0csU0FBTCxFQUFQO0FBQ0QsRUFoQkQ7O0FBa0JBOzs7OztBQUtBOU4sVUFBU2EsU0FBVCxDQUFtQnVNLFFBQW5CLEdBQThCLFNBQVNBLFFBQVQsQ0FBa0JXLEtBQWxCLEVBQXlCO0FBQ3JELE9BQU1wRixRQUFRLEtBQUtxRixVQUFMLEVBQWQ7QUFDQSxRQUFLcE4sS0FBTCxDQUFXNkwsRUFBWCxHQUFnQmhMLEtBQUtDLEdBQUwsQ0FBU2lILEtBQVQsSUFBa0JvRixLQUFsQztBQUNBLFFBQUtuTixLQUFMLENBQVc4TCxFQUFYLEdBQWdCakwsS0FBS0UsR0FBTCxDQUFTZ0gsS0FBVCxJQUFrQm9GLEtBQWxDO0FBQ0QsRUFKRDs7QUFNQTs7Ozs7QUFLQS9OLFVBQVNhLFNBQVQsQ0FBbUJ3TSxVQUFuQixHQUFnQyxTQUFTQSxVQUFULENBQW9CMUUsS0FBcEIsRUFBMkI7QUFDekQsT0FBTW9GLFFBQVEsS0FBS0UsUUFBTCxFQUFkO0FBQ0EsUUFBS3JOLEtBQUwsQ0FBVzZMLEVBQVgsR0FBZ0JoTCxLQUFLQyxHQUFMLENBQVNpSCxLQUFULElBQWtCb0YsS0FBbEM7QUFDQSxRQUFLbk4sS0FBTCxDQUFXOEwsRUFBWCxHQUFnQmpMLEtBQUtFLEdBQUwsQ0FBU2dILEtBQVQsSUFBa0JvRixLQUFsQztBQUNELEVBSkQ7O0FBTUE7Ozs7Ozs7QUFPQS9OLFVBQVNhLFNBQVQsQ0FBbUJvTixRQUFuQixHQUE4QixTQUFTQSxRQUFULEdBQW9EO0FBQUEsT0FBbEN2TixDQUFrQyx1RUFBaEMsS0FBS0UsS0FBTCxDQUFXNkwsRUFBcUI7QUFBQSxPQUFqQjlMLENBQWlCLHVFQUFmLEtBQUtDLEtBQUwsQ0FBVzhMLEVBQUk7O0FBQ2hGLFVBQU9qTCxLQUFLSyxLQUFMLENBQVcsS0FBS2xCLEtBQUwsQ0FBVzZMLEVBQXRCLEVBQTBCLEtBQUs3TCxLQUFMLENBQVc4TCxFQUFyQyxDQUFQO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7OztBQU9BMU0sVUFBU2EsU0FBVCxDQUFtQm1OLFVBQW5CLEdBQWdDLFNBQVNBLFVBQVQsR0FBc0Q7QUFBQSxPQUFsQ3ROLENBQWtDLHVFQUFoQyxLQUFLRSxLQUFMLENBQVc2TCxFQUFxQjtBQUFBLE9BQWpCOUwsQ0FBaUIsdUVBQWYsS0FBS0MsS0FBTCxDQUFXOEwsRUFBSTs7QUFDcEYsVUFBT2pMLEtBQUtNLEtBQUwsQ0FBV3BCLENBQVgsRUFBY0QsQ0FBZCxDQUFQO0FBQ0QsRUFGRDs7QUFJQTs7Ozs7O0FBTUFWLFVBQVNhLFNBQVQsQ0FBbUJxTixTQUFuQixHQUErQixTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUN4RCxRQUFLQyxZQUFMLENBQWtCRCxNQUFsQjtBQUNBLFFBQUt2TixLQUFMLENBQVdvTSxPQUFYLENBQW1CdkIsSUFBbkIsQ0FBd0IwQyxNQUF4QjtBQUNBLFVBQU9BLE1BQVA7QUFDRCxFQUpEOztBQU1BOzs7OztBQUtBbk8sVUFBU2EsU0FBVCxDQUFtQnVOLFlBQW5CLEdBQWtDLFNBQVNBLFlBQVQsT0FBMkM7QUFBQSxPQUFMQyxDQUFLLFFBQXBCQyxLQUFvQixDQUFaMU4sS0FBWTs7QUFDM0UsT0FBTW9NLFVBQVUsS0FBS3BNLEtBQUwsQ0FBV29NLE9BQTNCOztBQUVBLFFBQUssSUFBSXhDLElBQUksQ0FBYixFQUFnQkEsSUFBSXdDLFFBQVF6TCxNQUE1QixFQUFvQ2lKLEdBQXBDLEVBQXlDO0FBQ3ZDLFNBQUk2RCxFQUFFM04sQ0FBRixLQUFRc00sUUFBUXhDLENBQVIsRUFBVzhELEtBQVgsQ0FBaUIxTixLQUFqQixDQUF1QkYsQ0FBL0IsSUFDQTJOLEVBQUUxTixDQUFGLEtBQVFxTSxRQUFReEMsQ0FBUixFQUFXOEQsS0FBWCxDQUFpQjFOLEtBQWpCLENBQXVCRCxDQURuQyxFQUNzQztBQUNwQ3FNLGVBQVF1QixNQUFSLENBQWUvRCxDQUFmLEVBQWtCLENBQWxCO0FBQ0E7QUFDRDtBQUNGO0FBQ0YsRUFWRDs7QUFZQTs7Ozs7Ozs7Ozs7OztBQWFBeEssVUFBU2EsU0FBVCxDQUFtQjJOLE9BQW5CLEdBQTZCLFNBQVNDLE9BQVQsUUFBd0M7QUFBQSwyQkFBdEI3TixLQUFzQjtBQUFBLE9BQVhGLENBQVcsZUFBZEEsQ0FBYztBQUFBLE9BQUxDLENBQUssZUFBUkEsQ0FBUTtBQUFBLGNBQzVDLEVBQUNELEdBQUdBLElBQUksS0FBS0UsS0FBTCxDQUFXRixDQUFuQixFQUFzQkMsR0FBR0EsSUFBSSxLQUFLQyxLQUFMLENBQVdELENBQXhDLEVBRDRDO0FBQUEsT0FDekRtRSxFQUR5RCxRQUM1RHBFLENBRDREO0FBQUEsT0FDbERxRSxFQURrRCxRQUNyRHBFLENBRHFEOztBQUVuRSxVQUFPYyxLQUFLTSxLQUFMLENBQVdnRCxFQUFYLEVBQWVELEVBQWYsQ0FBUDtBQUNELEVBSEQ7O0FBS0E7Ozs7Ozs7OztBQVNBOUUsVUFBU2EsU0FBVCxDQUFtQjZOLFVBQW5CLEdBQWdDLFNBQVNBLFVBQVQsUUFBMkM7QUFBQSwyQkFBdEI5TixLQUFzQjtBQUFBLE9BQVhGLENBQVcsZUFBZEEsQ0FBYztBQUFBLE9BQUxDLENBQUssZUFBUkEsQ0FBUTtBQUFBLGVBQ2xELEVBQUNELEdBQUdBLElBQUksS0FBS0UsS0FBTCxDQUFXRixDQUFuQixFQUFzQkMsR0FBR0EsSUFBSSxLQUFLQyxLQUFMLENBQVdELENBQXhDLEVBRGtEO0FBQUEsT0FDL0RtRSxFQUQrRCxTQUNsRXBFLENBRGtFO0FBQUEsT0FDeERxRSxFQUR3RCxTQUMzRHBFLENBRDJEOztBQUV6RSxVQUFPYyxLQUFLSyxLQUFMLENBQVdnRCxFQUFYLEVBQWVDLEVBQWYsQ0FBUDtBQUNELEVBSEQ7O0FBS0E7Ozs7O0FBS0EvRSxVQUFTYSxTQUFULENBQW1COE4sT0FBbkIsR0FBNkIsVUFBUzlCLElBQVQsRUFBZTtBQUMxQyxRQUFLK0IsVUFBTCxDQUFnQi9CLElBQWhCO0FBQ0EsUUFBS2pNLEtBQUwsQ0FBV3FNLE1BQVgsQ0FBa0J4QixJQUFsQixDQUF1Qm9CLElBQXZCO0FBQ0QsRUFIRDs7QUFLQTs7Ozs7QUFLQTdNLFVBQVNhLFNBQVQsQ0FBbUIrTixVQUFuQixHQUFnQyxpQkFBd0I7QUFBQSxPQUFQL0IsSUFBTyxTQUFkak0sS0FBYzs7QUFDdEQsT0FBTXFNLFNBQVMsS0FBS3JNLEtBQUwsQ0FBV3FNLE1BQTFCOztBQUVBLFFBQUssSUFBSXpDLElBQUksQ0FBYixFQUFnQkEsSUFBSXlDLE9BQU8xTCxNQUEzQixFQUFtQ2lKLEdBQW5DLEVBQXdDO0FBQ3RDLFNBQUlxQyxLQUFLbk0sQ0FBTCxLQUFXdU0sT0FBT3pDLENBQVAsRUFBVTVKLEtBQVYsQ0FBZ0JGLENBQTNCLElBQ0FtTSxLQUFLbE0sQ0FBTCxLQUFXc00sT0FBT3pDLENBQVAsRUFBVTVKLEtBQVYsQ0FBZ0JELENBRC9CLEVBQ2tDO0FBQ2hDc00sY0FBT3NCLE1BQVAsQ0FBYy9ELENBQWQsRUFBaUIsQ0FBakI7QUFDQTtBQUNEO0FBQ0Y7QUFDRixFQVZEOztBQVlBOzs7Ozs7QUFNQXhLLFVBQVNhLFNBQVQsQ0FBbUJnTyxXQUFuQixHQUFpQyxVQUFTOUUsRUFBVCxFQUFhO0FBQzVDLE9BQU1qRixLQUFLaUYsR0FBR25KLEtBQUgsQ0FBU0YsQ0FBVCxHQUFhLEtBQUtFLEtBQUwsQ0FBV0YsQ0FBbkM7QUFDQSxPQUFNcUUsS0FBS2dGLEdBQUduSixLQUFILENBQVNELENBQVQsR0FBYSxLQUFLQyxLQUFMLENBQVdELENBQW5DOztBQUVBO0FBQ0EsT0FBTW1PLFNBQVNoSyxLQUFLQSxFQUFMLEdBQVVDLEtBQUtBLEVBQTlCO0FBQ0EsT0FBTWtDLE9BQU94RixLQUFLc04sSUFBTCxDQUFVRCxNQUFWLENBQWI7O0FBRUE7QUFDQSxPQUFNRSxRQUFRakYsR0FBR25KLEtBQUgsQ0FBU2lNLElBQVQsR0FBZ0JpQyxNQUE5Qjs7QUFFQTtBQUNBLE9BQU1uTixNQUFNb0QsS0FBS2tDLElBQWpCO0FBQ0EsT0FBTXZGLE1BQU1vRCxLQUFLbUMsSUFBakI7O0FBRUE7QUFDQSxPQUFNc0csS0FBSzdMLE1BQU1zTixLQUFqQjtBQUNBLE9BQU14QixLQUFLN0wsTUFBTXFOLEtBQWpCOztBQUVBLFVBQU8sS0FBSzFCLFVBQUwsQ0FBZ0JDLEVBQWhCLEVBQW9CQyxFQUFwQixDQUFQO0FBQ0QsRUFwQkQ7O0FBc0JBO0FBQ0E7Ozs7Ozs7O0FBUUF4TixVQUFTYSxTQUFULENBQW1Cb08sU0FBbkIsR0FBK0IsU0FBU0MsR0FBVCxDQUFhQyxHQUFiLEVBQXVEO0FBQUEsT0FBckNqQyxJQUFxQyx1RUFBaENWLE1BQU0vTCxhQUFOLENBQWdDO0FBQUEsT0FBVjJPLFFBQVU7O0FBQ3BGO0FBQ0FyTCxVQUFPc0wsTUFBUCxDQUFjbkMsSUFBZDs7QUFFQSxPQUFNb0MsWUFBWSxFQUFsQjtBQUNBLE9BQU1wTixPQUFPLElBQWI7O0FBRUEsT0FBSSxPQUFPa04sUUFBUCxLQUFvQixVQUF4QixFQUFvQztBQUNsQyxVQUFLLElBQUk1RSxJQUFJLENBQWIsRUFBZ0JBLElBQUkyRSxHQUFwQixFQUF5QjNFLEdBQXpCLEVBQThCO0FBQzVCNEUsZ0JBQVNsQyxJQUFULEVBQWUxQyxDQUFmLEVBQWtCLFVBQVM2RCxDQUFULEVBQVk7QUFDNUIsYUFBSSxDQUFDQSxDQUFMLEVBQVE7QUFDTmtCLG1CQUFRQyxHQUFSLENBQVksMERBQVo7QUFDQSxlQUFNQyxlQUFjdk4sS0FBS3BCLE1BQUwsQ0FBWW9NLElBQVosQ0FBcEI7QUFDQW9DLHFCQUFVN0QsSUFBVixDQUFlZ0UsWUFBZjtBQUNBLGtCQUFPQSxZQUFQO0FBQ0Q7O0FBRUQsYUFBTUEsY0FBY3ZOLEtBQUtwQixNQUFMLENBQVl1TixDQUFaLENBQXBCO0FBQ0FpQixtQkFBVTdELElBQVYsQ0FBZWdFLFdBQWY7QUFDQSxnQkFBT0EsV0FBUDtBQUNELFFBWEQ7QUFZRDtBQUNGOztBQUVELE9BQUksQ0FBQ0wsUUFBTCxFQUFlO0FBQ2IsVUFBSyxJQUFJNUUsS0FBSSxDQUFiLEVBQWdCQSxLQUFJMkUsR0FBcEIsRUFBeUIzRSxJQUF6QixFQUE4QjtBQUM1QjhFLGlCQUFVN0QsSUFBVixDQUFldkosS0FBS3BCLE1BQUwsQ0FBWW9NLElBQVosQ0FBZjtBQUNEO0FBQ0Y7O0FBRUQsVUFBT29DLFNBQVA7QUFDRCxFQS9CRDs7QUFpQ0E7Ozs7Ozs7OztBQVNBOzs7Ozs7O0FBT0F0UCxVQUFTYSxTQUFULENBQW1CaU4sU0FBbkIsR0FBK0IsU0FBU0EsU0FBVCxDQUFtQnJCLEVBQW5CLEVBQXVCQyxFQUF2QixFQUEyQjtBQUN4RCxPQUFJRCxPQUFPaUQsU0FBUCxJQUFvQmhELE9BQU9nRCxTQUEvQixFQUEwQztBQUN4QyxVQUFLOU8sS0FBTCxDQUFXRixDQUFYLElBQWdCLEtBQUtFLEtBQUwsQ0FBVzZMLEVBQTNCO0FBQ0EsVUFBSzdMLEtBQUwsQ0FBV0QsQ0FBWCxJQUFnQixLQUFLQyxLQUFMLENBQVc4TCxFQUEzQjtBQUNBLFlBQU8sRUFBQ2hNLEdBQUcsS0FBS0UsS0FBTCxDQUFXRixDQUFmLEVBQWtCQyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsQ0FBaEMsRUFBUDtBQUNEOztBQUVELFFBQUtDLEtBQUwsQ0FBV0YsQ0FBWCxJQUFnQitMLEVBQWhCO0FBQ0EsUUFBSzdMLEtBQUwsQ0FBV0QsQ0FBWCxJQUFnQitMLEVBQWhCO0FBQ0EsVUFBTyxFQUFDaE0sR0FBRyxLQUFLRSxLQUFMLENBQVdGLENBQWYsRUFBa0JDLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxDQUFoQyxFQUFQO0FBQ0QsRUFWRDs7QUFZQTs7Ozs7Ozs7O0FBU0FYLFVBQVNhLFNBQVQsQ0FBbUI4TyxZQUFuQixHQUFrQyxTQUFTQSxZQUFULENBQXNCdEIsQ0FBdEIsRUFBa0Q7QUFBQSxPQUF6QkYsTUFBeUIsdUVBQWxCLElBQWtCO0FBQUEsT0FBWnlCLE1BQVksdUVBQUwsR0FBSzs7QUFDbEY7QUFDQSxPQUFNOUssS0FBTXVKLEVBQUV6TixLQUFGLENBQVFGLENBQVIsR0FBWSxLQUFLRSxLQUFMLENBQVdGLENBQW5DO0FBQ0EsT0FBTXFFLEtBQU1zSixFQUFFek4sS0FBRixDQUFRRCxDQUFSLEdBQVksS0FBS0MsS0FBTCxDQUFXRCxDQUFuQzs7QUFFQTtBQUNBLE9BQU1tRyxXQUFXckYsS0FBS0ssS0FBTCxDQUFXZ0QsRUFBWCxFQUFlQyxFQUFmLENBQWpCO0FBQ0EsT0FBTThLLGNBQWMsQ0FBQy9JLFdBQVc4SSxNQUFaLElBQXNCekIsTUFBMUM7O0FBRUE7QUFDQSxPQUFNMkIsS0FBS2hMLEtBQUtnQyxRQUFMLEdBQWdCK0ksV0FBM0I7QUFDQSxPQUFNRSxLQUFLaEwsS0FBSytCLFFBQUwsR0FBZ0IrSSxXQUEzQjs7QUFFQTtBQUNBLFFBQUt2QyxVQUFMLENBQWdCd0MsRUFBaEIsRUFBb0JDLEVBQXBCOztBQUVBO0FBQ0ExQixLQUFFek4sS0FBRixDQUFRNkwsRUFBUixJQUFjcUQsRUFBZDtBQUNBekIsS0FBRXpOLEtBQUYsQ0FBUThMLEVBQVIsSUFBY3FELEVBQWQ7O0FBRUEsVUFBTyxDQUFDLElBQUQsRUFBTzFCLENBQVAsQ0FBUDtBQUNELEVBckJEOztBQXVCQTs7Ozs7OztBQU9Bck8sVUFBU2EsU0FBVCxDQUFtQm1QLGFBQW5CLEdBQW1DLFNBQVNBLGFBQVQsQ0FBdUIzQixDQUF2QixFQUEwQjtBQUMzRDtBQUNBLE9BQU12SixLQUFNdUosRUFBRUMsS0FBRixDQUFRMU4sS0FBUixDQUFjRixDQUFkLEdBQWtCLEtBQUtFLEtBQUwsQ0FBV0YsQ0FBekM7QUFDQSxPQUFNcUUsS0FBTXNKLEVBQUVDLEtBQUYsQ0FBUTFOLEtBQVIsQ0FBY0QsQ0FBZCxHQUFrQixLQUFLQyxLQUFMLENBQVdELENBQXpDOztBQUVBO0FBQ0EsT0FBTW1HLFdBQVdyRixLQUFLSyxLQUFMLENBQVdnRCxFQUFYLEVBQWVDLEVBQWYsQ0FBakI7QUFDQSxPQUFNOEssY0FBYyxDQUFDL0ksV0FBV3VILEVBQUV1QixNQUFkLElBQXdCdkIsRUFBRUYsTUFBOUM7O0FBRUE7QUFDQSxPQUFNMkIsS0FBS2hMLEtBQUtnQyxRQUFMLEdBQWdCK0ksV0FBM0I7QUFDQSxPQUFNRSxLQUFLaEwsS0FBSytCLFFBQUwsR0FBZ0IrSSxXQUEzQjs7QUFFQTtBQUNBLFFBQUt2QyxVQUFMLENBQWdCd0MsRUFBaEIsRUFBb0JDLEVBQXBCOztBQUVBLFVBQU8sQ0FBQyxJQUFELEVBQU8xQixDQUFQLENBQVA7QUFDRCxFQWpCRDs7QUFtQkE7Ozs7OztBQU1Bck8sVUFBU2EsU0FBVCxDQUFtQitNLGFBQW5CLEdBQW1DLFNBQVNBLGFBQVQsR0FBbUQ7QUFBQSxPQUE1QlosT0FBNEIsdUVBQXBCLEtBQUtwTSxLQUFMLENBQVdvTSxPQUFTOztBQUNwRixRQUFLLElBQUl4QyxJQUFJLENBQWIsRUFBZ0JBLElBQUl3QyxRQUFRekwsTUFBNUIsRUFBb0NpSixHQUFwQyxFQUF5QztBQUN2QyxVQUFLd0YsYUFBTCxDQUFtQmhELFFBQVF4QyxDQUFSLENBQW5CO0FBQ0Q7QUFDRCxVQUFPd0MsT0FBUDtBQUNELEVBTEQ7O0FBT0E7Ozs7OztBQU1BaE4sVUFBU2EsU0FBVCxDQUFtQmdOLFlBQW5CLEdBQWtDLFNBQVNBLFlBQVQsR0FBZ0Q7QUFBQSxPQUExQlosTUFBMEIsdUVBQW5CLEtBQUtyTSxLQUFMLENBQVdxTSxNQUFROztBQUNoRixRQUFLLElBQUl6QyxJQUFJLENBQWIsRUFBZ0JBLElBQUl5QyxPQUFPMUwsTUFBM0IsRUFBbUNpSixHQUFuQyxFQUF3QztBQUN0QyxVQUFLcUUsV0FBTCxDQUFpQjVCLE9BQU96QyxDQUFQLENBQWpCO0FBQ0Q7QUFDRCxVQUFPeUMsTUFBUDtBQUNELEVBTEQ7O0FBT0EzTSxRQUFPQyxPQUFQLEdBQWlCUCxRQUFqQixDOzs7Ozs7QUM3WkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBbUI7O0FBRW5CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBLFFBQU8sWUFBWTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwRkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFNBQVMsR0FBRyxTQUFTO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTs7Ozs7OztBQ3hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDWkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2xCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNMQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNSQTtBQUNBOztBQUVBOzs7Ozs7OztBQ0hBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDOUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FBUztBQUNwQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM3QkE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDckJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTztBQUNsQixZQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN4QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBVyxRQUFRO0FBQ25CO0FBQ0EsSUFBRztBQUNILEVBQUM7O0FBRUQ7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsTUFBTTtBQUNqQixZQUFXLE9BQU8sV0FBVztBQUM3QixZQUFXLFNBQVM7QUFDcEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLHlCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsWUFBVyxRQUFRO0FBQ25CLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixjQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLDhCQUE2QixrQkFBa0IsRUFBRTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQThDLGtCQUFrQixFQUFFO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25DQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0EscUJBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRUFBQzs7QUFFRDs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDN0JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsWUFBVyxTQUFTO0FBQ3BCLGNBQWEsU0FBUztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaENBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDbkJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFFBQVE7QUFDbkIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU8sV0FBVztBQUM3QixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOzs7Ozs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakIsWUFBVyxTQUFTO0FBQ3BCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3RCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsT0FBTyxXQUFXO0FBQzdCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsTUFBTTtBQUNqQixZQUFXLE1BQU07QUFDakIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ25CQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixZQUFXLFNBQVM7QUFDcEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6REE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCLFlBQVcsUUFBUTtBQUNuQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQy9FQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsWUFBWTtBQUN2QixjQUFhLFlBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDZkE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsUUFBUTtBQUNuQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixZQUFXLFFBQVE7QUFDbkIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxNQUFNO0FBQ2pCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsU0FBUztBQUNwQixZQUFXLEVBQUU7QUFDYixZQUFXLFFBQVE7QUFDbkI7QUFDQSxjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLFlBQVcsU0FBUztBQUNwQixZQUFXLFFBQVE7QUFDbkIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxFQUFFO0FBQ2IsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLFFBQVE7QUFDbkIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2pCQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsY0FBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7Ozs7Ozs7OztBQzdCQTs7Ozs7QUFLQSxVQUFTRSxNQUFULENBQWdCa0ssR0FBaEIsRUFBcUI2RixRQUFyQixFQUErQjtBQUM3QixPQUFJLENBQUM3RixHQUFMLEVBQVU7QUFDUixXQUFNLElBQUkxQixLQUFKLENBQVUsb0RBQVYsQ0FBTjtBQUNEO0FBQ0QsUUFBSzBCLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFFBQUs2RixRQUFMLEdBQWdCQSxZQUFZQyxPQUFPRCxRQUFuQztBQUNEOztBQUVEOzs7Ozs7OztBQVFBL1AsUUFBT1csU0FBUCxDQUFpQm1HLE1BQWpCLEdBQTBCLFNBQVNtSixVQUFULEdBQW9EO0FBQUEsT0FBaEN6UCxDQUFnQyx1RUFBOUIsQ0FBOEI7QUFBQSxPQUEzQkMsQ0FBMkIsdUVBQXpCLENBQXlCO0FBQUEsT0FBdEJ3TCxDQUFzQix1RUFBcEIsQ0FBb0I7QUFBQSxPQUFqQmlFLEtBQWlCLHVFQUFYLFNBQVc7O0FBQzVFLFFBQUtoRyxHQUFMLENBQVNpRyxTQUFULEdBQXFCRCxLQUFyQjtBQUNBLFFBQUtoRyxHQUFMLENBQVNrRyxTQUFUO0FBQ0EsUUFBS2xHLEdBQUwsQ0FBU21HLEdBQVQsQ0FBYTdQLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1Cd0wsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIxSyxLQUFLcUgsRUFBTCxHQUFVLENBQW5DLEVBQXNDLEtBQXRDO0FBQ0EsUUFBS3NCLEdBQUwsQ0FBU29HLElBQVQ7QUFDRCxFQUxEOztBQU9BOzs7Ozs7Ozs7QUFTQXRRLFFBQU9XLFNBQVAsQ0FBaUJ1RyxJQUFqQixHQUF3QixTQUFTcUosUUFBVCxDQUFrQi9QLENBQWxCLEVBQXFCQyxDQUFyQixFQUFxRDtBQUFBLE9BQTdCK1AsQ0FBNkIsdUVBQTNCLEVBQTJCO0FBQUEsT0FBdkJDLENBQXVCLHVFQUFyQixFQUFxQjtBQUFBLE9BQWpCUCxLQUFpQix1RUFBWCxTQUFXOztBQUMzRSxRQUFLaEcsR0FBTCxDQUFTaUcsU0FBVCxHQUFxQkQsS0FBckI7QUFDQSxRQUFLaEcsR0FBTCxDQUFTd0csUUFBVCxDQUFrQmxRLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QitQLENBQXhCLEVBQTJCQyxDQUEzQjtBQUNELEVBSEQ7O0FBS0E7Ozs7OztBQU1BelEsUUFBT1csU0FBUCxDQUFpQmdRLE9BQWpCLEdBQTJCLFNBQVNDLGNBQVQsQ0FBd0J6QyxDQUF4QixFQUEyQjtBQUNwRCxRQUFLckgsTUFBTCxDQUNFcUgsRUFBRXpOLEtBQUYsQ0FBUUYsQ0FEVixFQUVFMk4sRUFBRXpOLEtBQUYsQ0FBUUQsQ0FGVixFQUdFME4sRUFBRXpOLEtBQUYsQ0FBUWlHLE1BSFYsRUFJRXdILEVBQUV6TixLQUFGLENBQVF3UCxLQUpWO0FBTUEsVUFBTy9CLENBQVA7QUFDRCxFQVJEOztBQVVBOzs7Ozs7QUFNQW5PLFFBQU9XLFNBQVAsQ0FBaUJrUSxLQUFqQixHQUF5QixTQUFTQyxZQUFULENBQXNCM0MsQ0FBdEIsRUFBeUI7QUFDaEQsUUFBS2pILElBQUwsQ0FDRWlILEVBQUV6TixLQUFGLENBQVFGLENBRFYsRUFFRTJOLEVBQUV6TixLQUFGLENBQVFELENBRlYsRUFHRTBOLEVBQUV6TixLQUFGLENBQVF3RixLQUhWLEVBSUVpSSxFQUFFek4sS0FBRixDQUFRMEYsTUFKVixFQUtFK0gsRUFBRXpOLEtBQUYsQ0FBUXdQLEtBTFY7QUFPQSxVQUFPL0IsQ0FBUDtBQUNELEVBVEQ7O0FBV0E7Ozs7Ozs7OztBQVNBbk8sUUFBT1csU0FBUCxDQUFpQm9RLFVBQWpCLEdBQThCLFVBQVN2TSxFQUFULEVBQWFDLEVBQWIsRUFBaUJDLEVBQWpCLEVBQXFCQyxFQUFyQixFQUEwQztBQUFBLE9BQWpCcU0sS0FBaUIsdUVBQVgsU0FBVzs7QUFDdEUsUUFBSzlHLEdBQUwsQ0FBU2tHLFNBQVQ7QUFDQSxRQUFLbEcsR0FBTCxDQUFTK0csV0FBVCxHQUF1QkQsS0FBdkI7QUFDQSxRQUFLOUcsR0FBTCxDQUFTRyxNQUFULENBQWdCN0YsRUFBaEIsRUFBb0JDLEVBQXBCO0FBQ0EsUUFBS3lGLEdBQUwsQ0FBU2dILE1BQVQsQ0FBZ0J4TSxFQUFoQixFQUFvQkMsRUFBcEI7QUFDQSxRQUFLdUYsR0FBTCxDQUFTaUgsTUFBVDtBQUNELEVBTkQ7O0FBUUE7Ozs7OztBQU1BblIsUUFBT1csU0FBUCxDQUFpQnlRLFdBQWpCLEdBQStCLFVBQVM1TCxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDbEQsUUFBS3NMLFVBQUwsQ0FBZ0J2TCxLQUFLdEUsR0FBTCxDQUFTLEdBQVQsQ0FBaEIsRUFBK0JzRSxLQUFLdEUsR0FBTCxDQUFTLEdBQVQsQ0FBL0IsRUFBOEN1RSxLQUFLdkUsR0FBTCxDQUFTLEdBQVQsQ0FBOUMsRUFBNkR1RSxLQUFLdkUsR0FBTCxDQUFTLEdBQVQsQ0FBN0Q7QUFDQSxVQUFPLEtBQUssQ0FBWjtBQUNELEVBSEQ7O0FBS0FsQixRQUFPVyxTQUFQLENBQWlCMFEsY0FBakIsR0FBa0MsWUFBb0I7QUFBQSxxQ0FBUnBILE1BQVE7QUFBUkEsV0FBUTtBQUFBOztBQUFBLE9BQzdDcUgsVUFENkMsR0FDL0JySCxNQUQrQjs7O0FBR3BELE9BQUksQ0FBQ3FILFVBQUwsRUFBaUI7QUFDZixXQUFNLElBQUk5SSxLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNEOztBQUVELE9BQUl5QixPQUFPNUksTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNyQixXQUFNLElBQUltSCxLQUFKLENBQVUsbURBQVYsQ0FBTjtBQUNEOztBQVRtRCxPQVcxQ29ILEVBWDBDLEdBVzdCMEIsVUFYNkIsQ0FXN0M5USxDQVg2QztBQUFBLE9BV25DcVAsRUFYbUMsR0FXN0J5QixVQVg2QixDQVd0QzdRLENBWHNDOztBQVlwRCxRQUFLeUosR0FBTCxDQUFTa0csU0FBVDtBQUNBLFFBQUtsRyxHQUFMLENBQVNHLE1BQVQsQ0FBZ0J1RixFQUFoQixFQUFvQkMsRUFBcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckJvRCxPQXVCeEMwQixFQXZCd0MsR0F1QmxDdEgsTUF2QmtDO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBd0JwRCwwQkFBMkJzSCxFQUEzQiw4SEFBK0I7QUFBQTtBQUFBLFdBQWxCQyxFQUFrQixRQUFyQmhSLENBQXFCO0FBQUEsV0FBWGlSLEVBQVcsUUFBZGhSLENBQWM7O0FBQzdCLFlBQUt5SixHQUFMLENBQVNnSCxNQUFULENBQWdCTSxFQUFoQixFQUFvQkMsRUFBcEI7QUFDRDtBQTFCbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUE0QnBELFFBQUt2SCxHQUFMLENBQVNpSCxNQUFUO0FBQ0QsRUE3QkQ7O0FBK0JBOzs7Ozs7O0FBT0FuUixRQUFPVyxTQUFQLENBQWlCK1EsSUFBakIsR0FBd0IsVUFBU3hMLEtBQVQsRUFBZ0JFLE1BQWhCLEVBQW1EO0FBQUEsT0FBM0J1TCxRQUEyQix1RUFBbEIsRUFBa0I7QUFBQSxPQUFkekIsS0FBYyx1RUFBUixNQUFROztBQUN6RSxRQUFLaEcsR0FBTCxDQUFTa0csU0FBVDtBQUNBLFFBQUtsRyxHQUFMLENBQVMrRyxXQUFULEdBQXVCZixLQUF2Qjs7QUFFQSxRQUFLLElBQUkxUCxJQUFJLENBQWIsRUFBZ0JBLElBQUkwRixLQUFwQixFQUEyQjFGLEtBQUttUixRQUFoQyxFQUEwQztBQUN4QyxVQUFLekgsR0FBTCxDQUFTRyxNQUFULENBQWdCN0osQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQSxVQUFLMEosR0FBTCxDQUFTZ0gsTUFBVCxDQUFnQjFRLENBQWhCLEVBQW1CNEYsTUFBbkI7QUFDRDs7QUFFRCxRQUFLLElBQUkzRixJQUFJLENBQWIsRUFBZ0JBLElBQUkyRixNQUFwQixFQUE0QjNGLEtBQUtrUixRQUFqQyxFQUEyQztBQUN6QyxVQUFLekgsR0FBTCxDQUFTRyxNQUFULENBQWdCLENBQWhCLEVBQW1CNUosQ0FBbkI7QUFDQSxVQUFLeUosR0FBTCxDQUFTZ0gsTUFBVCxDQUFnQmhMLEtBQWhCLEVBQXVCekYsQ0FBdkI7QUFDRDs7QUFFRCxRQUFLeUosR0FBTCxDQUFTaUgsTUFBVDtBQUNELEVBZkQ7O0FBaUJBL1EsUUFBT0MsT0FBUCxHQUFpQkwsTUFBakIsQzs7Ozs7Ozs7QUM5SkE7Ozs7Ozs7O0FBUUEsS0FBTXFNLFNBQVMsbUJBQUF4TSxDQUFRLENBQVIsQ0FBZjtBQUNBLEtBQU15TSxRQUFRLG1CQUFBek0sQ0FBUSxDQUFSLENBQWQ7QUFDQSxLQUFNK1IsUUFBUSxtQkFBQS9SLENBQVEsR0FBUixDQUFkO0FBQ0EsS0FBTVMsUUFBUSxtQkFBQVQsQ0FBUSxDQUFSLENBQWQ7O0FBRUEsS0FBTWdTLFdBQVc7QUFDZkMsUUFBSyxFQUFDdFIsR0FBRyxDQUFKLEVBQU9DLEdBQUcsQ0FBVixFQURVO0FBRWZzUixVQUFPLEVBQUN2UixHQUFHLEdBQUosRUFBU0MsR0FBRyxHQUFaLEVBRlE7QUFHZnVSLFdBQVEsTUFITztBQUlmQyxhQUFVO0FBSkssRUFBakI7O0FBT0EsS0FBTUMsZ0JBQWdCTixNQUFNTyxJQUFOLEVBQXRCO0FBQ0E7QUFDQSxLQUFNbFMsTUFBTTRELE9BQU9qRCxNQUFQLENBQWNzUixhQUFkLENBQVo7O0FBRUFqUyxLQUFJa1MsSUFBSixHQUFXLFNBQVNDLFNBQVQsQ0FBbUJwRixJQUFuQixFQUF5QjtBQUNsQzs7QUFFQSxPQUFJLENBQUNBLEtBQUtxRixLQUFWLEVBQWlCO0FBQ2YsV0FBTSxJQUFJN0osS0FBSixDQUFVLDZCQUFWLENBQU47QUFDRDs7QUFFRCxRQUFLOEosTUFBTCxHQUFjdEYsS0FBS3FGLEtBQUwsQ0FBV0YsSUFBWCxDQUFnQjtBQUM1QkksVUFBS3ZGLEtBQUt1RixHQUFMLElBQVk7QUFEVyxJQUFoQixDQUFkOztBQUlBLFFBQUtDLE1BQUwsR0FBY04sYUFBZDtBQUNBLFFBQUtPLE1BQUwsR0FBYyxFQUFkOztBQUVBOzs7Ozs7Ozs7OztBQVdBLFFBQUtDLFNBQUwsR0FBaUI7QUFDZjtBQUNBO0FBQ0FsSSxTQUhlLGdCQUdWbUksQ0FIVSxFQUdQakksQ0FITyxFQUdKa0ksQ0FISSxFQUdEO0FBQUU7QUFDZCxjQUFPRCxJQUFJQyxDQUFKLEdBQVFsSSxDQUFmO0FBQ0QsTUFMYztBQU1mbUksZUFOZSxzQkFNSkYsQ0FOSSxFQU1EakksQ0FOQyxFQU1Fa0ksQ0FORixFQU1LO0FBQUU7QUFDcEIsY0FBT0QsS0FBS0MsSUFBSUEsQ0FBVCxJQUFjbEksQ0FBckI7QUFDRCxNQVJjO0FBU2ZvSSxnQkFUZSx1QkFTSEgsQ0FURyxFQVNBakksQ0FUQSxFQVNHa0ksQ0FUSCxFQVNNO0FBQUU7QUFDckIsY0FBT0QsS0FBS0MsS0FBSyxJQUFJQSxDQUFULENBQUwsSUFBb0JsSSxDQUEzQjtBQUNELE1BWGM7QUFZZnFJLGtCQVplLHlCQVlESixDQVpDLEVBWUVqSSxDQVpGLEVBWUtrSSxDQVpMLEVBWVE7QUFDckIsV0FBSSxDQUFDQSxLQUFHLENBQUosSUFBUyxDQUFiLEVBQWdCO0FBQ2QsZ0JBQU9ELElBQUUsQ0FBRixJQUFPQyxJQUFFQSxDQUFULElBQWNsSSxDQUFyQixDQURjLENBQ1U7QUFDeEI7QUFDRDtBQUNELGNBQU8sQ0FBQ2lJLENBQUQsR0FBRyxDQUFILElBQVMsRUFBRUMsQ0FBSCxJQUFPQSxJQUFFLENBQVQsSUFBYyxDQUF0QixJQUEyQmxJLENBQWxDLENBTHFCLENBS2dCO0FBQ3JDO0FBQ0Q7QUFuQmMsSUFBakI7O0FBc0JBLFFBQUs0SCxNQUFMLENBQVlVLEVBQVosQ0FBZSxNQUFmLEVBQXVCLEtBQUtDLFlBQTVCLEVBQTBDLElBQTFDOztBQUVBLFVBQU8sSUFBUDtBQUNELEVBbEREOztBQW9EQTs7O0FBR0FoVCxLQUFJZ1QsWUFBSixHQUFtQixTQUFTQyxXQUFULEdBQXVCO0FBQ3hDLFFBQUtULE1BQUwsQ0FBWVUsT0FBWixDQUFvQixVQUFDQyxLQUFELEVBQVc7QUFDN0IsU0FBSUEsTUFBTUMsTUFBTixDQUFhQyxXQUFqQixFQUE4QjtBQUM1QkYsYUFBTTdGLE1BQU4sQ0FBYTZGLE1BQU1DLE1BQW5CO0FBQ0Q7O0FBRUQsU0FBSSxDQUFDRCxNQUFNQyxNQUFOLENBQWFDLFdBQWQsSUFDQUYsTUFBTUMsTUFBTixDQUFhRSxLQUFiLEtBQXVCLE1BRDNCLEVBQ21DO0FBQ2pDSCxhQUFNN0YsTUFBTixDQUFhNkYsTUFBTUMsTUFBbkI7QUFDQUQsYUFBTUksTUFBTjtBQUNEOztBQUVELFNBQUlKLE1BQU1DLE1BQU4sQ0FBYUksT0FBakIsRUFBMEI7QUFDeEJwRSxlQUFRQyxHQUFSLENBQVksd0JBQVo7QUFDRDtBQUNGLElBZEQ7QUFlRCxFQWhCRDs7QUFrQkFyUCxLQUFJVyxNQUFKLEdBQWEsWUFBa0I7QUFBQSxPQUFUb00sSUFBUyx1RUFBSixFQUFJOztBQUM3QixPQUFNMEcsY0FBYzdQLE9BQU9qRCxNQUFQLENBQWNYLEdBQWQsQ0FBcEI7QUFDQSxPQUFNMFQsUUFBUTlQLE9BQU8rUCxNQUFQLENBQWN0SCxNQUFNdUYsUUFBTixDQUFkLEVBQStCN0UsSUFBL0IsQ0FBZDtBQUY2QixPQUd0QmlGLFFBSHNCLEdBR2MwQixLQUhkLENBR3RCMUIsUUFIc0I7QUFBQSxPQUdaSCxHQUhZLEdBR2M2QixLQUhkLENBR1o3QixHQUhZO0FBQUEsT0FHUEMsS0FITyxHQUdjNEIsS0FIZCxDQUdQNUIsS0FITztBQUFBLE9BR0FDLE1BSEEsR0FHYzJCLEtBSGQsQ0FHQTNCLE1BSEE7QUFBQSxPQUdRNkIsRUFIUixHQUdjRixLQUhkLENBR1FFLEVBSFI7OztBQUs3QixPQUFJLENBQUNILFlBQVloQixTQUFaLENBQXNCVixNQUF0QixDQUFMLEVBQW9DO0FBQ2xDLFdBQU0sSUFBSXhKLEtBQUosMEJBQWlDd0osTUFBakMsc0JBQU47QUFDRDs7QUFFRCxPQUFJNkIsRUFBSixFQUFRO0FBQ04sU0FBSSxLQUFLcEIsTUFBTCxDQUFZcUIsSUFBWixDQUFpQixVQUFDdFQsQ0FBRDtBQUFBLGNBQU9BLEVBQUVxVCxFQUFGLEtBQVNBLEVBQWhCO0FBQUEsTUFBakIsQ0FBSixFQUEwQztBQUN4QyxhQUFNLElBQUlyTCxLQUFKLHlCQUFnQ3FMLEVBQWhDLHNCQUFOO0FBQ0Q7O0FBRURILGlCQUFZRyxFQUFaLEdBQWlCQSxFQUFqQjtBQUNELElBTkQsTUFNTztBQUNMSCxpQkFBWUcsRUFBWixHQUFpQixLQUFLcEIsTUFBTCxDQUFZcFIsTUFBWixHQUFxQixDQUF0QztBQUNEOztBQUVEcVMsZUFBWWhULEtBQVosR0FBb0I0TCxNQUFNd0YsR0FBTixDQUFwQjtBQUNBNEIsZUFBWTVCLEdBQVosR0FBa0JBLEdBQWxCO0FBQ0E0QixlQUFZM0IsS0FBWixHQUFvQkEsS0FBcEI7QUFDQTJCLGVBQVl6QixRQUFaLEdBQXVCQSxRQUF2QjtBQUNBeUIsZUFBWTFCLE1BQVosR0FBcUIwQixZQUFZaEIsU0FBWixDQUFzQlYsTUFBdEIsQ0FBckI7QUFDQTBCLGVBQVlMLE1BQVosR0FBcUIsS0FBS2YsTUFBTCxDQUFZeUIsV0FBWixDQUF3QjtBQUMzQ0YsU0FBSUgsWUFBWUcsRUFEMkI7QUFFM0M1QixlQUFVeUIsWUFBWXpCO0FBRnFCLElBQXhCLENBQXJCOztBQUtBLFFBQUtRLE1BQUwsQ0FBWWxILElBQVosQ0FBaUJtSSxXQUFqQjtBQUNBLFVBQU9BLFdBQVA7QUFDRCxFQS9CRDs7QUFpQ0F6VCxLQUFJaUIsR0FBSixHQUFVLFVBQVMyUyxFQUFULEVBQWE7QUFDckIsT0FBSSxLQUFLcEIsTUFBTCxDQUFZcFIsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM1QixZQUFPcEIsSUFBSSxDQUFKLENBQVA7QUFDRDs7QUFFRCxRQUFLLElBQUlxSyxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzhJLEtBQUwsQ0FBVy9SLE1BQS9CLEVBQXVDaUosR0FBdkMsRUFBNEM7QUFDMUMsU0FBSSxLQUFLOEksS0FBTCxDQUFXOUksQ0FBWCxFQUFjdUosRUFBZCxLQUFxQkEsRUFBekIsRUFBNkI7QUFDM0IsY0FBTyxLQUFLVCxLQUFMLENBQVc5SSxDQUFYLENBQVA7QUFDRDtBQUNGOztBQUVELFVBQU8sS0FBUDtBQUNELEVBWkQ7O0FBY0FySyxLQUFJK1QsTUFBSixHQUFhLFlBQXFCO0FBQUEsT0FBWkgsRUFBWSx1RUFBVCxLQUFLQSxFQUFJOztBQUNoQyxPQUFNVCxRQUFRLEtBQUtsUyxHQUFMLENBQVMyUyxFQUFULENBQWQ7O0FBRUEsT0FBSSxDQUFDLEtBQUtKLE9BQVYsRUFBbUI7QUFDakJMLFdBQU1hLElBQU47QUFDRDs7QUFFRDtBQUNBLFFBQUtqSCxJQUFMLENBQVU4RSxHQUFWLEdBQWdCLEtBQUs5RSxJQUFMLENBQVUrRSxLQUExQjtBQUNBLFFBQUsvRSxJQUFMLENBQVUrRSxLQUFWLEdBQWtCLEtBQUsvRSxJQUFMLENBQVVrSCxnQkFBNUI7O0FBRUFkLFNBQU1lLEtBQU47QUFDRCxFQVpEOztBQWNBbFUsS0FBSW1VLFFBQUosR0FBZSxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLE9BQUksQ0FBQyxLQUFLM0IsTUFBTCxDQUFZcFIsTUFBakIsRUFBeUI7QUFDdkIsV0FBTSxJQUFJbUgsS0FBSixDQUFVLDhCQUFWLENBQU47QUFDRDs7QUFFRCxRQUFLaUssTUFBTCxDQUFZVSxPQUFaLENBQW9CLFVBQUM1SixDQUFELEVBQU87QUFDekJBLE9BQUU4SixNQUFGLENBQVNjLEtBQVQ7QUFDRCxJQUZEOztBQUlBLFFBQUs3QixNQUFMLENBQVk2QixLQUFaO0FBQ0QsRUFWRDs7QUFZQTs7O0FBR0FsVSxLQUFJb1UsT0FBSixHQUFjLFNBQVNBLE9BQVQsR0FBbUI7QUFDL0IsT0FBSSxLQUFLNUIsTUFBTCxDQUFZcFIsTUFBaEIsRUFBd0I7QUFDdEIsV0FBTSxJQUFJbUgsS0FBSixDQUFVLDZCQUFWLENBQU47QUFDRDs7QUFFRCxRQUFLOEosTUFBTCxDQUFZMkIsSUFBWjtBQUNELEVBTkQ7O0FBUUE7Ozs7O0FBS0FoVSxLQUFJcVUsS0FBSixHQUFZLFNBQVNBLEtBQVQsQ0FBZXJDLFFBQWYsRUFBeUI7QUFBQTs7QUFDbkMsUUFBS29CLE1BQUwsQ0FBWVksSUFBWjtBQUNBLFFBQUtuQyxHQUFMLEdBQVd4RixNQUFNLEtBQUs1TCxLQUFYLENBQVg7QUFDQTZILGNBQVc7QUFBQSxZQUFNLE1BQUs4SyxNQUFMLENBQVljLEtBQVosRUFBTjtBQUFBLElBQVgsRUFBc0NsQyxRQUF0QztBQUNBLFVBQU8sSUFBUDtBQUNELEVBTEQ7O0FBT0E7Ozs7QUFJQWhTLEtBQUlnVSxJQUFKLEdBQVcsU0FBU0EsSUFBVCxHQUFnQjtBQUN6QixRQUFLWixNQUFMLENBQVlZLElBQVo7QUFDQSxVQUFPLElBQVA7QUFDRCxFQUhEOztBQUtBOzs7O0FBSUFoVSxLQUFJc1UsTUFBSixHQUFhLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0IsUUFBS04sSUFBTDtBQUNBLFFBQUszQixNQUFMLENBQVlrQyxXQUFaLENBQXdCLEtBQUtuQixNQUFMLENBQVlRLEVBQXBDO0FBQ0EsUUFBS25ULEtBQUwsR0FBYSxLQUFLcVIsS0FBbEI7QUFDQSxVQUFPLElBQVA7QUFDRCxFQUxEOztBQU9BOVIsS0FBSXVULE1BQUosR0FBYSxTQUFTQSxNQUFULEdBQTRCO0FBQUE7O0FBQUEsT0FBWkssRUFBWSx1RUFBVCxLQUFLQSxFQUFJOztBQUN2QyxRQUFLcEIsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWWdDLE1BQVosQ0FBbUIsVUFBQ2xMLENBQUQsRUFBTztBQUN0QyxTQUFJQSxFQUFFc0ssRUFBRixLQUFTQSxFQUFiLEVBQWlCO0FBQ2YsY0FBS3ZCLE1BQUwsQ0FBWWtDLFdBQVosQ0FBd0JqTCxFQUFFOEosTUFBRixDQUFTUSxFQUFqQztBQUNBLGNBQU8sS0FBUDtBQUNEOztBQUVELFlBQU8sSUFBUDtBQUNELElBUGEsQ0FBZDtBQVFELEVBVEQ7O0FBV0E1VCxLQUFJc04sTUFBSixHQUFhLFNBQVNBLE1BQVQsQ0FBZ0I4RixNQUFoQixFQUF3QjtBQUNuQyxPQUFJLENBQUNBLE9BQU9DLFdBQVosRUFBeUI7QUFDdkIsVUFBSzVTLEtBQUwsR0FBYW1ELE9BQU8rUCxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFLN0IsS0FBdkIsQ0FBYjtBQUNBLFlBQU8sS0FBS3JSLEtBQVo7QUFDRDs7QUFKa0MsT0FNWnVDLEtBTlksR0FNT29RLE1BTlAsQ0FNNUJxQixjQU40QjtBQUFBLE9BTUx6QyxRQU5LLEdBTU9vQixNQU5QLENBTUxwQixRQU5LOztBQU9uQyxPQUFNMEMsT0FBT3JVLE1BQU13RCxTQUFOLENBQWdCYixLQUFoQixFQUF1QixDQUF2QixFQUEwQmdQLFNBQVMyQyxFQUFuQyxDQUFiOztBQUVBLFFBQUssSUFBSUMsR0FBVCxJQUFnQixLQUFLL0MsR0FBckIsRUFBMEI7QUFDeEIsU0FBSSxLQUFLQSxHQUFMLENBQVM3USxjQUFULENBQXdCNFQsR0FBeEIsQ0FBSixFQUFrQztBQUNoQyxXQUFJLEtBQUsvQyxHQUFMLENBQVMrQyxHQUFULE1BQWtCckYsU0FBbEIsSUFBK0IsS0FBS3VDLEtBQUwsQ0FBVzhDLEdBQVgsTUFBb0JyRixTQUF2RCxFQUFrRTtBQUNoRSxjQUFLOU8sS0FBTCxDQUFXbVUsR0FBWCxJQUFrQixLQUFLN0MsTUFBTCxDQUFZLEtBQUtELEtBQUwsQ0FBVzhDLEdBQVgsSUFBa0IsS0FBSy9DLEdBQUwsQ0FBUytDLEdBQVQsQ0FBOUIsRUFBNkMsS0FBSy9DLEdBQUwsQ0FBUytDLEdBQVQsQ0FBN0MsRUFBNERGLElBQTVELENBQWxCO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFVBQU8sS0FBS2pVLEtBQVo7QUFDRCxFQWxCRDs7QUFvQkFOLFFBQU9DLE9BQVAsR0FBaUJKLEdBQWpCOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hQQTs7Ozs7QUFLQSxLQUFNNlUsUUFBUWpSLE9BQU9qRCxNQUFQLENBQWMsSUFBZCxDQUFkOztBQUVBOzs7Ozs7QUFNQWtVLE9BQU0zQyxJQUFOLEdBQWEsU0FBUzRDLFNBQVQsR0FBcUI7QUFDaEMsUUFBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFVBQU8sSUFBUDtBQUNELEVBSEQ7O0FBS0E7Ozs7OztBQU1BRixPQUFNRyxJQUFOLEdBQWEsU0FBU0EsSUFBVCxHQUF1QjtBQUFBLHFDQUFOdE4sSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQUEsT0FDM0JpSyxLQUQyQixHQUNUakssSUFEUztBQUFBLE9BQ2pCdU4sSUFEaUIsR0FDVHZOLElBRFM7OztBQUdsQyxPQUFJLENBQUNpSyxLQUFMLEVBQVk7QUFDVixXQUFNLElBQUl1RCxTQUFKLENBQWMsd0NBQWQsQ0FBTjtBQUNEOztBQUVELFFBQUtILFNBQUwsQ0FBZXBELEtBQWYsSUFBd0IsS0FBS29ELFNBQUwsQ0FBZXBELEtBQWYsS0FBeUIsRUFBakQ7O0FBRUEsT0FBSSxLQUFLb0QsU0FBTCxDQUFlcEQsS0FBZixFQUFzQnZRLE1BQTFCLEVBQWtDO0FBQ2hDLFVBQUsyVCxTQUFMLENBQWVwRCxLQUFmLEVBQXNCdUIsT0FBdEIsQ0FBOEIsVUFBQ2pFLFFBQUQsRUFBYztBQUMxQ0Esb0RBQVlnRyxJQUFaO0FBQ0QsTUFGRDtBQUdEOztBQUVELFVBQU8sSUFBUDtBQUNELEVBaEJEOztBQWtCQTs7Ozs7Ozs7QUFRQUosT0FBTTlCLEVBQU4sR0FBVyxTQUFTQSxFQUFULENBQVlwQixLQUFaLEVBQW1Cd0QsRUFBbkIsRUFBdUIxTixPQUF2QixFQUFnQztBQUFBOztBQUN6QyxPQUFJLENBQUNrSyxLQUFELElBQVUsQ0FBQ3dELEVBQWYsRUFBbUI7QUFDakIsV0FBTSxJQUFJRCxTQUFKLENBQWMsd0NBQWQsQ0FBTjtBQUNEOztBQUVELE9BQUl6TixPQUFKLEVBQWE7QUFDWDBOLFVBQUtBLEdBQUdDLElBQUgsQ0FBUTNOLE9BQVIsQ0FBTDtBQUNEOztBQUVELE9BQU00TixTQUFTMUQsTUFBTTJELEtBQU4sQ0FBWSxHQUFaLENBQWY7O0FBRUEsUUFBS1AsU0FBTCxHQUFpQixLQUFLQSxTQUFMLElBQWtCLEVBQW5DOztBQUVBTSxVQUFPbkMsT0FBUCxDQUFlLFVBQUNxQyxDQUFELEVBQU87QUFDcEIsV0FBS1IsU0FBTCxDQUFlUSxDQUFmLElBQW9CLE1BQUtSLFNBQUwsQ0FBZVEsQ0FBZixLQUFxQixFQUF6Qzs7QUFFQSxTQUFJLENBQUMsTUFBS1IsU0FBTCxDQUFlUSxDQUFmLEVBQWtCblUsTUFBdkIsRUFBK0I7QUFDN0IsYUFBSzJULFNBQUwsQ0FBZVEsQ0FBZixFQUFrQmpLLElBQWxCLENBQXVCNkosRUFBdkI7QUFDQTtBQUNEOztBQUVEO0FBQ0E7QUFDQSxZQUFPLE1BQUtKLFNBQUwsQ0FBZVEsQ0FBZixFQUFrQkMsS0FBbEIsQ0FBd0IsVUFBQ0MsRUFBRCxFQUFLcEwsQ0FBTCxFQUFRcUwsR0FBUixFQUFnQjtBQUM3QyxjQUFPRCxPQUFPTixFQUFkO0FBQ0QsTUFGTSxJQUVGLE1BQUtKLFNBQUwsQ0FBZVEsQ0FBZixFQUFrQmpLLElBQWxCLENBQXVCNkosRUFBdkIsQ0FGRSxHQUdML0YsUUFBUXVHLElBQVIsQ0FBYSwwQkFBd0JSLEVBQXhCLG9DQUNYLHlCQURGLENBSEY7QUFLRCxJQWZEOztBQWlCQSxVQUFPLElBQVA7QUFDRCxFQS9CRDs7QUFpQ0E7Ozs7Ozs7QUFPQU4sT0FBTWUsR0FBTixHQUFZLFNBQVNBLEdBQVQsR0FBc0I7QUFBQSxzQ0FBTmxPLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUFBLE9BQ3pCaUssS0FEeUIsR0FDWmpLLElBRFk7QUFBQSxPQUNsQnlOLEVBRGtCLEdBQ1p6TixJQURZOzs7QUFHaEMsT0FBSSxDQUFDaUssS0FBTCxFQUFZO0FBQ1YsVUFBS29ELFNBQUwsR0FBaUIsRUFBakI7QUFDQSxZQUFPLElBQVA7QUFDRDs7QUFFRCxPQUFJQSxZQUFZLEtBQUtBLFNBQUwsQ0FBZXBELEtBQWYsQ0FBaEI7O0FBRUEsT0FBSSxDQUFDb0QsU0FBTCxFQUFnQjtBQUNkM0YsYUFBUXVHLElBQVIsNEJBQXNDaEUsS0FBdEM7QUFDQSxZQUFPLElBQVA7QUFDRDs7QUFFRCxPQUFJLENBQUN3RCxFQUFMLEVBQVM7QUFDUCxZQUFPLEtBQUtKLFNBQUwsQ0FBZXBELEtBQWYsQ0FBUDtBQUNBLFlBQU8sSUFBUDtBQUNEOztBQUVELFFBQUtvRCxTQUFMLENBQWVwRCxLQUFmLElBQXdCb0QsVUFBVVAsTUFBVixDQUFpQixVQUFDaUIsRUFBRDtBQUFBLFlBQVFBLE9BQU9OLEVBQWY7QUFBQSxJQUFqQixDQUF4Qjs7QUFFQSxVQUFPLElBQVA7QUFDRCxFQXZCRDs7QUF5QkE7Ozs7O0FBS0FOLE9BQU1nQixTQUFOLEdBQWtCLFNBQVNBLFNBQVQsR0FBNEI7QUFBQSxzQ0FBTm5PLElBQU07QUFBTkEsU0FBTTtBQUFBOztBQUFBLE9BQ3JDaUssS0FEcUMsR0FDNUJqSyxJQUQ0Qjs7O0FBRzVDLE9BQUksQ0FBQ2lLLEtBQUwsRUFBWTtBQUNWLFlBQU8vTixPQUFPa1MsSUFBUCxDQUFZLEtBQUtmLFNBQWpCLENBQVA7QUFDRDs7QUFFRCxPQUFJLENBQUMsS0FBS0EsU0FBTCxDQUFlcEQsS0FBZixDQUFMLEVBQTRCO0FBQzFCdkMsYUFBUXVHLElBQVIsNEJBQXNDaEUsS0FBdEM7QUFDRDs7QUFFRCxVQUFPLEtBQUtvRCxTQUFMLENBQWVwRCxLQUFmLENBQVA7QUFDRCxFQVpEOztBQWNBa0QsT0FBTWtCLElBQU4sR0FBYSxTQUFTQSxJQUFULEdBQXVCO0FBQ2xDLE9BQU1oVSxPQUFPLElBQWI7O0FBRGtDLHNDQUFOMkYsSUFBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQUEsT0FFM0JpSyxLQUYyQixHQUVMakssSUFGSztBQUFBLE9BRXBCeU4sRUFGb0IsR0FFTHpOLElBRks7QUFBQSxPQUVoQkQsT0FGZ0IsR0FFTEMsSUFGSzs7O0FBSWxDLE9BQU1zTyxPQUFPLFNBQVNBLElBQVQsR0FBZ0I7QUFDM0JiLFFBQUdDLElBQUgsQ0FBUTNOLE9BQVI7QUFDQTFGLFVBQUs2VCxHQUFMLENBQVNqRSxLQUFULEVBQWdCcUUsSUFBaEI7QUFDRCxJQUhEOztBQUtBLFFBQUtqRCxFQUFMLENBQVFwQixLQUFSLEVBQWVxRSxJQUFmLEVBQXFCdk8sT0FBckI7QUFDRCxFQVZEOztBQVlBO0FBQ0FvTixPQUFNb0IsY0FBTixHQUF1QnBCLE1BQU1xQixrQkFBTixHQUEyQnJCLE1BQU1lLEdBQXhEO0FBQ0FmLE9BQU1zQixJQUFOLEdBQWF0QixNQUFNRyxJQUFuQjtBQUNBSCxPQUFNdUIsV0FBTixHQUFvQnZCLE1BQU05QixFQUExQjtBQUNBOEIsT0FBTTVULEdBQU4sR0FBWTRULE1BQU1nQixTQUFsQjs7QUFFQTFWLFFBQU9DLE9BQVAsR0FBaUJ5VSxLQUFqQixDOzs7Ozs7OztBQ3hKQSxLQUFNekIsU0FBUyxtQkFBQXhULENBQVEsR0FBUixDQUFmO0FBQ0EsS0FBTStSLFFBQVEsbUJBQUEvUixDQUFRLEdBQVIsRUFBbUJzUyxJQUFuQixFQUFkO0FBQ0EsS0FBTWpTLFFBQVEyRCxPQUFPakQsTUFBUCxDQUFjZ1IsS0FBZCxDQUFkO0FBQ0EsS0FBTTBFLFVBQVUsRUFBaEI7QUFDQSxLQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztBQUVBOzs7Ozs7QUFNQXJXLE9BQU1pUyxJQUFOLEdBQWEsU0FBU3FFLFNBQVQsR0FBNEI7QUFBQSxPQUFUeEosSUFBUyx1RUFBSixFQUFJOztBQUN2Q0EsVUFBT25KLE9BQU8rUCxNQUFQLENBQWM7QUFDbkJyQixVQUFLK0Q7QUFEYyxJQUFkLEVBRUp0SixJQUZJLENBQVA7O0FBSUEsUUFBS3lKLE1BQUwsR0FBYyxFQUFkO0FBQ0EsUUFBS2pFLE1BQUwsR0FBY1osS0FBZDs7QUFFQTtBQUNBLFFBQUs4RSxLQUFMLEdBQWEsQ0FBQyxDQUFkOztBQUVBO0FBQ0EsUUFBS0MsR0FBTCxHQUFXLENBQVg7O0FBRUE7QUFDQSxRQUFLQyxTQUFMO0FBQ0EsUUFBS0MsUUFBTDtBQUNBLFFBQUtDLFFBQUw7QUFDQSxRQUFLcEMsY0FBTCxHQUFzQixDQUF0Qjs7QUFFQTtBQUNBLFFBQUtuQyxHQUFMLEdBQVd2RixLQUFLdUYsR0FBTCxHQUFXK0QsT0FBWCxHQUNUQSxPQURTLEdBRVJ0SixLQUFLdUYsR0FBTCxJQUFZK0QsT0FGZjs7QUFJQSxVQUFPLElBQVA7QUFDRCxFQTFCRDs7QUE0QkE7Ozs7O0FBS0FwVyxPQUFNaVUsS0FBTixHQUFjLFNBQVNBLEtBQVQsR0FBaUI7QUFDN0IsT0FBSSxLQUFLNUIsR0FBTCxHQUFXLEVBQWYsRUFBbUI7QUFDakIsV0FBTSxJQUFJL0osS0FBSixDQUFVLDJCQUFWLENBQU47QUFDRDs7QUFFRCxPQUFJLENBQUMsS0FBSytKLEdBQU4sS0FBY3dFLEdBQWxCLEVBQXVCO0FBQ3JCLFdBQU0sSUFBSXZPLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0Q7O0FBRUQsUUFBSytKLEdBQUwsR0FBVyxPQUFPLEtBQUtBLEdBQXZCO0FBQ0EsUUFBS3FFLFNBQUwsR0FBaUJJLFlBQVk5TyxHQUFaLEVBQWpCO0FBQ0EsUUFBSzJPLFFBQUwsR0FBZ0IsS0FBS0QsU0FBckI7O0FBRUE7QUFDQSxRQUFLSyxJQUFMLENBQVUsS0FBS0wsU0FBZjtBQUNBLFVBQU8sSUFBUDtBQUNELEVBaEJEOztBQWtCQTs7Ozs7QUFLQTFXLE9BQU0rVyxJQUFOLEdBQWEsU0FBU0EsSUFBVCxDQUFjQyxPQUFkLEVBQXVCO0FBQ2xDLFFBQUtQLEdBQUwsR0FBV1Esc0JBQXNCRixLQUFLNUIsSUFBTCxDQUFVLElBQVYsQ0FBdEIsQ0FBWDs7QUFFQSxPQUFJcFMsUUFBUWlVLFVBQVUsS0FBS0wsUUFBM0I7QUFDQSxRQUFLbkMsY0FBTCxHQUFzQndDLFVBQVUsS0FBS04sU0FBckM7O0FBRUEsT0FBSTNULFFBQVEsS0FBS3NQLEdBQWpCLEVBQXNCO0FBQ3BCLFVBQUttRSxLQUFMOztBQUVBLFVBQUtVLFVBQUwsQ0FBZ0I7QUFDZEYsdUJBRGM7QUFFZGpVLG1CQUZjO0FBR2R5VCxjQUFPLEtBQUtBLEtBSEU7QUFJZEcsaUJBQVUsS0FBS0EsUUFKRDtBQUtkUSxtQkFBWSxLQUFLVCxTQUxIO0FBTWRsQyx1QkFBZ0IsS0FBS0E7QUFOUCxNQUFoQjs7QUFTQSxVQUFLbUMsUUFBTCxHQUFnQkssVUFBV2pVLFFBQVEsS0FBS3NQLEdBQXhDO0FBQ0Q7O0FBRUQsUUFBSzBDLElBQUwsQ0FBVSxRQUFWOztBQUVBLFVBQU8sSUFBUDtBQUNELEVBeEJEOztBQTBCQTs7OztBQUlBL1UsT0FBTStULElBQU4sR0FBYSxTQUFTcUQsU0FBVCxHQUFxQjtBQUNoQ0Msd0JBQXFCLEtBQUtaLEdBQTFCOztBQUVBO0FBQ0EsUUFBS0csUUFBTCxHQUFnQkUsWUFBWTlPLEdBQVosRUFBaEI7QUFDQSxRQUFLd00sY0FBTCxJQUF1QixLQUFLb0MsUUFBTCxHQUFnQixLQUFLRixTQUE1QztBQUNBLFFBQUtZLFdBQUw7O0FBRUEsUUFBS3ZDLElBQUwsQ0FBVSxTQUFWO0FBQ0EsVUFBTyxJQUFQO0FBQ0QsRUFWRDs7QUFZQTs7Ozs7O0FBTUEvVSxPQUFNa1gsVUFBTixHQUFtQixTQUFTQSxVQUFULENBQW9CMVcsS0FBcEIsRUFBMkI7QUFDNUMsT0FBSSxDQUFDLEtBQUsrVixNQUFMLENBQVlwVixNQUFqQixFQUF5Qjs7QUFFekIsUUFBS29WLE1BQUwsQ0FBWXRELE9BQVosQ0FBb0IsVUFBQ3NFLEtBQUQsRUFBUWYsS0FBUixFQUFrQjtBQUNwQ2UsV0FBTUMsS0FBTixDQUFZaFgsS0FBWjtBQUNELElBRkQ7O0FBSUEsUUFBS3VVLElBQUwsQ0FBVSxNQUFWO0FBQ0EsVUFBTyxJQUFQO0FBQ0QsRUFURDs7QUFXQS9VLE9BQU02VCxXQUFOLEdBQW9CLFNBQVNBLFdBQVQsQ0FBcUIvRyxJQUFyQixFQUEyQjtBQUM3QyxPQUFJLENBQUNBLElBQUwsRUFBVztBQUNULFdBQU0sSUFBSXhFLEtBQUosQ0FBVSxpQ0FBVixDQUFOO0FBQ0Q7O0FBSDRDLE9BS3RDcUwsRUFMc0MsR0FLdEI3RyxJQUxzQixDQUt0QzZHLEVBTHNDO0FBQUEsT0FLbEM1QixRQUxrQyxHQUt0QmpGLElBTHNCLENBS2xDaUYsUUFMa0M7O0FBTTdDLE9BQU0wRixZQUFZWCxZQUFZOU8sR0FBWixFQUFsQjs7QUFFQSxPQUFNdVAsUUFBUTVULE9BQU9qRCxNQUFQLENBQWN5UyxNQUFkLEVBQ1hsQixJQURXLENBQ04sRUFBQ3dGLG9CQUFELEVBQVk5RCxNQUFaLEVBQWdCNUIsa0JBQWhCLEVBRE0sQ0FBZDs7QUFHQSxPQUFJNEIsRUFBSixFQUFRO0FBQ04sVUFBSzRDLE1BQUwsQ0FBWWxMLElBQVosQ0FBaUJrTSxLQUFqQjtBQUNBLFlBQU9BLEtBQVA7QUFDRDs7QUFFREEsU0FBTTVELEVBQU4sR0FBVyxLQUFLNEMsTUFBTCxDQUFZbEwsSUFBWixDQUFpQmtNLEtBQWpCLENBQVg7QUFDQSxVQUFPQSxLQUFQO0FBQ0QsRUFsQkQ7O0FBb0JBdlgsT0FBTXNVLFdBQU4sR0FBb0IsU0FBU0EsV0FBVCxDQUFxQlgsRUFBckIsRUFBeUI7QUFDM0MsUUFBSzRDLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVloQyxNQUFaLENBQW1CLFVBQUNnRCxLQUFELEVBQVc7QUFDMUMsU0FBSUEsTUFBTTVELEVBQU4sS0FBYUEsRUFBakIsRUFBcUI7QUFDbkIsY0FBTyxJQUFQO0FBQ0Q7QUFDRDRELFdBQU10QixrQkFBTjtBQUNBLFlBQU8sS0FBUDtBQUNELElBTmEsQ0FBZDtBQU9ELEVBUkQ7O0FBVUFqVyxPQUFNc1gsV0FBTixHQUFvQixTQUFTQSxXQUFULEdBQXVCO0FBQ3pDLE9BQUksS0FBS2YsTUFBTCxDQUFZcFYsTUFBaEIsRUFBd0IsS0FBS29WLE1BQUwsR0FBYyxFQUFkO0FBQ3pCLEVBRkQ7O0FBSUF2VyxPQUFNMFgsS0FBTixHQUFjLFlBQVc7QUFDdkIsUUFBSzNELElBQUw7QUFDQSxRQUFLdUQsV0FBTDtBQUNBLFFBQUtyQixrQkFBTDtBQUNBLFFBQUtRLEdBQUwsR0FBVyxDQUFYO0FBQ0QsRUFMRDs7QUFPQXpXLE9BQU0yWCxlQUFOLEdBQXdCM1gsTUFBTXNYLFdBQTlCOztBQUVBcFgsUUFBT0MsT0FBUCxHQUFpQkgsS0FBakIsQzs7Ozs7Ozs7QUMxS0EsS0FBTTBSLFFBQVEsbUJBQUEvUixDQUFRLEdBQVIsQ0FBZDtBQUNBLEtBQU15VyxVQUFVLE9BQUssRUFBckI7QUFDQSxLQUFNblcsU0FBUzBELE9BQU9qRCxNQUFQLENBQWNnUixLQUFkLENBQWY7QUFDQSxLQUFNMkIsUUFBUTtBQUNadUUsWUFBUyxTQURHO0FBRVpDLFlBQVMsU0FGRztBQUdaQyxTQUFNO0FBSE0sRUFBZDs7QUFPQTdYLFFBQU9nUyxJQUFQLEdBQWMsU0FBU0EsSUFBVCxPQUtYO0FBQUEsNkJBSkR3RixTQUlDO0FBQUEsT0FKREEsU0FJQyxrQ0FKU1gsWUFBWTlPLEdBQVosRUFJVDtBQUFBLE9BSEQyTCxFQUdDLFFBSERBLEVBR0M7QUFBQSw0QkFGRDVCLFFBRUM7QUFBQSxPQUZEQSxRQUVDLGlDQUZRLElBRVI7QUFBQSw0QkFERGdHLFFBQ0M7QUFBQSxPQUREQSxRQUNDLGlDQURRM0IsT0FDUjs7QUFDRCxRQUFLekMsRUFBTCxHQUFVQSxFQUFWO0FBQ0EsUUFBS3JCLE1BQUwsR0FBY1osS0FBZDtBQUNBLFFBQUtZLE1BQUwsQ0FBWXRRLElBQVosR0FBbUIsT0FBbkI7O0FBRUE7QUFDQTtBQUNBLFFBQUsrVixRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFFBQUtoRyxRQUFMLEdBQWdCLEtBQUtpRyxPQUFMLENBQWFqRyxRQUFiLEVBQXVCLElBQXZCLENBQWhCOztBQUVBLFFBQUtzQixLQUFMO0FBQ0EsUUFBS3RRLEtBQUw7QUFDQSxRQUFLNlQsUUFBTDtBQUNBLFFBQUtGLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxRQUFLbEMsY0FBTCxHQUFzQixDQUF0QjtBQUNBLFFBQUt5RCxlQUFMLEdBQXVCLENBQXZCOztBQUVBO0FBQ0EsUUFBSzdFLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUEsVUFBTyxJQUFQO0FBQ0QsRUExQkQ7O0FBNEJBblQsUUFBTytYLE9BQVAsR0FBaUIsU0FBU0EsT0FBVCxDQUFpQmpHLFFBQWpCLEVBQTJCbUcsTUFBM0IsRUFBbUM7QUFDbEQsV0FBUUEsTUFBUjtBQUNBLFVBQUssUUFBTCxDQUFlLEtBQUssR0FBTDtBQUNiLGNBQU87QUFDTEMsZUFBTSxRQUREO0FBRUx0VSxnQkFBT2tPLFFBRkY7QUFHTDJDLGFBQUkzQyxXQUFXcUU7QUFIVixRQUFQO0FBS0YsVUFBSyxTQUFMLENBQWdCLEtBQUssR0FBTDtBQUNkLGNBQU87QUFDTCtCLGVBQU0sU0FERDtBQUVMdFUsZ0JBQU9rTyxRQUZGO0FBR0wyQyxhQUFJM0MsV0FBVztBQUhWLFFBQVA7QUFLRixVQUFLLGNBQUwsQ0FBcUIsS0FBSyxJQUFMLENBQVc7QUFDOUIsY0FBTztBQUNMb0csZUFBTSxjQUREO0FBRUx0VSxnQkFBT2tPLFFBRkY7QUFHTDJDLGFBQUkzQztBQUhDLFFBQVA7QUFkRixJQW1CQztBQUNGLEVBckJEOztBQXVCQTlSLFFBQU9nVSxLQUFQLEdBQWUsU0FBU0EsS0FBVCxHQUFpQjtBQUM5QixPQUFJLEtBQUtaLEtBQUwsS0FBZUEsTUFBTXdFLE9BQXpCLEVBQWtDLE9BQU8sS0FBUDtBQUNsQyxRQUFLeEUsS0FBTCxHQUFhQSxNQUFNd0UsT0FBbkI7QUFDQSxRQUFLbkIsU0FBTCxHQUFpQkksWUFBWTlPLEdBQVosRUFBakI7QUFDRCxFQUpEOztBQU1BL0gsUUFBTzhULElBQVAsR0FBYyxTQUFTQSxJQUFULEdBQWdCO0FBQzVCLE9BQUksS0FBS1YsS0FBTCxLQUFlQSxNQUFNdUUsT0FBekIsRUFBa0MsT0FBTyxLQUFQO0FBQ2xDLFFBQUt2RSxLQUFMLEdBQWFBLE1BQU11RSxPQUFuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNUSxjQUFjLEtBQUtyRyxRQUFMLENBQWMyQyxFQUFkLEdBQW1CLEtBQUtGLGNBQXhCLElBQTBDLENBQTlEOztBQUVBLFFBQUt6QyxRQUFMLEdBQWdCLEtBQUtpRyxPQUFMLENBQWFJLFdBQWIsRUFBMEIsY0FBMUIsQ0FBaEI7QUFDQSxRQUFLNUQsY0FBTCxHQUFzQixDQUF0Qjs7QUFFQSxRQUFLb0MsUUFBTCxHQUFnQkUsWUFBWTlPLEdBQVosRUFBaEI7QUFDRCxFQWJEOztBQWVBL0gsUUFBT3VYLEtBQVAsR0FBZSxTQUFTQSxLQUFULENBQWVoWCxLQUFmLEVBQXNCO0FBQ25DLE9BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1YsV0FBTSxJQUFJOEgsS0FBSixDQUFVLCtCQUFWLENBQU47QUFDRDs7QUFHRCxPQUFJLEtBQUsrSyxLQUFMLEtBQWVBLE1BQU11RSxPQUFyQixJQUFnQyxLQUFLdkUsS0FBTCxLQUFlQSxNQUFNd0UsT0FBekQsRUFBa0U7QUFDaEUsVUFBS3pFLFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxZQUFPLElBQVA7QUFDRDs7QUFFRCxRQUFLQyxLQUFMLEdBQWFBLE1BQU13RSxPQUFuQjtBQUNBLFFBQUtyRCxjQUFMLElBQXVCaFUsTUFBTXVDLEtBQTdCOztBQUVBLE9BQUksS0FBS3lSLGNBQUwsR0FBc0IsS0FBS3pDLFFBQUwsQ0FBYzJDLEVBQXhDLEVBQTRDO0FBQzFDLFVBQUt0QixXQUFMLEdBQW1CLElBQW5CO0FBQ0QsSUFGRCxNQUVPO0FBQ0wsVUFBS0MsS0FBTCxHQUFhQSxNQUFNeUUsSUFBbkI7QUFDQSxVQUFLMUUsV0FBTCxHQUFtQixLQUFuQjtBQUNEO0FBQ0YsRUFwQkQ7O0FBc0JBbFQsUUFBT0MsT0FBUCxHQUFpQkYsTUFBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wicGFydGljbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjFjOTc1YWU2YzYwMjhlNzg0ZmIiLCJjb25zdCBWZWN0b3IgPSByZXF1aXJlKFwiLi9saWIvdmVjdG9yc1wiKTtcbmNvbnN0IFBhcnRpY2xlID0gcmVxdWlyZShcIi4vbGliL3BhcnRpY2xlXCIpO1xuY29uc3QgVXRpbHMgPSByZXF1aXJlKFwiLi9saWIvdXRpbHNcIik7XG5jb25zdCBTaGFwZXMgPSByZXF1aXJlKFwiLi9saWIvc2hhcGVzXCIpO1xuY29uc3QgWUFUID0gcmVxdWlyZShcIi4vbGliL3R3ZWVuXCIpO1xuY29uc3QgQ2xvY2sgPSByZXF1aXJlKFwiLi9saWIvY2xvY2suanNcIik7XG5jb25zdCBUaWNrZXIgPSByZXF1aXJlKFwiLi9saWIvdGlja2VyLmpzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgVmVjdG9yLFxuICBQYXJ0aWNsZSxcbiAgVXRpbHMsXG4gIFNoYXBlcyxcbiAgWUFULFxuICBUaWNrZXIsXG4gIENsb2NrLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlscy5qc1wiKTtcblxuY29uc3QgSU5JVElBTF9TVEFURSA9IHtcbiAgeDogMCxcbiAgeTogMSxcbn07XG5cbi8qKlxuICogQGNsYXNzIFZlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IHN0YXRlIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gVmVjdG9yKHN0YXRlPUlOSVRJQUxfU1RBVEUpIHtcbiAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xufTtcblxuLyoqXG4gKiBDcmVhdGUgLSBFYXN5IHdheSB0byBpbnN0YW50aWF0ZSBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge0ludH0geFxuICogQHBhcmFtICB7SW50fSB5XG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoeD0wLCB5PTApIHtcbiAgY29uc3QgdmVjID0gbmV3IFZlY3Rvcih7eCwgeX0pO1xuICByZXR1cm4gdmVjO1xufTtcblxuLyoqXG4gKiBTZXQgLSBBIHNldHRlciBmb3IgdGhlIHZlY3RvciBjbGFzcy5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAgeyp9IHByb3BcbiAqIEBwYXJhbSAgeyp9IHZhbFxuICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQocHJvcCwgdmFsKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayB2YWwgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgIHRoaXMuc3RhdGVbcHJvcF0gPSB2YWw7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIGdldCAtIEEgZ2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gKiBAcmV0dXJuIHtWYWx1ZX0gICAgICAgIFRoZSB2YWx1ZSBhc3Nvc2lhdGVkIHdpdGggdGhlIHByb3AuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0KHByb3ApIHtcbiAgcmV0dXJuIHRoaXMuc3RhdGVbcHJvcF07XG59O1xuXG4vKipcbiAqIHNldEFuZ2xlIC0gUGxvdCB0aGUgY29ycmRpbmF0ZXMgYmFzZWQgb24gcmFkaWFucyBnaXZlbi5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7UmFkaWFuc30gcmFkIEEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldEFuZ2xlID0gZnVuY3Rpb24gc2V0QW5nbGUocmFkKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuXG4gIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xufTtcblxuLyoqXG4gKiBzZXRMZW5ndGggLSBUYWtlcyBhIGxlbmd0aCBhbmQgc2V0cyBjb29yZGluYXRlLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zZXRMZW5ndGggPSBmdW5jdGlvbiBzZXRMZW5ndGgobGVuZ3RoKSB7XG4gIC8vIFRPRE86IEFkZCBjaGVjayByYWQgaXMgbnVtYmVyXG4gIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICBjb25zdCByYWQgPSB0aGlzLmdldEFuZ2xlKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIGdldExlbmd0aCAtIEdldHMgbGVuZ3RoIG9mIHRoZSBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXRMZW5ndGggPSBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XG4gIGNvbnN0IHggPSB0aGlzLmdldChcInhcIik7XG4gIGNvbnN0IHkgPSB0aGlzLmdldChcInlcIik7XG4gIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xufTtcblxuLyoqXG4gKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcmV0dXJuIHtJbnRlZ2VyfSBDb29yaWRpbmF0ZXMuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZ2V0QW5nbGUgPSBmdW5jdGlvbiBnZXRBbmdsZSgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIGFkZCAtIFNob3VsZCBhZGQgdmVjdG9ycyB0b2dldGhlciBnaXZlbiBhIHZlY3RvclxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IHYyIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3Igd2l0aCBjb29yaWRuYXRlcywgb3IgbXVsdGlwbGUgdmVjdG9ycy5cbiAqL1xuXG5WZWN0b3IucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIGFkZCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuICAgIC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjJcbiAgICAgIC5tYXAoKHYpID0+ICh7eDogdi5nZXQoXCJ4XCIpLCB5OiB2LmdldChcInlcIil9KSlcbiAgICAgIC5yZWR1Y2UoKHYwLCB2bikgPT4gKHt4OiB2MC54ICsgdm4ueCwgeTogdjAueSArIHZuLnl9KSwgc2VsZi5zdGF0ZSk7XG5cbiAgICByZXR1cm4gc2VsZi5jcmVhdGUodmVjcy54LCB2ZWNzLnkpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHNlbGYuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG4gICAgc2VsZi5nZXQoXCJ5XCIpICsgdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBzdWJ0cmFjdCAtIHNob3VsZCBzdWJ0cmFjdCB0aGUgZ2l2ZW4gdmVjdG9yIHdpdGggaXRzIG93biB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9IEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3QgPSBmdW5jdGlvbiBzdWJ0cmFjdCh2Mikge1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodjIuY29uc3RydWN0b3IubmFtZSA9PT0gXCJBcnJheVwiICYmIHYyLmxlbmd0aCkge1xuICAgIC8vIFJlZmFjdG9yIHRvIG1ha2UgbW9yZSBlZmZlY2llbnQgLy9cbiAgICBjb25zdCB2ZWNzID0gdjIubWFwKCh2KSA9PiAoe3g6IHYuZ2V0KFwieFwiKSwgeTogdi5nZXQoXCJ5XCIpfSkpXG4gICAgLnJlZHVjZSgodjAsIHZuKSA9PlxuICAgICAgKHt4OiB2MC54IC0gdm4ueCwgeTogdjAueSAtIHZuLnl9KSxcbiAgICBzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgc2VsZi5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKSxcbiAgICBzZWxmLmdldChcInlcIikgLSB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIE11bGl0cGx5aW5nIHZlY3RvcnMgdG9nZXRoZXJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBleGFtcGxlIHt4OiAyLCB5OiAyfSAqIHt4OiAyLCB5OiAyfSA9IHt4OiA0LCB5OiA0fVxuICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfSAgICBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIG11bHRpcGx5KHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICB0aGlzLmdldChcInhcIikgKiB2Mi5nZXQoXCJ4XCIpLFxuICAgIHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogRGl2aWRlIHZlY3RvcnMgdG9nZXRoZXIuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZSA9IGZ1bmN0aW9uIGRpdmlkZSh2Mikge1xuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIEFkZHMgdG8gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuYWRkVG8gPSBmdW5jdGlvbiBhZGRUbyh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgKyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIGZyb20gY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3RGcm9tID0gZnVuY3Rpb24gc3VidHJhY3RGcm9tKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAtIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBtdWxpdHBsaWVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5QnkgPSBmdW5jdGlvbiBtdWx0aXBseUJ5KHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICovXG5WZWN0b3IucHJvdG90eXBlLmRpdmlkZUJ5ID0gZnVuY3Rpb24gZGl2aWRlQnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC8gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge051bWJlcn0gYW5nbGUgQSBudW1iZXIgb2YgcmFkaWFucyB0byByb3RhdGUgY2xvY2t3aXNlIGJ5LlxuKi9cblZlY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24oZGVsdGEpIHtcbiAgY29uc3QgY29zID0gTWF0aC5jb3MoZGVsdGEpO1xuICBjb25zdCBzaW4gPSBNYXRoLnNpbihkZWx0YSk7XG5cbiAgLy9cbiAgY29uc3QgeCA9IHRoaXMuc3RhdGUueCAqIGNvcyAtIHRoaXMuc3RhdGUueSAqIHNpbjtcbiAgY29uc3QgeSA9IHRoaXMuc3RhdGUueSAqIGNvcyArIHRoaXMuc3RhdGUueCAqIHNpbjtcblxuICB0aGlzLnN0YXRlLnggPSB4O1xuICB0aGlzLnN0YXRlLnkgPSB5O1xufTtcblxuLyoqXG4gKiByYW5kb20gZ2VuZXJhdGUgYSB2ZWN0b3Igd2l0aCByYW5kb20gc3RhdGVzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbiAtIEEgbWluIHJhbmdlIG9uIHRoZSByYW5kb20gdmVjdG9yIHN0YXRlLlxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCAtIEEgbWF4IHJhbmdlIG9uIHRoZSByYW5kb20gdmVjdG9yIHN0YXRlLlxuICogQHJldHVybiB7VmVjdG9yfVxuICovXG5WZWN0b3IucHJvdG90eXBlLnJhbmRvbSA9IGZ1bmN0aW9uIHJWZWN0b3IobWluPTEsIG1heD0xMCkge1xuICBjb25zdCB4ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gIGNvbnN0IHkgPSB1dGlscy5sZXJwKE1hdGgucmFuZG9tKCksIG1pbiwgbWF4KTtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKHgsIHkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAZGVzY3JpcHRpb24gUmV0dXJuIGEgdmVjdG9yIHRoYXQgaGFzIGEgeCBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZS5cbiAqICAgICAgICAgICAgICBhbmQgeSBnaXZlbiBhIHJhbmdlLlxuICogQHBhcmFtICB7TnVtYmVyfSB4TWluIE1pbm11bSB4IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhNYXggTWF4aW11bSB4IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHlNaW4gTWlubXVtIHkgdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0geU1heCBNYXhpbXVtIHkgdmFsdWVcbiAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5yYW5kb21CZXR3ZWVuID0gZnVuY3Rpb24gckJldHdlZW4oeE1pbj0wLCB4TWF4PTEwLCB5TWluPTAsIHlNYXg9MTApIHtcbiAgeE1heCA9IE1hdGgubWF4KHhNaW4sIHhNYXgpO1xuICB4TWluID0gTWF0aC5taW4oeE1pbiwgeE1heCk7XG4gIHlNYXggPSBNYXRoLm1heCh5TWluLCB5TWF4KTtcbiAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlNYXgpO1xuXG4gIGNvbnN0IHkgPSB1dGlscy5yYW5kb21CZXR3ZWVuKHlNaW4sIHlNYXgpO1xuICBjb25zdCB4ID0gdXRpbHMucmFuZG9tQmV0d2Vlbih4TWluLCB4TWF4KTtcblxuICByZXR1cm4gdGhpcy5jcmVhdGUoeCwgeSk7XG59O1xuXG5WZWN0b3IucHJvdG90eXBlW1wiK1wiXSA9IFZlY3Rvci5wcm90b3R5cGUuYWRkO1xuVmVjdG9yLnByb3RvdHlwZVtcIi1cIl0gPSBWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0O1xuVmVjdG9yLnByb3RvdHlwZVtcIipcIl0gPSBWZWN0b3IucHJvdG90eXBlLm11bHRpcGx5O1xuVmVjdG9yLnByb3RvdHlwZVtcIi9cIl0gPSBWZWN0b3IucHJvdG90eXBlLmRpdmlkZTtcblZlY3Rvci5wcm90b3R5cGVbXCIrPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuYWRkVG87XG5WZWN0b3IucHJvdG90eXBlW1wiLT1cIl0gPSBWZWN0b3IucHJvdG90eXBlLnN1YnRyYWN0RnJvbTtcblZlY3Rvci5wcm90b3R5cGVbXCIqPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeTtcblZlY3Rvci5wcm90b3R5cGVbXCIvPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVjdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi92ZWN0b3JzLmpzIiwiLyogZXNsaW50IG1heC1sZW46IDAgKi9cblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyBjb21wb3NlZCBvZiBzbWFsbCBmdW5jdGlvbiB0aGF0XG4gKiBzaG91bGQgYmUgdXNlZCB3aGVuIG5lZWRlZC4gTW9zdCBmdW5jdGlvbnMgYXJlIHB1cmVcbiAqIGFuZCBvbmx5IHJldHVybiB2YWx1ZXMuIEZvciBtb3JlIGluZm8gcmVhZCB0aGUgZG9jcy5cbiAqL1xuXG4vKipcbiAqIEBjbGFzcyBVdGlsc1xuICogQHJldHVybiB7VXRpbHN9XG4gKi9cbmNvbnN0IFV0aWxzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBub3JtYWxpemUgLSBUYWtlcyBhIG1heCBhbmQgbWluIHZhbHVlIGFuZCByZXR1cm5zXG4gKiBhIGZsb2F0aW5nIHBvaW50IG51bWJlciwgdGhhdCB3aGVuIG11bHRpcGxpZWRcbiAqIGJ5IG9uZSBodW5kcmVkIHJlcHJlc2VudHMgYSBwcmVjZW50YWdlIG9mIHRoZSByYW5nZVxuICogYmV0d2VlbiBtYXggYW5kIG1pbi5cbiAqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludH0gdmFsIC0gVGhlIHZhbHVlIHRoYXQgbGllcyBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1pbiAtIFRoZSBtYXhpdW0gdmFsdWUgaW4gdGhlIHJhbmdlLlxuICogQHBhcmFtICB7SW50fSBtYXggLSBUaGUgbWluaW11bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcmV0dXJuIHtJbnR9IEludCAtIFRoZSB2YWx1ZSByZXByZXNlbnRlZCBpbiB0aGF0IHJhbmdlLlxuICovXG5VdGlscy5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUodmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbCAtIG1pbikgLyAobWF4IC0gbWluKTtcbn07XG5cbi8qKlxuICogbGVycCAtIGxpbmVhciBpbnRlcnBvbGF0aW9uIHRha2VzIGEgcmFuZ2UgYW5kIGEgZ2l2ZW4gbm9ybWFsaXplZCB2YWx1ZVxuICogYW5kIHJldHVybnMgYSB2YWx1ZSB0aGF0IHJlcHJlc2VudHMgdGhhdCBub3JtYWxpemVkIHZhbHVlIGluIHRoYXQgcmFuZ2UuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSB2YWxcbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtaW5cbiAqIEBwYXJhbSAge0ludGVyZ2VyfSBtYXhcbiAqIEByZXR1cm4ge0ludGVyZ2VyfVxuICovXG5VdGlscy5sZXJwID0gZnVuY3Rpb24gbGVycCh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLm1hcCA9IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgc3JjTWluLCBzcmNNYXgsIGRlc3RNaW4sIGRlc3RNYXgpIHtcbiAgc3JjTWF4ID0gTWF0aC5tYXgoc3JjTWF4LCBzcmNNaW4pO1xuICBzcmNNaW4gPSBNYXRoLm1pbihzcmNNYXgsIHNyY01pbik7XG4gIGRlc3RNaW4gPSBNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KTtcbiAgZGVzdE1heCA9IE1hdGgubWF4KGRlc3RNaW4sIGRlc3RNYXgpO1xuICByZXR1cm4gdGhpcy5sZXJwKHRoaXMubm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cblV0aWxzLnBlcmNlbnQgPSBmdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHZhbCAqIDEwMDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgbnVtYmVyIGFuZCBhIHJhbmdlIHJldHVybiB0aGVcbiAqICAgICAgICAgICAgICB2YWx1ZSBiZXR3ZWVuIHRoYXQgcmFuZ2Ugb3IgdGhlIG1heCBudW1iZXIgb3IgbWluIG51bWJlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKi9cblV0aWxzLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4obWluLCBtYXgpKSwgTWF0aC5tYXgobWluLCBtYXgpKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mICBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBudW1iZXJzIHJldHVybiBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiB0aGUgdHdvLlxuICogQHBhcmFtICB7SW50ZWdlcn0geFxuICogQHBhcmFtICB7SW50ZWdlcn0geVxuICogQHJldHVybiB7SW50ZWdlcn1cbiAqL1xuVXRpbHMucmFuZG9tQmV0d2VlbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoeCwgeSk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuZGlzdGFuY2VYWSA9IGZ1bmN0aW9uKHgwLCB5MCwgeDEsIHkxKSB7XG4gIGNvbnN0IGR4ID0geDAgLSB4MTtcbiAgY29uc3QgZHkgPSB5MCAtIHkxO1xuICByZXR1cm4gTWF0aC5oeXBvdChkeCwgZHkpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHZlY3RvcnMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjFcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuZGlzdGFuY2VWZWMgPSBmdW5jdGlvbih2MSwgdjIpIHtcbiAgY29uc3QgZFZlYyA9ICh2MSlbXCItXCJdKHYyKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZFZlYy5nZXQoXCJ4XCIpLCBkVmVjLmdldChcInlcIikpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBudW1iZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuaW5SYW5nZSA9IGZ1bmN0aW9uKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWwgPD0gTWF0aC5tYXgobWF4LCBtaW4pKSAmJiAoTWF0aC5taW4obWF4LCBtaW4pIDw9IHZhbCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHR3byByYW5nZXMgc2VlIGlmIGJvdGggaW50ZXJzZWN0IGVhY2ggb3RoZXIuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMFxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjFcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMucmFuZ2VJbnRlcnNlY3QgPSBmdW5jdGlvbihtaW4wLCBtYXgwLCBtaW4xLCBtYXgxKSB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5tYXgobWF4MCwgbWluMCkgPj0gTWF0aC5taW4obWluMSwgbWF4MSkgJiZcbiAgICBNYXRoLm1pbihtaW4wLCBtYXgwKSA8PSBNYXRoLm1heChtYXgxLCBtaW4xKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvcyB2ZWN0b3JzIHNlZSBpZiB0aGV5IGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLnZlY3RvckludGVyc2VjdCA9IGZ1bmN0aW9uKHZlYzAsIHZlYzEpIHtcbiAgY29uc3QgeDAgPSB2ZWMwLmdldChcInhcIik7XG4gIGNvbnN0IHkwID0gdmVjMC5nZXQoXCJ5XCIpO1xuICBjb25zdCB4MSA9IHZlYzEuZ2V0KFwieFwiKTtcbiAgY29uc3QgeTEgPSB2ZWMxLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnJhbmdlSW50ZXJzZWN0KHgwLCB5MCwgeDEsIHkxKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byByZWN0YW5nZSBzZWUgaWYgdGhlIGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IHIwXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3QgPSBmdW5jdGlvbihyMCwgcjEpIHtcbiAgY29uc3QgcjB4ID0gcjAuc3RhdGUueDtcbiAgY29uc3QgcjB5ID0gcjAuc3RhdGUueTtcbiAgY29uc3QgcjF4ID0gcjEuc3RhdGUueDtcbiAgY29uc3QgcjF5ID0gcjEuc3RhdGUueTtcblxuICBjb25zdCByMHcgPSByMHggKyByMC5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjBoID0gcjB5ICsgcjAuc3RhdGUuaGVpZ2h0O1xuICBjb25zdCByMXcgPSByMXggKyByMS5zdGF0ZS53aWR0aDtcbiAgY29uc3QgcjFoID0gcjF5ICsgcjEuc3RhdGUuaGVpZ2h0O1xuXG4gIHJldHVybiAoXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHgsIHIwdywgcjF4LCByMXcpICYmXG4gICAgdGhpcy5yYW5nZUludGVyc2VjdChyMHksIHIwaCwgcjF5LCByMWgpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0byBwYXJ0aWNsZSB3aXRoIHJhZGkgcmV0dXJuIHdldGhlciB0aGV5IGNvbGxpZGUgYXJlIG5vdFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzFcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlID0gZnVuY3Rpb24oYzEsIGMyKSB7XG4gIGNvbnN0IHJhZGkgPSAoYzEuc3RhdGUucmFkaXVzICsgYzIuc3RhdGUucmFkaXVzKTtcbiAgY29uc3QgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgcG9pbnQgYW5kIGEgY2lyY2xlIHJldHVybiBhIGJvb2xlYW4gcmVnYXJkaW5nIHdldGhlciB0aGV5IGFyZSBjb2xsaWRpbmcuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlUG9pbnQgPSBmdW5jdGlvbih4LCB5LCBjaXJjbGUpIHtcbiAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgY29uc3QgZGlzdCA9IHRoaXMuZGlzdGFuY2VYWShcbiAgICB4LFxuICAgIHksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGEgY29sbGlzaW9uIGJldHdlZW4gY2lyY2xlcyBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uQ2lyY2xlVmVjID0gZnVuY3Rpb24odmVjLCBjaXJjbGUpIHtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiB0aGlzLmRpc3RhbmNlWFkoXG4gICAgdmVjLmdldChcInhcIiksXG4gICAgdmVjLmdldChcInlcIiksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb24gb2YgYSByZWN0YW5nbGUgYW5kIGEgcG9pbnQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmNvbGxpc2lvblJlY3RQb2ludCA9IGZ1bmN0aW9uKHgsIHksIHJlY3QpIHtcbiAgY29uc3QgcmVjdFggPSByZWN0LnN0YXRlLng7XG4gIGNvbnN0IHJlY3RZID0gcmVjdC5zdGF0ZS55O1xuICByZXR1cm4gKFxuICAgIHRoaXMuaW5SYW5nZSh4LCByZWN0WCwgcmVjdFggKyByZWN0LnN0YXRlLndpZHRoKSAmJlxuICAgIHRoaXMuaW5SYW5nZSh5LCByZWN0WSwgcmVjdFkgKyByZWN0LnN0YXRlLmhlaWdodClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdmVjdG9yIGFuZCBhIHJldGFuZ2xlIGNoZWNrIHdldGhlciB0aGV5IGNvbGxpZGVkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uUmVjdFZlYyA9IGZ1bmN0aW9uKHZlYywgcmVjdCkge1xuICByZXR1cm4gdGhpcy5jb2xsaXNpb25SZWN0UG9pbnQodmVjLmdldChcInhcIiksIHZlYy5nZXQoXCJ5XCIpLCByZWN0KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUnVuIGEgZnVuY3Rpb24gb25seSBpZiB0aGUgZ2l2ZW4gdGltZSB0byBhbGxvdyB0aGUgZnVuY3Rpb24gZXhlY3V0ZVxuICogaGFzIHBhc3NlZC4gSWZcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBldmVyeSBkZWx0YS5cbiAqIEBwYXJhbSAge051bWJlcn0gd2FpdCBUaGUgbWluaW11bSB0aW1lIHRvIHdhaXQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSB1bmRlcnNjb3JlXG4gKi9cblV0aWxzLnRocm90dGxlID0gZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICBsZXQgY29udGV4dDtcbiAgbGV0IGFyZ3M7XG4gIGxldCByZXN1bHQ7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzID0gMDtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IERhdGUubm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICBpZiAoIXByZXZpb3VzICYmIG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UpIHByZXZpb3VzID0gbm93O1xuICAgIGxldCByZW1haW5pbmcgPSB3YWl0IC0gKG5vdyAtIHByZXZpb3VzKTtcbiAgICBjb250ZXh0ID0gdGhpcztcbiAgICBhcmdzID0gYXJncztcbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGxlbmd0aCBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBDb29yZGluYXRlc1xuICovXG5VdGlscy5zZXRMZW5ndGggPSBmdW5jdGlvbihsZW5ndGgsIHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBhbmdsZVxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBjb29yZGluYXRlc1xuICovXG5VdGlscy5zZXRBbmdsZSA9IGZ1bmN0aW9uKGFuZ2xlLCB4LCB5KSB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBhbmdsZSAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgbGVuZ3RoID0gTWF0aC5oeXBvdCh4LCB5KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIGRlZ3JlZXMgdG8gcmFkaWFuc1xuICogQHBhcmFtICB7bnVtYmVyfSBkZWcgRGVncmVzc1xuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5kZWdUb1JhZCA9IGZ1bmN0aW9uKGRlZykge1xuICByZXR1cm4gZGVnIC8gMTgwICogTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyByYWRpYW5zIHRvIGRlZ3Jlc3NcbiAqIEBwYXJhbSAge251bWJlcn0gcmFkXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJhZFRvRGVnID0gZnVuY3Rpb24ocmFkKSB7XG4gIHJldHVybiByYWQgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBSb3VuZCB0byBuZWFyZXN0IHBsYWNlIGdpdmVuLlxuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gcGxhY2VzIEFuIGV4cG9uZW50XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJvdW5kVG9QbGFjZXMgPSBmdW5jdGlvbih2YWwsIHBsYWNlcykge1xuICBjb25zdCBtdWx0ID0gTWF0aC5wb3coMTAsIHBsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIG11bHQpIC8gbXVsdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBuZWFyZXN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnJvdW5kVG9NdWx0aXBsZSA9IGZ1bmN0aW9uKHZhbCwgbmVhcmVzdCkge1xuICBpZiAoIW5lYXJlc3QpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3RoaW5nIGNhbiBiZSBhIG11bHRpcGxlIG9mIFwiICsgU3RyaW5nKG5lYXJlc3QpKTtcbiAgfVxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgLyBuZWFyZXN0KSAqIG5lYXJlc3Q7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5xdWFkcmF0aWNCZXppZXIgPSBmdW5jdGlvbih2MCwgdjEsIHYyLCB0KSB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMikgKiB2MCArICgxIC0gdCkgKiAyICogdCAqIHYxICsgdCAqIHQgKiB2Mjtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLmN1YmljQmV6aWVyID0gZnVuY3Rpb24odjAsIHYxLCB2MiwgdjMsIHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAzKSAqIHYwICtcbiAgICAgICAgIE1hdGgucG93KDEgLSB0LCAyKSAqIDMgKiB0ICogdjEgK1xuICAgICAgICAgKDEgLSB0KSAqIDMgKiB0ICogdCAqIHYyICtcbiAgICAgICAgIHQgKiB0ICogdCArIHYzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucXVhZHJhdGljQmV6aWVyUG9pbnQgPSBmdW5jdGlvbihwMCwgcDEsIHAyLCB0KSB7XG4gIGNvbnN0IHggPSB0aGlzLnF1YWRyYXRpY0JlemllcihwMC54LCBwMS54LCBwMi54LCB0KTtcbiAgY29uc3QgeSA9IHRoaXMucXVhZHJhdGljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHQpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gcDNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMuY3ViaWNCZXppZXJQb2ludCA9IGZ1bmN0aW9uKHAwLCBwMSwgcDIsIHAzLCB0KSB7XG4gIHggPSB0aGlzLmN1YmljQmV6aWVyKHAwLngsIHAxLngsIHAyLngsIHQpO1xuICB5ID0gdGhpcy5jdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gcG9pbnRzIG9uIHRoZSBwbGFuZSBkcmF3IGEgY3VydmVkIGxpbmUgYmV0d2VlblxuICogYWxsIG9mIHRoZW0uXG4gKiBAcGFyYW0gIHt7bnVtYmVyLCBudW1iZXJ9fSBwb2ludHNcbiAqIEBwYXJhbSAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XG4gKi9cblV0aWxzLm11bHRpQ3VydmUgPSBmdW5jdGlvbihwb2ludHMsIGN0eCkge1xuICBsZXQgcDA7XG4gIGxldCBwMTtcbiAgbGV0IG1pZFg7XG4gIGxldCBtaWRZO1xuXG4gIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICBwMCA9IHBvaW50c1tpXTtcbiAgICBwMSA9IHBvaW50c1tpICsgMV07XG4gICAgbWlkWCA9IChwMC54ICsgcDEueCkvMjtcbiAgICBtaWRZID0gKHAwLnkgKyBwMS55KS8yO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIG1pZFgsIG1pZFkpO1xuICB9XG5cbiAgcDAgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdO1xuICBwMSA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIHAxLngsIHAxLnkpO1xufTtcblxuLyoqXG4gKiBlYXNlXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0Zsb2F0fSBlYXNlIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge0ludH0gYSAgICBbZGVzY3JpcHRpb25dXG4gKiBAcGFyYW0gIHtJbnR9IGIgICAgW2Rlc2NyaXB0aW9uXVxuICogQHJldHVybiB7SW50fSAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuVXRpbHMuZWFzZSA9IGZ1bmN0aW9uKGVhc2UsIGEsIGIpIHtcbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGIgLSBhKSA8IDAuMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoYiAtIGEpICogZWFzZTtcbn07XG5cblV0aWxzLmVhc2VUbyA9IGZ1bmN0aW9uKGVhc2UsIG9yaWdpbiwgdGFyZ2V0LCB0aHJlc2hvbGQ9MC4xKSB7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIG9yaWdpbi55O1xuXG4gIC8vIHRoZSBkZWx0YSBjYW4gZ2V0IGV4dHJlbWVseSBzbWFsbCBhbmQgaXRzIG5vdCBwZXJmb3JtYW50IHRvIGtlZXBcbiAgLy8gb24gcmVuZGVyaW5nIG9yIGNhbGN1bGF0aW5nIGZvciBhbmltYXRpb24gcHVycG9zZXMuXG4gIGlmIChNYXRoLmFicyhkeCkgPCB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZHkpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3JpZ2luLnggKz0gZHggKiBlYXNlO1xuICBvcmlnaW4ueSArPSBkeSAqIGVhc2U7XG5cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbi8qKlxuICogaXNQbGFpbk9iamVjdFxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblV0aWxzLmlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3QoZGF0YSkge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKHt9KS50b1N0cmluZy5jYWxsKGRhdGEpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufTtcblxuLyoqXG4gKiB1bmlxdWUgcmV0dXJuIGFuIGFycmF5IHdpdGggbm8gZHVwbGljYXRlIHZhbHVlc1xuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuVXRpbHMudW5pcXVlID0gZnVuY3Rpb24gdW5pcXVlKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHgsIHkpID0+IHtcbiAgICBpZiAoeC5pbmRleE9mKHkpID09PSAtMSkgeC5wdXNoKHkpO1xuICAgIHJldHVybiB4O1xuICB9LCBbXSk7XG59O1xuXG4vLyBAZmxvd1xuVXRpbHMuY29sb3JJbnRlcnBvbGF0aW9uID0gZnVuY3Rpb24gY29sb3JJbnRlcnBvbGF0aW9uKGZsb2F0OiBudW1iZXIsIGNvbG9yRnJvbTogQ29sb3IsIGNvbG9yVG86IENvbG9yKTogQ29sb3Ige1xuICBjb25zdCB7cjEsIGcxLCBiMX0gPSBjb2xvckZyb207XG4gIGNvbnN0IHtyMiwgZzIsIGIyfSA9IGNvbG9yVG87XG5cbiAgciA9IHIxICsgKHIyIC0gcjEpIC8gZmxvYXQ7XG4gIGcgPSBnMSArIChnMiAtIGcxKSAvIGZsb2F0O1xuICBiID0gYjEgKyAoYjIgLSBiMSkgLyBmbG9hdDtcblxuICByZXR1cm4gXCJzb21lSGV4XCI7XG59O1xuXG5VdGlscy5wZXJzcGVjdGl2ZSA9IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZvY2FsTGVuZ3RoLCBkaXN0YW5jZSkge1xuICByZXR1cm4gZm9jYWxMZW5ndGggLyAoZm9jYWxMZW5ndGggLSBkaXN0YW5jZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUoVXRpbHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlscy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vKlxuKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4qIGFuZCBmZWVsIGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4qL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNsZVxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZShzdGF0ZT1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7IFxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBwYXJ0aWNsZSBnaXZlbiBhIGRpcmVjdGlvbiBhbmQgbWFnbml0dWRlLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0cyBvcHRpb25hbCBzdGF0ZSB2YWx1ZXMgdG8gcGFzcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJucyB7UGFydGljbGV9IHJldHVybnMgYSBwYXJ0aWNsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICAvLyBFeHRlbmQgdGhlIG9wdGlvbmFsIHN0YXRlIG9uIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxuICBvcHRzID0gZXh0ZW5kKHRydWUsIGNsb25lKElOSVRJQUxfU1RBVEUpLCBvcHRzKTtcblxuICAvLyBDcmVhdGUgcGFydGljbGUgd2l0aCB0aGUgbmV3IG9wdGlvbnMuXG4gIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKG9wdHMpO1xuXG4gIC8vIFNldCBsZW5ndGguXG4gIHBhcnRpY2xlLnNldFNwZWVkKG9wdHMubWFnbml0dWRlKTtcblxuICAvLyBTZXQgYW5nbGUuXG4gIHBhcnRpY2xlLnNldEhlYWRpbmcob3B0cy5kaXJlY3Rpb24pO1xuXG4gIC8vIFJldHVybiBuZXcgcGFydGljbGUuXG4gIHJldHVybiBwYXJ0aWNsZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gYXhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBY2NlbGVyYXRpb24gdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IGZ1bmN0aW9uIGFjY2VsZXJhdGUoYXg9dGhpcy5zdGF0ZS52eCwgYXk9dGhpcy5zdGF0ZS52eSkge1xuICB0aGlzLnN0YXRlLnZ4ICs9IGF4IHwgMDtcbiAgdGhpcy5zdGF0ZS52eSArPSBheSB8IDA7XG4gIHJldHVybiB7YXgsIGF5fTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEEgdXBkYXRlIGEgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxuICogYmFzZWQgb24gaXRzIGdyYXZpdHkgYW5kIGZyaWNpdGlvbi4gR3Jhdml0eSBpcyB1c3VhbGx5IGEgYWNjZWxlcmF0aW9uXG4gKiB2ZWN0b3IuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBmcmljIEZyaWNpdGlvbiB0byBhcHBseS5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IGdyYXYgR3Jhdml0eSB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFBvc2l0aW9uIHN0YXRlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGZyaWM9dGhpcy5zdGF0ZS5mcmljdGlvbiwgZ3Jhdj10aGlzLnN0YXRlLmdyYXZpdHkpIHtcbiAgLy8gQXBwbHkgc3ByaW5nc1xuICB0aGlzLmhhbmRsZVNwcmluZ3MoKTtcblxuICAvLyBBcHBseSBncmF2aXRhdGlvbnNcbiAgdGhpcy5oYW5kbGVNYXNzZXMoKTtcblxuICAvLyBBcHBseSBmYWtlIGZyaWNpdGlvbiB0byB2ZWxvY2l0eVxuICB0aGlzLnN0YXRlLnZ4ICo9IGZyaWM7XG4gIHRoaXMuc3RhdGUudnkgKj0gZnJpYztcblxuICAvLyBBcHBseSBncmF2aXR5IHRvIHZlbG9jaXR5XG4gIHRoaXMuYWNjZWxlcmF0ZSgwLCBncmF2KTtcblxuICAvLyBVcGRhdGUgcG9zaXRpb24gYmFzZWQgb24gYWNjZWxlcmF0aW9uXG4gIHJldHVybiB0aGlzLnVwZGF0ZVBvcygpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBmb3JjZVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldFNwZWVkID0gZnVuY3Rpb24gc2V0U3BlZWQoc3BlZWQpIHtcbiAgY29uc3QgYW5nbGUgPSB0aGlzLmdldEhlYWRpbmcoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgYW5nbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc2V0SGVhZGluZyA9IGZ1bmN0aW9uIHNldEhlYWRpbmcoYW5nbGUpIHtcbiAgY29uc3Qgc3BlZWQgPSB0aGlzLmdldFNwZWVkKCk7XG4gIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGZvcmNlIG9mIHZlbG9jaXR5IHZlY3Rvci5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdldFNwZWVkID0gZnVuY3Rpb24gZ2V0U3BlZWQoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QodGhpcy5zdGF0ZS52eCwgdGhpcy5zdGF0ZS52eSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnZXQgdGhlIGFuZ2xlIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge251bWJlcn0geFxuICogQHBhcmFtICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZXRIZWFkaW5nID0gZnVuY3Rpb24gZ2V0SGVhZGluZyh4PXRoaXMuc3RhdGUudngsIHk9dGhpcy5zdGF0ZS52eSkge1xuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGFkZCBzcHJpbmcgdG8gc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ByaW5nIEEgc3ByaW5nIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFkZFNwcmluZyA9IGZ1bmN0aW9uIGFkZFNwcmluZyhzcHJpbmcpIHtcbiAgdGhpcy5yZW1vdmVTcHJpbmcoc3ByaW5nKTtcbiAgdGhpcy5zdGF0ZS5zcHJpbmdzLnB1c2goc3ByaW5nKTtcbiAgcmV0dXJuIHNwcmluZztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhIHNwZWNpZmljIHN0cmluZyBmcm9tIHRoZSBzcHJpbmdzIGFycmF5XG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge09iamVjdH0gc3ByaW5nXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5yZW1vdmVTcHJpbmcgPSBmdW5jdGlvbiByZW1vdmVTcHJpbmcoe3BvaW50OiB7c3RhdGU6IHB9fSkge1xuICBjb25zdCBzcHJpbmdzID0gdGhpcy5zdGF0ZS5zcHJpbmdzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwLnggPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueCAmJlxuICAgICAgICBwLnkgPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueSkge1xuICAgICAgc3ByaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFzdW1taW5nIHdlIGtub3cgd2hlcmVcbiAqIHRoZSBvdGhlciBwYXJ0aWNsZSBpcyBvbiB0aGUgY2FudmFzLiBXZSBjYW4gdXNlXG4gKiB0aGUgYW5nbGUgZm9ybXVsYWUgdG8gZmlndXJlIG91dCB0aGUgYW5nbGVcbiAqIGJldHdlZW4gdHdvIHBhcnRpY2xlLiBVc2luZyBhcmN0YW5nZW50IGlzIGZpbmUuXG4gKiBidXQgYmVjYXVzZSB0aGUgY29ycmRpbmF0ZSBwbGFuZSBpcyBmaWxwZWQgb24gdGhlXG4gKiBZIGF4aXMgd2UgdXNlIGF0YW4yIHRvIGdldCB0aGUgcmlnaHQgdmFsdWVzLiBFeHBsYWluZWRcbiAqIGluIEFQSSBEb2NzLlxuICogXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gIEFuZ2xlICAgQSBhbmdsZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFuZ2xlVG8gPSBmdW5jdGlvbiBhbmdlbFRvKHtzdGF0ZToge3g6IHgsIHk6IHl9fSkge1xuICBjb25zdCB7eDogZHgsIHk6IGR5fSA9IHt4OiB4IC0gdGhpcy5zdGF0ZS54LCB5OiB5IC0gdGhpcy5zdGF0ZS55fTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZHksIGR4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFzc3VtaW5nIHdlIGtub3cgd2hlcmUgYm90aCBwYXJ0aWNsZSBhcmUgb24gdGhlIGNhbnZhcy5cbiAqIHdlIGNhbiB1c2UgdGhlIGRpc3RhbmNlIGZvcm11YWxlIHRvIGZpZ3VyZSBvdXQgdGhlIGRpc3RhbmNlXG4gKiBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzLlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7UGFydGljbGV9IHAyICAgICAgQSBwYXJ0aWNsZSBpbnN0YW5jZVxuICogQHJldHVybnMge0ludGVnZXJ9ICBBbmdsZSAgIEEgRGlzdGFuY2VcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmRpc3RhbmNlVG8gPSBmdW5jdGlvbiBkaXN0YW5jZVRvKHtzdGF0ZToge3g6IHgsIHk6IHl9fSkge1xuICBjb25zdCB7eDogZHgsIHk6IGR5fSA9IHt4OiB4IC0gdGhpcy5zdGF0ZS54LCB5OiB5IC0gdGhpcy5zdGF0ZS55fTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZHgsIGR5KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwZW5kIGEgcGFydGljbGUgdG8gdGhlIG1hc3NlcyBhcnJheS5cbiAqIEBwYXJhbSB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFkZE1hc3MgPSBmdW5jdGlvbihtYXNzKSB7XG4gIHRoaXMucmVtb3ZlTWFzcyhtYXNzKTtcbiAgdGhpcy5zdGF0ZS5tYXNzZXMucHVzaChtYXNzKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgcGFydGljbGUgZm9yIHRoZSBtYXNzZXMgYXJyYXkuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gbWFzc1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlTWFzcyA9IGZ1bmN0aW9uKHtzdGF0ZTogbWFzc30pIHtcbiAgY29uc3QgbWFzc2VzID0gdGhpcy5zdGF0ZS5tYXNzZXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWFzcy54ID09PSBtYXNzZXNbaV0uc3RhdGUueCAmJlxuICAgICAgICBtYXNzLnkgPT09IG1hc3Nlc1tpXS5zdGF0ZS55KSB7XG4gICAgICBtYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGx5cyBncmF2aXRhdGlvbiB0byB0aGUgaW5wdXQgcGFydGljbGUuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5ncmF2aXRhdGVUbyA9IGZ1bmN0aW9uKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgY29uc3QgZHkgPSBwMi5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuXG4gIC8vIERpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXNcbiAgY29uc3QgZGlzdFNRID0gZHggKiBkeCArIGR5ICogZHk7XG4gIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZGlzdFNRKTtcblxuICAvLyBNYWduaXR1ZGUgb2YgdGhlIHZlY3RvciBbRiA9IEcobTEpKG0yKS9yXjJdXG4gIGNvbnN0IGZvcmNlID0gcDIuc3RhdGUubWFzcyAvIGRpc3RTUTtcblxuICAvLyBTZXR0aW5nIHVwIGFuZ2xlcyBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IHNpbiA9IGR5IC8gZGlzdDtcbiAgY29uc3QgY29zID0gZHggLyBkaXN0O1xuXG4gIC8vIFNldHRpbmcgdmV0b3IgYW5nbGVcbiAgY29uc3QgYXggPSBjb3MgKiBmb3JjZTtcbiAgY29uc3QgYXkgPSBzaW4gKiBmb3JjZTtcblxuICByZXR1cm4gdGhpcy5hY2NlbGVyYXRlKGF4LCBheSk7XG59O1xuXG4vLyBUaGlzIGdlbmVyYXRvcnIgZnVuY3Rpb24gaXMgcHJldHR5IGdyb3NzIE1pbGVzIGZpeCB0aGlzIHlvdSBsYXp5IHBpbGUgb2YgZGV2ZWxvcGVyLlxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIGJ1bmNoIG9mIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBudW0gICAgICAgVGhlIG1heGltdW0gYW1vdW50IG9mIGdlbmVyYXRlZCBwYXJ0aWNsZXMgbmVlZGVkLlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgIG9wdHMgICAgICBPcHRpb25zIHRvIHBhc3MgZWFjaCBwYXJ0aWNsZVxuICogQHBhcmFtICB7UGFydGljbGV+Z2VuZXJhdG9yQ2FsbGJhY2t9IGNhbGxiYWNrICBGdW5jdGlvbiB0byBhbGxvdyBtYXBwaW5nLlxuICogQHJldHVybnMge1BhcnRpY2xlW119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZW5lcmF0b3IgPSBmdW5jdGlvbiBnZW4obnVtLCBvcHRzPWNsb25lKElOSVRJQUxfU1RBVEUpLCBjYWxsYmFjaykge1xuICAvLyBTaG91bGQgbm90IG11dGF0ZSB0aGUgb3B0aW9ucyBhZnRlciB0aGV5IGhhdmUgYmVlbiBnaXZlbiAvL1xuICBPYmplY3QuZnJlZXplKG9wdHMpO1xuXG4gIGNvbnN0IHBhcnRpY2xlcyA9IFtdO1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBjYWxsYmFjayhvcHRzLCBpLCBmdW5jdGlvbihwKSB7XG4gICAgICAgIGlmICghcCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcGFydGljbGUgcGFzc2VkIHRvIGdlbmVyYXRvci4gV2lsbCB1c2UgZGVmYXVsdCBzdGF0ZS5cIik7XG4gICAgICAgICAgY29uc3QgbmV3UGFydGljbGUgPSBzZWxmLmNyZWF0ZShvcHRzKTtcbiAgICAgICAgICBwYXJ0aWNsZXMucHVzaChuZXdQYXJ0aWNsZSk7XG4gICAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3UGFydGljbGUgPSBzZWxmLmNyZWF0ZShwKTtcbiAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICByZXR1cm4gbmV3UGFydGljbGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgcGFydGljbGVzLnB1c2goc2VsZi5jcmVhdGUob3B0cykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0aWNsZXM7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRvciBjYWxsYmFja1xuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAY2FsbGJhY2sgUGFydGljbGV+Z2VuZXJhdG9yQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbnMgdG8gYmUgZXh0ZW5kIG9uIHRvIGVhY2ggcGFydGljbGUuXG4gKiBAcGFyYW0ge051bWJlcn0gaSBJbmRleCBvZiBwYXJ0aWNsZSBpbiBBcnJheS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHt9IEEgY2FsbCBiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBnZW5lcmF0ZWQgcGFydGljbGUuXG4gKi9cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSB2ZWxvY2l0eSB0byB0aGUgcG9zaXRpb24uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eFxuICogQHBhcmFtICB7SW50ZWdlcn0gdnlcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBvc2l0aW9uIHN0YXRlIGFmdGVyIHZlbG9jaXR5IGhhcyBiZWVuIGFwcGxpZWRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZVBvcyA9IGZ1bmN0aW9uIHVwZGF0ZVBvcyh2eCwgdnkpIHtcbiAgaWYgKHZ4ID09PSB1bmRlZmluZWQgJiYgdnkgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3RhdGUueCArPSB0aGlzLnN0YXRlLnZ4O1xuICAgIHRoaXMuc3RhdGUueSArPSB0aGlzLnN0YXRlLnZ5O1xuICAgIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xuICB9XG5cbiAgdGhpcy5zdGF0ZS54ICs9IHZ4O1xuICB0aGlzLnN0YXRlLnkgKz0gdnk7XG4gIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcGFydGljbGVzIGNhbGN1bGF0ZSB0aGVcbiAqIHNwcmluZyBmb3JjZSBhcHBsaWVkIHRvIGJvdGggcGFydGljbGVzLlxuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBzcHJpbmcgIEdpdmVuIG9mZnNldCBmb3IgdGhlIHBhcnRpY2xlc1xuICogQHBhcmFtICB7SW50ZWdlcn0gIG9mZnNldCAgVGhlIHNwcmluZyBjb2VmZmljZW50XG4gKiBAcmV0dXJucyB7UGFydGljbGVbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ0Zyb21UbyA9IGZ1bmN0aW9uIHNwcmluZ0Zyb21UbyhwLCBzcHJpbmc9MC4wNSwgb2Zmc2V0PTEwMCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gb2Zmc2V0KSAqIHNwcmluZztcblxuICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gIC8vIEFjY2VsZXJhdGUgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgcC5zdGF0ZS52eCAtPSBzeDtcbiAgcC5zdGF0ZS52eSAtPSBzeTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHBhcnRpY2xlLCBhIHZlY3RvciwgYW5kIGEgc3ByaW5nIGNvZWZmaWVuY2VudCBhY2NlbGVyYXRlXG4gKiB0aGUgcGFydGljbGUgYWNjb3JkaW5nIHRvIHRoZSBkaXN0YW5jZSBpdHMgaXMgZnJvbSB0aGUgcG9pbnQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IHAgQSBzcHJpbmcgb2JqZWN0LlxuICogQHJldHVybnMge1BhcnRpY2xlfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc3ByaW5nVG9Qb2ludCA9IGZ1bmN0aW9uIHNwcmluZ1RvUG9pbnQocCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAucG9pbnQuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAucG9pbnQuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gcC5vZmZzZXQpICogcC5zcHJpbmc7XG5cbiAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSBzcHJpbmcgcG9pbnQgdG8gYWxsIGludGVybmFsIHNwcmluZ3MuXG4gKiBAcGFyYW0gIHtzcHJpbmdzfSBzcHJpbmdzIEFuIGFycmF5IG9mIHNwcmluZ3MgdG8gc3ByaW5nIHRvLlxuICogQHJldHVybnMge09iamVjdFtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuaGFuZGxlU3ByaW5ncyA9IGZ1bmN0aW9uIGhhbmRsZVNwcmluZ3Moc3ByaW5ncz10aGlzLnN0YXRlLnNwcmluZ3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5zcHJpbmdUb1BvaW50KHNwcmluZ3NbaV0pO1xuICB9XG4gIHJldHVybiBzcHJpbmdzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBGb3IgZWFjaCBtYXNzIGluIHRoZSBtYXNzZXMgYXJyYXkgYXBwbHkgZ3Jhdml0YXRlIHRvIGl0LlxuICogQHBhcmFtICB7UGFydGljbGVzW118T2JqZWN0W119IG1hc3Nlc1xuICogQHJldHVybnMge1BhcnRpY2xlc1tdfE9iamVjdFtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuaGFuZGxlTWFzc2VzID0gZnVuY3Rpb24gaGFuZGxlTWFzc2VzKG1hc3Nlcz10aGlzLnN0YXRlLm1hc3Nlcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuZ3Jhdml0YXRlVG8obWFzc2VzW2ldKTtcbiAgfVxuICByZXR1cm4gbWFzc2VzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvcGFydGljbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7LyoqL31cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9jbG9uZURlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVNYXAgPSByZXF1aXJlKCcuL19jbG9uZU1hcCcpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVNldCA9IHJlcXVpcmUoJy4vX2Nsb25lU2V0JyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhZGRNYXBFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZE1hcEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgQ0xPTkVfREVFUF9GTEFHKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIENMT05FX0RFRVBfRkxBRykgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkU2V0RW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAY2xhc3MgU2hhcGVzXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4ICAgICAgQ2FudmFzIGNvbnRleHQuXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gU2hhcGVzKGN0eCwgZG9jdW1lbnQpIHtcbiAgaWYgKCFjdHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGFwZXM6IFBsZWFzZSBwcm92aWRlIGEgY29udGV4dCBhcmd1bWVudCBbYXJnOjoxXVwiKTtcbiAgfVxuICB0aGlzLmN0eCA9IGN0eDtcbiAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIGRyYXcgYSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSByICAgICBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBGaWxsIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgIFN0YXJ0aW5nIHBvaW50IFhcbiAqIEBwYXJhbSAge051bWJlcn0geSAgICAgU3RhcnRpbmcgcG9pbnQgWVxuICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICBXaWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgIEhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yIEEgaGV4IHN0cmluZy5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gZHJhd1JlY3QoeCwgeSwgdz0xMCwgaD0xMCwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xufTtcblxuLyoqXG4gKiBwQ2lyY2xlXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucENpcmNsZSA9IGZ1bmN0aW9uIHBhcnRpY2xlQ2lyY2xlKHApIHtcbiAgdGhpcy5jaXJjbGUoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLnJhZGl1cyxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBwUmVjdFxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBSZWN0ID0gZnVuY3Rpb24gcGFydGljbGVSZWN0KHApIHtcbiAgdGhpcy5yZWN0KFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS53aWR0aCxcbiAgICBwLnN0YXRlLmhlaWdodCxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gRHJhdyBhIGxpbmUgYmV0d2VlbiB0aGVzZSB0d28gcG9pbnRzLlxuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHlsZVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lWFkgPSBmdW5jdGlvbih4MCwgeTAsIHgxLCB5MSwgc3R5bGU9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gc3R5bGU7XG4gIHRoaXMuY3R4Lm1vdmVUbyh4MCwgeTApO1xuICB0aGlzLmN0eC5saW5lVG8oeDEsIHkxKTtcbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lVmVjID0gZnVuY3Rpb24odmVjMCwgdmVjMSkge1xuICB0aGlzLmRyYXdMaW5lWFkodmVjMC5nZXQoXCJ4XCIpLCB2ZWMwLmdldChcInlcIiksIHZlYzEuZ2V0KFwieFwiKSwgdmVjMS5nZXQoXCJ5XCIpKTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lUG9pbnRzID0gZnVuY3Rpb24oLi4ucG9pbnRzKSB7XG4gIGNvbnN0IFtmaXJzdFBvaW50XSA9IHBvaW50cztcblxuICBpZiAoIWZpcnN0UG9pbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCBpbnB1dHNcIik7XG4gIH1cblxuICBpZiAocG9pbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGJlIGdpdmVuIGEgYSBudW1iZXIgb2YgcG9pbnRzIGdyZWF0ZXIgdGhhbiAxXCIpO1xuICB9XG5cbiAgY29uc3Qge3g6IHN4LCB5OiBzeX0gPSBmaXJzdFBvaW50O1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHgubW92ZVRvKHN4LCBzeSk7XG5cbiAgLy8gU29tZSB0cmlja3kgZGVzdHJ1Y3RpbmcgZ29pbmcgb24gaGVyZS5cbiAgLy8gSSBuZWVkIHNvbWUgcHJhY3RpY2Ugc28uLi4ganVzdCB0ZXN0aW5nIGl0IG91dC5cbiAgLy8gVGhlIC4uLnBvaW50cyBiaXQgaXMganVzdCBhIHNoYWxsb3cgY29weWluZyBhcnJheVxuICAvLyBidXQgZ2V0dGluZyByaWQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAvLyBUaGUgc2Vjb25kIGJpdCBpcyBkZXN0cnVjdGluZyB0aGUgb2JqZWN0IHRoYXRcbiAgLy8gaXQgZ2V0cyBmb3IgZWFjaCBpdGVyYXRpb24gYW5kIGFsaWFzaW5nXG4gIC8vIHRoZSB2YWx1ZXMgdG8gcHggYW5kIHB5LlxuXG4gIGNvbnN0IFssIC4uLnhzXSA9IHBvaW50cztcbiAgZm9yIChsZXQge3g6IHB4LCB5OiBweX0gb2YgeHMpIHtcbiAgICB0aGlzLmN0eC5saW5lVG8ocHgsIHB5KTtcbiAgfVxuXG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtICB7TnVtYmVyfSBncmlkU2l6ZVxuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvclxuICovXG5TaGFwZXMucHJvdG90eXBlLmdyaWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBncmlkU2l6ZT0yMCwgY29sb3I9XCIjY2NjXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIHkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh3aWR0aCwgeSk7XG4gIH1cblxuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zaGFwZXMuanMiLCIvKipcbiAqIFlBVCBzdGFuZHMgZm9yIFlldCBBbm90aGVyIFR3ZWVuLlxuICogV2h5IG5vdCBoYXZlIG9uZSBtb3JlIHBhY2thZ2UgdGhhdCBkb2VzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSA1MCBvdXQgdGhlcmU/XG4gKiBXZWxsIHRoYXRzIGEgZ29vZCBxdWVzdGlvbiB0aGF0IHdpbGwgbm90IGJlIGFuc3dlcmVkIGluIHRoaXMgY29tbWVudCBibG9jay5cbiAqIFRvIGJlIGhvbmVzdCBpdHMgZm9yIHByYWN0aWNlIGFuZCBsZWFybmluZyBwdXJwb3Nlcy4gQW5kIGlmIGFueW9uZSBpbiB0aGVpclxuICogcmlnaHQgbWluZCBhY3RhdWxseSBiZW5lZml0cyBmcm9tIHRoaXMgdGhlbiBzbyBiZSBpdC5cbiAqL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbmNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgb2JqOiB7eDogMCwgeTogMH0sXG4gIHByb3BzOiB7eDogMTAwLCB5OiAxMDB9LFxuICBlYXNpbmc6IFwiZWFzZVwiLFxuICBkdXJhdGlvbjogMTAwMCxcbn07XG5cbmNvbnN0IGV2ZW50SW5zdGFuY2UgPSBldmVudC5pbml0KCk7XG4vLyBJbmhlcml0IG1ldGhvZHMgZnJvbSBldmVudEluc3RhbmNlXG5jb25zdCBZQVQgPSBPYmplY3QuY3JlYXRlKGV2ZW50SW5zdGFuY2UpO1xuXG5ZQVQuaW5pdCA9IGZ1bmN0aW9uIGluaXRUd2VlbihvcHRzKSB7XG4gIC8vIENhbiBhbmQgdXNlcyBFdmVudCBhbmQgQ2xvY2sgbWV0aG9kcy5cblxuICBpZiAoIW9wdHMuY2xvY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIGNsb2NrIEFQSS5cIik7XG4gIH1cblxuICB0aGlzLl9jbG9jayA9IG9wdHMuY2xvY2suaW5pdCh7XG4gICAgZnBzOiBvcHRzLmZwcyB8fCA2MCxcbiAgfSk7XG5cbiAgdGhpcy5wYXJlbnQgPSBldmVudEluc3RhbmNlO1xuICB0aGlzLnR3ZWVucyA9IFtdO1xuXG4gIC8qKlxuICAgKiBlYXNpbmdGbnNcbiAgICogQGRlc2NyaXB0aW9uIEFsbCBlYXNpbmcgZnVuY3Rpb25zIGFyZSBvcmlnbmlhbGx5IHdyaXR0ZW5cbiAgICogYnkgcm9iZXJ0IHBlbm5lciwgdGhlIHR3ZWVuaW5nIGdvZC5cbiAgICogSGVyZSBlYWNoIG1ldGhvZCBpcyBwYXNzZWQgYSBub3JtYWxpemVkIHZhbHVlLiBXaGljaCBpc1xuICAgKiB1c3VhbGx5IGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS4gWW91IGNhbiB0aGluayBvZiB0aGlzIG51bWJlciBhc1xuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgYSByYW5nZS4gV2l0aCB0aGF0IG5vcm1saXplZCB2YWx1ZSAvIHBlcmNlbnRhZ2Ugd2VcbiAgICogY2FuIG1hcCB0aGF0IHBlcmNlbnRhZ2UgdG8gYW5vdGhlciByYW5nZS4gVGhpcyBpcyBjYWxsZWQgaW50ZXJwb2xhdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cDovL3JvYmVydHBlbm5lci5jb20vZWFzaW5nL31cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHRoaXMuZWFzaW5nRm5zID0ge1xuICAgIC8vIEhlcmUgdGhpcyBlYXNlIGZ1bmN0aW9uIGlzIGxpbmVhciBhcyB0aGVyZSBpcyBvbmx5IG9uZVxuICAgIC8vIG4gdmFsdWUuIEVhY2ggZWFzZSBmdW5jdGlvbiBjYW4gYmUgbWFwcGVkIHRvIGEgcG9seW5vbWlhbC5cbiAgICBlYXNlKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogYXggKyBiID0gYzsgd2hlcmUgeCBpcyB0aGUgbm9ybWFsaXplZCB2YWx1ZVxuICAgICAgcmV0dXJuIGMgKiBuICsgYjtcbiAgICB9LFxuICAgIGVhc2VJblF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAxeF4yICsgMHggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiBuKSArIGI7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhZChjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IC0xeF4yICsgMnggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiAoMiAtIG4pKSArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkKGMsIGIsIG4pIHtcbiAgICAgIGlmICgobio9MikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjLzIgKiAobipuKSArIGI7IC8vIFBvbHlub21pYWwgZm9yIGhhbGYgdGhlIHJhbmdlOlxuICAgICAgICAvLyAyeF4yICsgMHggKyAwID0gZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtYy8yICogKCgtLW4pKihuLTIpIC0gMSkgKyBiOyAvLyBQb2x5bm9taWFsIGZvciB0aGUgdGhlIHVwcGVyXG4gICAgICAvLyBoYWxmIG9mIHRoZSByYW5nZTogLTJ4XjIgKyA0eCAtIDFcbiAgICB9LFxuICB9O1xuXG4gIHRoaXMuX2Nsb2NrLm9uKFwidGlja1wiLCB0aGlzLnVwZGF0ZVR3ZWVucywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHVwZGF0ZVR3ZWVucyAtIFVwZGF0ZXMgYWxsIHRoZSB0d2VlbiBpbnN0YW5jZXMuXG4gKi9cbllBVC51cGRhdGVUd2VlbnMgPSBmdW5jdGlvbiB1cGRhdGVUZWVucygpIHtcbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodHdlZW4pID0+IHtcbiAgICBpZiAodHdlZW4udGlja2VyLm5lZWRzVXBkYXRlKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICB9XG5cbiAgICBpZiAoIXR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSAmJlxuICAgICAgICB0d2Vlbi50aWNrZXIuU1RBVEUgPT09IFwiRE9ORVwiKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICAgIHR3ZWVuLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0d2Vlbi50aWNrZXIuc3RvcHBlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIHR3ZWVuIGlzIHN0b3BwZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5ZQVQuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz17fSkge1xuICBjb25zdCBZQVRJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoWUFUKTtcbiAgY29uc3QgX29wdHMgPSBPYmplY3QuYXNzaWduKGNsb25lKERFRkFVTFRTKSwgb3B0cyk7XG4gIGNvbnN0IHtkdXJhdGlvbiwgb2JqLCBwcm9wcywgZWFzaW5nLCBpZH0gPSBfb3B0cztcblxuICBpZiAoIVlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZWFzaW5nIGZ1bmN0aW9uICR7ZWFzaW5nfSBkb2VzIG5vdCBleGlzdHNgKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIGlmICh0aGlzLnR3ZWVucy5zb21lKCh4KSA9PiB4LmlkID09PSBpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHR3ZWVuIHdpdGggaWQ6ICR7aWR9IGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIFlBVEluc3RhbmNlLmlkID0gaWQ7XG4gIH0gZWxzZSB7XG4gICAgWUFUSW5zdGFuY2UuaWQgPSB0aGlzLnR3ZWVucy5sZW5ndGggKyAxO1xuICB9XG5cbiAgWUFUSW5zdGFuY2Uuc3RhdGUgPSBjbG9uZShvYmopO1xuICBZQVRJbnN0YW5jZS5vYmogPSBvYmo7XG4gIFlBVEluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIFlBVEluc3RhbmNlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIFlBVEluc3RhbmNlLmVhc2luZyA9IFlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddO1xuICBZQVRJbnN0YW5jZS50aWNrZXIgPSB0aGlzLl9jbG9jay5jcmVhdGVTbGF2ZSh7XG4gICAgaWQ6IFlBVEluc3RhbmNlLmlkLFxuICAgIGR1cmF0aW9uOiBZQVRJbnN0YW5jZS5kdXJhdGlvbixcbiAgfSk7XG5cbiAgdGhpcy50d2VlbnMucHVzaChZQVRJbnN0YW5jZSk7XG4gIHJldHVybiBZQVRJbnN0YW5jZTtcbn07XG5cbllBVC5nZXQgPSBmdW5jdGlvbihpZCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFlBVFswXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2Vlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLnR3ZWVuW2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudHdlZW5baV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuWUFULnJld2luZCA9IGZ1bmN0aW9uKGlkPXRoaXMuaWQpIHtcbiAgY29uc3QgdHdlZW4gPSB0aGlzLmdldChpZCk7XG5cbiAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICB0d2Vlbi5zdG9wKCk7XG4gIH1cblxuICAvLyBGaWd1cmUgb3V0IGEgd2F5IHRvIGNhY2hlIHRoZSBvbGQgcHJvcHMgLy9cbiAgdGhpcy5vcHRzLm9iaiA9IHRoaXMub3B0cy5wcm9wcztcbiAgdGhpcy5vcHRzLnByb3BzID0gdGhpcy5vcHRzLnByb3BzQmVmb3JlVHdlZW47XG5cbiAgdHdlZW4uc3RhcnQoKTtcbn07XG5cbllBVC5zdGFydEFsbCA9IGZ1bmN0aW9uIHN0YXJ0QWxsKCkge1xuICBpZiAoIXRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RhcnRcIik7XG4gIH1cblxuICB0aGlzLnR3ZWVucy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgdC50aWNrZXIuc3RhcnQoKTtcbiAgfSk7XG5cbiAgdGhpcy5fY2xvY2suc3RhcnQoKTtcbn07XG5cbi8qKlxuICogc3RvcEFsbCAtIFN0b3BzIGFsbCB0d2VlbnNcbiAqL1xuWUFULnN0b3BBbGwgPSBmdW5jdGlvbiBzdG9wQWxsKCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYXJlIG5vIHR3ZWVucyB0byBzdG9wXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2suc3RvcCgpO1xufTtcblxuLyoqXG4gKiBkZWxheSAtIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb25cbiAqIEBwYXJhbSAge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZHVyYXRpb24pIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICB0aGlzLm9iaiA9IGNsb25lKHRoaXMuc3RhdGUpO1xuICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGlja2VyLnN0YXJ0KCksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBzdG9wcyB0aGUgdGlja2VyXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZmluaXNoIC0gZmluaXNoZXMgdGhlIHR3ZWVuIGFuaW1hdGlvblxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5fY2xvY2sucmVtb3ZlU2xhdmUodGhpcy50aWNrZXIuaWQpO1xuICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5ZQVQucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGlkPXRoaXMuaWQpIHtcbiAgdGhpcy50d2VlbnMgPSB0aGlzLnR3ZWVucy5maWx0ZXIoKHQpID0+IHtcbiAgICBpZiAodC5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHQudGlja2VyLmlkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG5ZQVQudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHRpY2tlcikge1xuICBpZiAoIXRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHt0aW1lU2luY2VTdGFydDogZGVsdGEsIGR1cmF0aW9ufSA9IHRpY2tlcjtcbiAgY29uc3Qgbm9ybSA9IHV0aWxzLm5vcm1hbGl6ZShkZWx0YSwgMCwgZHVyYXRpb24ubXMpO1xuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLm9iaikge1xuICAgIGlmICh0aGlzLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodGhpcy5vYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuZWFzaW5nKHRoaXMucHJvcHNba2V5XSAtIHRoaXMub2JqW2tleV0sIHRoaXMub2JqW2tleV0sIG5vcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBZQVQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9cbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5cbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90d2Vlbi5qcyIsIi8qKlxuICogRXZlbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAaW1wbGVtZW50cyB7dXRpbHN9XG4gKi9cbmNvbnN0IEV2ZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBpbml0XG4gKiBAbWVtYmVyT2YgRXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgZXZlbnQgb2JqZWN0LlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmluaXQgPSBmdW5jdGlvbiBpbml0RXZlbnQoKSB7XG4gIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBlbWl0XG4gKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGhhbmRlbGVyIHRoYXQgYXNzb2NhaXRlZCB3aXRoIHRoZSBlbWl0dGVkIGV2ZW50LlxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmVtaXQgPSBmdW5jdGlvbiBlbWl0KC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50LCAuLi5yZXN0XSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudDogUGxlYXNlIHByb3ZpZGUgdHJ1dGh5IGFyZ3VtZW50c1wiKTtcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcblxuICBpZiAodGhpcy5jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCkge1xuICAgIHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soLi4ucmVzdCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb25cbiAqIEBkZXNjcmlwdGlvbiBBdHRhY2ggYSBoYW5kbGVyIHRvIGFuIGV2ZW50LlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge09iamVjdH0gICBjb250ZXh0XG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgaWYgKCFldmVudCB8fCAhZm4pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICBpZiAoY29udGV4dCkge1xuICAgIGZuID0gZm4uYmluZChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50LnNwbGl0KFwiIFwiKTtcblxuICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGV2ZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgdGhpcy5jYWxsYmFja3NbZV0gPSB0aGlzLmNhbGxiYWNrc1tlXSB8fCBbXTtcblxuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZV0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERvbnQgY3JlYXRlIGR1cGxpY2F0ZXMgb2YgdGhlIHNhbWUgaGFuZGVsZWQgZnVuY3Rpb24uXG4gICAgLy8gSWYgeW91IHdhbnQgeW91ciBmdW5jdGlvbiBydW4gdHdpY2Ugd3JhcCBpdCBpbiBhIGZ1bmN0aW9uLlxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1tlXS5ldmVyeSgoY2IsIGksIGNvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNiICE9PSBmbjtcbiAgICB9KSA/IHRoaXMuY2FsbGJhY2tzW2VdLnB1c2goZm4pIDpcbiAgICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IFRoYXQgZnVuY3Rpb24gJHtmbn0gaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZCBhYCArXG4gICAgICAgIFwiaGFuZGxlciBmb3IgdGhpcyBldmVudC5cIik7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBvZmZcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYW4gZXZlbnQgaGFuZGVsZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9mZiA9IGZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgZm5dID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIWZuKSB7XG4gICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IGNhbGxiYWNrcy5maWx0ZXIoKGNiKSA9PiBjYiAhPT0gZm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBsaXN0ZW5lcnMgLSBSZXR1cm4gYWxsIGNhbGxiYWNrcyBhdHRhY2hlZCB0byBhIGNlcnRhaW4gZXZlbnRcbiAqIEBwYXJhbSAge2FueTxBcnJheT59IGFyZ3NcbiAqIEByZXR1cm4ge2Z1bmN0aW9uW119XG4gKi9cbkV2ZW50Lmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWxsYmFja3MpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNhbGxiYWNrc1tldmVudF0pIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xufTtcblxuRXZlbnQub25jZSA9IGZ1bmN0aW9uIG9uY2UoLi4uYXJncykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgW2V2ZW50LCBmbiwgY29udGV4dF0gPSBhcmdzO1xuXG4gIGNvbnN0IHdyYXAgPSBmdW5jdGlvbiB3cmFwKCkge1xuICAgIGZuLmJpbmQoY29udGV4dCkoKTtcbiAgICBzZWxmLm9mZihldmVudCwgd3JhcCk7XG4gIH07XG5cbiAgdGhpcy5vbihldmVudCwgd3JhcCwgY29udGV4dCk7XG59O1xuXG4vLyBBbGlhc2VzIC8vXG5FdmVudC5yZW1vdmVMaXN0ZW5lciA9IEV2ZW50LnJlbW92ZUFsbExpc3RlbmVycyA9IEV2ZW50Lm9mZjtcbkV2ZW50LmZpcmUgPSBFdmVudC5lbWl0O1xuRXZlbnQuYWRkTGlzdGVuZXIgPSBFdmVudC5vbjtcbkV2ZW50LmdldCA9IEV2ZW50Lmxpc3RlbmVycztcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZXZlbnQuanMiLCJjb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpLmluaXQoKTtcbmNvbnN0IENsb2NrID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBNQVhfRlBTID0gNjA7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogaW5pdCAtIEluaXRhbGl6ZXMgdGhlIGNsb2NrIHdpdGggY29ycmVjdCBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG9wdHMuZnBzIFRoZSBmcHMgeW91IHdhbnQgdGhlIGNsb2NrIHRvIHRpY2sgYXQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suaW5pdCA9IGZ1bmN0aW9uIGluaXRDbG9jayhvcHRzPXt9KSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBmcHM6IE1BWF9GUFMsXG4gIH0sIG9wdHMpO1xuXG4gIHRoaXMuc2xhdmVzID0gW107XG4gIHRoaXMucGFyZW50ID0gZXZlbnQ7XG5cbiAgLy8gWmVybyBiYXNlZCBmcmFtZSBjb3VudC5cbiAgdGhpcy5pbmRleCA9IC0xO1xuXG4gIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGlvbiBmcmFtZSBzbyB3ZSBjYW4gY2FuY2VsIGl0XG4gIHRoaXMuckFGID0gMDtcblxuICAvLyBUaW1lIHByb3BlcnRpZXNcbiAgdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMubGFzdFRpbWU7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIC8vIFRoZSBtYXhpbXVtIEZQUyB0aGUgYnJvd3NlciBjYW4gZGVsaXZlciBpcyA2MC5cbiAgdGhpcy5mcHMgPSBvcHRzLmZwcyA+IE1BWF9GUFMgP1xuICAgIE1BWF9GUFMgOlxuICAgIChvcHRzLmZwcyB8fCBNQVhfRlBTKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RhcnQgLSBTdGFydHMgdGhlIGNsb2NrIHdpdGggc3RhcnRpbmcgdGltZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7TnVtYmVyfSBmcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5mcHMgPiA2MCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgdG9vIGhpZ2hcIik7XG4gIH1cblxuICBpZiAoK3RoaXMuZnBzID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIG5vdCB2YWxpZFwiKTtcbiAgfVxuXG4gIHRoaXMuZnBzID0gMTAwMCAvIHRoaXMuZnBzO1xuICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG5cbiAgLy8gU3RhcnQgdGlja2luZ1xuICB0aGlzLmxvb3AodGhpcy5zdGFydFRpbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogdGlja1xuICogQHBhcmFtICB7TnVtYmVyfSBuZXdUaW1lIEEgdmFsdWUgaW4gbXMgdGhhdCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCB0aW1lLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmxvb3AgPSBmdW5jdGlvbiBsb29wKG5ld1RpbWUpIHtcbiAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTtcblxuICBsZXQgZGVsdGEgPSBuZXdUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IG5ld1RpbWUgLSB0aGlzLnN0YXJ0VGltZTtcblxuICBpZiAoZGVsdGEgPiB0aGlzLmZwcykge1xuICAgIHRoaXMuaW5kZXgrKztcblxuICAgIHRoaXMud2hpcFNsYXZlcyh7XG4gICAgICBuZXdUaW1lLFxuICAgICAgZGVsdGEsXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIGxhc3RUaW1lOiB0aGlzLmxhc3RUaW1lLFxuICAgICAgY2xvY2tTdGFydDogdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aW1lU2luY2VTdGFydDogdGhpcy50aW1lU2luY2VTdGFydCxcbiAgICB9KTtcblxuICAgIHRoaXMubGFzdFRpbWUgPSBuZXdUaW1lIC0gKGRlbHRhICUgdGhpcy5mcHMpO1xuICB9XG5cbiAgdGhpcy5lbWl0KFwicmVuZGVyXCIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gU3RvcCB0aGUgY2xvY2sgYW5kIGNhbGwgdGhlIGxhc3QgdGljayBpZiBuZWVkZWQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suc3RvcCA9IGZ1bmN0aW9uIHN0b3BDbG9jaygpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xuXG4gIC8vIFJlY29yZCB3aGVuIHdlIHN0b3BwZWQuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCArPSB0aGlzLnN0b3BUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcblxuICB0aGlzLmVtaXQoXCJzdG9wcGVkXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogd2hpcFNsYXZlcyAtIFJ1biBhbGwgc2xhdmVzIGluIHNlcXVlbmNlIGFuZCBwYXNzIGluXG4gKiB0aGUgZ2l2ZW4gc3RhdGUgb2YgdGhlIGNsb2NrLlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLndoaXBTbGF2ZXMgPSBmdW5jdGlvbiB3aGlwU2xhdmVzKHN0YXRlKSB7XG4gIGlmICghdGhpcy5zbGF2ZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5zbGF2ZXMuZm9yRWFjaCgoc2xhdmUsIGluZGV4KSA9PiB7XG4gICAgc2xhdmUubnVkZ2Uoc3RhdGUpO1xuICB9KTtcblxuICB0aGlzLmVtaXQoXCJ0aWNrXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkNsb2NrLmNyZWF0ZVNsYXZlID0gZnVuY3Rpb24gY3JlYXRlU2xhdmUob3B0cykge1xuICBpZiAoIW9wdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIG9wdGlvbnMgb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3Qge2lkLCBkdXJhdGlvbn0gPSBvcHRzO1xuICBjb25zdCB0aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBzbGF2ZSA9IE9iamVjdC5jcmVhdGUodGlja2VyKVxuICAgIC5pbml0KHt0aW1lU3RhbXAsIGlkLCBkdXJhdGlvbn0pO1xuXG4gIGlmIChpZCkge1xuICAgIHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICAgIHJldHVybiBzbGF2ZTtcbiAgfVxuXG4gIHNsYXZlLmlkID0gdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gIHJldHVybiBzbGF2ZTtcbn07XG5cbkNsb2NrLnJlbW92ZVNsYXZlID0gZnVuY3Rpb24gcmVtb3ZlU2xhdmUoaWQpIHtcbiAgdGhpcy5zbGF2ZXMgPSB0aGlzLnNsYXZlcy5maWx0ZXIoKHNsYXZlKSA9PiB7XG4gICAgaWYgKHNsYXZlLmlkICE9PSBpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNsYXZlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5DbG9jay5jbGVhclNsYXZlcyA9IGZ1bmN0aW9uIGNsZWFyU2xhdmVzKCkge1xuICBpZiAodGhpcy5zbGF2ZXMubGVuZ3RoKSB0aGlzLnNsYXZlcyA9IFtdO1xufTtcblxuQ2xvY2sucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgdGhpcy5yQUYgPSAwO1xufTtcblxuQ2xvY2sucmVtb3ZlQWxsU2xhdmVzID0gQ2xvY2suY2xlYXJTbGF2ZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy5kdXJhdGlvbi5tcyAtIHRoaXMudGltZVNpbmNlU3RhcnQgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKG5ld0R1cmF0aW9uLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xufTtcblxuVGlja2VyLm51ZGdlID0gZnVuY3Rpb24gbnVkZ2Uoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc3RhdGUgb2JqZWN0XCIpO1xuICB9XG5cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==