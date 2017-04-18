const ticker = require("./ticker");
const Clock = Object.create(null);

Clock.init = function initClock() {
  this.slaves = [];
  this.timeStamp = performance.now();
  this.rAF;

  let tick = 0;
  let delta = 0;
  let beginingOfTime = this.timeStamp;
  let lastTime = beginingOfTime;

  /**
   * loop - A animation Loop
   * @private
   * @param  {Number} now
   */
  function loop(now) {
    tick++;
    delta = this.lastTime - now;
    runningTime += delta;

    this.whipSlaves({tick, delta, runningTime, lastTime, now});

    lastTime = now;

    this.rAF = window.requestAnimationFrame(loop.bind(this));
  }

  loop(this.beginingOfTime);
};

Clock.whipSlaves = function whipSlaves(state) {
  if (!this.slaves.length) return;

  this.slaves.forEach((slave) => {
    if (slave.needsUpdate) {
      slave.nudge(state);
    }
  });
};

Clock.createSlave = function create({id, duration}) {
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

};

Clock.clearSlaves = function clearSlaves() {
  while(this.slaves.length) {
    this.slaves[this.slaves.length - 1].pop();
  }
};

 Clock.removeAllSalves = Clock.clearSlaves;

module.exports = Clock;
