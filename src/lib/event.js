const utils = require("./utils.js");

// Inherits from utils;
const Event = Object.create(utils);

Event.init = function() {
  this.callbacks = {};
  return this;
};

Event.emit = function emit(...args) {
  const [event, ...rest] = args;

  if (!event) {
    throw new TypeError("Please provide truthy arguments");
  }

  this.callbacks[event] = this.callbacks[event] || [];

  if (this.callbacks[event].length) {
    this.callbacks[event].forEach((callback) => {
      callback(...rest);
    });
  }

  return this;
};

Event.on = function on(event, fn, context) {
  if (!event || !fn) {
    throw new TypeError("Please provide truthy arguments");
  }

  if (context) {
    fn.bind(context);
  }

  const events = event.split(" ");

  this.callbacks = this.callbacks || {};

  events.forEach((e) => {
    this.callbacks[e] = this.callbacks[e] || [];
    this.callbacks[e].push(fn);
  });

  return this;
};

Event.off = function off(...args) {
  const [event, fn] = args;

  if (!event) {
    this.callbacks = {};
    return this;
  }

  let callbacks = this.callbacks[event];

  if (!callbacks) {
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

Event.listeners = function listeners(...args) {
  const [event] = args;

  if (!event) {
    return Object.keys(this.callbacks);
  }

  return this.callback[event];
};

// Aliases //
Event.emit = Event.fire;

Event.addListener = Event.on;

Event.remove =
Event.removeListener =
Event.removeAllListeners = Event.off;

module.exports = Event;
