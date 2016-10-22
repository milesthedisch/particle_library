var t = (function(vector) {

  var beforeEachCall;
  var afterEachCall;

  beforeEach = function beforeEach(cb) {
    beforeEachCall = cb;
    if (typeof cb === 'function') {
      cb();
    } else {
      return void 0;
    }
  } 

  afterEach = function afterEach(cb) {
    afterEachCall = cb;
    if (typeof cb === 'function') {
      cb();
    } else {
      return void 0;
    }
  };

  expect = function expect(val) {
    return { 
      toEql: function (expected) {
        var result = val === expected;
        if (result) {
          console.log('\n\t\t'+result);
        } else {
          throw new Error('\nexpected ' + expected + '\n' +'actual ' + val);
        }
      }
    };
  };

  describe = function describe(description, cb) {
    console.log(description);
    beforeEach(beforeEachCall);
    cb();
    afterEach(afterEachCall);
  };

  it = function it(description, cb) {
    console.log('\t' + description);
    cb();
  };

})(vector);