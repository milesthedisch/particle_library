// @flow

export type Spring = {
  point: Point,
  offset: number,
  spring: number,
};

export type Point = {
  state: {
    x: number,
    y: number,
  }
}
