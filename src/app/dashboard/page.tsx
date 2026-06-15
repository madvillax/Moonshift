"use client";

import { useState } from "react";
import { Zap, Box, Rocket, ArrowRight, Wand2, ChevronDown } from "lucide-react";

export default function DashboardPage() {
  const [mode, setMode] = useState<'fast' | 'standard' | 'full'>('fast');

  const modes = [
    { id: 'fast' as const, label: 'FAST', icon: Zap, estimate: 'deploys app · ~3m · ~$1' },
    { id: 'standard' as const, label: 'STANDARD', icon: Box, estimate: 'deploys app · ~6m · ~$3' },
    { id: 'full' as const, label: 'FULL', icon: Rocket, estimate: 'deploys app · ~12m · ~$6' },
  ];

  const active = modes.find((m) => m.id === mode)!;

  const suggestions = [
    "PLAN MY GROUP TRIP",
    "MY BOOKSHELF ONLINE",
    "DOG WALKER FINDER",
    "FAMILY SHARED CALENDAR",
    "STUDENT BUDGET TRACKER"
  ];

  return (
    <div className="flex flex-col gap-12 pb-20 pt-8 animate-in fade-in duration-500">
      
      {/* Onboarding Banner */}
      <div className="bg-bg-surface border border-border-default p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-accent/50 group-hover:bg-accent transition-colors" />
        
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.1em] text-accent mb-2" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Finish Onboarding
          </div>
          <h2 className="text-xl font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Connect your stack so launches actually ship.
          </h2>
          <p className="text-[13px] text-text-secondary max-w-[600px] leading-relaxed mb-4">
            We push code to your GitHub, deploy to your Vercel, and post to your X + LinkedIn — all under your accounts. Takes ~3-4 minutes.
          </p>
          
          <div className="flex flex-wrap gap-2">
            {["GITHUB", "VERCEL", "LINKEDIN", "X", "META ADS"].map((tag) => (
              <span key={tag} className="px-2.5 py-1 text-[10px] font-medium tracking-wider text-text-muted border border-border-subtle bg-bg-deep rounded-sm" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="text-[13px] text-text-muted hover:text-text-primary transition-colors">
            Not now
          </button>
          <button className="bg-text-primary text-bg-deep hover:opacity-90 px-5 py-2.5 text-[12px] font-semibold tracking-wide transition-all" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Connect now
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="flex flex-col gap-1">
        <div className="text-[11px] text-text-muted font-mono tracking-widest uppercase mb-2">
          // OPERATOR CONSOLE
        </div>
        <div className="flex items-end justify-between">
          <h1 className="text-4xl md:text-5xl font-normal tracking-tight text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Welcome back, <span className="text-accent font-medium">Mohit</span>
          </h1>
          
          <div className="text-[11px] font-mono text-text-muted tracking-widest hidden md:block">
            0 RUNS <span className="mx-2">·</span> $0.00 LIFETIME <span className="mx-2">·</span> <a href="#" className="hover:text-text-primary transition-colors">BILLING &rarr;</a>
          </div>
        </div>
      </div>

      {/* Launchpad Box */}
      <div className="flex flex-col gap-2">
        <div className="text-[11px] text-text-muted font-mono tracking-widest uppercase mb-1">
          // WHAT DO YOU WANT TO BUILD?
        </div>
        
        <div className="bg-bg-elevated border border-border-default ring-1 ring-accent/10 shadow-[0_0_30px_rgba(0,139,255,0.03)] flex flex-col">
          {/* Main Textarea */}
          <div className="p-6">
            <textarea
              placeholder="Describe your app idea with specific features. Best for: SaaS dashboards, landing pages, internal tools, feedback portals, portfolios."
              className="w-full h-[140px] bg-transparent text-text-primary text-[16px] md:text-[18px] leading-[1.6] placeholder:text-text-muted resize-none outline-none"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            />
          </div>

          {/* Suggestions row */}
          <div className="border-t border-border-subtle bg-bg-surface/50 p-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
            <span className="text-[11px] font-mono text-text-muted whitespace-nowrap flex-shrink-0">
              // TRY:
            </span>
            {suggestions.map((s) => (
              <button 
                key={s}
                className="whitespace-nowrap px-3 py-1.5 text-[10px] font-medium tracking-widest text-text-secondary border border-border-subtle hover:border-text-muted hover:text-text-primary transition-colors bg-bg-deep rounded-sm"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Bottom Toolbar */}
          <div className="border-t border-border-default bg-bg-surface p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center border border-border-default bg-bg-deep w-fit">
                {modes.map((m) => {
                  const Icon = m.icon;
                  const isActive = mode === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMode(m.id)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.12em] transition-all duration-200 ease-out ${
                        isActive
                          ? 'bg-accent text-white'
                          : 'text-text-secondary hover:bg-accent/10 hover:text-text-primary'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {m.label}
                    </button>
                  );
                })}
              </div>
              <div className="text-[11px] font-mono text-text-muted pl-1">
                {active.estimate}
              </div>
            </div>

            <button className="flex items-center gap-3 bg-transparent border border-border-default hover:border-text-primary text-text-primary pl-6 pr-2 py-2 transition-all duration-200 group w-fit self-end md:self-center">
              <span className="text-[12px] font-semibold uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-space-grotesk)" }}>Launch</span>
              <div className="bg-bg-elevated border border-border-subtle px-3 py-1.5 text-[11px] font-mono text-text-secondary group-hover:text-text-primary flex items-center gap-1 transition-colors">
                ~$0.50 <ArrowRight className="w-3 h-3" />
              </div>
            </button>

          </div>
          
          {/* Project Type Row */}
          <div className="border-t border-border-subtle bg-bg-deep p-4 flex items-center justify-between">
            <div className="flex flex-col gap-1.5">
               <span className="text-[10px] font-medium uppercase tracking-widest text-text-muted" style={{ fontFamily: "var(--font-space-grotesk)" }}>Project Type</span>
               <div className="flex items-center gap-2 border border-border-subtle bg-bg-surface px-3 py-2 text-[13px] text-text-primary rounded-sm min-w-[200px] cursor-pointer hover:border-text-muted transition-colors">
                  <Wand2 className="w-4 h-4 text-accent" />
                  <span>Auto-detect</span>
                  <ChevronDown className="w-4 h-4 text-text-muted ml-auto" />
               </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
