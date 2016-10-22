'use strict';

window.onload = function () {

  var rAF = window.requestAnimationFrame;
  // When using id's the variable is exposed 
  var canvas = a;
  var ctx = a.getContext("2d");
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  // Center x and Center y 
  // are the same as 0,0 on 
  // a cartiesian cordinate map.
  
  var cx = w * .5,
      cy = h * .5,
      yRadius = 200,
      xRadius = 100,
      xAngle = 0,
      yAngle = 0,
      xSpeed = 0.1,
      ySpeed = 0.14,
      // numObjects = 20,
      // slice = 2 * Math.PI / numObjects,
      x, y;

      render();

      function render() {
        x = cx + xRadius * Math.sin(xAngle);
        y = cy + yRadius * Math.sin(yAngle);

        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2, false);
        ctx.fill();

        xAngle += xSpeed;
        yAngle += ySpeed;
        rAF(render)
      }
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}

