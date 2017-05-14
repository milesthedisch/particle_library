const event = require("./event");
const MAX_FPS = 1000/60;
const Ticker = Object.create(event);
const STATE = {
  STOPPED: "STOPPED",
  RUNNING: "RUNNING",
  DONE: "DONE",
};


Ticker.init = function init({
  timeStamp=performance.now(),
  id,
  duration=1000,
  interval=MAX_FPS,
}) {
  this.id = id;
  this.parent = event;
  this.parent.name = "event";

  // Probably cant support this??
  // You have to have your own clock.
  this.interval = interval;
  this.duration = this.tickFor(duration, "ms");

  this.STATE;
  this.delta;
  this.stopTime;
  this.startTime = 0;
  this.timeSinceStart = 0;

  // Fire the first time you get called.
  this.needsUpdate = true;

  return this;
};

Ticker.tickFor = function tickFor(duration, string) {
  switch (string) {
  case "frames": case "f":
    return {
      type: "frames",
      value: duration,
      ms: duration * MAX_FPS,
    };
  case "seconds": case "s":
    return {
      type: "seconds",
      value: duration,
      ms: duration * 1000,
    };
  case "milliseconds": case "ms": default:
    return {
      type: "milliseconds",
      value: duration,
      ms: duration,
    };
  };
};

Ticker.start = function start() {
  if (this.STATE === STATE.RUNNING) return false;
  this.STATE = STATE.RUNNING;
  this.startTime = performance.now();
};

Ticker.stop = function stop() {
  if (this.STATE === STATE.STOPPED) return false;
  this.STATE = STATE.STOPPED;

  // Know what time it stopped.
  // so that if it starts again it
  // it can recalculate how far it needs to go.
  const newDuration = this.timeSinceStart - this.duration.ms || 0;

  this.duration = {
    type: "frames",
    value: newDuration,
    ms: newDuration,
  };

  this.stopTime = performance.now();
};

Ticker.nudge = function nudge(state) {
  if (!state) {
    throw new Error("Please provide a state object");
  }

  if (this.STATE === STATE.STOPPED || this.STATE !== STATE.RUNNING) {
    this.needsUpdate = false;
    return null;
  }

  this.STATE = STATE.RUNNING;
  this.timeSinceStart = (state.timeSinceStart + state.clockStart) - this.startTime;

  if (this.timeSinceStart < this.duration.ms) {
    this.needsUpdate = true;
  } else {
    this.STATE = STATE.DONE;
    this.needsUpdate = false;
  }
};

module.exports = Ticker;
