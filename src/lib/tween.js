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
    ease(c, n, b) {
      return c * n + b;
    },
    easeInOutQuad(change, norm, begin) {
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
