  window.onload = function () {
  
  var rAF = window.requestAnimationFrame;
  var canvas = a;
  var ctx = a.getContext("2d");

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var cx = w / 2,
      cy = h / 2,
      p = particle.create(100, h, 10, -Math.PI / 2),
      accel = vector.create(0.1, 0.01);

  update()

  function update() {
    //                from , to //
    ctx.clearRect(0, 0, w, h);
    
    p.accelerate(accel);

    p.update();

    ctx.beginPath();
    ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
    ctx.fill();
      
    requestAnimationFrame(update);

  }

}