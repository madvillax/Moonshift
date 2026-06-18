"use client";



const steps = [
  { cmd: "moonshift create \"a website for my bakery\"", delay: 0 },
  { cmd: "✓  planner · drafting spec...", delay: 0.6, muted: true },
  { cmd: "✓  14 agents building...", delay: 1.2, muted: true },
  { cmd: "✓  deployer · pushing to Vercel...", delay: 1.8, muted: true },
  { cmd: "🚀  Live → acme.moonshift.page", delay: 2.4, accent: true },
];

function MoonshiftMockup() {
  return (
    <div className="relative w-full h-full select-none">
      {/* Window chrome */}
      <div className="rounded-none border border-border-default overflow-hidden shadow-[0_0_60px_rgba(0,139,255,0.12)] ring-1 ring-white/5 bg-bg-surface">
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
        <div className="grid grid-cols-[140px_1fr] min-h-[340px]">
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

          {/* Main canvas */}
          <div className="bg-[#0D0D0D] p-4 flex flex-col gap-3 relative overflow-hidden">
            {/* Mini kanban preview */}
            <div className="text-[10px] text-text-muted font-mono mb-1 flex items-center gap-2">
              <span className="text-text-secondary">≡ KanbanBoard</span>
              <span className="ml-auto text-[9px] bg-accent/20 text-accent px-2 py-0.5">Preview</span>
            </div>

            <div className="grid grid-cols-3 gap-2 flex-1">
              {[
                { col: "Todo", color: "border-text-muted/20", cards: ["Design system", "API spec"] },
                { col: "In Progress", color: "border-accent/40", cards: ["Auth flow"] },
                { col: "Done", color: "border-[#22C55E]/30", cards: ["Setup repo", "DB schema", "CI/CD"] },
              ].map(({ col, color, cards }) => (
                <div key={col} className={`border ${color} bg-bg-elevated/40 p-2 rounded-none`}>
                  <div className="text-[9px] font-medium text-text-muted uppercase tracking-[0.1em] mb-2">{col}</div>
                  <div className="space-y-1.5">
                    {cards.map((card) => (
                      <div key={card} className="bg-bg-surface border border-border-subtle p-1.5 text-[9px] text-text-secondary">
                        {card}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Agent log overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 border-t border-border-subtle bg-bg-surface/95 px-3 py-2">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-[9px] font-mono text-text-muted">moonshift agent · running</span>
              </div>
              <div className="space-y-0.5 font-mono text-[9px]">
                <div className="text-text-muted"><span className="text-accent">●</span> paper — create_component (MCP)</div>
                <div className="text-text-muted pl-3">name: &quot;KanbanBoard&quot;</div>
                <div className="text-text-muted pl-3">→ writing Tailwind layout...</div>
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
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">

          <div className="flex flex-col justify-center py-12 pr-0 lg:pr-16 border-r-0 lg:border-r border-border-subtle">
            <h2
              className="text-4xl md:text-5xl lg:text-[52px] font-medium leading-[1.08] tracking-[-0.03em] text-text-primary mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Type your idea.<br />
              <span className="text-accent">Wake up launched.</span>
            </h2>

            <p className="text-[16px] text-text-secondary leading-[1.6] max-w-[440px] mb-8">
              One prompt → deployed app + owned repo + drafted launch posts + hero image. Ready before you need to tell anyone you&apos;re shipping.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 bg-text-primary text-bg-deep px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] hover:bg-text-primary/90 transition-all duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Start for free
            </a>
          </div>

          <div className="hidden lg:flex items-center justify-center py-8 pl-10">
            <div className="w-full max-w-[520px]">
              <MoonshiftMockup />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
