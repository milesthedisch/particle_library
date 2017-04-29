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
  duration=1000,
  interval=MAX_FPS,
}) {
  this.parent = event;
  this.duration = this.tickFor(duration)("ms");

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
};

Ticker.tickFor = function(duration) {
  return (string) => {
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
};

Ticker.start = function(duration) {
  if (this.STATE === STATE.RUNNING) return false;
  this.STATE = STATE.RUNNING;
  this.duration = duration;
  this.needsUpdate = true;
  this.startTime = performance.now();
};

Ticker.stop = function() {
  if (this.STATE === STATE.STOPPED) return false;
  this.STATE = STATE.STOPPED;
  // Know what time it stopped.
  // so that if it starts again it
  // it can recalculate how far it needs to go.
  this.duration = this.timeSinceStart - this.duration.ms;
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

  this.delta = state.now - this.startTime;
  this.timeSinceStart += delta;
  this.startTime = state.now;
  this.STATE = STATE.RUNNING;

  if (timeSinceStart > this.duration.ms) {
    this.needsUpdate = true;
    return this.emit("tick");
  } else {
    this.STATE = STATE.DONE;
    this.needsUpdate = false;
    this.emit("done");
  }
};
