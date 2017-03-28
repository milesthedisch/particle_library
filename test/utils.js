const FALSY = [false, 0, "", undefined, NaN];

const testUtils = {
  forEachFalsy(fn) {
    FALSY.forEach(fn);
  },
};

module.exports = Object.create(testUtils);
