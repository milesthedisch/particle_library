/**
 * This module is composed of small function that
 * should be used when needed. Most functions are pure
 * and only return values. For more info read the docs.
 */

/**
 * @class Utils
 * @return {Utils}
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
 * @memberOf Utils
 * @param  {Int} val - The value that lies in the range.
 * @param  {Int} min - The maxium value in the range.
 * @param  {Int} max - The minimum value in the range.
 * @return {Int} Int - The value represented in that range.
 */
Utils.prototype.normalize = function normalize(val, min, max) {
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
Utils.prototype.percent = function(val) {
  return val * 100;
};

/**
 * @name  clamp
 * @description Given a number and a range return the value between that range or the max number or 
 * min number.
 * @param  {Number} value
 * @param  {Number} min
 * @param  {Number} max
 * @return {Number}
 */
Utils.prototype.clamp = function(value, min, max) {
  return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
};

/**
 * @name  distanceXY
 * @description Given two coordinates return the distance between the two.
 * @param  {Number} x0
 * @param  {Number} y0
 * @param  {Number} x1
 * @param  {Number} y1
 * @return {Number}
 */
Utils.prototype.distanceXY = function(x0, y0, x1, y1) {
  const dx = x0 - x1;
  const dy = y0 - y1;
  return Math.hypot(dx, dy);
};

/**
 * @name  distanceVec
 * @description Given two vectors return the distance between the two.
 * @param  {Vector} v1
 * @param  {Vector} v2
 * @return {Number}
 */
Utils.prototype.distanceVec = function(v1, v2) {
  const dVec = (v1)["-"](v2);
  return Math.hypot(dVec.get("x"), dVec.get("y"));
};

/**
 * @name  collisionCircle
 * @description Given to particle with radi return wether they collide are not
 * @param  {Particle} c1
 * @param  {Particle} c2
 * @return {Boolean}
 */
Utils.prototype.collisionCircle = function(c1, c2) {
  const radi = (c1.get("radius") + c2.get("radius"));
  const distance = this.distanceVec(c1.get("position"), c2.get("position"));

  if (distance) {
    return radi > distance;
  }
  return true;
};

/**
 * @name  circlePointCollision
 * @description Given a point and a circle return a boolean regarding wether they are colliding.
 * @param  {Number}   x
 * @param  {Number}   y
 * @param  {Particle} circle
 * @return {Boolean}
 */
Utils.prototype.collisionCirclePoint = function(x, y, circle) {
  // TODO Write tests.
  const dist = this.distanceXY(
    x,
    y,
    circle.get("position").get("x"),
    circle.get("position").get("y")
  );
  return circle.get("radius") > dist;
};

/**
 * @name  collisionCircleVec
 * @description detect a collision between circles a vector.
 * @param  {Vector}   vec
 * @param  {Particle} circle
 * @return {Boolean}
 */
Utils.prototype.collisionCircleVec = function(vec, circle) {
  return circle.get("radius") > this.distanceVec(vec, circle.get("position"));
};

/**
 * @name  collisionRectPoint
 * @description detect collision of a rectangle and a point.
 * @param  {Number}   x
 * @param  {Number}   y
 * @param  {Particle} rect
 * @return {Boolean}
 */
Utils.prototype.collisionRectPoint = function(x, y, rect) {
  const rectX = rect.get("position").get("x");
  const rectY = rect.get("position").get("y");
  return (
    this.inRange(x, rectX, rectX + rect.get("width")) &&
    this.inRange(y, rectY, rectY + rect.get("height"))
  );
};

/**
 * @name collisionRectVec
 * @description Given a vector and a retangle check wether they collided.
 * @param  {Vector}   vec
 * @param  {Particle} rect [description]
 * @return {Boolean}
 */
Utils.prototype.collisionRectVec = function(vec, rect) {
  return this.collisionRectPoint(vec.get("x"), vec.get("y"), rect);
};

/**
 * @name  inRange
 * @description given a number
 * @param  {Number} val
 * @param  {Number} min
 * @param  {Number} max
 * @return {Boolean}
 */
Utils.prototype.inRange = function(val, min, max) {
  return (val <= Math.max(max, min)) && (Math.min(max, min) <= val);
};

/**
 * @name  rangeIntersect
 * @description Given a two ranges see if both intersect each other.
 * @param  {Number} x0
 * @param  {Number} y0
 * @param  {Number} x1
 * @param  {Number} y1
 * @return {Boolean}
 */
Utils.prototype.rangeIntersect = function(min0, max0, min1, max1) {
  return (
    Math.max(max0, min0) >= Math.min(min1, max1) &&
    Math.min(min0, max0) <= Math.max(max1, min1)
  );
};

/**
 * @name  vectorIntersect
 * @description Given twos vectors see if they intersect.
 * @param  {[type]} vec0 [description]
 * @param  {[type]} vec1 [description]
 * @return {[type]}      [description]
 */
Utils.prototype.vectorIntersect = function(vec0, vec1) {
  const x0 = vec0.get("x");
  const y0 = vec0.get("y");
  const x1 = vec1.get("x");
  const y1 = vec1.get("y");
  return this.rangeIntersect(x0, y0, x1, y1);
};

/**
 * @name  collisionRect
 * @description Given two rectange see if the intersect.
 * @param  {Particle} r0
 * @param  {Particle} r1
 * @return {Boolean}
 */
Utils.prototype.collisionRect = function(r0, r1) {
  const r0x = r0.get("position").get("x");
  const r0y = r0.get("position").get("y");
  const r1x = r1.get("position").get("x");
  const r1y = r1.get("position").get("y");

  const r0w = r0x + r0x.get("width");
  const r0h = r0y + r0y.get("height");
  const r1w = r1x + r1x.get("width");
  const r1h = r1y + r1y.get("height");

  return (
    this.rangeIntersect(r0x, r0w, r1x, r1w) &&
    this.rangeIntersect(r0y, r0h, r1y, r1h)
  );
};

module.exports = new Utils();
