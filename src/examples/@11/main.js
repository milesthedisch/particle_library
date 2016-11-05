
window.onload = function () {

  // When using id's the variable is exposed 
  var canvas = a;
    rAF = window.requestAnimationFrame,
    ctx = a.getContext("2d"),
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,
    sun = particle.create(w / 2, h / 2, 0, 0),
    planet = particle.create(w / 2 + 200, h / 2, 10, -Math.PI / 2),
    jupiter = particle.create(w / 2 + 500, h / 2, 9, -Math.PI / 2)

  sun.mass = 40000;
  jupiter.mass = 1;

  update();
 
  function update() {
    
    ctx.clearRect(0, 0, w, h);

    planet.gravitateTo(sun);
    jupiter.gravitateTo(sun);
    jupiter.update();
    planet.update();

    ctx.beginPath();
    ctx.fillStyle = '#ffff00';
    ctx.arc(sun.position.getX(), sun.position.getY(), 20, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#00ffff';
    ctx.arc(planet.position.getX(), planet.position.getY(), 5, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = '#0000ff';
    ctx.arc(jupiter.position.getX(), jupiter.position.getY(), 10, 0, Math.PI * 2, false);
    ctx.fill();

    rAF(update);
  }

  // If the window is resizes fill the page again.
  window.onresize = function() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }

}