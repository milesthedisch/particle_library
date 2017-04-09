const utils = require("./utils.js");

/**
 * Event
 * @type {Object}
 * @implements {utils}
 */
const Event = Object.create(utils);

/**
 * init
 * @memberOf Event
 * @description Initializes the event object.
 * @return {Event}
 */
Event.init = function() {
  this.callbacks = {};
  return this;
};

/**
 * emit
 * @description Executes the handeler that assocaited with the emitted event.
 * @param {...String} args
 * @return {Event}
 */
Event.emit = function emit(...args) {
  const [event, ...rest] = args;

  if (!event) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  this.callbacks[event] = this.callbacks[event] || [];

  if (this.callbacks[event].length) {
    this.callbacks[event].forEach((callback) => {
      callback(...rest);
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
  if (!event || !fn) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  if (context) {
    fn.bind(context);
  }

  const events = event.split(" ");

  this.callbacks = this.callbacks || {};

  events.forEach((e) => {
    this.callbacks[e] = this.callbacks[e] || [];

    if (!this.callbacks[e].length) {
      this.callbacks[e].push(fn);
      return this;
    }

    // Dont create duplicates of the same handeled function.
    // If you want your function run twice wrap it in a function.
    this.callbacks[e].forEach((cb, i, col) => {
      if (cb !== fn) {
        this.callbacks[e].push(fn);
      }
      console.warn(`Event: That function ${cb} has already been declared a` +
      "handler for this event.");
    });
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
Event.off = function off(...args) {
  const [event, fn] = args;

  if (!event) {
    this.callbacks = {};
    return this;
  }

  let callbacks = this.callbacks[event];

  if (!callbacks) {
    console.warn(`Event: No event named ${event} has been registered`);
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

  if (!this.callbacks[event]) {
    console.warn(`Event: No event named ${event} has been registered`);
  }

  return this.callbacks[event];
};

// Aliases //
Event.emit = Event.fire;

Event.addListener = Event.on;

Event.remove =
Event.removeListener =
Event.removeAllListeners = Event.off;

module.exports = Event;
