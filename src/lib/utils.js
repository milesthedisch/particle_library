var utils = (function(window, document, cb){

  window = window || this;
  document = window.document === document ? window.document : this.document;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext("2d");
  
  return cb();

})(this, document, function () {

  var API = {
    normalize: function (val, max, min) {
      return (val - min) / (max - min);
    }
  };

  return API;

});