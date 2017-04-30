const event = require("./event");
const MAX_FPS = 1000/60;
const Ticker = Object.create(event);
const STATE = {
  STOPPED: "STOPPED",
  RUNNING: "RUNNING",
  DONE: "DONE",
};


Ticker.init = function({
  timeStamp=performance.now(),
  id,
  duration=1000,
  interval=MAX_FPS,
}) {
  this.id = id;
  this.parent = event;
  this.parent.name = "event";
  this.duration = this.tickFor(duration, "ms");

  // Probably cant support this??
  // You have to have your own clock.
  this.interval = interval;
  this.start(duration);

  this.STATE;
  this.needsUpdate;
  this.delta;
  this.startTime;
  this.stopTime;
  this.timeSinceStart;

  return this;
};

Ticker.tickFor = function(duration, string) {
  switch (string) {
  case "frames": case "f":
    this.duration = {
      type: "frames",
      value: duration,
      ms: duration * MAX_FPS,
    };
    return;
  case "seconds": case "s":
    this.duration = {
      type: "seconds",
      value: duration,
      ms: duration * 1000,
    };
    return;
  case "milliseconds": case "ms": default:
    this.duration = {
      type: "milliseconds",
      value: duration,
      ms: duration,
    };
    return;
  };
};

Ticker.start = function(duration) {
  if (this.STATE === STATE.RUNNING) return false;
  this.STATE = STATE.RUNNING;
  this.startTime = performance.now();
};

Ticker.stop = function() {
  if (this.STATE === STATE.STOPPED) return false;
  this.STATE = STATE.STOPPED;

  // Know what time it stopped.
  // so that if it starts again it
  // it can recalculate how far it needs to go.
  const newDuration = this.timeSinceStart - this.duration.ms;

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

  this.delta = state.now - this.startTime;
  this.timeSinceStart += delta;
  this.startTime = state.now;

  if (timeSinceStart > this.duration.ms) {
    this.needsUpdate = true;
  } else {
    this.STATE = STATE.DONE;
    this.needsUpdate = false;
  }
};

module.exports = Ticker;
