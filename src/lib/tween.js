/**
 * YAT stands for Yet Another Tween.
 * Why not have one more package that does the same thing as the 50 out there?
 * Well thats a good question that will not be answered in this comment block.
 * To be honest its for practice and learning purposes. And if anyone in their
 * right mind actaully benefits from this then so be it.
 */

const event = require("./event");

// Inherits from event
const YAT = Object.create(event);

YAT.init = function init() {
  /**
   * easingFns
   * @description All easing function are orignially written
   * by robert penner
   * @see {@link http://robertpenner.com/easing/}
   * @type {Object}
   */
  this.easingFns = {
    ease() {},
    easeInOutQuad() {},
    easeInQuad() {},
    easeOutQuad() {},
  };

  /**
   * tweens
   * @description A list of all the available tweens.
   * @type {Array}
   */
  this.tweens = [];
};

YAT.init = function(opts) {
  opts.obj;
  opts.props;
  opts.duration;
  opts.easingFn;
};

YAT.create = function(id, opts) {
  const YATInstance = Object.create(YAT);
  YATInstance.init(opts);

  // Array.push will return an index of where it pushed to.
  YATInstance.id = this.tweens.push(YATInstance);
};

YAT.get = function(id) {
  if (this.tweens.length === 1) {
    return YAT[0];
  }

  for (let i = 0; i < this.tween.length; i++) {
    if (this.tween[i].id === id) {
      return this.tween[i];
    }
  }

  return false;
};

YAT.reverse = function() {};
YAT.start = function(id) {};
YAT.stop = function() {};
YAT.finish = function() {};
YAT.continue = function() {};

module.exports = YAT;
