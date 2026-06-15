"use client";
import { useState } from "react";

import {
  PanelLeftClose,
  LayoutGrid,
  Plus,
  Wand2,
  Layers,
  Target,
  AtSign,
  Gift,
  Bell,
  Settings,
  Moon,
  Sun,
  ChevronDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex min-h-screen bg-bg-deep text-text-primary font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-[280px]" : "w-[64px]"} flex-shrink-0 border-r border-border-subtle bg-bg-deep flex flex-col py-6 px-3 relative z-20 transition-[width] duration-300 ease-in-out overflow-hidden`}>
        {/* Logo & Toggle Wrapper */}
        <div className={`flex items-center mb-8 ${isSidebarOpen ? "justify-between px-2" : "justify-center"}`}>
          {isSidebarOpen && (
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/branding/moonshift-wordmark.svg" 
                alt="Moonshift" 
                width={140} 
                height={28} 
                className="dark:invert brightness-0"
              />
            </Link>
          )}
          
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`w-6 h-6 flex-shrink-0 flex items-center justify-center border border-border-subtle hover:border-text-muted rounded-sm text-text-muted hover:text-text-primary transition-colors ${!isSidebarOpen && "mt-1"}`}
            title={isSidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
          >
            <PanelLeftClose className={`w-3.5 h-3.5 transition-transform duration-300 ${!isSidebarOpen && "rotate-180"}`} />
          </button>
        </div>

        {/* Navigation Header */}
        {isSidebarOpen && (
          <div className="flex items-center px-2 mb-3">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase whitespace-nowrap">
              {'// Navigation'}
            </span>
          </div>
        )}

        {/* Nav Links */}
        <nav className={`flex flex-col gap-1 w-full mb-8 ${!isSidebarOpen && "items-center"}`}>
          {[
            { label: "DASHBOARD", icon: LayoutGrid, active: true },
            { label: "CREATE", icon: Plus },
            { label: "LAUNCH", icon: Wand2 },
            { label: "RUNS", icon: Layers },
            { label: "ADVERTISING", icon: Target },
            { label: "BILLING", icon: AtSign },
            { label: "REFERRALS", icon: Gift },
            { label: "NOTIFICATIONS", icon: Bell },
            { label: "SETTINGS", icon: Settings },
          ].map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link 
                key={idx} 
                href="#"
                className={`flex items-center ${isSidebarOpen ? "justify-between px-3" : "justify-center w-10"} py-2.5 rounded-sm transition-colors ${
                  link.active 
                    ? "bg-accent/10 border border-accent/20" 
                    : "hover:bg-bg-surface border border-transparent"
                }`}
                title={!isSidebarOpen ? link.label : undefined}
              >
                <div className={`flex items-center gap-3 ${link.active ? "text-accent" : "text-text-secondary"}`}>
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {isSidebarOpen && (
                    <span className="text-[12px] font-medium tracking-[0.08em] whitespace-nowrap" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {link.label}
                    </span>
                  )}
                </div>
                {isSidebarOpen && link.active && <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />}
              </Link>
            );
          })}
        </nav>

        {/* Shortcuts Header */}
        {isSidebarOpen && (
          <div className="px-2 mb-3">
            <span className="text-[10px] font-mono tracking-widest text-text-muted uppercase whitespace-nowrap">
              {'// Shortcuts'}
            </span>
          </div>
        )}

        {/* Shortcut Buttons */}
        <div className={`flex flex-col gap-2 mb-auto ${isSidebarOpen ? "px-1" : "items-center px-0"}`}>
          <button 
            className={`flex items-center ${isSidebarOpen ? "justify-between px-4" : "justify-center w-10"} py-3 bg-accent/10 border border-accent/20 rounded-sm hover:bg-accent/20 transition-colors`}
            title={!isSidebarOpen ? "New Project" : undefined}
          >
            <div className="flex items-center gap-3 text-accent">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
              {isSidebarOpen && (
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] whitespace-nowrap" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  New Project
                </span>
              )}
            </div>
            {isSidebarOpen && <span className="text-accent text-lg leading-none font-sans">&rarr;</span>}
          </button>
          
          <button 
            className={`flex items-center ${isSidebarOpen ? "justify-between px-4" : "justify-center w-10"} py-3 bg-bg-surface border border-border-default rounded-sm hover:border-text-muted transition-colors text-text-secondary hover:text-text-primary`}
            title={!isSidebarOpen ? "New Launch" : undefined}
          >
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-text-muted flex-shrink-0" />
              {isSidebarOpen && (
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] whitespace-nowrap" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  New Launch
                </span>
              )}
            </div>
            {isSidebarOpen && <span className="text-lg leading-none font-sans text-text-secondary hover:text-text-primary">&rarr;</span>}
          </button>
        </div>

        {/* User Profile Card */}
        <div className={`mt-8 flex flex-col gap-2 ${isSidebarOpen ? "px-1" : "items-center px-0"}`}>
          <div className={`flex items-center gap-3 ${isSidebarOpen ? "p-3 border border-border-subtle bg-bg-surface" : "p-0"} rounded-sm`}>
            <div className="w-8 h-8 rounded-sm bg-gradient-to-tr from-pink-500 to-rose-400 shadow-[0_0_10px_rgba(236,72,153,0.2)] flex-shrink-0" title={!isSidebarOpen ? "Mohit Sharma" : undefined} />
            {isSidebarOpen && (
              <div className="flex flex-col overflow-hidden">
                <span className="text-[13px] text-text-primary whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>Mohit Sharma</span>
                <span className="text-[9px] font-mono text-text-muted truncate uppercase" title="MOHIT.SHARMA80805@GMAIL.COM">MOHIT.SHARMA80...</span>
              </div>
            )}
          </div>
          
          {isSidebarOpen ? (
            <button className="flex items-center justify-between p-3 border border-border-subtle hover:border-border-default bg-bg-deep rounded-sm transition-colors group">
              <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444] flex-shrink-0" />
                <span className="text-[11px] font-medium uppercase tracking-[0.1em] whitespace-nowrap" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                  Sign Out
                </span>
              </div>
              <svg className="w-3.5 h-3.5 text-text-muted group-hover:text-text-primary transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
          ) : (
            <button className="w-10 h-10 flex items-center justify-center border border-border-subtle hover:border-border-default bg-bg-deep rounded-sm transition-colors group mt-2" title="Sign Out">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
            </button>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-[60px] flex-shrink-0 border-b border-border-subtle bg-bg-deep flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-medium tracking-tight text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Operator console
          </h1>

          <div className="flex items-center gap-3">
            <button className="bg-accent hover:bg-accent/90 text-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors rounded-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="mr-1.5">•</span> New Project
            </button>
            <button className="border border-border-default hover:border-text-muted text-text-secondary hover:text-text-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors rounded-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="mr-1.5 text-accent">•</span> New Launch
            </button>
            <button className="border border-border-default hover:border-text-muted text-text-secondary hover:text-text-primary px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] transition-colors rounded-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              <span className="mr-1.5 text-accent">•</span> $MNSHFT
            </button>
            
            <div className="w-px h-5 bg-border-subtle mx-1" />
            
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm">
              <Bell className="w-4 h-4" />
            </button>
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
