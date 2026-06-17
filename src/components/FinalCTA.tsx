"use client";

import { ArrowRight } from "iconoir-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const logos = [
  { name: "Vercel",    svg: <path d="M24 2L48 46H0L24 2Z" fill="currentColor" />, vb: "0 0 48 48" },
  { name: "Stripe",    svg: <text x="0" y="22" fontSize="26" fontWeight="700" fill="currentColor" fontFamily="sans-serif">stripe</text>, vb: "0 0 90 28" },
  { name: "Linear",    svg: <><circle cx="14" cy="14" r="14" fill="currentColor" opacity="0.15"/><path d="M2 14C2 7.37 7.37 2 14 2s12 5.37 12 12-5.37 12-12 12S2 20.63 2 14zm11-6.5L7.5 14H13v6.5l5.5-6.5H13V7.5z" fill="currentColor"/></>, vb: "0 0 28 28" },
  { name: "Notion",    svg: <text x="0" y="22" fontSize="26" fontWeight="700" fill="currentColor" fontFamily="sans-serif">Notion</text>, vb: "0 0 90 28" },
  { name: "Supabase",  svg: <text x="0" y="22" fontSize="22" fontWeight="700" fill="currentColor" fontFamily="sans-serif">supabase</text>, vb: "0 0 110 28" },
  { name: "Langchain", svg: <text x="0" y="22" fontSize="20" fontWeight="600" fill="currentColor" fontFamily="sans-serif">LangChain</text>, vb: "0 0 120 28" },
];

const steps = [
  { cmd: "moonshift create \"a website for my bakery\"", delay: 0 },
  { cmd: "✓  planner · drafting spec...", delay: 0.6, muted: true },
  { cmd: "✓  14 agents building...", delay: 1.2, muted: true },
  { cmd: "✓  deployer · pushing to Vercel...", delay: 1.8, muted: true },
  { cmd: "🚀  Live → acme.moonshift.page", delay: 2.4, accent: true },
];

function MoonshiftMockup() {
  return (
    <div className="flex flex-col h-full w-full select-none">
      {/* Window chrome */}
      <div className="flex flex-col flex-1 overflow-hidden bg-bg-surface">
        {/* Title bar */}
        <div className="flex items-center px-4 py-2.5 border-b border-border-subtle bg-bg-elevated">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
          </div>
          <div className="mx-auto font-mono text-[11px] text-text-muted">moonshift — build</div>
          <div className="w-14" />
        </div>

        {/* Body: sidebar + main */}
        <div className="grid grid-cols-[140px_1fr] flex-1">
          {/* Sidebar */}
          <div className="border-r border-border-subtle bg-bg-surface p-3 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 px-1.5 py-1 bg-accent/15 border border-accent/20">
                <div className="w-2.5 h-2.5 rounded-sm bg-accent flex-shrink-0" />
                <span className="text-[10px] font-medium text-accent truncate">Task Manager</span>
              </div>
            </div>
            <div className="space-y-0.5">
              <div className="text-[9px] uppercase tracking-[0.14em] text-text-muted px-1.5 mb-2">Pages</div>
              {["Dashboard", "Board", "Settings", "Profile"].map((p, i) => (
                <div key={p} className={`flex items-center gap-1.5 px-1.5 py-1 cursor-default text-[10px] ${i === 1 ? "bg-bg-elevated text-text-primary" : "text-text-muted hover:text-text-secondary"}`}>
                  <span className="text-[8px]">{i === 1 ? "▼" : "▶"}</span>
                  <span>{p}</span>
                </div>
              ))}
              <div className="pl-3 space-y-0.5 mt-0.5">
                {["Navbar", "KanbanBoard", "Card"].map((c) => (
                  <div key={c} className="flex items-center gap-1.5 px-1.5 py-0.5 text-[9px] text-text-muted">
                    <span className="text-[7px]">▶</span><span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main canvas — IDE simulation, light/dark aware */}
          <div className="bg-[#F7F7F7] dark:bg-[#0D0D0D] p-4 flex flex-col gap-3 relative overflow-hidden">
            {/* Mini kanban preview */}
            <div className="text-[10px] font-mono mb-1 flex items-center gap-2">
              <span className="text-[#666] dark:text-[#888]">≡ KanbanBoard</span>
              <span className="ml-auto text-[9px] bg-[#008BFF]/20 text-[#008BFF] px-2 py-0.5">Preview</span>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1">
              {[
                { col: "Todo", color: "border-[#D8D8D8] dark:border-[#333]", cards: ["Design system", "API spec"] },
                { col: "In Progress", color: "border-[#008BFF]/40", cards: ["Auth flow"] },
                { col: "Done", color: "border-[#22C55E]/30", cards: ["Setup repo", "DB schema", "CI/CD"] },
              ].map(({ col, color, cards }) => (
                <div key={col} className={`border ${color} bg-[#EBEBEB] dark:bg-[#1A1A1A] p-2`}>
                  <div className="text-[9px] font-medium text-[#888] dark:text-[#555] uppercase tracking-[0.1em] mb-2">{col}</div>
                  <div className="space-y-1.5">
                    {cards.map((card) => (
                      <div key={card} className="bg-white dark:bg-[#252525] border border-[#E0E0E0] dark:border-[#333] p-1.5 text-[9px] text-[#555] dark:text-[#A0A0A0]">
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Agent log overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-[#E5E5E5] dark:border-[#222] bg-[#F7F7F7]/95 dark:bg-[#0D0D0D]/95 px-3 py-2">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#008BFF] animate-pulse" />
                <span className="text-[9px] font-mono text-[#777] dark:text-[#555]">moonshift agent · running</span>
              </div>
              <div className="space-y-0.5 font-mono text-[9px]">
                <div className="text-[#777] dark:text-[#555]"><span className="text-[#008BFF]">●</span> paper — create_component (MCP)</div>
                <div className="text-[#777] dark:text-[#555] pl-3">name: &quot;KanbanBoard&quot;</div>
                <div className="text-[#777] dark:text-[#555] pl-3">→ writing Tailwind layout...</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="border-t border-border-subtle grid grid-cols-[1fr_120px] bg-bg-surface">
          <div className="border-r border-border-subtle p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-medium text-text-primary">Build log</span>
              <span className="text-[9px] text-[#22C55E]">● Live</span>
            </div>
            <div className="font-mono space-y-0.5">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`text-[9px] leading-[1.6] ${s.accent ? "text-accent font-medium" : s.muted ? "text-text-muted" : "text-text-secondary"}`}
                >
                  {s.cmd}
                </div>
              ))}
            </div>
          </div>
          <div className="p-3 space-y-3">
            <div>
              <div className="text-[9px] text-text-muted mb-1">Mode</div>
              <div className="text-[10px] font-medium text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 text-center">FAST</div>
            </div>
            <div>
              <div className="text-[9px] text-text-muted mb-1">Cost</div>
              <div className="text-[10px] text-text-primary">~$1</div>
            </div>
            <div>
              <div className="text-[9px] text-text-muted mb-1">Time</div>
              <div className="text-[10px] text-text-primary">~3 min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-bg-deep py-0 border-t border-border-subtle">
      <div className="relative mx-auto max-w-[2000px]">
        <div className="flex flex-col lg:flex-row min-h-[520px]">

          {/* Left: headline + CTAs + logos */}
          <div
            className="lg:w-1/2 lg:shrink-0 flex flex-col justify-center py-24 lg:py-32 px-6 lg:pr-16 border-b lg:border-b-0 lg:border-r border-border-subtle relative overflow-hidden"
            style={{ paddingLeft: "max(1.5rem, calc((100vw - 1320px) / 2 + 2rem))" }}
          >
            {/* CSS grid — tiles at exactly 40px matching hero GridVisuals */}
            <div
              className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_90%_at_30%_50%,white,transparent)]"
              style={{
                backgroundImage: `linear-gradient(rgba(0,139,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(0,139,255,0.14) 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <BlurFade delay={0} duration={0.5} inView>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.04] tracking-[-0.03em] text-text-primary mb-4 text-balance"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              One prompt.<br />
              <AnimatedGradientText colorFrom="#008BFF" colorTo="#69C0FF" speed={0.8} className="whitespace-nowrap">
                Shipped overnight.
              </AnimatedGradientText>
            </h2>
            </BlurFade>

            <BlurFade delay={0.15} duration={0.5} inView>
            <p className="text-[16px] text-text-secondary leading-[1.6] max-w-[440px] mb-8 text-pretty">
              One prompt → deployed app + owned repo + drafted launch posts + hero image. Ready before you need to tell anyone you&apos;re shipping.
            </p>
            </BlurFade>

            <BlurFade delay={0.3} duration={0.5} inView>
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-text-primary text-bg-deep px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] hover:bg-text-primary/90 transition-all duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Start for free
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 border border-border-default text-text-secondary px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] hover:border-text-primary hover:text-text-primary transition-all duration-200"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Get a demo
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            </BlurFade>

            {/* Logo grid */}
            <div className="border border-border-subtle">
              <div className="grid grid-cols-3 divide-x divide-y divide-border-subtle">
                {logos.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center justify-center px-6 py-5 opacity-40 hover:opacity-80 bg-bg-surface hover:bg-bg-elevated transition-all duration-200 cursor-default"
                  >
                    <svg viewBox={logo.vb} className="h-5 text-text-primary" fill="none">
                      {logo.svg}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: visual mockup */}
          <BlurFade delay={0.2} duration={0.6} inView className="hidden lg:flex flex-col flex-1 min-w-0 overflow-hidden">
            <MoonshiftMockup />
          </BlurFade>

        </div>
      </div>
    </section>
  );
}
