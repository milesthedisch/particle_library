/**
 * YAT stands for Yet Another Tween.
 * Why not have one more package that does the same thing as the 50 out there?
 * Well thats a good question that will not be answered in this comment block.
 * To be honest its for practice and learning purposes. And if anyone in their
 * right mind actaully benefits from this then so be it.
 */

const event = require("./event");
const extend = require("extend");
const clone = require("lodash/cloneDeep");

const DEFAULTS = {
  obj: {x: 0, y: 0},
  props: {x: 100, y: 100},
  easingFn: "ease",
  duration: 1000,
};

// Inherits from event
const YAT = Object.create(event);

YAT.init = function init(opts=clone(DEFAULTS)) {
  this.opts = extend({}, opts);

  /**
   * easingFns
   * @description All easing functions are orignially written
   * by robert penner, the tweening god.
   * @see {@link http://robertpenner.com/easing/}
   * @type {Object}
   */
  this.easingFns = {
    ease(change, norm, begin) {
      return c * n + b;
    },
    easeInOutQuad(c, n, a) {
      if ((n*=2) < 1) {
        return c/2* (n*n) + b;
      }
      return -c/2 * ((--n)*(n-2) - 1) + b;
    },
    easeInQuad(c, n, a) {
      return c * (n * n) + a;
    },
    easeOutQuad() {
      return c * (n * (2 - n)) + b;
    },
  };

  this.rpFns = {
    easeInQuad(x, t, b, c, d) {
      return c*(t/=d)*t + b;
    },
    easeOutQuad(x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    },
    easeInOutQuad(x, t, b, c, d) {
      if ((t/=d/2) < 1) return c/2*t*t + b;
      return -c/2 * ((--t)*(t-2) - 1) + b;
    },
  };

  /**
   * tweens
   * @description A list of all the available tweens.
   * @type {Array}
   */
  this.tweens = [];
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
