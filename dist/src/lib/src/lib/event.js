"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Event
 * @type {Object}
 * @implements {utils}
 */
var Event = Object.create(null);

/**
 * init
 * @memberOf Event
 * @description Initializes the event object.
 * @return {Event}
 */
Event.init = function initEvent() {
  this.callbacks = {};
  return this;
};

/**
 * emit
 * @description Executes the handeler that assocaited with the emitted event.
 * @param {Array} args
 * @return {Event}
 */
Event.emit = function emit() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var event = args[0],
      rest = args.slice(1);


  if (!event) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  this.callbacks[event] = this.callbacks[event] || [];

  if (this.callbacks[event].length) {
    this.callbacks[event].forEach(function (callback) {
      callback.apply(undefined, _toConsumableArray(rest));
    });
  }

  return this;
};

/**
 * on
 * @description Attach a handler to an event.
 * @param  {String}   event
 * @param  {Function} fn
 * @param  {Object}   context
 * @return {Event}
 */
Event.on = function on(event, fn, context) {
  var _this = this;

  if (!event || !fn) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  if (context) {
    fn = fn.bind(context);
  }

  var events = event.split(" ");

  this.callbacks = this.callbacks || {};

  events.forEach(function (e) {
    _this.callbacks[e] = _this.callbacks[e] || [];

    if (!_this.callbacks[e].length) {
      _this.callbacks[e].push(fn);
      return _this;
    }

    // Dont create duplicates of the same handeled function.
    // If you want your function run twice wrap it in a function.
    return _this.callbacks[e].every(function (cb, i, col) {
      return cb !== fn;
    }) ? _this.callbacks[e].push(fn) : console.warn("Event: That function " + fn + " has already been declared a" + "handler for this event.");
  });

  return this;
};

/**
 * off
 * @description Remove an event handeler.
 * @param  {String}   event
 * @param  {Function} fn
 * @return {Event}
 */
Event.off = function off() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  var event = args[0],
      fn = args[1];


  if (!event) {
    this.callbacks = {};
    return this;
  }

  var callbacks = this.callbacks[event];

  if (!callbacks) {
    console.warn("Event: No event named " + event + " has been registered");
    return this;
  }

  if (!fn) {
    delete this.callbacks[event];
    return this;
  }

  this.callbacks[event] = callbacks.filter(function (cb) {
    return cb !== fn;
  });

  return this;
};

/**
 * listeners - Return all callbacks attached to a certain event
 * @param  {any<Array>} args
 * @return {function[]}
 */
Event.listeners = function listeners() {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  var event = args[0];


  if (!event) {
    return Object.keys(this.callbacks);
  }

  if (!this.callbacks[event]) {
    console.warn("Event: No event named " + event + " has been registered");
  }

  return this.callbacks[event];
};

Event.once = function once() {
  var self = this;

  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  var event = args[0],
      fn = args[1],
      context = args[2];


  var wrap = function wrap() {
    fn.bind(context)();
    self.off(event, wrap);
  };

  this.on(event, wrap, context);
};

// Aliases //
Event.removeListener = Event.removeAllListeners = Event.off;
Event.fire = Event.emit;
Event.addListener = Event.on;
Event.get = Event.listeners;

module.exports = Event;