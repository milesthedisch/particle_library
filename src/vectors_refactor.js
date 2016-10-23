/**
 * Vector description]
 * @param  {Int} x - A x-cordinate
 * @param  {Int} y - A y-cordinate
 */

module.exports = function Vector(opts) {
	opts = 
	this.state = {
		x: x,
		y: y,
	};
};


// Vector.prototype.create = function(x, y) {
  
//   const vec = Object.create(vector);
//   vec.set('x', x);
//   vec.set('ey', y);
//   return vec;

// };  


// Vector.prototype.set = function (prop, val) {

//   if (this.hasOwnPropery(prop)) {
    
//   }

// }

// let vector = (function (window, ctx) {
//   ctx = ctx || {};

//   const state = {
//     x: 1,
//     y: 0
//   };

//   const api = {
//     create: (x, y) => {
//       const vec = Object.create(vector);
//       vec.set.x(x);
//       vec.set.y(y);
//       return vec;
//     },
//     set: {
//       x: (x) => state.x = x,
//       y: (y) => state.y = y,
//       angle: function (rad) {
//         const l = this.get.length();
//         state.x = Math.cos(rad) * length;
//         state.y = Math.sin(rad) * length;
//       },
//       length: function (length) {
//         const rad = this.get.angle();
//         state.x = Math.cos(rad) * length;
//         state.y = Math.sin(rad) * length;
//       }
//     },
//     get: {
//       x: (x) => state.x,
//       y: (y) => state.y,
//       angle: () => Math.atan2(state.x, state.y),
//       length: () => Math.sqrt((state.x * state.x) + (state.y * state.y))
//     }
//   };

//   return api;
// })(window, document)