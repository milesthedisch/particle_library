const FALSY = [false, 0, "", undefined, NaN, ""] as const;

const testUtils = {
  forEachFalsy(fn: (val: any) => void) {
    (FALSY as readonly any[]).forEach(fn);
  },
  perfNowPolyfill(context: any) {
    const startTime = Date.now();

    if (!context.performance) {
      context.performance = {};
    }

    context.performance.now = function() {
      return Date.now() - startTime;
    };
  },
};

export default testUtils;
