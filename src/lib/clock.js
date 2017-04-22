const ticker = require("./ticker");
const Clock = Object.create(null);
const MAX_FPS = 1000/60;

Clock.init = function initClock({fps=1000/60}) {
  this.slaves = [];
  this.timeStamp = performance.now();
  this.fps = fps > MAX_FPS ? MAX_FPS : fps;
  this.rAF;

  let tick = 0;
  let delta = 0;
  let clockStartTime = this.timeStamp;
  let lastTime = clockStartTime;

  /**
   * loop - A animation Loop
   * @private
   * @param  {Number} now
   */
  function loop(now) {
    if (!now) now = clockStartTime;
    this.rAF = window.requestAnimationFrame(loop.bind(this));
    delta = now - lastTime;
    runningTime += delta;

    if (delta > this.fps) {
      this.whipSlaves({tick, delta, runningTime, lastTime, now});
      lastTime = now - (delta % fps);
      tick++;
    }
  }

  loop(clockStartTime);
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
