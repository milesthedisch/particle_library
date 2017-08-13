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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint max-len: 0 */
	
	var utils = __webpack_require__(3);
	
	var INITIAL_STATE = {
	  x: 0,
	  y: 1
	};
	
	/**
	 * Vector class is responsible for doing vector operations and storing
	 * the x and y coordinates of the vector.
	 */
	
	/**
	 * @class Vector
	 * @param {Object} state object.
	 */
	
	var Vector = function () {
	
	  /**
	   * constructor
	   * @param  {Object} state Initial state
	   */
	  function Vector() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	
	    _classCallCheck(this, Vector);
	
	    this.state = state;
	  }
	
	  /**
	   * Create - Easy way to instantiate a vector.
	   * @memberOf Vector
	   * @param  {Int} x
	   * @param  {Int} y
	   * @return {Vector}   A object inheriting from Vector.
	   */
	
	
	  _createClass(Vector, [{
	    key: "create",
	    value: function create() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
	      var vec = new Vector({ x: x, y: y });
	      return vec;
	    }
	  }, {
	    key: "set",
	
	
	    /**
	     * Set - A setter for the vector class.
	     * @memberOf Vector
	     * @param  {*} prop
	     * @param  {*} val
	     * @return {Boolean} Is the prop your passing in exsist.
	     */
	    value: function set(prop, val) {
	      // TODO: Add check val is number
	      // 1. Create utils.isNumber function.
	
	      if (this.state.hasOwnProperty(prop)) {
	        this.state[prop] = val;
	        return true;
	      }
	
	      return false;
	    }
	  }, {
	    key: "get",
	
	
	    /**
	     * get - A getter for the vector class.
	     * @memberOf Vector
	     * @param  {String} prop  The prop to set on state.
	     * @return {Value}        The value assosiated with the prop.
	     */
	    value: function get(prop) {
	      return this.state[prop];
	    }
	  }, {
	    key: "setAngle",
	
	
	    /**
	     * setAngle - Plot the corrdinates based on radians given.
	     * @memberOf Vector
	     * @param {Radians} rad A floating point number.
	     * @return {Vector}
	     */
	    value: function setAngle(rad) {
	      // TODO: Add check rad is number
	      // 1. Create utils.isNumber function.
	
	      var length = this.getLength();
	
	      this.set("x", Math.cos(rad) * length);
	      this.set("y", Math.sin(rad) * length);
	
	      return this;
	    }
	  }, {
	    key: "setLength",
	
	
	    /**
	     * setLength - Takes a length and sets coordinate.
	     * @memberOf Vector
	     * @param {Integer} length
	     * @return {Vector}
	     */
	    value: function setLength(length) {
	      // TODO: Add check rad is number
	      // 1. Create utils.isNumber function.
	
	      var rad = this.getAngle();
	
	      this.set("x", Math.cos(rad) * length);
	      this.set("y", Math.sin(rad) * length);
	
	      return this;
	    }
	  }, {
	    key: "getLength",
	
	
	    /**
	     * getLength - Gets length of the coordinates from center plane.
	     * @memberOf Vector
	     * @return {Integer} Cooridinates.
	     */
	    value: function getLength() {
	      var x = this.get("x");
	      var y = this.get("y");
	      return Math.hypot(x, y);
	    }
	  }, {
	    key: "getAngle",
	
	
	    /**
	     * getAngle - Get the angle of coordinates from center plane.
	     * @memberOf Vector
	     * @return {Integer} Cooridinates.
	     */
	    value: function getAngle() {
	      var x = this.get("x");
	      var y = this.get("y");
	      return Math.atan2(y, x);
	    }
	  }, {
	    key: "random",
	
	
	    /**
	     * random generate a vector with random states.
	     * @memberOf Vector
	     * @param {Number} min - A min range on the random vector state.
	     * @param {Number} max - A max range on the random vector state.
	     * @return {Vector}
	     */
	    value: function random() {
	      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
	
	      var x = utils.lerp(Math.random(), min, max);
	      var y = utils.lerp(Math.random(), min, max);
	      return this.create(x, y);
	    }
	  }, {
	    key: "randomBetween",
	
	
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
	    value: function randomBetween() {
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
	    }
	  }, {
	    key: "add",
	
	
	    /**
	     * add - Should add vectors together given a vector
	     * @memberOf Vector
	     * @param {Vector} v2 A given vector to add.
	     * @return {Vector} A vector with cooridnates, or multiple vectors.
	     */
	    value: function add(v2) {
	      return this.create(this.get("x") + v2.get("x"), this.get("y") + v2.get("y"));
	    }
	  }, {
	    key: "subtract",
	
	
	    /**
	     * subtract - should subtract the given vector with its own vector.
	     * @memberOf Vector
	     * @param  {Vector} v2 A vector that contains state.
	     * @return {Vector} A vector that contains a reduced state.
	     * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
	     */
	    value: function subtract(v2) {
	      return this.create(this.get("x") - v2.get("x"), this.get("y") - v2.get("y"));
	    }
	  }, {
	    key: "multiply",
	
	
	    /**
	     * Mulitplying vectors together
	     * @memberOf Vector
	     * @example {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
	     * @param  {Vector} v2 A vector that contains state.
	     * @return {Vector}    A vector that contains a reduced state.
	     */
	    value: function multiply(v2) {
	      return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
	    }
	  }, {
	    key: "divide",
	
	
	    /**
	     * Divide vectors together.
	     * @memberOf Vector
	     * @param  {Vector} v2 A vector that contains state.
	     * @return {Vector}    A vector that contains a reduced state.
	     */
	    value: function divide(v2) {
	      return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
	    }
	  }, {
	    key: "addTo",
	
	
	    /**
	     * Adds to current state the state of v2
	     * @memberOf Vector
	     * @param {Vector} [v2] - A vector that contains state.
	     * @return {Object} [state] - Key value pair of coordinates
	     */
	    value: function addTo(v2) {
	      this.state.x = this.get("x") + v2.get("x");
	      this.state.y = this.get("y") + v2.get("y");
	      return this;
	    }
	  }, {
	    key: "subtractFrom",
	
	
	    /**
	     * Subtracts from current state the state of v2
	     * @memberOf Vector
	     * @param {Vector} [v2] - A vector that contains state.
	     * @return {Object} [state] - Key value pair of coordinates
	     */
	    value: function subtractFrom(v2) {
	      this.state.x = this.get("x") - v2.get("x");
	      this.state.y = this.get("y") - v2.get("y");
	      return this;
	    }
	  }, {
	    key: "multiplyBy",
	
	
	    /**
	     * mulitplies by current state the state of v2
	     * @memberOf Vector
	     * @param {Vector} [v2] - A vector that contains state.
	     * @return {Object} [state] - Key value pair of coordinates
	     */
	    value: function multiplyBy(v2) {
	      this.state.x = this.get("x") * v2.get("x");
	      this.state.y = this.get("y") * v2.get("y");
	      return this;
	    }
	  }, {
	    key: "divideBy",
	
	
	    /**
	     * Divides by current state the state of v2
	     * @memberOf Vector
	     * @param {Vector} [v2] - A vector that contains state.
	     * @return {Object} [state] - Key value pair of coordinates
	     */
	    value: function divideBy(v2) {
	      this.state.x = this.get("x") / v2.get("x");
	      this.state.y = this.get("y") / v2.get("y");
	
	      return this;
	    }
	  }, {
	    key: "rotateBy",
	
	
	    /**
	     * @memberOf Vector
	     * @param  {Number} angle A number of radians to rotate clockwise by.
	     * @return {Vector}
	    */
	    value: function rotateBy(angle) {
	      var cos = Math.cos(angle);
	      var sin = Math.sin(angle);
	
	      //
	      var x = this.state.x * cos - this.state.y * sin;
	      var y = this.state.y * cos + this.state.x * sin;
	
	      this.state.x = x;
	      this.state.y = y;
	
	      return this;
	    }
	  }], [{
	    key: "distanceBetween",
	
	
	    /**
	     * v1
	     * @param {Vector} v1 Vector
	     * @param {Vector} v2 Vector
	     * @return {number}
	     */
	    value: function distanceBetween(v1, v2) {
	      var dVec = v1.subtract(v2);
	      return Math.hypot(dVec.get("x"), dVec.get("y"));
	    }
	
	    /**
	     * @description Given twos vectors see if they intersect.
	     * @memberOf Utils
	     * @param  {Vector} vec0
	     * @param  {Vector} vec1
	     * @return {Boolean}
	     */
	
	  }, {
	    key: "vectorIntersect",
	    value: function vectorIntersect(vec0, vec1) {
	      var x0 = vec0.get("x");
	      var y0 = vec0.get("y");
	      var x1 = vec1.get("x");
	      var y1 = vec1.get("y");
	      return utils.rangeIntersect(x0, y0, x1, y1);
	    }
	  }]);
	
	  return Vector;
	}();
	
	;
	
	module.exports = Vector;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	/* eslint max-len: 0 */
	
	
	function normalize(val, min, max) {
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
	function lerp(val, min, max) {
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
	function map(value, srcMin, srcMax, destMin, destMax) {
	  srcMax = Math.max(srcMax, srcMin);
	  srcMin = Math.min(srcMax, srcMin);
	  destMin = Math.min(destMin, destMax);
	  destMax = Math.max(destMin, destMax);
	  return lerp(normalize(value, srcMin, srcMax), destMin, destMax);
	};
	
	/**
	 * @description Takes a value and returns a precentage.
	 *              you can pass arbitrary large numbers in but thats not
	 *              the intended purpose of this function.
	 * @param  {Float} val 	A value.
	 * @memberOf Utils
	 * @return {Percent}    A value.
	 */
	function percent(val) {
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
	function clamp(value, min, max) {
	  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	};
	
	/**
	 * @memberOf  Utils
	 * @description Given two numbers return a random number between the two.
	 * @param  {Integer} x
	 * @param  {Integer} y
	 * @return {Integer}
	 */
	function randomBetween(x, y) {
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
	function distanceXY(x0, y0, x1, y1) {
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
	function distanceVec(v1, v2) {
	  var dVec = v1.subtract(v2);
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
	function inRange(val, min, max) {
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
	function rangeIntersect(min0, max0, min1, max1) {
	  return Math.max(max0, min0) >= Math.min(min1, max1) && Math.min(min0, max0) <= Math.max(max1, min1);
	};
	
	/**
	 * @description Given two rectange see if the intersect.
	 * @memberOf Utils
	 * @param  {Particle} r0
	 * @param  {Particle} r1
	 * @return {Boolean}
	 */
	function collisionRect(r0, r1) {
	  var r0x = r0.state.x;
	  var r0y = r0.state.y;
	  var r1x = r1.state.x;
	  var r1y = r1.state.y;
	
	  var r0w = r0x + r0.state.width;
	  var r0h = r0y + r0.state.height;
	  var r1w = r1x + r1.state.width;
	  var r1h = r1y + r1.state.height;
	
	  return rangeIntersect(r0x, r0w, r1x, r1w) && rangeIntersect(r0y, r0h, r1y, r1h);
	};
	
	/**
	 * @description Given to particle with radi return wether they collide are not
	 * @memberOf Utils
	 * @param  {Particle} c1
	 * @param  {Particle} c2
	 * @return {Boolean}
	 */
	function collisionCircle(c1, c2) {
	  var radi = c1.state.radius + c2.state.radius;
	  var distance = distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);
	
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
	function collisionCirclePoint(x, y, circle) {
	  // TODO Write tests.
	  var dist = distanceXY(x, y, circle.state.x, circle.state.y);
	
	  return circle.state.radius > dist;
	};
	
	/**
	 * @description detect a collision between circles a vector.
	 * @memberOf Utils
	 * @param  {Vector}   vec
	 * @param  {Particle} circle
	 * @return {Boolean}
	 */
	function collisionCircleVec(vec, circle) {
	  return circle.state.radius > distanceXY(vec.get("x"), vec.get("y"), circle.state.x, circle.state.y);
	};
	
	/**
	 * @description detect collision of a rectangle and a point.
	 * @memberOf Utils
	 * @param  {Number}   x
	 * @param  {Number}   y
	 * @param  {Particle} rect
	 * @return {Boolean}
	 */
	function collisionRectPoint(x, y, rect) {
	  var rectX = rect.state.x;
	  var rectY = rect.state.y;
	  return inRange(x, rectX, rectX + rect.state.width) && inRange(y, rectY, rectY + rect.state.height);
	};
	
	/**
	 * @description Given a vector and a retangle check wether they collided.
	 * @memberOf Utils
	 * @param  {Vector}   vec
	 * @param  {Particle} rect
	 * @return {Boolean}
	 */
	function collisionRectVec(vec, rect) {
	  return collisionRectPoint(vec.get("x"), vec.get("y"), rect);
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
	function throttle(func, wait, options) {
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
	function setLength(length, x, y) {
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
	function setAngle(angle, x, y) {
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
	function degToRad(deg) {
	  return deg / 180 * Math.PI;
	};
	
	/**
	 * @memberOf Utils
	 * @description Coverts radians to degress
	 * @param  {number} rad
	 * @return {number}
	 */
	function radToDeg(rad) {
	  return rad * 180 / Math.PI;
	};
	
	/**
	 * @memberOf Utils
	 * @description Round to nearest place given.
	 * @param  {number} val
	 * @param  {number} places An exponent
	 * @return {number}
	 */
	function roundToPlaces(val, places) {
	  var mult = Math.pow(10, places);
	  return Math.round(val * mult) / mult;
	};
	
	/**
	 * @memberOf Utils
	 * @param  {number} val
	 * @param  {number} nearest
	 * @return {number}
	 */
	function roundToMultiple(val, nearest) {
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
	function quadraticBezier(v0, v1, v2, t) {
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
	function cubicBezier(v0, v1, v2, v3, t) {
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
	function quadraticBezierPoint(p0, p1, p2, t) {
	  var x = quadraticBezier(p0.x, p1.x, p2.x, t);
	  var y = quadraticBezier(p0.y, p1.y, p2.y, t);
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
	function cubicBezierPoint(p0, p1, p2, p3, t) {
	  var x = cubicBezier(p0.x, p1.x, p2.x, t);
	  var y = cubicBezier(p0.y, p1.y, p2.y, t);
	  return { x: x, y: y };
	};
	
	/**
	 * @memberOf Utils
	 * @description Given points on the plane draw a curved line between
	 * all of them.
	 * @param  {{number, number}} points
	 * @param  {CanvasRenderingContext2D} ctx
	 */
	function multiCurve(points, ctx) {
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
	function ease(ease, a, b) {
	  // the delta can get extremely small and its not performant to keep
	  // on rendering or calculating for animation purposes.
	  if (Math.abs(b - a) < 0.1) {
	    return false;
	  }
	
	  return (b - a) * ease;
	};
	
	/**
	 * easeTo
	 * @param  {number} ease:      number        Ease factor.
	 * @param  {Object} origin:    Object        The starting point.
	 * @param  {Object} target:    Object        The ending point.
	 * @param  {Number} threshold: number        Easing threshold.
	 * @return {[type]}            [description]
	 */
	function easeTo(ease, origin, target) {
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
	function isObject(data) {
	  return (typeof data === "undefined" ? "undefined" : _typeof(data)) === "object" && {}.toString.call(data) === "[object Object]";
	};
	
	/**
	 * unique return an array with no duplicate values
	 * @param  {Array} array
	 * @return {Array}
	 */
	function unique(array) {
	  return array.reduce(function (x, y) {
	    if (x.indexOf(y) === -1) x.push(y);
	    return x;
	  }, []);
	};
	
	function colorInterpolation(float, colorFrom, colorTo) {
	  var r1 = colorFrom.r1,
	      g1 = colorFrom.g1,
	      b1 = colorFrom.b1;
	  var r2 = colorTo.r2,
	      g2 = colorTo.g2,
	      b2 = colorTo.b2;
	
	
	  var r = r1 + (r2 - r1) / float;
	  var g = g1 + (g2 - g1) / float;
	  var b = b1 + (b2 - b1) / float;
	
	  return "someHex";
	};
	
	function perspective(focalLength, distance) {
	  return focalLength / (focalLength - distance);
	};
	
	module.exports = {
	  normalize: normalize,
	  lerp: lerp,
	  map: map,
	  percent: percent,
	  clamp: clamp,
	  randomBetween: randomBetween,
	  distanceXY: distanceXY,
	  distanceVec: distanceVec,
	  inRange: inRange,
	  rangeIntersect: rangeIntersect,
	  collisionRect: collisionRect,
	  collisionCircle: collisionCircle,
	  collisionCirclePoint: collisionCirclePoint,
	  collisionCircleVec: collisionCircleVec,
	  collisionRectPoint: collisionRectPoint,
	  collisionRectVec: collisionRectVec,
	  throttle: throttle,
	  setLength: setLength,
	  setAngle: setAngle,
	  degToRad: degToRad,
	  radToDeg: radToDeg,
	  roundToPlaces: roundToPlaces,
	  roundToMultiple: roundToMultiple,
	  quadraticBezier: quadraticBezier,
	  cubicBezier: cubicBezier,
	  quadraticBezierPoint: quadraticBezierPoint,
	  cubicBezierPoint: cubicBezierPoint,
	  multiCurve: multiCurve,
	  perspective: perspective,
	  rotate: rotate,
	  ease: ease,
	  easeTo: easeTo,
	  isObject: isObject,
	  unique: unique
	};
	
	// module.exports = Object.create(Utils);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MmZjZTlmMDU4YjBmYjMyMWNkZiIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90aWNrZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwicmVxdWlyZSIsIlBhcnRpY2xlIiwiVXRpbHMiLCJTaGFwZXMiLCJZQVQiLCJDbG9jayIsIlRpY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1dGlscyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwidmVjIiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwicmFkIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic2V0IiwiTWF0aCIsImNvcyIsInNpbiIsImdldEFuZ2xlIiwiZ2V0IiwiaHlwb3QiLCJhdGFuMiIsIm1pbiIsIm1heCIsImxlcnAiLCJyYW5kb20iLCJjcmVhdGUiLCJ4TWluIiwieE1heCIsInlNaW4iLCJ5TWF4IiwicmFuZG9tQmV0d2VlbiIsInYyIiwiYW5nbGUiLCJ2MSIsImRWZWMiLCJzdWJ0cmFjdCIsInZlYzAiLCJ2ZWMxIiwieDAiLCJ5MCIsIngxIiwieTEiLCJyYW5nZUludGVyc2VjdCIsIk9iamVjdCIsIm5vcm1hbGl6ZSIsIm1hcCIsInZhbHVlIiwic3JjTWluIiwic3JjTWF4IiwiZGVzdE1pbiIsImRlc3RNYXgiLCJwZXJjZW50IiwiY2xhbXAiLCJmbG9vciIsImRpc3RhbmNlWFkiLCJkeCIsImR5IiwiZGlzdGFuY2VWZWMiLCJpblJhbmdlIiwibWluMCIsIm1heDAiLCJtaW4xIiwibWF4MSIsImNvbGxpc2lvblJlY3QiLCJyMCIsInIxIiwicjB4IiwicjB5IiwicjF4IiwicjF5IiwicjB3Iiwid2lkdGgiLCJyMGgiLCJoZWlnaHQiLCJyMXciLCJyMWgiLCJjb2xsaXNpb25DaXJjbGUiLCJjMSIsImMyIiwicmFkaSIsInJhZGl1cyIsImRpc3RhbmNlIiwiY29sbGlzaW9uQ2lyY2xlUG9pbnQiLCJjaXJjbGUiLCJkaXN0IiwiY29sbGlzaW9uQ2lyY2xlVmVjIiwiY29sbGlzaW9uUmVjdFBvaW50IiwicmVjdCIsInJlY3RYIiwicmVjdFkiLCJjb2xsaXNpb25SZWN0VmVjIiwidGhyb3R0bGUiLCJmdW5jIiwid2FpdCIsIm9wdGlvbnMiLCJjb250ZXh0IiwiYXJncyIsInJlc3VsdCIsInRpbWVvdXQiLCJwcmV2aW91cyIsImxhdGVyIiwibGVhZGluZyIsIkRhdGUiLCJub3ciLCJhcHBseSIsInJlbWFpbmluZyIsImNsZWFyVGltZW91dCIsInRyYWlsaW5nIiwic2V0VGltZW91dCIsInNldExlbmd0aCIsIkVycm9yIiwic2V0QW5nbGUiLCJkZWdUb1JhZCIsImRlZyIsIlBJIiwicmFkVG9EZWciLCJyb3VuZFRvUGxhY2VzIiwicGxhY2VzIiwibXVsdCIsInBvdyIsInJvdW5kIiwicm91bmRUb011bHRpcGxlIiwibmVhcmVzdCIsIlN0cmluZyIsInF1YWRyYXRpY0JlemllciIsInYwIiwidCIsImN1YmljQmV6aWVyIiwidjMiLCJxdWFkcmF0aWNCZXppZXJQb2ludCIsInAwIiwicDEiLCJwMiIsImN1YmljQmV6aWVyUG9pbnQiLCJwMyIsIm11bHRpQ3VydmUiLCJwb2ludHMiLCJjdHgiLCJtaWRYIiwibWlkWSIsIm1vdmVUbyIsImkiLCJxdWFkcmF0aWNDdXJ2ZVRvIiwiZWFzZSIsImEiLCJiIiwiYWJzIiwiZWFzZVRvIiwib3JpZ2luIiwidGFyZ2V0IiwidGhyZXNob2xkIiwiaXNPYmplY3QiLCJkYXRhIiwidG9TdHJpbmciLCJjYWxsIiwidW5pcXVlIiwiYXJyYXkiLCJyZWR1Y2UiLCJpbmRleE9mIiwicHVzaCIsImNvbG9ySW50ZXJwb2xhdGlvbiIsImZsb2F0IiwiY29sb3JGcm9tIiwiY29sb3JUbyIsImcxIiwiYjEiLCJyMiIsImcyIiwiYjIiLCJyIiwiZyIsInBlcnNwZWN0aXZlIiwiZm9jYWxMZW5ndGgiLCJyb3RhdGUiLCJleHRlbmQiLCJjbG9uZSIsInZ4IiwidnkiLCJncmF2aXR5IiwibWFnbml0dWRlIiwibWFzcyIsImRpcmVjdGlvbiIsImZyaWN0aW9uIiwic3ByaW5ncyIsIm1hc3NlcyIsInByb3RvdHlwZSIsIm9wdHMiLCJwYXJ0aWNsZSIsInNldFNwZWVkIiwic2V0SGVhZGluZyIsImFjY2VsZXJhdGUiLCJheCIsImF5IiwidXBkYXRlIiwiZnJpYyIsImdyYXYiLCJoYW5kbGVTcHJpbmdzIiwiaGFuZGxlTWFzc2VzIiwidXBkYXRlUG9zIiwic3BlZWQiLCJnZXRIZWFkaW5nIiwiZ2V0U3BlZWQiLCJhZGRTcHJpbmciLCJzcHJpbmciLCJyZW1vdmVTcHJpbmciLCJwIiwicG9pbnQiLCJzcGxpY2UiLCJhbmdsZVRvIiwiYW5nZWxUbyIsImRpc3RhbmNlVG8iLCJhZGRNYXNzIiwicmVtb3ZlTWFzcyIsImdyYXZpdGF0ZVRvIiwiZGlzdFNRIiwic3FydCIsImZvcmNlIiwiZ2VuZXJhdG9yIiwiZ2VuIiwibnVtIiwiY2FsbGJhY2siLCJmcmVlemUiLCJwYXJ0aWNsZXMiLCJzZWxmIiwiY29uc29sZSIsImxvZyIsIm5ld1BhcnRpY2xlIiwidW5kZWZpbmVkIiwic3ByaW5nRnJvbVRvIiwib2Zmc2V0Iiwic3ByaW5nRm9yY2UiLCJzeCIsInN5Iiwic3ByaW5nVG9Qb2ludCIsImRvY3VtZW50Iiwid2luZG93IiwiZHJhd0NpcmNsZSIsImNvbG9yIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsImRyYXdSZWN0IiwidyIsImgiLCJmaWxsUmVjdCIsInBDaXJjbGUiLCJwYXJ0aWNsZUNpcmNsZSIsInBSZWN0IiwicGFydGljbGVSZWN0IiwiZHJhd0xpbmVYWSIsInN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lVG8iLCJzdHJva2UiLCJkcmF3TGluZVZlYyIsImRyYXdMaW5lUG9pbnRzIiwiZmlyc3RQb2ludCIsInhzIiwicHgiLCJweSIsImdyaWQiLCJncmlkU2l6ZSIsImV2ZW50IiwiREVGQVVMVFMiLCJvYmoiLCJwcm9wcyIsImVhc2luZyIsImR1cmF0aW9uIiwiZXZlbnRJbnN0YW5jZSIsImluaXQiLCJpbml0VHdlZW4iLCJjbG9jayIsIl9jbG9jayIsImZwcyIsInBhcmVudCIsInR3ZWVucyIsImVhc2luZ0ZucyIsImMiLCJuIiwiZWFzZUluUXVhZCIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsIm9uIiwidXBkYXRlVHdlZW5zIiwidXBkYXRlVGVlbnMiLCJmb3JFYWNoIiwidHdlZW4iLCJ0aWNrZXIiLCJuZWVkc1VwZGF0ZSIsIlNUQVRFIiwicmVtb3ZlIiwic3RvcHBlZCIsIllBVEluc3RhbmNlIiwiX29wdHMiLCJhc3NpZ24iLCJpZCIsInNvbWUiLCJjcmVhdGVTbGF2ZSIsInJld2luZCIsInN0b3AiLCJwcm9wc0JlZm9yZVR3ZWVuIiwic3RhcnQiLCJzdGFydEFsbCIsInN0b3BBbGwiLCJkZWxheSIsImZpbmlzaCIsInJlbW92ZVNsYXZlIiwiZmlsdGVyIiwiZGVsdGEiLCJ0aW1lU2luY2VTdGFydCIsIm5vcm0iLCJtcyIsImtleSIsIkV2ZW50IiwiaW5pdEV2ZW50IiwiY2FsbGJhY2tzIiwiZW1pdCIsInJlc3QiLCJUeXBlRXJyb3IiLCJmbiIsImJpbmQiLCJldmVudHMiLCJzcGxpdCIsImUiLCJldmVyeSIsImNiIiwiY29sIiwid2FybiIsIm9mZiIsImxpc3RlbmVycyIsImtleXMiLCJvbmNlIiwid3JhcCIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZmlyZSIsImFkZExpc3RlbmVyIiwiTUFYX0ZQUyIsIm5vb3AiLCJpbml0Q2xvY2siLCJzbGF2ZXMiLCJpbmRleCIsInJBRiIsInN0YXJ0VGltZSIsImxhc3RUaW1lIiwic3RvcFRpbWUiLCJOYU4iLCJwZXJmb3JtYW5jZSIsImxvb3AiLCJuZXdUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2hpcFNsYXZlcyIsImNsb2NrU3RhcnQiLCJzdG9wQ2xvY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyU2xhdmVzIiwic2xhdmUiLCJudWRnZSIsInRpbWVTdGFtcCIsInJlc2V0IiwicmVtb3ZlQWxsU2xhdmVzIiwiU1RPUFBFRCIsIlJVTk5JTkciLCJET05FIiwiaW50ZXJ2YWwiLCJuYW1lIiwidGlja0ZvciIsInRpbWVTaW5jZVN0YXJ0MiIsInN0cmluZyIsInR5cGUiLCJuZXdEdXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLEtBQU1BLFNBQVMsbUJBQUFDLENBQVEsQ0FBUixDQUFmO0FBQ0EsS0FBTUMsV0FBVyxtQkFBQUQsQ0FBUSxDQUFSLENBQWpCO0FBQ0EsS0FBTUUsUUFBUSxtQkFBQUYsQ0FBUSxDQUFSLENBQWQ7QUFDQSxLQUFNRyxTQUFTLG1CQUFBSCxDQUFRLEdBQVIsQ0FBZjtBQUNBLEtBQU1JLE1BQU0sbUJBQUFKLENBQVEsR0FBUixDQUFaO0FBQ0EsS0FBTUssUUFBUSxtQkFBQUwsQ0FBUSxHQUFSLENBQWQ7QUFDQSxLQUFNTSxTQUFTLG1CQUFBTixDQUFRLEdBQVIsQ0FBZjs7QUFFQU8sUUFBT0MsT0FBUCxHQUFpQjtBQUNmVCxpQkFEZTtBQUVmRSxxQkFGZTtBQUdmQyxlQUhlO0FBSWZDLGlCQUplO0FBS2ZDLFdBTGU7QUFN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O0FDakJBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLFlBQVcsT0FBTztBQUNsQixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMzREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLFNBQVM7QUFDcEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2JBOztBQUVBO0FB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QUFMLEVBQVk7QUFDVixXQUFNLElBQUl5RyxLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNEOztBQUdELE9BQUksS0FBS29MLEtBQUwsS0FBZUEsTUFBTXdFLE9BQXJCLElBQWdDLEtBQUt4RSxLQUFMLEtBQWVBLE1BQU15RSxPQUF6RCxFQUFrRTtBQUNoRSxVQUFLMUUsV0FBTCxHQUFtQixLQUFuQjtBQUNBLFlBQU8sSUFBUDtBQUNEOztBQUVELFFBQUtDLEtBQUwsR0FBYUEsTUFBTXlFLE9BQW5CO0FBQ0EsUUFBS3JELGNBQUwsSUFBdUJqVCxNQUFNZ1QsS0FBN0I7O0FBRUEsT0FBSSxLQUFLQyxjQUFMLEdBQXNCLEtBQUsxQyxRQUFMLENBQWM0QyxFQUF4QyxFQUE0QztBQUMxQyxVQUFLdkIsV0FBTCxHQUFtQixJQUFuQjtBQUNELElBRkQsTUFFTztBQUNMLFVBQUtDLEtBQUwsR0FBYUEsTUFBTTBFLElBQW5CO0FBQ0EsVUFBSzNFLFdBQUwsR0FBbUIsS0FBbkI7QUFDRDtBQUNGLEVBcEJEOztBQXNCQWxTLFFBQU9DLE9BQVAsR0FBaUJGLE1BQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgyZmNlOWYwNThiMGZiMzIxY2RmIiwiY29uc3QgVmVjdG9yID0gcmVxdWlyZShcIi4vbGliL3ZlY3RvcnNcIik7XG5jb25zdCBQYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2xpYi9wYXJ0aWNsZVwiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vbGliL3V0aWxzXCIpO1xuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vbGliL3NoYXBlc1wiKTtcbmNvbnN0IFlBVCA9IHJlcXVpcmUoXCIuL2xpYi90d2VlblwiKTtcbmNvbnN0IENsb2NrID0gcmVxdWlyZShcIi4vbGliL2Nsb2NrLmpzXCIpO1xuY29uc3QgVGlja2VyID0gcmVxdWlyZShcIi4vbGliL3RpY2tlci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZlY3RvcixcbiAgUGFydGljbGUsXG4gIFV0aWxzLFxuICBTaGFwZXMsXG4gIFlBVCxcbiAgVGlja2VyLFxuICBDbG9jayxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbi8vIEBmbG93XG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIFZlY3RvciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZG9pbmcgdmVjdG9yIG9wZXJhdGlvbnMgYW5kIHN0b3JpbmdcbiAqIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSB2ZWN0b3IuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgVmVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgb2JqZWN0LlxuICovXG5jbGFzcyBWZWN0b3Ige1xuICBzdGF0ZToge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gIH07XG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3RhdGUgSW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhdGU6IE9iamVjdCA9IElOSVRJQUxfU1RBVEUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7SW50fSB4XG4gICAqIEBwYXJhbSAge0ludH0geVxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAgICovXG4gIGNyZWF0ZSh4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKTogVmVjdG9yIHtcbiAgICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gICAgcmV0dXJuIHZlYztcbiAgfTtcblxuICAvKipcbiAgICogU2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7Kn0gcHJvcFxuICAgKiBAcGFyYW0gIHsqfSB2YWxcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAgICovXG4gIHNldChwcm9wOiBzdHJpbmcsIHZhbDogYW55KTogYm9vbGVhbiB7XG4gICAgLy8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcbiAgICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZhbHVlfSAgICAgICAgVGhlIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcC5cbiAgICovXG4gIGdldChwcm9wOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtSYWRpYW5zfSByYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHNldEFuZ2xlKHJhZDogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gICAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgc2V0TGVuZ3RoKGxlbmd0aDogbnVtYmVyKTogVmVjdG9yIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICAgIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAgICovXG4gIGdldExlbmd0aCgpOiBudW1iZXIge1xuICAgIGNvbnN0IHggPSAodGhpcy5nZXQoXCJ4XCIpOiBudW1iZXIpO1xuICAgIGNvbnN0IHkgPSAodGhpcy5nZXQoXCJ5XCIpOiBudW1iZXIpO1xuICAgIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHJldHVybiB7SW50ZWdlcn0gQ29vcmlkaW5hdGVzLlxuICAgKi9cbiAgZ2V0QW5nbGUoKTogbnVtYmVyIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuZ2V0KFwieFwiKTogbnVtYmVyKTtcbiAgICBjb25zdCB5ID0gKHRoaXMuZ2V0KFwieVwiKTogbnVtYmVyKTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbiAgfTtcblxuICAvKipcbiAgICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIC0gQSBtaW4gcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgcmFuZG9tKG1pbjogbnVtYmVyPTEsIG1heDogbnVtYmVyPTEwKTogVmVjdG9yIHtcbiAgICBjb25zdCB4ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gICAgY29uc3QgeSA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJuIGEgdmVjdG9yIHRoYXQgaGFzIGEgeCBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZS5cbiAgICogICAgICAgICAgICAgIGFuZCB5IGdpdmVuIGEgcmFuZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geE1pbiBNaW5tdW0geCB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhNYXggTWF4aW11bSB4IHZhbHVlXG4gICAqIEBwYXJhbSAge051bWJlcn0geU1pbiBNaW5tdW0geSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlNYXggTWF4aW11bSB5IHZhbHVlXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHJhbmRvbUJldHdlZW4oeE1pbjogbnVtYmVyPTAsIHhNYXg6IG51bWJlcj0xMCwgeU1pbjogbnVtYmVyPTAsIHlNYXg6IG51bWJlcj0xMCk6IFZlY3RvciB7XG4gICAgeE1heCA9IE1hdGgubWF4KHhNaW4sIHhNYXgpO1xuICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4TWF4KTtcbiAgICB5TWF4ID0gTWF0aC5tYXgoeU1pbiwgeU1heCk7XG4gICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlNYXgpO1xuXG4gICAgY29uc3QgeSA9ICh1dGlscy5yYW5kb21CZXR3ZWVuKHlNaW4sIHlNYXgpOiBudW1iZXIpO1xuICAgIGNvbnN0IHggPSAodXRpbHMucmFuZG9tQmV0d2Vlbih4TWluLCB4TWF4KTogbnVtYmVyKTtcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogYWRkIC0gU2hvdWxkIGFkZCB2ZWN0b3JzIHRvZ2V0aGVyIGdpdmVuIGEgdmVjdG9yXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IHYyIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICAgKi9cbiAgYWRkKHYyOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG4gICAgICB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogc3VidHJhY3QgLSBzaG91bGQgc3VidHJhY3QgdGhlIGdpdmVuIHZlY3RvciB3aXRoIGl0cyBvd24gdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAgICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gICAqL1xuICBzdWJ0cmFjdCh2MjogVmVjdG9yKTogVmVjdG9yIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgICB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuICAgICAgdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE11bGl0cGx5aW5nIHZlY3RvcnMgdG9nZXRoZXJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gKiB7eDogMiwgeTogMn0gPSB7eDogNCwgeTogNH1cbiAgICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICAgKi9cbiAgbXVsdGlwbHkodjI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXZpZGUgdmVjdG9ycyB0b2dldGhlci5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gICAqL1xuICBkaXZpZGUodjI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHRvIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgYWRkVG8odjI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAgICovXG4gIHN1YnRyYWN0RnJvbSh2MjogVmVjdG9yKTogVmVjdG9yIHtcbiAgICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpO1xuICAgIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gICAqL1xuICBtdWx0aXBseUJ5KHYyOiBWZWN0b3IpOiBWZWN0b3Ige1xuICAgIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gICAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgZGl2aWRlQnkodjI6IFZlY3Rvcik6IFZlY3RvciB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbmdsZSBBIG51bWJlciBvZiByYWRpYW5zIHRvIHJvdGF0ZSBjbG9ja3dpc2UgYnkuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgKi9cbiAgcm90YXRlQnkoYW5nbGU6IG51bWJlcik6IFZlY3RvciB7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIC8vXG4gICAgY29uc3QgeCA9IHRoaXMuc3RhdGUueCAqIGNvcyAtIHRoaXMuc3RhdGUueSAqIHNpbjtcbiAgICBjb25zdCB5ID0gdGhpcy5zdGF0ZS55ICogY29zICsgdGhpcy5zdGF0ZS54ICogc2luO1xuXG4gICAgdGhpcy5zdGF0ZS54ID0geDtcbiAgICB0aGlzLnN0YXRlLnkgPSB5O1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIHYxXG4gICAqIEBwYXJhbSB7VmVjdG9yfSB2MSBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IHYyIFZlY3RvclxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgZGlzdGFuY2VCZXR3ZWVuKHYxOiBWZWN0b3IsIHYyOiBWZWN0b3IpOiBudW1iZXIge1xuICAgIGNvbnN0IGRWZWMgPSB2MS5zdWJ0cmFjdCh2Mik7XG4gICAgcmV0dXJuIE1hdGguaHlwb3QoZFZlYy5nZXQoXCJ4XCIpLCBkVmVjLmdldChcInlcIikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d29zIHZlY3RvcnMgc2VlIGlmIHRoZXkgaW50ZXJzZWN0LlxuICAgKiBAbWVtYmVyT2YgVXRpbHNcbiAgICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgc3RhdGljIHZlY3RvckludGVyc2VjdCh2ZWMwOiBWZWN0b3IsIHZlYzE6IFZlY3Rvcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHgwID0gdmVjMC5nZXQoXCJ4XCIpO1xuICAgIGNvbnN0IHkwID0gdmVjMC5nZXQoXCJ5XCIpO1xuICAgIGNvbnN0IHgxID0gdmVjMS5nZXQoXCJ4XCIpO1xuICAgIGNvbnN0IHkxID0gdmVjMS5nZXQoXCJ5XCIpO1xuICAgIHJldHVybiB1dGlscy5yYW5nZUludGVyc2VjdCh4MCwgeTAsIHgxLCB5MSk7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZlY3RvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdmVjdG9ycy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vLyBAZmxvd1xuXG5pbXBvcnQgdHlwZSBWZWN0b3IgZnJvbSBcIi4vdmVjdG9ycy5qc1wiO1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGNvbXBvc2VkIG9mIHNtYWxsIGZ1bmN0aW9uIHRoYXRcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gbmVlZGVkLiBNb3N0IGZ1bmN0aW9ucyBhcmUgcHVyZVxuICogYW5kIG9ubHkgcmV0dXJuIHZhbHVlcy4gRm9yIG1vcmUgaW5mbyByZWFkIHRoZSBkb2NzLlxuICovXG5cbi8qKlxuICogQGNsYXNzIFV0aWxzXG4gKiBAcmV0dXJuIHtVdGlsc31cbiAqL1xuY29uc3QgVXRpbHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50fSB2YWwgLSBUaGUgdmFsdWUgdGhhdCBsaWVzIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWluIC0gVGhlIG1heGl1bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEByZXR1cm4ge0ludH0gSW50IC0gVGhlIHZhbHVlIHJlcHJlc2VudGVkIGluIHRoYXQgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWw6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuICgodmFsIC0gbWluKSAvIChtYXggLSBtaW4pOiBudW1iZXIpO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cbmZ1bmN0aW9uIGxlcnAodmFsOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG1hcCh2YWx1ZTogbnVtYmVyLCBzcmNNaW46IG51bWJlciwgc3JjTWF4OiBudW1iZXIsIGRlc3RNaW46IG51bWJlciwgZGVzdE1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3JjTWF4ID0gKE1hdGgubWF4KHNyY01heCwgc3JjTWluKTogbnVtYmVyKTtcbiAgc3JjTWluID0gKE1hdGgubWluKHNyY01heCwgc3JjTWluKTogbnVtYmVyKTtcbiAgZGVzdE1pbiA9IChNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KTogbnVtYmVyKTtcbiAgZGVzdE1heCA9IChNYXRoLm1heChkZXN0TWluLCBkZXN0TWF4KTogbnVtYmVyKTtcbiAgcmV0dXJuIGxlcnAobm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHBlcmNlbnQodmFsOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gKCh2YWwgKiAxMDApOiBudW1iZXIpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBudW1iZXIgYW5kIGEgcmFuZ2UgcmV0dXJuIHRoZVxuICogICAgICAgICAgICAgIHZhbHVlIGJldHdlZW4gdGhhdCByYW5nZSBvciB0aGUgbWF4IG51bWJlciBvciBtaW4gbnVtYmVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihtaW4sIG1heCkpLCBNYXRoLm1heChtaW4sIG1heCkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIG51bWJlcnMgcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB5XG4gKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICovXG5mdW5jdGlvbiByYW5kb21CZXR3ZWVuKHg6IG51bWJlciwgeTogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoeCwgeSk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VYWSh4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgZHggPSB4MCAtIHgxO1xuICBjb25zdCBkeSA9IHkwIC0geTE7XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gdmVjdG9ycyByZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3by5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSB2MVxuICogQHBhcmFtICB7VmVjdG9yfSB2MlxuICogQHJldHVybiB7TnVtYmVyfVxuICovXG5mdW5jdGlvbiBkaXN0YW5jZVZlYyh2MTogVmVjdG9yLCB2MjogVmVjdG9yKTogbnVtYmVyIHtcbiAgY29uc3QgZFZlYyA9IHYxLnN1YnRyYWN0KHYyKTtcbiAgcmV0dXJuIE1hdGguaHlwb3QoZFZlYy5nZXQoXCJ4XCIpLCBkVmVjLmdldChcInlcIikpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2l2ZW4gYSBudW1iZXJcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge051bWJlcn0gbWluXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaW5SYW5nZSh2YWw6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogYm9vbGVhbiB7XG4gIHJldHVybiAodmFsIDw9IE1hdGgubWF4KG1heCwgbWluKSkgJiYgKE1hdGgubWluKG1heCwgbWluKSA8PSB2YWwpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSB0d28gcmFuZ2VzIHNlZSBpZiBib3RoIGludGVyc2VjdCBlYWNoIG90aGVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjBcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW4xXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1heDFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHJhbmdlSW50ZXJzZWN0KG1pbjA6IG51bWJlciwgbWF4MDogbnVtYmVyLCBtaW4xOiBudW1iZXIsIG1heDE6IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIE1hdGgubWF4KG1heDAsIG1pbjApID49IE1hdGgubWluKG1pbjEsIG1heDEpICYmXG4gICAgTWF0aC5taW4obWluMCwgbWF4MCkgPD0gTWF0aC5tYXgobWF4MSwgbWluMSlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byByZWN0YW5nZSBzZWUgaWYgdGhlIGludGVyc2VjdC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IHIwXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvblJlY3QocjA6IGFueSwgcjE6IGFueSkge1xuICBjb25zdCByMHggPSByMC5zdGF0ZS54O1xuICBjb25zdCByMHkgPSByMC5zdGF0ZS55O1xuICBjb25zdCByMXggPSByMS5zdGF0ZS54O1xuICBjb25zdCByMXkgPSByMS5zdGF0ZS55O1xuXG4gIGNvbnN0IHIwdyA9IHIweCArIHIwLnN0YXRlLndpZHRoO1xuICBjb25zdCByMGggPSByMHkgKyByMC5zdGF0ZS5oZWlnaHQ7XG4gIGNvbnN0IHIxdyA9IHIxeCArIHIxLnN0YXRlLndpZHRoO1xuICBjb25zdCByMWggPSByMXkgKyByMS5zdGF0ZS5oZWlnaHQ7XG5cbiAgcmV0dXJuIChcbiAgICByYW5nZUludGVyc2VjdChyMHgsIHIwdywgcjF4LCByMXcpICYmXG4gICAgcmFuZ2VJbnRlcnNlY3QocjB5LCByMGgsIHIxeSwgcjFoKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdG8gcGFydGljbGUgd2l0aCByYWRpIHJldHVybiB3ZXRoZXIgdGhleSBjb2xsaWRlIGFyZSBub3RcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7UGFydGljbGV9IGMxXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvbkNpcmNsZShjMTogYW55LCBjMjogYW55KTogYm9vbGVhbiB7XG4gIGNvbnN0IHJhZGkgPSAoYzEuc3RhdGUucmFkaXVzICsgYzIuc3RhdGUucmFkaXVzKTtcbiAgY29uc3QgZGlzdGFuY2UgPSBkaXN0YW5jZVhZKGMxLnN0YXRlLngsIGMxLnN0YXRlLnksIGMyLnN0YXRlLngsIGMyLnN0YXRlLnkpO1xuXG4gIGlmIChkaXN0YW5jZSkge1xuICAgIHJldHVybiByYWRpID4gZGlzdGFuY2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgcG9pbnQgYW5kIGEgY2lyY2xlIHJldHVybiBhIGJvb2xlYW4gcmVnYXJkaW5nIHdldGhlciB0aGV5IGFyZSBjb2xsaWRpbmcuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uQ2lyY2xlUG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNpcmNsZTogYW55KSB7XG4gIC8vIFRPRE8gV3JpdGUgdGVzdHMuXG4gIGNvbnN0IGRpc3QgPSBkaXN0YW5jZVhZKFxuICAgIHgsXG4gICAgeSxcbiAgICBjaXJjbGUuc3RhdGUueCxcbiAgICBjaXJjbGUuc3RhdGUueVxuICApO1xuXG4gIHJldHVybiBjaXJjbGUuc3RhdGUucmFkaXVzID4gZGlzdDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBhIGNvbGxpc2lvbiBiZXR3ZWVuIGNpcmNsZXMgYSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gICB2ZWNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjaXJjbGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvbkNpcmNsZVZlYyh2ZWM6IFZlY3RvciwgY2lyY2xlOiBhbnkpIHtcbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0YW5jZVhZKFxuICAgIHZlYy5nZXQoXCJ4XCIpLFxuICAgIHZlYy5nZXQoXCJ5XCIpLFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBkZXRlY3QgY29sbGlzaW9uIG9mIGEgcmVjdGFuZ2xlIGFuZCBhIHBvaW50LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeFxuICogQHBhcmFtICB7TnVtYmVyfSAgIHlcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByZWN0XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25SZWN0UG9pbnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJlY3Q6IGFueSkge1xuICBjb25zdCByZWN0WCA9IHJlY3Quc3RhdGUueDtcbiAgY29uc3QgcmVjdFkgPSByZWN0LnN0YXRlLnk7XG4gIHJldHVybiAoXG4gICAgaW5SYW5nZSh4LCByZWN0WCwgcmVjdFggKyByZWN0LnN0YXRlLndpZHRoKSAmJlxuICAgIGluUmFuZ2UoeSwgcmVjdFksIHJlY3RZICsgcmVjdC5zdGF0ZS5oZWlnaHQpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHZlY3RvciBhbmQgYSByZXRhbmdsZSBjaGVjayB3ZXRoZXIgdGhleSBjb2xsaWRlZC5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvblJlY3RWZWModmVjOiBWZWN0b3IsIHJlY3Q6IGFueSkge1xuICByZXR1cm4gY29sbGlzaW9uUmVjdFBvaW50KHZlYy5nZXQoXCJ4XCIpLCB2ZWMuZ2V0KFwieVwiKSwgcmVjdCk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJ1biBhIGZ1bmN0aW9uIG9ubHkgaWYgdGhlIGdpdmVuIHRpbWUgdG8gYWxsb3cgdGhlIGZ1bmN0aW9uIGV4ZWN1dGVcbiAqIGhhcyBwYXNzZWQuIElmXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZnVuYyBBIGZ1bmN0aW9uIHRvIGNhbGwgZXZlcnkgZGVsdGEuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHdhaXQgVGhlIG1pbmltdW0gdGltZSB0byB3YWl0LlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgdW5kZXJzY29yZVxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jOiBGdW5jdGlvbiwgd2FpdDogbnVtYmVyLCBvcHRpb25zOiBhbnkpIHtcbiAgbGV0IGNvbnRleHQ7XG4gIGxldCBhcmdzOiBhbnk7XG4gIGxldCByZXN1bHQ7XG4gIGxldCB0aW1lb3V0ID0gbnVsbDtcbiAgbGV0IHByZXZpb3VzID0gMDtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcHJldmlvdXMgPSBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlID8gMCA6IERhdGUubm93KCk7XG4gICAgdGltZW91dCA9IG51bGw7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICBpZiAoIXRpbWVvdXQpIGNvbnRleHQgPSBhcmdzID0gbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3M6IGFueSkge1xuICAgIGxldCBub3cgPSBEYXRlLm5vdygpO1xuICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkgcHJldmlvdXMgPSBub3c7XG4gICAgbGV0IHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSAoYXJnczogYW55KTtcbiAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHByZXZpb3VzID0gbm93O1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIXRpbWVvdXQgJiYgb3B0aW9ucy50cmFpbGluZyAhPT0gZmFsc2UpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCByZW1haW5pbmcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGxlbmd0aCBvZiBhIHZlY3Rvci5cbiAqIEBwYXJhbSAgIHtudW1iZXJ9IGxlbmd0aFxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBDb29yZGluYXRlc1xuICovXG5mdW5jdGlvbiBzZXRMZW5ndGgobGVuZ3RoOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyKTogQXJyYXk8bnVtYmVyPiB7XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIHkgIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiBsZW5ndGggIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcbiAgeCA9IE1hdGguY29zKGFuZ2xlKSAqIGxlbmd0aDtcbiAgeSA9IE1hdGguc2luKGFuZ2xlKSAqIGxlbmd0aDtcblxuICByZXR1cm4gW3gsIHldO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiAtIFNldHRpbmcgdGhlIGFuZ2xlIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gYW5nbGVcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAgIHtudW1iZXJ9IHlcbiAqIEByZXR1cm4gIHtudW1iZXJbXX0gY29vcmRpbmF0ZXNcbiAqL1xuZnVuY3Rpb24gc2V0QW5nbGUoYW5nbGU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBcnJheTxudW1iZXI+IHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGFuZ2xlICE9PSBcIm51bWJlclwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgeCBhbmQgeSB2YWx1ZXNcIik7XG4gIH1cblxuICBjb25zdCBsZW5ndGggPSBNYXRoLmh5cG90KHgsIHkpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIENvdmVydHMgZGVncmVlcyB0byByYWRpYW5zXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRlZyBEZWdyZXNzXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGRlZ1RvUmFkKGRlZzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGRlZyAvIDE4MCAqIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIENvdmVydHMgcmFkaWFucyB0byBkZWdyZXNzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHJhZFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiByYWRUb0RlZyhyYWQ6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiByYWQgKiAxODAgLyBNYXRoLlBJO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBkZXNjcmlwdGlvbiBSb3VuZCB0byBuZWFyZXN0IHBsYWNlIGdpdmVuLlxuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gcGxhY2VzIEFuIGV4cG9uZW50XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJvdW5kVG9QbGFjZXModmFsOiBudW1iZXIsIHBsYWNlczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgbXVsdCA9IE1hdGgucG93KDEwLCBwbGFjZXMpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWwgKiBtdWx0KSAvIG11bHQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2YWxcbiAqIEBwYXJhbSAge251bWJlcn0gbmVhcmVzdFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiByb3VuZFRvTXVsdGlwbGUodmFsOiBudW1iZXIsIG5lYXJlc3Q6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICghbmVhcmVzdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vdGhpbmcgY2FuIGJlIGEgbXVsdGlwbGUgb2YgXCIgKyBTdHJpbmcobmVhcmVzdCkpO1xuICB9XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAvIG5lYXJlc3QpICogbmVhcmVzdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHF1YWRyYXRpY0Jlemllcih2MDogbnVtYmVyLCB2MTogbnVtYmVyLCB2MjogbnVtYmVyLCB0OiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3coMSAtIHQsIDIpICogdjAgKyAoMSAtIHQpICogMiAqIHQgKiB2MSArIHQgKiB0ICogdjI7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSB2MFxuICogQHBhcmFtICB7bnVtYmVyfSB2MVxuICogQHBhcmFtICB7bnVtYmVyfSB2MlxuICogQHBhcmFtICB7bnVtYmVyfSB2M1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtudW1iZXJ9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjdWJpY0Jlemllcih2MCA6IG51bWJlciwgdjEgOiBudW1iZXIsIHYyIDogbnVtYmVyLCB2MyA6IG51bWJlciwgdCA6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMykgKiB2MCArXG4gICAgICAgICBNYXRoLnBvdygxIC0gdCwgMikgKiAzICogdCAqIHYxICtcbiAgICAgICAgICgxIC0gdCkgKiAzICogdCAqIHQgKiB2MiArXG4gICAgICAgICB0ICogdCAqIHQgKyB2Mztcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHAyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge09iamVjdH0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHF1YWRyYXRpY0JlemllclBvaW50KHAwOiBhbnksIHAxOiBhbnksIHAyOiBhbnksIHQ6IG51bWJlcikge1xuICBjb25zdCB4ID0gcXVhZHJhdGljQmV6aWVyKHAwLngsIHAxLngsIHAyLngsIHQpO1xuICBjb25zdCB5ID0gcXVhZHJhdGljQmV6aWVyKHAwLnksIHAxLnksIHAyLnksIHQpO1xuICByZXR1cm4ge3gsIHl9O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gcDNcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gY3ViaWNCZXppZXJQb2ludChwMDogYW55LCBwMTogYW55LCBwMjogYW55LCBwMzogYW55LCB0OiBudW1iZXIpIHtcbiAgY29uc3QgeCA9IGN1YmljQmV6aWVyKHAwLngsIHAxLngsIHAyLngsIHQpO1xuICBjb25zdCB5ID0gY3ViaWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgdCk7XG4gIHJldHVybiB7eCwgeX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIEdpdmVuIHBvaW50cyBvbiB0aGUgcGxhbmUgZHJhdyBhIGN1cnZlZCBsaW5lIGJldHdlZW5cbiAqIGFsbCBvZiB0aGVtLlxuICogQHBhcmFtICB7e251bWJlciwgbnVtYmVyfX0gcG9pbnRzXG4gKiBAcGFyYW0gIHtDYW52YXNSZW5kZXJpbmdDb250ZXh0MkR9IGN0eFxuICovXG5mdW5jdGlvbiBtdWx0aUN1cnZlKHBvaW50czogQXJyYXk8YW55PiwgY3R4KSB7XG4gIGxldCBwMDtcbiAgbGV0IHAxO1xuICBsZXQgbWlkWDtcbiAgbGV0IG1pZFk7XG5cbiAgY3R4Lm1vdmVUbyhwb2ludHNbMF0ueCwgcG9pbnRzWzBdLnkpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDI7IGkrKykge1xuICAgIHAwID0gcG9pbnRzW2ldO1xuICAgIHAxID0gcG9pbnRzW2kgKyAxXTtcbiAgICBtaWRYID0gKHAwLnggKyBwMS54KS8yO1xuICAgIG1pZFkgPSAocDAueSArIHAxLnkpLzI7XG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgbWlkWCwgbWlkWSk7XG4gIH1cblxuICBwMCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMl07XG4gIHAxID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8ocDAueCwgcDAueSwgcDEueCwgcDEueSk7XG59O1xuXG4vKipcbiAqIGVhc2VcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7RmxvYXR9IGVhc2UgW2Rlc2NyaXB0aW9uXVxuICogQHBhcmFtICB7SW50fSBhICAgIFtkZXNjcmlwdGlvbl1cbiAqIEBwYXJhbSAge0ludH0gYiAgICBbZGVzY3JpcHRpb25dXG4gKiBAcmV0dXJuIHtJbnR9ICAgICAgW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiBlYXNlKGVhc2U6IG51bWJlciwgYTogbnVtYmVyLCBiOiBudW1iZXIpOiBib29sZWFuIHwgbnVtYmVyIHtcbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGIgLSBhKSA8IDAuMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoYiAtIGEpICogZWFzZTtcbn07XG5cbi8qKlxuICogZWFzZVRvXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGVhc2U6ICAgICAgbnVtYmVyICAgICAgICBFYXNlIGZhY3Rvci5cbiAqIEBwYXJhbSAge09iamVjdH0gb3JpZ2luOiAgICBPYmplY3QgICAgICAgIFRoZSBzdGFydGluZyBwb2ludC5cbiAqIEBwYXJhbSAge09iamVjdH0gdGFyZ2V0OiAgICBPYmplY3QgICAgICAgIFRoZSBlbmRpbmcgcG9pbnQuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHRocmVzaG9sZDogbnVtYmVyICAgICAgICBFYXNpbmcgdGhyZXNob2xkLlxuICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cbiAqL1xuZnVuY3Rpb24gZWFzZVRvKGVhc2U6IG51bWJlciwgb3JpZ2luOiBPYmplY3QsIHRhcmdldDogT2JqZWN0LCB0aHJlc2hvbGQ6IG51bWJlcj0wLjEpIHtcbiAgY29uc3QgZHggPSB0YXJnZXQueCAtIG9yaWdpbi54O1xuICBjb25zdCBkeSA9IHRhcmdldC55IC0gb3JpZ2luLnk7XG5cbiAgLy8gdGhlIGRlbHRhIGNhbiBnZXQgZXh0cmVtZWx5IHNtYWxsIGFuZCBpdHMgbm90IHBlcmZvcm1hbnQgdG8ga2VlcFxuICAvLyBvbiByZW5kZXJpbmcgb3IgY2FsY3VsYXRpbmcgZm9yIGFuaW1hdGlvbiBwdXJwb3Nlcy5cbiAgaWYgKE1hdGguYWJzKGR4KSA8IHRocmVzaG9sZCAmJiBNYXRoLmFicyhkeSkgPCB0aHJlc2hvbGQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBvcmlnaW4ueCArPSBkeCAqIGVhc2U7XG4gIG9yaWdpbi55ICs9IGR5ICogZWFzZTtcblxuICByZXR1cm4gb3JpZ2luO1xufTtcblxuLyoqXG4gKiBpc1BsYWluT2JqZWN0XG4gKiBAcGFyYW0gIHsqfSAgZGF0YVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAoe30pLnRvU3RyaW5nLmNhbGwoZGF0YSkgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59O1xuXG4vKipcbiAqIHVuaXF1ZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBubyBkdXBsaWNhdGUgdmFsdWVzXG4gKiBAcGFyYW0gIHtBcnJheX0gYXJyYXlcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5mdW5jdGlvbiB1bmlxdWUoYXJyYXkpIHtcbiAgcmV0dXJuIGFycmF5LnJlZHVjZSgoeCwgeSkgPT4ge1xuICAgIGlmICh4LmluZGV4T2YoeSkgPT09IC0xKSB4LnB1c2goeSk7XG4gICAgcmV0dXJuIHg7XG4gIH0sIFtdKTtcbn07XG5cbmZ1bmN0aW9uIGNvbG9ySW50ZXJwb2xhdGlvbihmbG9hdDogbnVtYmVyLCBjb2xvckZyb206IENvbG9yLCBjb2xvclRvOiBDb2xvcikgOiBDb2xvciB7XG4gIGNvbnN0IHtyMSwgZzEsIGIxfSA9IGNvbG9yRnJvbTtcbiAgY29uc3Qge3IyLCBnMiwgYjJ9ID0gY29sb3JUbztcblxuICBjb25zdCByID0gcjEgKyAocjIgLSByMSkgLyBmbG9hdDtcbiAgY29uc3QgZyA9IGcxICsgKGcyIC0gZzEpIC8gZmxvYXQ7XG4gIGNvbnN0IGIgPSBiMSArIChiMiAtIGIxKSAvIGZsb2F0O1xuXG4gIHJldHVybiBcInNvbWVIZXhcIjtcbn07XG5cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZvY2FsTGVuZ3RoLCBkaXN0YW5jZSkge1xuICByZXR1cm4gZm9jYWxMZW5ndGggLyAoZm9jYWxMZW5ndGggLSBkaXN0YW5jZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbm9ybWFsaXplLFxuICBsZXJwLFxuICBtYXAsXG4gIHBlcmNlbnQsXG4gIGNsYW1wLFxuICByYW5kb21CZXR3ZWVuLFxuICBkaXN0YW5jZVhZLFxuICBkaXN0YW5jZVZlYyxcbiAgaW5SYW5nZSxcbiAgcmFuZ2VJbnRlcnNlY3QsXG4gIGNvbGxpc2lvblJlY3QsXG4gIGNvbGxpc2lvbkNpcmNsZSxcbiAgY29sbGlzaW9uQ2lyY2xlUG9pbnQsXG4gIGNvbGxpc2lvbkNpcmNsZVZlYyxcbiAgY29sbGlzaW9uUmVjdFBvaW50LFxuICBjb2xsaXNpb25SZWN0VmVjLFxuICB0aHJvdHRsZSxcbiAgc2V0TGVuZ3RoLFxuICBzZXRBbmdsZSxcbiAgZGVnVG9SYWQsXG4gIHJhZFRvRGVnLFxuICByb3VuZFRvUGxhY2VzLFxuICByb3VuZFRvTXVsdGlwbGUsXG4gIHF1YWRyYXRpY0JlemllcixcbiAgY3ViaWNCZXppZXIsXG4gIHF1YWRyYXRpY0JlemllclBvaW50LFxuICBjdWJpY0JlemllclBvaW50LFxuICBtdWx0aUN1cnZlLFxuICBwZXJzcGVjdGl2ZSxcbiAgcm90YXRlLFxuICBlYXNlLFxuICBlYXNlVG8sXG4gIGlzT2JqZWN0LFxuICB1bmlxdWUsXG59O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUoVXRpbHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi91dGlscy5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG4vKlxuKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4qIGFuZCBmZWVsIGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4qL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcbi8qIFRoZSBkZWZhdWx0IHN0YXRlIGEgcGFydGljbGUgc3RhcnRzIHdpdGggSXQgc2hvdWxkIG5vdCBtb3ZlLiAqL1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG59O1xuXG4vKipcbiAqIEBjbGFzcyBQYXJ0aWNsZVxuICogQHBhcmFtIHtzdGF0ZX0gc3RhdGUgaW5pdGlhbCBzdGF0ZSB0byBwYXNzIHRoZSBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQYXJ0aWNsZShzdGF0ZT1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICB0aGlzLnN0YXRlID0gc3RhdGU7IFxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBDcmVhdGUgYSBwYXJ0aWNsZSBnaXZlbiBhIGRpcmVjdGlvbiBhbmQgbWFnbml0dWRlLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgb3B0cyBvcHRpb25hbCBzdGF0ZSB2YWx1ZXMgdG8gcGFzcyB0byBjcmVhdGUuXG4gKiBAcmV0dXJucyB7UGFydGljbGV9IHJldHVybnMgYSBwYXJ0aWNsZVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSkge1xuICAvLyBFeHRlbmQgdGhlIG9wdGlvbmFsIHN0YXRlIG9uIHRvIHRoZSBkZWZhdWx0IHN0YXRlLlxuICBvcHRzID0gZXh0ZW5kKHRydWUsIGNsb25lKElOSVRJQUxfU1RBVEUpLCBvcHRzKTtcblxuICAvLyBDcmVhdGUgcGFydGljbGUgd2l0aCB0aGUgbmV3IG9wdGlvbnMuXG4gIGNvbnN0IHBhcnRpY2xlID0gbmV3IFBhcnRpY2xlKG9wdHMpO1xuXG4gIC8vIFNldCBsZW5ndGguXG4gIHBhcnRpY2xlLnNldFNwZWVkKG9wdHMubWFnbml0dWRlKTtcblxuICAvLyBTZXQgYW5nbGUuXG4gIHBhcnRpY2xlLnNldEhlYWRpbmcob3B0cy5kaXJlY3Rpb24pO1xuXG4gIC8vIFJldHVybiBuZXcgcGFydGljbGUuXG4gIHJldHVybiBwYXJ0aWNsZTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEEgY2hhbmdlIGluIHZlbG9jaXR5LlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gYXhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IGF5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBBY2NlbGVyYXRpb24gdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuYWNjZWxlcmF0ZSA9IGZ1bmN0aW9uIGFjY2VsZXJhdGUoYXg9dGhpcy5zdGF0ZS52eCwgYXk9dGhpcy5zdGF0ZS52eSkge1xuICB0aGlzLnN0YXRlLnZ4ICs9IGF4O1xuICB0aGlzLnN0YXRlLnZ5ICs9IGF5O1xuICByZXR1cm4ge2F4LCBheX07XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBIHVwZGF0ZSBhIHBvc2l0aW9uIG9mIGEgcGFydGljbGVcbiAqIGJhc2VkIG9uIGl0cyBncmF2aXR5IGFuZCBmcmljaXRpb24uIEdyYXZpdHkgaXMgdXN1YWxseSBhIGFjY2VsZXJhdGlvblxuICogdmVjdG9yLlxuICpcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtICB7SW50ZWdlcn0gZnJpYyBGcmljaXRpb24gdG8gYXBwbHkuXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSBncmF2IEdyYXZpdHkgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZS5cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZShmcmljPXRoaXMuc3RhdGUuZnJpY3Rpb24sIGdyYXY9dGhpcy5zdGF0ZS5ncmF2aXR5KSB7XG4gIC8vIEFwcGx5IHNwcmluZ3NcbiAgdGhpcy5oYW5kbGVTcHJpbmdzKCk7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0YXRpb25zXG4gIHRoaXMuaGFuZGxlTWFzc2VzKCk7XG5cbiAgLy8gQXBwbHkgZmFrZSBmcmljaXRpb24gdG8gdmVsb2NpdHlcbiAgdGhpcy5zdGF0ZS52eCAqPSBmcmljO1xuICB0aGlzLnN0YXRlLnZ5ICo9IGZyaWM7XG5cbiAgLy8gQXBwbHkgZ3Jhdml0eSB0byB2ZWxvY2l0eVxuICB0aGlzLmFjY2VsZXJhdGUoMCwgZ3Jhdik7XG5cbiAgLy8gVXBkYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFjY2VsZXJhdGlvblxuICByZXR1cm4gdGhpcy51cGRhdGVQb3MoKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgZm9yY2VcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zZXRTcGVlZCA9IGZ1bmN0aW9uIHNldFNwZWVkKHNwZWVkKSB7XG4gIGNvbnN0IGFuZ2xlID0gdGhpcy5nZXRIZWFkaW5nKCk7XG4gIHRoaXMuc3RhdGUudnggPSBNYXRoLmNvcyhhbmdsZSkgKiBzcGVlZDtcbiAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBzZXRzIHRoZSBpbnRlcm5hbCBzcGVlZCBvZiB0aGUgcGFydGljbGUgZ2l2ZW4gdGhlIGFuZ2xlXG4gKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNldEhlYWRpbmcgPSBmdW5jdGlvbiBzZXRIZWFkaW5nKGFuZ2xlKSB7XG4gIGNvbnN0IHNwZWVkID0gdGhpcy5nZXRTcGVlZCgpO1xuICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gIHRoaXMuc3RhdGUudnkgPSBNYXRoLnNpbihhbmdsZSkgKiBzcGVlZDtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGdldCB0aGUgbGVuZ3RoIG9mIHRoZSB2ZWxvY2l0eSB2ZWN0b3IuXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge251bWJlcn0geFxuICogQHBhcmFtICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJucyB7bnVtYmVyfSBmb3JjZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5nZXRTcGVlZCA9IGZ1bmN0aW9uIGdldFNwZWVkKHg9dGhpcy5zdGF0ZS52eCwgeT10aGlzLnN0YXRlLnZ5KSB7XG4gIHJldHVybiBNYXRoLmh5cG90KHRoaXMuc3RhdGUudngsIHRoaXMuc3RhdGUudnkpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBhbmdsZSBvZiB0aGUgdmVsb2NpdHkgdmVjdG9yLlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHhcbiAqIEBwYXJhbSAge251bWJlcn0geVxuICogQHJldHVybnMge251bWJlcn0gYW5nbGUgb2YgdmVsb2NpdHkgdmVjdG9yLlxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2V0SGVhZGluZyA9IGZ1bmN0aW9uIGdldEhlYWRpbmcoeD10aGlzLnN0YXRlLnZ4LCB5PXRoaXMuc3RhdGUudnkpIHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBhZGQgc3ByaW5nIHRvIHNwcmluZ3MgYXJyYXlcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQHBhcmFtIHtPYmplY3R9IHNwcmluZyBBIHNwcmluZyBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hZGRTcHJpbmcgPSBmdW5jdGlvbiBhZGRTcHJpbmcoc3ByaW5nKSB7XG4gIHRoaXMucmVtb3ZlU3ByaW5nKHNwcmluZyk7XG4gIHRoaXMuc3RhdGUuc3ByaW5ncy5wdXNoKHNwcmluZyk7XG4gIHJldHVybiBzcHJpbmc7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiByZW1vdmUgYSBzcGVjaWZpYyBzdHJpbmcgZnJvbSB0aGUgc3ByaW5ncyBhcnJheVxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtPYmplY3R9IHNwcmluZ1xuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUucmVtb3ZlU3ByaW5nID0gZnVuY3Rpb24gcmVtb3ZlU3ByaW5nKHtwb2ludDoge3N0YXRlOiBwfX0pIHtcbiAgY29uc3Qgc3ByaW5ncyA9IHRoaXMuc3RhdGUuc3ByaW5ncztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocC54ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnggJiZcbiAgICAgICAgcC55ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnkpIHtcbiAgICAgIHNwcmluZ3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBc3VtbWluZyB3ZSBrbm93IHdoZXJlXG4gKiB0aGUgb3RoZXIgcGFydGljbGUgaXMgb24gdGhlIGNhbnZhcy4gV2UgY2FuIHVzZVxuICogdGhlIGFuZ2xlIGZvcm11bGFlIHRvIGZpZ3VyZSBvdXQgdGhlIGFuZ2xlXG4gKiBiZXR3ZWVuIHR3byBwYXJ0aWNsZS4gVXNpbmcgYXJjdGFuZ2VudCBpcyBmaW5lLlxuICogYnV0IGJlY2F1c2UgdGhlIGNvcnJkaW5hdGUgcGxhbmUgaXMgZmlscGVkIG9uIHRoZVxuICogWSBheGlzIHdlIHVzZSBhdGFuMiB0byBnZXQgdGhlIHJpZ2h0IHZhbHVlcy4gRXhwbGFpbmVkXG4gKiBpbiBBUEkgRG9jcy5cbiAqIFxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcDIgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlLlxuICogQHJldHVybnMge0ludGVnZXJ9ICBBbmdsZSAgIEEgYW5nbGUuXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hbmdsZVRvID0gZnVuY3Rpb24gYW5nZWxUbyh7c3RhdGU6IHt4OiB4LCB5OiB5fX0pIHtcbiAgY29uc3Qge3g6IGR4LCB5OiBkeX0gPSB7eDogeCAtIHRoaXMuc3RhdGUueCwgeTogeSAtIHRoaXMuc3RhdGUueX07XG4gIHJldHVybiBNYXRoLmF0YW4yKGR5LCBkeCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBBc3N1bWluZyB3ZSBrbm93IHdoZXJlIGJvdGggcGFydGljbGUgYXJlIG9uIHRoZSBjYW52YXMuXG4gKiB3ZSBjYW4gdXNlIHRoZSBkaXN0YW5jZSBmb3JtdWFsZSB0byBmaWd1cmUgb3V0IHRoZSBkaXN0YW5jZVxuICogYmV0d2VlbiB0aGUgdHdvIHBhcnRpY2xlcy5cbiAqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwMiAgICAgIEEgcGFydGljbGUgaW5zdGFuY2VcbiAqIEByZXR1cm5zIHtJbnRlZ2VyfSAgQW5nbGUgICBBIERpc3RhbmNlXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5kaXN0YW5jZVRvID0gZnVuY3Rpb24gZGlzdGFuY2VUbyh7c3RhdGU6IHt4OiB4LCB5OiB5fX0pIHtcbiAgY29uc3Qge3g6IGR4LCB5OiBkeX0gPSB7eDogeCAtIHRoaXMuc3RhdGUueCwgeTogeSAtIHRoaXMuc3RhdGUueX07XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIEFwcGVuZCBhIHBhcnRpY2xlIHRvIHRoZSBtYXNzZXMgYXJyYXkuXG4gKiBAcGFyYW0ge1BhcnRpY2xlfSBtYXNzXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5hZGRNYXNzID0gZnVuY3Rpb24obWFzcykge1xuICB0aGlzLnJlbW92ZU1hc3MobWFzcyk7XG4gIHRoaXMuc3RhdGUubWFzc2VzLnB1c2gobWFzcyk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGRlc2NyaXB0aW9uIFJlbW92ZSBhIHBhcnRpY2xlIGZvciB0aGUgbWFzc2VzIGFycmF5LlxuICogQHBhcmFtICB7UGFydGljbGV9IG1hc3NcbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnJlbW92ZU1hc3MgPSBmdW5jdGlvbih7c3RhdGU6IG1hc3N9KSB7XG4gIGNvbnN0IG1hc3NlcyA9IHRoaXMuc3RhdGUubWFzc2VzO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG1hc3MueCA9PT0gbWFzc2VzW2ldLnN0YXRlLnggJiZcbiAgICAgICAgbWFzcy55ID09PSBtYXNzZXNbaV0uc3RhdGUueSkge1xuICAgICAgbWFzc2VzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgUGFydGljbGVcbiAqIEBkZXNjcmlwdGlvbiBBcHBseXMgZ3Jhdml0YXRpb24gdG8gdGhlIGlucHV0IHBhcnRpY2xlLlxuICogQHBhcmFtICB7UGFydGljbGV9IHAyXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ3Jhdml0YXRlVG8gPSBmdW5jdGlvbihwMikge1xuICBjb25zdCBkeCA9IHAyLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gIGNvbnN0IGR5ID0gcDIuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcblxuICAvLyBEaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzXG4gIGNvbnN0IGRpc3RTUSA9IGR4ICogZHggKyBkeSAqIGR5O1xuICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRpc3RTUSk7XG5cbiAgLy8gTWFnbml0dWRlIG9mIHRoZSB2ZWN0b3IgW0YgPSBHKG0xKShtMikvcl4yXVxuICBjb25zdCBmb3JjZSA9IHAyLnN0YXRlLm1hc3MgLyBkaXN0U1E7XG5cbiAgLy8gU2V0dGluZyB1cCBhbmdsZXMgb2YgdGhlIHZlY3RvclxuICBjb25zdCBzaW4gPSBkeSAvIGRpc3Q7XG4gIGNvbnN0IGNvcyA9IGR4IC8gZGlzdDtcblxuICAvLyBTZXR0aW5nIHZldG9yIGFuZ2xlXG4gIGNvbnN0IGF4ID0gY29zICogZm9yY2U7XG4gIGNvbnN0IGF5ID0gc2luICogZm9yY2U7XG5cbiAgcmV0dXJuIHRoaXMuYWNjZWxlcmF0ZShheCwgYXkpO1xufTtcblxuLy8gVGhpcyBnZW5lcmF0b3JyIGZ1bmN0aW9uIGlzIHByZXR0eSBncm9zcyBNaWxlcyBmaXggdGhpcyB5b3UgbGF6eSBwaWxlIG9mIGRldmVsb3Blci5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgYSBidW5jaCBvZiBwYXJ0aWNsZXMuXG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgICAgICAgICAgICAgICAgICAgbnVtICAgICAgIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBnZW5lcmF0ZWQgcGFydGljbGVzIG5lZWRlZC5cbiAqIEBwYXJhbSAge09iamVjdH0gICAgICAgICAgICAgICAgICAgICBvcHRzICAgICAgT3B0aW9ucyB0byBwYXNzIGVhY2ggcGFydGljbGVcbiAqIEBwYXJhbSAge1BhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrfSBjYWxsYmFjayAgRnVuY3Rpb24gdG8gYWxsb3cgbWFwcGluZy5cbiAqIEByZXR1cm5zIHtQYXJ0aWNsZVtdfVxuICovXG5QYXJ0aWNsZS5wcm90b3R5cGUuZ2VuZXJhdG9yID0gZnVuY3Rpb24gZ2VuKG51bSwgb3B0cz1jbG9uZShJTklUSUFMX1NUQVRFKSwgY2FsbGJhY2spIHtcbiAgLy8gU2hvdWxkIG5vdCBtdXRhdGUgdGhlIG9wdGlvbnMgYWZ0ZXIgdGhleSBoYXZlIGJlZW4gZ2l2ZW4gLy9cbiAgT2JqZWN0LmZyZWV6ZShvcHRzKTtcblxuICBjb25zdCBwYXJ0aWNsZXMgPSBbXTtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgY2FsbGJhY2sob3B0cywgaSwgZnVuY3Rpb24ocCkge1xuICAgICAgICBpZiAoIXApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHBhcnRpY2xlIHBhc3NlZCB0byBnZW5lcmF0b3IuIFdpbGwgdXNlIGRlZmF1bHQgc3RhdGUuXCIpO1xuICAgICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUob3B0cyk7XG4gICAgICAgICAgcGFydGljbGVzLnB1c2gobmV3UGFydGljbGUpO1xuICAgICAgICAgIHJldHVybiBuZXdQYXJ0aWNsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld1BhcnRpY2xlID0gc2VsZi5jcmVhdGUocCk7XG4gICAgICAgIHBhcnRpY2xlcy5wdXNoKG5ld1BhcnRpY2xlKTtcbiAgICAgICAgcmV0dXJuIG5ld1BhcnRpY2xlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgIHBhcnRpY2xlcy5wdXNoKHNlbGYuY3JlYXRlKG9wdHMpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydGljbGVzO1xufTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgY2FsbGJhY2tcbiAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICogQGNhbGxiYWNrIFBhcnRpY2xlfmdlbmVyYXRvckNhbGxiYWNrXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cyBPcHRpb25zIHRvIGJlIGV4dGVuZCBvbiB0byBlYWNoIHBhcnRpY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGkgSW5kZXggb2YgcGFydGljbGUgaW4gQXJyYXkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB7fSBBIGNhbGwgYmFjayB0byBiZSBjYWxsZWQgd2l0aCB0aGUgZ2VuZXJhdGVkIHBhcnRpY2xlLlxuICovXG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwbHkgdmVsb2NpdHkgdG8gdGhlIHBvc2l0aW9uLlxuICogQHBhcmFtICB7SW50ZWdlcn0gdnhcbiAqIEBwYXJhbSAge0ludGVnZXJ9IHZ5XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBQb3NpdGlvbiBzdGF0ZSBhZnRlciB2ZWxvY2l0eSBoYXMgYmVlbiBhcHBsaWVkXG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS51cGRhdGVQb3MgPSBmdW5jdGlvbiB1cGRhdGVQb3ModngsIHZ5KSB7XG4gIGlmICh2eCA9PT0gdW5kZWZpbmVkICYmIHZ5ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLnN0YXRlLnggKz0gdGhpcy5zdGF0ZS52eDtcbiAgICB0aGlzLnN0YXRlLnkgKz0gdGhpcy5zdGF0ZS52eTtcbiAgICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbiAgfVxuXG4gIHRoaXMuc3RhdGUueCArPSB2eDtcbiAgdGhpcy5zdGF0ZS55ICs9IHZ5O1xuICByZXR1cm4ge3g6IHRoaXMuc3RhdGUueCwgeTogdGhpcy5zdGF0ZS55fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHBhcnRpY2xlcyBjYWxjdWxhdGUgdGhlXG4gKiBzcHJpbmcgZm9yY2UgYXBwbGllZCB0byBib3RoIHBhcnRpY2xlcy5cbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSAgc3ByaW5nICBHaXZlbiBvZmZzZXQgZm9yIHRoZSBwYXJ0aWNsZXNcbiAqIEBwYXJhbSAge0ludGVnZXJ9ICBvZmZzZXQgIFRoZSBzcHJpbmcgY29lZmZpY2VudFxuICogQHJldHVybnMge1BhcnRpY2xlW119XG4gKi9cblBhcnRpY2xlLnByb3RvdHlwZS5zcHJpbmdGcm9tVG8gPSBmdW5jdGlvbiBzcHJpbmdGcm9tVG8ocCwgc3ByaW5nPTAuMDUsIG9mZnNldD0xMDApIHtcbiAgLy8gUG9zdGlvbiBkZWx0YVxuICBjb25zdCBkeCA9IChwLnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICBjb25zdCBkeSA9IChwLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIG9mZnNldCkgKiBzcHJpbmc7XG5cbiAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgY29uc3Qgc3ggPSBkeCAvIGRpc3RhbmNlICogc3ByaW5nRm9yY2U7XG4gIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICB0aGlzLmFjY2VsZXJhdGUoc3gsIHN5KTtcblxuICAvLyBBY2NlbGVyYXRlIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gIHAuc3RhdGUudnggLT0gc3g7XG4gIHAuc3RhdGUudnkgLT0gc3k7XG5cbiAgcmV0dXJuIFt0aGlzLCBwXTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwYXJ0aWNsZSwgYSB2ZWN0b3IsIGFuZCBhIHNwcmluZyBjb2VmZmllbmNlbnQgYWNjZWxlcmF0ZVxuICogdGhlIHBhcnRpY2xlIGFjY29yZGluZyB0byB0aGUgZGlzdGFuY2UgaXRzIGlzIGZyb20gdGhlIHBvaW50LlxuICogQHBhcmFtICB7T2JqZWN0fSBwIEEgc3ByaW5nIG9iamVjdC5cbiAqIEByZXR1cm5zIHtQYXJ0aWNsZX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLnNwcmluZ1RvUG9pbnQgPSBmdW5jdGlvbiBzcHJpbmdUb1BvaW50KHApIHtcbiAgLy8gUG9zdGlvbiBkZWx0YVxuICBjb25zdCBkeCA9IChwLnBvaW50LnN0YXRlLnggLSB0aGlzLnN0YXRlLngpO1xuICBjb25zdCBkeSA9IChwLnBvaW50LnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gIC8vIFNldHRpbmcgdXAgbWFnbml0dWRlIGFuZCBhbmdsZSBvZiB0aGUgdmVjdG9yXG4gIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIHAub2Zmc2V0KSAqIHAuc3ByaW5nO1xuXG4gIC8vIFNwcmluZyBhY2NlbGVyYXRpb24gdmVjdG9yXG4gIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAvLyBBY2NlbGVyYXRlIHdpdGggdGhlIHNwcmluZyB2ZWN0b3JcbiAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgcmV0dXJuIFt0aGlzLCBwXTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gQXBwbHkgc3ByaW5nIHBvaW50IHRvIGFsbCBpbnRlcm5hbCBzcHJpbmdzLlxuICogQHBhcmFtICB7c3ByaW5nc30gc3ByaW5ncyBBbiBhcnJheSBvZiBzcHJpbmdzIHRvIHNwcmluZyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3RbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmhhbmRsZVNwcmluZ3MgPSBmdW5jdGlvbiBoYW5kbGVTcHJpbmdzKHNwcmluZ3M9dGhpcy5zdGF0ZS5zcHJpbmdzKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3ByaW5ncy5sZW5ndGg7IGkrKykge1xuICAgIHRoaXMuc3ByaW5nVG9Qb2ludChzcHJpbmdzW2ldKTtcbiAgfVxuICByZXR1cm4gc3ByaW5ncztcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFBhcnRpY2xlXG4gKiBAZGVzY3JpcHRpb24gRm9yIGVhY2ggbWFzcyBpbiB0aGUgbWFzc2VzIGFycmF5IGFwcGx5IGdyYXZpdGF0ZSB0byBpdC5cbiAqIEBwYXJhbSAge1BhcnRpY2xlc1tdfE9iamVjdFtdfSBtYXNzZXNcbiAqIEByZXR1cm5zIHtQYXJ0aWNsZXNbXXxPYmplY3RbXX1cbiAqL1xuUGFydGljbGUucHJvdG90eXBlLmhhbmRsZU1hc3NlcyA9IGZ1bmN0aW9uIGhhbmRsZU1hc3NlcyhtYXNzZXM9dGhpcy5zdGF0ZS5tYXNzZXMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmdyYXZpdGF0ZVRvKG1hc3Nlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIG1hc3Nlcztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgey8qKi99XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdLFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fSBlbHNlIGlmICgodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lTWFwID0gcmVxdWlyZSgnLi9fY2xvbmVNYXAnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTZXQgPSByZXF1aXJlKCcuL19jbG9uZVNldCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWRkTWFwRW50cnkgPSByZXF1aXJlKCcuL19hZGRNYXBFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIENMT05FX0RFRVBfRkxBRykgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNYXBFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFkZFNldEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkU2V0RW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFNldEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQGNsYXNzIFNoYXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIFNoYXBlcyhjdHgsIGRvY3VtZW50KSB7XG4gIGlmICghY3R4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gIH1cbiAgdGhpcy5jdHggPSBjdHg7XG4gIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudCB8fCB3aW5kb3cuZG9jdW1lbnQ7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBkZXNjcmlwdGlvbiBkcmF3IGEgY2lyY2xlLlxuICogQHBhcmFtIHtOdW1iZXJ9IHggICAgIFRoZSB4IGNvb3JkaW5hdGUgb2YgdGhlIGNpcmNsZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5ICAgICBUaGUgeSBjb29yZGluYXRlIG9mIHRoZSBjaXJjbGUuXG4gKiBAcGFyYW0ge051bWJlcn0gciAgICAgVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlLlxuICogQHBhcmFtIHtTdHJpbmd9IGNvbG9yIFRoZSBjb2xvciBvZiB0aGUgY2lyY2xlLlxuICovXG5TaGFwZXMucHJvdG90eXBlLmNpcmNsZSA9IGZ1bmN0aW9uIGRyYXdDaXJjbGUoeD00LCB5PTQsIHI9MiwgY29sb3I9XCIjMDAwMDAwXCIpIHtcbiAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgdGhpcy5jdHguZmlsbCgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAZGVzY3JpcHRpb24gRmlsbCBhIHJlY3RhbmdsZVxuICogQHBhcmFtICB7TnVtYmVyfSB4ICAgICBTdGFydGluZyBwb2ludCBYXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgIFN0YXJ0aW5nIHBvaW50IFlcbiAqIEBwYXJhbSAge051bWJlcn0gdyAgICAgV2lkdGggb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtICB7TnVtYmVyfSBoICAgICBIZWlnaHQgb2YgdGhlIHJlY3RhbmdsZVxuICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciBBIGhleCBzdHJpbmcuXG4gKi9cblNoYXBlcy5wcm90b3R5cGUucmVjdCA9IGZ1bmN0aW9uIGRyYXdSZWN0KHgsIHksIHc9MTAsIGg9MTAsIGNvbG9yPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICB0aGlzLmN0eC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcbn07XG5cbi8qKlxuICogcENpcmNsZVxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAqIEByZXR1cm4ge1BhcnRpY2xlfVxuICovXG5TaGFwZXMucHJvdG90eXBlLnBDaXJjbGUgPSBmdW5jdGlvbiBwYXJ0aWNsZUNpcmNsZShwKSB7XG4gIHRoaXMuY2lyY2xlKFxuICAgIHAuc3RhdGUueCxcbiAgICBwLnN0YXRlLnksXG4gICAgcC5zdGF0ZS5yYWRpdXMsXG4gICAgcC5zdGF0ZS5jb2xvclxuICApO1xuICByZXR1cm4gcDtcbn07XG5cbi8qKlxuICogcFJlY3RcbiAqIEBtZW1iZXJPZiBTaGFwZXNcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBwXG4gKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5wUmVjdCA9IGZ1bmN0aW9uIHBhcnRpY2xlUmVjdChwKSB7XG4gIHRoaXMucmVjdChcbiAgICBwLnN0YXRlLngsXG4gICAgcC5zdGF0ZS55LFxuICAgIHAuc3RhdGUud2lkdGgsXG4gICAgcC5zdGF0ZS5oZWlnaHQsXG4gICAgcC5zdGF0ZS5jb2xvclxuICApO1xuICByZXR1cm4gcDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQGRlc2NyaXB0aW9uIERyYXcgYSBsaW5lIGJldHdlZW4gdGhlc2UgdHdvIHBvaW50cy5cbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEBwYXJhbSAge3N0cmluZ30gc3R5bGVcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVhZID0gZnVuY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHN0eWxlPVwiIzAwMDAwMFwiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IHN0eWxlO1xuICB0aGlzLmN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgdGhpcy5jdHgubGluZVRvKHgxLCB5MSk7XG4gIHRoaXMuY3R4LnN0cm9rZSgpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgU2hhcGVzXG4gKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzBcbiAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMVxuICogQHJldHVybiB7Vm9pZH1cbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVZlYyA9IGZ1bmN0aW9uKHZlYzAsIHZlYzEpIHtcbiAgdGhpcy5kcmF3TGluZVhZKHZlYzAuZ2V0KFwieFwiKSwgdmVjMC5nZXQoXCJ5XCIpLCB2ZWMxLmdldChcInhcIiksIHZlYzEuZ2V0KFwieVwiKSk7XG4gIHJldHVybiB2b2lkKDApO1xufTtcblxuU2hhcGVzLnByb3RvdHlwZS5kcmF3TGluZVBvaW50cyA9IGZ1bmN0aW9uKC4uLnBvaW50cykge1xuICBjb25zdCBbZmlyc3RQb2ludF0gPSBwb2ludHM7XG5cbiAgaWYgKCFmaXJzdFBvaW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgdmFsaWQgaW5wdXRzXCIpO1xuICB9XG5cbiAgaWYgKHBvaW50cy5sZW5ndGggPCAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTXVzdCBiZSBnaXZlbiBhIGEgbnVtYmVyIG9mIHBvaW50cyBncmVhdGVyIHRoYW4gMVwiKTtcbiAgfVxuXG4gIGNvbnN0IHt4OiBzeCwgeTogc3l9ID0gZmlyc3RQb2ludDtcbiAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gIHRoaXMuY3R4Lm1vdmVUbyhzeCwgc3kpO1xuXG4gIC8vIFNvbWUgdHJpY2t5IGRlc3RydWN0aW5nIGdvaW5nIG9uIGhlcmUuXG4gIC8vIEkgbmVlZCBzb21lIHByYWN0aWNlIHNvLi4uIGp1c3QgdGVzdGluZyBpdCBvdXQuXG4gIC8vIFRoZSAuLi5wb2ludHMgYml0IGlzIGp1c3QgYSBzaGFsbG93IGNvcHlpbmcgYXJyYXlcbiAgLy8gYnV0IGdldHRpbmcgcmlkIG9mIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAgLy8gVGhlIHNlY29uZCBiaXQgaXMgZGVzdHJ1Y3RpbmcgdGhlIG9iamVjdCB0aGF0XG4gIC8vIGl0IGdldHMgZm9yIGVhY2ggaXRlcmF0aW9uIGFuZCBhbGlhc2luZ1xuICAvLyB0aGUgdmFsdWVzIHRvIHB4IGFuZCBweS5cblxuICBjb25zdCBbLCAuLi54c10gPSBwb2ludHM7XG4gIGZvciAobGV0IHt4OiBweCwgeTogcHl9IG9mIHhzKSB7XG4gICAgdGhpcy5jdHgubGluZVRvKHB4LCBweSk7XG4gIH1cblxuICB0aGlzLmN0eC5zdHJva2UoKTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFNoYXBlc1xuICogQHBhcmFtICB7bnVtYmVyfSB3aWR0aFxuICogQHBhcmFtICB7bnVtYmVyfSBoZWlnaHRcbiAqIEBwYXJhbSAge051bWJlcn0gZ3JpZFNpemVcbiAqIEBwYXJhbSAge1N0cmluZ30gY29sb3JcbiAqL1xuU2hhcGVzLnByb3RvdHlwZS5ncmlkID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgZ3JpZFNpemU9MjAsIGNvbG9yPVwiI2NjY1wiKSB7XG4gIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXG4gIGZvciAobGV0IHggPSAwOyB4IDwgd2lkdGg7IHggKz0gZ3JpZFNpemUpIHtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgMCk7XG4gICAgdGhpcy5jdHgubGluZVRvKHgsIGhlaWdodCk7XG4gIH1cblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSBncmlkU2l6ZSkge1xuICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICB0aGlzLmN0eC5saW5lVG8od2lkdGgsIHkpO1xuICB9XG5cbiAgdGhpcy5jdHguc3Ryb2tlKCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNoYXBlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvc2hhcGVzLmpzIiwiLyoqXG4gKiBZQVQgc3RhbmRzIGZvciBZZXQgQW5vdGhlciBUd2Vlbi5cbiAqIFdoeSBub3QgaGF2ZSBvbmUgbW9yZSBwYWNrYWdlIHRoYXQgZG9lcyB0aGUgc2FtZSB0aGluZyBhcyB0aGUgNTAgb3V0IHRoZXJlP1xuICogV2VsbCB0aGF0cyBhIGdvb2QgcXVlc3Rpb24gdGhhdCB3aWxsIG5vdCBiZSBhbnN3ZXJlZCBpbiB0aGlzIGNvbW1lbnQgYmxvY2suXG4gKiBUbyBiZSBob25lc3QgaXRzIGZvciBwcmFjdGljZSBhbmQgbGVhcm5pbmcgcHVycG9zZXMuIEFuZCBpZiBhbnlvbmUgaW4gdGhlaXJcbiAqIHJpZ2h0IG1pbmQgYWN0YXVsbHkgYmVuZWZpdHMgZnJvbSB0aGlzIHRoZW4gc28gYmUgaXQuXG4gKi9cblxuY29uc3QgZXh0ZW5kID0gcmVxdWlyZShcImV4dGVuZFwiKTtcbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIG9iajoge3g6IDAsIHk6IDB9LFxuICBwcm9wczoge3g6IDEwMCwgeTogMTAwfSxcbiAgZWFzaW5nOiBcImVhc2VcIixcbiAgZHVyYXRpb246IDEwMDAsXG59O1xuXG5jb25zdCBldmVudEluc3RhbmNlID0gZXZlbnQuaW5pdCgpO1xuLy8gSW5oZXJpdCBtZXRob2RzIGZyb20gZXZlbnRJbnN0YW5jZVxuY29uc3QgWUFUID0gT2JqZWN0LmNyZWF0ZShldmVudEluc3RhbmNlKTtcblxuWUFULmluaXQgPSBmdW5jdGlvbiBpbml0VHdlZW4ob3B0cykge1xuICAvLyBDYW4gYW5kIHVzZXMgRXZlbnQgYW5kIENsb2NrIG1ldGhvZHMuXG5cbiAgaWYgKCFvcHRzLmNsb2NrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBjbG9jayBBUEkuXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2sgPSBvcHRzLmNsb2NrLmluaXQoe1xuICAgIGZwczogb3B0cy5mcHMgfHwgNjAsXG4gIH0pO1xuXG4gIHRoaXMucGFyZW50ID0gZXZlbnRJbnN0YW5jZTtcbiAgdGhpcy50d2VlbnMgPSBbXTtcblxuICAvKipcbiAgICogZWFzaW5nRm5zXG4gICAqIEBkZXNjcmlwdGlvbiBBbGwgZWFzaW5nIGZ1bmN0aW9ucyBhcmUgb3JpZ25pYWxseSB3cml0dGVuXG4gICAqIGJ5IHJvYmVydCBwZW5uZXIsIHRoZSB0d2VlbmluZyBnb2QuXG4gICAqIEhlcmUgZWFjaCBtZXRob2QgaXMgcGFzc2VkIGEgbm9ybWFsaXplZCB2YWx1ZS4gV2hpY2ggaXNcbiAgICogdXN1YWxseSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBudW1iZXIgYXNcbiAgICogYSBwZXJjZW50YWdlIG9mIGEgcmFuZ2UuIFdpdGggdGhhdCBub3JtbGl6ZWQgdmFsdWUgLyBwZXJjZW50YWdlIHdlXG4gICAqIGNhbiBtYXAgdGhhdCBwZXJjZW50YWdlIHRvIGFub3RoZXIgcmFuZ2UuIFRoaXMgaXMgY2FsbGVkIGludGVycG9sYXRpb24uXG4gICAqIEBzZWUge0BsaW5rIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy99XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB0aGlzLmVhc2luZ0ZucyA9IHtcbiAgICAvLyBIZXJlIHRoaXMgZWFzZSBmdW5jdGlvbiBpcyBsaW5lYXIgYXMgdGhlcmUgaXMgb25seSBvbmVcbiAgICAvLyBuIHZhbHVlLiBFYWNoIGVhc2UgZnVuY3Rpb24gY2FuIGJlIG1hcHBlZCB0byBhIHBvbHlub21pYWwuXG4gICAgZWFzZShjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IGF4ICsgYiA9IGM7IHdoZXJlIHggaXMgdGhlIG5vcm1hbGl6ZWQgdmFsdWVcbiAgICAgIHJldHVybiBjICogbiArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFkKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogMXheMiArIDB4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogbikgKyBiO1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAtMXheMiArIDJ4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogKDIgLSBuKSkgKyBiO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVhZChjLCBiLCBuKSB7XG4gICAgICBpZiAoKG4qPTIpIDwgMSkge1xuICAgICAgICByZXR1cm4gYy8yICogKG4qbikgKyBiOyAvLyBQb2x5bm9taWFsIGZvciBoYWxmIHRoZSByYW5nZTpcbiAgICAgICAgLy8gMnheMiArIDB4ICsgMCA9IGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gLWMvMiAqICgoLS1uKSoobi0yKSAtIDEpICsgYjsgLy8gUG9seW5vbWlhbCBmb3IgdGhlIHRoZSB1cHBlclxuICAgICAgLy8gaGFsZiBvZiB0aGUgcmFuZ2U6IC0yeF4yICsgNHggLSAxXG4gICAgfSxcbiAgfTtcblxuICB0aGlzLl9jbG9jay5vbihcInRpY2tcIiwgdGhpcy51cGRhdGVUd2VlbnMsIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB1cGRhdGVUd2VlbnMgLSBVcGRhdGVzIGFsbCB0aGUgdHdlZW4gaW5zdGFuY2VzLlxuICovXG5ZQVQudXBkYXRlVHdlZW5zID0gZnVuY3Rpb24gdXBkYXRlVGVlbnMoKSB7XG4gIHRoaXMudHdlZW5zLmZvckVhY2goKHR3ZWVuKSA9PiB7XG4gICAgaWYgKHR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgfVxuXG4gICAgaWYgKCF0d2Vlbi50aWNrZXIubmVlZHNVcGRhdGUgJiZcbiAgICAgICAgdHdlZW4udGlja2VyLlNUQVRFID09PSBcIkRPTkVcIikge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgICB0d2Vlbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW4udGlja2VyLnN0b3BwZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciB0d2VlbiBpcyBzdG9wcGVkLlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuWUFULmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9e30pIHtcbiAgY29uc3QgWUFUSW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKFlBVCk7XG4gIGNvbnN0IF9vcHRzID0gT2JqZWN0LmFzc2lnbihjbG9uZShERUZBVUxUUyksIG9wdHMpO1xuICBjb25zdCB7ZHVyYXRpb24sIG9iaiwgcHJvcHMsIGVhc2luZywgaWR9ID0gX29wdHM7XG5cbiAgaWYgKCFZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVhc2luZyBmdW5jdGlvbiAke2Vhc2luZ30gZG9lcyBub3QgZXhpc3RzYCk7XG4gIH1cblxuICBpZiAoaWQpIHtcbiAgICBpZiAodGhpcy50d2VlbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0d2VlbiB3aXRoIGlkOiAke2lkfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG5cbiAgICBZQVRJbnN0YW5jZS5pZCA9IGlkO1xuICB9IGVsc2Uge1xuICAgIFlBVEluc3RhbmNlLmlkID0gdGhpcy50d2VlbnMubGVuZ3RoICsgMTtcbiAgfVxuXG4gIFlBVEluc3RhbmNlLnN0YXRlID0gY2xvbmUob2JqKTtcbiAgWUFUSW5zdGFuY2Uub2JqID0gb2JqO1xuICBZQVRJbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICBZQVRJbnN0YW5jZS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICBZQVRJbnN0YW5jZS5lYXNpbmcgPSBZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXTtcbiAgWUFUSW5zdGFuY2UudGlja2VyID0gdGhpcy5fY2xvY2suY3JlYXRlU2xhdmUoe1xuICAgIGlkOiBZQVRJbnN0YW5jZS5pZCxcbiAgICBkdXJhdGlvbjogWUFUSW5zdGFuY2UuZHVyYXRpb24sXG4gIH0pO1xuXG4gIHRoaXMudHdlZW5zLnB1c2goWUFUSW5zdGFuY2UpO1xuICByZXR1cm4gWUFUSW5zdGFuY2U7XG59O1xuXG5ZQVQuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBZQVRbMF07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHdlZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy50d2VlbltpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnR3ZWVuW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbllBVC5yZXdpbmQgPSBmdW5jdGlvbihpZD10aGlzLmlkKSB7XG4gIGNvbnN0IHR3ZWVuID0gdGhpcy5nZXQoaWQpO1xuXG4gIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgdHdlZW4uc3RvcCgpO1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCBhIHdheSB0byBjYWNoZSB0aGUgb2xkIHByb3BzIC8vXG4gIHRoaXMub3B0cy5vYmogPSB0aGlzLm9wdHMucHJvcHM7XG4gIHRoaXMub3B0cy5wcm9wcyA9IHRoaXMub3B0cy5wcm9wc0JlZm9yZVR3ZWVuO1xuXG4gIHR3ZWVuLnN0YXJ0KCk7XG59O1xuXG5ZQVQuc3RhcnRBbGwgPSBmdW5jdGlvbiBzdGFydEFsbCgpIHtcbiAgaWYgKCF0aGlzLnR3ZWVucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhcmUgbm8gdHdlZW5zIHRvIHN0YXJ0XCIpO1xuICB9XG5cbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodCkgPT4ge1xuICAgIHQudGlja2VyLnN0YXJ0KCk7XG4gIH0pO1xuXG4gIHRoaXMuX2Nsb2NrLnN0YXJ0KCk7XG59O1xuXG4vKipcbiAqIHN0b3BBbGwgLSBTdG9wcyBhbGwgdHdlZW5zXG4gKi9cbllBVC5zdG9wQWxsID0gZnVuY3Rpb24gc3RvcEFsbCgpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RvcFwiKTtcbiAgfVxuXG4gIHRoaXMuX2Nsb2NrLnN0b3AoKTtcbn07XG5cbi8qKlxuICogZGVsYXkgLSBob3cgbG9uZyB0byBkZWxheSB0aGUgYW5pbWF0aW9uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGR1cmF0aW9uKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgdGhpcy5vYmogPSBjbG9uZSh0aGlzLnN0YXRlKTtcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpY2tlci5zdGFydCgpLCBkdXJhdGlvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gc3RvcHMgdGhlIHRpY2tlclxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGZpbmlzaCAtIGZpbmlzaGVzIHRoZSB0d2VlbiBhbmltYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHRoaXMudGlja2VyLmlkKTtcbiAgdGhpcy5zdGF0ZSA9IHRoaXMucHJvcHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuWUFULnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpZD10aGlzLmlkKSB7XG4gIHRoaXMudHdlZW5zID0gdGhpcy50d2VlbnMuZmlsdGVyKCh0KSA9PiB7XG4gICAgaWYgKHQuaWQgPT09IGlkKSB7XG4gICAgICB0aGlzLl9jbG9jay5yZW1vdmVTbGF2ZSh0LnRpY2tlci5pZCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuWUFULnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSh0aWNrZXIpIHtcbiAgaWYgKCF0aWNrZXIubmVlZHNVcGRhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dGltZVNpbmNlU3RhcnQ6IGRlbHRhLCBkdXJhdGlvbn0gPSB0aWNrZXI7XG4gIGNvbnN0IG5vcm0gPSB1dGlscy5ub3JtYWxpemUoZGVsdGEsIDAsIGR1cmF0aW9uLm1zKTtcblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmopIHtcbiAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRoaXMub2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB0aGlzLmVhc2luZyh0aGlzLnByb3BzW2tleV0gLSB0aGlzLm9ialtrZXldLCB0aGlzLm9ialtrZXldLCBub3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWUFUO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIFxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSFxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVUXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdHdlZW4uanMiLCIvKipcbiAqIEV2ZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQGltcGxlbWVudHMge3V0aWxzfVxuICovXG5jb25zdCBFdmVudCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbi8qKlxuICogaW5pdFxuICogQG1lbWJlck9mIEV2ZW50XG4gKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZXMgdGhlIGV2ZW50IG9iamVjdC5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5pbml0ID0gZnVuY3Rpb24gaW5pdEV2ZW50KCkge1xuICB0aGlzLmNhbGxiYWNrcyA9IHt9O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogZW1pdFxuICogQGRlc2NyaXB0aW9uIEV4ZWN1dGVzIHRoZSBoYW5kZWxlciB0aGF0IGFzc29jYWl0ZWQgd2l0aCB0aGUgZW1pdHRlZCBldmVudC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3NcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5lbWl0ID0gZnVuY3Rpb24gZW1pdCguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgLi4ucmVzdF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSB0aGlzLmNhbGxiYWNrc1tldmVudF0gfHwgW107XG5cbiAgaWYgKHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICB0aGlzLmNhbGxiYWNrc1tldmVudF0uZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKC4uLnJlc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIG9uXG4gKiBAZGVzY3JpcHRpb24gQXR0YWNoIGEgaGFuZGxlciB0byBhbiBldmVudC5cbiAqIEBwYXJhbSAge1N0cmluZ30gICBldmVudFxuICogQHBhcmFtICB7RnVuY3Rpb259IGZuXG4gKiBAcGFyYW0gIHtPYmplY3R9ICAgY29udGV4dFxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9uID0gZnVuY3Rpb24gb24oZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIGlmICghZXZlbnQgfHwgIWZuKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV2ZW50OiBQbGVhc2UgcHJvdmlkZSB0cnV0aHkgYXJndW1lbnRzXCIpO1xuICB9XG5cbiAgaWYgKGNvbnRleHQpIHtcbiAgICBmbiA9IGZuLmJpbmQoY29udGV4dCk7XG4gIH1cblxuICBjb25zdCBldmVudHMgPSBldmVudC5zcGxpdChcIiBcIik7XG5cbiAgdGhpcy5jYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrcyB8fCB7fTtcblxuICBldmVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgIHRoaXMuY2FsbGJhY2tzW2VdID0gdGhpcy5jYWxsYmFja3NbZV0gfHwgW107XG5cbiAgICBpZiAoIXRoaXMuY2FsbGJhY2tzW2VdLmxlbmd0aCkge1xuICAgICAgdGhpcy5jYWxsYmFja3NbZV0ucHVzaChmbik7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBEb250IGNyZWF0ZSBkdXBsaWNhdGVzIG9mIHRoZSBzYW1lIGhhbmRlbGVkIGZ1bmN0aW9uLlxuICAgIC8vIElmIHlvdSB3YW50IHlvdXIgZnVuY3Rpb24gcnVuIHR3aWNlIHdyYXAgaXQgaW4gYSBmdW5jdGlvbi5cbiAgICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZV0uZXZlcnkoKGNiLCBpLCBjb2wpID0+IHtcbiAgICAgIHJldHVybiBjYiAhPT0gZm47XG4gICAgfSkgPyB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKSA6XG4gICAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBUaGF0IGZ1bmN0aW9uICR7Zm59IGhhcyBhbHJlYWR5IGJlZW4gZGVjbGFyZWQgYWAgK1xuICAgICAgICBcImhhbmRsZXIgZm9yIHRoaXMgZXZlbnQuXCIpO1xuICB9KTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb2ZmXG4gKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGFuIGV2ZW50IGhhbmRlbGVyLlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5FdmVudC5vZmYgPSBmdW5jdGlvbiBvZmYoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnQsIGZuXSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRoaXMuY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBsZXQgY2FsbGJhY2tzID0gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaWYgKCFmbikge1xuICAgIGRlbGV0ZSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aGlzLmNhbGxiYWNrc1tldmVudF0gPSBjYWxsYmFja3MuZmlsdGVyKChjYikgPT4gY2IgIT09IGZuKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogbGlzdGVuZXJzIC0gUmV0dXJuIGFsbCBjYWxsYmFja3MgYXR0YWNoZWQgdG8gYSBjZXJ0YWluIGV2ZW50XG4gKiBAcGFyYW0gIHthbnk8QXJyYXk+fSBhcmdzXG4gKiBAcmV0dXJuIHtmdW5jdGlvbltdfVxuICovXG5FdmVudC5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnMoLi4uYXJncykge1xuICBjb25zdCBbZXZlbnRdID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2FsbGJhY2tzKTtcbiAgfVxuXG4gIGlmICghdGhpcy5jYWxsYmFja3NbZXZlbnRdKSB7XG4gICAgY29uc29sZS53YXJuKGBFdmVudDogTm8gZXZlbnQgbmFtZWQgJHtldmVudH0gaGFzIGJlZW4gcmVnaXN0ZXJlZGApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbn07XG5cbkV2ZW50Lm9uY2UgPSBmdW5jdGlvbiBvbmNlKC4uLmFyZ3MpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gIGNvbnN0IFtldmVudCwgZm4sIGNvbnRleHRdID0gYXJncztcblxuICBjb25zdCB3cmFwID0gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICBmbi5iaW5kKGNvbnRleHQpKCk7XG4gICAgc2VsZi5vZmYoZXZlbnQsIHdyYXApO1xuICB9O1xuXG4gIHRoaXMub24oZXZlbnQsIHdyYXAsIGNvbnRleHQpO1xufTtcblxuLy8gQWxpYXNlcyAvL1xuRXZlbnQucmVtb3ZlTGlzdGVuZXIgPSBFdmVudC5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBFdmVudC5vZmY7XG5FdmVudC5maXJlID0gRXZlbnQuZW1pdDtcbkV2ZW50LmFkZExpc3RlbmVyID0gRXZlbnQub247XG5FdmVudC5nZXQgPSBFdmVudC5saXN0ZW5lcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gRXZlbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2V2ZW50LmpzIiwiY29uc3QgdGlja2VyID0gcmVxdWlyZShcIi4vdGlja2VyXCIpO1xuY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKS5pbml0KCk7XG5jb25zdCBDbG9jayA9IE9iamVjdC5jcmVhdGUoZXZlbnQpO1xuY29uc3QgTUFYX0ZQUyA9IDYwO1xuY29uc3Qgbm9vcCA9ICgpID0+IHt9O1xuXG4vKipcbiAqIGluaXQgLSBJbml0YWxpemVzIHRoZSBjbG9jayB3aXRoIGNvcnJlY3QgcHJvcGVydGllcy5cbiAqIEBwYXJhbSAge09iamVjdH0gb3B0c1xuICogQHBhcmFtICB7TnVtYmVyfSBvcHRzLmZwcyBUaGUgZnBzIHlvdSB3YW50IHRoZSBjbG9jayB0byB0aWNrIGF0LlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmluaXQgPSBmdW5jdGlvbiBpbml0Q2xvY2sob3B0cz17fSkge1xuICBvcHRzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgZnBzOiBNQVhfRlBTLFxuICB9LCBvcHRzKTtcblxuICB0aGlzLnNsYXZlcyA9IFtdO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuXG4gIC8vIFplcm8gYmFzZWQgZnJhbWUgY291bnQuXG4gIHRoaXMuaW5kZXggPSAtMTtcblxuICAvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBhbmltYXRpb24gZnJhbWUgc28gd2UgY2FuIGNhbmNlbCBpdFxuICB0aGlzLnJBRiA9IDA7XG5cbiAgLy8gVGltZSBwcm9wZXJ0aWVzXG4gIHRoaXMuc3RhcnRUaW1lO1xuICB0aGlzLmxhc3RUaW1lO1xuICB0aGlzLnN0b3BUaW1lO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ID0gMDtcblxuICAvLyBUaGUgbWF4aW11bSBGUFMgdGhlIGJyb3dzZXIgY2FuIGRlbGl2ZXIgaXMgNjAuXG4gIHRoaXMuZnBzID0gb3B0cy5mcHMgPiBNQVhfRlBTID9cbiAgICBNQVhfRlBTIDpcbiAgICAob3B0cy5mcHMgfHwgTUFYX0ZQUyk7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHN0YXJ0IC0gU3RhcnRzIHRoZSBjbG9jayB3aXRoIHN0YXJ0aW5nIHRpbWUgcHJvcGVydGllcy5cbiAqIEBwYXJhbSAge051bWJlcn0gZnBzIFRoZSBmcHMgeW91IHdhbnQgdGhlIGNsb2NrIHRvIHRpY2sgYXQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHRoaXMuZnBzID4gNjApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIHRvbyBoaWdoXCIpO1xuICB9XG5cbiAgaWYgKCt0aGlzLmZwcyA9PT0gTmFOKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIGdpdmVuIGZwcyBpcyBub3QgdmFsaWRcIik7XG4gIH1cblxuICB0aGlzLmZwcyA9IDEwMDAgLyB0aGlzLmZwcztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdGhpcy5sYXN0VGltZSA9IHRoaXMuc3RhcnRUaW1lO1xuXG4gIC8vIFN0YXJ0IHRpY2tpbmdcbiAgdGhpcy5sb29wKHRoaXMuc3RhcnRUaW1lKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHRpY2tcbiAqIEBwYXJhbSAge051bWJlcn0gbmV3VGltZSBBIHZhbHVlIGluIG1zIHRoYXQgaXMgZXF1YWwgdG8gdGhlIGN1cnJlbnQgdGltZS5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5sb29wID0gZnVuY3Rpb24gbG9vcChuZXdUaW1lKSB7XG4gIHRoaXMuckFGID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3AuYmluZCh0aGlzKSk7XG5cbiAgbGV0IGRlbHRhID0gbmV3VGltZSAtIHRoaXMubGFzdFRpbWU7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSBuZXdUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG5cbiAgaWYgKGRlbHRhID4gdGhpcy5mcHMpIHtcbiAgICB0aGlzLmluZGV4Kys7XG5cbiAgICB0aGlzLndoaXBTbGF2ZXMoe1xuICAgICAgbmV3VGltZSxcbiAgICAgIGRlbHRhLFxuICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBsYXN0VGltZTogdGhpcy5sYXN0VGltZSxcbiAgICAgIGNsb2NrU3RhcnQ6IHRoaXMuc3RhcnRUaW1lLFxuICAgICAgdGltZVNpbmNlU3RhcnQ6IHRoaXMudGltZVNpbmNlU3RhcnQsXG4gICAgfSk7XG5cbiAgICB0aGlzLmxhc3RUaW1lID0gbmV3VGltZSAtIChkZWx0YSAlIHRoaXMuZnBzKTtcbiAgfVxuXG4gIHRoaXMuZW1pdChcInJlbmRlclwiKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RvcCAtIFN0b3AgdGhlIGNsb2NrIGFuZCBjYWxsIHRoZSBsYXN0IHRpY2sgaWYgbmVlZGVkLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLnN0b3AgPSBmdW5jdGlvbiBzdG9wQ2xvY2soKSB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuckFGKTtcblxuICAvLyBSZWNvcmQgd2hlbiB3ZSBzdG9wcGVkLlxuICB0aGlzLnN0b3BUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gdGhpcy5zdG9wVGltZSAtIHRoaXMuc3RhcnRUaW1lO1xuICB0aGlzLmNsZWFyU2xhdmVzKCk7XG5cbiAgdGhpcy5lbWl0KFwic3RvcHBlZFwiKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIHdoaXBTbGF2ZXMgLSBSdW4gYWxsIHNsYXZlcyBpbiBzZXF1ZW5jZSBhbmQgcGFzcyBpblxuICogdGhlIGdpdmVuIHN0YXRlIG9mIHRoZSBjbG9jay5cbiAqIEBwYXJhbSAge09iamVjdH0gc3RhdGVcbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay53aGlwU2xhdmVzID0gZnVuY3Rpb24gd2hpcFNsYXZlcyhzdGF0ZSkge1xuICBpZiAoIXRoaXMuc2xhdmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHRoaXMuc2xhdmVzLmZvckVhY2goKHNsYXZlLCBpbmRleCkgPT4ge1xuICAgIHNsYXZlLm51ZGdlKHN0YXRlKTtcbiAgfSk7XG5cbiAgdGhpcy5lbWl0KFwidGlja1wiKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5DbG9jay5jcmVhdGVTbGF2ZSA9IGZ1bmN0aW9uIGNyZWF0ZVNsYXZlKG9wdHMpIHtcbiAgaWYgKCFvcHRzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBvcHRpb25zIG9iamVjdFwiKTtcbiAgfVxuXG4gIGNvbnN0IHtpZCwgZHVyYXRpb259ID0gb3B0cztcbiAgY29uc3QgdGltZVN0YW1wID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgY29uc3Qgc2xhdmUgPSBPYmplY3QuY3JlYXRlKHRpY2tlcilcbiAgICAuaW5pdCh7dGltZVN0YW1wLCBpZCwgZHVyYXRpb259KTtcblxuICBpZiAoaWQpIHtcbiAgICB0aGlzLnNsYXZlcy5wdXNoKHNsYXZlKTtcbiAgICByZXR1cm4gc2xhdmU7XG4gIH1cblxuICBzbGF2ZS5pZCA9IHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICByZXR1cm4gc2xhdmU7XG59O1xuXG5DbG9jay5yZW1vdmVTbGF2ZSA9IGZ1bmN0aW9uIHJlbW92ZVNsYXZlKGlkKSB7XG4gIHRoaXMuc2xhdmVzID0gdGhpcy5zbGF2ZXMuZmlsdGVyKChzbGF2ZSkgPT4ge1xuICAgIGlmIChzbGF2ZS5pZCAhPT0gaWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzbGF2ZS5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xufTtcblxuQ2xvY2suY2xlYXJTbGF2ZXMgPSBmdW5jdGlvbiBjbGVhclNsYXZlcygpIHtcbiAgaWYgKHRoaXMuc2xhdmVzLmxlbmd0aCkgdGhpcy5zbGF2ZXMgPSBbXTtcbn07XG5cbkNsb2NrLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuc3RvcCgpO1xuICB0aGlzLmNsZWFyU2xhdmVzKCk7XG4gIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG4gIHRoaXMuckFGID0gMDtcbn07XG5cbkNsb2NrLnJlbW92ZUFsbFNsYXZlcyA9IENsb2NrLmNsZWFyU2xhdmVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsb2NrO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi9jbG9jay5qcyIsImNvbnN0IGV2ZW50ID0gcmVxdWlyZShcIi4vZXZlbnRcIik7XG5jb25zdCBNQVhfRlBTID0gMTAwMC82MDtcbmNvbnN0IFRpY2tlciA9IE9iamVjdC5jcmVhdGUoZXZlbnQpO1xuY29uc3QgU1RBVEUgPSB7XG4gIFNUT1BQRUQ6IFwiU1RPUFBFRFwiLFxuICBSVU5OSU5HOiBcIlJVTk5JTkdcIixcbiAgRE9ORTogXCJET05FXCIsXG59O1xuXG5cblRpY2tlci5pbml0ID0gZnVuY3Rpb24gaW5pdCh7XG4gIHRpbWVTdGFtcD1wZXJmb3JtYW5jZS5ub3coKSxcbiAgaWQsXG4gIGR1cmF0aW9uPTEwMDAsXG4gIGludGVydmFsPU1BWF9GUFMsXG59KSB7XG4gIHRoaXMuaWQgPSBpZDtcbiAgdGhpcy5wYXJlbnQgPSBldmVudDtcbiAgdGhpcy5wYXJlbnQubmFtZSA9IFwiZXZlbnRcIjtcblxuICAvLyBQcm9iYWJseSBjYW50IHN1cHBvcnQgdGhpcz8/XG4gIC8vIFlvdSBoYXZlIHRvIGhhdmUgeW91ciBvd24gY2xvY2suXG4gIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcbiAgdGhpcy5kdXJhdGlvbiA9IHRoaXMudGlja0ZvcihkdXJhdGlvbiwgXCJtc1wiKTtcblxuICB0aGlzLlNUQVRFO1xuICB0aGlzLmRlbHRhO1xuICB0aGlzLnN0b3BUaW1lO1xuICB0aGlzLnN0YXJ0VGltZSA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0MiA9IDA7XG5cbiAgLy8gRmlyZSB0aGUgZmlyc3QgdGltZSB5b3UgZ2V0IGNhbGxlZC5cbiAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5UaWNrZXIudGlja0ZvciA9IGZ1bmN0aW9uIHRpY2tGb3IoZHVyYXRpb24sIHN0cmluZykge1xuICBzd2l0Y2ggKHN0cmluZykge1xuICBjYXNlIFwiZnJhbWVzXCI6IGNhc2UgXCJmXCI6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwiZnJhbWVzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiBNQVhfRlBTLFxuICAgIH07XG4gIGNhc2UgXCJzZWNvbmRzXCI6IGNhc2UgXCJzXCI6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwic2Vjb25kc1wiLFxuICAgICAgdmFsdWU6IGR1cmF0aW9uLFxuICAgICAgbXM6IGR1cmF0aW9uICogMTAwMCxcbiAgICB9O1xuICBjYXNlIFwibWlsbGlzZWNvbmRzXCI6IGNhc2UgXCJtc1wiOiBkZWZhdWx0OlxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIm1pbGxpc2Vjb25kc1wiLFxuICAgICAgdmFsdWU6IGR1cmF0aW9uLFxuICAgICAgbXM6IGR1cmF0aW9uLFxuICAgIH07XG4gIH07XG59O1xuXG5UaWNrZXIuc3RhcnQgPSBmdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlJVTk5JTkcpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMuc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG59O1xuXG5UaWNrZXIuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIGlmICh0aGlzLlNUQVRFID09PSBTVEFURS5TVE9QUEVEKSByZXR1cm4gZmFsc2U7XG4gIHRoaXMuU1RBVEUgPSBTVEFURS5TVE9QUEVEO1xuXG4gIC8vIEtub3cgd2hhdCB0aW1lIGl0IHN0b3BwZWQuXG4gIC8vIHNvIHRoYXQgaWYgaXQgc3RhcnRzIGFnYWluIGl0XG4gIC8vIGl0IGNhbiByZWNhbGN1bGF0ZSBob3cgZmFyIGl0IG5lZWRzIHRvIGdvLlxuICBjb25zdCBuZXdEdXJhdGlvbiA9IHRoaXMuZHVyYXRpb24ubXMgLSB0aGlzLnRpbWVTaW5jZVN0YXJ0IHx8IDA7XG5cbiAgdGhpcy5kdXJhdGlvbiA9IHRoaXMudGlja0ZvcihuZXdEdXJhdGlvbiwgXCJtaWxsaXNlY29uZHNcIik7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5udWRnZSA9IGZ1bmN0aW9uIG51ZGdlKHN0YXRlKSB7XG4gIGlmICghc3RhdGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIHN0YXRlIG9iamVjdFwiKTtcbiAgfVxuXG5cbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQgfHwgdGhpcy5TVEFURSAhPT0gU1RBVEUuUlVOTklORykge1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRoaXMuU1RBVEUgPSBTVEFURS5SVU5OSU5HO1xuICB0aGlzLnRpbWVTaW5jZVN0YXJ0ICs9IHN0YXRlLmRlbHRhO1xuXG4gIGlmICh0aGlzLnRpbWVTaW5jZVN0YXJ0IDwgdGhpcy5kdXJhdGlvbi5tcykge1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuU1RBVEUgPSBTVEFURS5ET05FO1xuICAgIHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaWNrZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3RpY2tlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=