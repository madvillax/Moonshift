"use client";
import { useState, useRef, useEffect } from "react";

import {
  Bell,
  Settings,
  Moon,
  Sun,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import DashboardSidebar from "@/components/DashboardSidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-deep text-text-primary font-sans">
      <DashboardSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-[60px] flex-shrink-0 border-b border-border-subtle bg-bg-deep flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-base font-medium tracking-tight text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <Link
              href="/dashboard/settings"
              className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </Link>
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm"
                title="Notifications"
              >
                <Bell className="w-4 h-4" />
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 top-full mt-2 w-[320px] border border-border-default bg-bg-surface shadow-lg z-30">
                  <div className="px-4 py-3 border-b border-border-subtle">
                    <span
                      className="text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Notifications
                    </span>
                  </div>
                  <div className="flex items-center justify-center py-12">
                    <span
                      className="text-[12px] font-medium tracking-[0.1em] text-text-muted uppercase"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      No notifications yet
                    </span>
                  </div>
                  <div className="border-t border-border-subtle px-4 py-3">
                    <button className="w-full flex items-center justify-center gap-2 text-[11px] font-semibold tracking-[0.1em] text-text-secondary uppercase hover:text-text-primary transition-colors">
                      See all notifications
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm"
              title="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button className="flex items-center gap-2 pl-2 py-1">
               <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]" />
               <span className="text-[11px] font-medium uppercase tracking-widest text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>Mohit Sharma</span>
               <ChevronDown className="w-3 h-3 text-text-muted" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-bg-deep p-8">
          <div className="max-w-[1000px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
