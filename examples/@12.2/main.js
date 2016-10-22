window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
      rAF = window.requestAnimationFrame,
      ctx = a.getContext("2d"),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,
      pAmount = 100,
      start = window.performance.now();

  var now;
  var then;
  var tick = 1;

  var bound = {
    startX: 0,
    endX: w,
    startY: 0,
    endY: h
  };

  var particles = [];

  for (var i = 0; i < pAmount; i += 1) {
    var p = particle.create(w / 2, h, (5 + 8 * Math.random()).toFixed(2), -Math.PI / 2 + (Math.random() * .2 - .1), 0.1);
    p.radius = Math.random() * 10 + 5;
    particles.push(p);  
  }
    
  update();
 
  function update(delta) {
    tick++

    something = delta / tick
    console.log(something);
    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < particles.length; i += 1) {

      var p = particles[i];
      p.update();
      shapes.circle(p.position.getX(), p.position.getY(), p.radius);
      if (p.position.getY() - p.radius > bound.endY) {
        p.position.setX(w / 2);
        p.position.setY(h); 
        p.velocity.setLength((5 + 8 * Math.random()).toFixed(2));
        p.velocity.setAngle(-Math.PI / 2 + (Math.random() * .2 - .1))
      }

    }

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}