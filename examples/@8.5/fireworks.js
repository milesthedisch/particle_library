window.onload = function () {

  var rAF = window.requestAnimationFrame;
  var canvas = a;
  var ctx = a.getContext("2d");

  var w = canvas.width = window.innerWidth;
  var h = canvas.height = window.innerHeight;
  var numParticles = 50,
      particles = [],
      rocket = vector.create(0, -0.15);
      gravity = vector.create(0, 0.3);
  var boom;

  var cx = w / 2,
      cy = h / 2;

    // for (var i = 0; i < numParticles; i++) {
    //   particles.push(particle.create(cx, cy + 300, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    // }

    for (var i = 0; i < numParticles; i++) {
      p = particle.create(cx, cy + 500, 0, Math.PI / 2);
      p.velocity = vector.create(0, -2);
      particles.push(p);
    }

  update();

  function update(dt) {

    // if (Math.ceil(dt % 2000) < 20) {
    //   gravity = vector.create(0, 0.1);
    //   for (var i = 0; i < numParticles; i++) {
    //     particles.pop();
    //   }
    //   for (var i = 0; i < numParticles; i++) {
    //     particles.push(particle.create(cx, cy + 300, Math.random() * 4 + 1, Math.random() * Math.PI * 2));
    //   }
    // }

    
    ctx.clearRect(0, 0, w, h);

    if (!boom) {
      for (var i = 0; i < particles.length; i++) {
        p = particles[i];
        p.accelerate(rocket);
        p.update();
      }
      ctx.beginPath();
      ctx.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
      ctx.fill();
    }

    // console.log(particles[0].position.getY());
    if (particles[0].position.getY() < 50 && particles[0].position.getY() > 44 && !boom) {
      console.log('Boom!');

      boom = true;

      for (var i = 0; i < particles.length; i++) {
        p = particles[i];
        p.velocity.setLength(Math.random() * 4 + 4);
        p.velocity.setAngle(Math.random() * Math.PI * 2);
        p.position = vector.create(cx, Math.random() * 10 + 48);
      }

    } 

    if (boom) {
      for (var i = 0; i < particles.length; i++) {
        var pa = particles[i];
        pa.accelerate(gravity);
        pa.update();
        ctx.beginPath();
        ctx.arc(pa.position.getX(), pa.position.getY(), 5, 0, Math.PI * 2, false);
        ctx.fill();
      }
    }

    rAF(update);
  } 

}