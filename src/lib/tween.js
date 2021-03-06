/**
 * YAT stands for Yet Another Tween.
 * Why not have one more package that does the same thing as the 50 out there?
 * Well thats a good question that will not be answered in this comment block.
 * To be honest its for practice and learning purposes. And if anyone in their
 * right mind actaully benefits from this then so be it.
 */

const clone = require("lodash/cloneDeep");
const event = require("./event");
const utils = require("./utils");

const DEFAULTS = {
  obj: {x: 0, y: 0},
  props: {x: 100, y: 100},
  easing: "ease",
  duration: 1000,
};

const eventInstance = event.init();
// Inherit methods from eventInstance
const YAT = Object.create(eventInstance);

YAT.init = function initTween(opts) {
  // Can and uses Event and Clock methods.

  if (!opts.clock) {
    throw new Error("Please provide a clock API.");
  }

  this._clock = opts.clock.init({
    fps: opts.fps || 60,
  });

  this.parent = eventInstance;
  this.tweens = [];

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
    ease(c, b, n) { // polynomial: ax + b = c; where x is the normalized value
      return c * n + b;
    },
    easeInQuad(c, b, n) { // polynomial: 1x^2 + 0x + 0 = d;
      return c * (n * n) + b;
    },
    easeOutQuad(c, b, n) { // polynomial: -1x^2 + 2x + 0 = d;
      return c * (n * (2 - n)) + b;
    },
    easeInOutQuad(c, b, n) {
      if ((n*=2) < 1) {
        return c/2 * (n*n) + b; // Polynomial for half the range:
        // 2x^2 + 0x + 0 = d;
      }
      return -c/2 * ((--n)*(n-2) - 1) + b; // Polynomial for the the upper
      // half of the range: -2x^2 + 4x - 1
    },
  };

  this._clock.on("tick", this.updateTweens, this);

  return this;
};

/**
 * updateTweens - Updates all the tween instances.
 */
YAT.updateTweens = function updateTeens() {
  this.tweens.forEach((tween) => {
    if (tween.ticker.needsUpdate) {
      tween.update(tween.ticker);
    }

    if (!tween.ticker.needsUpdate &&
        tween.ticker.STATE === "DONE") {
      tween.update(tween.ticker);
      tween.remove();
    }

    if (tween.ticker.stopped) {
      console.log("Your tween is stopped.");
    }
  });
};

YAT.create = function(opts={}) {
  const YATInstance = Object.create(YAT);
  const _opts = Object.assign(clone(DEFAULTS), opts);
  const {duration, obj, props, easing, id} = _opts;

  if (!YATInstance.easingFns[easing]) {
    throw new Error(`The easing function ${easing} does not exists`);
  }

  if (id) {
    if (this.tweens.some((x) => x.id === id)) {
      throw new Error(`The tween with id: ${id} already exists.`);
    }

    YATInstance.id = id;
  } else {
    YATInstance.id = this.tweens.length + 1;
  }

  YATInstance.state = clone(obj);
  YATInstance.obj = obj;
  YATInstance.props = props;
  YATInstance.duration = duration;
  YATInstance.easing = YATInstance.easingFns[easing];
  YATInstance.ticker = this._clock.createSlave({
    id: YATInstance.id,
    duration: YATInstance.duration,
  });

  this.tweens.push(YATInstance);
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

YAT.startAll = function startAll() {
  if (!this.tweens.length) {
    throw new Error("There are no tweens to start");
  }

  this.tweens.forEach((t) => {
    t.ticker.start();
  });

  this._clock.start();
};

/**
 * stopAll - Stops all tweens
 */
YAT.stopAll = function stopAll() {
  if (this.tweens.length) {
    throw new Error("There are no tweens to stop");
  }

  this._clock.stop();
};

/**
 * delay - how long to delay the animation
 * @param  {number} duration
 * @return {YAT}
 */
YAT.delay = function delay(duration) {
  this.ticker.stop();
  this.obj = clone(this.state);
  setTimeout(() => this.ticker.start(), duration);
  return this;
};

/**
 * stop - stops the ticker
 * @return {YAT}
 */
YAT.stop = function stop() {
  this.ticker.stop();
  return this;
};

/**
 * finish - finishes the tween animation
 * @return {YAT}
 */
YAT.finish = function finish() {
  this.stop();
  this._clock.removeSlave(this.ticker.id);
  this.state = this.props;
  return this;
};

YAT.remove = function remove(id=this.id) {
  this.tweens = this.tweens.filter((t) => {
    if (t.id === id) {
      this._clock.removeSlave(t.ticker.id);
      return false;
    }

    return true;
  });
};

YAT.update = function update(ticker) {
  if (!ticker.needsUpdate) {
    this.state = Object.assign({}, this.props);
    return this.state;
  }

  const {timeSinceStart: delta, duration} = ticker;
  const norm = utils.normalize(delta, 0, duration.ms);

  for (let key in this.obj) {
    if (this.obj.hasOwnProperty(key)) {
      if (this.obj[key] !== undefined && this.props[key] !== undefined) {
        this.state[key] = this.easing(this.props[key] - this.obj[key], this.obj[key], norm);
      }
    }
  }

  return this.state;
};

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
