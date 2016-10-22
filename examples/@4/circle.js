'use strict';

window.onload = function () {

  var rAF = window.requestAnimationFrame;
  // When using id's the variable is exposed 
  var canvas = a;
  var ctx = a.getContext("2d");
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var cx = w * .5,
      cy = h * .5,
      radius = 200,
      angle = 0,
      numObjects = 20,
      slice = 2 * Math.PI / numObjects,
      x, y;

      var arr = []
      for (var i = 0; i < numObjects; i++) {
        arr.push(i);
      }
      

      arr
      .map(function (x) { return x * slice})
      .forEach(function(angle) {
        x = cx + Math.cos(angle) * radius;
        y = cy + Math.sin(angle) * radius;
        console.log(x, y)
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
        ctx.fill()
      })
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}

