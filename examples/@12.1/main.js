window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
      rAF = window.requestAnimationFrame,
      ctx = a.getContext("2d"),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,
      pAmount = 100;

  var bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h
  };

  var particles = [];

  for (var i = 0; i < pAmount; i += 1) {
    var p = particle.create(w / 2, h / 2, (5 * Math.random()).toFixed(2), Math.random() * Math.PI * 2);
    p.radius = Math.random() * 2 + 20;
    particles.push(p);  
  }

  update();
 
  function update() {
    
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i += 1) {

      particles[i].update();
      shapes.circle(particles[i].position.getX(), particles[i].position.getY(), particles[i].radius);

    }
    
    removeDeadParticle();
    rAF(update);
  }

  function removeDeadParticle () {
    for (var i = particles.length - 1; i >= 0; i -= 1) {

      var p = particles[i];

      if (p.position.getX() - p.radius > bound.endX ||
          p.position.getX() + p.radius < bound.startX ||
          p.position.getY() - p.radius > bound.endY ||
          p.position.getY() + p.radius < bound.startY ) {

        particles.splice(i, 1);

      }

    }
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}