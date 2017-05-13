const ticker = require("./ticker");
const event = require("./event").init();
const Clock = Object.create(event);
const MAX_FPS = 1000/60;

/**
 * init - Initalizes the clock with correct properties.
 * @param  {Object} opts
 * @param  {Number} opts.fps The fps you want the clock to tick at.
 * @return {Clock}
 */
Clock.init = function initClock(opts={fps: MAX_FPS}) {
  this.slaves = [];
  this.parent = event;

  // Zero based frame count.
  this.index = -1;

  // Save a reference to the animation frame so we can cancel it
  this.rAF = 0;

  // Time properties
  this.startTime;
  this.lastTime;
  this.stopTime;
  this.timeSinceStart = 0;

  // The maximum FPS the browser can deliver is 60.
  this.fps = opts.fps > MAX_FPS ?
    MAX_FPS :
    (opts.fps || MAX_FPS);

  return this;
};

/**
 * start - Starts the clock with starting time properties.
 * @param  {Number} fps The fps you want the clock to tick at.
 * @return {Clock}
 */
Clock.start = function start(fps=60) {
  if (fps > 60) {
    throw new Error("The given fps is too high");
  }

  if (+fps === NaN) {
    throw new Error("The given fps is not valid");
  }

  this.fps = 1000 / fps;
  this.startTime = performance.now();
  this.lastTime = this.startTime;

  // Start ticking
  this.loop(this.startTime);
  return this;
};

/**
 * tick
 * @param  {Number} newTime A value in ms that is equal to the current time.
 * @return {Clock}
 */
Clock.loop = function loop(newTime) {
  this.rAF = requestAnimationFrame(loop.bind(this));

  let delta = newTime - this.lastTime;
  this.timeSinceStart = newTime - this.startTime;

  if (delta > this.fps) {
    this.index++;
    this.whipSlaves({
      newTime,
      delta,
      index: this.index,
      lastTime: this.lastTime,
      timesSinceStart: this.timeSinceStart,
    });
    this.lastTime = newTime - (delta % this.fps);
  }

  return this;
};

/**
 * stop - Stop the clock and call the last tick if needed.
 * @return {Clock}
 */
Clock.stop = function stopClock() {
  cancelAnimationFrame(this.rAF);

  // Record when we stopped.
  this.stopTime = performance.now();
  this.timeSinceStart += this.stopTime - this.startTime;
  this.clearSlaves();

  this.emit("stopped");
  return this;
};

/**
 * whipSlaves - Run all slaves in sequence and pass in
 * the given state of the clock.
 * @param  {Object} state
 * @return {Clock}
 */
Clock.whipSlaves = function whipSlaves(state) {
  if (!this.slaves.length) return;


  this.slaves.forEach((slave, index) => {
    if (slave.done) {
      this.removeSlave(slave.id);
    }

    if (slave.needsUpdate) {
      // Can i set a timeout here and have the nudges run async?
      // Give it a shoot.
      slave.nudge(state);
    }
  });

  this.emit("tick");
  return this;
};

Clock.createSlave = function createSlave(opts) {
  if (!opts) {
    throw new Error("Please provide a options object");
  }

  const {id, duration} = opts;
  const timeStamp = performance.now();

  const slave = Object.create(ticker)
    .init({timeStamp, id, duration});

  if (id) {
    this.slaves.push(slave);
    return slave;
  }

  slave.id = this.slaves.push(slave);
  return slave;
};

Clock.removeSlave = function removeSlave(id) {
  this.slaves = this.slaves.filter((slave) => {
    if (slave.id !== id) {
      return true;
    }
    slave.removeAllListeners();
    return false;
  });
};

Clock.clearSlaves = function clearSlaves() {
  if (this.slaves.length) this.slaves = [];
};

Clock.reset = function() {
  this.stop();
  this.clearSlaves();
  this.removeAllListeners();
  this.rAF = 0;
};

Clock.removeAllSlaves = Clock.clearSlaves;

module.exports = Clock;
