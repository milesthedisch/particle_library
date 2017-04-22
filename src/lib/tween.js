/**
 * YAT stands for Yet Another Tween.
 * Why not have one more package that does the same thing as the 50 out there?
 * Well thats a good question that will not be answered in this comment block.
 * To be honest its for practice and learning purposes. And if anyone in their
 * right mind actaully benefits from this then so be it.
 */


const extend = require("extend");
const clone = require("lodash/cloneDeep");
const event = require("./event");
const utils = require("./utils");
const clock = require("./clock");

const DEFAULTS = {
  current: {x: 0, y: 0},
  obj: {x: 0, y: 0},
  props: {x: 100, y: 100},
  easingFn: "ease",
  duration: 1000,
};

// Can use Event and Clock methods.
const YAT = Object.assign(utils, event.init());

YAT.init = function initTween(opts=clone(DEFAULTS)) {
  this._event = event;
  this._clock = clock;
  this.opts = extend({}, opts);

  /**
   * easingFns
   * @description All easing functions are orignially written
   * by robert penner, the tweening god.
   * Here each method is passed a normalized value. Which is
   * usually a number between 0 and 1. You can think of this number as
   * a percentage of a range. With that normlized value / percentage we
   * can map that percentage to another range. This is called interpolation.
   * @see {@link http://robertpenner.com/easing/}
   * @type {Object}
   */
  this.easingFns = {
    // Here this ease function is linear as there is only one
    // n value. Each ease function can be mapped to a polynomial.
    ease(c, n, b) { // polynomial: ax + b = c; where x is the normalized value
      return c * n + b;
    },
    easeInQuad(c, n, a) { // polynomial: 1x^2 + 0x + 0 = d;
      return c * (n * n) + a;
    },
    easeOutQuad() { // polynomial: -1x^2 + 2x + 0 = d;
      return c * (n * (2 - n)) + b;
    },
    easeInOutQuad(change, norm, begin) {
      if ((n*=2) < 1) {
        return c/2 * (n*n) + b; // Polynomial for half the range:
        // 2x^2 + 0x + 0 = d;
      }
      return -c/2 * ((--n)*(n-2) - 1) + b; // Polynomial for the the upper
      // half of the range: -2x^2 + 4x - 1
    },
  };

  /**
   * tweens
   * @description A list of all the available tweens.
   * @type {Array}
   */
  this.tweens = [];

  return this;
};

YAT.create = function(id, opts) {
  const YATInstance = Object.create(YAT);
  YATInstance.init(opts);

  // Array.push will return an index of where it pushed to.
  if (YATInstance.id) {
    if (this.tween.every((x) => x.id !== id)) {
      YATInstance.id = id;
      this.tweens.push(YATInstance);
    }

    throw new Error(`The tween with id: ${id} already exsists.`);
  }

  YATInstance.id = this.tweens.push(YATInstance);
  return YATInstance;
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

YAT.rewind = function(id=this.id) {
  const tween = this.get(id);

  if (!this.stopped) {
    tween.stop();
  }

  // Figure out a way to cache the old props //
  this.opts.obj = this.opts.props;
  this.opts.props = this.opts.propsBeforeTween;

  tween.start();
};

YAT.start = function(...args) {
  if (typeof args[0] === "object") {
    /* eslint-disable */
    var {
      id = this.id, 
      props = this.opts.props, 
      easingFn = this.opts.easingFn, 
      duration = this.opts.duration,
    } = args[0];
    /* eslint-enable */
  } else {
    /* eslint-disable */
    var [
      id = this.id, 
      props = this.opts.props, 
      easingFn = this.opts.easingFn, 
      duration = this.opts.duration,
    ] = args;
    /* eslint-enable */
  }

  // I need to create a clock function. It needs to be able to tick every rAF or
  // if given an interval tick based on that. Needs to
  // be able to tick for a given duration and a given interval.
  // Should be able to cancel the ticker, start the ticker
  // and stop the ticker. It should also be able to get its current progress.
  this.ticker = this.clock.createSlave({id, duration});
  this.ticker.on("tick", function onTick() {

  });
  return this;
};

YAT.delay = function delay(duration) {
  this.ticker.stop();
  setTimeout(() => this.ticker.start());
  return this;
};

YAT.stop = function stop() {
  this.ticker.stop();
  return this;
};

YAT.finish = function finish() {
  this.ticker.stop();
  this._clock.removeSlave(this.ticker.id);
  update();
  return this;
};

YAT.continue = function() {};

function update() {

}

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
