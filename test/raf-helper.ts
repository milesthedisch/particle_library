/**
 * rAF helper - replaces raf-stub for testing requestAnimationFrame.
 *
 * stepRaf(count, timeIncrement) - advances rAF callbacks
 * resetRaf() - clears all queued callbacks and resets state
 */

interface QueuedCallback {
  id: number;
  fn: FrameRequestCallback;
}

let queue: QueuedCallback[] = [];
let currentTime = 0;
let nextId = 1;
let originalRAF: typeof requestAnimationFrame;
let originalCAF: typeof cancelAnimationFrame;

export function installRaf() {
  originalRAF = globalThis.requestAnimationFrame;
  originalCAF = globalThis.cancelAnimationFrame;

  globalThis.requestAnimationFrame = (fn: FrameRequestCallback): number => {
    const id = nextId++;
    queue.push({ id, fn });
    return id;
  };

  globalThis.cancelAnimationFrame = (id: number): void => {
    queue = queue.filter((item) => item.id !== id);
  };
}

export function stepRaf(count: number = 1, timeIncrement: number = 1000 / 60) {
  for (let i = 0; i < count; i++) {
    currentTime += timeIncrement;
    // Take a snapshot of the current queue and clear it before executing,
    // because callbacks may enqueue new callbacks
    const currentQueue = [...queue];
    queue = [];
    currentQueue.forEach((item) => item.fn(currentTime));
  }
}

export function resetRaf() {
  queue = [];
  currentTime = 0;
  nextId = 1;
}

export function uninstallRaf() {
  if (originalRAF) globalThis.requestAnimationFrame = originalRAF;
  if (originalCAF) globalThis.cancelAnimationFrame = originalCAF;
}

export function setCurrentTime(time: number) {
  currentTime = time;
}
