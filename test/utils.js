const FALSY = [false, 0, "", undefined, NaN, '']; // eslint-disable-line

const testUtils = {
  forEachFalsy(fn) {
    FALSY.forEach(fn);
  },
  perfNowPolyfill(context) {
    const startTime = Date.now();

    if (!context.performance) {
      context.performance = {};
    }

    context.performance.now = function() {
      return Date.now() - startTime;
    };
  },
};

module.exports = Object.create(testUtils);
