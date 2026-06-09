import { describe, it, expect } from "vitest";

describe("format helpers", () => {
  it("handles basic string concatenation", () => {
    const greeting = "Hello" + " " + "World";
    expect(greeting).toBe("Hello World");
  });

  it("handles number formatting", () => {
    const n = 1234.56;
    expect(n.toFixed(1)).toBe("1234.6");
  });
});
