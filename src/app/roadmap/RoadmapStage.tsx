"use client";

import { memo, useCallback, useEffect, useRef } from "react";
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

const CHECKPOINTS_PER_CHAPTER = 4;
const MOVE_PORTION = 0.66;
const smoothStep = (v: number) => v * v * (3 - 2 * v);

function PixelRocket() {
  return (
    <div className="rocket-hover" style={{ width: 152, height: 90 }}>
      <style>{`
        @keyframes rocket-float { 0%,100% { transform: translate(0,0) rotate(0deg); } 50% { transform: translate(-8px,-9px) rotate(0.6deg); } }
        .rocket-hover { animation: rocket-float 2.6s ease-in-out infinite; }
      `}</style>
      <div className="relative flex items-center justify-center" style={{ width: 152, height: 90 }}>
        <svg width="152" height="90" shapeRendering="crispEdges" style={{ transform: "rotate(-15deg)" }}>
          {rocketPixels.map((row: string, y: number) =>
            row.split("").map((char: string, x: number) => {
              if (char === ".") return null;
              const key = `r-${x}-${y}`;
              const size = 6;
              return (
                <rect
                  key={key}
                  x={x * size}
                  y={y * size}
                  width={size}
                  height={size}
                  fill={rocketPixelColors[char] || "#008BFF"}
                />
              );
            }),
          )}
        </svg>
      </div>
    </div>
  );
}

const CheckpointBeacon = memo(function CheckpointBeacon({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 group cursor-default">
      <div className="relative flex h-4 w-4 items-center justify-center">
        <div className="h-3 w-3 rounded-full border-2 transition-all duration-300" style={{ borderColor: color, backgroundColor: `${color}22` }} />
      </div>
      <div className="rounded bg-bg-surface/95 px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.18em] text-text-muted transition-all duration-300 group-hover:text-text-primary group-hover:bg-bg-surface">
        {label}
      </div>
    </div>
  );
});

const RoadMarker = memo(function RoadMarker({ label, x, y }: { label: string; x: number; y: number }) {
  return (
    <div className="absolute z-20" style={{ left: x - 20, top: y - 20 }}>
      <CheckpointBeacon color="#008BFF" label={label} />
    </div>
  );
});

export default function RoadmapStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const boundsCache = useRef({ width: 0, height: 0, ts: 0 });
  const activeCheckpointRef = useRef(-1);
  const pathLengthRef = useRef(0);
  const checkpointLengthsRef = useRef<number[]>([]);
  const chapterStopsRef = useRef<number[]>([]);
  const chapterCountRef = useRef(0);
  const cardsRef = useRef<HTMLElement[]>([]);
  const markersRef = useRef<HTMLElement[]>([]);
  const tickingRef = useRef(false);

  const getBounds = useCallback(() => {
    const now = Date.now();
    if (now - boundsCache.current.ts < 100 && boundsCache.current.width > 0) return boundsCache.current;
    const b = svgRef.current?.getBoundingClientRect();
    if (!b) return boundsCache.current;
    boundsCache.current = { width: b.width, height: b.height, ts: now };
    return boundsCache.current;
  }, []);

  const placeRocket = useCallback((amount: number) => {
    const rocket = rocketRef.current;
    const path = pathRef.current;
    if (!rocket || !path) return;
    const pathLength = pathLengthRef.current;
    const clamped = Math.min(Math.max(amount, 0), pathLength);
    const point = path.getPointAtLength(clamped);
    const b = getBounds();
    const x = (point.x / viewBox.width) * b.width - 76;
    const y = (point.y / viewBox.height) * b.height - 45;
    rocket.style.transform = `translate(${x}px, ${y}px) rotate(0deg)`;
  }, [getBounds]);

  const focusCheckpoint = useCallback((travelled: number) => {
    const checkpointLengths = checkpointLengthsRef.current;
    const cards = cardsRef.current;
    const markers = markersRef.current;
    let next = 0;
    let bestDist = Infinity;
    for (let i = 0; i < checkpointLengths.length; i++) {
      const d = Math.abs(checkpointLengths[i] - travelled);
      if (d < bestDist) { bestDist = d; next = i; }
    }
    if (next === activeCheckpointRef.current) return;
    activeCheckpointRef.current = next;
    cards.forEach((card, i) => {
      const isActive = i === next;
      card.style.borderColor = isActive ? "rgba(0,139,255,0.9)" : "rgba(255,255,255,0.12)";
      card.style.boxShadow = isActive ? "0 0 0 1px rgba(0,139,255,0.55), 8px 8px 0 rgba(0,0,0,0.55)" : "6px 6px 0 rgba(0,0,0,0.45)";
      card.style.transform = isActive ? "scale(1.035)" : "scale(1)";
      card.style.transition = "border-color 0.35s, box-shadow 0.35s, transform 0.35s";
    });
    markers.forEach((m, i) => {
      const isActive = i === next;
      m.style.transform = isActive ? "scale(1.45)" : "scale(1)";
      m.style.opacity = isActive ? "1" : "0.78";
      m.style.transition = "transform 0.35s, opacity 0.35s";
    });
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
    pathLengthRef.current = pathLength;

    progress.setAttribute("stroke-dasharray", String(pathLength));
    progress.setAttribute("stroke-dashoffset", String(pathLength));
    if (thrust) {
      thrust.style.opacity = "0";
      thrust.style.transform = "scaleX(0.45)";
      thrust.style.transformOrigin = "right center";
    }

    cardsRef.current = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-card]"));
    markersRef.current = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-marker]"));

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
    checkpointLengthsRef.current = checkpointLengths;

    const chapterCount = Math.ceil(roadmapData.length / CHECKPOINTS_PER_CHAPTER);
    chapterCountRef.current = chapterCount;
    const chapterStops: number[] = [0];
    for (let i = 1; i < chapterCount; i++) {
      const ci = Math.min(i * CHECKPOINTS_PER_CHAPTER - 1, checkpointLengths.length - 1);
      chapterStops.push(checkpointLengths[ci] ?? pathLength);
    }
    chapterStops.push(pathLength);
    chapterStopsRef.current = chapterStops;

    placeRocket(0);
    focusCheckpoint(0);

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const viewH = window.innerHeight;
        const startY = rect.top - viewH * 0.5;
        const endY = rect.bottom - viewH * 0.5;
        const range = endY - startY;
        if (range <= 0) { tickingRef.current = false; return; }
        const raw = Math.min(Math.max(-startY / range, 0), 1);

        const ch = Math.min(Math.floor(raw * chapterCount), chapterCount - 1);
        const cp = raw * chapterCount - ch;
        const start = chapterStopsRef.current[ch];
        const end = chapterStopsRef.current[ch + 1];
        const travelled = cp >= MOVE_PORTION ? end : start + (end - start) * smoothStep(cp / MOVE_PORTION);
        const moving = cp < MOVE_PORTION;

        progress.setAttribute("stroke-dashoffset", String(pathLength - travelled));
        if (thrust) {
          thrust.style.transition = "opacity 0.12s, transform 0.12s";
          thrust.style.opacity = moving ? "1" : "0";
          thrust.style.transform = moving ? "scaleX(1)" : "scaleX(0.45)";
        }
        placeRocket(travelled);
        focusCheckpoint(travelled);
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [getBounds, placeRocket, focusCheckpoint]);

  return (
    <div ref={stageRef} data-roadmap-stage className="relative hidden lg:block" style={{ height: viewBox.height }}>
      <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox={`0 0 ${viewBox.width} ${viewBox.height}`} fill="none" preserveAspectRatio="none">
        {pixelTiles.map((t: { x: number; y: number }) => (
          <rect key={`${t.x}-${t.y}`} x={t.x} y={t.y} width="6" height="6" fill="rgba(255,255,255,0.08)" />
        ))}
        <path d={pathD} stroke="rgba(0,139,255,0.08)" strokeWidth="24" strokeDasharray="1 30" strokeLinecap="round" fill="none" />
        <path d={pathD} stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="3 18" strokeLinecap="round" fill="none" />
        <path d={pathD} stroke="rgba(0,139,255,0.28)" strokeWidth="1.5" strokeDasharray="26 30" strokeLinecap="round" fill="none" />
        <path ref={pathRef} d={pathD} stroke="transparent" strokeWidth="1" fill="none" />
        <path ref={progressRef} d={pathD} stroke="#008BFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>

      {asciiSigns.map((s: { label: string; x: number; y: number }) => (
        <div key={`${s.label}-${s.x}-${s.y}`} className="absolute z-10 text-[14px] font-bold tracking-[0.28em] text-accent/70"
          style={{ left: s.x, top: s.y, fontFamily: "var(--font-jetbrains-mono)" }}>{s.label}</div>
      ))}

      <div ref={rocketRef} data-roadmap-rocket className="pointer-events-none absolute left-0 top-0 z-30 flex h-[90px] w-[152px] items-center justify-center">
        <PixelRocket />
      </div>

      <RoadMarker label="START" x={110} y={220} />

      {roadmapData.map((item: { title: string; point: { x: number; y: number }; status: string }) => {
        const c = (statusColors[item.status as keyof typeof statusColors] || { border: "#008BFF", bg: "#0A2640" }).border;
        return (
          <div key={item.title}>
            <div data-roadmap-marker className="absolute z-20" style={{ left: item.point.x - 20, top: item.point.y - 20 }}>
              <CheckpointBeacon color={c} label={item.status} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
