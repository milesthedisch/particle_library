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
      baseAlpha = 0.1,
      offset = 0.1,
      speed = 0.01,
      angle = 0,
      i = 0;

  render();

  function render() {
    var alpha = baseAlpha + Math.sin(angle) * offset;
    i += 0.01 / 2;
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath();
    ctx.arc(cx, cy, 100, i, Math.PI * 2, false);
    ctx.fill();

    speed = speed / 1
    angle += speed;

    rAF(render)
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}

