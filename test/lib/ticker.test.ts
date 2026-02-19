import { describe, it, expect } from "vitest";
import Ticker from "../../src/lib/ticker";

describe("#Ticker", function() {
  it("should be importable", function() {
    expect(Ticker).toBeTruthy();
  });
});
