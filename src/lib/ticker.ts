import Event from "./event";

const MAX_FPS = 1000/60;

interface Duration {
  type: string;
  value: number;
  ms: number;
}

const STATE = {
  STOPPED: "STOPPED",
  RUNNING: "RUNNING",
  DONE: "DONE",
} as const;

const Ticker = Object.create(Event) as any;

Ticker.init = function init({
  id,
  duration = 1000,
  interval = MAX_FPS,
}: {
  timeStamp?: number;
  id?: string | number;
  duration?: number;
  interval?: number;
}) {
  this.id = id;
  this.parent = Event;
  this.parent.name = "event";

  this.interval = interval;
  this.duration = this.tickFor(duration, "ms");

  this.STATE = undefined;
  this.delta = undefined;
  this.stopTime = undefined;
  this.startTime = 0;
  this.timeSinceStart = 0;
  this.timeSinceStart2 = 0;

  // Fire the first time you get called.
  this.needsUpdate = true;

  return this;
};

Ticker.tickFor = function tickFor(duration: number, string: string): Duration {
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
  }
};

Ticker.start = function start() {
  if (this.STATE === STATE.RUNNING) return false;
  this.STATE = STATE.RUNNING;
  this.startTime = performance.now();
};

Ticker.stop = function stop() {
  if (this.STATE === STATE.STOPPED) return false;
  this.STATE = STATE.STOPPED;

  const newDuration = this.duration.ms - this.timeSinceStart || 0;

  this.duration = this.tickFor(newDuration, "milliseconds");
  this.timeSinceStart = 0;

  this.stopTime = performance.now();
};

Ticker.nudge = function nudge(state: any) {
  if (!state) {
    throw new Error("Please provide a state object");
  }

  if (this.STATE === STATE.STOPPED || this.STATE !== STATE.RUNNING) {
    this.needsUpdate = false;
    return null;
  }

  this.STATE = STATE.RUNNING;
  this.timeSinceStart += state.delta;

  if (this.timeSinceStart < this.duration.ms) {
    this.needsUpdate = true;
  } else {
    this.STATE = STATE.DONE;
    this.needsUpdate = false;
  }
};

export default Ticker;
