import { describe, it, expect } from "vitest";

describe("app entry", () => {
  it("exports a page component", async () => {
    const mod = await import("../page");
    expect(mod.default).toBeDefined();
  });
});
