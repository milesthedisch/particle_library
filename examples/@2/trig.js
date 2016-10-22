window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
  var ctx = a.getContext("2d");
  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;


  ctx.translate(0, h/2);
  ctx.scale(1, -1)

  for (var angle = 0; angle < Math.PI * 2; angle += 0.01) {
    var x = angle * 200;
    var y = Math.sin(angle) * 200;

    ctx.fillRect(x, y, 5, 5)
  }

}