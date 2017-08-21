/* eslint max-len: 0 */

// @flow

const utils = require("./utils.js");

const INITIAL_STATE = {
  x: 0,
  y: 1,
};

/**
 * Vector class is responsible for doing vector operations and storing
 * the x and y coordinates of the vector.
 */

/**
 * @class Vector
 * @param {Object} state object.
 */
class Vector {
  state: {
    x: number;
    y: number;
  };

  /**
   * constructor
   * @param  {Object} state Initial state
   */
  constructor(state: Object = INITIAL_STATE) {
    this.state = state;
  }

  /**
   * Create - Easy way to instantiate a vector.
   * @memberOf Vector
   * @param  {Int} x
   * @param  {Int} y
   * @return {Vector}   A object inheriting from Vector.
   */
  create(x: number = 0, y: number = 0): Vector {
    const vec = new Vector({x, y});
    return vec;
  };

  /**
   * Set - A setter for the vector class.
   * @memberOf Vector
   * @param  {*} prop
   * @param  {*} val
   * @return {Boolean} Is the prop your passing in exsist.
   */
  set(prop: string, val: any): boolean {
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
  get(prop: string): any {
    return this.state[prop];
  };

  /**
   * setAngle - Plot the corrdinates based on radians given.
   * @memberOf Vector
   * @param {Radians} rad A floating point number.
   * @return {Vector}
   */
  setAngle(rad: number): Vector {
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
   * @return {Vector}
   */
  setLength(length: number): Vector {
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
  getLength(): number {
    const x = (this.get("x"): number);
    const y = (this.get("y"): number);
    return Math.hypot(x, y);
  };

  /**
   * getAngle - Get the angle of coordinates from center plane.
   * @memberOf Vector
   * @return {Integer} Cooridinates.
   */
  getAngle(): number {
    const x = (this.get("x"): number);
    const y = (this.get("y"): number);
    return Math.atan2(y, x);
  };

  /**
   * random generate a vector with random states.
   * @memberOf Vector
   * @param {Number} min - A min range on the random vector state.
   * @param {Number} max - A max range on the random vector state.
   * @return {Vector}
   */
  random(min: number=1, max: number=10): Vector {
    const x = utils.lerp(Math.random(), min, max);
    const y = utils.lerp(Math.random(), min, max);
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
  randomBetween(xMin: number=0, xMax: number=10, yMin: number=0, yMax: number=10): Vector {
    xMax = Math.max(xMin, xMax);
    xMin = Math.min(xMin, xMax);
    yMax = Math.max(yMin, yMax);
    yMin = Math.min(yMin, yMax);

    const y = (utils.randomBetween(yMin, yMax): number);
    const x = (utils.randomBetween(xMin, xMax): number);

    return this.create(x, y);
  };

  /**
   * add - Should add vectors together given a vector
   * @memberOf Vector
   * @param {Vector} v2 A given vector to add.
   * @return {Vector} A vector with cooridnates, or multiple vectors.
   */
  add(v2: Vector): Vector {
    return this.create(
      this.get("x") + v2.get("x"),
      this.get("y") + v2.get("y")
    );
  };

  /**
   * subtract - should subtract the given vector with its own vector.
   * @memberOf Vector
   * @param  {Vector} v2 A vector that contains state.
   * @return {Vector} A vector that contains a reduced state.
   * @example {x: 2, y: 2} - {x: 2, y: 2} = {x: 0, y: 0}
   */
  subtract(v2: Vector): Vector {
    return this.create(
      this.get("x") - v2.get("x"),
      this.get("y") - v2.get("y")
    );
  };

  /**
   * Mulitplying vectors together
   * @memberOf Vector
   * @example {x: 2, y: 2} * {x: 2, y: 2} = {x: 4, y: 4}
   * @param  {Vector} v2 A vector that contains state.
   * @return {Vector}    A vector that contains a reduced state.
   */
  multiply(v2: Vector): Vector {
    return this.create(
      this.get("x") * v2.get("x"),
      this.get("y") * v2.get("y")
    );
  };

  /**
   * Divide vectors together.
   * @memberOf Vector
   * @param  {Vector} v2 A vector that contains state.
   * @return {Vector}    A vector that contains a reduced state.
   */
  divide(v2: Vector): Vector {
    return this.create(
      this.get("x") / v2.get("x"),
      this.get("y") / v2.get("y")
    );
  };

  /**
   * Adds to current state the state of v2
   * @memberOf Vector
   * @param {Vector} [v2] - A vector that contains state.
   * @return {Object} [state] - Key value pair of coordinates
   */
  addTo(v2: Vector): Vector {
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
  subtractFrom(v2: Vector): Vector {
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
  multiplyBy(v2: Vector): Vector {
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
  divideBy(v2: Vector): Vector {
    this.state.x = this.get("x") / v2.get("x");
    this.state.y = this.get("y") / v2.get("y");

    return this;
  };

  /**
   * @memberOf Vector
   * @param  {Number} angle A number of radians to rotate clockwise by.
   * @return {Vector}
  */
  rotateBy(angle: number): Vector {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const x = this.state.x * cos - this.state.y * sin;
    const y = this.state.y * cos + this.state.x * sin;

    this.state.x = x;
    this.state.y = y;

    return this;
  };

  /**
   * v1
   * @param {Vector} v1 Vector
   * @param {Vector} v2 Vector
   * @return {number}
   */
  static distanceBetween(v1: Vector, v2: Vector): number {
    const dVec = v1.subtract(v2);
    return Math.hypot(dVec.get("x"), dVec.get("y"));
  }

  /**
   * @description Given twos vectors see if they intersect.
   * @memberOf Utils
   * @param  {Vector} vec0
   * @param  {Vector} vec1
   * @return {Boolean}
   */
  static vectorIntersect(vec0: Vector, vec1: Vector): boolean {
    const x0 = vec0.get("x");
    const y0 = vec0.get("y");
    const x1 = vec1.get("x");
    const y1 = vec1.get("y");
    return utils.rangeIntersect(x0, y0, x1, y1);
  };
};

module.exports = Vector;
