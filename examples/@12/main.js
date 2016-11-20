window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
      rAF = window.requestAnimationFrame,
      ctx = a.getContext("2d"),
      w = canvas.width = window.innerWidth,
      h = canvas.height = window.innerHeight,
      p = particle.create(w / 2, h / 2, 2, Math.random() * Math.PI * 2);
      p.radius = 100;

      var bound = {
        startX: 0,
        endX: w,
        startY: 0,
        endY: h
      };

  update();
 
  function update() {
    
    ctx.clearRect(0, 0, w, h);
    p.update();

    shapes.circle(p.position.getX(), p.position.getY(), p.radius);

    if(p.position.getX() - p.radius > bound.endX) {
      p.position.setX(bound.startX-p.radius);
    }

    if(p.position.getX() + p.radius < 0) {
      p.position.setX(bound.endX + p.radius);
    }

    if(p.position.getY() - p.radius > bound.endY) {
      p.position.setY(bound.startY-p.radius);
    }

    if(p.position.getY() + p.radius < bound.startY) {
      p.position.setY(bound.endY + p.radius);
    }



    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}