"use client";

import { motion } from "framer-motion";
import { Plus, Mic, ArrowUp, Lightbulb } from "lucide-react";

const logos = [
  "Vercel",
  "Stripe",
  "Linear",
  "Notion",
  "Figma",
  "Supabase",
  "Langchain",
  "OpenAI",
  "Replicate",
  "Hugging Face",
];

const Block = ({ className, color }: { className: string; color: string }) => (
  <div
    className={`absolute ${className}`}
    style={{ backgroundColor: color, opacity: 0.7 }}
  />
);

const GridVisuals = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center">
      <div className="absolute top-[560px] w-full max-w-[1200px] h-[300px] relative">
        <Block className="top-[0px] left-[0px] w-[160px] h-[90px] hidden md:block" color="#0050B3" />
        <Block className="top-[80px] left-[130px] w-[110px] h-[75px] hidden lg:block" color="#008BFF" />
        <Block className="top-[140px] left-[0px] w-[140px] h-[70px] hidden md:block" color="#38BDF8" />
        <Block className="top-[200px] left-[100px] w-[100px] h-[60px] hidden lg:block" color="#69C0FF" />
      </div>

      <div className="absolute top-[520px] w-full max-w-[1200px] h-[320px] relative">
        <Block className="top-[0px] right-[0px] w-[180px] h-[120px] hidden md:block" color="#008BFF" />
        <Block className="top-[100px] right-[150px] w-[140px] h-[90px] hidden lg:block" color="#0050B3" />
        <Block className="top-[30px] right-[220px] w-[110px] h-[75px] hidden xl:block" color="#69C0FF" />
        <Block className="top-[200px] right-[0px] w-[160px] h-[75px] hidden md:block" color="#38BDF8" />
        <Block className="top-[250px] right-[130px] w-[130px] h-[60px] hidden lg:block" color="#0050B3" />
      </div>
    </div>
  );
};

const ROCKET_PIXEL_SIZE = 10;
const rocketArt = [
  "......BBB..............",
  "....BBBBBBB............",
  "...BBBWWBBB...........",
  "..BBBWWWWBBB..........",
  ".BBBWWWWWWBBBB........",
  "BBBWWWKKWWWWBB.......",
  "BBBWWWKKWGGWBBLLC....",
  "BBBWWWWWWGGWBBLLLC...",
  "BBBWWWWWWWWWBBLLC....",
  ".BBBWWWWWWWBBB.......",
  "..BBBBWWWBBBB........",
  "....BBBBBBBB.........",
  ".....BBB..BBB........",
  "......B....B.........",
];
const rocketColors: Record<string, string> = {
  B: "#008BFF",
  C: "#38BDF8",
  G: "#9CA3AF",
  K: "#0050B3",
  L: "#69C0FF",
  W: "#FFFFFF",
};
const rocketWidth = Math.max(...rocketArt.map((row) => row.length)) * ROCKET_PIXEL_SIZE;
const rocketHeight = rocketArt.length * ROCKET_PIXEL_SIZE;

const PixelRocket = () => {
  return (
    <div className="rocket-hover">
      <style>{`
        @keyframes rocket-float { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-8px,-9px) rotate(0.6deg); } }
        @keyframes rocket-exhaust { 0%,100% { transform: translateX(0); opacity: 1; } 50% { transform: translateX(10px); opacity: 0.7; } }
        @keyframes exhaust-pulse1 { 0%,100% { opacity: 0.5; transform: scaleX(0.7); } 50% { opacity: 0.9; transform: scaleX(1.05); } }
        @keyframes exhaust-pulse2 { 0%,100% { opacity: 0.4; transform: scaleX(0.75); } 50% { opacity: 1; transform: scaleX(1.1); } }
        @keyframes exhaust-pulse3 { 0%,100% { opacity: 0.35; transform: scaleX(0.65); } 50% { opacity: 0.85; transform: scaleX(1); } }
        .rocket-hover { animation: rocket-float 2.6s ease-in-out infinite; }
        .rocket-exhaust { animation: rocket-exhaust 0.38s linear infinite; }
        .exhaust-1 { animation: exhaust-pulse1 0.38s linear infinite; }
        .exhaust-2 { animation: exhaust-pulse2 0.32s linear infinite; }
        .exhaust-3 { animation: exhaust-pulse3 0.44s linear infinite; }
      `}</style>
      <div className="relative" style={{ width: rocketWidth, height: rocketHeight }}>
        <svg width={rocketWidth} height={rocketHeight} shapeRendering="crispEdges">
          {rocketArt.map((row, y) => 
            row.split('').map((char, x) => {
              if (char === '.') return null;
              return <rect key={`r-${x}-${y}`} x={x * ROCKET_PIXEL_SIZE} y={y * ROCKET_PIXEL_SIZE} width={ROCKET_PIXEL_SIZE} height={ROCKET_PIXEL_SIZE} fill={rocketColors[char]} />;
            })
          )}
        </svg>
        <div className="rocket-exhaust absolute right-[-38px] top-1/2 flex -translate-y-1/2 flex-col gap-[4px]">
          <div className="exhaust-1 h-[7px] w-[26px] bg-[#38BDF8]" />
          <div className="exhaust-2 h-[9px] w-[40px] bg-[#69C0FF]" />
          <div className="exhaust-3 h-[7px] w-[24px] bg-[#38BDF8]" />
        </div>
      </div>
    </div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-start overflow-hidden bg-bg-deep pt-28 pb-20">
      <GridVisuals />
      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-10 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left mb-6"
        >
          <h1
            className="text-4xl md:text-[52px] lg:text-[60px] font-medium leading-[1.08] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            <span className="text-text-primary">Type your idea.</span>
            <br />
            <span className="text-accent">Wake up launched.</span>
          </h1>

          <p className="text-[15px] md:text-[16px] text-text-secondary max-w-[480px] leading-[1.6] mb-6">
            Moonshift connects your teams, agents, code, and data on a single
            platform built on web standards, so nothing gets lost in translation
          </p>

          <div className="flex flex-wrap items-center justify-start gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-text-primary text-bg-deep rounded-none font-semibold text-[12px] tracking-[0.06em] hover:scale-[1.02] transition-transform duration-150"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              START BUILDING FOR FREE
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-transparent text-text-primary rounded-none font-medium text-[14px] tracking-[0.02em] hover:text-text-secondary transition-colors duration-150 group"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              GET A DEMO
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
  className="max-w-[640px] mx-auto w-full mb-12"
        >
          <PromptBox />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="bg-bg-elevated border border-border-subtle rounded-none overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-bg-surface">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
                <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#22C55E]/80" />
              </div>
              <div className="mx-auto text-[12px] font-mono text-text-muted">Moonshift — Build</div>
              <div className="w-[60px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-3 border-r border-border-subtle bg-bg-surface p-4 hidden md:block">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border-subtle">
                  <div className="w-4 h-4 bg-accent rounded-sm" />
                  <span className="text-[13px] font-medium text-text-primary">Overflow App</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] text-text-muted">
                    <span>▼</span>
                    <span>Pages</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>▶</span>
                      <span>Page 1</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>▶</span>
                      <span>Junk</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[12px] text-text-muted mt-3">
                    <span>▼</span>
                    <span>PlaylistPage</span>
                  </div>
                  <div className="pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>▶</span>
                      <span>Navbar</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>▶</span>
                      <span>Hero</span>
                    </div>
                    <div className="flex items-center gap-2 text-[12px] text-text-secondary">
                      <span>▶</span>
                      <span>Features</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 bg-bg-deep p-4 md:p-6 relative min-h-[400px] md:min-h-[500px]">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[14px] text-text-primary">☰ overflow</span>
                  </div>
                  <div className="flex items-center gap-2 bg-bg-surface px-3 py-1.5 rounded-none border border-border-subtle">
                    <span className="text-[12px] text-text-muted">🔍</span>
                    <span className="text-[12px] text-text-muted">Search tracks...</span>
                  </div>
                </div>

                <div className="relative w-full h-[300px] md:h-[400px] bg-bg-elevated border border-border-subtle rounded-none overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-[#D4A373] via-[#8B6914] to-[#4A6741] opacity-60" />
                      <span className="text-[12px] text-text-muted">Cover Art</span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-[280px] bg-bg-surface border border-border-subtle rounded-none p-3 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-text-muted" />
                      <div className="w-2.5 h-2.5 rounded-full bg-text-muted" />
                      <div className="w-2.5 h-2.5 rounded-full bg-text-muted" />
                    </div>
                    <span className="text-[11px] text-text-muted ml-auto">Claude Code</span>
                    <div className="w-4 h-4 bg-[#3B82F6] rounded-sm" />
                  </div>
                  <div className="space-y-1.5 font-mono text-[10px] leading-[1.6]">
                    <div className="flex items-start gap-1.5">
                      <span className="text-accent">●</span>
                      <span className="text-text-secondary">paper — create_artboard (MCP)</span>
                    </div>
                    <div className="pl-4 text-text-muted">name: &quot;Playlist — Hero&quot;</div>
                    <div className="pl-4 text-text-muted">width: 390, height: 742</div>
                    <div className="flex items-start gap-1.5 mt-2">
                      <span className="text-accent">●</span>
                      <span className="text-text-secondary">paper — write_html (MCP)</span>
                    </div>
                    <div className="pl-4 text-text-muted">→ Cover art</div>
                    <div className="pl-4 text-text-muted">targetNodeId: &quot;CoverArt&quot;</div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-3 border-l border-border-subtle bg-bg-surface p-4 hidden md:block">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-subtle">
                  <span className="text-[13px] font-medium text-text-primary">Document</span>
                  <span className="text-[12px] text-text-muted">100%</span>
                </div>

                <div className="space-y-4">
                  <div className="bg-bg-elevated p-2 text-center text-[12px] text-text-muted border border-border-subtle">
                    Copy link ⌘L
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-text-primary">Layout</span>
                    <span className="text-[12px] text-text-muted">▼</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "X", val: "348" },
                      { label: "Y", val: "64" },
                      { label: "↻", val: "0°" },
                    ].map((item) => (
                      <div key={item.label} className="bg-bg-elevated border border-border-subtle p-1.5">
                        <span className="text-[10px] text-text-muted">{item.label}</span>
                        <div className="text-[11px] text-text-primary">{item.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { label: "W", val: "870" },
                      { label: "H", val: "611" },
                      { label: "⧉", val: "" },
                    ].map((item) => (
                      <div key={item.label} className="bg-bg-elevated border border-border-subtle p-1.5">
                        <span className="text-[10px] text-text-muted">{item.label}</span>
                        <div className="text-[11px] text-text-primary">{item.val}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-bg-elevated border border-border-subtle p-2 text-center text-[12px] text-text-secondary">
                    Add flex ⇧A
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-border-default rounded-sm" />
                    <span className="text-[12px] text-text-secondary">Clip content ⌥C</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[12px] text-text-primary">Radius</span>
                    <span className="text-[12px] text-text-muted">⧉</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-6 h-3 bg-text-primary rounded-full relative">
                      <div className="w-2.5 h-2.5 bg-bg-deep rounded-full absolute left-0.5 top-0.25" />
                    </div>
                    <span className="text-[12px] text-text-muted">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-24 border-t border-border-subtle pt-12 overflow-hidden"
        >
          <p className="text-center text-[11px] font-medium text-text-muted mb-8 uppercase tracking-[0.1em]">
            TRUSTED BY DEVELOPERS AT
          </p>
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-marquee">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 mx-8 text-text-muted/50 hover:text-text-secondary transition-colors text-lg font-semibold tracking-wide whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-[180px] right-[12%] z-10 hidden lg:block">
        <PixelRocket />
      </div>
    </section>
  );
}

function PromptBox() {
  return (
    <div className="bg-bg-elevated border border-border-default rounded-none overflow-hidden ring-1 ring-accent/20 shadow-[0_0_20px_rgba(0,139,255,0.08)]">
      <div className="p-4">
        <textarea
          placeholder="Describe the app you want to build..."
          className="w-full h-[56px] bg-transparent text-text-primary text-[14px] placeholder:text-text-muted resize-none outline-none"
          style={{ fontFamily: "var(--font-inter)" }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-2.5 border-t border-border-default bg-bg-surface">
        <div className="flex items-center gap-3">
          <button className="p-1 text-text-muted hover:text-text-primary transition-colors">
            <Plus className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-8 h-4 bg-bg-elevated border border-border-subtle relative">
              <div className="w-3.5 h-3 bg-text-muted absolute left-0.5 top-0.5" />
            </div>
            <span className="text-[12px] text-text-secondary" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Plan
            </span>
            <Lightbulb className="w-3.5 h-3.5 text-text-muted" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 text-text-muted hover:text-text-primary transition-colors">
            <Mic className="w-4 h-4" />
          </button>
          <button className="w-9 h-9 flex items-center justify-center bg-accent text-white hover:bg-accent/90 transition-all hover:shadow-[0_0_12px_rgba(0,139,255,0.4)]">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
