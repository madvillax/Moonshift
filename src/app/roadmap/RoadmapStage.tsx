"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  asciiSigns,
  pathD,
  pixelTiles,
  roadmapData,
  rocketPixelColors,
  rocketPixels,
  statusColors,
  viewBox,
} from "./data";

gsap.registerPlugin(ScrollTrigger);

const CHECKPOINTS_PER_CHAPTER = 4;
const MOVE_PORTION = 0.66;
const smoothStep = (v: number) => v * v * (3 - 2 * v);

export default function RoadmapStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const boundsCache = useRef({ width: 0, height: 0, ts: 0 });

  const getBounds = useCallback(() => {
    const now = Date.now();
    if (now - boundsCache.current.ts < 100 && boundsCache.current.width > 0) return boundsCache.current;
    const b = svgRef.current?.getBoundingClientRect();
    if (!b) return boundsCache.current;
    boundsCache.current = { width: b.width, height: b.height, ts: now };
    return boundsCache.current;
  }, []);

  useEffect(() => {
    const onResize = () => { boundsCache.current = { width: 0, height: 0, ts: 0 }; };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const progress = progressRef.current;
    const rocket = rocketRef.current;
    const stage = stageRef.current;
    if (!svg || !path || !progress || !rocket || !stage) return;

    const thrust = rocket.querySelector<HTMLElement>(".rocket-thrust");
    const pathLength = path.getTotalLength();
    const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-card]"));
    const markers = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-marker]"));

    const checkpointLengths = roadmapData.map((item) => {
      let bestLen = 0;
      let bestDist = Infinity;
      for (let step = 0; step <= 360; step += 1) {
        const len = (pathLength * step) / 360;
        const pt = path.getPointAtLength(len);
        const d = (pt.x - item.point.x) ** 2 + (pt.y - item.point.y) ** 2;
        if (d < bestDist) { bestDist = d; bestLen = len; }
      }
      return bestLen;
    });

    const chapterCount = Math.ceil(roadmapData.length / CHECKPOINTS_PER_CHAPTER);
    const chapterStops: number[] = [0];
    for (let i = 1; i < chapterCount; i++) {
      const ci = Math.min(i * CHECKPOINTS_PER_CHAPTER - 1, checkpointLengths.length - 1);
      chapterStops.push(checkpointLengths[ci] ?? pathLength);
    }
    chapterStops.push(pathLength);

    let activeCheckpoint = -1;

    gsap.set(progress, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    if (thrust) gsap.set(thrust, { opacity: 0, scaleX: 0.45, transformOrigin: "right center" });

    const placeRocket = (amount: number) => {
      const clamped = Math.min(Math.max(amount, 0), pathLength);
      const point = path.getPointAtLength(clamped);
      const b = getBounds();
      gsap.set(rocket, { x: (point.x / viewBox.width) * b.width - 76, y: (point.y / viewBox.height) * b.height - 45, rotate: 0 });
    };

    const focusCheckpoint = (travelled: number) => {
      let next = 0;
      let bestDist = Infinity;
      for (let i = 0; i < checkpointLengths.length; i++) {
        const d = Math.abs(checkpointLengths[i] - travelled);
        if (d < bestDist) { bestDist = d; next = i; }
      }
      if (next === activeCheckpoint) return;
      activeCheckpoint = next;
      cards.forEach((card, i) => {
        gsap.to(card, {
          borderColor: i === activeCheckpoint ? "rgba(0,139,255,0.9)" : "rgba(255,255,255,0.12)",
          boxShadow: i === activeCheckpoint ? "0 0 0 1px rgba(0,139,255,0.55), 8px 8px 0 rgba(0,0,0,0.55)" : "6px 6px 0 rgba(0,0,0,0.45)",
          scale: i === activeCheckpoint ? 1.035 : 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        });
      });
      markers.forEach((m, i) => {
        gsap.to(m, {
          scale: i === activeCheckpoint ? 1.45 : 1,
          opacity: i === activeCheckpoint ? 1 : 0.78,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        });
      });
    };

    placeRocket(0);
    focusCheckpoint(0);

    ScrollTrigger.create({
      trigger: stage,
      start: "top center",
      end: "bottom center",
      scrub: 0.35,
      onUpdate(self) {
        const raw = Math.min(Math.max(self.progress, 0), 1);
        const ch = Math.min(Math.floor(raw * chapterCount), chapterCount - 1);
        const cp = raw * chapterCount - ch;
        const start = chapterStops[ch];
        const end = chapterStops[ch + 1];
        const travelled = cp >= MOVE_PORTION ? end : start + (end - start) * smoothStep(cp / MOVE_PORTION);
        const moving = cp < MOVE_PORTION;
        gsap.set(progress, { strokeDashoffset: pathLength - travelled });
        if (thrust) gsap.to(thrust, { opacity: moving ? 1 : 0, scaleX: moving ? 1 : 0.45, duration: 0.12, overwrite: true });
        placeRocket(travelled);
        focusCheckpoint(travelled);
      },
    });

    cards.forEach((item) => {
      gsap.fromTo(item, { opacity: 0.5, y: 18 }, {
        opacity: 1, y: 0,
        scrollTrigger: { trigger: item, start: "top 84%", end: "top 62%", scrub: 0.6 },
      });
    });

    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, [getBounds]);

  return (
    <div ref={stageRef} data-roadmap-stage className="relative hidden lg:block" style={{ height: viewBox.height }}>
      <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox={`0 0 ${viewBox.width} ${viewBox.height}`} fill="none" preserveAspectRatio="none">
        {pixelTiles.map((t) => (
          <rect key={`${t.x}-${t.y}`} x={t.x} y={t.y} width="6" height="6" fill="rgba(255,255,255,0.08)" />
        ))}
        <path d={pathD} stroke="rgba(0,139,255,0.08)" strokeWidth="24" strokeDasharray="1 30" strokeLinecap="round" fill="none" />
        <path d={pathD} stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="3 18" strokeLinecap="round" fill="none" />
        <path d={pathD} stroke="rgba(0,139,255,0.28)" strokeWidth="1.5" strokeDasharray="26 30" strokeLinecap="round" fill="none" />
        <path ref={pathRef} d={pathD} stroke="transparent" strokeWidth="1" fill="none" />
        <path ref={progressRef} d={pathD} stroke="#008BFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {asciiSigns.map((s) => (
        <div key={`${s.label}-${s.x}-${s.y}`} className="absolute z-10 text-[14px] font-bold tracking-[0.28em] text-accent/70"
          style={{ left: s.x, top: s.y, fontFamily: "var(--font-jetbrains-mono)" }}>{s.label}</div>
      ))}

      <div ref={rocketRef} data-roadmap-rocket className="pointer-events-none absolute left-0 top-0 z-30 flex h-[90px] w-[152px] items-center justify-center">
        <PixelRocket />
      </div>

      <RoadMarker label="START" x={110} y={220} color="green" />

      {roadmapData.map((item) => {
        const c = statusColors[item.status];
        return (
          <div key={item.title}>
            <div data-roadmap-marker className="absolute z-20" style={{ left: item.point.x - 20, top: item.point.y - 20 }}>
              <CheckpointBeacon colors={c} />
            </div>
            <div className="absolute" style={{ left: item.card.x, top: item.card.y, width: 280 }}>
              <article data-roadmap-card className="roadmap-card border border-border-default bg-bg-surface/95 p-4 shadow-[6px_6px_0_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-accent/50">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 ${c.dot}`} />
                    <span className={`text-[10px] font-medium uppercase tracking-[0.14em] ${c.text}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{item.phase}</span>
                  </div>
                  <span className="text-[10px] text-text-muted" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>#{String(item.number).padStart(2, "0")}</span>
                </div>
                <h3 className="mb-2 text-[15px] font-medium leading-[1.25] tracking-[-0.02em] text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.title}</h3>
                <p className="text-[12px] leading-[1.55] text-text-secondary">{item.description}</p>
                <div className="mt-3 text-[10px] tracking-[0.16em] text-text-muted" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>+-- checkpoint locked --+</div>
              </article>
            </div>
          </div>
        );
      })}

      <RoadMarker label="FINISH" x={110} y={1920} color="blue" />
    </div>
  );
}

function RoadMarker({ label, x, y, color }: { label: string; x: number; y: number; color: "green" | "blue" }) {
  const cls = color === "green" ? "border-[#22C55E]/70 text-[#22C55E]" : "border-accent/70 text-accent";
  return (
    <div className="absolute z-20" style={{ left: x - 48, top: y - 28 }}>
      <div className={`grid h-14 w-24 place-items-center border-4 bg-bg-deep shadow-[7px_7px_0_rgba(0,0,0,0.45)] ${cls}`}>
        <span className="text-[13px] font-bold tracking-[0.22em]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>{label}</span>
      </div>
    </div>
  );
}

function CheckpointBeacon({ colors }: { colors: { border: string; bg: string; text: string; dot: string; svg: string } }) {
  return (
    <div className="relative h-10 w-10">
      <span className={`absolute left-3 top-3 h-4 w-4 border-2 ${colors.border} ${colors.bg} shadow-[0_0_18px_rgba(0,139,255,0.28)]`} />
      <span className={`absolute left-4 top-4 h-2 w-2 ${colors.dot}`} />
      <span className={`absolute left-0 top-4 h-1.5 w-1.5 ${colors.dot} opacity-70`} />
      <span className={`absolute right-0 top-4 h-1.5 w-1.5 ${colors.dot} opacity-70`} />
      <span className={`absolute left-4 top-0 h-1.5 w-1.5 ${colors.dot} opacity-70`} />
      <span className={`absolute bottom-0 left-4 h-1.5 w-1.5 ${colors.dot} opacity-70`} />
    </div>
  );
}

const PixelRocket = memo(function PixelRocket() {
  return (
    <div className="relative h-[90px] w-[152px] drop-shadow-[0_0_18px_rgba(0,139,255,0.7)]">
      <div className="rocket-thrust absolute left-0 top-[34px] grid grid-cols-10 gap-0.5">
        <span className="col-span-7 h-3 animate-pulse bg-[#0A63C9]" />
        <span className="col-span-10 h-4 animate-pulse bg-[#149EFF] [animation-delay:90ms]" />
        <span className="col-span-6 h-3 translate-x-4 animate-pulse bg-[#52C3F7] [animation-delay:180ms]" />
      </div>
      <div className="rocket-sprite absolute left-9 top-2 grid gap-0 border-none bg-transparent shadow-none" style={{ gridTemplateColumns: "repeat(22, 5px)" }}>
        {rocketPixels.flatMap((row, ri) =>
          row.split("").map((pixel, ci) => (
            <span key={`${ri}-${ci}`} className="h-[5px] w-[5px]" style={{ backgroundColor: rocketPixelColors[pixel] ?? "transparent" }} />
          )),
        )}
      </div>
    </div>
  );
});
