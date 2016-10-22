var vector = {
  
  // These are supposed to be private //
  _X: 1,
  _Y: 0,

  create: function (x, y) {
    var vec = Object.create(vector);
    vec.setX(x);
    vec.setY(y);
    return vec;
  },
  
  setX: function (value) {
    return this._X = value; 
  }, 

  setY: function (value) { 
    return this._Y = value;
  },

  setAngle: function (angle) {
    var length = this.getLength();
    this._X = Math.cos(angle) * length;
    this._Y = Math.sin(angle) * length;
  },

  setLength: function (length) {
    var angle = this.getAngle();
    this._X = Math.cos(angle) * length;
    this._Y = Math.sin(angle) * length;
  },

  getX: function () {
    return this._X;
  },

  getY: function () {
    return this._Y;
  },

  getAngle: function () {
    // Math atan2 give use the angle if we know the opposite and adjacent sides of a triangle // 
    // arc tangent if we dont use atan'2' then we get flipped angles when we are in the Second and Third quadrants in are plane. //
    return Math.atan2(this._Y, this._X);
  },

  getLength: function () {
    return Math.sqrt((this._X * this._X) + (this._Y * this._Y));
  },

  add: function (v2) {
    return vector.create(this._X + v2.getX(), this._Y + v2.getY());
  },

  sub: function (v2) {
    return vector.create(this._X - v2.getX(), this._Y - v2.getY());
  },
 
  multiply: function (val) {
    return vector.create(this._X * val, this._Y * val);
  },

  divide: function () { 
    return vector.create(this._X / val, this._Y * val); 
  },

  addTo: function (v2) {
    this._X += v2.getX();
    this._Y += v2.getY();
  },

  subtractFrom: function (v2) {
    this._X -= v2.getX();
    this._Y -= v2.getY();
  },

  multiplyBy: function (v2) {
    this._X *= v2.getX();
    this._Y *= v2.getY();
  },

  divideBy: function (v2) {
    this._X /= v2.getX();
    this._Y /= v2.getY();
  },

}