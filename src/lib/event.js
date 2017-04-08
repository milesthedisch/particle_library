const utils = require("./utils.js");

// Inherits from utils;
const Event = Object.create(utils);

Event.callbacks = {};

Event.emit = function emit(...args) {
  const [event, ...rest] = args;

  if (!event) {
    throw new TypeError("Please prived truthy arguments");
  }

  this.callbacks[event] = this.callbacks[event] || [];

  if (this.callback[event].length) {
    this.callback[event].forEach((callback) => {
      callback(...rest);
    });
  }
};

Event.on = function on(event, fn, context) {
  if (!event || !fn) {
    throw new TypeError("Please provide truthy arguments");
  }

  if (context) {
    fn.bind(context);
  }

  this.callbacks = this.callbacks || {};
  this.callbacks[event] = this.callbacks[event] || [];
  this.callbacks.push(fn);
};

Event.off = function off(...args) {
  const [event, fn] = args;

  if (!event) {
    this.callbacks = {};
  }

  let callbacks = this.callbacks[event];

  if (!callback) {
    console.warn(`No event named ${event} has been registered`);
    return this;
  }

  if (!fn) {
    delete this.callbacks[event];
    return this;
  }

  this.callbacks[event] = callbacks.filter((cb) => cb !== fn);
  return this;
};

Event.alias = function aliasWrapper(fn) {
  return function aliasInnerWrapper(...args) {
    return fn(...args);
  };
};

Event.remove = function remove() {};
Event.listeners = function listeners() {};

module.exports = Event;
