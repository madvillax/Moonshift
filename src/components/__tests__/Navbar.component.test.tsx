import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../ThemeProvider";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("renders the logo", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );
    const logo = screen.getByAltText("Moonshift");
    expect(logo).toBeInTheDocument();
  });

  it("renders all navigation links", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );
    expect(screen.getByText("PRODUCTS")).toBeInTheDocument();
    expect(screen.getByText("SOLUTIONS")).toBeInTheDocument();
    expect(screen.getByText("TOOLKITS")).toBeInTheDocument();
    expect(screen.getByText("BLOG")).toBeInTheDocument();
    expect(screen.getByText("DOCS")).toBeInTheDocument();
  });

  it("renders the theme toggle button", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );
    const toggle = screen.getByLabelText("Toggle theme");
    expect(toggle).toBeInTheDocument();
  });

  it("renders the CTA button", () => {
    render(
      <ThemeProvider>
        <Navbar />
      </ThemeProvider>,
    );
    expect(screen.getByText("GET STARTED →")).toBeInTheDocument();
  });
});
