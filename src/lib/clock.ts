import Ticker from "./ticker";
import Event from "./event";

const event = Event.init();
const Clock = Object.create(event) as any;
const MAX_FPS = 60;

/**
 * init - Initializes the clock with correct properties.
 */
Clock.init = function initClock(opts: { fps?: number } = {}) {
  opts = Object.assign({
    fps: MAX_FPS,
  }, opts);

  this.slaves = [];
  this.parent = event;

  // Zero based frame count.
  this.index = -1;

  // Save a reference to the animation frame so we can cancel it
  this.rAF = 0;

  // Time properties
  this.startTime = undefined;
  this.lastTime = undefined;
  this.stopTime = undefined;
  this.timeSinceStart = 0;

  // The maximum FPS the browser can deliver is 60.
  this.fps = opts.fps! > MAX_FPS ?
    MAX_FPS :
    (opts.fps || MAX_FPS);

  return this;
};

/**
 * start - Starts the clock with starting time properties.
 */
Clock.start = function start() {
  if (this.fps > 60) {
    throw new Error("The given fps is too high");
  }

  if (+this.fps !== +this.fps) {
    throw new Error("The given fps is not valid");
  }

  this.fps = 1000 / this.fps;
  this.startTime = performance.now();
  this.lastTime = this.startTime;

  // Start ticking
  this.loop(this.startTime);
  return this;
};

/**
 * loop
 */
Clock.loop = function loop(this: any, newTime: number) {
  this.rAF = requestAnimationFrame(loop.bind(this));

  const delta = newTime - this.lastTime;
  this.timeSinceStart = newTime - this.startTime;

  if (delta > this.fps) {
    this.index++;

    this.whipSlaves({
      newTime,
      delta,
      index: this.index,
      lastTime: this.lastTime,
      clockStart: this.startTime,
      timeSinceStart: this.timeSinceStart,
    });

    this.lastTime = newTime - (delta % this.fps);
  }

  this.emit("render");

  return this;
};

/**
 * stop - Stop the clock and call the last tick if needed.
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
 */
Clock.whipSlaves = function whipSlaves(state: any) {
  if (!this.slaves.length) return;

  this.slaves.forEach((slave: any) => {
    slave.nudge(state);
  });

  this.emit("tick");
  return this;
};

Clock.createSlave = function createSlave(opts: any) {
  if (!opts) {
    throw new Error("Please provide a options object");
  }

  const {id, duration} = opts;
  const timeStamp = performance.now();

  const slave = Object.create(Ticker)
    .init({timeStamp, id, duration});

  if (id) {
    this.slaves.push(slave);
    return slave;
  }

  slave.id = this.slaves.push(slave);
  return slave;
};

Clock.removeSlave = function removeSlave(id: string | number) {
  this.slaves = this.slaves.filter((slave: any) => {
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

export default Clock;
