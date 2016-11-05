window.onload = function () {
  
  var rAF = window.requestAnimationFrame;
  var canvas = a;
  var ctx = a.getContext("2d");

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;

  var cx = w / 2,
      cy = h / 2,
      particles = [],
      numParticles = 100;

  for (var i = 0; i < numParticles; i += 1) {
    particles.push(
      particle.create(cx, cy, Math.random() * 4 + 1, Math.random() * Math.PI * 2)
    )
  }

  console.log(particles);
  update()

  function update() {
    //                from , to //
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < numParticles; i += 1) {
      var p = particles[i];
      p.update();
      ctx.beginPath();
      ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      ctx.fill();
    }
      
    requestAnimationFrame(update);

  }

}