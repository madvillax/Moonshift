"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { name: "PRODUCTS", href: "#features", hasDropdown: true },
  { name: "SOLUTIONS", href: "#solutions", hasDropdown: true },
  { name: "TOOLKITS", href: "#toolkits" },
  { name: "BLOG", href: "#blog" },
  { name: "DOCS", href: "#docs" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? theme === "light"
            ? "bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.1)]"
          : "bg-bg-deep border-b border-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img
              src={
                theme === "light"
                  ? "/branding/moonshift-wordmark-black-cropped.svg"
                  : "/branding/moonshift-wordmark.svg"
              }
              alt="Moonshift"
              className={`h-7 w-auto transition-all duration-500 ${
                theme === "light"
                  ? ""
                  : isScrolled
                    ? "brightness-0 invert"
                    : "dark:brightness-0 dark:invert"
              }`}
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted hover:text-text-primary transition-colors duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3 h-3 ml-0.5" />}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 text-text-muted hover:text-text-primary transition-colors duration-150"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <a
              href="#"
              className="px-5 py-2 text-[13px] font-semibold tracking-[0.02em] bg-text-primary text-bg-deep hover:opacity-90 transition-opacity duration-150"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              GET STARTED &rarr;
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-0 top-16 bg-bg-deep z-40 overflow-y-auto"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.1em] text-text-secondary hover:text-text-primary transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <div className="pt-8 border-t border-border-subtle space-y-4">
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 text-[13px] font-medium border border-border-default text-text-primary hover:border-text-muted transition-colors"
                >
                  {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                  {theme === "light" ? "Dark Mode" : "Light Mode"}
                </button>
                <a
                  href="#"
                  className="flex items-center justify-center w-full px-5 py-3 text-[13px] font-semibold tracking-[0.02em] bg-text-primary text-bg-deep"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  GET STARTED &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}