// 'use strict';

window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
  var rAF = window.requestAnimationFrame;
  var ctx = a.getContext("2d");
  var width = canvas.width = window.innerWidth;
  var height = canvas.height = window.innerHeight;
  var points = [52, 81, 62, 24, 87, 22, 36, 82, 94, 81, 10, 79, 53, 61, 9, 94, 52, 64, 85, 60];
  var min = Math.min.apply(null, points);
  var max = Math.max.apply(null, points);
  var normalizedPoints = points.map(function (num) {
    return utils.normalize(num, max, min);
  });
  var pointsLength = points.length;

  function update() {
    ctx.beginPath();
    for (var i = 0; i < pointsLength; i++) {
        
        // Pecentage of the screen width for each point.
        // We divide the pointsLength by the width to get
        // an average for each point width. Then we multiply it 
        // incrementally to get the next one.
        var x = width / (pointsLength - 1) * i;

        // For each normalized value we multiply 
        // the height to get the actual y but then we 
        // need to minus by height to reverse the y axis
        // because canvas coordinates are reveresed. 
        var y = (height - height / 8) - ((height / 2 + 100) * normalizedPoints[i]);

        if (i == 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }

    }

    ctx.stroke();
  }

  update();

  // If the window is resizes fill the page again.
  window.onresize = function() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    update();
  }

}

