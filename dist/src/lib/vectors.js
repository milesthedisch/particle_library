/* eslint max-len: 0 */

const utils = require("./utils.js");

const INITIAL_STATE = {
  x: 0,
  y: 1
};

/**
 * Vector class is responsible for doing vector operations and storing
 * the x and y coordinates of the vector.
 */
class Vectorable {
  /* eslint "require-jsdoc": 0 */
  create() {}
  set(string, any) {}
  get(string) {}
  setAngle(number) {}
  setLength() {}
  getLength(number) {}
  setLength(number) {}
  random(a, b) {}
  add(Vector) {}
  subtract(Vector) {}
  multiply(Vector) {}
  divide(Vector) {}
  addTo(Vector) {}
  subtractFrom(Vector) {}
  multiplyBy(Vector) {}
  divideBy(Vector) {}
  rotate(number) {}
  randomBetween(number) {}
};

/**
 * @class Vector
 * @param {Object} state object.
 */

function Vector(state = INITIAL_STATE) {
  this.state = state;
};

/**
 * Create - Easy way to instantiate a vector.
 * @memberOf Vector
 * @param  {Int} x
 * @param  {Int} y
 * @return {Vector}   A object inheriting from Vector.
 */
function create(x = 0, y = 0) {
  const vec = new Vector({ x, y });
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

  const length = this.getLength();

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

  const rad = this.getAngle();

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
  const x = this.get("x");
  const y = this.get("y");
  return Math.hypot(x, y);
};

/**
 * getAngle - Get the angle of coordinates from center plane.
 * @memberOf Vector
 * @return {Integer} Cooridinates.
 */
function getAngle() {
  const x = this.get("x");
  const y = this.get("y");
  return Math.atan2(y, x);
};

/**
 * add - Should add vectors together given a vector
 * @memberOf Vector
 * @param {Vector} v2 A given vector to add.
 * @return {Vector} A vector with cooridnates, or multiple vectors.
 */

function add(v2) {
  const self = this;

  if (v2.constructor.name === "Array" && v2.length) {
    // Refactor to make more effecient //
    const vecs = v2.map(v => ({ x: v.get("x"), y: v.get("y") })).reduce((v0, vn) => ({ x: v0.x + vn.x, y: v0.y + vn.y }), self.state);

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
  const self = this;

  if (v2.constructor.name === "Array" && v2.length) {
    // Refactor to make more effecient //
    const vecs = v2.map(v => ({ x: v.get("x"), y: v.get("y") })).reduce((v0, vn) => ({ x: v0.x - vn.x, y: v0.y - vn.y }), self.state);

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
  const cos = Math.cos(delta);
  const sin = Math.sin(delta);

  //
  const x = this.state.x * cos - this.state.y * sin;
  const y = this.state.y * cos + this.state.x * sin;

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
function random(min = 1, max = 10) {
  const x = utils.lerp(Math.random(), min, max);
  const y = utils.lerp(Math.random(), min, max);
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
function rBetween(xMin = 0, xMax = 10, yMin = 0, yMax = 10) {
  xMax = Math.max(xMin, xMax);
  xMin = Math.min(xMin, xMax);
  yMax = Math.max(yMin, yMax);
  yMin = Math.min(yMin, yMax);

  const y = utils.randomBetween(yMin, yMax);
  const x = utils.randomBetween(xMin, xMax);

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
  create,
  set,
  get,
  setAngle,
  setLength,
  getLength,
  getAngle,
  add,
  subtract,
  multiply,
  divide,
  addTo,
  subtractFrom,
  multiplyBy,
  divideBy,
  rotate,
  random,
  rBetween
});