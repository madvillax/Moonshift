"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import Image from "next/image";
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

  const memoizedNavLinks = useMemo(() => navLinks, []);
  const handleToggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);
  const handleCloseMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 lg:px-10"
    >
      <div
        className={`w-full max-w-[1200px] transition-all duration-500 ${
          isScrolled
            ? theme === "light"
              ? "mt-0 bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
              : "mt-0 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 shadow-[0_1px_0_rgba(255,255,255,0.1)]"
            : "mt-3 bg-bg-deep border border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 lg:px-10">
          <a href="#" className="flex items-center gap-2 relative h-7 w-[140px]">
            <Image
              src={
                theme === "light"
                  ? "/branding/moonshift-wordmark-black-cropped.svg"
                  : "/branding/moonshift-wordmark.svg"
              }
              alt="Moonshift"
              fill
              className={`object-contain object-left transition-all duration-500 ${
                theme === "light"
                  ? ""
                  : isScrolled
                    ? "brightness-0 invert"
                    : "dark:brightness-0 dark:invert"
              }`}
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {memoizedNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-[0.12em] text-black dark:text-text-muted hover:text-black dark:hover:text-text-primary transition-colors duration-200"
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
              className="p-2 text-black dark:text-text-muted hover:text-black dark:hover:text-text-primary transition-colors duration-150"
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
            onClick={handleToggleMobileMenu}
            className="lg:hidden p-2 text-black dark:text-text-secondary hover:text-black dark:hover:text-text-primary"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
            className={`lg:hidden fixed inset-0 z-40 overflow-y-auto bg-bg-deep ${
              isScrolled ? "top-16" : "top-[76px]"
            }`}
          >
            <div className="px-6 py-8 space-y-6">
              {memoizedNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between text-[13px] font-medium uppercase tracking-[0.1em] text-black dark:text-text-secondary hover:text-black dark:hover:text-text-primary transition-colors"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                  onClick={handleCloseMobileMenu}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <div className="pt-8 border-t border-border-subtle space-y-4">
                <button
                  onClick={() => {
                    toggleTheme();
                    handleCloseMobileMenu();
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