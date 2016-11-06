/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports) {

	window.onload = function() {
		// When using id's the variable is exposed
		const canvas = a;
		const ctx = a.getContext("2d");
		const w = canvas.width = window.innerWidth;
		const h = canvas.height = window.innerHeight;

		for (let i = 0; i < 100; i += 1) {
			ctx.beginPath();
			ctx.moveTo(Math.random() * w, Math.random() * h);
			ctx.lineTo(Math.random() * w, Math.random() * h);
			ctx.stroke();
		}

		// If the window is resizes fill the page again.
		window.onresize = function() {
			w = canvas.width = window.innerWidth;
			h = canvas.height = window.innerHeight;
		};
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	
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

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

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

/***/ },
/* 5 */
/***/ function(module, exports) {

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

/***/ },
/* 6 */
/***/ function(module, exports) {

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  var rAF = window.requestAnimationFrame;
	  // When using id's the variable is exposed 
	  var canvas = a;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;

	  var cx = w * .5,
	      cy = h * .5,
	      baseAlpha = 0.1,
	      offset = 0.1,
	      speed = 0.01,
	      angle = 0,
	      i = 0;

	  render();

	  function render() {
	    var alpha = baseAlpha + Math.sin(angle) * offset;
	    i += 0.01 / 2;
	    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`
	    ctx.clearRect(0, 0, w, h);
	    ctx.beginPath();
	    ctx.arc(cx, cy, 100, i, Math.PI * 2, false);
	    ctx.fill();

	    speed = speed / 1
	    angle += speed;

	    rAF(render)
	  }

	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}



/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  var rAF = window.requestAnimationFrame;
	  // When using id's the variable is exposed 
	  var canvas = a;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;

	  var cx = w * .5,
	      cy = h * .5,
	      radius = 200,
	      angle = 0,
	      numObjects = 20,
	      slice = 2 * Math.PI / numObjects,
	      x, y;

	      var arr = []
	      for (var i = 0; i < numObjects; i++) {
	        arr.push(i);
	      }
	      

	      arr
	      .map(function (x) { return x * slice})
	      .forEach(function(angle) {
	        x = cx + Math.cos(angle) * radius;
	        y = cy + Math.sin(angle) * radius;
	        console.log(x, y)
	        ctx.beginPath();
	        ctx.arc(x, y, 10, 0, Math.PI * 2, false);
	        ctx.fill()
	      })
	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}



/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  var rAF = window.requestAnimationFrame;
	  // When using id's the variable is exposed 
	  var canvas = a;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;

	  // Center x and Center y 
	  // are the same as 0,0 on 
	  // a cartiesian cordinate map.
	  
	  var cx = w * .5,
	      cy = h * .5,
	      yRadius = 200,
	      xRadius = 100,
	      xAngle = 0,
	      yAngle = 0,
	      xSpeed = 0.1,
	      ySpeed = 0.14,
	      // numObjects = 20,
	      // slice = 2 * Math.PI / numObjects,
	      x, y;

	      render();

	      function render() {
	        x = cx + xRadius * Math.sin(xAngle);
	        y = cy + yRadius * Math.sin(yAngle);

	        ctx.clearRect(0, 0, w, h);
	        ctx.beginPath();
	        ctx.arc(x, y, 20, 0, Math.PI * 2, false);
	        ctx.fill();

	        xAngle += xSpeed;
	        yAngle += ySpeed;
	        rAF(render)
	      }
	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}



/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  var rAF = window.requestAnimationFrame;
	  // When using id's the variable is exposed 
	  var canvas = a;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;

	  var cx = w * .5,
	      cy = h * .5,
	      radius = 100,
	      angle = 0,
	      _angleX = 0,
	      _angleY = 0,
	      _avX = 0.015,
	      _avY = 0.005,
	      x,y,
	      dx,dy;

	  render();

	  function render () {
	    
	    x = cx + Math.cos(_angleX) * radius
	    y = cy + Math.sin(_angleY) * radius

	    _angleX = _avX + _angleX
	    _angleY = _avY + _angleY

	    ctx.clearRect(0, 0, w, h);

	    ctx.save();
	    ctx.translate(x, y);
	    ctx.rotate(angle);

	    ctx.beginPath();
	    
	    // This is the arrow -> //
	    ctx.moveTo(20, 0);
	    ctx.lineTo(-20, 0);
	    ctx.moveTo(20, 0);
	    ctx.lineTo(10, -10);
	    ctx.moveTo(20, 0);
	    ctx.lineTo(10, 10);
	    ctx.stroke();

	    ctx.restore();
	    rAF(render);
	  }


	  document.addEventListener('mousemove', function (event) {
	    dx = event.clientX - y
	    dy = event.clientY - x
	    angle = Math.atan2(dy, dx)
	  });
	      
	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  var rAF = window.requestAnimationFrame;
	  // When using id's the variable is exposed 
	  var canvas = a;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;

	  var cx = w * .5,
	      cy = h * .5,
	      angle = 0,
	      dx,
	      dy;

	  render();

	  function render () {
	    ctx.clearRect(0, 0, w, h);

	    ctx.save();
	    ctx.translate(cx, cy);
	    ctx.rotate(angle);

	    ctx.beginPath();
	    // This is the arrow -> //
	    ctx.moveTo(20, 0);
	    ctx.lineTo(-20, 0);
	    ctx.moveTo(20, 0);
	    ctx.lineTo(10, -10);
	    ctx.moveTo(20, 0);
	    ctx.lineTo(10, 10);
	    ctx.stroke();

	    ctx.restore();
	    rAF(render);
	  }


	  document.addEventListener('mousemove', function (event) {
	    dx = event.clientX - cx
	    dy = event.clientY - cy
	    angle = Math.atan2(dy, dx)
	  });
	      
	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	// Testing vectors // 
	var FIXTURE = vector.create(10, 20);

	describe('Vector', function (){
	    
	    beforeEach(function () {
	      console.log('before');
	    });

	    describe('getX', function () {
	      it('Should get 10', function () {
	        expect(FIXTURE.getX()).toEql(10);
	      });
	    });

	    describe('getY', function () {
	      it('Should get 20', function () {
	        expect(FIXTURE.getY()).toEql(20);
	      });
	    });

	    describe('setX', function () {
	      it('Should set the state to 0', function () {
	        FIXTURE.setX(0)
	        expect(FIXTURE.getX(0)).toEql(0)
	      });
	    });

	    describe('setY', function () {
	      it('Should set the state to 0', function () {
	        FIXTURE.setY(1)
	        expect(FIXTURE.getY()).toEql(1)
	      });
	    })

	})





/***/ },
/* 13 */
/***/ function(module, exports) {

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

/***/ },
/* 14 */
/***/ function(module, exports) {

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

/***/ },
/* 15 */
/***/ function(module, exports) {

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

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	window.onload = function () {

	  // When using id's the variable is exposed 
	  var canvas = a;
	  var rAF = window.requestAnimationFrame;
	  var ctx = a.getContext("2d");
	  var w = canvas.width = window.innerWidth;
	  var h = canvas.height = window.innerHeight;
	  var ship = particle.create(w / 2, h / 2, 0, 0, 0),
	      thrust = vector.create(0, 0),
	      angle = 0,
	      turningLeft = false,
	      turningRight = false,
	      thrusting = false;

	  document.body.addEventListener("keydown", function (event) {

	    console.log(event.keyCode);

	    switch(event.keyCode) {
	      case 38: 
	        thrusting = true;
	        break;
	      case 37:
	        turningLeft = true;
	        break;
	      case 39:
	        turningRight = true;
	        break;
	      default: 
	        break;
	    }   

	  });

	  document.body.addEventListener("keyup", function (event) {

	    console.log(event.keyCode);

	    switch(event.keyCode) {
	      case 38: 
	        thrusting = false;
	        break;
	      case 37:
	        turningLeft = false;
	        break;
	      case 39:
	        turningRight = false;
	        break;
	      default: 
	        break;
	    }   

	  });

	  update();
	 
	  function update() {
	    
	    ctx.clearRect(0, 0, w, h);

	    if (turningRight) {
	      angle -= 0.05;
	    }

	    if (turningLeft) {
	      angle += 0.05;  
	    }

	    thrust.setAngle(angle);

	    if (thrusting) {
	      thrust.setLength(0.1);
	    } else {
	      thrust.setLength(0);
	    }

	    ship.accelerate(thrust);
	    ship.update();

	    ctx.save(); 
	    ctx.translate(ship.position.getX(), ship.position.getY());
	    ctx.rotate(angle);

	    ctx.beginPath();
	    ctx.moveTo(10, 0);
	    ctx.lineTo(-10, -7);
	    ctx.lineTo(-10, 7);
	    ctx.lineTo(10, 0);

	    if (thrusting) {
	      ctx.moveTo(-10, 0);
	      ctx.lineTo(-18, 0);
	    }
	    
	    ctx.stroke();
	    ctx.restore();

	    // Boundries // 
	    if (ship.position.getX() > w) {
	      ship.position.setX(0);
	    }

	    if (ship.position.getX() < 0) {
	      ship.position.setX(w);
	    }

	    if (ship.position.getY() > h) {
	      ship.position.setY(0);
	    }

	    if (ship.position.getY() < 0) {
	      ship.position.setY(h);
	    }

	    rAF(update);
	  }

	  // If the window is resizes fill the page again.
	  window.onresize = function() {
	    w = canvas.width = window.innerWidth;
	    h = canvas.height = window.innerHeight;
	  }

	}



/***/ },
/* 17 */
/***/ function(module, exports) {

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



/***/ }
/******/ ]);