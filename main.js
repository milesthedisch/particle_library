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
	
	/**
	 * colorInterpolation
	 * @param  {Number} val  A value from 0 - 1
	 * @param  {[type]} hexA A hexidecimal color
	 * @param  {[type]} hexB A hexidecimal color
	 * @return {[type]} hexC A hexidecimal color
	 */
	Utils.colorInterpolation = function colorInterpolation(val, hexA, hexB) {
	  // If given hsl then it should use the hsl value and interpolate that value
	
	  // If given rgb/a it should use the rgba value given and interpolate that value
	
	  // The options should in include lch intepolation
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmMWM1NGMwNTVhOTI0MzBhMzFlMSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90aWNrZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwicmVxdWlyZSIsIlBhcnRpY2xlIiwiVXRpbHMiLCJTaGFwZXMiLCJZQVQiLCJDbG9jayIsIlRpY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1dGlscyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwicHJvdG90eXBlIiwiY3JlYXRlIiwidmVjIiwic2V0IiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwiZ2V0Iiwic2V0QW5nbGUiLCJyYWQiLCJsZW5ndGgiLCJnZXRMZW5ndGgiLCJNYXRoIiwiY29zIiwic2luIiwic2V0TGVuZ3RoIiwiZ2V0QW5nbGUiLCJoeXBvdCIsImF0YW4yIiwiYWRkIiwidjIiLCJzZWxmIiwiY29uc3RydWN0b3IiLCJuYW1lIiwidmVjcyIsIm1hcCIsInYiLCJyZWR1Y2UiLCJ2MCIsInZuIiwic3VidHJhY3QiLCJtdWx0aXBseSIsImRpdmlkZSIsImFkZFRvIiwic3VidHJhY3RGcm9tIiwibXVsdGlwbHlCeSIsImRpdmlkZUJ5Iiwicm90YXRlIiwiZGVsdGEiLCJyYW5kb20iLCJyVmVjdG9yIiwibWluIiwibWF4IiwibGVycCIsInJhbmRvbUJldHdlZW4iLCJyQmV0d2VlbiIsInhNaW4iLCJ4TWF4IiwieU1pbiIsInlNYXgiLCJPYmplY3QiLCJub3JtYWxpemUiLCJ2YWx1ZSIsInNyY01pbiIsInNyY01heCIsImRlc3RNaW4iLCJkZXN0TWF4IiwicGVyY2VudCIsImNsYW1wIiwiZmxvb3IiLCJkaXN0YW5jZVhZIiwieDAiLCJ5MCIsIngxIiwieTEiLCJkeCIsImR5IiwiZGlzdGFuY2VWZWMiLCJ2MSIsImRWZWMiLCJpblJhbmdlIiwicmFuZ2VJbnRlcnNlY3QiLCJtaW4wIiwibWF4MCIsIm1pbjEiLCJtYXgxIiwidmVjdG9ySW50ZXJzZWN0IiwidmVjMCIsInZlYzEiLCJjb2xsaXNpb25SZWN0IiwicjAiLCJyMSIsInIweCIsInIweSIsInIxeCIsInIxeSIsInIwdyIsIndpZHRoIiwicjBoIiwiaGVpZ2h0IiwicjF3IiwicjFoIiwiY29sbGlzaW9uQ2lyY2xlIiwiYzEiLCJjMiIsInJhZGkiLCJyYWRpdXMiLCJkaXN0YW5jZSIsImNvbGxpc2lvbkNpcmNsZVBvaW50IiwiY2lyY2xlIiwiZGlzdCIsImNvbGxpc2lvbkNpcmNsZVZlYyIsImNvbGxpc2lvblJlY3RQb2ludCIsInJlY3QiLCJyZWN0WCIsInJlY3RZIiwiY29sbGlzaW9uUmVjdFZlYyIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJEYXRlIiwibm93IiwiYXBwbHkiLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiLCJFcnJvciIsImFuZ2xlIiwiZGVnVG9SYWQiLCJkZWciLCJQSSIsInJhZFRvRGVnIiwicm91bmRUb1BsYWNlcyIsInBsYWNlcyIsIm11bHQiLCJwb3ciLCJyb3VuZCIsInJvdW5kVG9NdWx0aXBsZSIsIm5lYXJlc3QiLCJTdHJpbmciLCJxdWFkcmF0aWNCZXppZXIiLCJ0IiwiY3ViaWNCZXppZXIiLCJ2MyIsInF1YWRyYXRpY0JlemllclBvaW50IiwicDAiLCJwMSIsInAyIiwiY3ViaWNCZXppZXJQb2ludCIsInAzIiwibXVsdGlDdXJ2ZSIsInBvaW50cyIsImN0eCIsIm1pZFgiLCJtaWRZIiwibW92ZVRvIiwiaSIsInF1YWRyYXRpY0N1cnZlVG8iLCJlYXNlIiwiYSIsImIiLCJhYnMiLCJlYXNlVG8iLCJvcmlnaW4iLCJ0YXJnZXQiLCJ0aHJlc2hvbGQiLCJpc09iamVjdCIsImRhdGEiLCJ0b1N0cmluZyIsImNhbGwiLCJ1bmlxdWUiLCJhcnJheSIsImluZGV4T2YiLCJwdXNoIiwiY29sb3JJbnRlcnBvbGF0aW9uIiwiaGV4QSIsImhleEIiLCJwZXJzcGVjdGl2ZSIsImZvY2FsTGVuZ3RoIiwiZXh0ZW5kIiwiY2xvbmUiLCJ2eCIsInZ5IiwiZ3Jhdml0eSIsIm1hZ25pdHVkZSIsIm1hc3MiLCJkaXJlY3Rpb24iLCJmcmljdGlvbiIsInNwcmluZ3MiLCJtYXNzZXMiLCJvcHRzIiwicGFydGljbGUiLCJzZXRTcGVlZCIsInNldEhlYWRpbmciLCJhY2NlbGVyYXRlIiwiYXgiLCJheSIsInVwZGF0ZSIsImZyaWMiLCJncmF2IiwiaGFuZGxlU3ByaW5ncyIsImhhbmRsZU1hc3NlcyIsInVwZGF0ZVBvcyIsInNwZWVkIiwiZ2V0SGVhZGluZyIsImdldFNwZWVkIiwiYWRkU3ByaW5nIiwic3ByaW5nIiwicmVtb3ZlU3ByaW5nIiwicCIsInBvaW50Iiwic3BsaWNlIiwiYW5nbGVUbyIsImFuZ2VsVG8iLCJkaXN0YW5jZVRvIiwiYWRkTWFzcyIsInJlbW92ZU1hc3MiLCJncmF2aXRhdGVUbyIsImRpc3RTUSIsInNxcnQiLCJmb3JjZSIsImdlbmVyYXRvciIsImdlbiIsIm51bSIsImNhbGxiYWNrIiwiZnJlZXplIiwicGFydGljbGVzIiwiY29uc29sZSIsImxvZyIsIm5ld1BhcnRpY2xlIiwidW5kZWZpbmVkIiwic3ByaW5nRnJvbVRvIiwib2Zmc2V0Iiwic3ByaW5nRm9yY2UiLCJzeCIsInN5Iiwic3ByaW5nVG9Qb2ludCIsImRvY3VtZW50Iiwid2luZG93IiwiZHJhd0NpcmNsZSIsInIiLCJjb2xvciIsImZpbGxTdHlsZSIsImJlZ2luUGF0aCIsImFyYyIsImZpbGwiLCJkcmF3UmVjdCIsInciLCJoIiwiZmlsbFJlY3QiLCJwQ2lyY2xlIiwicGFydGljbGVDaXJjbGUiLCJwUmVjdCIsInBhcnRpY2xlUmVjdCIsImRyYXdMaW5lWFkiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhd0xpbmVWZWMiLCJkcmF3TGluZVBvaW50cyIsImZpcnN0UG9pbnQiLCJ4cyIsInB4IiwicHkiLCJncmlkIiwiZ3JpZFNpemUiLCJldmVudCIsIkRFRkFVTFRTIiwib2JqIiwicHJvcHMiLCJlYXNpbmciLCJkdXJhdGlvbiIsImV2ZW50SW5zdGFuY2UiLCJpbml0IiwiaW5pdFR3ZWVuIiwiY2xvY2siLCJfY2xvY2siLCJmcHMiLCJwYXJlbnQiLCJ0d2VlbnMiLCJlYXNpbmdGbnMiLCJjIiwibiIsImVhc2VJblF1YWQiLCJlYXNlT3V0UXVhZCIsImVhc2VJbk91dFF1YWQiLCJvbiIsInVwZGF0ZVR3ZWVucyIsInVwZGF0ZVRlZW5zIiwiZm9yRWFjaCIsInR3ZWVuIiwidGlja2VyIiwibmVlZHNVcGRhdGUiLCJTVEFURSIsInJlbW92ZSIsInN0b3BwZWQiLCJZQVRJbnN0YW5jZSIsIl9vcHRzIiwiYXNzaWduIiwiaWQiLCJzb21lIiwiY3JlYXRlU2xhdmUiLCJyZXdpbmQiLCJzdG9wIiwicHJvcHNCZWZvcmVUd2VlbiIsInN0YXJ0Iiwic3RhcnRBbGwiLCJzdG9wQWxsIiwiZGVsYXkiLCJmaW5pc2giLCJyZW1vdmVTbGF2ZSIsImZpbHRlciIsInRpbWVTaW5jZVN0YXJ0Iiwibm9ybSIsIm1zIiwia2V5IiwiRXZlbnQiLCJpbml0RXZlbnQiLCJjYWxsYmFja3MiLCJlbWl0IiwicmVzdCIsIlR5cGVFcnJvciIsImZuIiwiYmluZCIsImV2ZW50cyIsInNwbGl0IiwiZSIsImV2ZXJ5IiwiY2IiLCJjb2wiLCJ3YXJuIiwib2ZmIiwibGlzdGVuZXJzIiwia2V5cyIsIm9uY2UiLCJ3cmFwIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJmaXJlIiwiYWRkTGlzdGVuZXIiLCJNQVhfRlBTIiwibm9vcCIsImluaXRDbG9jayIsInNsYXZlcyIsImluZGV4IiwickFGIiwic3RhcnRUaW1lIiwibGFzdFRpbWUiLCJzdG9wVGltZSIsIk5hTiIsInBlcmZvcm1hbmNlIiwibG9vcCIsIm5ld1RpbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3aGlwU2xhdmVzIiwiY2xvY2tTdGFydCIsInN0b3BDbG9jayIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2xlYXJTbGF2ZXMiLCJzbGF2ZSIsIm51ZGdlIiwidGltZVN0YW1wIiwicmVzZXQiLCJyZW1vdmVBbGxTbGF2ZXMiLCJTVE9QUEVEIiwiUlVOTklORyIsIkRPTkUiLCJpbnRlcnZhbCIsInRpY2tGb3IiLCJ0aW1lU2luY2VTdGFydDIiLCJzdHJpbmciLCJ0eXBlIiwibmV3RHVyYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBZjtBQUNBLEtBQU1DLFdBQVcsbUJBQUFELENBQVEsQ0FBUixDQUFqQjtBQUNBLEtBQU1FLFFBQVEsbUJBQUFGLENBQVEsQ0FBUixDQUFkO0FBQ0EsS0FBTUcsU0FBUyxtQkFBQUgsQ0FBUSxHQUFSLENBQWY7QUFDQSxLQUFNSSxNQUFNLG1CQUFBSixDQUFRLEdBQVIsQ0FBWjtBQUNBLEtBQU1LLFFBQVEsbUJBQUFMLENBQVEsR0FBUixDQUFkO0FBQ0EsS0FBTU0sU0FBUyxtQkFBQU4sQ0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDakJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzREE7QUFDQTs7QUFF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LGNBQWMsS0FBS3JHLFFBQUwsQ0FBYzJDLEVBQWQsR0FBbUIsS0FBS0YsY0FBeEIsSUFBMEMsQ0FBOUQ7O0FBRUEsUUFBS3pDLFFBQUwsR0FBZ0IsS0FBS2lHLE9BQUwsQ0FBYUksV0FBYixFQUEwQixjQUExQixDQUFoQjtBQUNBLFFBQUs1RCxjQUFMLEdBQXNCLENBQXRCOztBQUVBLFFBQUtvQyxRQUFMLEdBQWdCRSxZQUFZdk8sR0FBWixFQUFoQjtBQUNELEVBYkQ7O0FBZUEvSCxRQUFPZ1gsS0FBUCxHQUFlLFNBQVNBLEtBQVQsQ0FBZXpXLEtBQWYsRUFBc0I7QUFDbkMsT0FBSSxDQUFDQSxLQUFMLEVBQVk7QUFDVixXQUFNLElBQUk4SCxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNEOztBQUdELE9BQUksS0FBS3dLLEtBQUwsS0FBZUEsTUFBTXVFLE9BQXJCLElBQWdDLEtBQUt2RSxLQUFMLEtBQWVBLE1BQU13RSxPQUF6RCxFQUFrRTtBQUNoRSxVQUFLekUsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNEOztBQUVELFFBQUtDLEtBQUwsR0FBYUEsTUFBTXdFLE9BQW5CO0FBQ0EsUUFBS3JELGNBQUwsSUFBdUJ6VCxNQUFNdUMsS0FBN0I7O0FBRUEsT0FBSSxLQUFLa1IsY0FBTCxHQUFzQixLQUFLekMsUUFBTCxDQUFjMkMsRUFBeEMsRUFBNEM7QUFDMUMsVUFBS3RCLFdBQUwsR0FBbUIsSUFBbkI7QUFDRCxJQUZELE1BRU87QUFDTCxVQUFLQyxLQUFMLEdBQWFBLE1BQU15RSxJQUFuQjtBQUNBLFVBQUsxRSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0Q7QUFDRixFQXBCRDs7QUFzQkEzUyxRQUFPQyxPQUFQLEdBQWlCRixNQUFqQixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJwYXJ0aWNsZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmMWM1NGMwNTVhOTI0MzBhMzFlMSIsImNvbnN0IFZlY3RvciA9IHJlcXVpcmUoXCIuL2xpYi92ZWN0b3JzXCIpO1xuY29uc3QgUGFydGljbGUgPSByZXF1aXJlKFwiLi9saWIvcGFydGljbGVcIik7XG5jb25zdCBVdGlscyA9IHJlcXVpcmUoXCIuL2xpYi91dGlsc1wiKTtcbmNvbnN0IFNoYXBlcyA9IHJlcXVpcmUoXCIuL2xpYi9zaGFwZXNcIik7XG5jb25zdCBZQVQgPSByZXF1aXJlKFwiLi9saWIvdHdlZW5cIik7XG5jb25zdCBDbG9jayA9IHJlcXVpcmUoXCIuL2xpYi9jbG9jay5qc1wiKTtcbmNvbnN0IFRpY2tlciA9IHJlcXVpcmUoXCIuL2xpYi90aWNrZXIuanNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBWZWN0b3IsXG4gIFBhcnRpY2xlLFxuICBVdGlscyxcbiAgU2hhcGVzLFxuICBZQVQsXG4gIFRpY2tlcixcbiAgQ2xvY2ssXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4uanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzLmpzXCIpO1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAxLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgVmVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBWZWN0b3Ioc3RhdGU9SU5JVElBTF9TVEFURSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59O1xuXG4vKipcbiAqIENyZWF0ZSAtIEVhc3kgd2F5IHRvIGluc3RhbnRpYXRlIGEgdmVjdG9yLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7SW50fSB4XG4gKiBAcGFyYW0gIHtJbnR9IHlcbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICBBIG9iamVjdCBpbmhlcml0aW5nIGZyb20gVmVjdG9yLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZSh4PTAsIHk9MCkge1xuICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gIHJldHVybiB2ZWM7XG59O1xuXG4vKipcbiAqIFNldCAtIEEgc2V0dGVyIGZvciB0aGUgdmVjdG9yIGNsYXNzLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7Kn0gcHJvcFxuICogQHBhcmFtICB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtCb29sZWFufSBJcyB0aGUgcHJvcCB5b3VyIHBhc3NpbmcgaW4gZXhzaXN0LlxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChwcm9wLCB2YWwpIHtcbiAgLy8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcbiAgLy8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGlmICh0aGlzLnN0YXRlLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0gIHtTdHJpbmd9IHByb3AgIFRoZSBwcm9wIHRvIHNldCBvbiBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZhbHVlfSAgICAgICAgVGhlIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcC5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiBnZXQocHJvcCkge1xuICByZXR1cm4gdGhpcy5zdGF0ZVtwcm9wXTtcbn07XG5cbi8qKlxuICogc2V0QW5nbGUgLSBQbG90IHRoZSBjb3JyZGluYXRlcyBiYXNlZCBvbiByYWRpYW5zIGdpdmVuLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtSYWRpYW5zfSByYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuc2V0QW5nbGUgPSBmdW5jdGlvbiBzZXRBbmdsZShyYWQpIHtcbiAgLy8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcbiAgLy8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgdGhpcy5zZXQoXCJ4XCIsIE1hdGguY29zKHJhZCkgKiBsZW5ndGgpO1xuICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG59O1xuXG4vKipcbiAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGxlbmd0aFxuICovXG5WZWN0b3IucHJvdG90eXBlLnNldExlbmd0aCA9IGZ1bmN0aW9uIHNldExlbmd0aChsZW5ndGgpIHtcbiAgLy8gVE9ETzogQWRkIGNoZWNrIHJhZCBpcyBudW1iZXJcbiAgLy8gMS4gQ3JlYXRlIHV0aWxzLmlzTnVtYmVyIGZ1bmN0aW9uLlxuXG4gIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gIHRoaXMuc2V0KFwieVwiLCBNYXRoLnNpbihyYWQpICogbGVuZ3RoKTtcbn07XG5cbi8qKlxuICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHJldHVybiB7SW50ZWdlcn0gQ29vcmlkaW5hdGVzLlxuICovXG5WZWN0b3IucHJvdG90eXBlLmdldExlbmd0aCA9IGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcbiAgY29uc3QgeCA9IHRoaXMuZ2V0KFwieFwiKTtcbiAgY29uc3QgeSA9IHRoaXMuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoeCwgeSk7XG59O1xuXG4vKipcbiAqIGdldEFuZ2xlIC0gR2V0IHRoZSBhbmdsZSBvZiBjb29yZGluYXRlcyBmcm9tIGNlbnRlciBwbGFuZS5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5nZXRBbmdsZSA9IGZ1bmN0aW9uIGdldEFuZ2xlKCkge1xuICBjb25zdCB4ID0gdGhpcy5nZXQoXCJ4XCIpO1xuICBjb25zdCB5ID0gdGhpcy5nZXQoXCJ5XCIpO1xuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbn07XG5cbi8qKlxuICogYWRkIC0gU2hvdWxkIGFkZCB2ZWN0b3JzIHRvZ2V0aGVyIGdpdmVuIGEgdmVjdG9yXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge1ZlY3Rvcn0gdjIgQSBnaXZlbiB2ZWN0b3IgdG8gYWRkLlxuICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICovXG5cblZlY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkKHYyKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh2Mi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIgJiYgdjIubGVuZ3RoKSB7XG4gICAgLy8gUmVmYWN0b3IgdG8gbWFrZSBtb3JlIGVmZmVjaWVudCAvL1xuICAgIGNvbnN0IHZlY3MgPSB2MlxuICAgICAgLm1hcCgodikgPT4gKHt4OiB2LmdldChcInhcIiksIHk6IHYuZ2V0KFwieVwiKX0pKVxuICAgICAgLnJlZHVjZSgodjAsIHZuKSA9PiAoe3g6IHYwLnggKyB2bi54LCB5OiB2MC55ICsgdm4ueX0pLCBzZWxmLnN0YXRlKTtcblxuICAgIHJldHVybiBzZWxmLmNyZWF0ZSh2ZWNzLngsIHZlY3MueSk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgc2VsZi5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKSxcbiAgICBzZWxmLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG4gICk7XG59O1xuXG4vKipcbiAqIHN1YnRyYWN0IC0gc2hvdWxkIHN1YnRyYWN0IHRoZSBnaXZlbiB2ZWN0b3Igd2l0aCBpdHMgb3duIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gLSB7eDogMiwgeTogMn0gPSB7eDogMCwgeTogMH1cbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdCA9IGZ1bmN0aW9uIHN1YnRyYWN0KHYyKSB7XG4gIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gIGlmICh2Mi5jb25zdHJ1Y3Rvci5uYW1lID09PSBcIkFycmF5XCIgJiYgdjIubGVuZ3RoKSB7XG4gICAgLy8gUmVmYWN0b3IgdG8gbWFrZSBtb3JlIGVmZmVjaWVudCAvL1xuICAgIGNvbnN0IHZlY3MgPSB2Mi5tYXAoKHYpID0+ICh7eDogdi5nZXQoXCJ4XCIpLCB5OiB2LmdldChcInlcIil9KSlcbiAgICAucmVkdWNlKCh2MCwgdm4pID0+XG4gICAgICAoe3g6IHYwLnggLSB2bi54LCB5OiB2MC55IC0gdm4ueX0pLFxuICAgIHNlbGYuc3RhdGUpO1xuXG4gICAgcmV0dXJuIHNlbGYuY3JlYXRlKHZlY3MueCwgdmVjcy55KTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICBzZWxmLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuICAgIHNlbGYuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogTXVsaXRwbHlpbmcgdmVjdG9ycyB0b2dldGhlclxuICogQG1lbWJlck9mIFZlY3RvclxuICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9ICoge3g6IDIsIHk6IDJ9ID0ge3g6IDQsIHk6IDR9XG4gKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICovXG5WZWN0b3IucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gbXVsdGlwbHkodjIpIHtcbiAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgIHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIiksXG4gICAgdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKVxuICApO1xufTtcblxuLyoqXG4gKiBEaXZpZGUgdmVjdG9ycyB0b2dldGhlci5cbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gZGl2aWRlKHYyKSB7XG4gIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpLFxuICAgIHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcbiAgKTtcbn07XG5cbi8qKlxuICogQWRkcyB0byBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5hZGRUbyA9IGZ1bmN0aW9uIGFkZFRvKHYyKSB7XG4gIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIik7XG4gIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSArIHYyLmdldChcInlcIik7XG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAqL1xuVmVjdG9yLnByb3RvdHlwZS5zdWJ0cmFjdEZyb20gPSBmdW5jdGlvbiBzdWJ0cmFjdEZyb20odjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC0gdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHlCeSA9IGZ1bmN0aW9uIG11bHRpcGx5QnkodjIpIHtcbiAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKTtcbiAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMuc3RhdGU7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gKi9cblZlY3Rvci5wcm90b3R5cGUuZGl2aWRlQnkgPSBmdW5jdGlvbiBkaXZpZGVCeSh2Mikge1xuICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLyB2Mi5nZXQoXCJ4XCIpO1xuICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFZlY3RvclxuICogQHBhcmFtICB7TnVtYmVyfSBhbmdsZSBBIG51bWJlciBvZiByYWRpYW5zIHRvIHJvdGF0ZSBjbG9ja3dpc2UgYnkuXG4qL1xuVmVjdG9yLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbihkZWx0YSkge1xuICBjb25zdCBjb3MgPSBNYXRoLmNvcyhkZWx0YSk7XG4gIGNvbnN0IHNpbiA9IE1hdGguc2luKGRlbHRhKTtcblxuICAvL1xuICBjb25zdCB4ID0gdGhpcy5zdGF0ZS54ICogY29zIC0gdGhpcy5zdGF0ZS55ICogc2luO1xuICBjb25zdCB5ID0gdGhpcy5zdGF0ZS55ICogY29zICsgdGhpcy5zdGF0ZS54ICogc2luO1xuXG4gIHRoaXMuc3RhdGUueCA9IHg7XG4gIHRoaXMuc3RhdGUueSA9IHk7XG59O1xuXG4vKipcbiAqIHJhbmRvbSBnZW5lcmF0ZSBhIHZlY3RvciB3aXRoIHJhbmRvbSBzdGF0ZXMuXG4gKiBAbWVtYmVyT2YgVmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gbWluIC0gQSBtaW4gcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IC0gQSBtYXggcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gKiBAcmV0dXJuIHtWZWN0b3J9XG4gKi9cblZlY3Rvci5wcm90b3R5cGUucmFuZG9tID0gZnVuY3Rpb24gclZlY3RvcihtaW49MSwgbWF4PTEwKSB7XG4gIGNvbnN0IHggPSB1dGlscy5sZXJwKE1hdGgucmFuZG9tKCksIG1pbiwgbWF4KTtcbiAgY29uc3QgeSA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICByZXR1cm4gdGhpcy5jcmVhdGUoeCwgeSk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBWZWN0b3JcbiAqIEBkZXNjcmlwdGlvbiBSZXR1cm4gYSB2ZWN0b3IgdGhhdCBoYXMgYSB4IGJldHdlZW4gdGhlIGdpdmVuIHJhbmdlLlxuICogICAgICAgICAgICAgIGFuZCB5IGdpdmVuIGEgcmFuZ2UuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHhNaW4gTWlubXVtIHggdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0geE1heCBNYXhpbXVtIHggdmFsdWVcbiAqIEBwYXJhbSAge051bWJlcn0geU1pbiBNaW5tdW0geSB2YWx1ZVxuICogQHBhcmFtICB7TnVtYmVyfSB5TWF4IE1heGltdW0geSB2YWx1ZVxuICogQHJldHVybiB7VmVjdG9yfVxuICovXG5WZWN0b3IucHJvdG90eXBlLnJhbmRvbUJldHdlZW4gPSBmdW5jdGlvbiByQmV0d2Vlbih4TWluPTAsIHhNYXg9MTAsIHlNaW49MCwgeU1heD0xMCkge1xuICB4TWF4ID0gTWF0aC5tYXgoeE1pbiwgeE1heCk7XG4gIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4TWF4KTtcbiAgeU1heCA9IE1hdGgubWF4KHlNaW4sIHlNYXgpO1xuICB5TWluID0gTWF0aC5taW4oeU1pbiwgeU1heCk7XG5cbiAgY29uc3QgeSA9IHV0aWxzLnJhbmRvbUJldHdlZW4oeU1pbiwgeU1heCk7XG4gIGNvbnN0IHggPSB1dGlscy5yYW5kb21CZXR3ZWVuKHhNaW4sIHhNYXgpO1xuXG4gIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbn07XG5cblZlY3Rvci5wcm90b3R5cGVbXCIrXCJdID0gVmVjdG9yLnByb3RvdHlwZS5hZGQ7XG5WZWN0b3IucHJvdG90eXBlW1wiLVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3Q7XG5WZWN0b3IucHJvdG90eXBlW1wiKlwiXSA9IFZlY3Rvci5wcm90b3R5cGUubXVsdGlwbHk7XG5WZWN0b3IucHJvdG90eXBlW1wiL1wiXSA9IFZlY3Rvci5wcm90b3R5cGUuZGl2aWRlO1xuVmVjdG9yLnByb3RvdHlwZVtcIis9XCJdID0gVmVjdG9yLnByb3RvdHlwZS5hZGRUbztcblZlY3Rvci5wcm90b3R5cGVbXCItPVwiXSA9IFZlY3Rvci5wcm90b3R5cGUuc3VidHJhY3RGcm9tO1xuVmVjdG9yLnByb3RvdHlwZVtcIio9XCJdID0gVmVjdG9yLnByb3RvdHlwZS5tdWx0aXBseUJ5O1xuVmVjdG9yLnByb3RvdHlwZVtcIi89XCJdID0gVmVjdG9yLnByb3RvdHlwZS5kaXZpZGVCeTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3ZlY3RvcnMuanMiLCIvKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGNvbXBvc2VkIG9mIHNtYWxsIGZ1bmN0aW9uIHRoYXRcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gbmVlZGVkLiBNb3N0IGZ1bmN0aW9ucyBhcmUgcHVyZVxuICogYW5kIG9ubHkgcmV0dXJuIHZhbHVlcy4gRm9yIG1vcmUgaW5mbyByZWFkIHRoZSBkb2NzLlxuICovXG5cbi8qKlxuICogQGNsYXNzIFV0aWxzXG4gKiBAcmV0dXJuIHtVdGlsc31cbiAqL1xuY29uc3QgVXRpbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50fSB2YWwgLSBUaGUgdmFsdWUgdGhhdCBsaWVzIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWluIC0gVGhlIG1heGl1bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEByZXR1cm4ge0ludH0gSW50IC0gVGhlIHZhbHVlIHJlcHJlc2VudGVkIGluIHRoYXQgcmFuZ2UuXG4gKi9cblV0aWxzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsIC0gbWluKSAvIChtYXggLSBtaW4pO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cblV0aWxzLmxlcnAgPSBmdW5jdGlvbiBsZXJwKHZhbCwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIChtYXggLSBtaW4pICogdmFsICsgbWluO1xufTtcblxuLyoqXG4gKiBtYXAgLSBHaXZlbiAyIHNldCBvZiB2YWx1ZXMgbWFwIHRoZW0gdG8gYW5vdGhlciBzZXQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSAge251bWJlcn0gc3JjTWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01heFxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWluXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlc3RNYXhcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMubWFwID0gZnVuY3Rpb24gbWFwKHZhbHVlLCBzcmNNaW4sIHNyY01heCwgZGVzdE1pbiwgZGVzdE1heCkge1xuICBzcmNNYXggPSBNYXRoLm1heChzcmNNYXgsIHNyY01pbik7XG4gIHNyY01pbiA9IE1hdGgubWluKHNyY01heCwgc3JjTWluKTtcbiAgZGVzdE1pbiA9IE1hdGgubWluKGRlc3RNaW4sIGRlc3RNYXgpO1xuICBkZXN0TWF4ID0gTWF0aC5tYXgoZGVzdE1pbiwgZGVzdE1heCk7XG4gIHJldHVybiB0aGlzLmxlcnAodGhpcy5ub3JtYWxpemUodmFsdWUsIHNyY01pbiwgc3JjTWF4KSwgZGVzdE1pbiwgZGVzdE1heCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBUYWtlcyBhIHZhbHVlIGFuZCByZXR1cm5zIGEgcHJlY2VudGFnZS5cbiAqICAgICAgICAgICAgICB5b3UgY2FuIHBhc3MgYXJiaXRyYXJ5IGxhcmdlIG51bWJlcnMgaW4gYnV0IHRoYXRzIG5vdFxuICogICAgICAgICAgICAgIHRoZSBpbnRlbmRlZCBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb24uXG4gKiBAcGFyYW0gIHtGbG9hdH0gdmFsIFx0QSB2YWx1ZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHJldHVybiB7UGVyY2VudH0gICAgQSB2YWx1ZS5cbiAqL1xuVXRpbHMucGVyY2VudCA9IGZ1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdmFsICogMTAwO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBudW1iZXIgYW5kIGEgcmFuZ2UgcmV0dXJuIHRoZVxuICogICAgICAgICAgICAgIHZhbHVlIGJldHdlZW4gdGhhdCByYW5nZSBvciB0aGUgbWF4IG51bWJlciBvciBtaW4gbnVtYmVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuVXRpbHMuY2xhbXAgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihtaW4sIG1heCkpLCBNYXRoLm1heChtaW4sIG1heCkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIG51bWJlcnMgcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB5XG4gKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICovXG5VdGlscy5yYW5kb21CZXR3ZWVuID0gZnVuY3Rpb24oeCwgeSkge1xuICBsZXQgbWluID0gTWF0aC5taW4oeCwgeSk7XG4gIGxldCBtYXggPSBNYXRoLm1heCh4LCB5KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBjb29yZGluYXRlcyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5kaXN0YW5jZVhZID0gZnVuY3Rpb24oeDAsIHkwLCB4MSwgeTEpIHtcbiAgY29uc3QgZHggPSB4MCAtIHgxO1xuICBjb25zdCBkeSA9IHkwIC0geTE7XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gdmVjdG9ycyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2MVxuICogQHBhcmFtICB7VmVjdG9yfSB2MlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5VdGlscy5kaXN0YW5jZVZlYyA9IGZ1bmN0aW9uKHYxLCB2Mikge1xuICBjb25zdCBkVmVjID0gKHYxKVtcIi1cIl0odjIpO1xuICByZXR1cm4gTWF0aC5oeXBvdChkVmVjLmdldChcInhcIiksIGRWZWMuZ2V0KFwieVwiKSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhIG51bWJlclxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5pblJhbmdlID0gZnVuY3Rpb24odmFsLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbCA8PSBNYXRoLm1heChtYXgsIG1pbikpICYmIChNYXRoLm1pbihtYXgsIG1pbikgPD0gdmFsKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdHdvIHJhbmdlcyBzZWUgaWYgYm90aCBpbnRlcnNlY3QgZWFjaCBvdGhlci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSBtaW4wXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDBcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMVxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgxXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5yYW5nZUludGVyc2VjdCA9IGZ1bmN0aW9uKG1pbjAsIG1heDAsIG1pbjEsIG1heDEpIHtcbiAgcmV0dXJuIChcbiAgICBNYXRoLm1heChtYXgwLCBtaW4wKSA+PSBNYXRoLm1pbihtaW4xLCBtYXgxKSAmJlxuICAgIE1hdGgubWluKG1pbjAsIG1heDApIDw9IE1hdGgubWF4KG1heDEsIG1pbjEpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d29zIHZlY3RvcnMgc2VlIGlmIHRoZXkgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMudmVjdG9ySW50ZXJzZWN0ID0gZnVuY3Rpb24odmVjMCwgdmVjMSkge1xuICBjb25zdCB4MCA9IHZlYzAuZ2V0KFwieFwiKTtcbiAgY29uc3QgeTAgPSB2ZWMwLmdldChcInlcIik7XG4gIGNvbnN0IHgxID0gdmVjMS5nZXQoXCJ4XCIpO1xuICBjb25zdCB5MSA9IHZlYzEuZ2V0KFwieVwiKTtcbiAgcmV0dXJuIHRoaXMucmFuZ2VJbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHJlY3RhbmdlIHNlZSBpZiB0aGUgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjBcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uUmVjdCA9IGZ1bmN0aW9uKHIwLCByMSkge1xuICBjb25zdCByMHggPSByMC5zdGF0ZS54O1xuICBjb25zdCByMHkgPSByMC5zdGF0ZS55O1xuICBjb25zdCByMXggPSByMS5zdGF0ZS54O1xuICBjb25zdCByMXkgPSByMS5zdGF0ZS55O1xuXG4gIGNvbnN0IHIwdyA9IHIweCArIHIwLnN0YXRlLndpZHRoO1xuICBjb25zdCByMGggPSByMHkgKyByMC5zdGF0ZS5oZWlnaHQ7XG4gIGNvbnN0IHIxdyA9IHIxeCArIHIxLnN0YXRlLndpZHRoO1xuICBjb25zdCByMWggPSByMXkgKyByMS5zdGF0ZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICB0aGlzLnJhbmdlSW50ZXJzZWN0KHIweCwgcjB3LCByMXgsIHIxdykgJiZcbiAgICB0aGlzLnJhbmdlSW50ZXJzZWN0KHIweSwgcjBoLCByMXksIHIxaClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHRvIHBhcnRpY2xlIHdpdGggcmFkaSByZXR1cm4gd2V0aGVyIHRoZXkgY29sbGlkZSBhcmUgbm90XG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMVxuICogQHBhcmFtICB7UGFydGljbGV9IGMyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25DaXJjbGUgPSBmdW5jdGlvbihjMSwgYzIpIHtcbiAgY29uc3QgcmFkaSA9IChjMS5zdGF0ZS5yYWRpdXMgKyBjMi5zdGF0ZS5yYWRpdXMpO1xuICBjb25zdCBkaXN0YW5jZSA9IHRoaXMuZGlzdGFuY2VYWShjMS5zdGF0ZS54LCBjMS5zdGF0ZS55LCBjMi5zdGF0ZS54LCBjMi5zdGF0ZS55KTtcblxuICBpZiAoZGlzdGFuY2UpIHtcbiAgICByZXR1cm4gcmFkaSA+IGRpc3RhbmNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwb2ludCBhbmQgYSBjaXJjbGUgcmV0dXJuIGEgYm9vbGVhbiByZWdhcmRpbmcgd2V0aGVyIHRoZXkgYXJlIGNvbGxpZGluZy5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25DaXJjbGVQb2ludCA9IGZ1bmN0aW9uKHgsIHksIGNpcmNsZSkge1xuICAvLyBUT0RPIFdyaXRlIHRlc3RzLlxuICBjb25zdCBkaXN0ID0gdGhpcy5kaXN0YW5jZVhZKFxuICAgIHgsXG4gICAgeSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IGRpc3Q7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgYSBjb2xsaXNpb24gYmV0d2VlbiBjaXJjbGVzIGEgdmVjdG9yLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25DaXJjbGVWZWMgPSBmdW5jdGlvbih2ZWMsIGNpcmNsZSkge1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IHRoaXMuZGlzdGFuY2VYWShcbiAgICB2ZWMuZ2V0KFwieFwiKSxcbiAgICB2ZWMuZ2V0KFwieVwiKSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGNvbGxpc2lvbiBvZiBhIHJlY3RhbmdsZSBhbmQgYSBwb2ludC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuY29sbGlzaW9uUmVjdFBvaW50ID0gZnVuY3Rpb24oeCwgeSwgcmVjdCkge1xuICBjb25zdCByZWN0WCA9IHJlY3Quc3RhdGUueDtcbiAgY29uc3QgcmVjdFkgPSByZWN0LnN0YXRlLnk7XG4gIHJldHVybiAoXG4gICAgdGhpcy5pblJhbmdlKHgsIHJlY3RYLCByZWN0WCArIHJlY3Quc3RhdGUud2lkdGgpICYmXG4gICAgdGhpcy5pblJhbmdlKHksIHJlY3RZLCByZWN0WSArIHJlY3Quc3RhdGUuaGVpZ2h0KVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB2ZWN0b3IgYW5kIGEgcmV0YW5nbGUgY2hlY2sgd2V0aGVyIHRoZXkgY29sbGlkZWQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5VdGlscy5jb2xsaXNpb25SZWN0VmVjID0gZnVuY3Rpb24odmVjLCByZWN0KSB7XG4gIHJldHVybiB0aGlzLmNvbGxpc2lvblJlY3RQb2ludCh2ZWMuZ2V0KFwieFwiKSwgdmVjLmdldChcInlcIiksIHJlY3QpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBSdW4gYSBmdW5jdGlvbiBvbmx5IGlmIHRoZSBnaXZlbiB0aW1lIHRvIGFsbG93IHRoZSBmdW5jdGlvbiBleGVjdXRlXG4gKiBoYXMgcGFzc2VkLiBJZlxuICogQHBhcmFtICB7RnVuY3Rpb259IGZ1bmMgQSBmdW5jdGlvbiB0byBjYWxsIGV2ZXJ5IGRlbHRhLlxuICogQHBhcmFtICB7TnVtYmVyfSB3YWl0IFRoZSBtaW5pbXVtIHRpbWUgdG8gd2FpdC5cbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIHVuZGVyc2NvcmVcbiAqL1xuVXRpbHMudGhyb3R0bGUgPSBmdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIGxldCBjb250ZXh0O1xuICBsZXQgYXJncztcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogRGF0ZS5ub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgbGV0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmdzO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IENvb3JkaW5hdGVzXG4gKi9cblV0aWxzLnNldExlbmd0aCA9IGZ1bmN0aW9uKGxlbmd0aCwgeCwgeSkge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgbGVuZ3RoICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbjIoeSwgeCk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gLSBTZXR0aW5nIHRoZSBhbmdsZSBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGFuZ2xlXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IGNvb3JkaW5hdGVzXG4gKi9cblV0aWxzLnNldEFuZ2xlID0gZnVuY3Rpb24oYW5nbGUsIHgsIHkpIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGFuZ2xlICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KHgsIHkpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIENvdmVydHMgZGVncmVlcyB0byByYWRpYW5zXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlZyBEZWdyZXNzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLmRlZ1RvUmFkID0gZnVuY3Rpb24oZGVnKSB7XG4gIHJldHVybiBkZWcgLyAxODAgKiBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBDb3ZlcnRzIHJhZGlhbnMgdG8gZGVncmVzc1xuICogQHBhcmFtICB7bnVtYmVyfSByYWRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucmFkVG9EZWcgPSBmdW5jdGlvbihyYWQpIHtcbiAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJvdW5kIHRvIG5lYXJlc3QgcGxhY2UgZ2l2ZW4uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBwbGFjZXMgQW4gZXhwb25lbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucm91bmRUb1BsYWNlcyA9IGZ1bmN0aW9uKHZhbCwgcGxhY2VzKSB7XG4gIGNvbnN0IG11bHQgPSBNYXRoLnBvdygxMCwgcGxhY2VzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsICogbXVsdCkgLyBtdWx0O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdmFsXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG5lYXJlc3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMucm91bmRUb011bHRpcGxlID0gZnVuY3Rpb24odmFsLCBuZWFyZXN0KSB7XG4gIGlmICghbmVhcmVzdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdGhpbmcgY2FuIGJlIGEgbXVsdGlwbGUgb2YgXCIgKyBTdHJpbmcobmVhcmVzdCkpO1xuICB9XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAvIG5lYXJlc3QpICogbmVhcmVzdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cblV0aWxzLnF1YWRyYXRpY0JlemllciA9IGZ1bmN0aW9uKHYwLCB2MSwgdjIsIHQpIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAyKSAqIHYwICsgKDEgLSB0KSAqIDIgKiB0ICogdjEgKyB0ICogdCAqIHYyO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdjBcbiAqIEBwYXJhbSAge251bWJlcn0gdjFcbiAqIEBwYXJhbSAge251bWJlcn0gdjJcbiAqIEBwYXJhbSAge251bWJlcn0gdjNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7bnVtYmVyfSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuVXRpbHMuY3ViaWNCZXppZXIgPSBmdW5jdGlvbih2MCwgdjEsIHYyLCB2MywgdCkge1xuICByZXR1cm4gTWF0aC5wb3coMSAtIHQsIDMpICogdjAgK1xuICAgICAgICAgTWF0aC5wb3coMSAtIHQsIDIpICogMyAqIHQgKiB2MSArXG4gICAgICAgICAoMSAtIHQpICogMyAqIHQgKiB0ICogdjIgK1xuICAgICAgICAgdCAqIHQgKiB0ICsgdjM7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSBwMFxuICogQHBhcmFtICB7bnVtYmVyfSBwMVxuICogQHBhcmFtICB7bnVtYmVyfSBwMlxuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5xdWFkcmF0aWNCZXppZXJQb2ludCA9IGZ1bmN0aW9uKHAwLCBwMSwgcDIsIHQpIHtcbiAgY29uc3QgeCA9IHRoaXMucXVhZHJhdGljQmV6aWVyKHAwLngsIHAxLngsIHAyLngsIHQpO1xuICBjb25zdCB5ID0gdGhpcy5xdWFkcmF0aWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgdCk7XG4gIHJldHVybiB7eCwgeX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSBwMFxuICogQHBhcmFtICB7bnVtYmVyfSBwMVxuICogQHBhcmFtICB7bnVtYmVyfSBwMlxuICogQHBhcmFtICB7bnVtYmVyfSBwM1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5VdGlscy5jdWJpY0JlemllclBvaW50ID0gZnVuY3Rpb24ocDAsIHAxLCBwMiwgcDMsIHQpIHtcbiAgeCA9IHRoaXMuY3ViaWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgdCk7XG4gIHkgPSB0aGlzLmN1YmljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHQpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBwb2ludHMgb24gdGhlIHBsYW5lIGRyYXcgYSBjdXJ2ZWQgbGluZSBiZXR3ZWVuXG4gKiBhbGwgb2YgdGhlbS5cbiAqIEBwYXJhbSAge3tudW1iZXIsIG51bWJlcn19IHBvaW50c1xuICogQHBhcmFtICB7Q2FudmFzUmVuZGVyaW5nQ29udGV4dDJEfSBjdHhcbiAqL1xuVXRpbHMubXVsdGlDdXJ2ZSA9IGZ1bmN0aW9uKHBvaW50cywgY3R4KSB7XG4gIGxldCBwMDtcbiAgbGV0IHAxO1xuICBsZXQgbWlkWDtcbiAgbGV0IG1pZFk7XG5cbiAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgIHAwID0gcG9pbnRzW2ldO1xuICAgIHAxID0gcG9pbnRzW2kgKyAxXTtcbiAgICBtaWRYID0gKHAwLnggKyBwMS54KS8yO1xuICAgIG1pZFkgPSAocDAueSArIHAxLnkpLzI7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgbWlkWCwgbWlkWSk7XG4gIH1cblxuICBwMCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl07XG4gIHAxID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgcDEueCwgcDEueSk7XG59O1xuXG4vKipcbiAqIGVhc2VcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7RmxvYXR9IGVhc2UgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SW50fSBhICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge0ludH0gYiAgICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtJbnR9ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5VdGlscy5lYXNlID0gZnVuY3Rpb24oZWFzZSwgYSwgYikge1xuICAvLyB0aGUgZGVsdGEgY2FuIGdldCBleHRyZW1lbHkgc21hbGwgYW5kIGl0cyBub3QgcGVyZm9ybWFudCB0byBrZWVwXG4gIC8vIG9uIHJlbmRlcmluZyBvciBjYWxjdWxhdGluZyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VzLlxuICBpZiAoTWF0aC5hYnMoYiAtIGEpIDwgMC4xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChiIC0gYSkgKiBlYXNlO1xufTtcblxuVXRpbHMuZWFzZVRvID0gZnVuY3Rpb24oZWFzZSwgb3JpZ2luLCB0YXJnZXQsIHRocmVzaG9sZD0wLjEpIHtcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIG9yaWdpbi54O1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG5cbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGR4KSA8IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkeSkgPCB0aHJlc2hvbGQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvcmlnaW4ueCArPSBkeCAqIGVhc2U7XG4gIG9yaWdpbi55ICs9IGR5ICogZWFzZTtcblxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuLyoqXG4gKiBpc1BsYWluT2JqZWN0XG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuVXRpbHMuaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChkYXRhKSB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoe30pLnRvU3RyaW5nLmNhbGwoZGF0YSkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59O1xuXG4vKipcbiAqIHVuaXF1ZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBubyBkdXBsaWNhdGUgdmFsdWVzXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5VdGlscy51bmlxdWUgPSBmdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoeCwgeSkgPT4ge1xuICAgIGlmICh4LmluZGV4T2YoeSkgPT09IC0xKSB4LnB1c2goeSk7XG4gICAgcmV0dXJuIHg7XG4gIH0sIFtdKTtcbn07XG5cbi8qKlxuICogY29sb3JJbnRlcnBvbGF0aW9uXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbCAgQSB2YWx1ZSBmcm9tIDAgLSAxXG4gKiBAcGFyYW0gIHtbdHlwZV19IGhleEEgQSBoZXhpZGVjaW1hbCBjb2xvclxuICogQHBhcmFtICB7W3R5cGVdfSBoZXhCIEEgaGV4aWRlY2ltYWwgY29sb3JcbiAqIEByZXR1cm4ge1t0eXBlXX0gaGV4QyBBIGhleGlkZWNpbWFsIGNvbG9yXG4gKi9cblV0aWxzLmNvbG9ySW50ZXJwb2xhdGlvbiA9IGZ1bmN0aW9uIGNvbG9ySW50ZXJwb2xhdGlvbih2YWwsIGhleEEsIGhleEIpIHtcbiAgLy8gSWYgZ2l2ZW4gaHNsIHRoZW4gaXQgc2hvdWxkIHVzZSB0aGUgaHNsIHZhbHVlIGFuZCBpbnRlcnBvbGF0ZSB0aGF0IHZhbHVlXG5cbiAgLy8gSWYgZ2l2ZW4gcmdiL2EgaXQgc2hvdWxkIHVzZSB0aGUgcmdiYSB2YWx1ZSBnaXZlbiBhbmQgaW50ZXJwb2xhdGUgdGhhdCB2YWx1ZVxuXG4gIC8vIFRoZSBvcHRpb25zIHNob3VsZCBpbiBpbmNsdWRlIGxjaCBpbnRlcG9sYXRpb25cblxuICByZXR1cm4gXCJzb21lSGV4XCI7XG59O1xuXG5VdGlscy5wZXJzcGVjdGl2ZSA9IGZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZvY2FsTGVuZ3RoLCBkaXN0YW5jZSkge1xuICByZXR1cm4gZm9jYWxMZW5ndGggLyAoZm9jYWxMZW5ndGggLSBkaXN0YW5jZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUoVXRpbHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlscy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vKlxuKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4qIGFuZCBmZWVsIGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4qL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNsZVxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZShzdGF0ZT1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIHBhcnRpY2xlIGdpdmVuIGEgZGlyZWN0aW9uIGFuZCBtYWduaXR1ZGUuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge09iamVjdH0gICBvcHRzIG9wdGlvbmFsIHN0YXRlIHZhbHVlcyB0byBwYXNzIHRvIGNyZWF0ZS5cbiAqIEByZXR1cm5zIHtQYXJ0aWNsZX0gcmV0dXJucyBhIHBhcnRpY2xlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbihvcHRzPWNsb25lKElOSVRJQUxfU1RBVEUpKSB7XG4gIC8vIEV4dGVuZCB0aGUgb3B0aW9uYWwgc3RhdGUgb24gdG8gdGhlIGRlZmF1bHQgc3RhdGUuXG4gIG9wdHMgPSBleHRlbmQodHJ1ZSwgY2xvbmUoSU5JVElBTF9TVEFURSksIG9wdHMpO1xuXG4gIC8vIENyZWF0ZSBwYXJ0aWNsZSB3aXRoIHRoZSBuZXcgb3B0aW9ucy5cbiAgY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUob3B0cyk7XG5cbiAgLy8gU2V0IGxlbmd0aC5cbiAgcGFydGljbGUuc2V0U3BlZWQob3B0cy5tYWduaXR1ZGUpO1xuXG4gIC8vIFNldCBhbmdsZS5cbiAgcGFydGljbGUuc2V0SGVhZGluZyhvcHRzLmRpcmVjdGlvbik7XG5cbiAgLy8gUmV0dXJuIG5ldyBwYXJ0aWNsZS5cbiAgcmV0dXJuIHBhcnRpY2xlO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gQSBjaGFuZ2UgaW4gdmVsb2NpdHkuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBheFxuICogQHBhcmFtICB7SW50ZWdlcn0gYXlcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFjY2VsZXJhdGlvbiB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hY2NlbGVyYXRlID0gZnVuY3Rpb24gYWNjZWxlcmF0ZShheD10aGlzLnN0YXRlLnZ4LCBheT10aGlzLnN0YXRlLnZ5KSB7XG4gIHRoaXMuc3RhdGUudnggKz0gYXg7XG4gIHRoaXMuc3RhdGUudnkgKz0gYXk7XG4gIHJldHVybiB7YXgsIGF5fTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEEgdXBkYXRlIGEgcG9zaXRpb24gb2YgYSBwYXJ0aWNsZVxuICogYmFzZWQgb24gaXRzIGdyYXZpdHkgYW5kIGZyaWNpdGlvbi4gR3Jhdml0eSBpcyB1c3VhbGx5IGEgYWNjZWxlcmF0aW9uXG4gKiB2ZWN0b3IuXG4gKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBmcmljIEZyaWNpdGlvbiB0byBhcHBseS5cbiAqIEBwYXJhbSAge0ludGVnZXJ9IGdyYXYgR3Jhdml0eSB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFBvc2l0aW9uIHN0YXRlLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGZyaWM9dGhpcy5zdGF0ZS5mcmljdGlvbiwgZ3Jhdj10aGlzLnN0YXRlLmdyYXZpdHkpIHtcbiAgLy8gQXBwbHkgc3ByaW5nc1xuICB0aGlzLmhhbmRsZVNwcmluZ3MoKTtcblxuICAvLyBBcHBseSBncmF2aXRhdGlvbnNcbiAgdGhpcy5oYW5kbGVNYXNzZXMoKTtcblxuICAvLyBBcHBseSBmYWtlIGZyaWNpdGlvbiB0byB2ZWxvY2l0eVxuICB0aGlzLnN0YXRlLnZ4ICo9IGZyaWM7XG4gIHRoaXMuc3RhdGUudnkgKj0gZnJpYztcblxuICAvLyBBcHBseSBncmF2aXR5IHRvIHZlbG9jaXR5XG4gIHRoaXMuYWNjZWxlcmF0ZSgwLCBncmF2KTtcblxuICAvLyBVcGRhdGUgcG9zaXRpb24gYmFzZWQgb24gYWNjZWxlcmF0aW9uXG4gIHJldHVybiB0aGlzLnVwZGF0ZVBvcygpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBmb3JjZVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldFNwZWVkID0gZnVuY3Rpb24gc2V0U3BlZWQoc3BlZWQpIHtcbiAgY29uc3QgYW5nbGUgPSB0aGlzLmdldEhlYWRpbmcoKTtcbiAgdGhpcy5zdGF0ZS52eCA9IE1hdGguY29zKGFuZ2xlKSAqIHNwZWVkO1xuICB0aGlzLnN0YXRlLnZ5ID0gTWF0aC5zaW4oYW5nbGUpICogc3BlZWQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgYW5nbGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc2V0SGVhZGluZyA9IGZ1bmN0aW9uIHNldEhlYWRpbmcoYW5nbGUpIHtcbiAgY29uc3Qgc3BlZWQgPSB0aGlzLmdldFNwZWVkKCk7XG4gIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAqIEByZXR1cm5zIHtudW1iZXJ9IGZvcmNlIG9mIHZlbG9jaXR5IHZlY3Rvci5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmdldFNwZWVkID0gZnVuY3Rpb24gZ2V0U3BlZWQoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguaHlwb3QodGhpcy5zdGF0ZS52eCwgdGhpcy5zdGF0ZS52eSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnZXQgdGhlIGFuZ2xlIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge251bWJlcn0geFxuICogQHBhcmFtICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBhbmdsZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZXRIZWFkaW5nID0gZnVuY3Rpb24gZ2V0SGVhZGluZyh4PXRoaXMuc3RhdGUudngsIHk9dGhpcy5zdGF0ZS52eSkge1xuICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGFkZCBzcHJpbmcgdG8gc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ByaW5nIEEgc3ByaW5nIG9iamVjdFxuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFkZFNwcmluZyA9IGZ1bmN0aW9uIGFkZFNwcmluZyhzcHJpbmcpIHtcbiAgdGhpcy5yZW1vdmVTcHJpbmcoc3ByaW5nKTtcbiAgdGhpcy5zdGF0ZS5zcHJpbmdzLnB1c2goc3ByaW5nKTtcbiAgcmV0dXJuIHNwcmluZztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHJlbW92ZSBhIHNwZWNpZmljIHN0cmluZyBmcm9tIHRoZSBzcHJpbmdzIGFycmF5XG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge09iamVjdH0gc3ByaW5nXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5yZW1vdmVTcHJpbmcgPSBmdW5jdGlvbiByZW1vdmVTcHJpbmcoe3BvaW50OiB7c3RhdGU6IHB9fSkge1xuICBjb25zdCBzcHJpbmdzID0gdGhpcy5zdGF0ZS5zcHJpbmdzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwLnggPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueCAmJlxuICAgICAgICBwLnkgPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueSkge1xuICAgICAgc3ByaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFzdW1taW5nIHdlIGtub3cgd2hlcmVcbiAqIHRoZSBvdGhlciBwYXJ0aWNsZSBpcyBvbiB0aGUgY2FudmFzLiBXZSBjYW4gdXNlXG4gKiB0aGUgYW5nbGUgZm9ybXVsYWUgdG8gZmlndXJlIG91dCB0aGUgYW5nbGVcbiAqIGJldHdlZW4gdHdvIHBhcnRpY2xlLiBVc2luZyBhcmN0YW5nZW50IGlzIGZpbmUuXG4gKiBidXQgYmVjYXVzZSB0aGUgY29ycmRpbmF0ZSBwbGFuZSBpcyBmaWxwZWQgb24gdGhlXG4gKiBZIGF4aXMgd2UgdXNlIGF0YW4yIHRvIGdldCB0aGUgcmlnaHQgdmFsdWVzLiBFeHBsYWluZWRcbiAqIGluIEFQSSBEb2NzLlxuICogXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2UuXG4gKiBAcmV0dXJucyB7SW50ZWdlcn0gIEFuZ2xlICAgQSBhbmdsZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFuZ2xlVG8gPSBmdW5jdGlvbiBhbmdlbFRvKHtzdGF0ZToge3g6IHgsIHk6IHl9fSkge1xuICBjb25zdCB7eDogZHgsIHk6IGR5fSA9IHt4OiB4IC0gdGhpcy5zdGF0ZS54LCB5OiB5IC0gdGhpcy5zdGF0ZS55fTtcbiAgcmV0dXJuIE1hdGguYXRhbjIoZHksIGR4KTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEFzc3VtaW5nIHdlIGtub3cgd2hlcmUgYm90aCBwYXJ0aWNsZSBhcmUgb24gdGhlIGNhbnZhcy5cbiAqIHdlIGNhbiB1c2UgdGhlIGRpc3RhbmNlIGZvcm11YWxlIHRvIGZpZ3VyZSBvdXQgdGhlIGRpc3RhbmNlXG4gKiBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzLlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7UGFydGljbGV9IHAyICAgICAgQSBwYXJ0aWNsZSBpbnN0YW5jZVxuICogQHJldHVybnMge0ludGVnZXJ9ICBBbmdsZSAgIEEgRGlzdGFuY2VcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmRpc3RhbmNlVG8gPSBmdW5jdGlvbiBkaXN0YW5jZVRvKHtzdGF0ZToge3g6IHgsIHk6IHl9fSkge1xuICBjb25zdCB7eDogZHgsIHk6IGR5fSA9IHt4OiB4IC0gdGhpcy5zdGF0ZS54LCB5OiB5IC0gdGhpcy5zdGF0ZS55fTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZHgsIGR5KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwZW5kIGEgcGFydGljbGUgdG8gdGhlIG1hc3NlcyBhcnJheS5cbiAqIEBwYXJhbSB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmFkZE1hc3MgPSBmdW5jdGlvbihtYXNzKSB7XG4gIHRoaXMucmVtb3ZlTWFzcyhtYXNzKTtcbiAgdGhpcy5zdGF0ZS5tYXNzZXMucHVzaChtYXNzKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgcGFydGljbGUgZm9yIHRoZSBtYXNzZXMgYXJyYXkuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gbWFzc1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlTWFzcyA9IGZ1bmN0aW9uKHtzdGF0ZTogbWFzc30pIHtcbiAgY29uc3QgbWFzc2VzID0gdGhpcy5zdGF0ZS5tYXNzZXM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAobWFzcy54ID09PSBtYXNzZXNbaV0uc3RhdGUueCAmJlxuICAgICAgICBtYXNzLnkgPT09IG1hc3Nlc1tpXS5zdGF0ZS55KSB7XG4gICAgICBtYXNzZXMuc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGx5cyBncmF2aXRhdGlvbiB0byB0aGUgaW5wdXQgcGFydGljbGUuXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDJcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5ncmF2aXRhdGVUbyA9IGZ1bmN0aW9uKHAyKSB7XG4gIGNvbnN0IGR4ID0gcDIuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgY29uc3QgZHkgPSBwMi5zdGF0ZS55IC0gdGhpcy5zdGF0ZS55O1xuXG4gIC8vIERpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXNcbiAgY29uc3QgZGlzdFNRID0gZHggKiBkeCArIGR5ICogZHk7XG4gIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoZGlzdFNRKTtcblxuICAvLyBNYWduaXR1ZGUgb2YgdGhlIHZlY3RvciBbRiA9IEcobTEpKG0yKS9yXjJdXG4gIGNvbnN0IGZvcmNlID0gcDIuc3RhdGUubWFzcyAvIGRpc3RTUTtcblxuICAvLyBTZXR0aW5nIHVwIGFuZ2xlcyBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IHNpbiA9IGR5IC8gZGlzdDtcbiAgY29uc3QgY29zID0gZHggLyBkaXN0O1xuXG4gIC8vIFNldHRpbmcgdmV0b3IgYW5nbGVcbiAgY29uc3QgYXggPSBjb3MgKiBmb3JjZTtcbiAgY29uc3QgYXkgPSBzaW4gKiBmb3JjZTtcblxuICByZXR1cm4gdGhpcy5hY2NlbGVyYXRlKGF4LCBheSk7XG59O1xuXG4vLyBUaGlzIGdlbmVyYXRvcnIgZnVuY3Rpb24gaXMgcHJldHR5IGdyb3NzIE1pbGVzIGZpeCB0aGlzIHlvdSBsYXp5IHBpbGUgb2YgZGV2ZWxvcGVyLlxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBnZW5lcmF0ZSBhIGJ1bmNoIG9mIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge051bWJlcn0gICAgICAgICAgICAgICAgICAgICBudW0gICAgICAgVGhlIG1heGltdW0gYW1vdW50IG9mIGdlbmVyYXRlZCBwYXJ0aWNsZXMgbmVlZGVkLlxuICogQHBhcmFtICB7T2JqZWN0fSAgICAgICAgICAgICAgICAgICAgIG9wdHMgICAgICBPcHRpb25zIHRvIHBhc3MgZWFjaCBwYXJ0aWNsZVxuICogQHBhcmFtICB7UGFydGljbGV+Z2VuZXJhdG9yQ2FsbGJhY2t9IGNhbGxiYWNrICBGdW5jdGlvbiB0byBhbGxvdyBtYXBwaW5nLlxuICogQHJldHVybnMge1BhcnRpY2xlW119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZW5lcmF0b3IgPSBmdW5jdGlvbiBnZW4obnVtLCBvcHRzPWNsb25lKElOSVRJQUxfU1RBVEUpLCBjYWxsYmFjaykge1xuICAvLyBTaG91bGQgbm90IG11dGF0ZSB0aGUgb3B0aW9ucyBhZnRlciB0aGV5IGhhdmUgYmVlbiBnaXZlbiAvL1xuICBPYmplY3QuZnJlZXplKG9wdHMpO1xuXG4gIGNvbnN0IHBhcnRpY2xlcyA9IFtdO1xuICBjb25zdCBzZWxmID0gdGhpcztcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICBjYWxsYmFjayhvcHRzLCBpLCBmdW5jdGlvbihwKSB7XG4gICAgICAgIGlmICghcCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gcGFydGljbGUgcGFzc2VkIHRvIGdlbmVyYXRvci4gV2lsbCB1c2UgZGVmYXVsdCBzdGF0ZS5cIik7XG4gICAgICAgICAgY29uc3QgbmV3UGFydGljbGUgPSBzZWxmLmNyZWF0ZShvcHRzKTtcbiAgICAgICAgICBwYXJ0aWNsZXMucHVzaChuZXdQYXJ0aWNsZSk7XG4gICAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbmV3UGFydGljbGUgPSBzZWxmLmNyZWF0ZShwKTtcbiAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICByZXR1cm4gbmV3UGFydGljbGU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgcGFydGljbGVzLnB1c2goc2VsZi5jcmVhdGUob3B0cykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYXJ0aWNsZXM7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRvciBjYWxsYmFja1xuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAY2FsbGJhY2sgUGFydGljbGV+Z2VuZXJhdG9yQ2FsbGJhY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzIE9wdGlvbnMgdG8gYmUgZXh0ZW5kIG9uIHRvIGVhY2ggcGFydGljbGUuXG4gKiBAcGFyYW0ge051bWJlcn0gaSBJbmRleCBvZiBwYXJ0aWNsZSBpbiBBcnJheS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHt9IEEgY2FsbCBiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBnZW5lcmF0ZWQgcGFydGljbGUuXG4gKi9cblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSB2ZWxvY2l0eSB0byB0aGUgcG9zaXRpb24uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB2eFxuICogQHBhcmFtICB7SW50ZWdlcn0gdnlcbiAqIEByZXR1cm5zIHtPYmplY3R9IFBvc2l0aW9uIHN0YXRlIGFmdGVyIHZlbG9jaXR5IGhhcyBiZWVuIGFwcGxpZWRcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZVBvcyA9IGZ1bmN0aW9uIHVwZGF0ZVBvcyh2eCwgdnkpIHtcbiAgaWYgKHZ4ID09PSB1bmRlZmluZWQgJiYgdnkgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3RhdGUueCArPSB0aGlzLnN0YXRlLnZ4O1xuICAgIHRoaXMuc3RhdGUueSArPSB0aGlzLnN0YXRlLnZ5O1xuICAgIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xuICB9XG5cbiAgdGhpcy5zdGF0ZS54ICs9IHZ4O1xuICB0aGlzLnN0YXRlLnkgKz0gdnk7XG4gIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gcGFydGljbGVzIGNhbGN1bGF0ZSB0aGVcbiAqIHNwcmluZyBmb3JjZSBhcHBsaWVkIHRvIGJvdGggcGFydGljbGVzLlxuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBzcHJpbmcgIEdpdmVuIG9mZnNldCBmb3IgdGhlIHBhcnRpY2xlc1xuICogQHBhcmFtICB7SW50ZWdlcn0gIG9mZnNldCAgVGhlIHNwcmluZyBjb2VmZmljZW50XG4gKiBAcmV0dXJucyB7UGFydGljbGVbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ0Zyb21UbyA9IGZ1bmN0aW9uIHNwcmluZ0Zyb21UbyhwLCBzcHJpbmc9MC4wNSwgb2Zmc2V0PTEwMCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gb2Zmc2V0KSAqIHNwcmluZztcblxuICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgY29uc3Qgc3kgPSBkeSAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG5cbiAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gIC8vIEFjY2VsZXJhdGUgdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgcC5zdGF0ZS52eCAtPSBzeDtcbiAgcC5zdGF0ZS52eSAtPSBzeTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHBhcnRpY2xlLCBhIHZlY3RvciwgYW5kIGEgc3ByaW5nIGNvZWZmaWVuY2VudCBhY2NlbGVyYXRlXG4gKiB0aGUgcGFydGljbGUgYWNjb3JkaW5nIHRvIHRoZSBkaXN0YW5jZSBpdHMgaXMgZnJvbSB0aGUgcG9pbnQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IHAgQSBzcHJpbmcgb2JqZWN0LlxuICogQHJldHVybnMge1BhcnRpY2xlfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuc3ByaW5nVG9Qb2ludCA9IGZ1bmN0aW9uIHNwcmluZ1RvUG9pbnQocCkge1xuICAvLyBQb3N0aW9uIGRlbHRhXG4gIGNvbnN0IGR4ID0gKHAucG9pbnQuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gIGNvbnN0IGR5ID0gKHAucG9pbnQuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG4gIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gcC5vZmZzZXQpICogcC5zcHJpbmc7XG5cbiAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICByZXR1cm4gW3RoaXMsIHBdO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseSBzcHJpbmcgcG9pbnQgdG8gYWxsIGludGVybmFsIHNwcmluZ3MuXG4gKiBAcGFyYW0gIHtzcHJpbmdzfSBzcHJpbmdzIEFuIGFycmF5IG9mIHNwcmluZ3MgdG8gc3ByaW5nIHRvLlxuICogQHJldHVybnMge09iamVjdFtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuaGFuZGxlU3ByaW5ncyA9IGZ1bmN0aW9uIGhhbmRsZVNwcmluZ3Moc3ByaW5ncz10aGlzLnN0YXRlLnNwcmluZ3MpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5zcHJpbmdUb1BvaW50KHNwcmluZ3NbaV0pO1xuICB9XG4gIHJldHVybiBzcHJpbmdzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBGb3IgZWFjaCBtYXNzIGluIHRoZSBtYXNzZXMgYXJyYXkgYXBwbHkgZ3Jhdml0YXRlIHRvIGl0LlxuICogQHBhcmFtICB7UGFydGljbGVzW118T2JqZWN0W119IG1hc3Nlc1xuICogQHJldHVybnMge1BhcnRpY2xlc1tdfE9iamVjdFtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuaGFuZGxlTWFzc2VzID0gZnVuY3Rpb24gaGFuZGxlTWFzc2VzKG1hc3Nlcz10aGlzLnN0YXRlLm1hc3Nlcykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuZ3Jhdml0YXRlVG8obWFzc2VzW2ldKTtcbiAgfVxuICByZXR1cm4gbWFzc2VzO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJ0aWNsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvcGFydGljbGUuanMiLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxudmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRpZiAodHlwZW9mIEFycmF5LmlzQXJyYXkgPT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gQXJyYXkuaXNBcnJheShhcnIpO1xuXHR9XG5cblx0cmV0dXJuIHRvU3RyLmNhbGwoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG5cbnZhciBpc1BsYWluT2JqZWN0ID0gZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcblx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHZhciBoYXNPd25Db25zdHJ1Y3RvciA9IGhhc093bi5jYWxsKG9iaiwgJ2NvbnN0cnVjdG9yJyk7XG5cdHZhciBoYXNJc1Byb3RvdHlwZU9mID0gb2JqLmNvbnN0cnVjdG9yICYmIG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgJiYgaGFzT3duLmNhbGwob2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgJ2lzUHJvdG90eXBlT2YnKTtcblx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRpZiAob2JqLmNvbnN0cnVjdG9yICYmICFoYXNPd25Db25zdHJ1Y3RvciAmJiAhaGFzSXNQcm90b3R5cGVPZikge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIE93biBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhdGVkIGZpcnN0bHksIHNvIHRvIHNwZWVkIHVwLFxuXHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0dmFyIGtleTtcblx0Zm9yIChrZXkgaW4gb2JqKSB7LyoqL31cblxuXHRyZXR1cm4gdHlwZW9mIGtleSA9PT0gJ3VuZGVmaW5lZCcgfHwgaGFzT3duLmNhbGwob2JqLCBrZXkpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBleHRlbmQoKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0aSA9IDEsXG5cdFx0bGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcblx0XHRkZWVwID0gZmFsc2U7XG5cblx0Ly8gSGFuZGxlIGEgZGVlcCBjb3B5IHNpdHVhdGlvblxuXHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMV0gfHwge307XG5cdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdGkgPSAyO1xuXHR9IGVsc2UgaWYgKCh0eXBlb2YgdGFyZ2V0ICE9PSAnb2JqZWN0JyAmJiB0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nKSB8fCB0YXJnZXQgPT0gbnVsbCkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdG9wdGlvbnMgPSBhcmd1bWVudHNbaV07XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG5cdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbbmFtZV07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAodGFyZ2V0ICE9PSBjb3B5KSB7XG5cdFx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdGlmIChjb3B5SXNBcnJheSkge1xuXHRcdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGNvcHk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9leHRlbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VDbG9uZSA9IHJlcXVpcmUoJy4vX2Jhc2VDbG9uZScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfU1lNQk9MU19GTEFHID0gNDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmNsb25lYCBleGNlcHQgdGhhdCBpdCByZWN1cnNpdmVseSBjbG9uZXMgYHZhbHVlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcmVjdXJzaXZlbHkgY2xvbmUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZGVlcCBjbG9uZWQgdmFsdWUuXG4gKiBAc2VlIF8uY2xvbmVcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbeyAnYSc6IDEgfSwgeyAnYic6IDIgfV07XG4gKlxuICogdmFyIGRlZXAgPSBfLmNsb25lRGVlcChvYmplY3RzKTtcbiAqIGNvbnNvbGUubG9nKGRlZXBbMF0gPT09IG9iamVjdHNbMF0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gY2xvbmVEZWVwKHZhbHVlKSB7XG4gIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIENMT05FX0RFRVBfRkxBRyB8IENMT05FX1NZTUJPTFNfRkxBRyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEZWVwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9jbG9uZURlZXAuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBhcnJheUVhY2ggPSByZXF1aXJlKCcuL19hcnJheUVhY2gnKSxcbiAgICBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnbiA9IHJlcXVpcmUoJy4vX2Jhc2VBc3NpZ24nKSxcbiAgICBiYXNlQXNzaWduSW4gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduSW4nKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgY29weVN5bWJvbHMgPSByZXF1aXJlKCcuL19jb3B5U3ltYm9scycpLFxuICAgIGNvcHlTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19jb3B5U3ltYm9sc0luJyksXG4gICAgZ2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2dldEFsbEtleXMnKSxcbiAgICBnZXRBbGxLZXlzSW4gPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzSW4nKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpbml0Q2xvbmVBcnJheSA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZUFycmF5JyksXG4gICAgaW5pdENsb25lQnlUYWcgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVCeVRhZycpLFxuICAgIGluaXRDbG9uZU9iamVjdCA9IHJlcXVpcmUoJy4vX2luaXRDbG9uZU9iamVjdCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMSxcbiAgICBDTE9ORV9GTEFUX0ZMQUcgPSAyLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgc3VwcG9ydGVkIGJ5IGBfLmNsb25lYC4gKi9cbnZhciBjbG9uZWFibGVUYWdzID0ge307XG5jbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuY2xvbmVhYmxlVGFnc1thcnJheUJ1ZmZlclRhZ10gPSBjbG9uZWFibGVUYWdzW2RhdGFWaWV3VGFnXSA9XG5jbG9uZWFibGVUYWdzW2Jvb2xUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRlVGFnXSA9XG5jbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG5jbG9uZWFibGVUYWdzW2ludDhUYWddID0gY2xvbmVhYmxlVGFnc1tpbnQxNlRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQzMlRhZ10gPSBjbG9uZWFibGVUYWdzW21hcFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbmNsb25lYWJsZVRhZ3NbcmVnZXhwVGFnXSA9IGNsb25lYWJsZVRhZ3Nbc2V0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3N0cmluZ1RhZ10gPSBjbG9uZWFibGVUYWdzW3N5bWJvbFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuY2xvbmVhYmxlVGFnc1t1aW50MTZUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbmNsb25lYWJsZVRhZ3NbZXJyb3JUYWddID0gY2xvbmVhYmxlVGFnc1tmdW5jVGFnXSA9XG5jbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICogdHJhdmVyc2VkIG9iamVjdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLlxuICogIDEgLSBEZWVwIGNsb25lXG4gKiAgMiAtIEZsYXR0ZW4gaW5oZXJpdGVkIHByb3BlcnRpZXNcbiAqICA0IC0gQ2xvbmUgc3ltYm9sc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY2xvbmluZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5XSBUaGUga2V5IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBhbmQgdGhlaXIgY2xvbmUgY291bnRlcnBhcnRzLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGNsb25lZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUNsb25lKHZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGlzRGVlcCA9IGJpdG1hc2sgJiBDTE9ORV9ERUVQX0ZMQUcsXG4gICAgICBpc0ZsYXQgPSBiaXRtYXNrICYgQ0xPTkVfRkxBVF9GTEFHLFxuICAgICAgaXNGdWxsID0gYml0bWFzayAmIENMT05FX1NZTUJPTFNfRkxBRztcblxuICBpZiAoY3VzdG9taXplcikge1xuICAgIHJlc3VsdCA9IG9iamVjdCA/IGN1c3RvbWl6ZXIodmFsdWUsIGtleSwgb2JqZWN0LCBzdGFjaykgOiBjdXN0b21pemVyKHZhbHVlKTtcbiAgfVxuICBpZiAocmVzdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGlmICghaXNPYmplY3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIHZhciBpc0FyciA9IGlzQXJyYXkodmFsdWUpO1xuICBpZiAoaXNBcnIpIHtcbiAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgaWYgKCFpc0RlZXApIHtcbiAgICAgIHJldHVybiBjb3B5QXJyYXkodmFsdWUsIHJlc3VsdCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciB0YWcgPSBnZXRUYWcodmFsdWUpLFxuICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGNsb25lQnVmZmVyKHZhbHVlLCBpc0RlZXApO1xuICAgIH1cbiAgICBpZiAodGFnID09IG9iamVjdFRhZyB8fCB0YWcgPT0gYXJnc1RhZyB8fCAoaXNGdW5jICYmICFvYmplY3QpKSB7XG4gICAgICByZXN1bHQgPSAoaXNGbGF0IHx8IGlzRnVuYykgPyB7fSA6IGluaXRDbG9uZU9iamVjdCh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gaXNGbGF0XG4gICAgICAgICAgPyBjb3B5U3ltYm9sc0luKHZhbHVlLCBiYXNlQXNzaWduSW4ocmVzdWx0LCB2YWx1ZSkpXG4gICAgICAgICAgOiBjb3B5U3ltYm9scyh2YWx1ZSwgYmFzZUFzc2lnbihyZXN1bHQsIHZhbHVlKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY2xvbmVhYmxlVGFnc1t0YWddKSB7XG4gICAgICAgIHJldHVybiBvYmplY3QgPyB2YWx1ZSA6IHt9O1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gaW5pdENsb25lQnlUYWcodmFsdWUsIHRhZywgYmFzZUNsb25lLCBpc0RlZXApO1xuICAgIH1cbiAgfVxuICAvLyBDaGVjayBmb3IgY2lyY3VsYXIgcmVmZXJlbmNlcyBhbmQgcmV0dXJuIGl0cyBjb3JyZXNwb25kaW5nIGNsb25lLlxuICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gIGlmIChzdGFja2VkKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQ7XG4gIH1cbiAgc3RhY2suc2V0KHZhbHVlLCByZXN1bHQpO1xuXG4gIHZhciBrZXlzRnVuYyA9IGlzRnVsbFxuICAgID8gKGlzRmxhdCA/IGdldEFsbEtleXNJbiA6IGdldEFsbEtleXMpXG4gICAgOiAoaXNGbGF0ID8ga2V5c0luIDoga2V5cyk7XG5cbiAgdmFyIHByb3BzID0gaXNBcnIgPyB1bmRlZmluZWQgOiBrZXlzRnVuYyh2YWx1ZSk7XG4gIGFycmF5RWFjaChwcm9wcyB8fCB2YWx1ZSwgZnVuY3Rpb24oc3ViVmFsdWUsIGtleSkge1xuICAgIGlmIChwcm9wcykge1xuICAgICAga2V5ID0gc3ViVmFsdWU7XG4gICAgICBzdWJWYWx1ZSA9IHZhbHVlW2tleV07XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IHBvcHVsYXRlIGNsb25lIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgYXNzaWduVmFsdWUocmVzdWx0LCBrZXksIGJhc2VDbG9uZShzdWJWYWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCB2YWx1ZSwgc3RhY2spKTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUNsb25lO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBzdGFja0NsZWFyID0gcmVxdWlyZSgnLi9fc3RhY2tDbGVhcicpLFxuICAgIHN0YWNrRGVsZXRlID0gcmVxdWlyZSgnLi9fc3RhY2tEZWxldGUnKSxcbiAgICBzdGFja0dldCA9IHJlcXVpcmUoJy4vX3N0YWNrR2V0JyksXG4gICAgc3RhY2tIYXMgPSByZXF1aXJlKCcuL19zdGFja0hhcycpLFxuICAgIHN0YWNrU2V0ID0gcmVxdWlyZSgnLi9fc3RhY2tTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gU3RhY2soZW50cmllcykge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlKGVudHJpZXMpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBTdGFja2AuXG5TdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuU3RhY2sucHJvdG90eXBlWydkZWxldGUnXSA9IHN0YWNrRGVsZXRlO1xuU3RhY2sucHJvdG90eXBlLmdldCA9IHN0YWNrR2V0O1xuU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuU3RhY2sucHJvdG90eXBlLnNldCA9IHN0YWNrU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YWNrO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fU3RhY2suanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGxpc3RDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlQ2xlYXInKSxcbiAgICBsaXN0Q2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVEZWxldGUnKSxcbiAgICBsaXN0Q2FjaGVHZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVHZXQnKSxcbiAgICBsaXN0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVIYXMnKSxcbiAgICBsaXN0Q2FjaGVTZXQgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTGlzdENhY2hlYC5cbkxpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbkxpc3RDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbGlzdENhY2hlRGVsZXRlO1xuTGlzdENhY2hlLnByb3RvdHlwZS5nZXQgPSBsaXN0Q2FjaGVHZXQ7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbkxpc3RDYWNoZS5wcm90b3R5cGUuc2V0ID0gbGlzdENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExpc3RDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0xpc3RDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gW107XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3BsaWNlID0gYXJyYXlQcm90by5zcGxpY2U7XG5cbi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gIGlmIChpbmRleCA9PSBsYXN0SW5kZXgpIHtcbiAgICBkYXRhLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIHNwbGljZS5jYWxsKGRhdGEsIGluZGV4LCAxKTtcbiAgfVxuICAtLXRoaXMuc2l6ZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXNzb2NJbmRleE9mLmpzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvZXEuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGFzc29jSW5kZXhPZih0aGlzLl9fZGF0YV9fLCBrZXkpID4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBTdGFja1xuICovXG5mdW5jdGlvbiBzdGFja0NsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0NsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIHJlc3VsdCA9IGRhdGFbJ2RlbGV0ZSddKGtleSk7XG5cbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tEZWxldGUuanNcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrR2V0KGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0dldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBzaXplIHRvIGVuYWJsZSBsYXJnZSBhcnJheSBvcHRpbWl6YXRpb25zLiAqL1xudmFyIExBUkdFX0FSUkFZX1NJWkUgPSAyMDA7XG5cbi8qKlxuICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgc3RhY2sgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgIHZhciBwYWlycyA9IGRhdGEuX19kYXRhX187XG4gICAgaWYgKCFNYXAgfHwgKHBhaXJzLmxlbmd0aCA8IExBUkdFX0FSUkFZX1NJWkUgLSAxKSkge1xuICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pO1xuICAgICAgdGhpcy5zaXplID0gKytkYXRhLnNpemU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICB9XG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fc3RhY2tTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXAuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0Z1bmN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fcm9vdC5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNNYXNrZWQuanNcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG52YXIgY29yZUpzRGF0YSA9IHJvb3RbJ19fY29yZS1qc19zaGFyZWRfXyddO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcmVKc0RhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3JlSnNEYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL190b1NvdXJjZS5qc1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRWYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX01hcENhY2hlLmpzXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0hhc2guanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaENsZWFyLmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaERlbGV0ZShrZXkpIHtcbiAgdmFyIHJlc3VsdCA9IHRoaXMuaGFzKGtleSkgJiYgZGVsZXRlIHRoaXMuX19kYXRhX19ba2V5XTtcbiAgdGhpcy5zaXplIC09IHJlc3VsdCA/IDEgOiAwO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBHZXRzIHRoZSBoYXNoIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGhhc2hHZXQoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgIHZhciByZXN1bHQgPSBkYXRhW2tleV07XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gSEFTSF9VTkRFRklORUQgPyB1bmRlZmluZWQgOiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KSA/IGRhdGFba2V5XSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaEdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hIYXMoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgcmV0dXJuIG5hdGl2ZUNyZWF0ZSA/IChkYXRhW2tleV0gIT09IHVuZGVmaW5lZCkgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hIYXMuanNcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKipcbiAqIFNldHMgdGhlIGhhc2ggYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBoYXNoIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBoYXNoU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICB0aGlzLnNpemUgKz0gdGhpcy5oYXMoa2V5KSA/IDAgOiAxO1xuICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICh0eXBlID09ICdzdHJpbmcnIHx8IHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJylcbiAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgOiAodmFsdWUgPT09IG51bGwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzS2V5YWJsZS5qc1xuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbWFwIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUdldChrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5nZXQoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA1MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBtYXAgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpLFxuICAgICAgc2l6ZSA9IGRhdGEuc2l6ZTtcblxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplICs9IGRhdGEuc2l6ZSA9PSBzaXplID8gMCA6IDE7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUVhY2guanNcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuL19kZWZpbmVQcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBhc3NpZ25WYWx1ZWAgYW5kIGBhc3NpZ25NZXJnZVZhbHVlYCB3aXRob3V0XG4gKiB2YWx1ZSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5ID09ICdfX3Byb3RvX18nICYmIGRlZmluZVByb3BlcnR5KSB7XG4gICAgZGVmaW5lUHJvcGVydHkob2JqZWN0LCBrZXksIHtcbiAgICAgICdjb25maWd1cmFibGUnOiB0cnVlLFxuICAgICAgJ2VudW1lcmFibGUnOiB0cnVlLFxuICAgICAgJ3ZhbHVlJzogdmFsdWUsXG4gICAgICAnd3JpdGFibGUnOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25WYWx1ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgdmFyIGZ1bmMgPSBnZXROYXRpdmUoT2JqZWN0LCAnZGVmaW5lUHJvcGVydHknKTtcbiAgICBmdW5jKHt9LCAnJywge30pO1xuICAgIHJldHVybiBmdW5jO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVQcm9wZXJ0eTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXNcbiAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlQXNzaWduKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXMoc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUFzc2lnbi5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYXNzaWduVmFsdWUnKSxcbiAgICBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKTtcblxuLyoqXG4gKiBDb3BpZXMgcHJvcGVydGllcyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IGlkZW50aWZpZXJzIHRvIGNvcHkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb3BpZWQgdmFsdWVzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weU9iamVjdChzb3VyY2UsIHByb3BzLCBvYmplY3QsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGlzTmV3ID0gIW9iamVjdDtcbiAgb2JqZWN0IHx8IChvYmplY3QgPSB7fSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgdmFyIG5ld1ZhbHVlID0gY3VzdG9taXplclxuICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzb3VyY2Vba2V5XSwga2V5LCBvYmplY3QsIHNvdXJjZSlcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG5ld1ZhbHVlID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIGlmIChpc05ldykge1xuICAgICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlPYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gKiBvciBtYXggYXJyYXkgbGVuZ3RoIGNoZWNrcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBpbnZva2UgYGl0ZXJhdGVlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUaW1lcyhuLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG4pO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbikge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVGltZXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVGltZXMuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL19iYXNlSXNBcmd1bWVudHMnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcmd1bWVudHMgPSBiYXNlSXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPyBiYXNlSXNBcmd1bWVudHMgOiBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnY2FsbGVlJykgJiZcbiAgICAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcmd1bWVudHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290JyksXG4gICAgc3R1YkZhbHNlID0gcmVxdWlyZSgnLi9zdHViRmFsc2UnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBCdWZmZXIgPSBtb2R1bGVFeHBvcnRzID8gcm9vdC5CdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVJc0J1ZmZlciA9IEJ1ZmZlciA/IEJ1ZmZlci5pc0J1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMy4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGJ1ZmZlciwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBCdWZmZXIoMikpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IFVpbnQ4QXJyYXkoMikpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQnVmZmVyID0gbmF0aXZlSXNCdWZmZXIgfHwgc3R1YkZhbHNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0J1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcclxuXHRpZighbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xyXG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XHJcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcclxuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxyXG5cdFx0bW9kdWxlLmNoaWxkcmVuID0gW107XHJcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcclxuXHR9XHJcblx0cmV0dXJuIG1vZHVsZTtcclxufVxyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJGYWxzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyB8fCByZUlzVWludC50ZXN0KHZhbHVlKSkgJiZcbiAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzSW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlSXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fYmFzZUlzVHlwZWRBcnJheScpLFxuICAgIGJhc2VVbmFyeSA9IHJlcXVpcmUoJy4vX2Jhc2VVbmFyeScpLFxuICAgIG5vZGVVdGlsID0gcmVxdWlyZSgnLi9fbm9kZVV0aWwnKTtcblxuLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbnZhciBub2RlSXNUeXBlZEFycmF5ID0gbm9kZVV0aWwgJiYgbm9kZVV0aWwuaXNUeXBlZEFycmF5O1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNUeXBlZEFycmF5ID0gbm9kZUlzVHlwZWRBcnJheSA/IGJhc2VVbmFyeShub2RlSXNUeXBlZEFycmF5KSA6IGJhc2VJc1R5cGVkQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0xlbmd0aC5qc1xuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VVbmFyeS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBwcm9jZXNzYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuLyoqIFVzZWQgdG8gYWNjZXNzIGZhc3RlciBOb2RlLmpzIGhlbHBlcnMuICovXG52YXIgbm9kZVV0aWwgPSAoZnVuY3Rpb24oKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25vZGVVdGlsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuL19uYXRpdmVLZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c2Agd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5cyhvYmplY3QpIHtcbiAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgcmV0dXJuIG5hdGl2ZUtleXMob2JqZWN0KTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBrZXkgIT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhIHByb3RvdHlwZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm90b3R5cGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNQcm90b3R5cGUodmFsdWUpIHtcbiAgdmFyIEN0b3IgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvcixcbiAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gIHJldHVybiB2YWx1ZSA9PT0gcHJvdG87XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc1Byb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbmF0aXZlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX292ZXJBcmcuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc0FycmF5TGlrZS5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5hc3NpZ25JbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbkluKG9iamVjdCwgc291cmNlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VBc3NpZ25JbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ25Jbi5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5TGlrZUtleXMgPSByZXF1aXJlKCcuL19hcnJheUxpa2VLZXlzJyksXG4gICAgYmFzZUtleXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzSW4nKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9rZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgIGFsbG9jVW5zYWZlID0gQnVmZmVyID8gQnVmZmVyLmFsbG9jVW5zYWZlIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiAgYGJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QnVmZmVyfSBidWZmZXIgVGhlIGJ1ZmZlciB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUJ1ZmZlcihidWZmZXIsIGlzRGVlcCkge1xuICBpZiAoaXNEZWVwKSB7XG4gICAgcmV0dXJuIGJ1ZmZlci5zbGljZSgpO1xuICB9XG4gIHZhciBsZW5ndGggPSBidWZmZXIubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYWxsb2NVbnNhZmUgPyBhbGxvY1Vuc2FmZShsZW5ndGgpIDogbmV3IGJ1ZmZlci5jb25zdHJ1Y3RvcihsZW5ndGgpO1xuXG4gIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weUFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpO1xuXG4vKipcbiAqIENvcGllcyBvd24gc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weVN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9scy5qc1xuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5RmlsdGVyLmpzXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5cyk7XG4gKiAvLyA9PiBbW10sIFtdXVxuICpcbiAqIGNvbnNvbGUubG9nKGFycmF5c1swXSA9PT0gYXJyYXlzWzFdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIHN0dWJBcnJheSgpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvc3R1YkFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29weU9iamVjdCA9IHJlcXVpcmUoJy4vX2NvcHlPYmplY3QnKSxcbiAgICBnZXRTeW1ib2xzSW4gPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzSW4nKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIGFuZCBpbmhlcml0ZWQgc3ltYm9scyBvZiBgc291cmNlYCB0byBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyBmcm9tLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gY29weVN5bWJvbHNJbihzb3VyY2UsIG9iamVjdCkge1xuICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHNJbihzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5U3ltYm9sc0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5UHVzaC5qc1xuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFByb3RvdHlwZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFByb3RvdHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUdldEFsbEtleXMnKSxcbiAgICBnZXRTeW1ib2xzID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9scycpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzLCBnZXRTeW1ib2xzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0QWxsS2V5c2AgYW5kIGBnZXRBbGxLZXlzSW5gIHdoaWNoIHVzZXNcbiAqIGBrZXlzRnVuY2AgYW5kIGBzeW1ib2xzRnVuY2AgdG8gZ2V0IHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN5bWJvbHNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNGdW5jLCBzeW1ib2xzRnVuYykge1xuICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgcmV0dXJuIGlzQXJyYXkob2JqZWN0KSA/IHJlc3VsdCA6IGFycmF5UHVzaChyZXN1bHQsIHN5bWJvbHNGdW5jKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRBbGxLZXlzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBEYXRhVmlldyA9IHJlcXVpcmUoJy4vX0RhdGFWaWV3JyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgUHJvbWlzZSA9IHJlcXVpcmUoJy4vX1Byb21pc2UnKSxcbiAgICBTZXQgPSByZXF1aXJlKCcuL19TZXQnKSxcbiAgICBXZWFrTWFwID0gcmVxdWlyZSgnLi9fV2Vha01hcCcpLFxuICAgIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcHJvbWlzZVRhZyA9ICdbb2JqZWN0IFByb21pc2VdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWFwcywgc2V0cywgYW5kIHdlYWttYXBzLiAqL1xudmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICBtYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoTWFwKSxcbiAgICBwcm9taXNlQ3RvclN0cmluZyA9IHRvU291cmNlKFByb21pc2UpLFxuICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgIHdlYWtNYXBDdG9yU3RyaW5nID0gdG9Tb3VyY2UoV2Vha01hcCk7XG5cbi8qKlxuICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbnZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4vLyBGYWxsYmFjayBmb3IgZGF0YSB2aWV3cywgbWFwcywgc2V0cywgYW5kIHdlYWsgbWFwcyBpbiBJRSAxMSBhbmQgcHJvbWlzZXMgaW4gTm9kZS5qcyA8IDYuXG5pZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgKE1hcCAmJiBnZXRUYWcobmV3IE1hcCkgIT0gbWFwVGFnKSB8fFxuICAgIChQcm9taXNlICYmIGdldFRhZyhQcm9taXNlLnJlc29sdmUoKSkgIT0gcHJvbWlzZVRhZykgfHxcbiAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgKFdlYWtNYXAgJiYgZ2V0VGFnKG5ldyBXZWFrTWFwKSAhPSB3ZWFrTWFwVGFnKSkge1xuICBnZXRUYWcgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciByZXN1bHQgPSBiYXNlR2V0VGFnKHZhbHVlKSxcbiAgICAgICAgQ3RvciA9IHJlc3VsdCA9PSBvYmplY3RUYWcgPyB2YWx1ZS5jb25zdHJ1Y3RvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgY3RvclN0cmluZyA9IEN0b3IgPyB0b1NvdXJjZShDdG9yKSA6ICcnO1xuXG4gICAgaWYgKGN0b3JTdHJpbmcpIHtcbiAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICBjYXNlIGRhdGFWaWV3Q3RvclN0cmluZzogcmV0dXJuIGRhdGFWaWV3VGFnO1xuICAgICAgICBjYXNlIG1hcEN0b3JTdHJpbmc6IHJldHVybiBtYXBUYWc7XG4gICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICBjYXNlIHNldEN0b3JTdHJpbmc6IHJldHVybiBzZXRUYWc7XG4gICAgICAgIGNhc2Ugd2Vha01hcEN0b3JTdHJpbmc6IHJldHVybiB3ZWFrTWFwVGFnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX0RhdGFWaWV3LmpzXG4vLyBtb2R1bGUgaWQgPSA5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1NldC5qc1xuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1dlYWtNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIGFycmF5IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVBcnJheShhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAvLyBBZGQgcHJvcGVydGllcyBhc3NpZ25lZCBieSBgUmVnRXhwI2V4ZWNgLlxuICBpZiAobGVuZ3RoICYmIHR5cGVvZiBhcnJheVswXSA9PSAnc3RyaW5nJyAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGFycmF5LCAnaW5kZXgnKSkge1xuICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgIHJlc3VsdC5pbnB1dCA9IGFycmF5LmlucHV0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pbml0Q2xvbmVBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpLFxuICAgIGNsb25lRGF0YVZpZXcgPSByZXF1aXJlKCcuL19jbG9uZURhdGFWaWV3JyksXG4gICAgY2xvbmVNYXAgPSByZXF1aXJlKCcuL19jbG9uZU1hcCcpLFxuICAgIGNsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKSxcbiAgICBjbG9uZVNldCA9IHJlcXVpcmUoJy4vX2Nsb25lU2V0JyksXG4gICAgY2xvbmVTeW1ib2wgPSByZXF1aXJlKCcuL19jbG9uZVN5bWJvbCcpLFxuICAgIGNsb25lVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Nsb25lVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjbG9uaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gIHZhciBDdG9yID0gb2JqZWN0LmNvbnN0cnVjdG9yO1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVBcnJheUJ1ZmZlcihvYmplY3QpO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIHJldHVybiBuZXcgQ3Rvcigrb2JqZWN0KTtcblxuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICBjYXNlIGZsb2F0MzJUYWc6IGNhc2UgZmxvYXQ2NFRhZzpcbiAgICBjYXNlIGludDhUYWc6IGNhc2UgaW50MTZUYWc6IGNhc2UgaW50MzJUYWc6XG4gICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgIHJldHVybiBjbG9uZVR5cGVkQXJyYXkob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBtYXBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgY2FzZSByZWdleHBUYWc6XG4gICAgICByZXR1cm4gY2xvbmVSZWdFeHAob2JqZWN0KTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgcmV0dXJuIGNsb25lU2V0KG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUJ5VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQnlUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgVWludDhBcnJheSA9IHJlcXVpcmUoJy4vX1VpbnQ4QXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtBcnJheUJ1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGFycmF5IGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICB2YXIgcmVzdWx0ID0gbmV3IGFycmF5QnVmZmVyLmNvbnN0cnVjdG9yKGFycmF5QnVmZmVyLmJ5dGVMZW5ndGgpO1xuICBuZXcgVWludDhBcnJheShyZXN1bHQpLnNldChuZXcgVWludDhBcnJheShhcnJheUJ1ZmZlcikpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQXJyYXlCdWZmZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1VpbnQ4QXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGRhdGFWaWV3YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFWaWV3IFRoZSBkYXRhIHZpZXcgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAqL1xuZnVuY3Rpb24gY2xvbmVEYXRhVmlldyhkYXRhVmlldywgaXNEZWVwKSB7XG4gIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gIHJldHVybiBuZXcgZGF0YVZpZXcuY29uc3RydWN0b3IoYnVmZmVyLCBkYXRhVmlldy5ieXRlT2Zmc2V0LCBkYXRhVmlldy5ieXRlTGVuZ3RoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZURhdGFWaWV3O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVEYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhZGRNYXBFbnRyeSA9IHJlcXVpcmUoJy4vX2FkZE1hcEVudHJ5JyksXG4gICAgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGNsb25pbmcuICovXG52YXIgQ0xPTkVfREVFUF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjbG9uZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNsb25lRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2xvbmUgdmFsdWVzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBtYXAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgdmFyIGFycmF5ID0gaXNEZWVwID8gY2xvbmVGdW5jKG1hcFRvQXJyYXkobWFwKSwgQ0xPTkVfREVFUF9GTEFHKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgcmV0dXJuIGFycmF5UmVkdWNlKGFycmF5LCBhZGRNYXBFbnRyeSwgbmV3IG1hcC5jb25zdHJ1Y3Rvcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZU1hcC5qc1xuLy8gbW9kdWxlIGlkID0gMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQWRkcyB0aGUga2V5LXZhbHVlIGBwYWlyYCB0byBgbWFwYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG1hcGAuXG4gKi9cbmZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAvLyBEb24ndCByZXR1cm4gYG1hcC5zZXRgIGJlY2F1c2UgaXQncyBub3QgY2hhaW5hYmxlIGluIElFIDExLlxuICBtYXAuc2V0KHBhaXJbMF0sIHBhaXJbMV0pO1xuICByZXR1cm4gbWFwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZE1hcEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDEwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVJlZHVjZS5qc1xuLy8gbW9kdWxlIGlkID0gMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUZsYWdzID0gL1xcdyokLztcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICB2YXIgcmVzdWx0ID0gbmV3IHJlZ2V4cC5jb25zdHJ1Y3RvcihyZWdleHAuc291cmNlLCByZUZsYWdzLmV4ZWMocmVnZXhwKSk7XG4gIHJlc3VsdC5sYXN0SW5kZXggPSByZWdleHAubGFzdEluZGV4O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lUmVnRXhwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVSZWdFeHAuanNcbi8vIG1vZHVsZSBpZCA9IDExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWRkU2V0RW50cnkgPSByZXF1aXJlKCcuL19hZGRTZXRFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBzZXRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgc2V0LlxuICovXG5mdW5jdGlvbiBjbG9uZVNldChzZXQsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhzZXRUb0FycmF5KHNldCksIENMT05FX0RFRVBfRkxBRykgOiBzZXRUb0FycmF5KHNldCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkU2V0RW50cnksIG5ldyBzZXQuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVTZXQuanNcbi8vIG1vZHVsZSBpZCA9IDExMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFkZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYHNldGAuXG4gKi9cbmZ1bmN0aW9uIGFkZFNldEVudHJ5KHNldCwgdmFsdWUpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBzZXQuYWRkYCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgc2V0LmFkZCh2YWx1ZSk7XG4gIHJldHVybiBzZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkU2V0RW50cnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hZGRTZXRFbnRyeS5qc1xuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29udmVydHMgYHNldGAgdG8gYW4gYXJyYXkgb2YgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9BcnJheShzZXQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShzZXQuc2l6ZSk7XG5cbiAgc2V0LmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0VG9BcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3NldFRvQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiB0aGUgYHN5bWJvbGAgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc3ltYm9sIFRoZSBzeW1ib2wgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGNsb25lU3ltYm9sKHN5bWJvbCkge1xuICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVN5bWJvbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU3ltYm9sLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGB0eXBlZEFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHR5cGVkQXJyYXkgVGhlIHR5cGVkIGFycmF5IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2xvbmVUeXBlZEFycmF5KHR5cGVkQXJyYXksIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgcmV0dXJuIG5ldyB0eXBlZEFycmF5LmNvbnN0cnVjdG9yKGJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5Lmxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVUeXBlZEFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIGFuIG9iamVjdCBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZU9iamVjdChvYmplY3QpIHtcbiAgcmV0dXJuICh0eXBlb2Ygb2JqZWN0LmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgIWlzUHJvdG90eXBlKG9iamVjdCkpXG4gICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5pdENsb25lT2JqZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNyZWF0ZWAgd2l0aG91dCBzdXBwb3J0IGZvciBhc3NpZ25pbmdcbiAqIHByb3BlcnRpZXMgdG8gdGhlIGNyZWF0ZWQgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvdG8gVGhlIG9iamVjdCB0byBpbmhlcml0IGZyb20uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgb2JqZWN0LlxuICovXG52YXIgYmFzZUNyZWF0ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gb2JqZWN0KCkge31cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgaWYgKCFpc09iamVjdChwcm90bykpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgaWYgKG9iamVjdENyZWF0ZSkge1xuICAgICAgcmV0dXJuIG9iamVjdENyZWF0ZShwcm90byk7XG4gICAgfVxuICAgIG9iamVjdC5wcm90b3R5cGUgPSBwcm90bztcbiAgICB2YXIgcmVzdWx0ID0gbmV3IG9iamVjdDtcbiAgICBvYmplY3QucHJvdG90eXBlID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDcmVhdGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQ3JlYXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBAY2xhc3MgU2hhcGVzXG4gKiBAcGFyYW0ge09iamVjdH0gY3R4ICAgICAgQ2FudmFzIGNvbnRleHQuXG4gKiBAcGFyYW0ge09iamVjdH0gZG9jdW1lbnQgVGhlIGRvY3VtZW50IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gU2hhcGVzKGN0eCwgZG9jdW1lbnQpIHtcbiAgaWYgKCFjdHgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGFwZXM6IFBsZWFzZSBwcm92aWRlIGEgY29udGV4dCBhcmd1bWVudCBbYXJnOjoxXVwiKTtcbiAgfVxuICB0aGlzLmN0eCA9IGN0eDtcbiAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIGRyYXcgYSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHkgICAgIFRoZSB5IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSByICAgICBUaGUgcmFkaXVzIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUuY2lyY2xlID0gZnVuY3Rpb24gZHJhd0NpcmNsZSh4PTQsIHk9NCwgcj0yLCBjb2xvcj1cIiMwMDAwMDBcIikge1xuICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xuICB0aGlzLmN0eC5maWxsKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBGaWxsIGEgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHggICAgIFN0YXJ0aW5nIHBvaW50IFhcbiAqIEBwYXJhbSAge051bWJlcn0geSAgICAgU3RhcnRpbmcgcG9pbnQgWVxuICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICBXaWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGggICAgIEhlaWdodCBvZiB0aGUgcmVjdGFuZ2xlXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGNvbG9yIEEgaGV4IHN0cmluZy5cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5yZWN0ID0gZnVuY3Rpb24gZHJhd1JlY3QoeCwgeSwgdz0xMCwgaD0xMCwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xufTtcblxuLyoqXG4gKiBwQ2lyY2xlXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICogQHJldHVybiB7UGFydGljbGV9XG4gKi9cblNoYXBlcy5wcm90b3R5cGUucENpcmNsZSA9IGZ1bmN0aW9uIHBhcnRpY2xlQ2lyY2xlKHApIHtcbiAgdGhpcy5jaXJjbGUoXG4gICAgcC5zdGF0ZS54LFxuICAgIHAuc3RhdGUueSxcbiAgICBwLnN0YXRlLnJhZGl1cyxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBwUmVjdFxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBSZWN0ID0gZnVuY3Rpb24gcGFydGljbGVSZWN0KHApIHtcbiAgdGhpcy5yZWN0KFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS53aWR0aCxcbiAgICBwLnN0YXRlLmhlaWdodCxcbiAgICBwLnN0YXRlLmNvbG9yXG4gICk7XG4gIHJldHVybiBwO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gRHJhdyBhIGxpbmUgYmV0d2VlbiB0aGVzZSB0d28gcG9pbnRzLlxuICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICogQHBhcmFtICB7TnVtYmVyfSB5MFxuICogQHBhcmFtICB7TnVtYmVyfSB4MVxuICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICogQHBhcmFtICB7c3RyaW5nfSBzdHlsZVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lWFkgPSBmdW5jdGlvbih4MCwgeTAsIHgxLCB5MSwgc3R5bGU9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gc3R5bGU7XG4gIHRoaXMuY3R4Lm1vdmVUbyh4MCwgeTApO1xuICB0aGlzLmN0eC5saW5lVG8oeDEsIHkxKTtcbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxXG4gKiBAcmV0dXJuIHtWb2lkfVxuICovXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lVmVjID0gZnVuY3Rpb24odmVjMCwgdmVjMSkge1xuICB0aGlzLmRyYXdMaW5lWFkodmVjMC5nZXQoXCJ4XCIpLCB2ZWMwLmdldChcInlcIiksIHZlYzEuZ2V0KFwieFwiKSwgdmVjMS5nZXQoXCJ5XCIpKTtcbiAgcmV0dXJuIHZvaWQoMCk7XG59O1xuXG5TaGFwZXMucHJvdG90eXBlLmRyYXdMaW5lUG9pbnRzID0gZnVuY3Rpb24oLi4ucG9pbnRzKSB7XG4gIGNvbnN0IFtmaXJzdFBvaW50XSA9IHBvaW50cztcblxuICBpZiAoIWZpcnN0UG9pbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCBpbnB1dHNcIik7XG4gIH1cblxuICBpZiAocG9pbnRzLmxlbmd0aCA8IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGJlIGdpdmVuIGEgYSBudW1iZXIgb2YgcG9pbnRzIGdyZWF0ZXIgdGhhbiAxXCIpO1xuICB9XG5cbiAgY29uc3Qge3g6IHN4LCB5OiBzeX0gPSBmaXJzdFBvaW50O1xuICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgdGhpcy5jdHgubW92ZVRvKHN4LCBzeSk7XG5cbiAgLy8gU29tZSB0cmlja3kgZGVzdHJ1Y3RpbmcgZ29pbmcgb24gaGVyZS5cbiAgLy8gSSBuZWVkIHNvbWUgcHJhY3RpY2Ugc28uLi4ganVzdCB0ZXN0aW5nIGl0IG91dC5cbiAgLy8gVGhlIC4uLnBvaW50cyBiaXQgaXMganVzdCBhIHNoYWxsb3cgY29weWluZyBhcnJheVxuICAvLyBidXQgZ2V0dGluZyByaWQgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICAvLyBUaGUgc2Vjb25kIGJpdCBpcyBkZXN0cnVjdGluZyB0aGUgb2JqZWN0IHRoYXRcbiAgLy8gaXQgZ2V0cyBmb3IgZWFjaCBpdGVyYXRpb24gYW5kIGFsaWFzaW5nXG4gIC8vIHRoZSB2YWx1ZXMgdG8gcHggYW5kIHB5LlxuXG4gIGNvbnN0IFssIC4uLnhzXSA9IHBvaW50cztcbiAgZm9yIChsZXQge3g6IHB4LCB5OiBweX0gb2YgeHMpIHtcbiAgICB0aGlzLmN0eC5saW5lVG8ocHgsIHB5KTtcbiAgfVxuXG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGhlaWdodFxuICogQHBhcmFtICB7TnVtYmVyfSBncmlkU2l6ZVxuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvclxuICovXG5TaGFwZXMucHJvdG90eXBlLmdyaWQgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBncmlkU2l6ZT0yMCwgY29sb3I9XCIjY2NjXCIpIHtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG5cbiAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCAwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oeCwgaGVpZ2h0KTtcbiAgfVxuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgaGVpZ2h0OyB5ICs9IGdyaWRTaXplKSB7XG4gICAgdGhpcy5jdHgubW92ZVRvKDAsIHkpO1xuICAgIHRoaXMuY3R4LmxpbmVUbyh3aWR0aCwgeSk7XG4gIH1cblxuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gU2hhcGVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9zaGFwZXMuanMiLCIvKipcbiAqIFlBVCBzdGFuZHMgZm9yIFlldCBBbm90aGVyIFR3ZWVuLlxuICogV2h5IG5vdCBoYXZlIG9uZSBtb3JlIHBhY2thZ2UgdGhhdCBkb2VzIHRoZSBzYW1lIHRoaW5nIGFzIHRoZSA1MCBvdXQgdGhlcmU/XG4gKiBXZWxsIHRoYXRzIGEgZ29vZCBxdWVzdGlvbiB0aGF0IHdpbGwgbm90IGJlIGFuc3dlcmVkIGluIHRoaXMgY29tbWVudCBibG9jay5cbiAqIFRvIGJlIGhvbmVzdCBpdHMgZm9yIHByYWN0aWNlIGFuZCBsZWFybmluZyBwdXJwb3Nlcy4gQW5kIGlmIGFueW9uZSBpbiB0aGVpclxuICogcmlnaHQgbWluZCBhY3RhdWxseSBiZW5lZml0cyBmcm9tIHRoaXMgdGhlbiBzbyBiZSBpdC5cbiAqL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbmNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIik7XG5jb25zdCB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcbiAgb2JqOiB7eDogMCwgeTogMH0sXG4gIHByb3BzOiB7eDogMTAwLCB5OiAxMDB9LFxuICBlYXNpbmc6IFwiZWFzZVwiLFxuICBkdXJhdGlvbjogMTAwMCxcbn07XG5cbmNvbnN0IGV2ZW50SW5zdGFuY2UgPSBldmVudC5pbml0KCk7XG4vLyBJbmhlcml0IG1ldGhvZHMgZnJvbSBldmVudEluc3RhbmNlXG5jb25zdCBZQVQgPSBPYmplY3QuY3JlYXRlKGV2ZW50SW5zdGFuY2UpO1xuXG5ZQVQuaW5pdCA9IGZ1bmN0aW9uIGluaXRUd2VlbihvcHRzKSB7XG4gIC8vIENhbiBhbmQgdXNlcyBFdmVudCBhbmQgQ2xvY2sgbWV0aG9kcy5cblxuICBpZiAoIW9wdHMuY2xvY2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIGNsb2NrIEFQSS5cIik7XG4gIH1cblxuICB0aGlzLl9jbG9jayA9IG9wdHMuY2xvY2suaW5pdCh7XG4gICAgZnBzOiBvcHRzLmZwcyB8fCA2MCxcbiAgfSk7XG5cbiAgdGhpcy5wYXJlbnQgPSBldmVudEluc3RhbmNlO1xuICB0aGlzLnR3ZWVucyA9IFtdO1xuXG4gIC8qKlxuICAgKiBlYXNpbmdGbnNcbiAgICogQGRlc2NyaXB0aW9uIEFsbCBlYXNpbmcgZnVuY3Rpb25zIGFyZSBvcmlnbmlhbGx5IHdyaXR0ZW5cbiAgICogYnkgcm9iZXJ0IHBlbm5lciwgdGhlIHR3ZWVuaW5nIGdvZC5cbiAgICogSGVyZSBlYWNoIG1ldGhvZCBpcyBwYXNzZWQgYSBub3JtYWxpemVkIHZhbHVlLiBXaGljaCBpc1xuICAgKiB1c3VhbGx5IGEgbnVtYmVyIGJldHdlZW4gMCBhbmQgMS4gWW91IGNhbiB0aGluayBvZiB0aGlzIG51bWJlciBhc1xuICAgKiBhIHBlcmNlbnRhZ2Ugb2YgYSByYW5nZS4gV2l0aCB0aGF0IG5vcm1saXplZCB2YWx1ZSAvIHBlcmNlbnRhZ2Ugd2VcbiAgICogY2FuIG1hcCB0aGF0IHBlcmNlbnRhZ2UgdG8gYW5vdGhlciByYW5nZS4gVGhpcyBpcyBjYWxsZWQgaW50ZXJwb2xhdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cDovL3JvYmVydHBlbm5lci5jb20vZWFzaW5nL31cbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHRoaXMuZWFzaW5nRm5zID0ge1xuICAgIC8vIEhlcmUgdGhpcyBlYXNlIGZ1bmN0aW9uIGlzIGxpbmVhciBhcyB0aGVyZSBpcyBvbmx5IG9uZVxuICAgIC8vIG4gdmFsdWUuIEVhY2ggZWFzZSBmdW5jdGlvbiBjYW4gYmUgbWFwcGVkIHRvIGEgcG9seW5vbWlhbC5cbiAgICBlYXNlKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogYXggKyBiID0gYzsgd2hlcmUgeCBpcyB0aGUgbm9ybWFsaXplZCB2YWx1ZVxuICAgICAgcmV0dXJuIGMgKiBuICsgYjtcbiAgICB9LFxuICAgIGVhc2VJblF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAxeF4yICsgMHggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiBuKSArIGI7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVhZChjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IC0xeF4yICsgMnggKyAwID0gZDtcbiAgICAgIHJldHVybiBjICogKG4gKiAoMiAtIG4pKSArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkKGMsIGIsIG4pIHtcbiAgICAgIGlmICgobio9MikgPCAxKSB7XG4gICAgICAgIHJldHVybiBjLzIgKiAobipuKSArIGI7IC8vIFBvbHlub21pYWwgZm9yIGhhbGYgdGhlIHJhbmdlOlxuICAgICAgICAvLyAyeF4yICsgMHggKyAwID0gZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiAtYy8yICogKCgtLW4pKihuLTIpIC0gMSkgKyBiOyAvLyBQb2x5bm9taWFsIGZvciB0aGUgdGhlIHVwcGVyXG4gICAgICAvLyBoYWxmIG9mIHRoZSByYW5nZTogLTJ4XjIgKyA0eCAtIDFcbiAgICB9LFxuICB9O1xuXG4gIHRoaXMuX2Nsb2NrLm9uKFwidGlja1wiLCB0aGlzLnVwZGF0ZVR3ZWVucywgdGhpcyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHVwZGF0ZVR3ZWVucyAtIFVwZGF0ZXMgYWxsIHRoZSB0d2VlbiBpbnN0YW5jZXMuXG4gKi9cbllBVC51cGRhdGVUd2VlbnMgPSBmdW5jdGlvbiB1cGRhdGVUZWVucygpIHtcbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodHdlZW4pID0+IHtcbiAgICBpZiAodHdlZW4udGlja2VyLm5lZWRzVXBkYXRlKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICB9XG5cbiAgICBpZiAoIXR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSAmJlxuICAgICAgICB0d2Vlbi50aWNrZXIuU1RBVEUgPT09IFwiRE9ORVwiKSB7XG4gICAgICB0d2Vlbi51cGRhdGUodHdlZW4udGlja2VyKTtcbiAgICAgIHR3ZWVuLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh0d2Vlbi50aWNrZXIuc3RvcHBlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJZb3VyIHR3ZWVuIGlzIHN0b3BwZWQuXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5ZQVQuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz17fSkge1xuICBjb25zdCBZQVRJbnN0YW5jZSA9IE9iamVjdC5jcmVhdGUoWUFUKTtcbiAgY29uc3QgX29wdHMgPSBPYmplY3QuYXNzaWduKGNsb25lKERFRkFVTFRTKSwgb3B0cyk7XG4gIGNvbnN0IHtkdXJhdGlvbiwgb2JqLCBwcm9wcywgZWFzaW5nLCBpZH0gPSBfb3B0cztcblxuICBpZiAoIVlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgZWFzaW5nIGZ1bmN0aW9uICR7ZWFzaW5nfSBkb2VzIG5vdCBleGlzdHNgKTtcbiAgfVxuXG4gIGlmIChpZCkge1xuICAgIGlmICh0aGlzLnR3ZWVucy5zb21lKCh4KSA9PiB4LmlkID09PSBpZCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHR3ZWVuIHdpdGggaWQ6ICR7aWR9IGFscmVhZHkgZXhpc3RzLmApO1xuICAgIH1cblxuICAgIFlBVEluc3RhbmNlLmlkID0gaWQ7XG4gIH0gZWxzZSB7XG4gICAgWUFUSW5zdGFuY2UuaWQgPSB0aGlzLnR3ZWVucy5sZW5ndGggKyAxO1xuICB9XG5cbiAgWUFUSW5zdGFuY2Uuc3RhdGUgPSBjbG9uZShvYmopO1xuICBZQVRJbnN0YW5jZS5vYmogPSBvYmo7XG4gIFlBVEluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gIFlBVEluc3RhbmNlLmR1cmF0aW9uID0gZHVyYXRpb247XG4gIFlBVEluc3RhbmNlLmVhc2luZyA9IFlBVEluc3RhbmNlLmVhc2luZ0Zuc1tlYXNpbmddO1xuICBZQVRJbnN0YW5jZS50aWNrZXIgPSB0aGlzLl9jbG9jay5jcmVhdGVTbGF2ZSh7XG4gICAgaWQ6IFlBVEluc3RhbmNlLmlkLFxuICAgIGR1cmF0aW9uOiBZQVRJbnN0YW5jZS5kdXJhdGlvbixcbiAgfSk7XG5cbiAgdGhpcy50d2VlbnMucHVzaChZQVRJbnN0YW5jZSk7XG4gIHJldHVybiBZQVRJbnN0YW5jZTtcbn07XG5cbllBVC5nZXQgPSBmdW5jdGlvbihpZCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIFlBVFswXTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50d2Vlbi5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLnR3ZWVuW2ldLmlkID09PSBpZCkge1xuICAgICAgcmV0dXJuIHRoaXMudHdlZW5baV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuWUFULnJld2luZCA9IGZ1bmN0aW9uKGlkPXRoaXMuaWQpIHtcbiAgY29uc3QgdHdlZW4gPSB0aGlzLmdldChpZCk7XG5cbiAgaWYgKCF0aGlzLnN0b3BwZWQpIHtcbiAgICB0d2Vlbi5zdG9wKCk7XG4gIH1cblxuICAvLyBGaWd1cmUgb3V0IGEgd2F5IHRvIGNhY2hlIHRoZSBvbGQgcHJvcHMgLy9cbiAgdGhpcy5vcHRzLm9iaiA9IHRoaXMub3B0cy5wcm9wcztcbiAgdGhpcy5vcHRzLnByb3BzID0gdGhpcy5vcHRzLnByb3BzQmVmb3JlVHdlZW47XG5cbiAgdHdlZW4uc3RhcnQoKTtcbn07XG5cbllBVC5zdGFydEFsbCA9IGZ1bmN0aW9uIHN0YXJ0QWxsKCkge1xuICBpZiAoIXRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RhcnRcIik7XG4gIH1cblxuICB0aGlzLnR3ZWVucy5mb3JFYWNoKCh0KSA9PiB7XG4gICAgdC50aWNrZXIuc3RhcnQoKTtcbiAgfSk7XG5cbiAgdGhpcy5fY2xvY2suc3RhcnQoKTtcbn07XG5cbi8qKlxuICogc3RvcEFsbCAtIFN0b3BzIGFsbCB0d2VlbnNcbiAqL1xuWUFULnN0b3BBbGwgPSBmdW5jdGlvbiBzdG9wQWxsKCkge1xuICBpZiAodGhpcy50d2VlbnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYXJlIG5vIHR3ZWVucyB0byBzdG9wXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2suc3RvcCgpO1xufTtcblxuLyoqXG4gKiBkZWxheSAtIGhvdyBsb25nIHRvIGRlbGF5IHRoZSBhbmltYXRpb25cbiAqIEBwYXJhbSAge251bWJlcn0gZHVyYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkoZHVyYXRpb24pIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICB0aGlzLm9iaiA9IGNsb25lKHRoaXMuc3RhdGUpO1xuICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGlja2VyLnN0YXJ0KCksIGR1cmF0aW9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0b3AgLSBzdG9wcyB0aGUgdGlja2VyXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgdGhpcy50aWNrZXIuc3RvcCgpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZmluaXNoIC0gZmluaXNoZXMgdGhlIHR3ZWVuIGFuaW1hdGlvblxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuZmluaXNoID0gZnVuY3Rpb24gZmluaXNoKCkge1xuICB0aGlzLnN0b3AoKTtcbiAgdGhpcy5fY2xvY2sucmVtb3ZlU2xhdmUodGhpcy50aWNrZXIuaWQpO1xuICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5ZQVQucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGlkPXRoaXMuaWQpIHtcbiAgdGhpcy50d2VlbnMgPSB0aGlzLnR3ZWVucy5maWx0ZXIoKHQpID0+IHtcbiAgICBpZiAodC5pZCA9PT0gaWQpIHtcbiAgICAgIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHQudGlja2VyLmlkKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59O1xuXG5ZQVQudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKHRpY2tlcikge1xuICBpZiAoIXRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzKTtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcbiAgfVxuXG4gIGNvbnN0IHt0aW1lU2luY2VTdGFydDogZGVsdGEsIGR1cmF0aW9ufSA9IHRpY2tlcjtcbiAgY29uc3Qgbm9ybSA9IHV0aWxzLm5vcm1hbGl6ZShkZWx0YSwgMCwgZHVyYXRpb24ubXMpO1xuXG4gIGZvciAobGV0IGtleSBpbiB0aGlzLm9iaikge1xuICAgIGlmICh0aGlzLm9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBpZiAodGhpcy5vYmpba2V5XSAhPT0gdW5kZWZpbmVkICYmIHRoaXMucHJvcHNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc3RhdGVba2V5XSA9IHRoaXMuZWFzaW5nKHRoaXMucHJvcHNba2V5XSAtIHRoaXMub2JqW2tleV0sIHRoaXMub2JqW2tleV0sIG5vcm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnN0YXRlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBZQVQ7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG5cbi8qXG4gKlxuICogVEVSTVMgT0YgVVNFIC0gRUFTSU5HIEVRVUFUSU9OU1xuICogXG4gKiBPcGVuIHNvdXJjZSB1bmRlciB0aGUgQlNEIExpY2Vuc2UuIFxuICogXG4gKiBDb3B5cmlnaHQgwqkgMjAwMSBSb2JlcnQgUGVubmVyXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQgbW9kaWZpY2F0aW9uLCBcbiAqIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqIFxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgXG4gKiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBcbiAqIG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIFxuICogcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIGF1dGhvciBub3IgdGhlIG5hbWVzIG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgdXNlZCB0byBlbmRvcnNlXG4gKiBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCIgQU5EIEFOWVxuICogRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9cbiAqIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIXG4gKiAgQ09QWVJJR0hUIE9XTkVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMXG4gKiAgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRcbiAqICBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRURcbiAqIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5cbiAqICBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRFxuICogT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90d2Vlbi5qcyIsIi8qKlxuICogRXZlbnRcbiAqIEB0eXBlIHtPYmplY3R9XG4gKiBAaW1wbGVtZW50cyB7dXRpbHN9XG4gKi9cbmNvbnN0IEV2ZW50ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuLyoqXG4gKiBpbml0XG4gKiBAbWVtYmVyT2YgRXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgZXZlbnQgb2JqZWN0LlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmluaXQgPSBmdW5jdGlvbiBpbml0RXZlbnQoKSB7XG4gIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBlbWl0XG4gKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGhhbmRlbGVyIHRoYXQgYXNzb2NhaXRlZCB3aXRoIHRoZSBlbWl0dGVkIGV2ZW50LlxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmVtaXQgPSBmdW5jdGlvbiBlbWl0KC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50LCAuLi5yZXN0XSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudDogUGxlYXNlIHByb3ZpZGUgdHJ1dGh5IGFyZ3VtZW50c1wiKTtcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcblxuICBpZiAodGhpcy5jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCkge1xuICAgIHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soLi4ucmVzdCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb25cbiAqIEBkZXNjcmlwdGlvbiBBdHRhY2ggYSBoYW5kbGVyIHRvIGFuIGV2ZW50LlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge09iamVjdH0gICBjb250ZXh0XG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgaWYgKCFldmVudCB8fCAhZm4pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICBpZiAoY29udGV4dCkge1xuICAgIGZuID0gZm4uYmluZChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50LnNwbGl0KFwiIFwiKTtcblxuICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGV2ZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgdGhpcy5jYWxsYmFja3NbZV0gPSB0aGlzLmNhbGxiYWNrc1tlXSB8fCBbXTtcblxuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZV0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERvbnQgY3JlYXRlIGR1cGxpY2F0ZXMgb2YgdGhlIHNhbWUgaGFuZGVsZWQgZnVuY3Rpb24uXG4gICAgLy8gSWYgeW91IHdhbnQgeW91ciBmdW5jdGlvbiBydW4gdHdpY2Ugd3JhcCBpdCBpbiBhIGZ1bmN0aW9uLlxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1tlXS5ldmVyeSgoY2IsIGksIGNvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNiICE9PSBmbjtcbiAgICB9KSA/IHRoaXMuY2FsbGJhY2tzW2VdLnB1c2goZm4pIDpcbiAgICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IFRoYXQgZnVuY3Rpb24gJHtmbn0gaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZCBhYCArXG4gICAgICAgIFwiaGFuZGxlciBmb3IgdGhpcyBldmVudC5cIik7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBvZmZcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYW4gZXZlbnQgaGFuZGVsZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9mZiA9IGZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgZm5dID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIWZuKSB7XG4gICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IGNhbGxiYWNrcy5maWx0ZXIoKGNiKSA9PiBjYiAhPT0gZm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBsaXN0ZW5lcnMgLSBSZXR1cm4gYWxsIGNhbGxiYWNrcyBhdHRhY2hlZCB0byBhIGNlcnRhaW4gZXZlbnRcbiAqIEBwYXJhbSAge2FueTxBcnJheT59IGFyZ3NcbiAqIEByZXR1cm4ge2Z1bmN0aW9uW119XG4gKi9cbkV2ZW50Lmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWxsYmFja3MpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNhbGxiYWNrc1tldmVudF0pIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xufTtcblxuRXZlbnQub25jZSA9IGZ1bmN0aW9uIG9uY2UoLi4uYXJncykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgW2V2ZW50LCBmbiwgY29udGV4dF0gPSBhcmdzO1xuXG4gIGNvbnN0IHdyYXAgPSBmdW5jdGlvbiB3cmFwKCkge1xuICAgIGZuLmJpbmQoY29udGV4dCkoKTtcbiAgICBzZWxmLm9mZihldmVudCwgd3JhcCk7XG4gIH07XG5cbiAgdGhpcy5vbihldmVudCwgd3JhcCwgY29udGV4dCk7XG59O1xuXG4vLyBBbGlhc2VzIC8vXG5FdmVudC5yZW1vdmVMaXN0ZW5lciA9IEV2ZW50LnJlbW92ZUFsbExpc3RlbmVycyA9IEV2ZW50Lm9mZjtcbkV2ZW50LmZpcmUgPSBFdmVudC5lbWl0O1xuRXZlbnQuYWRkTGlzdGVuZXIgPSBFdmVudC5vbjtcbkV2ZW50LmdldCA9IEV2ZW50Lmxpc3RlbmVycztcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZXZlbnQuanMiLCJjb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpLmluaXQoKTtcbmNvbnN0IENsb2NrID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBNQVhfRlBTID0gNjA7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogaW5pdCAtIEluaXRhbGl6ZXMgdGhlIGNsb2NrIHdpdGggY29ycmVjdCBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG9wdHMuZnBzIFRoZSBmcHMgeW91IHdhbnQgdGhlIGNsb2NrIHRvIHRpY2sgYXQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suaW5pdCA9IGZ1bmN0aW9uIGluaXRDbG9jayhvcHRzPXt9KSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBmcHM6IE1BWF9GUFMsXG4gIH0sIG9wdHMpO1xuXG4gIHRoaXMuc2xhdmVzID0gW107XG4gIHRoaXMucGFyZW50ID0gZXZlbnQ7XG5cbiAgLy8gWmVybyBiYXNlZCBmcmFtZSBjb3VudC5cbiAgdGhpcy5pbmRleCA9IC0xO1xuXG4gIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGlvbiBmcmFtZSBzbyB3ZSBjYW4gY2FuY2VsIGl0XG4gIHRoaXMuckFGID0gMDtcblxuICAvLyBUaW1lIHByb3BlcnRpZXNcbiAgdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMubGFzdFRpbWU7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIC8vIFRoZSBtYXhpbXVtIEZQUyB0aGUgYnJvd3NlciBjYW4gZGVsaXZlciBpcyA2MC5cbiAgdGhpcy5mcHMgPSBvcHRzLmZwcyA+IE1BWF9GUFMgP1xuICAgIE1BWF9GUFMgOlxuICAgIChvcHRzLmZwcyB8fCBNQVhfRlBTKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RhcnQgLSBTdGFydHMgdGhlIGNsb2NrIHdpdGggc3RhcnRpbmcgdGltZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7TnVtYmVyfSBmcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5mcHMgPiA2MCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgdG9vIGhpZ2hcIik7XG4gIH1cblxuICBpZiAoK3RoaXMuZnBzID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIG5vdCB2YWxpZFwiKTtcbiAgfVxuXG4gIHRoaXMuZnBzID0gMTAwMCAvIHRoaXMuZnBzO1xuICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG5cbiAgLy8gU3RhcnQgdGlja2luZ1xuICB0aGlzLmxvb3AodGhpcy5zdGFydFRpbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogdGlja1xuICogQHBhcmFtICB7TnVtYmVyfSBuZXdUaW1lIEEgdmFsdWUgaW4gbXMgdGhhdCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCB0aW1lLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmxvb3AgPSBmdW5jdGlvbiBsb29wKG5ld1RpbWUpIHtcbiAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTtcblxuICBsZXQgZGVsdGEgPSBuZXdUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IG5ld1RpbWUgLSB0aGlzLnN0YXJ0VGltZTtcblxuICBpZiAoZGVsdGEgPiB0aGlzLmZwcykge1xuICAgIHRoaXMuaW5kZXgrKztcblxuICAgIHRoaXMud2hpcFNsYXZlcyh7XG4gICAgICBuZXdUaW1lLFxuICAgICAgZGVsdGEsXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIGxhc3RUaW1lOiB0aGlzLmxhc3RUaW1lLFxuICAgICAgY2xvY2tTdGFydDogdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aW1lU2luY2VTdGFydDogdGhpcy50aW1lU2luY2VTdGFydCxcbiAgICB9KTtcblxuICAgIHRoaXMubGFzdFRpbWUgPSBuZXdUaW1lIC0gKGRlbHRhICUgdGhpcy5mcHMpO1xuICB9XG5cbiAgdGhpcy5lbWl0KFwicmVuZGVyXCIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gU3RvcCB0aGUgY2xvY2sgYW5kIGNhbGwgdGhlIGxhc3QgdGljayBpZiBuZWVkZWQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suc3RvcCA9IGZ1bmN0aW9uIHN0b3BDbG9jaygpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xuXG4gIC8vIFJlY29yZCB3aGVuIHdlIHN0b3BwZWQuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCArPSB0aGlzLnN0b3BUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcblxuICB0aGlzLmVtaXQoXCJzdG9wcGVkXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogd2hpcFNsYXZlcyAtIFJ1biBhbGwgc2xhdmVzIGluIHNlcXVlbmNlIGFuZCBwYXNzIGluXG4gKiB0aGUgZ2l2ZW4gc3RhdGUgb2YgdGhlIGNsb2NrLlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLndoaXBTbGF2ZXMgPSBmdW5jdGlvbiB3aGlwU2xhdmVzKHN0YXRlKSB7XG4gIGlmICghdGhpcy5zbGF2ZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5zbGF2ZXMuZm9yRWFjaCgoc2xhdmUsIGluZGV4KSA9PiB7XG4gICAgc2xhdmUubnVkZ2Uoc3RhdGUpO1xuICB9KTtcblxuICB0aGlzLmVtaXQoXCJ0aWNrXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkNsb2NrLmNyZWF0ZVNsYXZlID0gZnVuY3Rpb24gY3JlYXRlU2xhdmUob3B0cykge1xuICBpZiAoIW9wdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIG9wdGlvbnMgb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3Qge2lkLCBkdXJhdGlvbn0gPSBvcHRzO1xuICBjb25zdCB0aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBzbGF2ZSA9IE9iamVjdC5jcmVhdGUodGlja2VyKVxuICAgIC5pbml0KHt0aW1lU3RhbXAsIGlkLCBkdXJhdGlvbn0pO1xuXG4gIGlmIChpZCkge1xuICAgIHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICAgIHJldHVybiBzbGF2ZTtcbiAgfVxuXG4gIHNsYXZlLmlkID0gdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gIHJldHVybiBzbGF2ZTtcbn07XG5cbkNsb2NrLnJlbW92ZVNsYXZlID0gZnVuY3Rpb24gcmVtb3ZlU2xhdmUoaWQpIHtcbiAgdGhpcy5zbGF2ZXMgPSB0aGlzLnNsYXZlcy5maWx0ZXIoKHNsYXZlKSA9PiB7XG4gICAgaWYgKHNsYXZlLmlkICE9PSBpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNsYXZlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5DbG9jay5jbGVhclNsYXZlcyA9IGZ1bmN0aW9uIGNsZWFyU2xhdmVzKCkge1xuICBpZiAodGhpcy5zbGF2ZXMubGVuZ3RoKSB0aGlzLnNsYXZlcyA9IFtdO1xufTtcblxuQ2xvY2sucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgdGhpcy5yQUYgPSAwO1xufTtcblxuQ2xvY2sucmVtb3ZlQWxsU2xhdmVzID0gQ2xvY2suY2xlYXJTbGF2ZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy5kdXJhdGlvbi5tcyAtIHRoaXMudGltZVNpbmNlU3RhcnQgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKG5ld0R1cmF0aW9uLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xufTtcblxuVGlja2VyLm51ZGdlID0gZnVuY3Rpb24gbnVkZ2Uoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc3RhdGUgb2JqZWN0XCIpO1xuICB9XG5cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==