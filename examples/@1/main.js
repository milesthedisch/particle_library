'use strict';

window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
  var ctx = a.getContext("2d");
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  for (var i = 0; i < 100; i += 1) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * w, Math.random() * h);
    ctx.lineTo(Math.random() * w, Math.random() * h);
    ctx.stroke();
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}

