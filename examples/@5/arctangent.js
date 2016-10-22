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
      angle = 0,
      dx,
      dy;

  render();

  function render () {
    ctx.clearRect(0, 0, w, h);

    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(angle);

    ctx.beginPath();
    // This is the arrow -> //
    ctx.moveTo(20, 0);
    ctx.lineTo(-20, 0);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, -10);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, 10);
    ctx.stroke();

    ctx.restore();
    rAF(render);
  }


  document.addEventListener('mousemove', function (event) {
    dx = event.clientX - cx
    dy = event.clientY - cy
    angle = Math.atan2(dy, dx)
  });
      
  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}
