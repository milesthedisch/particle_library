var shapes = (function(window, document, cb){

  window = window || this;
  document = window.document === document ? window.document : this.document;
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext("2d");
  
  return cb(ctx);

})(this, document, function (ctx) {

  if (!ctx) {
    throw 'Needs ctx for canvas.';
  }

  var API = {

    circle: function (x, y, r, color) {
      color = color || '#000000';
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2, false);
      return ctx.fill();
    }

  };

  return API;

});