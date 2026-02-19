export interface EventEmitter {
  callbacks: Record<string, ((...args: any[]) => void)[]>;
  init(): EventEmitter;
  emit(...args: any[]): void;
  on(event: string, fn: (...args: any[]) => void, context?: any): EventEmitter;
  off(...args: any[]): EventEmitter;
  listeners(...args: any[]): string[] | ((...args: any[]) => void)[];
  once(...args: any[]): void;
  removeListener: typeof Event.off;
  removeAllListeners: typeof Event.off;
  fire: typeof Event.emit;
  addListener: typeof Event.on;
  get: typeof Event.listeners;
}

/**
 * Event
 */
const Event = Object.create(null) as EventEmitter;

/**
 * init
 * @description Initializes the event object.
 */
Event.init = function initEvent(this: EventEmitter) {
  this.callbacks = {};
  return this;
};

/**
 * emit
 * @description Executes the handler that associated with the emitted event.
 */
Event.emit = function emit(this: EventEmitter, ...args: any[]) {
  const [event, ...rest] = args;

  if (!event) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  this.callbacks[event] = this.callbacks[event] || [];

  if (!this.callbacks[event].length) {
    return this;
  }

  this.callbacks[event].forEach((callback) => {
    callback(...rest);
  });
};

/**
 * on
 * @description Attach a handler to an event.
 */
Event.on = function on(this: EventEmitter, event: string, fn: (...args: any[]) => void, context?: any) {
  if (!event || !fn) {
    throw new TypeError("Event: Please provide truthy arguments");
  }

  if (context) {
    fn = fn.bind(context);
  }

  const events = event.split(" ");

  this.callbacks = this.callbacks || {};

  events.forEach((e) => {
    this.callbacks[e] = this.callbacks[e] || [];

    if (!this.callbacks[e].length) {
      this.callbacks[e].push(fn);
      return this;
    }

    // Dont create duplicates of the same handled function.
    // If you want your function run twice wrap it in a function.
    return this.callbacks[e].every((cb) => {
      return cb !== fn;
    }) ? this.callbacks[e].push(fn) :
      console.warn(`Event: That function ${fn} has already been declared a` +
        "handler for this event.");
  });

  return this;
};

/**
 * off
 * @description Remove an event handler.
 */
Event.off = function off(this: EventEmitter, ...args: any[]) {
  const [event, fn] = args;

  if (!event) {
    this.callbacks = {};
    return this;
  }

  const callbacks = this.callbacks[event];

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

/**
 * listeners - Return all callbacks attached to a certain event
 */
Event.listeners = function listeners(this: EventEmitter, ...args: any[]) {
  const [event] = args;

  if (!event) {
    return Object.keys(this.callbacks);
  }

  if (!this.callbacks[event]) {
    console.warn(`Event: No event named ${event} has been registered`);
  }

  return this.callbacks[event];
};

Event.once = function once(this: EventEmitter, ...args: any[]) {
  const self = this;
  const [event, fn, context] = args;

  const wrap = function wrap() {
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

export default Event;
