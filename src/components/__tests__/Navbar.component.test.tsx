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
    expect(screen.getByText("How it works")).toBeInTheDocument();
    expect(screen.getByText("Templates")).toBeInTheDocument();
    expect(screen.getByText("Roadmap")).toBeInTheDocument();
    expect(screen.getByText("Night Shift")).toBeInTheDocument();
    expect(screen.getByText("Pricing")).toBeInTheDocument();
    expect(screen.getByText("Docs")).toBeInTheDocument();
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
