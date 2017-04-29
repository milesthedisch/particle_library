const ticker = require("./ticker");
const Clock = Object.create({});
const MAX_FPS = 1000/60;

Clock.init = function initClock(opts={fps: MAX_FPS}) {
  this.slaves = [];

  // Zero based frame count.
  this.index = -1;

  // Save a reference to the animation frame so we can cancel it
  this.rAF;

  // Time properties
  this.startTime;
  this.lastTime;
  this.stopTime;
  this.timeSinceStart;

  // The maximum FPS the browser can deliver is 60.
  this.fps = opts.fps > MAX_FPS ?
    MAX_FPS :
    (opts.fps || MAX_FPS);

  return this;
};

Clock.start = function start(fps=60) {
  if (fps > 60) {
    throw new Error("The given fps is too high");
  }

  if (!fps) {
    throw new Error("The given fps is not valid");
  }

  this.fps = 1000 / fps;
  this.timeSinceStart = 0;
  this.startTime = performance.now();
  this.lastTime = this.startTime;

  // Start ticking
  this.tick(this.startTime);
  return this;
};

Clock.tick = function tick(newTime) {
  this.rAF = requestAnimationFrame(tick.bind(this));
  let delta = newTime - this.lastTime;
  this.timeSinceStart = newTime - this.startTime;

  if (delta > this.fps) {
    ++this.index;
    this.whipSlaves({
      newTime,
      delta,
      index: this.index,
      lastTime: this.lastTime,
      timesSinceStart: this.timeSinceStart,
    });
    this.lastTime = newTime - (delta % this.fps);
  }
};

Clock.stop = function stopClock() {
  // Record when we stopped.
  this.stopTime = performance.now();

  // Given the stop time see what the last delta was.
  const lastDelta = this.timeSinceStart - this.stopTime;

  // If the delta was greater than the last fps update one last time.
  if (lastDelta > this.fps) {
    ++this.index;
    this.whipSlaves({
      newTime,
      delta,
      index: this.index,
      lastTime: this.lastTime,
      timesSinceStart: this.timeSinceStart,
    });
    this.lastTime = newTime - (delta % this.fps);
  }

  this.timeSinceStart = this.startTime - this.stopTime;
  cancelAnimationFrame(this.rAF);
};

Clock.whipSlaves = function whipSlaves(state) {
  if (!this.slaves.length) return;

  this.slaves.forEach((slave, index) => {
    if (slave.done) {
      this.removeSlave(slave.id);
    }

    if (slave.needsUpdate) {
      slave.nudge(state);
    }
  });
};

Clock.createSlave = function createSlave({id, duration}) {
  const timeStamp = performance.now();
  const ticker = Object.create(ticker)
    .init({timeStamp, id, duration});

  if (id) {
    ticker.id = id;
    this.slaves.push({ticker});
  }

  ticker.id = this.slaves.push({ticker});
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

Clock.removeAllSalves = Clock.clearSlaves;

module.exports = Clock;
