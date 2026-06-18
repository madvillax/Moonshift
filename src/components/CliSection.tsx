"use client";

import { Terminal, Zap, Code2, Globe, ArrowRight } from "lucide-react";

export default function CliSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-bg-deep border-t border-border-subtle">

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 z-10">
        
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex-1 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-none border border-accent/30 bg-accent/10">
              <Terminal className="w-4 h-4 text-accent" />
              <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                Introducing Moonshift CLI
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-[48px] font-medium leading-[1.1] tracking-[-0.02em] text-text-primary"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Bring the power of Moonshift to your terminal.
            </h2>
            
            <p className="text-[16px] text-text-secondary leading-[1.6] max-w-[480px]">
              One prompt, a deployed app, from a single self-contained binary. Type an idea, and Moonshift builds, deploys, and iterates entirely server-side without leaving your command line.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: Zap, label: "No Node, Bun, or build step" },
                { icon: Terminal, label: "Interactive launchpad" },
                { icon: Code2, label: "Live build log streaming" },
                { icon: Globe, label: "Connect domains & accounts" },
              ].map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-none border border-border-subtle bg-bg-surface">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-[14px] font-medium text-text-primary">{feature.label}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="pt-6">
              <button className="flex items-center gap-2 bg-accent px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white hover:bg-accent/90 transition-all duration-200 ease-out border border-transparent">
                Read docs
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Video Mockup */}
          <div className="flex-1 w-full max-w-[600px] mx-auto">
            <div className="relative bg-bg-elevated border border-border-default rounded-lg overflow-hidden shadow-[0_0_40px_rgba(0,139,255,0.15)] ring-1 ring-white/5">
              
              {/* Terminal Header */}
              <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-bg-surface">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
                </div>
                <div className="mx-auto text-[12px] font-mono text-text-muted flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  moonshift — bash
                </div>
                <div className="w-[60px]" /> {/* Spacer for centering */}
              </div>
              
              {/* Video Container */}
              <div className="relative aspect-video w-full bg-[#0A0A0A]">
                <video 
                  src="/moonshift-cli.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
