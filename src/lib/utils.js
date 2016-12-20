/**
 * This module is composed of small function that
 * should be used when needed. Most functions are pure
 * and only return values. For more info read the docs.
 */

/**
 * Utils constructor
 * @return {Self} it self
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
 * @param  {Int} val - The value that lies in the range.
 * @param  {Int} max - The maxium value in the range.
 * @param  {Int} min - The minimum value in the range.
 * @return {Int} Int - The value represented in that range.
 */
Utils.prototype.normalize = function normalize(val, max, min) {
  return (val - min) / (max - min);
};

/**
 * lerp - linear interpolation takes a range and a given normalized value
 * and returns a value that represents that normalized value in that range.
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
Utils.prototype.precent = function(val) {
  return val * 100;
};

module.exports = new Utils();
