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

  // Probably cant support this??
  // You have to have your own clock.
  this.interval = interval;
  this.start(duration);

  this.STATE;
  this.delta;
  this.startTime;
  this.stopTime;
  this.timeSinceStart = 0;

  // Fire the first time you get called.
  this.needsUpdate = true;

  return this;
};

Ticker.tickFor = function(duration, string) {
  switch (string) {
  case "frames": case "f":
    return {
      type: "frames",
      value: duration,
      ms: duration * MAX_FPS,
    };
    return;
  case "seconds": case "s":
    return {
      type: "seconds",
      value: duration,
      ms: duration * 1000,
    };
    return;
  case "milliseconds": case "ms": default:
    return {
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
  this.duration = this.tickFor(duration + this.startTime, "ms");
};

Ticker.stop = function() {
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
  console.log("OUCH!");

  if (!state) {
    throw new Error("Please provide a state object");
  }

  if (this.STATE === STATE.STOPPED || this.STATE !== STATE.RUNNING) {
    this.needsUpdate = false;
    return null;
  }

  this.STATE = STATE.RUNNING;

  this.delta = state.newTime - this.startTime;
  this.timeSinceStart += this.delta;
  this.startTime = state.newTime;

  console.log("TIME SINCE START", this.timeSinceStart);

  if (this.timeSinceStart < this.duration.ms) {
    this.needsUpdate = true;
  } else {
    this.STATE = STATE.DONE;
    this.needsUpdate = false;
  }
};

module.exports = Ticker;
