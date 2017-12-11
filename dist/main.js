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
	
	//      
	
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
	
	//      
	
	/* eslint max-len: 0 */
	
	/**
	 * This module is composed of small function that
	 * should be used when needed. Most functions are pure
	 * and only return values. For more info read the docs.
	 */
	
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
	  var x = cubicBezier(p0.x, p1.x, p2.x, p3.x, t);
	  var y = cubicBezier(p0.y, p1.y, p2.y, p3.y, t);
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
	 * @param  {Float} ease
	 * @param  {Int} a
	 * @param  {Int} b
	 * @param  {number} threshold
	 * @return {Int}
	 */
	function ease(ease, a, b) {
	  var threshold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.1;
	
	  // the delta can get extremely small and its not performant to keep
	  // on rendering or calculating for animation purposes.
	  if (Math.abs(b - a) < threshold) {
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
	 * @return {Object}
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
	
	// function colorInterpolation(float: number, colorFrom: Color, colorTo: Color) : Color {
	//   const {r1, g1, b1} = colorFrom;
	//   const {r2, g2, b2} = colorTo;
	
	//   const r = r1 + (r2 - r1) / float;
	//   const g = g1 + (g2 - g1) / float;
	//   const b = b1 + (b2 - b1) / float;
	
	//   return "someHex";
	// };
	
	/**
	 * perspective - perspective is the ratio to multiply the x and y values
	 * by to get those points represeneted in 3d space.
	 * @param  {number} focalLength: The length of the lens
	 * @param  {number} distance:    The distance from begining of the lens the the beginging of the object.
	 * @return {number}``
	 */
	function perspective(focalLength, distance) {
	  return focalLength / (focalLength - distance);
	};
	
	/**
	 * @class Utils
	 * @return {Utils}
	 */
	
	module.exports = {
	  normalize: normalize,
	  lerp: lerp,
	  map: map,
	  percent: percent,
	  clamp: clamp,
	  randomBetween: randomBetween,
	  distanceXY: distanceXY,
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//      
	
	/* eslint max-len: 0 */
	
	/*
	* The particle libary is used for physics animations.
	* they are not extremely accurate but still represent
	* and feel somewhat like physical movments.
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
	  masses: [],
	  color: "#000000",
	  width: 10,
	  height: 10
	};
	
	/**
	 * @class Particle
	 * @param {state} state initial state to pass the constructor
	 */
	
	var Particle = function () {
	
	  /**
	   * constructor
	   * @constructor
	   * @param  {state} state Particle state coordinates, etc.
	   * @return {void}
	   */
	  function Particle() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
	    _classCallCheck(this, Particle);
	
	    this.state = state || {};
	  }
	
	  _createClass(Particle, [{
	    key: "accelerate",
	
	
	    /**
	     * @description A change in velocity.
	     *
	     * @memberOf Particle
	     * @param  {Integer} ax
	     * @param  {Integer} ay
	     * @return {void} Acceleration vector.
	     */
	    value: function accelerate() {
	      var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
	      var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
	      this.state.vx += ax;
	      this.state.vy += ay;
	    }
	  }, {
	    key: "update",
	
	
	    /**
	     * @description A update a position of a particle
	     * based on its gravity and fricition. Gravity is usually a acceleration
	     * vector.
	     *
	     * @memberOf Particle
	     * @param  {Integer} fric Fricition to apply.
	     * @param  {Integer} grav Gravity to apply.
	     * @return {Object} Position state.
	     */
	    value: function update() {
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
	    }
	  }, {
	    key: "setSpeed",
	
	
	    /**
	     * @description sets the internal speed of the particle given the force
	     * @memberOf Particle
	     * @param {number} speed
	     */
	    value: function setSpeed(speed) {
	      var angle = this.getHeading();
	      this.state.vx = Math.cos(angle) * speed;
	      this.state.vy = Math.sin(angle) * speed;
	    }
	  }, {
	    key: "setHeading",
	
	
	    /**
	     * @memberOf Particle
	     * @description sets the internal speed of the particle given the angle
	     * @param {number} angle
	     */
	    value: function setHeading(angle) {
	      var speed = this.getSpeed();
	      this.state.vx = Math.cos(angle) * speed;
	      this.state.vy = Math.sin(angle) * speed;
	    }
	  }, {
	    key: "getSpeed",
	
	
	    /**
	     * @description get the length of the velocity vector.
	     * @memberOf Particle
	     * @param  {number} x
	     * @param  {number} y
	     * @return {number} force of velocity vector.
	     */
	    value: function getSpeed() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
	      return Math.hypot(this.state.vx, this.state.vy);
	    }
	  }, {
	    key: "getHeading",
	
	
	    /**
	     * @description get the angle of the velocity vector.
	     * @memberOf Particle
	     * @param  {number} x
	     * @param  {number} y
	     * @return {number} angle of velocity vector.
	     */
	    value: function getHeading() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.vx;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.vy;
	
	      return Math.atan2(y, x);
	    }
	  }, {
	    key: "angleTo",
	
	
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
	     * @param  {Particle} p      A particle instance.
	     * @return {Integer}  Angle   A angle.
	     */
	    value: function angleTo(p) {
	      var dx = p.state.x - this.state.x;
	      var dy = p.state.y - this.state.y;
	      return Math.atan2(dy, dx);
	    }
	  }, {
	    key: "distanceTo",
	
	
	    /**
	     * @description Assuming we know where both particle are on the canvas.
	     * we can use the distance formuale to figure out the distance
	     * between the two particles.
	     *
	     * @memberOf Particle
	     * @param  {Particle} p      A particle instance
	     * @return {number}  Angle   A Distance
	     */
	    value: function distanceTo(p) {
	      var dx = p.state.x - this.state.x;
	      var dy = p.state.y - this.state.y;
	      return Math.hypot(dx, dy);
	    }
	  }, {
	    key: "addMass",
	
	
	    /**
	     * @memberOf Particle
	     * @description Append a particle to the masses array.
	     * @param {Particle} mass
	     */
	    value: function addMass(mass) {
	      this.removeMass(mass);
	      this.state.masses.push(mass);
	    }
	  }, {
	    key: "removeMass",
	
	
	    /**
	     * @memberOf Particle
	     * @description Remove a particle for the masses array.
	     * @param  {Particle} mass
	     */
	    value: function removeMass(_ref) {
	      var mass = _ref.state;
	
	      var masses = this.state.masses;
	
	      for (var i = 0; i < masses.length; i++) {
	        if (mass.x === masses[i].state.x && mass.y === masses[i].state.y) {
	          masses.splice(i, 1);
	          break;
	        }
	      }
	    }
	  }, {
	    key: "gravitateTo",
	
	
	    /**
	     * @memberOf Particle
	     * @description Applys gravitation to the input particle.
	     * @param  {Particle} particle
	     * @return {Object}
	     */
	    value: function gravitateTo(particle) {
	      var dx = particle.state.x - this.state.x;
	      var dy = particle.state.y - this.state.y;
	
	      // Distance between the two particles
	      // we dont use the distanceTo fn cause we want
	      // to optimzie the code to not have to calculate
	      // distSqrd again.
	      var distSqrd = dx * dx + dy * dy;
	      var dist = Math.sqrt(distSqrd);
	
	      // Magnitude of the vector [F = G(m1)(m2)/r^2]
	      var force = particle.state.mass / distSqrd;
	
	      // Setting up angles of the vector
	      var sin = dy / dist;
	      var cos = dx / dist;
	
	      // Setting vetor angle
	      var ax = cos * force;
	      var ay = sin * force;
	
	      return this.accelerate(ax, ay);
	    }
	  }, {
	    key: "updatePos",
	
	
	    /**
	     * @memberOf Particle
	     * @description Apply velocity to the position.
	     * @param  {Integer} vx
	     * @param  {Integer} vy
	     * @return {void}
	     */
	    value: function updatePos(vx, vy) {
	      if (vx === undefined && vy === undefined) {
	        this.state.x += this.state.vx;
	        this.state.y += this.state.vy;
	        return { x: this.state.x, y: this.state.y };
	      }
	
	      this.state.x += vx;
	      this.state.y += vy;
	      return { x: this.state.x, y: this.state.y };
	    }
	  }, {
	    key: "addSpring",
	
	
	    /**
	     * @description add spring to springs array
	     * @memberOf Particle
	     * @param {Object} spring A spring object
	     * @return {Object}
	     */
	    value: function addSpring(spring) {
	      this.removeSpring(spring);
	      this.state.springs.push(spring);
	      return spring;
	    }
	  }, {
	    key: "removeSpring",
	
	
	    /**
	     * @description remove a specific string from the springs array
	     * @memberOf Particle
	     * @param  {Object} spring
	     */
	    value: function removeSpring(_ref2) {
	      var p = _ref2.point.state;
	
	      var springs = this.state.springs;
	
	      for (var i = 0; i < springs.length; i++) {
	        if (p.x === springs[i].point.state.x && p.y === springs[i].point.state.y) {
	          springs.splice(i, 1);
	          break;
	        }
	      }
	    }
	  }, {
	    key: "springFromTo",
	
	
	    /**
	     * @memberOf Particle
	     * @description Given two particles calculate the
	     * spring force applied to both particles.
	     * @param  {Particle} particle
	     * @param  {Integer}  springy  Given offset for the particles
	     * @param  {Integer}  offset  The spring coefficent
	     * @return {Particle[]}
	     */
	    value: function springFromTo(particle) {
	      var springy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
	      var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
	
	      // Postion delta
	      var dx = particle.state.x - this.state.x;
	      var dy = particle.state.y - this.state.y;
	
	      // Setting up magnitude and angle of the vector
	      var distance = Math.hypot(dx, dy);
	      var springForce = (distance - offset) * springy;
	
	      // Spring acceleration vector
	      var sx = dx / distance * springForce;
	      var sy = dy / distance * springForce;
	
	      // Accelerate with the spring vector
	      this.accelerate(sx, sy);
	
	      // Accelerate the opposite direction.
	      particle.state.vx -= sx;
	      particle.state.vy -= sy;
	
	      return [this, particle];
	    }
	  }, {
	    key: "springToPoint",
	
	
	    /**
	     * @memberOf Particle
	     * @description Given a particle, a vector, and a spring coeffiencent accelerate
	     * the particle according to the distance its is from the point.
	     * @param  {Spring} spring A spring object.
	     * @return {Particle}
	     */
	    value: function springToPoint(spring) {
	      // Postion delta
	      var dx = spring.point.state.x - this.state.x;
	      var dy = spring.point.state.y - this.state.y;
	
	      // Setting up magnitude and angle of the vector
	      var distance = Math.hypot(dx, dy);
	      var springForce = (distance - spring.offset) * spring["spring"];
	
	      // Spring acceleration vector
	      var sx = dx / distance * springForce;
	      var sy = dy / distance * springForce;
	
	      // Accelerate with the spring vector
	      this.accelerate(sx, sy);
	
	      return [this, spring];
	    }
	  }, {
	    key: "handleSprings",
	
	
	    /**
	     * @memberOf Particle
	     * @description Apply spring point to all internal springs.
	     * @param  {springs} springs An array of springs to spring to.
	     * @return {Object[]}
	     */
	    value: function handleSprings() {
	      var springs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.springs;
	
	      for (var i = 0; i < springs.length; i++) {
	        this.springToPoint(springs[i]);
	      }
	
	      return springs;
	    }
	  }, {
	    key: "handleMasses",
	
	
	    /**
	     * @memberOf Particle
	     * @description For each mass in the masses array apply gravitate to it.
	     * @param  {Particles[]|Object[]} masses
	     * @return {Particles[]|Object[]}
	     */
	    value: function handleMasses() {
	      var masses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.masses;
	
	      for (var i = 0; i < masses.length; i++) {
	        this.gravitateTo(masses[i]);
	      }
	
	      return masses;
	    }
	  }], [{
	    key: "create",
	
	
	    /**
	     * @description Create a particle given a direction and magnitude.
	     * @memberOf Particle
	     * @param  {Object}   state optional state values to pass to create.
	     * @return {Particle} returns a particle
	     */
	    value: function create() {
	      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : clone(INITIAL_STATE);
	
	      // Extend the optional state on to the default state.
	      state = extend(true, clone(INITIAL_STATE), state);
	
	      // Create particle with the new options.
	      var particle = new Particle(state);
	
	      // Set length.
	      particle.setSpeed(state.magnitude);
	
	      // Set angle.
	      particle.setHeading(state.direction);
	
	      // Return new particle.
	      return particle;
	    }
	  }, {
	    key: "generate",
	
	
	    /**
	     * @memberOf Particle
	     * @description generate a bunch of particles.
	     * @param  {Number} number    The maximum amount of generated particles needed.
	     * @param  {Object} opts      Options to pass each particle
	     * @return {Array<Particle>}
	     */
	    value: function generate(number) {
	      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : clone(INITIAL_STATE);
	
	      var particles = [];
	
	      for (var i = 0; i < number; i++) {
	        particles.push(Particle.create(opts));
	      }
	
	      return particles;
	    }
	  }]);
	
	  return Particle;
	}();
	
	;
	
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
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* eslint max-len: 0 */
	
	//      
	
	
	/**
	 * @class Shapes
	 * @param {Object} ctx      Canvas context.
	 * @param {Object} document The document object.
	*/
	var Shapes = function () {
	
	  /**
	   * constructor
	   * @param  {HTMLCanvasElement} ctx
	   * @param  {Document} document
	   */
	  function Shapes(ctx, document) {
	    _classCallCheck(this, Shapes);
	
	    if (!ctx) {
	      throw new Error("Shapes: Please provide a context argument [arg::1]");
	    }
	
	    this.ctx = ctx;
	    this.document = document || window.document;
	  }
	
	  /**
	   * @memberOf Shapes
	   * @description draw a circle.
	   * @param {Number} x     The x coordinate of the circle.
	   * @param {Number} y     The y coordinate of the circle.
	   * @param {Number} r     The radius of the circle.
	   * @param {String} color The color of the circle.
	   */
	
	
	  _createClass(Shapes, [{
	    key: "circle",
	    value: function circle() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
	      var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
	      var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "#000000";
	
	      this.ctx.fillStyle = color;
	      this.ctx.beginPath();
	      this.ctx.arc(x, y, r, 0, Math.PI * 2, false);
	      this.ctx.fill();
	    }
	  }, {
	    key: "rect",
	
	
	    /**
	     * @memberOf Shapes
	     * @description Fill a rectangle
	     * @param  {Number} x     Starting point X
	     * @param  {Number} y     Starting point Y
	     * @param  {Number} w     Width of the rectangle
	     * @param  {Number} h     Height of the rectangle
	     * @param  {String} color A hex string.
	     */
	    value: function rect() {
	      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	      var w = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
	      var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;
	      var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
	      this.ctx.fillStyle = color;
	      this.ctx.fillRect(x, y, w, h);
	    }
	  }, {
	    key: "drawLineXY",
	
	
	    /**
	     * @memberOf Shapes
	     * @description Draw a line between these two points.
	     * @param  {Number} x0
	     * @param  {Number} y0
	     * @param  {Number} x1
	     * @param  {Number} y1
	     * @param  {string} style
	     */
	    value: function drawLineXY(x0, y0, x1, y1) {
	      var style = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "#000000";
	
	      this.ctx.beginPath();
	      this.ctx.strokeStyle = style;
	      this.ctx.moveTo(x0, y0);
	      this.ctx.lineTo(x1, y1);
	      this.ctx.stroke();
	    }
	  }, {
	    key: "drawLineVec",
	
	
	    /**
	     * drawLineVec
	     * @param  {Vector} vec0: Vector
	     * @param  {Vector} vec1: Vector
	     */
	    value: function drawLineVec(vec0, vec1) {
	      this.drawLineXY(vec0.get("x"), vec0.get("y"), vec1.get("x"), vec1.get("y"));
	    }
	  }, {
	    key: "drawLinePoints",
	
	
	    /**
	     * drawLinePoints
	     * @param  {Object} firstPoint
	     * @param  {Array<Object>} points
	     */
	    value: function drawLinePoints(points) {
	      if (!points[0]) {
	        throw new Error("Please provide valid inputs");
	      }
	
	      if (points.length < 1) {
	        throw new Error("Must be given a a number of points greater than 1");
	      }
	
	      var firstPoint = points.shift();
	
	      this.ctx.beginPath();
	      this.ctx.moveTo(firstPoint.x, firstPoint.y);
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = points[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var point = _step.value;
	
	          this.ctx.lineTo(point.x, point.y);
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
	      this.ctx.closePath();
	    }
	  }, {
	    key: "grid",
	
	
	    /**
	     * @memberOf Shapes
	     * @param  {number} width
	     * @param  {number} height
	     * @param  {Number} gridSize
	     * @param  {String} color
	     */
	    value: function grid(width, height) {
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
	    }
	  }, {
	    key: "pCircle",
	
	
	    /**
	     * pCircle
	     * @memberOf Shapes
	     * @param  {Particle} p
	     * @return {Particle}
	     */
	    value: function pCircle(particle) {
	      this.circle(particle.state.x, particle.state.y, particle.state.radius, particle.state.color);
	      return particle;
	    }
	  }, {
	    key: "pRect",
	
	
	    /**
	     * pRect
	     * @memberOf Shapes
	     * @param  {Particle} p
	     * @return {Particle}
	     */
	    value: function pRect(particle) {
	      this.rect(particle.state.x, particle.state.y, particle.state.width, particle.state.height, particle.state.color);
	      return particle;
	    }
	  }]);
	
	  return Shapes;
	}();
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyZTlhOTEyYjJlYjMzZGJlZWRmZCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3ZlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwid2VicGFjazovLy8uL34vZXh0ZW5kL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Nsb25lRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUNsb25lLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19TdGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTGlzdENhY2hlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hc3NvY0luZGV4T2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvZXEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19saXN0Q2FjaGVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zdGFja0dldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fc3RhY2tIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19NYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fTWFwQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX0hhc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbmF0aXZlQ3JlYXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoR2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19oYXNoU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fZ2V0TWFwRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faXNLZXlhYmxlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fbWFwQ2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Fzc2lnblZhbHVlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQnVmZmVyLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvc3R1YkZhbHNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pc0luZGV4LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pc0xlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZVVuYXJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYmFzZUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19iYXNlS2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Nsb25lQnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9zdHViQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2NvcHlTeW1ib2xzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19nZXRBbGxLZXlzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX1NldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fV2Vha01hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZURhdGFWaWV3LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fYWRkTWFwRW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19tYXBUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVJlZ0V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2FkZFNldEVudHJ5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvX2Jhc2VDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi9zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90d2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGliL2V2ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9saWIvY2xvY2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xpYi90aWNrZXIuanMiXSwibmFtZXMiOlsiVmVjdG9yIiwicmVxdWlyZSIsIlBhcnRpY2xlIiwiVXRpbHMiLCJTaGFwZXMiLCJZQVQiLCJDbG9jayIsIlRpY2tlciIsIm1vZHVsZSIsImV4cG9ydHMiLCJ1dGlscyIsIklOSVRJQUxfU1RBVEUiLCJ4IiwieSIsInN0YXRlIiwidmVjIiwicHJvcCIsInZhbCIsImhhc093blByb3BlcnR5IiwicmFkIiwibGVuZ3RoIiwiZ2V0TGVuZ3RoIiwic2V0IiwiTWF0aCIsImNvcyIsInNpbiIsImdldEFuZ2xlIiwiZ2V0IiwiaHlwb3QiLCJhdGFuMiIsIm1pbiIsIm1heCIsImxlcnAiLCJyYW5kb20iLCJjcmVhdGUiLCJ4TWluIiwieE1heCIsInlNaW4iLCJ5TWF4IiwicmFuZG9tQmV0d2VlbiIsInYyIiwiYW5nbGUiLCJ2MSIsImRWZWMiLCJzdWJ0cmFjdCIsInZlYzAiLCJ2ZWMxIiwieDAiLCJ5MCIsIngxIiwieTEiLCJyYW5nZUludGVyc2VjdCIsIm5vcm1hbGl6ZSIsIm1hcCIsInZhbHVlIiwic3JjTWluIiwic3JjTWF4IiwiZGVzdE1pbiIsImRlc3RNYXgiLCJwZXJjZW50IiwiY2xhbXAiLCJmbG9vciIsImRpc3RhbmNlWFkiLCJkeCIsImR5IiwiaW5SYW5nZSIsIm1pbjAiLCJtYXgwIiwibWluMSIsIm1heDEiLCJjb2xsaXNpb25SZWN0IiwicjAiLCJyMSIsInIweCIsInIweSIsInIxeCIsInIxeSIsInIwdyIsIndpZHRoIiwicjBoIiwiaGVpZ2h0IiwicjF3IiwicjFoIiwiY29sbGlzaW9uQ2lyY2xlIiwiYzEiLCJjMiIsInJhZGkiLCJyYWRpdXMiLCJkaXN0YW5jZSIsImNvbGxpc2lvbkNpcmNsZVBvaW50IiwiY2lyY2xlIiwiZGlzdCIsImNvbGxpc2lvbkNpcmNsZVZlYyIsImNvbGxpc2lvblJlY3RQb2ludCIsInJlY3QiLCJyZWN0WCIsInJlY3RZIiwiY29sbGlzaW9uUmVjdFZlYyIsInRocm90dGxlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwiY29udGV4dCIsImFyZ3MiLCJyZXN1bHQiLCJ0aW1lb3V0IiwicHJldmlvdXMiLCJsYXRlciIsImxlYWRpbmciLCJEYXRlIiwibm93IiwiYXBwbHkiLCJyZW1haW5pbmciLCJjbGVhclRpbWVvdXQiLCJ0cmFpbGluZyIsInNldFRpbWVvdXQiLCJzZXRMZW5ndGgiLCJFcnJvciIsInNldEFuZ2xlIiwiZGVnVG9SYWQiLCJkZWciLCJQSSIsInJhZFRvRGVnIiwicm91bmRUb1BsYWNlcyIsInBsYWNlcyIsIm11bHQiLCJwb3ciLCJyb3VuZCIsInJvdW5kVG9NdWx0aXBsZSIsIm5lYXJlc3QiLCJTdHJpbmciLCJxdWFkcmF0aWNCZXppZXIiLCJ2MCIsInQiLCJjdWJpY0JlemllciIsInYzIiwicXVhZHJhdGljQmV6aWVyUG9pbnQiLCJwMCIsInAxIiwicDIiLCJjdWJpY0JlemllclBvaW50IiwicDMiLCJtdWx0aUN1cnZlIiwicG9pbnRzIiwiY3R4IiwibWlkWCIsIm1pZFkiLCJtb3ZlVG8iLCJpIiwicXVhZHJhdGljQ3VydmVUbyIsImVhc2UiLCJhIiwiYiIsInRocmVzaG9sZCIsImFicyIsImVhc2VUbyIsIm9yaWdpbiIsInRhcmdldCIsImlzT2JqZWN0IiwiZGF0YSIsInRvU3RyaW5nIiwiY2FsbCIsInVuaXF1ZSIsImFycmF5IiwicmVkdWNlIiwiaW5kZXhPZiIsInB1c2giLCJwZXJzcGVjdGl2ZSIsImZvY2FsTGVuZ3RoIiwiZXh0ZW5kIiwiY2xvbmUiLCJ2eCIsInZ5IiwiZ3Jhdml0eSIsIm1hZ25pdHVkZSIsIm1hc3MiLCJkaXJlY3Rpb24iLCJmcmljdGlvbiIsInNwcmluZ3MiLCJtYXNzZXMiLCJjb2xvciIsImF4IiwiYXkiLCJmcmljIiwiZ3JhdiIsImhhbmRsZVNwcmluZ3MiLCJoYW5kbGVNYXNzZXMiLCJhY2NlbGVyYXRlIiwidXBkYXRlUG9zIiwic3BlZWQiLCJnZXRIZWFkaW5nIiwiZ2V0U3BlZWQiLCJwIiwicmVtb3ZlTWFzcyIsInNwbGljZSIsInBhcnRpY2xlIiwiZGlzdFNxcmQiLCJzcXJ0IiwiZm9yY2UiLCJ1bmRlZmluZWQiLCJzcHJpbmciLCJyZW1vdmVTcHJpbmciLCJwb2ludCIsInNwcmluZ3kiLCJvZmZzZXQiLCJzcHJpbmdGb3JjZSIsInN4Iiwic3kiLCJzcHJpbmdUb1BvaW50IiwiZ3Jhdml0YXRlVG8iLCJzZXRTcGVlZCIsInNldEhlYWRpbmciLCJudW1iZXIiLCJvcHRzIiwicGFydGljbGVzIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJyIiwiZmlsbFN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwiZmlsbCIsInciLCJoIiwiZmlsbFJlY3QiLCJzdHlsZSIsInN0cm9rZVN0eWxlIiwibGluZVRvIiwic3Ryb2tlIiwiZHJhd0xpbmVYWSIsImZpcnN0UG9pbnQiLCJzaGlmdCIsImNsb3NlUGF0aCIsImdyaWRTaXplIiwiZXZlbnQiLCJERUZBVUxUUyIsIm9iaiIsInByb3BzIiwiZWFzaW5nIiwiZHVyYXRpb24iLCJldmVudEluc3RhbmNlIiwiaW5pdCIsIk9iamVjdCIsImluaXRUd2VlbiIsImNsb2NrIiwiX2Nsb2NrIiwiZnBzIiwicGFyZW50IiwidHdlZW5zIiwiZWFzaW5nRm5zIiwiYyIsIm4iLCJlYXNlSW5RdWFkIiwiZWFzZU91dFF1YWQiLCJlYXNlSW5PdXRRdWFkIiwib24iLCJ1cGRhdGVUd2VlbnMiLCJ1cGRhdGVUZWVucyIsImZvckVhY2giLCJ0d2VlbiIsInRpY2tlciIsIm5lZWRzVXBkYXRlIiwidXBkYXRlIiwiU1RBVEUiLCJyZW1vdmUiLCJzdG9wcGVkIiwiY29uc29sZSIsImxvZyIsIllBVEluc3RhbmNlIiwiX29wdHMiLCJhc3NpZ24iLCJpZCIsInNvbWUiLCJjcmVhdGVTbGF2ZSIsInJld2luZCIsInN0b3AiLCJwcm9wc0JlZm9yZVR3ZWVuIiwic3RhcnQiLCJzdGFydEFsbCIsInN0b3BBbGwiLCJkZWxheSIsImZpbmlzaCIsInJlbW92ZVNsYXZlIiwiZmlsdGVyIiwiZGVsdGEiLCJ0aW1lU2luY2VTdGFydCIsIm5vcm0iLCJtcyIsImtleSIsIkV2ZW50IiwiaW5pdEV2ZW50IiwiY2FsbGJhY2tzIiwiZW1pdCIsInJlc3QiLCJUeXBlRXJyb3IiLCJjYWxsYmFjayIsImZuIiwiYmluZCIsImV2ZW50cyIsInNwbGl0IiwiZSIsImV2ZXJ5IiwiY2IiLCJjb2wiLCJ3YXJuIiwib2ZmIiwibGlzdGVuZXJzIiwia2V5cyIsIm9uY2UiLCJzZWxmIiwid3JhcCIsInJlbW92ZUxpc3RlbmVyIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZmlyZSIsImFkZExpc3RlbmVyIiwiTUFYX0ZQUyIsIm5vb3AiLCJpbml0Q2xvY2siLCJzbGF2ZXMiLCJpbmRleCIsInJBRiIsInN0YXJ0VGltZSIsImxhc3RUaW1lIiwic3RvcFRpbWUiLCJOYU4iLCJwZXJmb3JtYW5jZSIsImxvb3AiLCJuZXdUaW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2hpcFNsYXZlcyIsImNsb2NrU3RhcnQiLCJzdG9wQ2xvY2siLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyU2xhdmVzIiwic2xhdmUiLCJudWRnZSIsInRpbWVTdGFtcCIsInJlc2V0IiwicmVtb3ZlQWxsU2xhdmVzIiwiU1RPUFBFRCIsIlJVTk5JTkciLCJET05FIiwiaW50ZXJ2YWwiLCJuYW1lIiwidGlja0ZvciIsInRpbWVTaW5jZVN0YXJ0MiIsInN0cmluZyIsInR5cGUiLCJuZXdEdXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7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QTtBQUNBO0FBQ0EsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsWUFBVyxPQUFPO0FBQ2xCLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsRUFBRTtBQUNiLGNBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLEVBQUU7QUFDYixjQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzNEQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVyxFQUFFO0FBQ2IsY0FBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVcsU0FB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IjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInBhcnRpY2xlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDJlOWE5MTJiMmViMzNkYmVlZGZkIiwiY29uc3QgVmVjdG9yID0gcmVxdWlyZShcIi4vbGliL3ZlY3RvcnNcIik7XG5jb25zdCBQYXJ0aWNsZSA9IHJlcXVpcmUoXCIuL2xpYi9wYXJ0aWNsZVwiKTtcbmNvbnN0IFV0aWxzID0gcmVxdWlyZShcIi4vbGliL3V0aWxzXCIpO1xuY29uc3QgU2hhcGVzID0gcmVxdWlyZShcIi4vbGliL3NoYXBlc1wiKTtcbmNvbnN0IFlBVCA9IHJlcXVpcmUoXCIuL2xpYi90d2VlblwiKTtcbmNvbnN0IENsb2NrID0gcmVxdWlyZShcIi4vbGliL2Nsb2NrLmpzXCIpO1xuY29uc3QgVGlja2VyID0gcmVxdWlyZShcIi4vbGliL3RpY2tlci5qc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIFZlY3RvcixcbiAgUGFydGljbGUsXG4gIFV0aWxzLFxuICBTaGFwZXMsXG4gIFlBVCxcbiAgVGlja2VyLFxuICBDbG9jayxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi5qcyIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbi8vICAgICAgXG5cbmNvbnN0IHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHMuanNcIik7XG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgPSB7XG4gIHg6IDAsXG4gIHk6IDEsXG59O1xuXG4vKipcbiAqIFZlY3RvciBjbGFzcyBpcyByZXNwb25zaWJsZSBmb3IgZG9pbmcgdmVjdG9yIG9wZXJhdGlvbnMgYW5kIHN0b3JpbmdcbiAqIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzIG9mIHRoZSB2ZWN0b3IuXG4gKi9cblxuLyoqXG4gKiBAY2xhc3MgVmVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhdGUgb2JqZWN0LlxuICovXG5jbGFzcyBWZWN0b3Ige1xuICAgICAgICAgIFxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgXG4gICAgXG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSAge09iamVjdH0gc3RhdGUgSW5pdGlhbCBzdGF0ZVxuICAgKi9cbiAgY29uc3RydWN0b3Ioc3RhdGUgICAgICAgICA9IElOSVRJQUxfU1RBVEUpIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIC0gRWFzeSB3YXkgdG8gaW5zdGFudGlhdGUgYSB2ZWN0b3IuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7SW50fSB4XG4gICAqIEBwYXJhbSAge0ludH0geVxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgQSBvYmplY3QgaW5oZXJpdGluZyBmcm9tIFZlY3Rvci5cbiAgICovXG4gIGNyZWF0ZSh4ICAgICAgICAgPSAwLCB5ICAgICAgICAgPSAwKSAgICAgICAgIHtcbiAgICBjb25zdCB2ZWMgPSBuZXcgVmVjdG9yKHt4LCB5fSk7XG4gICAgcmV0dXJuIHZlYztcbiAgfTtcblxuICAvKipcbiAgICogU2V0IC0gQSBzZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7Kn0gcHJvcFxuICAgKiBAcGFyYW0gIHsqfSB2YWxcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gSXMgdGhlIHByb3AgeW91ciBwYXNzaW5nIGluIGV4c2lzdC5cbiAgICovXG4gIHNldChwcm9wICAgICAgICAsIHZhbCAgICAgKSAgICAgICAgICB7XG4gICAgLy8gVE9ETzogQWRkIGNoZWNrIHZhbCBpcyBudW1iZXJcbiAgICAvLyAxLiBDcmVhdGUgdXRpbHMuaXNOdW1iZXIgZnVuY3Rpb24uXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgdGhpcy5zdGF0ZVtwcm9wXSA9IHZhbDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAvKipcbiAgICogZ2V0IC0gQSBnZXR0ZXIgZm9yIHRoZSB2ZWN0b3IgY2xhc3MuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7U3RyaW5nfSBwcm9wICBUaGUgcHJvcCB0byBzZXQgb24gc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZhbHVlfSAgICAgICAgVGhlIHZhbHVlIGFzc29zaWF0ZWQgd2l0aCB0aGUgcHJvcC5cbiAgICovXG4gIGdldChwcm9wICAgICAgICApICAgICAge1xuICAgIHJldHVybiB0aGlzLnN0YXRlW3Byb3BdO1xuICB9O1xuXG4gIC8qKlxuICAgKiBzZXRBbmdsZSAtIFBsb3QgdGhlIGNvcnJkaW5hdGVzIGJhc2VkIG9uIHJhZGlhbnMgZ2l2ZW4uXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtSYWRpYW5zfSByYWQgQSBmbG9hdGluZyBwb2ludCBudW1iZXIuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHNldEFuZ2xlKHJhZCAgICAgICAgKSAgICAgICAgIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cbiAgICB0aGlzLnNldChcInhcIiwgTWF0aC5jb3MocmFkKSAqIGxlbmd0aCk7XG4gICAgdGhpcy5zZXQoXCJ5XCIsIE1hdGguc2luKHJhZCkgKiBsZW5ndGgpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIHNldExlbmd0aCAtIFRha2VzIGEgbGVuZ3RoIGFuZCBzZXRzIGNvb3JkaW5hdGUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtJbnRlZ2VyfSBsZW5ndGhcbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgc2V0TGVuZ3RoKGxlbmd0aCAgICAgICAgKSAgICAgICAgIHtcbiAgICAvLyBUT0RPOiBBZGQgY2hlY2sgcmFkIGlzIG51bWJlclxuICAgIC8vIDEuIENyZWF0ZSB1dGlscy5pc051bWJlciBmdW5jdGlvbi5cblxuICAgIGNvbnN0IHJhZCA9IHRoaXMuZ2V0QW5nbGUoKTtcblxuICAgIHRoaXMuc2V0KFwieFwiLCBNYXRoLmNvcyhyYWQpICogbGVuZ3RoKTtcbiAgICB0aGlzLnNldChcInlcIiwgTWF0aC5zaW4ocmFkKSAqIGxlbmd0aCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogZ2V0TGVuZ3RoIC0gR2V0cyBsZW5ndGggb2YgdGhlIGNvb3JkaW5hdGVzIGZyb20gY2VudGVyIHBsYW5lLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEByZXR1cm4ge0ludGVnZXJ9IENvb3JpZGluYXRlcy5cbiAgICovXG4gIGdldExlbmd0aCgpICAgICAgICAge1xuICAgIGNvbnN0IHggPSAodGhpcy5nZXQoXCJ4XCIpICAgICAgICApO1xuICAgIGNvbnN0IHkgPSAodGhpcy5nZXQoXCJ5XCIpICAgICAgICApO1xuICAgIHJldHVybiBNYXRoLmh5cG90KHgsIHkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBnZXRBbmdsZSAtIEdldCB0aGUgYW5nbGUgb2YgY29vcmRpbmF0ZXMgZnJvbSBjZW50ZXIgcGxhbmUuXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHJldHVybiB7SW50ZWdlcn0gQ29vcmlkaW5hdGVzLlxuICAgKi9cbiAgZ2V0QW5nbGUoKSAgICAgICAgIHtcbiAgICBjb25zdCB4ID0gKHRoaXMuZ2V0KFwieFwiKSAgICAgICAgKTtcbiAgICBjb25zdCB5ID0gKHRoaXMuZ2V0KFwieVwiKSAgICAgICAgKTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih5LCB4KTtcbiAgfTtcblxuICAvKipcbiAgICogcmFuZG9tIGdlbmVyYXRlIGEgdmVjdG9yIHdpdGggcmFuZG9tIHN0YXRlcy5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge051bWJlcn0gbWluIC0gQSBtaW4gcmFuZ2Ugb24gdGhlIHJhbmRvbSB2ZWN0b3Igc3RhdGUuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBtYXggLSBBIG1heCByYW5nZSBvbiB0aGUgcmFuZG9tIHZlY3RvciBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfVxuICAgKi9cbiAgcmFuZG9tKG1pbiAgICAgICAgPTEsIG1heCAgICAgICAgPTEwKSAgICAgICAgIHtcbiAgICBjb25zdCB4ID0gdXRpbHMubGVycChNYXRoLnJhbmRvbSgpLCBtaW4sIG1heCk7XG4gICAgY29uc3QgeSA9IHV0aWxzLmxlcnAoTWF0aC5yYW5kb20oKSwgbWluLCBtYXgpO1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZGVzY3JpcHRpb24gUmV0dXJuIGEgdmVjdG9yIHRoYXQgaGFzIGEgeCBiZXR3ZWVuIHRoZSBnaXZlbiByYW5nZS5cbiAgICogICAgICAgICAgICAgIGFuZCB5IGdpdmVuIGEgcmFuZ2UuXG4gICAqIEBwYXJhbSAge051bWJlcn0geE1pbiBNaW5tdW0geCB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHhNYXggTWF4aW11bSB4IHZhbHVlXG4gICAqIEBwYXJhbSAge051bWJlcn0geU1pbiBNaW5tdW0geSB2YWx1ZVxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHlNYXggTWF4aW11bSB5IHZhbHVlXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgICovXG4gIHJhbmRvbUJldHdlZW4oeE1pbiAgICAgICAgPTAsIHhNYXggICAgICAgID0xMCwgeU1pbiAgICAgICAgPTAsIHlNYXggICAgICAgID0xMCkgICAgICAgICB7XG4gICAgeE1heCA9IE1hdGgubWF4KHhNaW4sIHhNYXgpO1xuICAgIHhNaW4gPSBNYXRoLm1pbih4TWluLCB4TWF4KTtcbiAgICB5TWF4ID0gTWF0aC5tYXgoeU1pbiwgeU1heCk7XG4gICAgeU1pbiA9IE1hdGgubWluKHlNaW4sIHlNYXgpO1xuXG4gICAgY29uc3QgeSA9ICh1dGlscy5yYW5kb21CZXR3ZWVuKHlNaW4sIHlNYXgpICAgICAgICApO1xuICAgIGNvbnN0IHggPSAodXRpbHMucmFuZG9tQmV0d2Vlbih4TWluLCB4TWF4KSAgICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZSh4LCB5KTtcbiAgfTtcblxuICAvKipcbiAgICogYWRkIC0gU2hvdWxkIGFkZCB2ZWN0b3JzIHRvZ2V0aGVyIGdpdmVuIGEgdmVjdG9yXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IHYyIEEgZ2l2ZW4gdmVjdG9yIHRvIGFkZC5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB3aXRoIGNvb3JpZG5hdGVzLCBvciBtdWx0aXBsZSB2ZWN0b3JzLlxuICAgKi9cbiAgYWRkKHYyICAgICAgICApICAgICAgICAge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZShcbiAgICAgIHRoaXMuZ2V0KFwieFwiKSArIHYyLmdldChcInhcIiksXG4gICAgICB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogc3VidHJhY3QgLSBzaG91bGQgc3VidHJhY3QgdGhlIGdpdmVuIHZlY3RvciB3aXRoIGl0cyBvd24gdmVjdG9yLlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdjIgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7VmVjdG9yfSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIGEgcmVkdWNlZCBzdGF0ZS5cbiAgICogQGV4YW1wbGUge3g6IDIsIHk6IDJ9IC0ge3g6IDIsIHk6IDJ9ID0ge3g6IDAsIHk6IDB9XG4gICAqL1xuICBzdWJ0cmFjdCh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGUoXG4gICAgICB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpLFxuICAgICAgdGhpcy5nZXQoXCJ5XCIpIC0gdjIuZ2V0KFwieVwiKVxuICAgICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIE11bGl0cGx5aW5nIHZlY3RvcnMgdG9nZXRoZXJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAZXhhbXBsZSB7eDogMiwgeTogMn0gKiB7eDogMiwgeTogMn0gPSB7eDogNCwgeTogNH1cbiAgICogQHBhcmFtICB7VmVjdG9yfSB2MiBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtWZWN0b3J9ICAgIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgYSByZWR1Y2VkIHN0YXRlLlxuICAgKi9cbiAgbXVsdGlwbHkodjIgICAgICAgICkgICAgICAgICB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpICogdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAqIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBEaXZpZGUgdmVjdG9ycyB0b2dldGhlci5cbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHYyIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn0gICAgQSB2ZWN0b3IgdGhhdCBjb250YWlucyBhIHJlZHVjZWQgc3RhdGUuXG4gICAqL1xuICBkaXZpZGUodjIgICAgICAgICkgICAgICAgICB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKFxuICAgICAgdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKSxcbiAgICAgIHRoaXMuZ2V0KFwieVwiKSAvIHYyLmdldChcInlcIilcbiAgICApO1xuICB9O1xuXG4gIC8qKlxuICAgKiBBZGRzIHRvIGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgYWRkVG8odjIgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpICsgdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgKyB2Mi5nZXQoXCJ5XCIpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTdWJ0cmFjdHMgZnJvbSBjdXJyZW50IHN0YXRlIHRoZSBzdGF0ZSBvZiB2MlxuICAgKiBAbWVtYmVyT2YgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSBbdjJdIC0gQSB2ZWN0b3IgdGhhdCBjb250YWlucyBzdGF0ZS5cbiAgICogQHJldHVybiB7T2JqZWN0fSBbc3RhdGVdIC0gS2V5IHZhbHVlIHBhaXIgb2YgY29vcmRpbmF0ZXNcbiAgICovXG4gIHN1YnRyYWN0RnJvbSh2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICB0aGlzLnN0YXRlLnggPSB0aGlzLmdldChcInhcIikgLSB2Mi5nZXQoXCJ4XCIpO1xuICAgIHRoaXMuc3RhdGUueSA9IHRoaXMuZ2V0KFwieVwiKSAtIHYyLmdldChcInlcIik7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIG11bGl0cGxpZXMgYnkgY3VycmVudCBzdGF0ZSB0aGUgc3RhdGUgb2YgdjJcbiAgICogQG1lbWJlck9mIFZlY3RvclxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gW3YyXSAtIEEgdmVjdG9yIHRoYXQgY29udGFpbnMgc3RhdGUuXG4gICAqIEByZXR1cm4ge09iamVjdH0gW3N0YXRlXSAtIEtleSB2YWx1ZSBwYWlyIG9mIGNvb3JkaW5hdGVzXG4gICAqL1xuICBtdWx0aXBseUJ5KHYyICAgICAgICApICAgICAgICAge1xuICAgIHRoaXMuc3RhdGUueCA9IHRoaXMuZ2V0KFwieFwiKSAqIHYyLmdldChcInhcIik7XG4gICAgdGhpcy5zdGF0ZS55ID0gdGhpcy5nZXQoXCJ5XCIpICogdjIuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBEaXZpZGVzIGJ5IGN1cnJlbnQgc3RhdGUgdGhlIHN0YXRlIG9mIHYyXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtIHtWZWN0b3J9IFt2Ml0gLSBBIHZlY3RvciB0aGF0IGNvbnRhaW5zIHN0YXRlLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFtzdGF0ZV0gLSBLZXkgdmFsdWUgcGFpciBvZiBjb29yZGluYXRlc1xuICAgKi9cbiAgZGl2aWRlQnkodjIgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS54ID0gdGhpcy5nZXQoXCJ4XCIpIC8gdjIuZ2V0KFwieFwiKTtcbiAgICB0aGlzLnN0YXRlLnkgPSB0aGlzLmdldChcInlcIikgLyB2Mi5nZXQoXCJ5XCIpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBWZWN0b3JcbiAgICogQHBhcmFtICB7TnVtYmVyfSBhbmdsZSBBIG51bWJlciBvZiByYWRpYW5zIHRvIHJvdGF0ZSBjbG9ja3dpc2UgYnkuXG4gICAqIEByZXR1cm4ge1ZlY3Rvcn1cbiAgKi9cbiAgcm90YXRlQnkoYW5nbGUgICAgICAgICkgICAgICAgICB7XG4gICAgY29uc3QgY29zID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHNpbiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHggPSB0aGlzLnN0YXRlLnggKiBjb3MgLSB0aGlzLnN0YXRlLnkgKiBzaW47XG4gICAgY29uc3QgeSA9IHRoaXMuc3RhdGUueSAqIGNvcyArIHRoaXMuc3RhdGUueCAqIHNpbjtcblxuICAgIHRoaXMuc3RhdGUueCA9IHg7XG4gICAgdGhpcy5zdGF0ZS55ID0geTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiB2MVxuICAgKiBAcGFyYW0ge1ZlY3Rvcn0gdjEgVmVjdG9yXG4gICAqIEBwYXJhbSB7VmVjdG9yfSB2MiBWZWN0b3JcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGRpc3RhbmNlQmV0d2Vlbih2MSAgICAgICAgLCB2MiAgICAgICAgKSAgICAgICAgIHtcbiAgICBjb25zdCBkVmVjID0gdjEuc3VidHJhY3QodjIpO1xuICAgIHJldHVybiBNYXRoLmh5cG90KGRWZWMuZ2V0KFwieFwiKSwgZFZlYy5nZXQoXCJ5XCIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvcyB2ZWN0b3JzIHNlZSBpZiB0aGV5IGludGVyc2VjdC5cbiAgICogQG1lbWJlck9mIFV0aWxzXG4gICAqIEBwYXJhbSAge1ZlY3Rvcn0gdmVjMFxuICAgKiBAcGFyYW0gIHtWZWN0b3J9IHZlYzFcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyB2ZWN0b3JJbnRlcnNlY3QodmVjMCAgICAgICAgLCB2ZWMxICAgICAgICApICAgICAgICAgIHtcbiAgICBjb25zdCB4MCA9IHZlYzAuZ2V0KFwieFwiKTtcbiAgICBjb25zdCB5MCA9IHZlYzAuZ2V0KFwieVwiKTtcbiAgICBjb25zdCB4MSA9IHZlYzEuZ2V0KFwieFwiKTtcbiAgICBjb25zdCB5MSA9IHZlYzEuZ2V0KFwieVwiKTtcbiAgICByZXR1cm4gdXRpbHMucmFuZ2VJbnRlcnNlY3QoeDAsIHkwLCB4MSwgeTEpO1xuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3ZlY3RvcnMuanMiLCIvLyAgICAgIFxuXG4vKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGlzIGNvbXBvc2VkIG9mIHNtYWxsIGZ1bmN0aW9uIHRoYXRcbiAqIHNob3VsZCBiZSB1c2VkIHdoZW4gbmVlZGVkLiBNb3N0IGZ1bmN0aW9ucyBhcmUgcHVyZVxuICogYW5kIG9ubHkgcmV0dXJuIHZhbHVlcy4gRm9yIG1vcmUgaW5mbyByZWFkIHRoZSBkb2NzLlxuICovXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG4vKipcbiAqIG5vcm1hbGl6ZSAtIFRha2VzIGEgbWF4IGFuZCBtaW4gdmFsdWUgYW5kIHJldHVybnNcbiAqIGEgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLCB0aGF0IHdoZW4gbXVsdGlwbGllZFxuICogYnkgb25lIGh1bmRyZWQgcmVwcmVzZW50cyBhIHByZWNlbnRhZ2Ugb2YgdGhlIHJhbmdlXG4gKiBiZXR3ZWVuIG1heCBhbmQgbWluLlxuICpcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50fSB2YWwgLSBUaGUgdmFsdWUgdGhhdCBsaWVzIGluIHRoZSByYW5nZS5cbiAqIEBwYXJhbSAge0ludH0gbWluIC0gVGhlIG1heGl1bSB2YWx1ZSBpbiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0gIHtJbnR9IG1heCAtIFRoZSBtaW5pbXVtIHZhbHVlIGluIHRoZSByYW5nZS5cbiAqIEByZXR1cm4ge0ludH0gSW50IC0gVGhlIHZhbHVlIHJlcHJlc2VudGVkIGluIHRoYXQgcmFuZ2UuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWwgICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuICgodmFsIC0gbWluKSAvIChtYXggLSBtaW4pICAgICAgICApO1xufTtcblxuLyoqXG4gKiBsZXJwIC0gbGluZWFyIGludGVycG9sYXRpb24gdGFrZXMgYSByYW5nZSBhbmQgYSBnaXZlbiBub3JtYWxpemVkIHZhbHVlXG4gKiBhbmQgcmV0dXJucyBhIHZhbHVlIHRoYXQgcmVwcmVzZW50cyB0aGF0IG5vcm1hbGl6ZWQgdmFsdWUgaW4gdGhhdCByYW5nZS5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7SW50ZXJnZXJ9IHZhbFxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1pblxuICogQHBhcmFtICB7SW50ZXJnZXJ9IG1heFxuICogQHJldHVybiB7SW50ZXJnZXJ9XG4gKi9cbmZ1bmN0aW9uIGxlcnAodmFsICAgICAgICAsIG1pbiAgICAgICAgLCBtYXggICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiAobWF4IC0gbWluKSAqIHZhbCArIG1pbjtcbn07XG5cbi8qKlxuICogbWFwIC0gR2l2ZW4gMiBzZXQgb2YgdmFsdWVzIG1hcCB0aGVtIHRvIGFub3RoZXIgc2V0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNyY01pblxuICogQHBhcmFtICB7bnVtYmVyfSBzcmNNYXhcbiAqIEBwYXJhbSAge251bWJlcn0gZGVzdE1pblxuICogQHBhcmFtICB7bnVtYmVyfSBkZXN0TWF4XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIG1hcCh2YWx1ZSAgICAgICAgLCBzcmNNaW4gICAgICAgICwgc3JjTWF4ICAgICAgICAsIGRlc3RNaW4gICAgICAgICwgZGVzdE1heCAgICAgICAgKSAgICAgICAgIHtcbiAgc3JjTWF4ID0gKE1hdGgubWF4KHNyY01heCwgc3JjTWluKSAgICAgICAgKTtcbiAgc3JjTWluID0gKE1hdGgubWluKHNyY01heCwgc3JjTWluKSAgICAgICAgKTtcbiAgZGVzdE1pbiA9IChNYXRoLm1pbihkZXN0TWluLCBkZXN0TWF4KSAgICAgICAgKTtcbiAgZGVzdE1heCA9IChNYXRoLm1heChkZXN0TWluLCBkZXN0TWF4KSAgICAgICAgKTtcbiAgcmV0dXJuIGxlcnAobm9ybWFsaXplKHZhbHVlLCBzcmNNaW4sIHNyY01heCksIGRlc3RNaW4sIGRlc3RNYXgpO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gVGFrZXMgYSB2YWx1ZSBhbmQgcmV0dXJucyBhIHByZWNlbnRhZ2UuXG4gKiAgICAgICAgICAgICAgeW91IGNhbiBwYXNzIGFyYml0cmFyeSBsYXJnZSBudW1iZXJzIGluIGJ1dCB0aGF0cyBub3RcbiAqICAgICAgICAgICAgICB0aGUgaW50ZW5kZWQgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtICB7RmxvYXR9IHZhbCBcdEEgdmFsdWUuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEByZXR1cm4ge1BlcmNlbnR9ICAgIEEgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHBlcmNlbnQodmFsICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gKCh2YWwgKiAxMDApICAgICAgICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBudW1iZXIgYW5kIGEgcmFuZ2UgcmV0dXJuIHRoZVxuICogICAgICAgICAgICAgIHZhbHVlIGJldHdlZW4gdGhhdCByYW5nZSBvciB0aGUgbWF4IG51bWJlciBvciBtaW4gbnVtYmVyLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtICB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gY2xhbXAodmFsdWUgICAgICAgICwgbWluICAgICAgICAsIG1heCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihtaW4sIG1heCkpLCBNYXRoLm1heChtaW4sIG1heCkpO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIG51bWJlcnMgcmV0dXJuIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB4XG4gKiBAcGFyYW0gIHtJbnRlZ2VyfSB5XG4gKiBAcmV0dXJuIHtJbnRlZ2VyfVxuICovXG5mdW5jdGlvbiByYW5kb21CZXR3ZWVuKHggICAgICAgICwgeSAgICAgICAgKSAgICAgICAgIHtcbiAgbGV0IG1pbiA9IE1hdGgubWluKHgsIHkpO1xuICBsZXQgbWF4ID0gTWF0aC5tYXgoeCwgeSk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0d28gY29vcmRpbmF0ZXMgcmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSB0d28uXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0geDBcbiAqIEBwYXJhbSAge051bWJlcn0geTBcbiAqIEBwYXJhbSAge051bWJlcn0geDFcbiAqIEBwYXJhbSAge051bWJlcn0geTFcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VYWSh4MCAgICAgICAgLCB5MCAgICAgICAgLCB4MSAgICAgICAgLCB5MSAgICAgICAgKSAgICAgICAgIHtcbiAgY29uc3QgZHggPSB4MCAtIHgxO1xuICBjb25zdCBkeSA9IHkwIC0geTE7XG4gIHJldHVybiBNYXRoLmh5cG90KGR4LCBkeSk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBnaXZlbiBhIG51bWJlclxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IHZhbFxuICogQHBhcmFtICB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSAge051bWJlcn0gbWF4XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpblJhbmdlKHZhbCAgICAgICAgLCBtaW4gICAgICAgICwgbWF4ICAgICAgICApICAgICAgICAgIHtcbiAgcmV0dXJuICh2YWwgPD0gTWF0aC5tYXgobWF4LCBtaW4pKSAmJiAoTWF0aC5taW4obWF4LCBtaW4pIDw9IHZhbCk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHR3byByYW5nZXMgc2VlIGlmIGJvdGggaW50ZXJzZWN0IGVhY2ggb3RoZXIuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gbWluMFxuICogQHBhcmFtICB7TnVtYmVyfSBtYXgwXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG1pbjFcbiAqIEBwYXJhbSAge051bWJlcn0gbWF4MVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gcmFuZ2VJbnRlcnNlY3QobWluMCAgICAgICAgLCBtYXgwICAgICAgICAsIG1pbjEgICAgICAgICwgbWF4MSAgICAgICAgKSAgICAgICAgICB7XG4gIHJldHVybiAoXG4gICAgTWF0aC5tYXgobWF4MCwgbWluMCkgPj0gTWF0aC5taW4obWluMSwgbWF4MSkgJiZcbiAgICBNYXRoLm1pbihtaW4wLCBtYXgwKSA8PSBNYXRoLm1heChtYXgxLCBtaW4xKVxuICApO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gdHdvIHJlY3RhbmdlIHNlZSBpZiB0aGUgaW50ZXJzZWN0LlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcjBcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSByMVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uUmVjdChyMCAgICAgLCByMSAgICAgKSB7XG4gIGNvbnN0IHIweCA9IHIwLnN0YXRlLng7XG4gIGNvbnN0IHIweSA9IHIwLnN0YXRlLnk7XG4gIGNvbnN0IHIxeCA9IHIxLnN0YXRlLng7XG4gIGNvbnN0IHIxeSA9IHIxLnN0YXRlLnk7XG5cbiAgY29uc3QgcjB3ID0gcjB4ICsgcjAuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIwaCA9IHIweSArIHIwLnN0YXRlLmhlaWdodDtcbiAgY29uc3QgcjF3ID0gcjF4ICsgcjEuc3RhdGUud2lkdGg7XG4gIGNvbnN0IHIxaCA9IHIxeSArIHIxLnN0YXRlLmhlaWdodDtcblxuICByZXR1cm4gKFxuICAgIHJhbmdlSW50ZXJzZWN0KHIweCwgcjB3LCByMXgsIHIxdykgJiZcbiAgICByYW5nZUludGVyc2VjdChyMHksIHIwaCwgcjF5LCByMWgpXG4gICk7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiBHaXZlbiB0byBwYXJ0aWNsZSB3aXRoIHJhZGkgcmV0dXJuIHdldGhlciB0aGV5IGNvbGxpZGUgYXJlIG5vdFxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gYzFcbiAqIEBwYXJhbSAge1BhcnRpY2xlfSBjMlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uQ2lyY2xlKGMxICAgICAsIGMyICAgICApICAgICAgICAgIHtcbiAgY29uc3QgcmFkaSA9IChjMS5zdGF0ZS5yYWRpdXMgKyBjMi5zdGF0ZS5yYWRpdXMpO1xuICBjb25zdCBkaXN0YW5jZSA9IGRpc3RhbmNlWFkoYzEuc3RhdGUueCwgYzEuc3RhdGUueSwgYzIuc3RhdGUueCwgYzIuc3RhdGUueSk7XG5cbiAgaWYgKGRpc3RhbmNlKSB7XG4gICAgcmV0dXJuIHJhZGkgPiBkaXN0YW5jZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gYSBwb2ludCBhbmQgYSBjaXJjbGUgcmV0dXJuIGEgYm9vbGVhbiByZWdhcmRpbmcgd2V0aGVyIHRoZXkgYXJlIGNvbGxpZGluZy5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7TnVtYmVyfSAgIHhcbiAqIEBwYXJhbSAge051bWJlcn0gICB5XG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gY2lyY2xlXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBjb2xsaXNpb25DaXJjbGVQb2ludCh4ICAgICAgICAsIHkgICAgICAgICwgY2lyY2xlICAgICApIHtcbiAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgY29uc3QgZGlzdCA9IGRpc3RhbmNlWFkoXG4gICAgeCxcbiAgICB5LFxuICAgIGNpcmNsZS5zdGF0ZS54LFxuICAgIGNpcmNsZS5zdGF0ZS55XG4gICk7XG5cbiAgcmV0dXJuIGNpcmNsZS5zdGF0ZS5yYWRpdXMgPiBkaXN0O1xufTtcblxuLyoqXG4gKiBAZGVzY3JpcHRpb24gZGV0ZWN0IGEgY29sbGlzaW9uIGJldHdlZW4gY2lyY2xlcyBhIHZlY3Rvci5cbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7VmVjdG9yfSAgIHZlY1xuICogQHBhcmFtICB7UGFydGljbGV9IGNpcmNsZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uQ2lyY2xlVmVjKHZlYyAgICAgICAgLCBjaXJjbGUgICAgICkge1xuICByZXR1cm4gY2lyY2xlLnN0YXRlLnJhZGl1cyA+IGRpc3RhbmNlWFkoXG4gICAgdmVjLmdldChcInhcIiksXG4gICAgdmVjLmdldChcInlcIiksXG4gICAgY2lyY2xlLnN0YXRlLngsXG4gICAgY2lyY2xlLnN0YXRlLnlcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIGRldGVjdCBjb2xsaXNpb24gb2YgYSByZWN0YW5nbGUgYW5kIGEgcG9pbnQuXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge051bWJlcn0gICB4XG4gKiBAcGFyYW0gIHtOdW1iZXJ9ICAgeVxuICogQHBhcmFtICB7UGFydGljbGV9IHJlY3RcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGNvbGxpc2lvblJlY3RQb2ludCh4ICAgICAgICAsIHkgICAgICAgICwgcmVjdCAgICAgKSB7XG4gIGNvbnN0IHJlY3RYID0gcmVjdC5zdGF0ZS54O1xuICBjb25zdCByZWN0WSA9IHJlY3Quc3RhdGUueTtcbiAgcmV0dXJuIChcbiAgICBpblJhbmdlKHgsIHJlY3RYLCByZWN0WCArIHJlY3Quc3RhdGUud2lkdGgpICYmXG4gICAgaW5SYW5nZSh5LCByZWN0WSwgcmVjdFkgKyByZWN0LnN0YXRlLmhlaWdodClcbiAgKTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEdpdmVuIGEgdmVjdG9yIGFuZCBhIHJldGFuZ2xlIGNoZWNrIHdldGhlciB0aGV5IGNvbGxpZGVkLlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtWZWN0b3J9ICAgdmVjXG4gKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcmVjdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gY29sbGlzaW9uUmVjdFZlYyh2ZWMgICAgICAgICwgcmVjdCAgICAgKSB7XG4gIHJldHVybiBjb2xsaXNpb25SZWN0UG9pbnQodmVjLmdldChcInhcIiksIHZlYy5nZXQoXCJ5XCIpLCByZWN0KTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gUnVuIGEgZnVuY3Rpb24gb25seSBpZiB0aGUgZ2l2ZW4gdGltZSB0byBhbGxvdyB0aGUgZnVuY3Rpb24gZXhlY3V0ZVxuICogaGFzIHBhc3NlZC4gSWZcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmdW5jIEEgZnVuY3Rpb24gdG8gY2FsbCBldmVyeSBkZWx0YS5cbiAqIEBwYXJhbSAge051bWJlcn0gd2FpdCBUaGUgbWluaW11bSB0aW1lIHRvIHdhaXQuXG4gKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSB1bmRlcnNjb3JlXG4gKi9cbmZ1bmN0aW9uIHRocm90dGxlKGZ1bmMgICAgICAgICAgLCB3YWl0ICAgICAgICAsIG9wdGlvbnMgICAgICkge1xuICBsZXQgY29udGV4dDtcbiAgbGV0IGFyZ3MgICAgIDtcbiAgbGV0IHJlc3VsdDtcbiAgbGV0IHRpbWVvdXQgPSBudWxsO1xuICBsZXQgcHJldmlvdXMgPSAwO1xuICBpZiAoIW9wdGlvbnMpIG9wdGlvbnMgPSB7fTtcbiAgY29uc3QgbGF0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBwcmV2aW91cyA9IG9wdGlvbnMubGVhZGluZyA9PT0gZmFsc2UgPyAwIDogRGF0ZS5ub3coKTtcbiAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIGlmICghdGltZW91dCkgY29udGV4dCA9IGFyZ3MgPSBudWxsO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24oLi4uYXJncyAgICAgKSB7XG4gICAgbGV0IG5vdyA9IERhdGUubm93KCk7XG4gICAgaWYgKCFwcmV2aW91cyAmJiBvcHRpb25zLmxlYWRpbmcgPT09IGZhbHNlKSBwcmV2aW91cyA9IG5vdztcbiAgICBsZXQgcmVtYWluaW5nID0gd2FpdCAtIChub3cgLSBwcmV2aW91cyk7XG4gICAgY29udGV4dCA9IHRoaXM7XG4gICAgYXJncyA9IChhcmdzICAgICApO1xuICAgIGlmIChyZW1haW5pbmcgPD0gMCB8fCByZW1haW5pbmcgPiB3YWl0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgfVxuICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgaWYgKCF0aW1lb3V0KSBjb250ZXh0ID0gYXJncyA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghdGltZW91dCAmJiBvcHRpb25zLnRyYWlsaW5nICE9PSBmYWxzZSkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHJlbWFpbmluZyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgbGVuZ3RoIG9mIGEgdmVjdG9yLlxuICogQHBhcmFtICAge251bWJlcn0gbGVuZ3RoXG4gKiBAcGFyYW0gICB7bnVtYmVyfSB4XG4gKiBAcGFyYW0gICB7bnVtYmVyfSB5XG4gKiBAcmV0dXJuICB7bnVtYmVyW119IENvb3JkaW5hdGVzXG4gKi9cbmZ1bmN0aW9uIHNldExlbmd0aChsZW5ndGggICAgICAgICwgeCAgICAgICAgLCB5ICAgICAgICApICAgICAgICAgICAgICAgIHtcbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgeSAhPT0gXCJudW1iZXJcIiB8fFxuICAgICAgdHlwZW9mIGxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIHZhbGlkIHggYW5kIHkgdmFsdWVzXCIpO1xuICB9XG5cbiAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4yKHksIHgpO1xuICB4ID0gTWF0aC5jb3MoYW5nbGUpICogbGVuZ3RoO1xuICB5ID0gTWF0aC5zaW4oYW5nbGUpICogbGVuZ3RoO1xuXG4gIHJldHVybiBbeCwgeV07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIC0gU2V0dGluZyB0aGUgYW5nbGUgb2YgYSB2ZWN0b3IuXG4gKiBAcGFyYW0gICB7bnVtYmVyfSBhbmdsZVxuICogQHBhcmFtICAge251bWJlcn0geFxuICogQHBhcmFtICAge251bWJlcn0geVxuICogQHJldHVybiAge251bWJlcltdfSBjb29yZGluYXRlc1xuICovXG5mdW5jdGlvbiBzZXRBbmdsZShhbmdsZSAgICAgICAgLCB4ICAgICAgICAsIHkgICAgICAgICkgICAgICAgICAgICAgICAge1xuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIgfHxcbiAgICAgIHR5cGVvZiB5ICE9PSBcIm51bWJlclwiIHx8XG4gICAgICB0eXBlb2YgYW5nbGUgIT09IFwibnVtYmVyXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCB4IGFuZCB5IHZhbHVlc1wiKTtcbiAgfVxuXG4gIGNvbnN0IGxlbmd0aCA9IE1hdGguaHlwb3QoeCwgeSk7XG4gIHggPSBNYXRoLmNvcyhhbmdsZSkgKiBsZW5ndGg7XG4gIHkgPSBNYXRoLnNpbihhbmdsZSkgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIFt4LCB5XTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyBkZWdyZWVzIHRvIHJhZGlhbnNcbiAqIEBwYXJhbSAge251bWJlcn0gZGVnIERlZ3Jlc3NcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZGVnVG9SYWQoZGVnICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gZGVnIC8gMTgwICogTWF0aC5QSTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gQ292ZXJ0cyByYWRpYW5zIHRvIGRlZ3Jlc3NcbiAqIEBwYXJhbSAge251bWJlcn0gcmFkXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJhZFRvRGVnKHJhZCAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQGRlc2NyaXB0aW9uIFJvdW5kIHRvIG5lYXJlc3QgcGxhY2UgZ2l2ZW4uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBwbGFjZXMgQW4gZXhwb25lbnRcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcm91bmRUb1BsYWNlcyh2YWwgICAgICAgICwgcGxhY2VzICAgICAgICApICAgICAgICAge1xuICBjb25zdCBtdWx0ID0gTWF0aC5wb3coMTAsIHBsYWNlcyk7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbCAqIG11bHQpIC8gbXVsdDtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHZhbFxuICogQHBhcmFtICB7bnVtYmVyfSBuZWFyZXN0XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIHJvdW5kVG9NdWx0aXBsZSh2YWwgICAgICAgICwgbmVhcmVzdCAgICAgICAgKSAgICAgICAgIHtcbiAgaWYgKCFuZWFyZXN0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTm90aGluZyBjYW4gYmUgYSBtdWx0aXBsZSBvZiBcIiArIFN0cmluZyhuZWFyZXN0KSk7XG4gIH1cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsIC8gbmVhcmVzdCkgKiBuZWFyZXN0O1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gdjBcbiAqIEBwYXJhbSAge251bWJlcn0gdjFcbiAqIEBwYXJhbSAge251bWJlcn0gdjJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7bnVtYmVyfSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcXVhZHJhdGljQmV6aWVyKHYwICAgICAgICAsIHYxICAgICAgICAsIHYyICAgICAgICAsIHQgICAgICAgICkgICAgICAgICB7XG4gIHJldHVybiBNYXRoLnBvdygxIC0gdCwgMikgKiB2MCArICgxIC0gdCkgKiAyICogdCAqIHYxICsgdCAqIHQgKiB2Mjtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYwXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYxXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHYzXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHRcbiAqIEBwYXJhbSAge251bWJlcn0gcEZpbmFsXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGN1YmljQmV6aWVyKHYwICAgICAgICAgLCB2MSAgICAgICAgICwgdjIgICAgICAgICAsIHYzICAgICAgICAgLCB0ICAgICAgICAgKSAgICAgICAgIHtcbiAgcmV0dXJuIE1hdGgucG93KDEgLSB0LCAzKSAqIHYwICtcbiAgICAgICAgIE1hdGgucG93KDEgLSB0LCAyKSAqIDMgKiB0ICogdjEgK1xuICAgICAgICAgKDEgLSB0KSAqIDMgKiB0ICogdCAqIHYyICtcbiAgICAgICAgIHQgKiB0ICogdCArIHYzO1xufTtcblxuLyoqXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge251bWJlcn0gcDBcbiAqIEBwYXJhbSAge251bWJlcn0gcDFcbiAqIEBwYXJhbSAge251bWJlcn0gcDJcbiAqIEBwYXJhbSAge251bWJlcn0gdFxuICogQHBhcmFtICB7T2JqZWN0fSBwRmluYWxcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gcXVhZHJhdGljQmV6aWVyUG9pbnQocDAgICAgICwgcDEgICAgICwgcDIgICAgICwgdCAgICAgICAgKSB7XG4gIGNvbnN0IHggPSBxdWFkcmF0aWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgdCk7XG4gIGNvbnN0IHkgPSBxdWFkcmF0aWNCZXppZXIocDAueSwgcDEueSwgcDIueSwgdCk7XG4gIHJldHVybiB7eCwgeX07XG59O1xuXG4vKipcbiAqIEBtZW1iZXJPZiBVdGlsc1xuICogQHBhcmFtICB7bnVtYmVyfSBwMFxuICogQHBhcmFtICB7bnVtYmVyfSBwMVxuICogQHBhcmFtICB7bnVtYmVyfSBwMlxuICogQHBhcmFtICB7bnVtYmVyfSBwM1xuICogQHBhcmFtICB7bnVtYmVyfSB0XG4gKiBAcGFyYW0gIHtPYmplY3R9IHBGaW5hbFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjdWJpY0JlemllclBvaW50KHAwICAgICAsIHAxICAgICAsIHAyICAgICAsIHAzICAgICAsIHQgICAgICAgICkge1xuICBjb25zdCB4ID0gY3ViaWNCZXppZXIocDAueCwgcDEueCwgcDIueCwgcDMueCwgdCk7XG4gIGNvbnN0IHkgPSBjdWJpY0JlemllcihwMC55LCBwMS55LCBwMi55LCBwMy55LCB0KTtcbiAgcmV0dXJuIHt4LCB5fTtcbn07XG5cbi8qKlxuICogQG1lbWJlck9mIFV0aWxzXG4gKiBAZGVzY3JpcHRpb24gR2l2ZW4gcG9pbnRzIG9uIHRoZSBwbGFuZSBkcmF3IGEgY3VydmVkIGxpbmUgYmV0d2VlblxuICogYWxsIG9mIHRoZW0uXG4gKiBAcGFyYW0gIHt7bnVtYmVyLCBudW1iZXJ9fSBwb2ludHNcbiAqIEBwYXJhbSAge0NhbnZhc1JlbmRlcmluZ0NvbnRleHQyRH0gY3R4XG4gKi9cbmZ1bmN0aW9uIG11bHRpQ3VydmUocG9pbnRzICAgICAgICAgICAgLCBjdHggICAgICAgICkge1xuICBsZXQgcDA7XG4gIGxldCBwMTtcbiAgbGV0IG1pZFg7XG4gIGxldCBtaWRZO1xuXG4gIGN0eC5tb3ZlVG8ocG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAyOyBpKyspIHtcbiAgICBwMCA9IHBvaW50c1tpXTtcbiAgICBwMSA9IHBvaW50c1tpICsgMV07XG4gICAgbWlkWCA9IChwMC54ICsgcDEueCkvMjtcbiAgICBtaWRZID0gKHAwLnkgKyBwMS55KS8yO1xuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIG1pZFgsIG1pZFkpO1xuICB9XG5cbiAgcDAgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDJdO1xuICBwMSA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG4gIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHAwLngsIHAwLnksIHAxLngsIHAxLnkpO1xufTtcblxuLyoqXG4gKiBlYXNlXG4gKiBAbWVtYmVyT2YgVXRpbHNcbiAqIEBwYXJhbSAge0Zsb2F0fSBlYXNlXG4gKiBAcGFyYW0gIHtJbnR9IGFcbiAqIEBwYXJhbSAge0ludH0gYlxuICogQHBhcmFtICB7bnVtYmVyfSB0aHJlc2hvbGRcbiAqIEByZXR1cm4ge0ludH1cbiAqL1xuZnVuY3Rpb24gZWFzZShlYXNlICAgICAgICAsIGEgICAgICAgICwgYiAgICAgICAgLCB0aHJlc2hvbGQgICAgICAgICA9IDAuMSkgICAgICAgICAgICAgICAgICAge1xuICAvLyB0aGUgZGVsdGEgY2FuIGdldCBleHRyZW1lbHkgc21hbGwgYW5kIGl0cyBub3QgcGVyZm9ybWFudCB0byBrZWVwXG4gIC8vIG9uIHJlbmRlcmluZyBvciBjYWxjdWxhdGluZyBmb3IgYW5pbWF0aW9uIHB1cnBvc2VzLlxuICBpZiAoTWF0aC5hYnMoYiAtIGEpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIChiIC0gYSkgKiBlYXNlO1xufTtcblxuLyoqXG4gKiBlYXNlVG9cbiAqIEBwYXJhbSAge251bWJlcn0gZWFzZTogICAgICBudW1iZXIgICAgICAgIEVhc2UgZmFjdG9yLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcmlnaW46ICAgIE9iamVjdCAgICAgICAgVGhlIHN0YXJ0aW5nIHBvaW50LlxuICogQHBhcmFtICB7T2JqZWN0fSB0YXJnZXQ6ICAgIE9iamVjdCAgICAgICAgVGhlIGVuZGluZyBwb2ludC5cbiAqIEBwYXJhbSAge051bWJlcn0gdGhyZXNob2xkOiBudW1iZXIgICAgICAgIEVhc2luZyB0aHJlc2hvbGQuXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIGVhc2VUbyhlYXNlICAgICAgICAsIG9yaWdpbiAgICAgICAgLCB0YXJnZXQgICAgICAgICwgdGhyZXNob2xkICAgICAgICA9MC4xKSB7XG4gIGNvbnN0IGR4ID0gdGFyZ2V0LnggLSBvcmlnaW4ueDtcbiAgY29uc3QgZHkgPSB0YXJnZXQueSAtIG9yaWdpbi55O1xuXG4gIC8vIHRoZSBkZWx0YSBjYW4gZ2V0IGV4dHJlbWVseSBzbWFsbCBhbmQgaXRzIG5vdCBwZXJmb3JtYW50IHRvIGtlZXBcbiAgLy8gb24gcmVuZGVyaW5nIG9yIGNhbGN1bGF0aW5nIGZvciBhbmltYXRpb24gcHVycG9zZXMuXG4gIGlmIChNYXRoLmFicyhkeCkgPCB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZHkpIDwgdGhyZXNob2xkKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgb3JpZ2luLnggKz0gZHggKiBlYXNlO1xuICBvcmlnaW4ueSArPSBkeSAqIGVhc2U7XG5cbiAgcmV0dXJuIG9yaWdpbjtcbn07XG5cbi8qKlxuICogaXNQbGFpbk9iamVjdFxuICogQHBhcmFtICB7Kn0gIGRhdGFcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KGRhdGEgICAgICkgICAgICAgICAge1xuICByZXR1cm4gdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgKHt9KS50b1N0cmluZy5jYWxsKGRhdGEpID09PSBcIltvYmplY3QgT2JqZWN0XVwiO1xufTtcblxuLyoqXG4gKiB1bmlxdWUgcmV0dXJuIGFuIGFycmF5IHdpdGggbm8gZHVwbGljYXRlIHZhbHVlc1xuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuZnVuY3Rpb24gdW5pcXVlKGFycmF5ICAgICAgICAgICAgKSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKHgsIHkpID0+IHtcbiAgICBpZiAoeC5pbmRleE9mKHkpID09PSAtMSkgeC5wdXNoKHkpO1xuICAgIHJldHVybiB4O1xuICB9LCBbXSk7XG59O1xuXG4vLyBmdW5jdGlvbiBjb2xvckludGVycG9sYXRpb24oZmxvYXQ6IG51bWJlciwgY29sb3JGcm9tOiBDb2xvciwgY29sb3JUbzogQ29sb3IpIDogQ29sb3Ige1xuLy8gICBjb25zdCB7cjEsIGcxLCBiMX0gPSBjb2xvckZyb207XG4vLyAgIGNvbnN0IHtyMiwgZzIsIGIyfSA9IGNvbG9yVG87XG5cbi8vICAgY29uc3QgciA9IHIxICsgKHIyIC0gcjEpIC8gZmxvYXQ7XG4vLyAgIGNvbnN0IGcgPSBnMSArIChnMiAtIGcxKSAvIGZsb2F0O1xuLy8gICBjb25zdCBiID0gYjEgKyAoYjIgLSBiMSkgLyBmbG9hdDtcblxuLy8gICByZXR1cm4gXCJzb21lSGV4XCI7XG4vLyB9O1xuXG4vKipcbiAqIHBlcnNwZWN0aXZlIC0gcGVyc3BlY3RpdmUgaXMgdGhlIHJhdGlvIHRvIG11bHRpcGx5IHRoZSB4IGFuZCB5IHZhbHVlc1xuICogYnkgdG8gZ2V0IHRob3NlIHBvaW50cyByZXByZXNlbmV0ZWQgaW4gM2Qgc3BhY2UuXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGZvY2FsTGVuZ3RoOiBUaGUgbGVuZ3RoIG9mIHRoZSBsZW5zXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRpc3RhbmNlOiAgICBUaGUgZGlzdGFuY2UgZnJvbSBiZWdpbmluZyBvZiB0aGUgbGVucyB0aGUgdGhlIGJlZ2luZ2luZyBvZiB0aGUgb2JqZWN0LlxuICogQHJldHVybiB7bnVtYmVyfWBgXG4gKi9cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGZvY2FsTGVuZ3RoICAgICAgICAsIGRpc3RhbmNlICAgICAgICApICAgICAgICAge1xuICByZXR1cm4gZm9jYWxMZW5ndGggLyAoZm9jYWxMZW5ndGggLSBkaXN0YW5jZSk7XG59O1xuXG4vKipcbiAqIEBjbGFzcyBVdGlsc1xuICogQHJldHVybiB7VXRpbHN9XG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5vcm1hbGl6ZSxcbiAgbGVycCxcbiAgbWFwLFxuICBwZXJjZW50LFxuICBjbGFtcCxcbiAgcmFuZG9tQmV0d2VlbixcbiAgZGlzdGFuY2VYWSxcbiAgaW5SYW5nZSxcbiAgcmFuZ2VJbnRlcnNlY3QsXG4gIGNvbGxpc2lvblJlY3QsXG4gIGNvbGxpc2lvbkNpcmNsZSxcbiAgY29sbGlzaW9uQ2lyY2xlUG9pbnQsXG4gIGNvbGxpc2lvbkNpcmNsZVZlYyxcbiAgY29sbGlzaW9uUmVjdFBvaW50LFxuICBjb2xsaXNpb25SZWN0VmVjLFxuICB0aHJvdHRsZSxcbiAgc2V0TGVuZ3RoLFxuICBzZXRBbmdsZSxcbiAgZGVnVG9SYWQsXG4gIHJhZFRvRGVnLFxuICByb3VuZFRvUGxhY2VzLFxuICByb3VuZFRvTXVsdGlwbGUsXG4gIHF1YWRyYXRpY0JlemllcixcbiAgY3ViaWNCZXppZXIsXG4gIHF1YWRyYXRpY0JlemllclBvaW50LFxuICBjdWJpY0JlemllclBvaW50LFxuICBtdWx0aUN1cnZlLFxuICBwZXJzcGVjdGl2ZSxcbiAgZWFzZSxcbiAgZWFzZVRvLFxuICBpc09iamVjdCxcbiAgdW5pcXVlLFxufTtcblxuLy8gbW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlKFV0aWxzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdXRpbHMuanMiLCIvLyAgICAgIFxuXG4vKiBlc2xpbnQgbWF4LWxlbjogMCAqL1xuXG4vKlxuKiBUaGUgcGFydGljbGUgbGliYXJ5IGlzIHVzZWQgZm9yIHBoeXNpY3MgYW5pbWF0aW9ucy5cbiogdGhleSBhcmUgbm90IGV4dHJlbWVseSBhY2N1cmF0ZSBidXQgc3RpbGwgcmVwcmVzZW50XG4qIGFuZCBmZWVsIHNvbWV3aGF0IGxpa2UgcGh5c2ljYWwgbW92bWVudHMuXG4qL1xuXG5jb25zdCBleHRlbmQgPSByZXF1aXJlKFwiZXh0ZW5kXCIpO1xuY29uc3QgY2xvbmUgPSByZXF1aXJlKFwibG9kYXNoL2Nsb25lRGVlcFwiKTtcblxuXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgXG4gICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgXG5cblxuLyogVGhlIGRlZmF1bHQgc3RhdGUgYSBwYXJ0aWNsZSBzdGFydHMgd2l0aCBJdCBzaG91bGQgbm90IG1vdmUuICovXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgXG5cbmNvbnN0IElOSVRJQUxfU1RBVEUgICAgICAgID0ge1xuICB4OiAwLFxuICB5OiAwLFxuICB2eDogMCxcbiAgdnk6IDAsXG4gIGdyYXZpdHk6IDAsXG4gIG1hZ25pdHVkZTogMCxcbiAgcmFkaXVzOiAxLFxuICBtYXNzOiAxLFxuICBkaXJlY3Rpb246IE1hdGguUEkgKiAyLFxuICBmcmljdGlvbjogMSxcbiAgc3ByaW5nczogW10sXG4gIG1hc3NlczogW10sXG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgd2lkdGg6IDEwLFxuICBoZWlnaHQ6IDEwLFxufTtcblxuLyoqXG4gKiBAY2xhc3MgUGFydGljbGVcbiAqIEBwYXJhbSB7c3RhdGV9IHN0YXRlIGluaXRpYWwgc3RhdGUgdG8gcGFzcyB0aGUgY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgUGFydGljbGUge1xuICAgICAgICAgICAgICAgXG5cbiAgLyoqXG4gICAqIGNvbnN0cnVjdG9yXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0gIHtzdGF0ZX0gc3RhdGUgUGFydGljbGUgc3RhdGUgY29vcmRpbmF0ZXMsIGV0Yy5cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHN0YXRlICAgICAgID1jbG9uZShJTklUSUFMX1NUQVRFKSkgICAgICAge1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZSB8fCB7fTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIHBhcnRpY2xlIGdpdmVuIGEgZGlyZWN0aW9uIGFuZCBtYWduaXR1ZGUuXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtPYmplY3R9ICAgc3RhdGUgb3B0aW9uYWwgc3RhdGUgdmFsdWVzIHRvIHBhc3MgdG8gY3JlYXRlLlxuICAgKiBAcmV0dXJuIHtQYXJ0aWNsZX0gcmV0dXJucyBhIHBhcnRpY2xlXG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKHN0YXRlICAgICAgICA9IGNsb25lKElOSVRJQUxfU1RBVEUpKSAgICAgICAgICAge1xuICAgIC8vIEV4dGVuZCB0aGUgb3B0aW9uYWwgc3RhdGUgb24gdG8gdGhlIGRlZmF1bHQgc3RhdGUuXG4gICAgc3RhdGUgPSBleHRlbmQodHJ1ZSwgY2xvbmUoSU5JVElBTF9TVEFURSksIHN0YXRlKTtcblxuICAgIC8vIENyZWF0ZSBwYXJ0aWNsZSB3aXRoIHRoZSBuZXcgb3B0aW9ucy5cbiAgICBjb25zdCBwYXJ0aWNsZSA9IG5ldyBQYXJ0aWNsZShzdGF0ZSk7XG5cbiAgICAvLyBTZXQgbGVuZ3RoLlxuICAgIHBhcnRpY2xlLnNldFNwZWVkKHN0YXRlLm1hZ25pdHVkZSk7XG5cbiAgICAvLyBTZXQgYW5nbGUuXG4gICAgcGFydGljbGUuc2V0SGVhZGluZyhzdGF0ZS5kaXJlY3Rpb24pO1xuXG4gICAgLy8gUmV0dXJuIG5ldyBwYXJ0aWNsZS5cbiAgICByZXR1cm4gcGFydGljbGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gZ2VuZXJhdGUgYSBidW5jaCBvZiBwYXJ0aWNsZXMuXG4gICAqIEBwYXJhbSAge051bWJlcn0gbnVtYmVyICAgIFRoZSBtYXhpbXVtIGFtb3VudCBvZiBnZW5lcmF0ZWQgcGFydGljbGVzIG5lZWRlZC5cbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRzICAgICAgT3B0aW9ucyB0byBwYXNzIGVhY2ggcGFydGljbGVcbiAgICogQHJldHVybiB7QXJyYXk8UGFydGljbGU+fVxuICAgKi9cbiAgc3RhdGljIGdlbmVyYXRlKG51bWJlciAgICAgICAgLCBvcHRzICAgICAgID1jbG9uZShJTklUSUFMX1NUQVRFKSkgICAgICAgICAgICAgICAgICB7XG4gICAgY29uc3QgcGFydGljbGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcjsgaSsrKSB7XG4gICAgICBwYXJ0aWNsZXMucHVzaChQYXJ0aWNsZS5jcmVhdGUob3B0cykpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJ0aWNsZXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBBIGNoYW5nZSBpbiB2ZWxvY2l0eS5cbiAgICpcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IGF4XG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IGF5XG4gICAqIEByZXR1cm4ge3ZvaWR9IEFjY2VsZXJhdGlvbiB2ZWN0b3IuXG4gICAqL1xuICBhY2NlbGVyYXRlKGF4ICAgICAgICA9dGhpcy5zdGF0ZS52eCwgYXkgICAgICAgID10aGlzLnN0YXRlLnZ5KSAgICAgICB7XG4gICAgdGhpcy5zdGF0ZS52eCArPSBheDtcbiAgICB0aGlzLnN0YXRlLnZ5ICs9IGF5O1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQSB1cGRhdGUgYSBwb3NpdGlvbiBvZiBhIHBhcnRpY2xlXG4gICAqIGJhc2VkIG9uIGl0cyBncmF2aXR5IGFuZCBmcmljaXRpb24uIEdyYXZpdHkgaXMgdXN1YWxseSBhIGFjY2VsZXJhdGlvblxuICAgKiB2ZWN0b3IuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtJbnRlZ2VyfSBmcmljIEZyaWNpdGlvbiB0byBhcHBseS5cbiAgICogQHBhcmFtICB7SW50ZWdlcn0gZ3JhdiBHcmF2aXR5IHRvIGFwcGx5LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9IFBvc2l0aW9uIHN0YXRlLlxuICAgKi9cbiAgdXBkYXRlKGZyaWMgICAgICAgICA9IHRoaXMuc3RhdGUuZnJpY3Rpb24sIGdyYXYgICAgICAgICA9IHRoaXMuc3RhdGUuZ3Jhdml0eSkge1xuICAgIC8vIEFwcGx5IHNwcmluZ3NcbiAgICB0aGlzLmhhbmRsZVNwcmluZ3MoKTtcblxuICAgIC8vIEFwcGx5IGdyYXZpdGF0aW9uc1xuICAgIHRoaXMuaGFuZGxlTWFzc2VzKCk7XG5cbiAgICAvLyBBcHBseSBmYWtlIGZyaWNpdGlvbiB0byB2ZWxvY2l0eVxuICAgIHRoaXMuc3RhdGUudnggKj0gZnJpYztcbiAgICB0aGlzLnN0YXRlLnZ5ICo9IGZyaWM7XG5cbiAgICAvLyBBcHBseSBncmF2aXR5IHRvIHZlbG9jaXR5XG4gICAgdGhpcy5hY2NlbGVyYXRlKDAsIGdyYXYpO1xuXG4gICAgLy8gVXBkYXRlIHBvc2l0aW9uIGJhc2VkIG9uIGFjY2VsZXJhdGlvblxuICAgIHJldHVybiB0aGlzLnVwZGF0ZVBvcygpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gc2V0cyB0aGUgaW50ZXJuYWwgc3BlZWQgb2YgdGhlIHBhcnRpY2xlIGdpdmVuIHRoZSBmb3JjZVxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHNwZWVkXG4gICAqL1xuICBzZXRTcGVlZChzcGVlZCAgICAgICAgKSAgICAgICB7XG4gICAgY29uc3QgYW5nbGUgPSB0aGlzLmdldEhlYWRpbmcoKTtcbiAgICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gICAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIHNldHMgdGhlIGludGVybmFsIHNwZWVkIG9mIHRoZSBwYXJ0aWNsZSBnaXZlbiB0aGUgYW5nbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAqL1xuICBzZXRIZWFkaW5nKGFuZ2xlICAgICAgICApICAgICAgIHtcbiAgICBjb25zdCBzcGVlZCA9IHRoaXMuZ2V0U3BlZWQoKTtcbiAgICB0aGlzLnN0YXRlLnZ4ID0gTWF0aC5jb3MoYW5nbGUpICogc3BlZWQ7XG4gICAgdGhpcy5zdGF0ZS52eSA9IE1hdGguc2luKGFuZ2xlKSAqIHNwZWVkO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gZ2V0IHRoZSBsZW5ndGggb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge251bWJlcn0geFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAgICogQHJldHVybiB7bnVtYmVyfSBmb3JjZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gICAqL1xuICBnZXRTcGVlZCh4ICAgICAgICAgPSB0aGlzLnN0YXRlLnZ4LCB5ICAgICAgICAgPSB0aGlzLnN0YXRlLnZ5KSAgICAgICAgIHtcbiAgICByZXR1cm4gTWF0aC5oeXBvdCh0aGlzLnN0YXRlLnZ4LCB0aGlzLnN0YXRlLnZ5KTtcbiAgfTtcblxuICAvKipcbiAgICogQGRlc2NyaXB0aW9uIGdldCB0aGUgYW5nbGUgb2YgdGhlIHZlbG9jaXR5IHZlY3Rvci5cbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSAge251bWJlcn0geFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHlcbiAgICogQHJldHVybiB7bnVtYmVyfSBhbmdsZSBvZiB2ZWxvY2l0eSB2ZWN0b3IuXG4gICAqL1xuICBnZXRIZWFkaW5nKHggICAgICAgICA9IHRoaXMuc3RhdGUudngsIHkgICAgICAgICA9IHRoaXMuc3RhdGUudnkpICAgICAgICAge1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHksIHgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXN1bW1pbmcgd2Uga25vdyB3aGVyZVxuICAgKiB0aGUgb3RoZXIgcGFydGljbGUgaXMgb24gdGhlIGNhbnZhcy4gV2UgY2FuIHVzZVxuICAgKiB0aGUgYW5nbGUgZm9ybXVsYWUgdG8gZmlndXJlIG91dCB0aGUgYW5nbGVcbiAgICogYmV0d2VlbiB0d28gcGFydGljbGUuIFVzaW5nIGFyY3RhbmdlbnQgaXMgZmluZS5cbiAgICogYnV0IGJlY2F1c2UgdGhlIGNvcnJkaW5hdGUgcGxhbmUgaXMgZmlscGVkIG9uIHRoZVxuICAgKiBZIGF4aXMgd2UgdXNlIGF0YW4yIHRvIGdldCB0aGUgcmlnaHQgdmFsdWVzLiBFeHBsYWluZWRcbiAgICogaW4gQVBJIERvY3MuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcCAgICAgIEEgcGFydGljbGUgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0ludGVnZXJ9ICBBbmdsZSAgIEEgYW5nbGUuXG4gICAqL1xuICBhbmdsZVRvKHAgICAgICAgICAgKSAgICAgICAgIHtcbiAgICBjb25zdCBkeCA9IHAuc3RhdGUueCAtIHRoaXMuc3RhdGUueDtcbiAgICBjb25zdCBkeSA9IHAuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihkeSwgZHgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAZGVzY3JpcHRpb24gQXNzdW1pbmcgd2Uga25vdyB3aGVyZSBib3RoIHBhcnRpY2xlIGFyZSBvbiB0aGUgY2FudmFzLlxuICAgKiB3ZSBjYW4gdXNlIHRoZSBkaXN0YW5jZSBmb3JtdWFsZSB0byBmaWd1cmUgb3V0IHRoZSBkaXN0YW5jZVxuICAgKiBiZXR3ZWVuIHRoZSB0d28gcGFydGljbGVzLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7UGFydGljbGV9IHAgICAgICBBIHBhcnRpY2xlIGluc3RhbmNlXG4gICAqIEByZXR1cm4ge251bWJlcn0gIEFuZ2xlICAgQSBEaXN0YW5jZVxuICAgKi9cbiAgZGlzdGFuY2VUbyhwICAgICAgICAgICkgICAgICAgICB7XG4gICAgY29uc3QgZHggPSBwLnN0YXRlLnggLSB0aGlzLnN0YXRlLng7XG4gICAgY29uc3QgZHkgPSBwLnN0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG4gICAgcmV0dXJuIE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBlbmQgYSBwYXJ0aWNsZSB0byB0aGUgbWFzc2VzIGFycmF5LlxuICAgKiBAcGFyYW0ge1BhcnRpY2xlfSBtYXNzXG4gICAqL1xuICBhZGRNYXNzKG1hc3MgICAgICAgICAgKSAgICAgICB7XG4gICAgdGhpcy5yZW1vdmVNYXNzKG1hc3MpO1xuICAgIHRoaXMuc3RhdGUubWFzc2VzLnB1c2gobWFzcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gUmVtb3ZlIGEgcGFydGljbGUgZm9yIHRoZSBtYXNzZXMgYXJyYXkuXG4gICAqIEBwYXJhbSAge1BhcnRpY2xlfSBtYXNzXG4gICAqL1xuICByZW1vdmVNYXNzKHtzdGF0ZTogbWFzc30gICAgICAgICAgKSAgICAgICB7XG4gICAgY29uc3QgbWFzc2VzID0gdGhpcy5zdGF0ZS5tYXNzZXM7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1hc3MueCA9PT0gbWFzc2VzW2ldLnN0YXRlLnggJiZcbiAgICAgICAgICBtYXNzLnkgPT09IG1hc3Nlc1tpXS5zdGF0ZS55KSB7XG4gICAgICAgIG1hc3Nlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBseXMgZ3Jhdml0YXRpb24gdG8gdGhlIGlucHV0IHBhcnRpY2xlLlxuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcGFydGljbGVcbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgZ3Jhdml0YXRlVG8ocGFydGljbGUgICAgICAgICAgKSAgICAgICB7XG4gICAgY29uc3QgZHggPSBwYXJ0aWNsZS5zdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICAgIGNvbnN0IGR5ID0gcGFydGljbGUuc3RhdGUueSAtIHRoaXMuc3RhdGUueTtcblxuICAgIC8vIERpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwYXJ0aWNsZXNcbiAgICAvLyB3ZSBkb250IHVzZSB0aGUgZGlzdGFuY2VUbyBmbiBjYXVzZSB3ZSB3YW50XG4gICAgLy8gdG8gb3B0aW16aWUgdGhlIGNvZGUgdG8gbm90IGhhdmUgdG8gY2FsY3VsYXRlXG4gICAgLy8gZGlzdFNxcmQgYWdhaW4uXG4gICAgY29uc3QgZGlzdFNxcmQgPSBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KGRpc3RTcXJkKTtcblxuICAgIC8vIE1hZ25pdHVkZSBvZiB0aGUgdmVjdG9yIFtGID0gRyhtMSkobTIpL3JeMl1cbiAgICBjb25zdCBmb3JjZSA9IHBhcnRpY2xlLnN0YXRlLm1hc3MgLyBkaXN0U3FyZDtcblxuICAgIC8vIFNldHRpbmcgdXAgYW5nbGVzIG9mIHRoZSB2ZWN0b3JcbiAgICBjb25zdCBzaW4gPSBkeSAvIGRpc3Q7XG4gICAgY29uc3QgY29zID0gZHggLyBkaXN0O1xuXG4gICAgLy8gU2V0dGluZyB2ZXRvciBhbmdsZVxuICAgIGNvbnN0IGF4ID0gY29zICogZm9yY2U7XG4gICAgY29uc3QgYXkgPSBzaW4gKiBmb3JjZTtcblxuICAgIHJldHVybiB0aGlzLmFjY2VsZXJhdGUoYXgsIGF5KTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBBcHBseSB2ZWxvY2l0eSB0byB0aGUgcG9zaXRpb24uXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IHZ4XG4gICAqIEBwYXJhbSAge0ludGVnZXJ9IHZ5XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB1cGRhdGVQb3ModnggICAgICAgICAsIHZ5ICAgICAgICAgKSAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgaWYgKHZ4ID09PSB1bmRlZmluZWQgJiYgdnkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0ZS54ICs9IHRoaXMuc3RhdGUudng7XG4gICAgICB0aGlzLnN0YXRlLnkgKz0gdGhpcy5zdGF0ZS52eTtcbiAgICAgIHJldHVybiB7eDogdGhpcy5zdGF0ZS54LCB5OiB0aGlzLnN0YXRlLnl9O1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUueCArPSB2eDtcbiAgICB0aGlzLnN0YXRlLnkgKz0gdnk7XG4gICAgcmV0dXJuIHt4OiB0aGlzLnN0YXRlLngsIHk6IHRoaXMuc3RhdGUueX07XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiBhZGQgc3ByaW5nIHRvIHNwcmluZ3MgYXJyYXlcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzcHJpbmcgQSBzcHJpbmcgb2JqZWN0XG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGFkZFNwcmluZyhzcHJpbmcgICAgICAgICkgICAgICAgICB7XG4gICAgdGhpcy5yZW1vdmVTcHJpbmcoc3ByaW5nKTtcbiAgICB0aGlzLnN0YXRlLnNwcmluZ3MucHVzaChzcHJpbmcpO1xuICAgIHJldHVybiBzcHJpbmc7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBkZXNjcmlwdGlvbiByZW1vdmUgYSBzcGVjaWZpYyBzdHJpbmcgZnJvbSB0aGUgc3ByaW5ncyBhcnJheVxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQHBhcmFtICB7T2JqZWN0fSBzcHJpbmdcbiAgICovXG4gIHJlbW92ZVNwcmluZyh7cG9pbnQ6IHtzdGF0ZTogcH19ICAgICAgICApICAgICAgIHtcbiAgICBjb25zdCBzcHJpbmdzID0gdGhpcy5zdGF0ZS5zcHJpbmdzO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocC54ID09PSBzcHJpbmdzW2ldLnBvaW50LnN0YXRlLnggJiZcbiAgICAgICAgICBwLnkgPT09IHNwcmluZ3NbaV0ucG9pbnQuc3RhdGUueSkge1xuICAgICAgICBzcHJpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEdpdmVuIHR3byBwYXJ0aWNsZXMgY2FsY3VsYXRlIHRoZVxuICAgKiBzcHJpbmcgZm9yY2UgYXBwbGllZCB0byBib3RoIHBhcnRpY2xlcy5cbiAgICogQHBhcmFtICB7UGFydGljbGV9IHBhcnRpY2xlXG4gICAqIEBwYXJhbSAge0ludGVnZXJ9ICBzcHJpbmd5ICBHaXZlbiBvZmZzZXQgZm9yIHRoZSBwYXJ0aWNsZXNcbiAgICogQHBhcmFtICB7SW50ZWdlcn0gIG9mZnNldCAgVGhlIHNwcmluZyBjb2VmZmljZW50XG4gICAqIEByZXR1cm4ge1BhcnRpY2xlW119XG4gICAqL1xuICBzcHJpbmdGcm9tVG8ocGFydGljbGUgICAgICAgICAgLCBzcHJpbmd5ICAgICAgICAgPSAwLjA1LCBvZmZzZXQgICAgICAgICA9IDEwMCkgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAvLyBQb3N0aW9uIGRlbHRhXG4gICAgY29uc3QgZHggPSAocGFydGljbGUuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gICAgY29uc3QgZHkgPSAocGFydGljbGUuc3RhdGUueSAtIHRoaXMuc3RhdGUueSk7XG5cbiAgICAvLyBTZXR0aW5nIHVwIG1hZ25pdHVkZSBhbmQgYW5nbGUgb2YgdGhlIHZlY3RvclxuICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5oeXBvdChkeCwgZHkpO1xuICAgIGNvbnN0IHNwcmluZ0ZvcmNlID0gKGRpc3RhbmNlIC0gb2Zmc2V0KSAqIHNwcmluZ3k7XG5cbiAgICAvLyBTcHJpbmcgYWNjZWxlcmF0aW9uIHZlY3RvclxuICAgIGNvbnN0IHN4ID0gZHggLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuICAgIGNvbnN0IHN5ID0gZHkgLyBkaXN0YW5jZSAqIHNwcmluZ0ZvcmNlO1xuXG4gICAgLy8gQWNjZWxlcmF0ZSB3aXRoIHRoZSBzcHJpbmcgdmVjdG9yXG4gICAgdGhpcy5hY2NlbGVyYXRlKHN4LCBzeSk7XG5cbiAgICAvLyBBY2NlbGVyYXRlIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgcGFydGljbGUuc3RhdGUudnggLT0gc3g7XG4gICAgcGFydGljbGUuc3RhdGUudnkgLT0gc3k7XG5cbiAgICByZXR1cm4gW3RoaXMsIHBhcnRpY2xlXTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFBhcnRpY2xlXG4gICAqIEBkZXNjcmlwdGlvbiBHaXZlbiBhIHBhcnRpY2xlLCBhIHZlY3RvciwgYW5kIGEgc3ByaW5nIGNvZWZmaWVuY2VudCBhY2NlbGVyYXRlXG4gICAqIHRoZSBwYXJ0aWNsZSBhY2NvcmRpbmcgdG8gdGhlIGRpc3RhbmNlIGl0cyBpcyBmcm9tIHRoZSBwb2ludC5cbiAgICogQHBhcmFtICB7U3ByaW5nfSBzcHJpbmcgQSBzcHJpbmcgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAgICovXG4gIHNwcmluZ1RvUG9pbnQoc3ByaW5nICAgICAgICApICAgICAgICAgICAgICAgICAgICAge1xuICAgIC8vIFBvc3Rpb24gZGVsdGFcbiAgICBjb25zdCBkeCA9IChzcHJpbmcucG9pbnQuc3RhdGUueCAtIHRoaXMuc3RhdGUueCk7XG4gICAgY29uc3QgZHkgPSAoc3ByaW5nLnBvaW50LnN0YXRlLnkgLSB0aGlzLnN0YXRlLnkpO1xuXG4gICAgLy8gU2V0dGluZyB1cCBtYWduaXR1ZGUgYW5kIGFuZ2xlIG9mIHRoZSB2ZWN0b3JcbiAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICBjb25zdCBzcHJpbmdGb3JjZSA9IChkaXN0YW5jZSAtIHNwcmluZy5vZmZzZXQpICogc3ByaW5nW1wic3ByaW5nXCJdO1xuXG4gICAgLy8gU3ByaW5nIGFjY2VsZXJhdGlvbiB2ZWN0b3JcbiAgICBjb25zdCBzeCA9IGR4IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcbiAgICBjb25zdCBzeSA9IGR5IC8gZGlzdGFuY2UgKiBzcHJpbmdGb3JjZTtcblxuICAgIC8vIEFjY2VsZXJhdGUgd2l0aCB0aGUgc3ByaW5nIHZlY3RvclxuICAgIHRoaXMuYWNjZWxlcmF0ZShzeCwgc3kpO1xuXG4gICAgcmV0dXJuIFt0aGlzLCBzcHJpbmddO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgUGFydGljbGVcbiAgICogQGRlc2NyaXB0aW9uIEFwcGx5IHNwcmluZyBwb2ludCB0byBhbGwgaW50ZXJuYWwgc3ByaW5ncy5cbiAgICogQHBhcmFtICB7c3ByaW5nc30gc3ByaW5ncyBBbiBhcnJheSBvZiBzcHJpbmdzIHRvIHNwcmluZyB0by5cbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBoYW5kbGVTcHJpbmdzKHNwcmluZ3MgICAgICAgICAgICAgICA9dGhpcy5zdGF0ZS5zcHJpbmdzKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcHJpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnNwcmluZ1RvUG9pbnQoc3ByaW5nc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNwcmluZ3M7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBQYXJ0aWNsZVxuICAgKiBAZGVzY3JpcHRpb24gRm9yIGVhY2ggbWFzcyBpbiB0aGUgbWFzc2VzIGFycmF5IGFwcGx5IGdyYXZpdGF0ZSB0byBpdC5cbiAgICogQHBhcmFtICB7UGFydGljbGVzW118T2JqZWN0W119IG1hc3Nlc1xuICAgKiBAcmV0dXJuIHtQYXJ0aWNsZXNbXXxPYmplY3RbXX1cbiAgICovXG4gIGhhbmRsZU1hc3NlcyhtYXNzZXMgICAgICAgICAgICAgICAgID10aGlzLnN0YXRlLm1hc3Nlcykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLmdyYXZpdGF0ZVRvKG1hc3Nlc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hc3NlcztcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUGFydGljbGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3BhcnRpY2xlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbnZhciBpc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcblx0aWYgKHR5cGVvZiBBcnJheS5pc0FycmF5ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0fVxuXG5cdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuXG52YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdGlmICghb2JqIHx8IHRvU3RyLmNhbGwob2JqKSAhPT0gJ1tvYmplY3QgT2JqZWN0XScpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHR2YXIgaGFzT3duQ29uc3RydWN0b3IgPSBoYXNPd24uY2FsbChvYmosICdjb25zdHJ1Y3RvcicpO1xuXHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdC8vIE5vdCBvd24gY29uc3RydWN0b3IgcHJvcGVydHkgbXVzdCBiZSBPYmplY3Rcblx0aWYgKG9iai5jb25zdHJ1Y3RvciAmJiAhaGFzT3duQ29uc3RydWN0b3IgJiYgIWhhc0lzUHJvdG90eXBlT2YpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0Ly8gaWYgbGFzdCBvbmUgaXMgb3duLCB0aGVuIGFsbCBwcm9wZXJ0aWVzIGFyZSBvd24uXG5cdHZhciBrZXk7XG5cdGZvciAoa2V5IGluIG9iaikgey8qKi99XG5cblx0cmV0dXJuIHR5cGVvZiBrZXkgPT09ICd1bmRlZmluZWQnIHx8IGhhc093bi5jYWxsKG9iaiwga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdLFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKHR5cGVvZiB0YXJnZXQgPT09ICdib29sZWFuJykge1xuXHRcdGRlZXAgPSB0YXJnZXQ7XG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdC8vIHNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHRpID0gMjtcblx0fSBlbHNlIGlmICgodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHR0YXJnZXQgPSB7fTtcblx0fVxuXG5cdGZvciAoOyBpIDwgbGVuZ3RoOyArK2kpIHtcblx0XHRvcHRpb25zID0gYXJndW1lbnRzW2ldO1xuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAob3B0aW9ucyAhPSBudWxsKSB7XG5cdFx0XHQvLyBFeHRlbmQgdGhlIGJhc2Ugb2JqZWN0XG5cdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbbmFtZV07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zW25hbWVdO1xuXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKHRhcmdldCAhPT0gY29weSkge1xuXHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdGlmIChkZWVwICYmIGNvcHkgJiYgKGlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0gaXNBcnJheShjb3B5KSkpKSB7XG5cdFx0XHRcdFx0XHRpZiAoY29weUlzQXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBleHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodHlwZW9mIGNvcHkgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHR0YXJnZXRbbmFtZV0gPSBjb3B5O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZXh0ZW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQ2xvbmUgPSByZXF1aXJlKCcuL19iYXNlQ2xvbmUnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxLFxuICAgIENMT05FX1NZTUJPTFNfRkxBRyA9IDQ7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5jbG9uZWAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgY2xvbmVzIGB2YWx1ZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHJlY3Vyc2l2ZWx5IGNsb25lLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGRlZXAgY2xvbmVkIHZhbHVlLlxuICogQHNlZSBfLmNsb25lXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICpcbiAqIHZhciBkZWVwID0gXy5jbG9uZURlZXAob2JqZWN0cyk7XG4gKiBjb25zb2xlLmxvZyhkZWVwWzBdID09PSBvYmplY3RzWzBdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGVlcCh2YWx1ZSkge1xuICByZXR1cm4gYmFzZUNsb25lKHZhbHVlLCBDTE9ORV9ERUVQX0ZMQUcgfCBDTE9ORV9TWU1CT0xTX0ZMQUcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lRGVlcDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvY2xvbmVEZWVwLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTdGFjayA9IHJlcXVpcmUoJy4vX1N0YWNrJyksXG4gICAgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25WYWx1ZScpLFxuICAgIGJhc2VBc3NpZ24gPSByZXF1aXJlKCcuL19iYXNlQXNzaWduJyksXG4gICAgYmFzZUFzc2lnbkluID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnbkluJyksXG4gICAgY2xvbmVCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUJ1ZmZlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGNvcHlTeW1ib2xzID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHMnKSxcbiAgICBjb3B5U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fY29weVN5bWJvbHNJbicpLFxuICAgIGdldEFsbEtleXMgPSByZXF1aXJlKCcuL19nZXRBbGxLZXlzJyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaW5pdENsb25lQXJyYXkgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVBcnJheScpLFxuICAgIGluaXRDbG9uZUJ5VGFnID0gcmVxdWlyZSgnLi9faW5pdENsb25lQnlUYWcnKSxcbiAgICBpbml0Q2xvbmVPYmplY3QgPSByZXF1aXJlKCcuL19pbml0Q2xvbmVPYmplY3QnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDEsXG4gICAgQ0xPTkVfRkxBVF9GTEFHID0gMixcbiAgICBDTE9ORV9TWU1CT0xTX0ZMQUcgPSA0O1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIHN1cHBvcnRlZCBieSBgXy5jbG9uZWAuICovXG52YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuY2xvbmVhYmxlVGFnc1thcmdzVGFnXSA9IGNsb25lYWJsZVRhZ3NbYXJyYXlUYWddID1cbmNsb25lYWJsZVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gY2xvbmVhYmxlVGFnc1tkYXRhVmlld1RhZ10gPVxuY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuY2xvbmVhYmxlVGFnc1tmbG9hdDMyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZmxvYXQ2NFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tpbnQ4VGFnXSA9IGNsb25lYWJsZVRhZ3NbaW50MTZUYWddID1cbmNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbmNsb25lYWJsZVRhZ3NbbnVtYmVyVGFnXSA9IGNsb25lYWJsZVRhZ3Nbb2JqZWN0VGFnXSA9XG5jbG9uZWFibGVUYWdzW3JlZ2V4cFRhZ10gPSBjbG9uZWFibGVUYWdzW3NldFRhZ10gPVxuY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDhUYWddID0gY2xvbmVhYmxlVGFnc1t1aW50OENsYW1wZWRUYWddID1cbmNsb25lYWJsZVRhZ3NbdWludDE2VGFnXSA9IGNsb25lYWJsZVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG5jbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuY2xvbmVhYmxlVGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNsb25lYCBhbmQgYF8uY2xvbmVEZWVwYCB3aGljaCB0cmFja3NcbiAqIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gRGVlcCBjbG9uZVxuICogIDIgLSBGbGF0dGVuIGluaGVyaXRlZCBwcm9wZXJ0aWVzXG4gKiAgNCAtIENsb25lIHN5bWJvbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNsb25pbmcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBwYXJlbnQgb2JqZWN0IG9mIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIG9iamVjdHMgYW5kIHRoZWlyIGNsb25lIGNvdW50ZXJwYXJ0cy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGJhc2VDbG9uZSh2YWx1ZSwgYml0bWFzaywgY3VzdG9taXplciwga2V5LCBvYmplY3QsIHN0YWNrKSB7XG4gIHZhciByZXN1bHQsXG4gICAgICBpc0RlZXAgPSBiaXRtYXNrICYgQ0xPTkVfREVFUF9GTEFHLFxuICAgICAgaXNGbGF0ID0gYml0bWFzayAmIENMT05FX0ZMQVRfRkxBRyxcbiAgICAgIGlzRnVsbCA9IGJpdG1hc2sgJiBDTE9ORV9TWU1CT0xTX0ZMQUc7XG5cbiAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gIH1cbiAgaWYgKHJlc3VsdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKTtcbiAgaWYgKGlzQXJyKSB7XG4gICAgcmVzdWx0ID0gaW5pdENsb25lQXJyYXkodmFsdWUpO1xuICAgIGlmICghaXNEZWVwKSB7XG4gICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgaXNGdW5jID0gdGFnID09IGZ1bmNUYWcgfHwgdGFnID09IGdlblRhZztcblxuICAgIGlmIChpc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICB9XG4gICAgaWYgKHRhZyA9PSBvYmplY3RUYWcgfHwgdGFnID09IGFyZ3NUYWcgfHwgKGlzRnVuYyAmJiAhb2JqZWN0KSkge1xuICAgICAgcmVzdWx0ID0gKGlzRmxhdCB8fCBpc0Z1bmMpID8ge30gOiBpbml0Q2xvbmVPYmplY3QodmFsdWUpO1xuICAgICAgaWYgKCFpc0RlZXApIHtcbiAgICAgICAgcmV0dXJuIGlzRmxhdFxuICAgICAgICAgID8gY29weVN5bWJvbHNJbih2YWx1ZSwgYmFzZUFzc2lnbkluKHJlc3VsdCwgdmFsdWUpKVxuICAgICAgICAgIDogY29weVN5bWJvbHModmFsdWUsIGJhc2VBc3NpZ24ocmVzdWx0LCB2YWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNsb25lYWJsZVRhZ3NbdGFnXSkge1xuICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGluaXRDbG9uZUJ5VGFnKHZhbHVlLCB0YWcsIGJhc2VDbG9uZSwgaXNEZWVwKTtcbiAgICB9XG4gIH1cbiAgLy8gQ2hlY2sgZm9yIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIHJldHVybiBpdHMgY29ycmVzcG9uZGluZyBjbG9uZS5cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQodmFsdWUpO1xuICBpZiAoc3RhY2tlZCkge1xuICAgIHJldHVybiBzdGFja2VkO1xuICB9XG4gIHN0YWNrLnNldCh2YWx1ZSwgcmVzdWx0KTtcblxuICB2YXIga2V5c0Z1bmMgPSBpc0Z1bGxcbiAgICA/IChpc0ZsYXQgPyBnZXRBbGxLZXlzSW4gOiBnZXRBbGxLZXlzKVxuICAgIDogKGlzRmxhdCA/IGtleXNJbiA6IGtleXMpO1xuXG4gIHZhciBwcm9wcyA9IGlzQXJyID8gdW5kZWZpbmVkIDoga2V5c0Z1bmModmFsdWUpO1xuICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIGtleSA9IHN1YlZhbHVlO1xuICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICAvLyBSZWN1cnNpdmVseSBwb3B1bGF0ZSBjbG9uZSAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGtleSwgdmFsdWUsIHN0YWNrKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDbG9uZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VDbG9uZS5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1N0YWNrLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19MaXN0Q2FjaGUuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IFtdO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGVxID0gcmVxdWlyZSgnLi9lcScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGluZGV4IGF0IHdoaWNoIHRoZSBga2V5YCBpcyBmb3VuZCBpbiBgYXJyYXlgIG9mIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IGtleSBUaGUga2V5IHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBhc3NvY0luZGV4T2YoYXJyYXksIGtleSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBpZiAoZXEoYXJyYXlbbGVuZ3RoXVswXSwga2V5KSkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzc29jSW5kZXhPZjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBQZXJmb3JtcyBhXG4gKiBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogY29tcGFyaXNvbiBiZXR3ZWVuIHR3byB2YWx1ZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIGVxdWl2YWxlbnQuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdhJzogMSB9O1xuICpcbiAqIF8uZXEob2JqZWN0LCBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEob2JqZWN0LCBvdGhlcik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoJ2EnLCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uZXEoJ2EnLCBPYmplY3QoJ2EnKSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uZXEoTmFOLCBOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBlcSh2YWx1ZSwgb3RoZXIpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBvdGhlciB8fCAodmFsdWUgIT09IHZhbHVlICYmIG90aGVyICE9PSBvdGhlcik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2VxLmpzXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlR2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgc2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGxpc3QgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgICsrdGhpcy5zaXplO1xuICAgIGRhdGEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9IGVsc2Uge1xuICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlU2V0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbGlzdENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqL1xuZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGU7XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrQ2xlYXIuanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpO1xuXG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0RlbGV0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zdGFja0dldC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYSBzdGFjayB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIHN0YWNrSGFzKGtleSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja0hhcztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyksXG4gICAgTWFwQ2FjaGUgPSByZXF1aXJlKCcuL19NYXBDYWNoZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbnZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4vKipcbiAqIFNldHMgdGhlIHN0YWNrIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzdGFja1NldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgaWYgKGRhdGEgaW5zdGFuY2VvZiBMaXN0Q2FjaGUpIHtcbiAgICB2YXIgcGFpcnMgPSBkYXRhLl9fZGF0YV9fO1xuICAgIGlmICghTWFwIHx8IChwYWlycy5sZW5ndGggPCBMQVJHRV9BUlJBWV9TSVpFIC0gMSkpIHtcbiAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IE1hcENhY2hlKHBhaXJzKTtcbiAgfVxuICBkYXRhLnNldChrZXksIHZhbHVlKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFja1NldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3N0YWNrU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzTmF0aXZlID0gcmVxdWlyZSgnLi9fYmFzZUlzTmF0aXZlJyksXG4gICAgZ2V0VmFsdWUgPSByZXF1aXJlKCcuL19nZXRWYWx1ZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBtZXRob2QgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGZ1bmN0aW9uIGlmIGl0J3MgbmF0aXZlLCBlbHNlIGB1bmRlZmluZWRgLlxuICovXG5mdW5jdGlvbiBnZXROYXRpdmUob2JqZWN0LCBrZXkpIHtcbiAgdmFyIHZhbHVlID0gZ2V0VmFsdWUob2JqZWN0LCBrZXkpO1xuICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE5hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE5hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhc3luY1RhZyA9ICdbb2JqZWN0IEFzeW5jRnVuY3Rpb25dJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBnZW5UYWcgPSAnW29iamVjdCBHZW5lcmF0b3JGdW5jdGlvbl0nLFxuICAgIHByb3h5VGFnID0gJ1tvYmplY3QgUHJveHldJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oXyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gVGhlIHVzZSBvZiBgT2JqZWN0I3RvU3RyaW5nYCBhdm9pZHMgaXNzdWVzIHdpdGggdGhlIGB0eXBlb2ZgIG9wZXJhdG9yXG4gIC8vIGluIFNhZmFyaSA5IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5cyBhbmQgb3RoZXIgY29uc3RydWN0b3JzLlxuICB2YXIgdGFnID0gYmFzZUdldFRhZyh2YWx1ZSk7XG4gIHJldHVybiB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnIHx8IHRhZyA9PSBhc3luY1RhZyB8fCB0YWcgPT0gcHJveHlUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGdW5jdGlvbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2ZyZWVHbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUdldFRhZ2Agd2hpY2ggaWdub3JlcyBgU3ltYm9sLnRvU3RyaW5nVGFnYCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgcmF3IGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGdldFJhd1RhZyh2YWx1ZSkge1xuICB2YXIgaXNPd24gPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBzeW1Ub1N0cmluZ1RhZyksXG4gICAgICB0YWcgPSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG5cbiAgdHJ5IHtcbiAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB1bmRlZmluZWQ7XG4gICAgdmFyIHVubWFza2VkID0gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge31cblxuICB2YXIgcmVzdWx0ID0gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG4gIGlmICh1bm1hc2tlZCkge1xuICAgIGlmIChpc093bikge1xuICAgICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdGFnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFJhd1RhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldFJhd1RhZy5qc1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2lzTWFza2VkLmpzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG92ZXJyZWFjaGluZyBjb3JlLWpzIHNoaW1zLiAqL1xudmFyIGNvcmVKc0RhdGEgPSByb290WydfX2NvcmUtanNfc2hhcmVkX18nXTtcblxubW9kdWxlLmV4cG9ydHMgPSBjb3JlSnNEYXRhO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29yZUpzRGF0YS5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fdG9Tb3VyY2UuanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0VmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBtYXBDYWNoZUNsZWFyID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVDbGVhcicpLFxuICAgIG1hcENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVEZWxldGUnKSxcbiAgICBtYXBDYWNoZUdldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlR2V0JyksXG4gICAgbWFwQ2FjaGVIYXMgPSByZXF1aXJlKCcuL19tYXBDYWNoZUhhcycpLFxuICAgIG1hcENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYE1hcENhY2hlYC5cbk1hcENhY2hlLnByb3RvdHlwZS5jbGVhciA9IG1hcENhY2hlQ2xlYXI7XG5NYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG5NYXBDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbWFwQ2FjaGVHZXQ7XG5NYXBDYWNoZS5wcm90b3R5cGUuaGFzID0gbWFwQ2FjaGVIYXM7XG5NYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwQ2FjaGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19NYXBDYWNoZS5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIEhhc2ggPSByZXF1aXJlKCcuL19IYXNoJyksXG4gICAgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgTWFwID0gcmVxdWlyZSgnLi9fTWFwJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuc2l6ZSA9IDA7XG4gIHRoaXMuX19kYXRhX18gPSB7XG4gICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAnbWFwJzogbmV3IChNYXAgfHwgTGlzdENhY2hlKSxcbiAgICAnc3RyaW5nJzogbmV3IEhhc2hcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUNsZWFyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fbWFwQ2FjaGVDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19IYXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hDbGVhci5qc1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUNyZWF0ZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faGFzaERlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2hhc2hHZXQuanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoSGFzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19oYXNoU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVEZWxldGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZURlbGV0ZS5qc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldE1hcERhdGEuanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0tleWFibGUuanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUdldC5qc1xuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVIYXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBDYWNoZUhhcy5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE1hcERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXBEYXRhJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG1hcCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IGdldE1hcERhdGEodGhpcywga2V5KSxcbiAgICAgIHNpemUgPSBkYXRhLnNpemU7XG5cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSArPSBkYXRhLnNpemUgPT0gc2l6ZSA/IDAgOiAxO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX21hcENhY2hlU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlFYWNoLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICogdXNpbmcgW2BTYW1lVmFsdWVaZXJvYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtc2FtZXZhbHVlemVybylcbiAqIGZvciBlcXVhbGl0eSBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV07XG4gIGlmICghKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGVxKG9ialZhbHVlLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hc3NpZ25WYWx1ZS5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduVmFsdWUuanNcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxudmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHZhciBmdW5jID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2RlZmluZVByb3BlcnR5Jyk7XG4gICAgZnVuYyh7fSwgJycsIHt9KTtcbiAgICByZXR1cm4gZnVuYztcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lUHJvcGVydHk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qc1xuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gKiBvciBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFzc2lnbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUFzc2lnbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VBc3NpZ24uanNcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jb3B5T2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2tleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FycmF5TGlrZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udGltZXNgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kc1xuICogb3IgbWF4IGFycmF5IGxlbmd0aCBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gaW52b2tlIGBpdGVyYXRlZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShuKTtcblxuICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoaW5kZXgpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRpbWVzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZVRpbWVzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJndW1lbnRzLmpzXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzQXJndW1lbnRzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0FyZ3VtZW50cyh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBhcmdzVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0FyZ3VtZW50cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9pc09iamVjdExpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXkoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheSgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL2lzQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XHJcblx0aWYoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcclxuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xyXG5cdFx0bW9kdWxlLnBhdGhzID0gW107XHJcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcclxuXHRcdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xyXG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XHJcblx0fVxyXG5cdHJldHVybiBtb2R1bGU7XHJcbn1cclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9zdHViRmFsc2UuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgdW5zaWduZWQgaW50ZWdlciB2YWx1ZXMuICovXG52YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBpbmRleC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge251bWJlcn0gW2xlbmd0aD1NQVhfU0FGRV9JTlRFR0VSXSBUaGUgdXBwZXIgYm91bmRzIG9mIGEgdmFsaWQgaW5kZXguXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzSW5kZXgodmFsdWUsIGxlbmd0aCkge1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiAhIWxlbmd0aCAmJlxuICAgICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHwgcmVJc1VpbnQudGVzdCh2YWx1ZSkpICYmXG4gICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19pc0luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgIGRhdGVUYWcgPSAnW29iamVjdCBEYXRlXScsXG4gICAgZXJyb3JUYWcgPSAnW29iamVjdCBFcnJvcl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHJlZ2V4cFRhZyA9ICdbb2JqZWN0IFJlZ0V4cF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0YVZpZXdUYWddID0gdHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZXJyb3JUYWddID0gdHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPVxudHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbb2JqZWN0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPVxudHlwZWRBcnJheVRhZ3Nbc2V0VGFnXSA9IHR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPVxudHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc1R5cGVkQXJyYXlgIHdpdGhvdXQgTm9kZS5qcyBvcHRpbWl6YXRpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJlxuICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tiYXNlR2V0VGFnKHZhbHVlKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNMZW5ndGguanNcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlVW5hcnkuanNcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19ub2RlVXRpbC5qc1xuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYSBwcm90b3R5cGUgb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzUHJvdG90eXBlKHZhbHVlKSB7XG4gIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICBwcm90byA9ICh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlKSB8fCBvYmplY3RQcm90bztcblxuICByZXR1cm4gdmFsdWUgPT09IHByb3RvO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUHJvdG90eXBlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faXNQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX25hdGl2ZUtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJBcmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19vdmVyQXJnLmpzXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UuIEEgdmFsdWUgaXMgY29uc2lkZXJlZCBhcnJheS1saWtlIGlmIGl0J3NcbiAqIG5vdCBhIGZ1bmN0aW9uIGFuZCBoYXMgYSBgdmFsdWUubGVuZ3RoYCB0aGF0J3MgYW4gaW50ZWdlciBncmVhdGVyIHRoYW4gb3JcbiAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICFpc0Z1bmN0aW9uKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvaXNBcnJheUxpa2UuanNcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uYXNzaWduSW5gIHdpdGhvdXQgc3VwcG9ydCBmb3IgbXVsdGlwbGUgc291cmNlc1xuICogb3IgYGN1c3RvbWl6ZXJgIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgZGVzdGluYXRpb24gb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25JbihvYmplY3QsIHNvdXJjZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlQXNzaWduSW4uanNcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gva2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNQcm90b3R5cGUgPSByZXF1aXJlKCcuL19pc1Byb3RvdHlwZScpLFxuICAgIG5hdGl2ZUtleXNJbiA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXNJbicpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNJbmAgd2hpY2ggZG9lc24ndCB0cmVhdCBzcGFyc2UgYXJyYXlzIGFzIGRlbnNlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBiYXNlS2V5c0luKG9iamVjdCkge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5c0luKG9iamVjdCk7XG4gIH1cbiAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19iYXNlS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICogW2BPYmplY3Qua2V5c2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZXhjZXB0IHRoYXQgaXQgaW5jbHVkZXMgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gbmF0aXZlS2V5c0luKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChvYmplY3QgIT0gbnVsbCkge1xuICAgIGZvciAodmFyIGtleSBpbiBPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19uYXRpdmVLZXlzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVCdWZmZXIuanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2NvcHlBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKTtcblxuLyoqXG4gKiBDb3BpZXMgb3duIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzKHNvdXJjZSwgb2JqZWN0KSB7XG4gIHJldHVybiBjb3B5T2JqZWN0KHNvdXJjZSwgZ2V0U3ltYm9scyhzb3VyY2UpLCBvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlTeW1ib2xzO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHMuanNcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAqL1xudmFyIGdldFN5bWJvbHMgPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHJldHVybiBhcnJheUZpbHRlcihuYXRpdmVHZXRTeW1ib2xzKG9iamVjdCksIGZ1bmN0aW9uKHN5bWJvbCkge1xuICAgIHJldHVybiBwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgc3ltYm9sKTtcbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzLmpzXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAwLFxuICAgICAgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlGaWx0ZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheUZpbHRlci5qc1xuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL3N0dWJBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyk7XG5cbi8qKlxuICogQ29waWVzIG93biBhbmQgaW5oZXJpdGVkIHN5bWJvbHMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0PXt9XSBUaGUgb2JqZWN0IHRvIGNvcHkgc3ltYm9scyB0by5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlTeW1ib2xzSW4oc291cmNlLCBvYmplY3QpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3Qoc291cmNlLCBnZXRTeW1ib2xzSW4oc291cmNlKSwgb2JqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3B5U3ltYm9sc0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY29weVN5bWJvbHNJbi5qc1xuLy8gbW9kdWxlIGlkID0gODlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFycmF5UHVzaCA9IHJlcXVpcmUoJy4vX2FycmF5UHVzaCcpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAgc3R1YkFycmF5ID0gcmVxdWlyZSgnLi9zdHViQXJyYXknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9sc0luID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAob2JqZWN0KSB7XG4gICAgYXJyYXlQdXNoKHJlc3VsdCwgZ2V0U3ltYm9scyhvYmplY3QpKTtcbiAgICBvYmplY3QgPSBnZXRQcm90b3R5cGUob2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzSW47XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRTeW1ib2xzSW4uanNcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19hcnJheVB1c2guanNcbi8vIG1vZHVsZSBpZCA9IDkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2dldEFsbEtleXMuanNcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHNJbiA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHNJbicpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZFxuICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5c0luKG9iamVjdCkge1xuICByZXR1cm4gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzSW4sIGdldFN5bWJvbHNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5c0luO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fZ2V0QWxsS2V5c0luLmpzXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgRGF0YVZpZXcgPSByZXF1aXJlKCcuL19EYXRhVmlldycpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIFByb21pc2UgPSByZXF1aXJlKCcuL19Qcm9taXNlJyksXG4gICAgU2V0ID0gcmVxdWlyZSgnLi9fU2V0JyksXG4gICAgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKSxcbiAgICBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIHRvU291cmNlID0gcmVxdWlyZSgnLi9fdG9Tb3VyY2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nLFxuICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbnZhciBkYXRhVmlld0N0b3JTdHJpbmcgPSB0b1NvdXJjZShEYXRhVmlldyksXG4gICAgbWFwQ3RvclN0cmluZyA9IHRvU291cmNlKE1hcCksXG4gICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICBzZXRDdG9yU3RyaW5nID0gdG9Tb3VyY2UoU2V0KSxcbiAgICB3ZWFrTWFwQ3RvclN0cmluZyA9IHRvU291cmNlKFdlYWtNYXApO1xuXG4vKipcbiAqIEdldHMgdGhlIGB0b1N0cmluZ1RhZ2Agb2YgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG52YXIgZ2V0VGFnID0gYmFzZUdldFRhZztcblxuLy8gRmFsbGJhY2sgZm9yIGRhdGEgdmlld3MsIG1hcHMsIHNldHMsIGFuZCB3ZWFrIG1hcHMgaW4gSUUgMTEgYW5kIHByb21pc2VzIGluIE5vZGUuanMgPCA2LlxuaWYgKChEYXRhVmlldyAmJiBnZXRUYWcobmV3IERhdGFWaWV3KG5ldyBBcnJheUJ1ZmZlcigxKSkpICE9IGRhdGFWaWV3VGFnKSB8fFxuICAgIChNYXAgJiYgZ2V0VGFnKG5ldyBNYXApICE9IG1hcFRhZykgfHxcbiAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgKFNldCAmJiBnZXRUYWcobmV3IFNldCkgIT0gc2V0VGFnKSB8fFxuICAgIChXZWFrTWFwICYmIGdldFRhZyhuZXcgV2Vha01hcCkgIT0gd2Vha01hcFRhZykpIHtcbiAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gYmFzZUdldFRhZyh2YWx1ZSksXG4gICAgICAgIEN0b3IgPSByZXN1bHQgPT0gb2JqZWN0VGFnID8gdmFsdWUuY29uc3RydWN0b3IgOiB1bmRlZmluZWQsXG4gICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiAnJztcblxuICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICBzd2l0Y2ggKGN0b3JTdHJpbmcpIHtcbiAgICAgICAgY2FzZSBkYXRhVmlld0N0b3JTdHJpbmc6IHJldHVybiBkYXRhVmlld1RhZztcbiAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICBjYXNlIHByb21pc2VDdG9yU3RyaW5nOiByZXR1cm4gcHJvbWlzZVRhZztcbiAgICAgICAgY2FzZSBzZXRDdG9yU3RyaW5nOiByZXR1cm4gc2V0VGFnO1xuICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRUYWc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19nZXRUYWcuanNcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19EYXRhVmlldy5qc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX1Byb21pc2UuanNcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19TZXQuanNcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgV2Vha01hcCA9IGdldE5hdGl2ZShyb290LCAnV2Vha01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdlYWtNYXA7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19XZWFrTWFwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBhcnJheSBjbG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lQXJyYXkoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFycmF5LmNvbnN0cnVjdG9yKGxlbmd0aCk7XG5cbiAgLy8gQWRkIHByb3BlcnRpZXMgYXNzaWduZWQgYnkgYFJlZ0V4cCNleGVjYC5cbiAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICByZXN1bHQuaW5kZXggPSBhcnJheS5pbmRleDtcbiAgICByZXN1bHQuaW5wdXQgPSBhcnJheS5pbnB1dDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZUFycmF5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9faW5pdENsb25lQXJyYXkuanNcbi8vIG1vZHVsZSBpZCA9IDEwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgY2xvbmVBcnJheUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQXJyYXlCdWZmZXInKSxcbiAgICBjbG9uZURhdGFWaWV3ID0gcmVxdWlyZSgnLi9fY2xvbmVEYXRhVmlldycpLFxuICAgIGNsb25lTWFwID0gcmVxdWlyZSgnLi9fY2xvbmVNYXAnKSxcbiAgICBjbG9uZVJlZ0V4cCA9IHJlcXVpcmUoJy4vX2Nsb25lUmVnRXhwJyksXG4gICAgY2xvbmVTZXQgPSByZXF1aXJlKCcuL19jbG9uZVNldCcpLFxuICAgIGNsb25lU3ltYm9sID0gcmVxdWlyZSgnLi9fY2xvbmVTeW1ib2wnKSxcbiAgICBjbG9uZVR5cGVkQXJyYXkgPSByZXF1aXJlKCcuL19jbG9uZVR5cGVkQXJyYXknKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lIGJhc2VkIG9uIGl0cyBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaW5pdGlhbGl6ZWQgY2xvbmUuXG4gKi9cbmZ1bmN0aW9uIGluaXRDbG9uZUJ5VGFnKG9iamVjdCwgdGFnLCBjbG9uZUZ1bmMsIGlzRGVlcCkge1xuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgcmV0dXJuIGNsb25lQXJyYXlCdWZmZXIob2JqZWN0KTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3IoK29iamVjdCk7XG5cbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgcmV0dXJuIGNsb25lRGF0YVZpZXcob2JqZWN0LCBpc0RlZXApO1xuXG4gICAgY2FzZSBmbG9hdDMyVGFnOiBjYXNlIGZsb2F0NjRUYWc6XG4gICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgIGNhc2UgdWludDhUYWc6IGNhc2UgdWludDhDbGFtcGVkVGFnOiBjYXNlIHVpbnQxNlRhZzogY2FzZSB1aW50MzJUYWc6XG4gICAgICByZXR1cm4gY2xvbmVUeXBlZEFycmF5KG9iamVjdCwgaXNEZWVwKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lTWFwKG9iamVjdCwgaXNEZWVwLCBjbG9uZUZ1bmMpO1xuXG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICByZXR1cm4gbmV3IEN0b3Iob2JqZWN0KTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICBjYXNlIHNldFRhZzpcbiAgICAgIHJldHVybiBjbG9uZVNldChvYmplY3QsIGlzRGVlcCwgY2xvbmVGdW5jKTtcblxuICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgcmV0dXJuIGNsb25lU3ltYm9sKG9iamVjdCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVCeVRhZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZUJ5VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBhcnJheUJ1ZmZlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGFycmF5QnVmZmVyIFRoZSBhcnJheSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7QXJyYXlCdWZmZXJ9IFJldHVybnMgdGhlIGNsb25lZCBhcnJheSBidWZmZXIuXG4gKi9cbmZ1bmN0aW9uIGNsb25lQXJyYXlCdWZmZXIoYXJyYXlCdWZmZXIpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBhcnJheUJ1ZmZlci5jb25zdHJ1Y3RvcihhcnJheUJ1ZmZlci5ieXRlTGVuZ3RoKTtcbiAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZUFycmF5QnVmZmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVBcnJheUJ1ZmZlci5qc1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVpbnQ4QXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19VaW50OEFycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGNsb25lQXJyYXlCdWZmZXIgPSByZXF1aXJlKCcuL19jbG9uZUFycmF5QnVmZmVyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBkYXRhVmlld2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhVmlldyBUaGUgZGF0YSB2aWV3IHRvIGNsb25lLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBkYXRhIHZpZXcuXG4gKi9cbmZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcihkYXRhVmlldy5idWZmZXIpIDogZGF0YVZpZXcuYnVmZmVyO1xuICByZXR1cm4gbmV3IGRhdGFWaWV3LmNvbnN0cnVjdG9yKGJ1ZmZlciwgZGF0YVZpZXcuYnl0ZU9mZnNldCwgZGF0YVZpZXcuYnl0ZUxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVEYXRhVmlldztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lRGF0YVZpZXcuanNcbi8vIG1vZHVsZSBpZCA9IDEwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgYWRkTWFwRW50cnkgPSByZXF1aXJlKCcuL19hZGRNYXBFbnRyeScpLFxuICAgIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBjbG9uaW5nLiAqL1xudmFyIENMT05FX0RFRVBfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgbWFwLlxuICovXG5mdW5jdGlvbiBjbG9uZU1hcChtYXAsIGlzRGVlcCwgY2xvbmVGdW5jKSB7XG4gIHZhciBhcnJheSA9IGlzRGVlcCA/IGNsb25lRnVuYyhtYXBUb0FycmF5KG1hcCksIENMT05FX0RFRVBfRkxBRykgOiBtYXBUb0FycmF5KG1hcCk7XG4gIHJldHVybiBhcnJheVJlZHVjZShhcnJheSwgYWRkTWFwRW50cnksIG5ldyBtYXAuY29uc3RydWN0b3IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lTWFwO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fY2xvbmVNYXAuanNcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlyIFRoZSBrZXktdmFsdWUgcGFpciB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBtYXBgLlxuICovXG5mdW5jdGlvbiBhZGRNYXBFbnRyeShtYXAsIHBhaXIpIHtcbiAgLy8gRG9uJ3QgcmV0dXJuIGBtYXAuc2V0YCBiZWNhdXNlIGl0J3Mgbm90IGNoYWluYWJsZSBpbiBJRSAxMS5cbiAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgcmV0dXJuIG1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNYXBFbnRyeTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2FkZE1hcEVudHJ5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYXJyYXlSZWR1Y2UuanNcbi8vIG1vZHVsZSBpZCA9IDEwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19tYXBUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGAgZmxhZ3MgZnJvbSB0aGVpciBjb2VyY2VkIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVGbGFncyA9IC9cXHcqJC87XG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIGByZWdleHBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gcmVnZXhwIFRoZSByZWdleHAgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBjbG9uZVJlZ0V4cChyZWdleHApIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyByZWdleHAuY29uc3RydWN0b3IocmVnZXhwLnNvdXJjZSwgcmVGbGFncy5leGVjKHJlZ2V4cCkpO1xuICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVJlZ0V4cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lUmVnRXhwLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGFkZFNldEVudHJ5ID0gcmVxdWlyZSgnLi9fYWRkU2V0RW50cnknKSxcbiAgICBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY2xvbmluZy4gKi9cbnZhciBDTE9ORV9ERUVQX0ZMQUcgPSAxO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAqL1xuZnVuY3Rpb24gY2xvbmVTZXQoc2V0LCBpc0RlZXAsIGNsb25lRnVuYykge1xuICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCBDTE9ORV9ERUVQX0ZMQUcpIDogc2V0VG9BcnJheShzZXQpO1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9uZVNldDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lU2V0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gYHNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBtb2RpZnkuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhZGQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICovXG5mdW5jdGlvbiBhZGRTZXRFbnRyeShzZXQsIHZhbHVlKSB7XG4gIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gIHNldC5hZGQodmFsdWUpO1xuICByZXR1cm4gc2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFNldEVudHJ5O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYWRkU2V0RW50cnkuanNcbi8vIG1vZHVsZSBpZCA9IDExMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkoc2V0LnNpemUpO1xuXG4gIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gdmFsdWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldFRvQXJyYXk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19zZXRUb0FycmF5LmpzXG4vLyBtb2R1bGUgaWQgPSAxMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCBzeW1ib2wgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgcmV0dXJuIHN5bWJvbFZhbHVlT2YgPyBPYmplY3Qoc3ltYm9sVmFsdWVPZi5jYWxsKHN5bWJvbCkpIDoge307XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vbG9kYXNoL19jbG9uZVN5bWJvbC5qc1xuLy8gbW9kdWxlIGlkID0gMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2Nsb25lVHlwZWRBcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjbG9uZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICovXG5mdW5jdGlvbiBpbml0Q2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSlcbiAgICA6IHt9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluaXRDbG9uZU9iamVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9sb2Rhc2gvX2luaXRDbG9uZU9iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2xvZGFzaC9fYmFzZUNyZWF0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludCBtYXgtbGVuOiAwICovXG5cbi8vICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cbi8qKlxuICogQGNsYXNzIFNoYXBlc1xuICogQHBhcmFtIHtPYmplY3R9IGN0eCAgICAgIENhbnZhcyBjb250ZXh0LlxuICogQHBhcmFtIHtPYmplY3R9IGRvY3VtZW50IFRoZSBkb2N1bWVudCBvYmplY3QuXG4qL1xuY2xhc3MgU2hhcGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICBcblxuICAvKipcbiAgICogY29uc3RydWN0b3JcbiAgICogQHBhcmFtICB7SFRNTENhbnZhc0VsZW1lbnR9IGN0eFxuICAgKiBAcGFyYW0gIHtEb2N1bWVudH0gZG9jdW1lbnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKGN0eCAgICAgICAgICAgICAgICAgICAgICAgICAgLCBkb2N1bWVudCAgICAgICAgICApIHtcbiAgICBpZiAoIWN0eCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hhcGVzOiBQbGVhc2UgcHJvdmlkZSBhIGNvbnRleHQgYXJndW1lbnQgW2FyZzo6MV1cIik7XG4gICAgfVxuXG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50IHx8IHdpbmRvdy5kb2N1bWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgU2hhcGVzXG4gICAqIEBkZXNjcmlwdGlvbiBkcmF3IGEgY2lyY2xlLlxuICAgKiBAcGFyYW0ge051bWJlcn0geCAgICAgVGhlIHggY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0ge051bWJlcn0geSAgICAgVGhlIHkgY29vcmRpbmF0ZSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0ge051bWJlcn0gciAgICAgVGhlIHJhZGl1cyBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0ge1N0cmluZ30gY29sb3IgVGhlIGNvbG9yIG9mIHRoZSBjaXJjbGUuXG4gICAqL1xuICBjaXJjbGUoeCAgICAgICAgPTQsIHkgICAgICAgID00LCByICAgICAgICA9MiwgY29sb3IgICAgICAgPVwiIzAwMDAwMFwiKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XG4gICAgdGhpcy5jdHguZmlsbCgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAbWVtYmVyT2YgU2hhcGVzXG4gICAqIEBkZXNjcmlwdGlvbiBGaWxsIGEgcmVjdGFuZ2xlXG4gICAqIEBwYXJhbSAge051bWJlcn0geCAgICAgU3RhcnRpbmcgcG9pbnQgWFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkgICAgIFN0YXJ0aW5nIHBvaW50IFlcbiAgICogQHBhcmFtICB7TnVtYmVyfSB3ICAgICBXaWR0aCBvZiB0aGUgcmVjdGFuZ2xlXG4gICAqIEBwYXJhbSAge051bWJlcn0gaCAgICAgSGVpZ2h0IG9mIHRoZSByZWN0YW5nbGVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb2xvciBBIGhleCBzdHJpbmcuXG4gICAqL1xuICByZWN0KHggICAgICAgICA9IDAsXG4gICAgICB5ICAgICAgICAgPSAwLFxuICAgICAgdyAgICAgICAgID0gMTAsXG4gICAgICBoICAgICAgICAgPSAxMCxcbiAgICAgIGNvbG9yICAgICAgICA9IFwiIzAwMDAwMFwiKSB7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEBtZW1iZXJPZiBTaGFwZXNcbiAgICogQGRlc2NyaXB0aW9uIERyYXcgYSBsaW5lIGJldHdlZW4gdGhlc2UgdHdvIHBvaW50cy5cbiAgICogQHBhcmFtICB7TnVtYmVyfSB4MFxuICAgKiBAcGFyYW0gIHtOdW1iZXJ9IHkwXG4gICAqIEBwYXJhbSAge051bWJlcn0geDFcbiAgICogQHBhcmFtICB7TnVtYmVyfSB5MVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0eWxlXG4gICAqL1xuICBkcmF3TGluZVhZKHgwICAgICAgICAsXG4gICAgeTAgICAgICAgICxcbiAgICB4MSAgICAgICAgLFxuICAgIHkxICAgICAgICAsXG4gICAgc3R5bGUgICAgICAgICA9IFwiIzAwMDAwMFwiKSB7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBzdHlsZTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeDAsIHkwKTtcbiAgICB0aGlzLmN0eC5saW5lVG8oeDEsIHkxKTtcbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogZHJhd0xpbmVWZWNcbiAgICogQHBhcmFtICB7VmVjdG9yfSB2ZWMwOiBWZWN0b3JcbiAgICogQHBhcmFtICB7VmVjdG9yfSB2ZWMxOiBWZWN0b3JcbiAgICovXG4gIGRyYXdMaW5lVmVjKHZlYzAgICAgICAgICwgdmVjMSAgICAgICAgKSB7XG4gICAgdGhpcy5kcmF3TGluZVhZKHZlYzAuZ2V0KFwieFwiKSwgdmVjMC5nZXQoXCJ5XCIpLCB2ZWMxLmdldChcInhcIiksIHZlYzEuZ2V0KFwieVwiKSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGRyYXdMaW5lUG9pbnRzXG4gICAqIEBwYXJhbSAge09iamVjdH0gZmlyc3RQb2ludFxuICAgKiBAcGFyYW0gIHtBcnJheTxPYmplY3Q+fSBwb2ludHNcbiAgICovXG4gIGRyYXdMaW5lUG9pbnRzKHBvaW50cyAgICAgICAgICAgICAgICkge1xuICAgIGlmICghcG9pbnRzWzBdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSB2YWxpZCBpbnB1dHNcIik7XG4gICAgfVxuXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNdXN0IGJlIGdpdmVuIGEgYSBudW1iZXIgb2YgcG9pbnRzIGdyZWF0ZXIgdGhhbiAxXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0UG9pbnQgPSBwb2ludHMuc2hpZnQoKTtcblxuICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY3R4Lm1vdmVUbyhmaXJzdFBvaW50LngsIGZpcnN0UG9pbnQueSk7XG5cbiAgICBmb3IgKGxldCBwb2ludCBvZiBwb2ludHMpIHtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyhwb2ludC54LCBwb2ludC55KTtcbiAgICB9XG5cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcbiAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgfTtcblxuICAvKipcbiAgICogQG1lbWJlck9mIFNoYXBlc1xuICAgKiBAcGFyYW0gIHtudW1iZXJ9IHdpZHRoXG4gICAqIEBwYXJhbSAge251bWJlcn0gaGVpZ2h0XG4gICAqIEBwYXJhbSAge051bWJlcn0gZ3JpZFNpemVcbiAgICogQHBhcmFtICB7U3RyaW5nfSBjb2xvclxuICAgKi9cbiAgZ3JpZCh3aWR0aCAgICAgICAgLCBoZWlnaHQgICAgICAgICwgZ3JpZFNpemUgICAgICAgICA9IDIwLCBjb2xvciAgICAgICAgID0gXCIjY2NjXCIpIHtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB3aWR0aDsgeCArPSBncmlkU2l6ZSkge1xuICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIDApO1xuICAgICAgdGhpcy5jdHgubGluZVRvKHgsIGhlaWdodCk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBoZWlnaHQ7IHkgKz0gZ3JpZFNpemUpIHtcbiAgICAgIHRoaXMuY3R4Lm1vdmVUbygwLCB5KTtcbiAgICAgIHRoaXMuY3R4LmxpbmVUbyh3aWR0aCwgeSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIHBDaXJjbGVcbiAgICogQG1lbWJlck9mIFNoYXBlc1xuICAgKiBAcGFyYW0gIHtQYXJ0aWNsZX0gcFxuICAgKiBAcmV0dXJuIHtQYXJ0aWNsZX1cbiAgICovXG4gIHBDaXJjbGUocGFydGljbGUgICAgICAgICAgKSB7XG4gICAgdGhpcy5jaXJjbGUoXG4gICAgICBwYXJ0aWNsZS5zdGF0ZS54LFxuICAgICAgcGFydGljbGUuc3RhdGUueSxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLnJhZGl1cyxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLmNvbG9yXG4gICAgKTtcbiAgICByZXR1cm4gcGFydGljbGU7XG4gIH07XG5cbiAgLyoqXG4gICAqIHBSZWN0XG4gICAqIEBtZW1iZXJPZiBTaGFwZXNcbiAgICogQHBhcmFtICB7UGFydGljbGV9IHBcbiAgICogQHJldHVybiB7UGFydGljbGV9XG4gICAqL1xuICBwUmVjdChwYXJ0aWNsZSAgICAgICAgICApIHtcbiAgICB0aGlzLnJlY3QoXG4gICAgICBwYXJ0aWNsZS5zdGF0ZS54LFxuICAgICAgcGFydGljbGUuc3RhdGUueSxcbiAgICAgIHBhcnRpY2xlLnN0YXRlLndpZHRoLFxuICAgICAgcGFydGljbGUuc3RhdGUuaGVpZ2h0LFxuICAgICAgcGFydGljbGUuc3RhdGUuY29sb3JcbiAgICApO1xuICAgIHJldHVybiBwYXJ0aWNsZTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTaGFwZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL3NoYXBlcy5qcyIsIi8qKlxuICogWUFUIHN0YW5kcyBmb3IgWWV0IEFub3RoZXIgVHdlZW4uXG4gKiBXaHkgbm90IGhhdmUgb25lIG1vcmUgcGFja2FnZSB0aGF0IGRvZXMgdGhlIHNhbWUgdGhpbmcgYXMgdGhlIDUwIG91dCB0aGVyZT9cbiAqIFdlbGwgdGhhdHMgYSBnb29kIHF1ZXN0aW9uIHRoYXQgd2lsbCBub3QgYmUgYW5zd2VyZWQgaW4gdGhpcyBjb21tZW50IGJsb2NrLlxuICogVG8gYmUgaG9uZXN0IGl0cyBmb3IgcHJhY3RpY2UgYW5kIGxlYXJuaW5nIHB1cnBvc2VzLiBBbmQgaWYgYW55b25lIGluIHRoZWlyXG4gKiByaWdodCBtaW5kIGFjdGF1bGx5IGJlbmVmaXRzIGZyb20gdGhpcyB0aGVuIHNvIGJlIGl0LlxuICovXG5cbmNvbnN0IGNsb25lID0gcmVxdWlyZShcImxvZGFzaC9jbG9uZURlZXBcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpO1xuY29uc3QgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxuY29uc3QgREVGQVVMVFMgPSB7XG4gIG9iajoge3g6IDAsIHk6IDB9LFxuICBwcm9wczoge3g6IDEwMCwgeTogMTAwfSxcbiAgZWFzaW5nOiBcImVhc2VcIixcbiAgZHVyYXRpb246IDEwMDAsXG59O1xuXG5jb25zdCBldmVudEluc3RhbmNlID0gZXZlbnQuaW5pdCgpO1xuLy8gSW5oZXJpdCBtZXRob2RzIGZyb20gZXZlbnRJbnN0YW5jZVxuY29uc3QgWUFUID0gT2JqZWN0LmNyZWF0ZShldmVudEluc3RhbmNlKTtcblxuWUFULmluaXQgPSBmdW5jdGlvbiBpbml0VHdlZW4ob3B0cykge1xuICAvLyBDYW4gYW5kIHVzZXMgRXZlbnQgYW5kIENsb2NrIG1ldGhvZHMuXG5cbiAgaWYgKCFvcHRzLmNsb2NrKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIHByb3ZpZGUgYSBjbG9jayBBUEkuXCIpO1xuICB9XG5cbiAgdGhpcy5fY2xvY2sgPSBvcHRzLmNsb2NrLmluaXQoe1xuICAgIGZwczogb3B0cy5mcHMgfHwgNjAsXG4gIH0pO1xuXG4gIHRoaXMucGFyZW50ID0gZXZlbnRJbnN0YW5jZTtcbiAgdGhpcy50d2VlbnMgPSBbXTtcblxuICAvKipcbiAgICogZWFzaW5nRm5zXG4gICAqIEBkZXNjcmlwdGlvbiBBbGwgZWFzaW5nIGZ1bmN0aW9ucyBhcmUgb3JpZ25pYWxseSB3cml0dGVuXG4gICAqIGJ5IHJvYmVydCBwZW5uZXIsIHRoZSB0d2VlbmluZyBnb2QuXG4gICAqIEhlcmUgZWFjaCBtZXRob2QgaXMgcGFzc2VkIGEgbm9ybWFsaXplZCB2YWx1ZS4gV2hpY2ggaXNcbiAgICogdXN1YWxseSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEuIFlvdSBjYW4gdGhpbmsgb2YgdGhpcyBudW1iZXIgYXNcbiAgICogYSBwZXJjZW50YWdlIG9mIGEgcmFuZ2UuIFdpdGggdGhhdCBub3JtbGl6ZWQgdmFsdWUgLyBwZXJjZW50YWdlIHdlXG4gICAqIGNhbiBtYXAgdGhhdCBwZXJjZW50YWdlIHRvIGFub3RoZXIgcmFuZ2UuIFRoaXMgaXMgY2FsbGVkIGludGVycG9sYXRpb24uXG4gICAqIEBzZWUge0BsaW5rIGh0dHA6Ly9yb2JlcnRwZW5uZXIuY29tL2Vhc2luZy99XG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB0aGlzLmVhc2luZ0ZucyA9IHtcbiAgICAvLyBIZXJlIHRoaXMgZWFzZSBmdW5jdGlvbiBpcyBsaW5lYXIgYXMgdGhlcmUgaXMgb25seSBvbmVcbiAgICAvLyBuIHZhbHVlLiBFYWNoIGVhc2UgZnVuY3Rpb24gY2FuIGJlIG1hcHBlZCB0byBhIHBvbHlub21pYWwuXG4gICAgZWFzZShjLCBiLCBuKSB7IC8vIHBvbHlub21pYWw6IGF4ICsgYiA9IGM7IHdoZXJlIHggaXMgdGhlIG5vcm1hbGl6ZWQgdmFsdWVcbiAgICAgIHJldHVybiBjICogbiArIGI7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFkKGMsIGIsIG4pIHsgLy8gcG9seW5vbWlhbDogMXheMiArIDB4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogbikgKyBiO1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQoYywgYiwgbikgeyAvLyBwb2x5bm9taWFsOiAtMXheMiArIDJ4ICsgMCA9IGQ7XG4gICAgICByZXR1cm4gYyAqIChuICogKDIgLSBuKSkgKyBiO1xuICAgIH0sXG4gICAgZWFzZUluT3V0UXVhZChjLCBiLCBuKSB7XG4gICAgICBpZiAoKG4qPTIpIDwgMSkge1xuICAgICAgICByZXR1cm4gYy8yICogKG4qbikgKyBiOyAvLyBQb2x5bm9taWFsIGZvciBoYWxmIHRoZSByYW5nZTpcbiAgICAgICAgLy8gMnheMiArIDB4ICsgMCA9IGQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gLWMvMiAqICgoLS1uKSoobi0yKSAtIDEpICsgYjsgLy8gUG9seW5vbWlhbCBmb3IgdGhlIHRoZSB1cHBlclxuICAgICAgLy8gaGFsZiBvZiB0aGUgcmFuZ2U6IC0yeF4yICsgNHggLSAxXG4gICAgfSxcbiAgfTtcblxuICB0aGlzLl9jbG9jay5vbihcInRpY2tcIiwgdGhpcy51cGRhdGVUd2VlbnMsIHRoaXMpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiB1cGRhdGVUd2VlbnMgLSBVcGRhdGVzIGFsbCB0aGUgdHdlZW4gaW5zdGFuY2VzLlxuICovXG5ZQVQudXBkYXRlVHdlZW5zID0gZnVuY3Rpb24gdXBkYXRlVGVlbnMoKSB7XG4gIHRoaXMudHdlZW5zLmZvckVhY2goKHR3ZWVuKSA9PiB7XG4gICAgaWYgKHR3ZWVuLnRpY2tlci5uZWVkc1VwZGF0ZSkge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgfVxuXG4gICAgaWYgKCF0d2Vlbi50aWNrZXIubmVlZHNVcGRhdGUgJiZcbiAgICAgICAgdHdlZW4udGlja2VyLlNUQVRFID09PSBcIkRPTkVcIikge1xuICAgICAgdHdlZW4udXBkYXRlKHR3ZWVuLnRpY2tlcik7XG4gICAgICB0d2Vlbi5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodHdlZW4udGlja2VyLnN0b3BwZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWW91ciB0d2VlbiBpcyBzdG9wcGVkLlwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuWUFULmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdHM9e30pIHtcbiAgY29uc3QgWUFUSW5zdGFuY2UgPSBPYmplY3QuY3JlYXRlKFlBVCk7XG4gIGNvbnN0IF9vcHRzID0gT2JqZWN0LmFzc2lnbihjbG9uZShERUZBVUxUUyksIG9wdHMpO1xuICBjb25zdCB7ZHVyYXRpb24sIG9iaiwgcHJvcHMsIGVhc2luZywgaWR9ID0gX29wdHM7XG5cbiAgaWYgKCFZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGVhc2luZyBmdW5jdGlvbiAke2Vhc2luZ30gZG9lcyBub3QgZXhpc3RzYCk7XG4gIH1cblxuICBpZiAoaWQpIHtcbiAgICBpZiAodGhpcy50d2VlbnMuc29tZSgoeCkgPT4geC5pZCA9PT0gaWQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSB0d2VlbiB3aXRoIGlkOiAke2lkfSBhbHJlYWR5IGV4aXN0cy5gKTtcbiAgICB9XG5cbiAgICBZQVRJbnN0YW5jZS5pZCA9IGlkO1xuICB9IGVsc2Uge1xuICAgIFlBVEluc3RhbmNlLmlkID0gdGhpcy50d2VlbnMubGVuZ3RoICsgMTtcbiAgfVxuXG4gIFlBVEluc3RhbmNlLnN0YXRlID0gY2xvbmUob2JqKTtcbiAgWUFUSW5zdGFuY2Uub2JqID0gb2JqO1xuICBZQVRJbnN0YW5jZS5wcm9wcyA9IHByb3BzO1xuICBZQVRJbnN0YW5jZS5kdXJhdGlvbiA9IGR1cmF0aW9uO1xuICBZQVRJbnN0YW5jZS5lYXNpbmcgPSBZQVRJbnN0YW5jZS5lYXNpbmdGbnNbZWFzaW5nXTtcbiAgWUFUSW5zdGFuY2UudGlja2VyID0gdGhpcy5fY2xvY2suY3JlYXRlU2xhdmUoe1xuICAgIGlkOiBZQVRJbnN0YW5jZS5pZCxcbiAgICBkdXJhdGlvbjogWUFUSW5zdGFuY2UuZHVyYXRpb24sXG4gIH0pO1xuXG4gIHRoaXMudHdlZW5zLnB1c2goWUFUSW5zdGFuY2UpO1xuICByZXR1cm4gWUFUSW5zdGFuY2U7XG59O1xuXG5ZQVQuZ2V0ID0gZnVuY3Rpb24oaWQpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBZQVRbMF07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudHdlZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy50d2VlbltpXS5pZCA9PT0gaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnR3ZWVuW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbllBVC5yZXdpbmQgPSBmdW5jdGlvbihpZD10aGlzLmlkKSB7XG4gIGNvbnN0IHR3ZWVuID0gdGhpcy5nZXQoaWQpO1xuXG4gIGlmICghdGhpcy5zdG9wcGVkKSB7XG4gICAgdHdlZW4uc3RvcCgpO1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCBhIHdheSB0byBjYWNoZSB0aGUgb2xkIHByb3BzIC8vXG4gIHRoaXMub3B0cy5vYmogPSB0aGlzLm9wdHMucHJvcHM7XG4gIHRoaXMub3B0cy5wcm9wcyA9IHRoaXMub3B0cy5wcm9wc0JlZm9yZVR3ZWVuO1xuXG4gIHR3ZWVuLnN0YXJ0KCk7XG59O1xuXG5ZQVQuc3RhcnRBbGwgPSBmdW5jdGlvbiBzdGFydEFsbCgpIHtcbiAgaWYgKCF0aGlzLnR3ZWVucy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhcmUgbm8gdHdlZW5zIHRvIHN0YXJ0XCIpO1xuICB9XG5cbiAgdGhpcy50d2VlbnMuZm9yRWFjaCgodCkgPT4ge1xuICAgIHQudGlja2VyLnN0YXJ0KCk7XG4gIH0pO1xuXG4gIHRoaXMuX2Nsb2NrLnN0YXJ0KCk7XG59O1xuXG4vKipcbiAqIHN0b3BBbGwgLSBTdG9wcyBhbGwgdHdlZW5zXG4gKi9cbllBVC5zdG9wQWxsID0gZnVuY3Rpb24gc3RvcEFsbCgpIHtcbiAgaWYgKHRoaXMudHdlZW5zLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFyZSBubyB0d2VlbnMgdG8gc3RvcFwiKTtcbiAgfVxuXG4gIHRoaXMuX2Nsb2NrLnN0b3AoKTtcbn07XG5cbi8qKlxuICogZGVsYXkgLSBob3cgbG9uZyB0byBkZWxheSB0aGUgYW5pbWF0aW9uXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGR1cmF0aW9uXG4gKiBAcmV0dXJuIHtZQVR9XG4gKi9cbllBVC5kZWxheSA9IGZ1bmN0aW9uIGRlbGF5KGR1cmF0aW9uKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgdGhpcy5vYmogPSBjbG9uZSh0aGlzLnN0YXRlKTtcbiAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnRpY2tlci5zdGFydCgpLCBkdXJhdGlvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gc3RvcHMgdGhlIHRpY2tlclxuICogQHJldHVybiB7WUFUfVxuICovXG5ZQVQuc3RvcCA9IGZ1bmN0aW9uIHN0b3AoKSB7XG4gIHRoaXMudGlja2VyLnN0b3AoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIGZpbmlzaCAtIGZpbmlzaGVzIHRoZSB0d2VlbiBhbmltYXRpb25cbiAqIEByZXR1cm4ge1lBVH1cbiAqL1xuWUFULmZpbmlzaCA9IGZ1bmN0aW9uIGZpbmlzaCgpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuX2Nsb2NrLnJlbW92ZVNsYXZlKHRoaXMudGlja2VyLmlkKTtcbiAgdGhpcy5zdGF0ZSA9IHRoaXMucHJvcHM7XG4gIHJldHVybiB0aGlzO1xufTtcblxuWUFULnJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZShpZD10aGlzLmlkKSB7XG4gIHRoaXMudHdlZW5zID0gdGhpcy50d2VlbnMuZmlsdGVyKCh0KSA9PiB7XG4gICAgaWYgKHQuaWQgPT09IGlkKSB7XG4gICAgICB0aGlzLl9jbG9jay5yZW1vdmVTbGF2ZSh0LnRpY2tlci5pZCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufTtcblxuWUFULnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSh0aWNrZXIpIHtcbiAgaWYgKCF0aWNrZXIubmVlZHNVcGRhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBjb25zdCB7dGltZVNpbmNlU3RhcnQ6IGRlbHRhLCBkdXJhdGlvbn0gPSB0aWNrZXI7XG4gIGNvbnN0IG5vcm0gPSB1dGlscy5ub3JtYWxpemUoZGVsdGEsIDAsIGR1cmF0aW9uLm1zKTtcblxuICBmb3IgKGxldCBrZXkgaW4gdGhpcy5vYmopIHtcbiAgICBpZiAodGhpcy5vYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgaWYgKHRoaXMub2JqW2tleV0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLnByb3BzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnN0YXRlW2tleV0gPSB0aGlzLmVhc2luZyh0aGlzLnByb3BzW2tleV0gLSB0aGlzLm9ialtrZXldLCB0aGlzLm9ialtrZXldLCBub3JtKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy5zdGF0ZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gWUFUO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4vKlxuICpcbiAqIFRFUk1TIE9GIFVTRSAtIEVBU0lORyBFUVVBVElPTlNcbiAqIFxuICogT3BlbiBzb3VyY2UgdW5kZXIgdGhlIEJTRCBMaWNlbnNlLiBcbiAqIFxuICogQ29weXJpZ2h0IMKpIDIwMDEgUm9iZXJ0IFBlbm5lclxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgXG4gKiBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKiBcbiAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIFxuICogY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3QgXG4gKiBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBcbiAqIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBhdXRob3Igbm9yIHRoZSBuYW1lcyBvZiBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZVxuICogb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvblxuICpcbiAqIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgQlkgVEhFIENPUFlSSUdIVCBIT0xERVJTIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiIEFORCBBTllcbiAqIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPXG4gKiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSFxuICogIENPUFlSSUdIVCBPV05FUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTFxuICogIEVYRU1QTEFSWSwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIChJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVUXG4gKiAgR09PRFMgT1IgU0VSVklDRVM7IExPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEXG4gKiBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOXG4gKiAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRURcbiAqIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdHdlZW4uanMiLCIvKipcbiAqIEV2ZW50XG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQGltcGxlbWVudHMge3V0aWxzfVxuICovXG5jb25zdCBFdmVudCA9IE9iamVjdC5jcmVhdGUobnVsbCk7ICBcblxuLyoqXG4gKiBpbml0XG4gKiBAbWVtYmVyT2YgRXZlbnRcbiAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplcyB0aGUgZXZlbnQgb2JqZWN0LlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmluaXQgPSBmdW5jdGlvbiBpbml0RXZlbnQoKSB7XG4gIHRoaXMuY2FsbGJhY2tzID0ge307XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBlbWl0XG4gKiBAZGVzY3JpcHRpb24gRXhlY3V0ZXMgdGhlIGhhbmRlbGVyIHRoYXQgYXNzb2NhaXRlZCB3aXRoIHRoZSBlbWl0dGVkIGV2ZW50LlxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50LmVtaXQgPSBmdW5jdGlvbiBlbWl0KC4uLmFyZ3MpIHtcbiAgY29uc3QgW2V2ZW50LCAuLi5yZXN0XSA9IGFyZ3M7XG5cbiAgaWYgKCFldmVudCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFdmVudDogUGxlYXNlIHByb3ZpZGUgdHJ1dGh5IGFyZ3VtZW50c1wiKTtcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcblxuICBpZiAodGhpcy5jYWxsYmFja3NbZXZlbnRdLmxlbmd0aCkge1xuICAgIHRoaXMuY2FsbGJhY2tzW2V2ZW50XS5mb3JFYWNoKChjYWxsYmFjaykgPT4ge1xuICAgICAgY2FsbGJhY2soLi4ucmVzdCk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogb25cbiAqIEBkZXNjcmlwdGlvbiBBdHRhY2ggYSBoYW5kbGVyIHRvIGFuIGV2ZW50LlxuICogQHBhcmFtICB7U3RyaW5nfSAgIGV2ZW50XG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSAge09iamVjdH0gICBjb250ZXh0XG4gKiBAcmV0dXJuIHtFdmVudH1cbiAqL1xuRXZlbnQub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgaWYgKCFldmVudCB8fCAhZm4pIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXZlbnQ6IFBsZWFzZSBwcm92aWRlIHRydXRoeSBhcmd1bWVudHNcIik7XG4gIH1cblxuICBpZiAoY29udGV4dCkge1xuICAgIGZuID0gZm4uYmluZChjb250ZXh0KTtcbiAgfVxuXG4gIGNvbnN0IGV2ZW50cyA9IGV2ZW50LnNwbGl0KFwiIFwiKTtcblxuICB0aGlzLmNhbGxiYWNrcyA9IHRoaXMuY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGV2ZW50cy5mb3JFYWNoKChlKSA9PiB7XG4gICAgdGhpcy5jYWxsYmFja3NbZV0gPSB0aGlzLmNhbGxiYWNrc1tlXSB8fCBbXTtcblxuICAgIGlmICghdGhpcy5jYWxsYmFja3NbZV0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrc1tlXS5wdXNoKGZuKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIERvbnQgY3JlYXRlIGR1cGxpY2F0ZXMgb2YgdGhlIHNhbWUgaGFuZGVsZWQgZnVuY3Rpb24uXG4gICAgLy8gSWYgeW91IHdhbnQgeW91ciBmdW5jdGlvbiBydW4gdHdpY2Ugd3JhcCBpdCBpbiBhIGZ1bmN0aW9uLlxuICAgIHJldHVybiB0aGlzLmNhbGxiYWNrc1tlXS5ldmVyeSgoY2IsIGksIGNvbCkgPT4ge1xuICAgICAgcmV0dXJuIGNiICE9PSBmbjtcbiAgICB9KSA/IHRoaXMuY2FsbGJhY2tzW2VdLnB1c2goZm4pIDpcbiAgICAgIGNvbnNvbGUud2FybihgRXZlbnQ6IFRoYXQgZnVuY3Rpb24gJHtmbn0gaGFzIGFscmVhZHkgYmVlbiBkZWNsYXJlZCBhYCArXG4gICAgICAgIFwiaGFuZGxlciBmb3IgdGhpcyBldmVudC5cIik7XG4gIH0pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBvZmZcbiAqIEBkZXNjcmlwdGlvbiBSZW1vdmUgYW4gZXZlbnQgaGFuZGVsZXIuXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgZXZlbnRcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbkV2ZW50Lm9mZiA9IGZ1bmN0aW9uIG9mZiguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudCwgZm5dID0gYXJncztcblxuICBpZiAoIWV2ZW50KSB7XG4gICAgdGhpcy5jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGxldCBjYWxsYmFja3MgPSB0aGlzLmNhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKCFjYWxsYmFja3MpIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIWZuKSB7XG4gICAgZGVsZXRlIHRoaXMuY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHRoaXMuY2FsbGJhY2tzW2V2ZW50XSA9IGNhbGxiYWNrcy5maWx0ZXIoKGNiKSA9PiBjYiAhPT0gZm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBsaXN0ZW5lcnMgLSBSZXR1cm4gYWxsIGNhbGxiYWNrcyBhdHRhY2hlZCB0byBhIGNlcnRhaW4gZXZlbnRcbiAqIEBwYXJhbSAge2FueTxBcnJheT59IGFyZ3NcbiAqIEByZXR1cm4ge2Z1bmN0aW9uW119XG4gKi9cbkV2ZW50Lmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyguLi5hcmdzKSB7XG4gIGNvbnN0IFtldmVudF0gPSBhcmdzO1xuXG4gIGlmICghZXZlbnQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jYWxsYmFja3MpO1xuICB9XG5cbiAgaWYgKCF0aGlzLmNhbGxiYWNrc1tldmVudF0pIHtcbiAgICBjb25zb2xlLndhcm4oYEV2ZW50OiBObyBldmVudCBuYW1lZCAke2V2ZW50fSBoYXMgYmVlbiByZWdpc3RlcmVkYCk7XG4gIH1cblxuICByZXR1cm4gdGhpcy5jYWxsYmFja3NbZXZlbnRdO1xufTtcblxuRXZlbnQub25jZSA9IGZ1bmN0aW9uIG9uY2UoLi4uYXJncykge1xuICBjb25zdCBzZWxmID0gdGhpcztcbiAgY29uc3QgW2V2ZW50LCBmbiwgY29udGV4dF0gPSBhcmdzO1xuXG4gIGNvbnN0IHdyYXAgPSBmdW5jdGlvbiB3cmFwKCkge1xuICAgIGZuLmJpbmQoY29udGV4dCkoKTtcbiAgICBzZWxmLm9mZihldmVudCwgd3JhcCk7XG4gIH07XG5cbiAgdGhpcy5vbihldmVudCwgd3JhcCwgY29udGV4dCk7XG59O1xuXG4vLyBBbGlhc2VzIC8vXG5FdmVudC5yZW1vdmVMaXN0ZW5lciA9IEV2ZW50LnJlbW92ZUFsbExpc3RlbmVycyA9IEV2ZW50Lm9mZjtcbkV2ZW50LmZpcmUgPSBFdmVudC5lbWl0O1xuRXZlbnQuYWRkTGlzdGVuZXIgPSBFdmVudC5vbjtcbkV2ZW50LmdldCA9IEV2ZW50Lmxpc3RlbmVycztcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvZXZlbnQuanMiLCJjb25zdCB0aWNrZXIgPSByZXF1aXJlKFwiLi90aWNrZXJcIik7XG5jb25zdCBldmVudCA9IHJlcXVpcmUoXCIuL2V2ZW50XCIpLmluaXQoKTtcbmNvbnN0IENsb2NrID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBNQVhfRlBTID0gNjA7XG5jb25zdCBub29wID0gKCkgPT4ge307XG5cbi8qKlxuICogaW5pdCAtIEluaXRhbGl6ZXMgdGhlIGNsb2NrIHdpdGggY29ycmVjdCBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7T2JqZWN0fSBvcHRzXG4gKiBAcGFyYW0gIHtOdW1iZXJ9IG9wdHMuZnBzIFRoZSBmcHMgeW91IHdhbnQgdGhlIGNsb2NrIHRvIHRpY2sgYXQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suaW5pdCA9IGZ1bmN0aW9uIGluaXRDbG9jayhvcHRzPXt9KSB7XG4gIG9wdHMgPSBPYmplY3QuYXNzaWduKHtcbiAgICBmcHM6IE1BWF9GUFMsXG4gIH0sIG9wdHMpO1xuXG4gIHRoaXMuc2xhdmVzID0gW107XG4gIHRoaXMucGFyZW50ID0gZXZlbnQ7XG5cbiAgLy8gWmVybyBiYXNlZCBmcmFtZSBjb3VudC5cbiAgdGhpcy5pbmRleCA9IC0xO1xuXG4gIC8vIFNhdmUgYSByZWZlcmVuY2UgdG8gdGhlIGFuaW1hdGlvbiBmcmFtZSBzbyB3ZSBjYW4gY2FuY2VsIGl0XG4gIHRoaXMuckFGID0gMDtcblxuICAvLyBUaW1lIHByb3BlcnRpZXNcbiAgdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMubGFzdFRpbWU7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgPSAwO1xuXG4gIC8vIFRoZSBtYXhpbXVtIEZQUyB0aGUgYnJvd3NlciBjYW4gZGVsaXZlciBpcyA2MC5cbiAgdGhpcy5mcHMgPSBvcHRzLmZwcyA+IE1BWF9GUFMgP1xuICAgIE1BWF9GUFMgOlxuICAgIChvcHRzLmZwcyB8fCBNQVhfRlBTKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogc3RhcnQgLSBTdGFydHMgdGhlIGNsb2NrIHdpdGggc3RhcnRpbmcgdGltZSBwcm9wZXJ0aWVzLlxuICogQHBhcmFtICB7TnVtYmVyfSBmcHMgVGhlIGZwcyB5b3Ugd2FudCB0aGUgY2xvY2sgdG8gdGljayBhdC5cbiAqIEByZXR1cm4ge0Nsb2NrfVxuICovXG5DbG9jay5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5mcHMgPiA2MCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBnaXZlbiBmcHMgaXMgdG9vIGhpZ2hcIik7XG4gIH1cblxuICBpZiAoK3RoaXMuZnBzID09PSBOYU4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgZ2l2ZW4gZnBzIGlzIG5vdCB2YWxpZFwiKTtcbiAgfVxuXG4gIHRoaXMuZnBzID0gMTAwMCAvIHRoaXMuZnBzO1xuICB0aGlzLnN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICB0aGlzLmxhc3RUaW1lID0gdGhpcy5zdGFydFRpbWU7XG5cbiAgLy8gU3RhcnQgdGlja2luZ1xuICB0aGlzLmxvb3AodGhpcy5zdGFydFRpbWUpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogdGlja1xuICogQHBhcmFtICB7TnVtYmVyfSBuZXdUaW1lIEEgdmFsdWUgaW4gbXMgdGhhdCBpcyBlcXVhbCB0byB0aGUgY3VycmVudCB0aW1lLlxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLmxvb3AgPSBmdW5jdGlvbiBsb29wKG5ld1RpbWUpIHtcbiAgdGhpcy5yQUYgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcC5iaW5kKHRoaXMpKTtcblxuICBsZXQgZGVsdGEgPSBuZXdUaW1lIC0gdGhpcy5sYXN0VGltZTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IG5ld1RpbWUgLSB0aGlzLnN0YXJ0VGltZTtcblxuICBpZiAoZGVsdGEgPiB0aGlzLmZwcykge1xuICAgIHRoaXMuaW5kZXgrKztcblxuICAgIHRoaXMud2hpcFNsYXZlcyh7XG4gICAgICBuZXdUaW1lLFxuICAgICAgZGVsdGEsXG4gICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgIGxhc3RUaW1lOiB0aGlzLmxhc3RUaW1lLFxuICAgICAgY2xvY2tTdGFydDogdGhpcy5zdGFydFRpbWUsXG4gICAgICB0aW1lU2luY2VTdGFydDogdGhpcy50aW1lU2luY2VTdGFydCxcbiAgICB9KTtcblxuICAgIHRoaXMubGFzdFRpbWUgPSBuZXdUaW1lIC0gKGRlbHRhICUgdGhpcy5mcHMpO1xuICB9XG5cbiAgdGhpcy5lbWl0KFwicmVuZGVyXCIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBzdG9wIC0gU3RvcCB0aGUgY2xvY2sgYW5kIGNhbGwgdGhlIGxhc3QgdGljayBpZiBuZWVkZWQuXG4gKiBAcmV0dXJuIHtDbG9ja31cbiAqL1xuQ2xvY2suc3RvcCA9IGZ1bmN0aW9uIHN0b3BDbG9jaygpIHtcbiAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yQUYpO1xuXG4gIC8vIFJlY29yZCB3aGVuIHdlIHN0b3BwZWQuXG4gIHRoaXMuc3RvcFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCArPSB0aGlzLnN0b3BUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcblxuICB0aGlzLmVtaXQoXCJzdG9wcGVkXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogd2hpcFNsYXZlcyAtIFJ1biBhbGwgc2xhdmVzIGluIHNlcXVlbmNlIGFuZCBwYXNzIGluXG4gKiB0aGUgZ2l2ZW4gc3RhdGUgb2YgdGhlIGNsb2NrLlxuICogQHBhcmFtICB7T2JqZWN0fSBzdGF0ZVxuICogQHJldHVybiB7Q2xvY2t9XG4gKi9cbkNsb2NrLndoaXBTbGF2ZXMgPSBmdW5jdGlvbiB3aGlwU2xhdmVzKHN0YXRlKSB7XG4gIGlmICghdGhpcy5zbGF2ZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5zbGF2ZXMuZm9yRWFjaCgoc2xhdmUsIGluZGV4KSA9PiB7XG4gICAgc2xhdmUubnVkZ2Uoc3RhdGUpO1xuICB9KTtcblxuICB0aGlzLmVtaXQoXCJ0aWNrXCIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbkNsb2NrLmNyZWF0ZVNsYXZlID0gZnVuY3Rpb24gY3JlYXRlU2xhdmUob3B0cykge1xuICBpZiAoIW9wdHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgcHJvdmlkZSBhIG9wdGlvbnMgb2JqZWN0XCIpO1xuICB9XG5cbiAgY29uc3Qge2lkLCBkdXJhdGlvbn0gPSBvcHRzO1xuICBjb25zdCB0aW1lU3RhbXAgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICBjb25zdCBzbGF2ZSA9IE9iamVjdC5jcmVhdGUodGlja2VyKVxuICAgIC5pbml0KHt0aW1lU3RhbXAsIGlkLCBkdXJhdGlvbn0pO1xuXG4gIGlmIChpZCkge1xuICAgIHRoaXMuc2xhdmVzLnB1c2goc2xhdmUpO1xuICAgIHJldHVybiBzbGF2ZTtcbiAgfVxuXG4gIHNsYXZlLmlkID0gdGhpcy5zbGF2ZXMucHVzaChzbGF2ZSk7XG4gIHJldHVybiBzbGF2ZTtcbn07XG5cbkNsb2NrLnJlbW92ZVNsYXZlID0gZnVuY3Rpb24gcmVtb3ZlU2xhdmUoaWQpIHtcbiAgdGhpcy5zbGF2ZXMgPSB0aGlzLnNsYXZlcy5maWx0ZXIoKHNsYXZlKSA9PiB7XG4gICAgaWYgKHNsYXZlLmlkICE9PSBpZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHNsYXZlLnJlbW92ZUFsbExpc3RlbmVycygpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59O1xuXG5DbG9jay5jbGVhclNsYXZlcyA9IGZ1bmN0aW9uIGNsZWFyU2xhdmVzKCkge1xuICBpZiAodGhpcy5zbGF2ZXMubGVuZ3RoKSB0aGlzLnNsYXZlcyA9IFtdO1xufTtcblxuQ2xvY2sucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdG9wKCk7XG4gIHRoaXMuY2xlYXJTbGF2ZXMoKTtcbiAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgdGhpcy5yQUYgPSAwO1xufTtcblxuQ2xvY2sucmVtb3ZlQWxsU2xhdmVzID0gQ2xvY2suY2xlYXJTbGF2ZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvY2s7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGliL2Nsb2NrLmpzIiwiY29uc3QgZXZlbnQgPSByZXF1aXJlKFwiLi9ldmVudFwiKTtcbmNvbnN0IE1BWF9GUFMgPSAxMDAwLzYwO1xuY29uc3QgVGlja2VyID0gT2JqZWN0LmNyZWF0ZShldmVudCk7XG5jb25zdCBTVEFURSA9IHtcbiAgU1RPUFBFRDogXCJTVE9QUEVEXCIsXG4gIFJVTk5JTkc6IFwiUlVOTklOR1wiLFxuICBET05FOiBcIkRPTkVcIixcbn07XG5cblxuVGlja2VyLmluaXQgPSBmdW5jdGlvbiBpbml0KHtcbiAgdGltZVN0YW1wPXBlcmZvcm1hbmNlLm5vdygpLFxuICBpZCxcbiAgZHVyYXRpb249MTAwMCxcbiAgaW50ZXJ2YWw9TUFYX0ZQUyxcbn0pIHtcbiAgdGhpcy5pZCA9IGlkO1xuICB0aGlzLnBhcmVudCA9IGV2ZW50O1xuICB0aGlzLnBhcmVudC5uYW1lID0gXCJldmVudFwiO1xuXG4gIC8vIFByb2JhYmx5IGNhbnQgc3VwcG9ydCB0aGlzPz9cbiAgLy8gWW91IGhhdmUgdG8gaGF2ZSB5b3VyIG93biBjbG9jay5cbiAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKGR1cmF0aW9uLCBcIm1zXCIpO1xuXG4gIHRoaXMuU1RBVEU7XG4gIHRoaXMuZGVsdGE7XG4gIHRoaXMuc3RvcFRpbWU7XG4gIHRoaXMuc3RhcnRUaW1lID0gMDtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQyID0gMDtcblxuICAvLyBGaXJlIHRoZSBmaXJzdCB0aW1lIHlvdSBnZXQgY2FsbGVkLlxuICB0aGlzLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cblRpY2tlci50aWNrRm9yID0gZnVuY3Rpb24gdGlja0ZvcihkdXJhdGlvbiwgc3RyaW5nKSB7XG4gIHN3aXRjaCAoc3RyaW5nKSB7XG4gIGNhc2UgXCJmcmFtZXNcIjogY2FzZSBcImZcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJmcmFtZXNcIixcbiAgICAgIHZhbHVlOiBkdXJhdGlvbixcbiAgICAgIG1zOiBkdXJhdGlvbiAqIE1BWF9GUFMsXG4gICAgfTtcbiAgY2FzZSBcInNlY29uZHNcIjogY2FzZSBcInNcIjpcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24gKiAxMDAwLFxuICAgIH07XG4gIGNhc2UgXCJtaWxsaXNlY29uZHNcIjogY2FzZSBcIm1zXCI6IGRlZmF1bHQ6XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFwibWlsbGlzZWNvbmRzXCIsXG4gICAgICB2YWx1ZTogZHVyYXRpb24sXG4gICAgICBtczogZHVyYXRpb24sXG4gICAgfTtcbiAgfTtcbn07XG5cblRpY2tlci5zdGFydCA9IGZ1bmN0aW9uIHN0YXJ0KCkge1xuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuUlVOTklORykgcmV0dXJuIGZhbHNlO1xuICB0aGlzLlNUQVRFID0gU1RBVEUuUlVOTklORztcbiAgdGhpcy5zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbn07XG5cblRpY2tlci5zdG9wID0gZnVuY3Rpb24gc3RvcCgpIHtcbiAgaWYgKHRoaXMuU1RBVEUgPT09IFNUQVRFLlNUT1BQRUQpIHJldHVybiBmYWxzZTtcbiAgdGhpcy5TVEFURSA9IFNUQVRFLlNUT1BQRUQ7XG5cbiAgLy8gS25vdyB3aGF0IHRpbWUgaXQgc3RvcHBlZC5cbiAgLy8gc28gdGhhdCBpZiBpdCBzdGFydHMgYWdhaW4gaXRcbiAgLy8gaXQgY2FuIHJlY2FsY3VsYXRlIGhvdyBmYXIgaXQgbmVlZHMgdG8gZ28uXG4gIGNvbnN0IG5ld0R1cmF0aW9uID0gdGhpcy5kdXJhdGlvbi5tcyAtIHRoaXMudGltZVNpbmNlU3RhcnQgfHwgMDtcblxuICB0aGlzLmR1cmF0aW9uID0gdGhpcy50aWNrRm9yKG5ld0R1cmF0aW9uLCBcIm1pbGxpc2Vjb25kc1wiKTtcbiAgdGhpcy50aW1lU2luY2VTdGFydCA9IDA7XG5cbiAgdGhpcy5zdG9wVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xufTtcblxuVGlja2VyLm51ZGdlID0gZnVuY3Rpb24gbnVkZ2Uoc3RhdGUpIHtcbiAgaWYgKCFzdGF0ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBwcm92aWRlIGEgc3RhdGUgb2JqZWN0XCIpO1xuICB9XG5cblxuICBpZiAodGhpcy5TVEFURSA9PT0gU1RBVEUuU1RPUFBFRCB8fCB0aGlzLlNUQVRFICE9PSBTVEFURS5SVU5OSU5HKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdGhpcy5TVEFURSA9IFNUQVRFLlJVTk5JTkc7XG4gIHRoaXMudGltZVNpbmNlU3RhcnQgKz0gc3RhdGUuZGVsdGE7XG5cbiAgaWYgKHRoaXMudGltZVNpbmNlU3RhcnQgPCB0aGlzLmR1cmF0aW9uLm1zKSB7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5TVEFURSA9IFNUQVRFLkRPTkU7XG4gICAgdGhpcy5uZWVkc1VwZGF0ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRpY2tlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdGlja2VyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==