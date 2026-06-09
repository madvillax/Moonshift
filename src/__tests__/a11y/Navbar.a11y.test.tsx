import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

async function axe(container: HTMLElement) {
  const { default: axeCore } = await import("axe-core");
  const { violations } = await axeCore.run(container);
  return { violations };
}

describe("Navbar accessibility", () => {
  it("has no accessibility violations", async () => {
    const { container } = render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );
    const result = await axe(container);
    expect(result.violations).toHaveLength(0);
  });
});
