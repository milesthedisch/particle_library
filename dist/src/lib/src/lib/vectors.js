"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint max-len: 0 */

var utils = require("./utils.js");

var INITIAL_STATE = {
  x: 0,
  y: 1
};

/**
 * Vector class is responsible for doing vector operations and storing
 * the x and y coordinates of the vector.
 */

var Vectorable = function () {
  function Vectorable() {
    _classCallCheck(this, Vectorable);
  }

  _createClass(Vectorable, [{
    key: "create",

    /* eslint "require-jsdoc": 0 */
    value: function create() {}
  }, {
    key: "set",
    value: function set(string, any) {}
  }, {
    key: "get",
    value: function get(string) {}
  }, {
    key: "setAngle",
    value: function setAngle(number) {}
  }, {
    key: "setLength",
    value: function setLength() {}
  }, {
    key: "getLength",
    value: function getLength(number) {}
  }, {
    key: "setLength",
    value: function setLength(number) {}
  }, {
    key: "random",
    value: function random(a, b) {}
  }, {
    key: "add",
    value: function add(Vector) {}
  }, {
    key: "subtract",
    value: function subtract(Vector) {}
  }, {
    key: "multiply",
    value: function multiply(Vector) {}
  }, {
    key: "divide",
    value: function divide(Vector) {}
  }, {
    key: "addTo",
    value: function addTo(Vector) {}
  }, {
    key: "subtractFrom",
    value: function subtractFrom(Vector) {}
  }, {
    key: "multiplyBy",
    value: function multiplyBy(Vector) {}
  }, {
    key: "divideBy",
    value: function divideBy(Vector) {}
  }, {
    key: "rotate",
    value: function rotate(number) {}
  }, {
    key: "randomBetween",
    value: function randomBetween(number) {}
  }]);

  return Vectorable;
}();

;

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
function create() {
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
function set(prop, val) {
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
function get(prop) {
  return this.state[prop];
};

/**
 * setAngle - Plot the corrdinates based on radians given.
 * @memberOf Vector
 * @param {Radians} rad A floating point number.
 * @return {Vector}
 */
function setAngle(rad) {
  // TODO: Add check rad is number
  // 1. Create utils.isNumber function.

  var length = this.getLength();

  this.set("x", Math.cos(rad) * length);
  this.set("y", Math.sin(rad) * length);

  return this;
};

/**
 * setLength - Takes a length and sets coordinate.
 * @memberOf Vector
 * @param {Integer} length
 */
function setLength(length) {
  // TODO: Add check rad is number
  // 1. Create utils.isNumber function.

  var rad = this.getAngle();

  this.set("x", Math.cos(rad) * length);
  this.set("y", Math.sin(rad) * length);

  return this;
};

/**
 * getLength - Gets length of the coordinates from center plane.
 * @memberOf Vector
 * @return {Integer} Cooridinates.
 */
function getLength() {
  var x = this.get("x");
  var y = this.get("y");
  return Math.hypot(x, y);
};

/**
 * getAngle - Get the angle of coordinates from center plane.
 * @memberOf Vector
 * @return {Integer} Cooridinates.
 */
function getAngle() {
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

function add(v2) {
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
function subtract(v2) {
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
function multiply(v2) {
  return this.create(this.get("x") * v2.get("x"), this.get("y") * v2.get("y"));
};

/**
 * Divide vectors together.
 * @memberOf Vector
 * @param  {Vector} v2 A vector that contains state.
 * @return {Vector}    A vector that contains a reduced state.
 */
function divide(v2) {
  return this.create(this.get("x") / v2.get("x"), this.get("y") / v2.get("y"));
};

/**
 * Adds to current state the state of v2
 * @memberOf Vector
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
function addTo(v2) {
  this.state.x = this.get("x") + v2.get("x");
  this.state.y = this.get("y") + v2.get("y");
  return this;
};

/**
 * Subtracts from current state the state of v2
 * @memberOf Vector
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
function subtractFrom(v2) {
  this.state.x = this.get("x") - v2.get("x");
  this.state.y = this.get("y") - v2.get("y");
  return this;
};

/**
 * mulitplies by current state the state of v2
 * @memberOf Vector
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
function multiplyBy(v2) {
  this.state.x = this.get("x") * v2.get("x");
  this.state.y = this.get("y") * v2.get("y");

  return this;
};

/**
 * Divides by current state the state of v2
 * @memberOf Vector
 * @param {Vector} [v2] - A vector that contains state.
 * @return {Object} [state] - Key value pair of coordinates
 */
function divideBy(v2) {
  this.state.x = this.get("x") / v2.get("x");
  this.state.y = this.get("y") / v2.get("y");

  return this;
};

/**
 * @memberOf Vector
 * @param  {Number} angle A number of radians to rotate clockwise by.
*/
function rotate(delta) {
  var cos = Math.cos(delta);
  var sin = Math.sin(delta);

  //
  var x = this.state.x * cos - this.state.y * sin;
  var y = this.state.y * cos + this.state.x * sin;

  this.state.x = x;
  this.state.y = y;

  return this;
};

/**
 * random generate a vector with random states.
 * @memberOf Vector
 * @param {Number} min - A min range on the random vector state.
 * @param {Number} max - A max range on the random vector state.
 * @return {Vector}
 */
function random() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;

  var x = utils.lerp(Math.random(), min, max);
  var y = utils.lerp(Math.random(), min, max);
  return create(x, y);
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
function rBetween() {
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

  return create(x, y);
};

Vector.prototype["+"] = add;
Vector.prototype["-"] = subtract;
Vector.prototype["*"] = multiply;
Vector.prototype["/"] = divide;
Vector.prototype["+="] = addTo;
Vector.prototype["-="] = subtractFrom;
Vector.prototype["*="] = multiplyBy;
Vector.prototype["/="] = divideBy;

module.exports = Object.create({
  create: create,
  set: set,
  get: get,
  setAngle: setAngle,
  setLength: setLength,
  getLength: getLength,
  getAngle: getAngle,
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  addTo: addTo,
  subtractFrom: subtractFrom,
  multiplyBy: multiplyBy,
  divideBy: divideBy,
  rotate: rotate,
  random: random,
  rBetween: rBetween
});