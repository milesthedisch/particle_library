const event = require("./event");
const Clock = Object.create(null);

Clock.init = function initClock() {
  this.slaves = [];
  this.beginingOfTime = performance.now();

  function loop(delta) {
    this.whipSlaves();
    window.requestAnimationFrame(loop.bind(this));
  }

  loop(this.beginingOfTime);
};

Clock.whipSlaves = function () {
  if (!this.slaves.length) return;

  this.slaves.filter((slave) => {
    return slave.needsUpdate;
  });
};

Clock.create = function create(id) {
  const ticker = Object.assign(Object.create(Clock), event.init());
  ticker.id = id || this.slaves.push({ticker});
};

module.exports = Clock;
