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
 * @param  {Int} max - The maxium value in the range.
 * @param  {Int} min - The minimum value in the range.
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
  return radi > distance;
};

module.exports = new Utils();
