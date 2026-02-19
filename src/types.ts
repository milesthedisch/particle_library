export interface Spring {
  point: Point;
  offset: number;
  spring: number;
}

export interface Point {
  state: {
    x: number;
    y: number;
  };
}
