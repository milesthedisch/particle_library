# A Small Particle Library

The aim of this project is to learn how to apply semi-complex maths in coding.
Much of the inspiration for this library has come from http://www.codingmath.com/.

# Prerequisites

To get up and running you'll first need a two things.

- [npm](https://www.npmjs.com/)
- [browser](https://www.google.com/chrome/)

***Optional, choose one***

- [webpack](https://webpack.github.io/)
- [rollup](https://rollupjs.org/)
- [browserify](http://browserify.org/)


# Getting started

Once you've installed the prerequisites and installed particle_library via npm. Its as easy as requiring it in a bundler, or including a script tag in you header with the correct source attribute.

Install via npm
`npm install -S particle_library`

No bundler
```html
  <head>
    <script src="path/to/particle_library.js"></script>
  </head>
```

With a bundler
```js
const particeLib = require('particle_library');
```

# Whats available

The particle_library gives you access to some API's.

- Particle
- Vector
- Event
- Clock
- Tween

These API are supposed to aid you in your journey to create small interactive creative web bites/bytes. Most of the examples are listed here [https://github.com/milesthedisch/particle_docs](https://github.com/milesthedisch/particle_docs)

# Contributions

Your extremely welcome to contribute, discuss, and criticize the repository. Just make sure you open a pull request. There are tests so if you want to add a feature please write some tests to cover it.

---

# TODOS:

1. [x] Extract the express stuff from this project and move it into particle_docs.
2. [x] Publish this package to npm and link it in to the particle_docs.
3. [x] Test to see if the package works.
4. [x] 100% test coverage.
5. [ ] Get docs running on AWS.
6. [ ] Get all current examples running with new lib code.act components as examples.

---





