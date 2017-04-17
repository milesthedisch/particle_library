const event = require("./event");
const MAX_FPS = 1000/60;
const Ticker = Object.create(event);

Ticker.init = function({
  timeStamp=performance.now(),
  duration=1000,
  interval=MAX_FPS,
}) {
  this.duration = duration;
  this.interval = interval;

  // I should keep track of my own state.
  // I dont need to update when im initialized.
  this.needsUpdate = false;
  this.initializedTime = timestamp;
};

Ticker.tickFor = function(duration=1000) {
  if (!duration) {
    console.warn("No duration given defaulting to 1000");
  }

  return (string) => {
    switch (string) {
    case "frames": case "f": {
      this.duration = {type: "frames", duration};
      return;
    }
    case "seconds": case "s": {
      this.duration = {type: "seconds", duration};
      return;
    }
    case "milliseconds": case "ms": 
    default: {
      this.duration = {type: "milliseconds", duration};
      return;
    }
  };
};

Ticker.onComplete = function() {
  this.emit("done");
};

Ticker.start = function() {
  this.needsUpdate = true;
  this.startTime = performance.now();
};

Ticker.nudge = function nudge(state) {
  if (!state) {
    throw new Error("Please give provide a state object");
  }

  this.delta = state.now - this.startTime;
  this.timeSinceStart += delta;
  this.startTime = state.now;

  if (timeSinceStart > duration) {
    this.needsUpdate = false;
  }

  if (timeSinceStart < duration) {
    this.needsUpdate = true;
  }
  // Figure out based on state wether or not I need to update.
};
