"use client";
import { useState, useRef, useEffect } from "react";

import {
  PanelLeftClose,
  LayoutGrid,
  Plus,
  Wand2,
  LayoutTemplate,
  Target,
  Plug,
  Gift,
  Bell,
  Settings,
  Moon,
  Sun,
  ChevronDown,
  Gem,
  User,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/ThemeProvider";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { label: "DASHBOARD", icon: LayoutGrid, href: "/dashboard" },
    { label: "CREATE", icon: Plus, href: "/dashboard/create" },
    { label: "LAUNCH", icon: Wand2, href: "/dashboard/launch" },
    { label: "TEMPLATES", icon: LayoutTemplate, href: "/dashboard/templates" },
    { label: "ADVERTISING", icon: Target, href: "/dashboard/advertising" },
    { label: "INTEGRATIONS", icon: Plug, href: "/dashboard/integrations" },
    { label: "REFERRALS", icon: Gift, href: "/dashboard/referrals" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-deep text-text-primary font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? "w-[280px]" : "w-[64px]"} flex-shrink-0 h-full overflow-y-auto border-r border-border-subtle bg-bg-deep flex flex-col py-6 px-3 relative z-20 transition-[width] duration-300 ease-in-out`}>
        {/* Logo & Toggle Wrapper */}
        <div className={`flex items-center mb-8 ${isSidebarOpen ? "justify-between px-2" : "justify-center"}`}>
          {isSidebarOpen && (
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/branding/moonshift-wordmark.svg" 
                alt="Moonshift" 
                width={140} 
                height={28} 
                className="dark:invert"
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

        {/* Nav Links */}
        <nav className={`flex flex-col gap-1 w-full mb-8 ${!isSidebarOpen && "items-center"}`}>
          {navLinks.map((link, idx) => {
            const Icon = link.icon;
            const isActive = pathname === link.href || (link.href !== "/dashboard" && pathname.startsWith(link.href));
            return (
              <Link
                key={idx}
                href={link.href}
                className={`flex items-center ${isSidebarOpen ? "justify-between px-3" : "justify-center w-10"} py-2.5 transition-colors ${
                  isActive
                    ? "bg-accent/10 border border-accent/20"
                    : "hover:bg-bg-surface border border-transparent"
                }`}
                title={!isSidebarOpen ? link.label : undefined}
              >
                <div className={`flex items-center gap-3 ${isActive ? "text-accent" : "text-text-secondary"}`}>
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  {isSidebarOpen && (
                    <span className="text-[12px] font-medium tracking-[0.08em] whitespace-nowrap" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {link.label}
                    </span>
                  )}
                </div>
                {isSidebarOpen && isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />}
              </Link>
            );
          })}
        </nav>

        <div className={`mt-auto flex flex-col gap-3 ${isSidebarOpen ? "px-1" : "items-center px-0"}`}>
          {isSidebarOpen && (
            <Link
              href="/dashboard/billing"
              className="flex items-center justify-between p-3 bg-bg-surface border border-border-default hover:border-text-muted transition-colors"
            >
              <div className="flex flex-col">
                <span className="text-[13px] font-medium text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  Upgrade your plan
                </span>
                <span className="text-[11px] text-text-secondary">
                  Get more out of your apps
                </span>
              </div>
              <Gem className="w-5 h-5 text-accent flex-shrink-0" />
            </Link>
          )}

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className={`flex items-center ${isSidebarOpen ? "w-full px-2 py-2 gap-3" : "justify-center w-10 h-10"} hover:bg-bg-surface transition-colors`}
              title={!isSidebarOpen ? "Mohit Sharma" : undefined}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-[0_0_10px_rgba(236,72,153,0.2)] flex-shrink-0" />
              {isSidebarOpen && (
                <div className="flex flex-col items-start overflow-hidden">
                  <span className="text-[13px] text-text-primary whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>Mohit Sharma</span>
                  <span className="text-[9px] font-mono text-text-muted truncate uppercase" title="MOHIT.SHARMA80805@GMAIL.COM">MOHIT.SHARMA80...</span>
                </div>
              )}
            </button>

            {profileOpen && isSidebarOpen && (
              <div className="absolute left-0 bottom-full mb-2 w-[220px] border border-border-default bg-bg-surface shadow-lg z-30">
                <div className="flex items-center gap-3 p-3 border-b border-border-subtle">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-[0_0_10px_rgba(236,72,153,0.2)] flex-shrink-0" />
                  <div className="flex flex-col overflow-hidden">
                    <span className="text-[13px] text-text-primary whitespace-nowrap" style={{ fontFamily: "var(--font-dm-sans)" }}>Mohit Sharma</span>
                    <span className="text-[10px] font-mono text-text-muted truncate">mohit.sharma80805@gmail.com</span>
                  </div>
                </div>
                <div className="py-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors text-left">
                    <User className="w-3.5 h-3.5" />
                    View profile
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors text-left">
                    <Settings className="w-3.5 h-3.5" />
                    Account settings
                  </button>
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors text-left">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Help & support
                  </button>
                </div>
                <div className="border-t border-border-subtle py-1">
                  <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-text-secondary hover:bg-bg-elevated hover:text-text-primary transition-colors text-left">
                    <LogOut className="w-3.5 h-3.5" />
                    Log out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-[60px] flex-shrink-0 border-b border-border-subtle bg-bg-deep flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-base font-medium tracking-tight text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <button
              className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm"
              title="Settings"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              className="p-2 text-text-secondary hover:text-text-primary transition-colors border border-transparent hover:border-border-default rounded-sm"
              title="Notifications"
            >
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
