/* eslint max-len: 0 */
// Stub framework for requestAnimationFrame
require("raf-stub").replaceRaf();
require("../utils.js").perfNowPolyfill(global);
const sinon = require("sinon");
const assert = require("chai").assert;
const clock = require("../../src/lib/clock.js");

describe("#Clock", function() {
  let clockInstance;
  let whipSlavesSpy;

  beforeEach(function() {
    clockInstance = clock.init();
    whipSlavesSpy = sinon.spy(clockInstance, "whipSlaves");
  });

  afterEach(function() {
    // Clean up requestAnimationFrame stub.
    requestAnimationFrame.reset();
    whipSlavesSpy.restore();
  });

  describe.only("#init", function() {
    it("should run a loop that calls whipSlaves every 16.67 milliseconds defaultly", function() {
      clockInstance.start();
      // We need to warm the clock up cause the first few frames will be behind the startTime
      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/60);
      requestAnimationFrame.step(1, 1000/60);
      assert.equal(whipSlavesSpy.callCount, 2);
    });

    it("should run a loop that calls whipSlaves every given a fps", function() {
      // 50fps translates to one frame every 20sec.
      const FPS = 50;
      clockInstance.start(FPS);

      requestAnimationFrame.step(1, clockInstance.startTime);
      requestAnimationFrame.step(1, 1000/FPS);
      requestAnimationFrame.step(1, 1000/FPS);
      assert.equal(whipSlavesSpy.callCount, 2);
    });
  });
});
