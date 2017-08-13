// @flow

/* eslint max-len: 0 */

/**
 * This module is composed of small function that
 * should be used when needed. Most functions are pure
 * and only return values. For more info read the docs.
 */

import type Vector from "./vectors.js";

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
function normalize(val: number, min: number, max: number): number {
  return ((val - min) / (max - min): number);
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
function lerp(val: number, min: number, max: number): number {
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
function map(value: number, srcMin: number, srcMax: number, destMin: number, destMax: number): number {
  srcMax = (Math.max(srcMax, srcMin): number);
  srcMin = (Math.min(srcMax, srcMin): number);
  destMin = (Math.min(destMin, destMax): number);
  destMax = (Math.max(destMin, destMax): number);
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
function percent(val: number): number {
  return ((val * 100): number);
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
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
};

/**
 * @memberOf  Utils
 * @description Given two numbers return a random number between the two.
 * @param  {Integer} x
 * @param  {Integer} y
 * @return {Integer}
 */
function randomBetween(x: number, y: number): number {
  let min = Math.min(x, y);
  let max = Math.max(x, y);
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
function distanceXY(x0: number, y0: number, x1: number, y1: number): number {
  const dx = x0 - x1;
  const dy = y0 - y1;
  return Math.hypot(dx, dy);
};

/**
 * @description Given two vectors return the distance between the two.
 * @memberOf Utils
 * @param  {Vector} v1
 * @param  {Vector} v2
 * @return {Number}
 */
function distanceVec(v1: Vector, v2: Vector): number {
  const dVec = v1.subtract(v2);
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
function inRange(val: number, min: number, max: number): boolean {
  return (val <= Math.max(max, min)) && (Math.min(max, min) <= val);
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
function rangeIntersect(min0: number, max0: number, min1: number, max1: number): boolean {
  return (
    Math.max(max0, min0) >= Math.min(min1, max1) &&
    Math.min(min0, max0) <= Math.max(max1, min1)
  );
};

/**
 * @description Given two rectange see if the intersect.
 * @memberOf Utils
 * @param  {Particle} r0
 * @param  {Particle} r1
 * @return {Boolean}
 */
function collisionRect(r0: any, r1: any) {
  const r0x = r0.state.x;
  const r0y = r0.state.y;
  const r1x = r1.state.x;
  const r1y = r1.state.y;

  const r0w = r0x + r0.state.width;
  const r0h = r0y + r0.state.height;
  const r1w = r1x + r1.state.width;
  const r1h = r1y + r1.state.height;

  return (
    rangeIntersect(r0x, r0w, r1x, r1w) &&
    rangeIntersect(r0y, r0h, r1y, r1h)
  );
};

/**
 * @description Given to particle with radi return wether they collide are not
 * @memberOf Utils
 * @param  {Particle} c1
 * @param  {Particle} c2
 * @return {Boolean}
 */
function collisionCircle(c1: any, c2: any): boolean {
  const radi = (c1.state.radius + c2.state.radius);
  const distance = distanceXY(c1.state.x, c1.state.y, c2.state.x, c2.state.y);

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
function collisionCirclePoint(x: number, y: number, circle: any) {
  // TODO Write tests.
  const dist = distanceXY(
    x,
    y,
    circle.state.x,
    circle.state.y
  );

  return circle.state.radius > dist;
};

/**
 * @description detect a collision between circles a vector.
 * @memberOf Utils
 * @param  {Vector}   vec
 * @param  {Particle} circle
 * @return {Boolean}
 */
function collisionCircleVec(vec: Vector, circle: any) {
  return circle.state.radius > distanceXY(
    vec.get("x"),
    vec.get("y"),
    circle.state.x,
    circle.state.y
  );
};

/**
 * @description detect collision of a rectangle and a point.
 * @memberOf Utils
 * @param  {Number}   x
 * @param  {Number}   y
 * @param  {Particle} rect
 * @return {Boolean}
 */
function collisionRectPoint(x: number, y: number, rect: any) {
  const rectX = rect.state.x;
  const rectY = rect.state.y;
  return (
    inRange(x, rectX, rectX + rect.state.width) &&
    inRange(y, rectY, rectY + rect.state.height)
  );
};

/**
 * @description Given a vector and a retangle check wether they collided.
 * @memberOf Utils
 * @param  {Vector}   vec
 * @param  {Particle} rect
 * @return {Boolean}
 */
function collisionRectVec(vec: Vector, rect: any) {
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
function throttle(func: Function, wait: number, options: any) {
  let context;
  let args: any;
  let result;
  let timeout = null;
  let previous = 0;
  if (!options) options = {};
  const later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function(...args: any) {
    let now = Date.now();
    if (!previous && options.leading === false) previous = now;
    let remaining = wait - (now - previous);
    context = this;
    args = (args: any);
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
function setLength(length: number, x: number, y: number): Array<number> {
  if (typeof x !== "number" ||
      typeof y !== "number" ||
      typeof length !== "number") {
    throw new Error("Please provide valid x and y values");
  }

  const angle = Math.atan2(y, x);
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
function setAngle(angle: number, x: number, y: number): Array<number> {
  if (typeof x !== "number" ||
      typeof y !== "number" ||
      typeof angle !== "number") {
    throw new Error("Please provide valid x and y values");
  }

  const length = Math.hypot(x, y);
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
function degToRad(deg: number): number {
  return deg / 180 * Math.PI;
};

/**
 * @memberOf Utils
 * @description Coverts radians to degress
 * @param  {number} rad
 * @return {number}
 */
function radToDeg(rad: number): number {
  return rad * 180 / Math.PI;
};

/**
 * @memberOf Utils
 * @description Round to nearest place given.
 * @param  {number} val
 * @param  {number} places An exponent
 * @return {number}
 */
function roundToPlaces(val: number, places: number): number {
  const mult = Math.pow(10, places);
  return Math.round(val * mult) / mult;
};

/**
 * @memberOf Utils
 * @param  {number} val
 * @param  {number} nearest
 * @return {number}
 */
function roundToMultiple(val: number, nearest: number): number {
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
function quadraticBezier(v0: number, v1: number, v2: number, t: number): number {
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
function cubicBezier(v0 : number, v1 : number, v2 : number, v3 : number, t : number): number {
  return Math.pow(1 - t, 3) * v0 +
         Math.pow(1 - t, 2) * 3 * t * v1 +
         (1 - t) * 3 * t * t * v2 +
         t * t * t + v3;
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
function quadraticBezierPoint(p0: any, p1: any, p2: any, t: number) {
  const x = quadraticBezier(p0.x, p1.x, p2.x, t);
  const y = quadraticBezier(p0.y, p1.y, p2.y, t);
  return {x, y};
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
function cubicBezierPoint(p0: any, p1: any, p2: any, p3: any, t: number) {
  const x = cubicBezier(p0.x, p1.x, p2.x, p3.x, t);
  const y = cubicBezier(p0.y, p1.y, p2.y, p3.y, t);
  return {x, y};
};

/**
 * @memberOf Utils
 * @description Given points on the plane draw a curved line between
 * all of them.
 * @param  {{number, number}} points
 * @param  {CanvasRenderingContext2D} ctx
 */
function multiCurve(points: Array<any>, ctx: Object) {
  let p0;
  let p1;
  let midX;
  let midY;

  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length - 2; i++) {
    p0 = points[i];
    p1 = points[i + 1];
    midX = (p0.x + p1.x)/2;
    midY = (p0.y + p1.y)/2;
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
function ease(ease: number, a: number, b: number): boolean | number {
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
function easeTo(ease: number, origin: Object, target: Object, threshold: number=0.1) {
  const dx = target.x - origin.x;
  const dy = target.y - origin.y;

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
function isObject(data: any): boolean {
  return typeof data === "object" && ({}).toString.call(data) === "[object Object]";
};

/**
 * unique return an array with no duplicate values
 * @param  {Array} array
 * @return {Array}
 */
function unique(array: Array<any>) {
  return array.reduce((x, y) => {
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
function perspective(focalLength: number, distance: number): number {
  return focalLength / (focalLength - distance);
};

/**
 * @class Utils
 * @return {Utils}
 */

module.exports = {
  normalize,
  lerp,
  map,
  percent,
  clamp,
  randomBetween,
  distanceXY,
  distanceVec,
  inRange,
  rangeIntersect,
  collisionRect,
  collisionCircle,
  collisionCirclePoint,
  collisionCircleVec,
  collisionRectPoint,
  collisionRectVec,
  throttle,
  setLength,
  setAngle,
  degToRad,
  radToDeg,
  roundToPlaces,
  roundToMultiple,
  quadraticBezier,
  cubicBezier,
  quadraticBezierPoint,
  cubicBezierPoint,
  multiCurve,
  perspective,
  ease,
  easeTo,
  isObject,
  unique,
};

// module.exports = Object.create(Utils);
