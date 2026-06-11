"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

const viewBox = { width: 1200, height: 2200 };

const pathD = "M 110 220 L 1090 220 Q 1190 220, 1190 390 Q 1190 560, 1090 560 L 110 560 Q 10 560, 10 730 Q 10 900, 110 900 L 1090 900 Q 1190 900, 1190 1070 Q 1190 1240, 1090 1240 L 110 1240 Q 10 1240, 10 1410 Q 10 1580, 110 1580 L 1090 1580 Q 1190 1580, 1190 1750 Q 1190 1920, 1090 1920 L 110 1920";

const roadmapData = [
  {
    number: 1,
    phase: "Live",
    title: "End-to-end autonomous build",
    description: "One prompt becomes a deployed working app in minutes.",
    status: "live",
    point: { x: 330, y: 220 },
    card: { x: 190, y: -46 },
  },
  {
    number: 2,
    phase: "Live",
    title: "Your repo, cloud, domain",
    description: "Every build lands in your GitHub and Vercel stack.",
    status: "live",
    point: { x: 870, y: 220 },
    card: { x: 730, y: -46 },
  },
  {
    number: 3,
    phase: "Live",
    title: "Iterate after ship",
    description: "Open builds in a workspace with versions and rollback.",
    status: "live",
    point: { x: 870, y: 560 },
    card: { x: 730, y: 294 },
  },
  {
    number: 4,
    phase: "Live",
    title: "Tested and audited",
    description: "E2E tests and security checks run before deploy.",
    status: "live",
    point: { x: 330, y: 560 },
    card: { x: 190, y: 294 },
  },
  {
    number: 5,
    phase: "Building",
    title: "Cloud IDE preview",
    description: "File tree, language server, and hot-reload preview.",
    status: "building",
    point: { x: 330, y: 900 },
    card: { x: 190, y: 634 },
  },
  {
    number: 6,
    phase: "Building",
    title: "Shell and devtools",
    description: "Interactive terminal with stdout, stderr, and traces.",
    status: "building",
    point: { x: 870, y: 900 },
    card: { x: 730, y: 634 },
  },
  {
    number: 7,
    phase: "Building",
    title: "Integrations",
    description: "GitHub, Vercel, Stripe, Supabase, Slack, Notion, Figma.",
    status: "building",
    point: { x: 870, y: 1240 },
    card: { x: 730, y: 974 },
  },
  {
    number: 8,
    phase: "Up next",
    title: "Run from Figma",
    description: "Paste a Figma link and preserve layout and tokens.",
    status: "upcoming",
    point: { x: 330, y: 1240 },
    card: { x: 190, y: 974 },
  },
  {
    number: 9,
    phase: "Up next",
    title: "AI PM",
    description: "Roadmaps, user stories, and GitHub issues generated.",
    status: "upcoming",
    point: { x: 330, y: 1580 },
    card: { x: 190, y: 1314 },
  },
  {
    number: 10,
    phase: "Up next",
    title: "Scale",
    description: "Infra scaling, sharding, and CDN optimization handled.",
    status: "upcoming",
    point: { x: 870, y: 1580 },
    card: { x: 730, y: 1314 },
  },
  {
    number: 11,
    phase: "Further out",
    title: "Market",
    description: "Landing copy, social posts, press kit, and changelog.",
    status: "upcoming",
    point: { x: 870, y: 1920 },
    card: { x: 730, y: 1654 },
  },
  {
    number: 12,
    phase: "Further out",
    title: "Deploy anywhere",
    description: "Ship to more cloud targets without touching config.",
    status: "upcoming",
    point: { x: 330, y: 1920 },
    card: { x: 190, y: 1654 },
  },
];

const statusColors: Record<string, { border: string; bg: string; text: string; dot: string; svg: string }> = {
  live: { border: "border-[#22C55E]/70", bg: "bg-[#22C55E]/10", text: "text-[#22C55E]", dot: "bg-[#22C55E]", svg: "#22C55E" },
  building: { border: "border-accent/70", bg: "bg-accent/10", text: "text-accent", dot: "bg-accent", svg: "#008BFF" },
  upcoming: { border: "border-text-muted/60", bg: "bg-bg-elevated", text: "text-text-muted", dot: "bg-text-muted", svg: "#6B7280" },
};

const asciiSigns = [
  { label: ">>>", x: 510, y: 156 },
  { label: "•••", x: 620, y: 156 },
  { label: "<<<", x: 500, y: 496 },
  { label: ">>>", x: 510, y: 836 },
  { label: "<<<", x: 500, y: 1176 },
  { label: ">>>", x: 510, y: 1516 },
  { label: "<<<", x: 500, y: 1856 },
];

const pixelTiles = Array.from({ length: 55 }, (_, index) => ({
  x: 58 + (index % 11) * 108,
  y: 318 + Math.floor(index / 11) * 340,
}));

const rocketPixels = [
  "000000000NNN0000000000",
  "00000000NBBBN000000000",
  "000000NBBBBBBN00000000",
  "0000NNBBBBBBBBNN000000",
  "00NNBBBBBWWWWWBN000000",
  "0NBBBBBBWWWWWWWBN00000",
  "NBBBBBBBWWCWWWWBN00000",
  "NBBBBBBBWWWWWWWBN00000",
  "NBBBBBBBWWCWWWWBN00000",
  "0NBBBBBBWWWWWWWBN00000",
  "00NNBBBBBWWWWWBN000000",
  "0000NNBBBBBBBBNN000000",
  "000000NBBBBBBN00000000",
  "00000000NBBBN000000000",
  "000000000NNN0000000000",
];

const rocketPixelColors: Record<string, string> = {
  N: "#0A4FA7",
  B: "#1397FF",
  W: "#F7FBFF",
  C: "#55BDF2",
};

export default function Roadmap() {
  const stageRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<SVGPathElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current || !svgRef.current || !pathRef.current || !progressRef.current || !rocketRef.current) return;

    const stage = stageRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const progress = progressRef.current;
    const rocket = rocketRef.current;
    const thrust = rocket.querySelector<HTMLElement>(".rocket-thrust");
    const pathLength = path.getTotalLength();
    const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-card]"));
    const markers = Array.from(stage.querySelectorAll<HTMLElement>("[data-roadmap-marker]"));
    const checkpointLengths = roadmapData.map((item) => {
      let closestLength = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (let step = 0; step <= 720; step += 1) {
        const length = (pathLength * step) / 720;
        const point = path.getPointAtLength(length);
        const distance = (point.x - item.point.x) ** 2 + (point.y - item.point.y) ** 2;

        if (distance < closestDistance) {
          closestDistance = distance;
          closestLength = length;
        }
      }

      return closestLength;
    });
    let activeCheckpoint = -1;

    gsap.set(progress, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
    if (thrust) gsap.set(thrust, { opacity: 0, scaleX: 0.45, transformOrigin: "right center" });

    const placeRocket = (amount: number) => {
      const clamped = Math.min(Math.max(amount, 0), pathLength);
      const point = path.getPointAtLength(clamped);
      const directionPoint = clamped >= pathLength - 6
        ? path.getPointAtLength(Math.max(clamped - 6, 0))
        : path.getPointAtLength(Math.min(clamped + 6, pathLength));
      const bounds = svg.getBoundingClientRect();
      const x = (point.x / viewBox.width) * bounds.width;
      const y = (point.y / viewBox.height) * bounds.height;
      const angle = clamped >= pathLength - 6
        ? Math.atan2(point.y - directionPoint.y, point.x - directionPoint.x) * (180 / Math.PI)
        : Math.atan2(directionPoint.y - point.y, directionPoint.x - point.x) * (180 / Math.PI);

      gsap.to(rocket, { x: x - 76, y: y - 45, rotate: angle, duration: 0.25, ease: "power2.out", overwrite: true });
    };

    const focusCheckpoint = (travelled: number) => {
      let nextCheckpoint = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      checkpointLengths.forEach((length, index) => {
        const distance = Math.abs(length - travelled);

        if (distance < closestDistance) {
          closestDistance = distance;
          nextCheckpoint = index;
        }
      });

      if (nextCheckpoint === activeCheckpoint) return;

      activeCheckpoint = nextCheckpoint;
      cards.forEach((card, index) => {
        gsap.to(card, {
          borderColor: index === activeCheckpoint ? "rgba(0,139,255,0.9)" : "rgba(255,255,255,0.12)",
          boxShadow: index === activeCheckpoint ? "0 0 0 1px rgba(0,139,255,0.55), 8px 8px 0 rgba(0,0,0,0.55)" : "6px 6px 0 rgba(0,0,0,0.45)",
          scale: index === activeCheckpoint ? 1.035 : 1,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        });
      });
      markers.forEach((marker, index) => {
        gsap.to(marker, {
          scale: index === activeCheckpoint ? 1.45 : 1,
          opacity: index === activeCheckpoint ? 1 : 0.78,
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
        });
      });
    };

    placeRocket(0);
    focusCheckpoint(0);

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: () => `+=${document.documentElement.scrollHeight - window.innerHeight}`,
      scrub: 0.75,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        const travelled = pathLength * self.progress;
        const thrustPower = self.progress > 0.01 && self.progress < 0.99 ? 1 : 0;
        gsap.set(progress, { strokeDashoffset: pathLength - travelled });
        if (thrust) gsap.to(thrust, { opacity: thrustPower, scaleX: thrustPower ? 1 : 0.45, duration: 0.12, overwrite: true });
        placeRocket(travelled);
        focusCheckpoint(travelled);
      },
    });

    ScrollTrigger.refresh();

    cards.forEach((item) => {
      gsap.fromTo(
        item,
        { opacity: 0.5, y: 18 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 84%",
            end: "top 62%",
            scrub: 0.6,
          },
        },
      );
    });

    return () => {
      trigger.kill();
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-bg-deep pt-28 pb-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-20"
        >
          <h1
            className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-text-primary md:text-[56px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Pixel flight path.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-text-secondary">
            A retro terminal map of what is live, what is under construction, and what is queued next.
          </p>
        </motion.div>

        <div ref={stageRef} data-roadmap-stage className="relative hidden lg:block" style={{ height: viewBox.height }}>
          <svg ref={svgRef} className="absolute inset-0 h-full w-full" viewBox={`0 0 ${viewBox.width} ${viewBox.height}`} fill="none" preserveAspectRatio="none">
            {pixelTiles.map((tile) => (
              <rect key={`${tile.x}-${tile.y}`} x={tile.x} y={tile.y} width="6" height="6" fill="rgba(255,255,255,0.08)" />
            ))}
            <path d={pathD} stroke="rgba(0,139,255,0.08)" strokeWidth="24" strokeDasharray="1 30" strokeLinecap="round" fill="none" />
            <path d={pathD} stroke="rgba(255,255,255,0.18)" strokeWidth="2" strokeDasharray="3 18" strokeLinecap="round" fill="none" />
            <path d={pathD} stroke="rgba(0,139,255,0.28)" strokeWidth="1.5" strokeDasharray="26 30" strokeLinecap="round" fill="none" />
            <path ref={pathRef} d={pathD} stroke="transparent" strokeWidth="1" fill="none" />
            <path ref={progressRef} d={pathD} stroke="#008BFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          {asciiSigns.map((sign) => (
            <div
              key={`${sign.label}-${sign.x}-${sign.y}`}
              className="absolute z-10 text-[14px] font-bold tracking-[0.28em] text-accent/70"
              style={{ left: sign.x, top: sign.y, fontFamily: "var(--font-jetbrains-mono)" }}
            >
              {sign.label}
            </div>
          ))}

          <div ref={rocketRef} data-roadmap-rocket className="pointer-events-none absolute left-0 top-0 z-30 flex h-[90px] w-[152px] items-center justify-center">
            <PixelRocket />
          </div>

          <RoadMarker label="START" x={110} y={220} color="green" />

          {roadmapData.map((item) => {
            const colors = statusColors[item.status];

            return (
              <div key={item.title}>
                <div data-roadmap-marker className="absolute z-20" style={{ left: item.point.x - 20, top: item.point.y - 20 }}>
                  <CheckpointBeacon colors={colors} />
                </div>

                <div className="absolute" style={{ left: item.card.x, top: item.card.y, width: 280 }}>
                  <motion.article data-roadmap-card className="roadmap-card border border-border-default bg-bg-surface/95 p-4 shadow-[6px_6px_0_rgba(0,0,0,0.45)] transition-colors duration-300 hover:border-accent/50">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className={`h-2.5 w-2.5 ${colors.dot}`} />
                        <span className={`text-[10px] font-medium uppercase tracking-[0.14em] ${colors.text}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {item.phase}
                        </span>
                      </div>
                      <span className="text-[10px] text-text-muted" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        #{String(item.number).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mb-2 text-[15px] font-medium leading-[1.25] tracking-[-0.02em] text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      {item.title}
                    </h3>
                    <p className="text-[12px] leading-[1.55] text-text-secondary">{item.description}</p>
                    <div className="mt-3 text-[10px] tracking-[0.16em] text-text-muted" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      +-- checkpoint locked --+
                    </div>
                  </motion.article>
                </div>
              </div>
            );
          })}

          <RoadMarker label="FINISH" x={110} y={1920} color="blue" />
        </div>

        <div className="space-y-4 lg:hidden">
          {roadmapData.map((item) => {
            const colors = statusColors[item.status];

            return (
              <motion.article key={item.title} className="border border-border-default bg-bg-surface p-5 shadow-[6px_6px_0_rgba(0,0,0,0.35)]">
                <div className="mb-4 flex items-center gap-4">
                  <div className={`grid h-11 w-11 place-items-center border-2 ${colors.border} ${colors.bg}`}>
                    <span className={`text-[13px] font-bold ${colors.text}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                      {String(item.number).padStart(2, "0")}
                    </span>
                  </div>
                  <span className={`text-[11px] font-medium uppercase tracking-[0.14em] ${colors.text}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {item.phase}
                  </span>
                </div>
                <h3 className="mb-2 text-[16px] font-medium leading-[1.3] text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-text-secondary">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function RoadMarker({ label, x, y, color }: { label: string; x: number; y: number; color: "green" | "blue" }) {
  const colorClass = color === "green" ? "border-[#22C55E]/70 text-[#22C55E]" : "border-accent/70 text-accent";

  return (
    <div className="absolute z-20" style={{ left: x - 48, top: y - 28 }}>
      <div className={`grid h-14 w-24 place-items-center border-4 bg-bg-deep shadow-[7px_7px_0_rgba(0,0,0,0.45)] ${colorClass}`}>
        <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          {label}
        </span>
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

function PixelRocket() {
  return (
    <div className="relative h-[90px] w-[152px] drop-shadow-[0_0_18px_rgba(0,139,255,0.7)]">
      <div className="rocket-thrust absolute left-0 top-[34px] grid grid-cols-10 gap-0.5">
        <span className="col-span-7 h-3 animate-pulse bg-[#0A63C9]" />
        <span className="col-span-10 h-4 animate-pulse bg-[#149EFF] [animation-delay:90ms]" />
        <span className="col-span-6 h-3 translate-x-4 animate-pulse bg-[#52C3F7] [animation-delay:180ms]" />
      </div>
      <div className="rocket-sprite absolute left-9 top-2 grid gap-0 border-none bg-transparent shadow-none" style={{ gridTemplateColumns: "repeat(22, 5px)" }}>
        {rocketPixels.flatMap((row, rowIndex) =>
          row.split("").map((pixel, columnIndex) => (
            <span
              key={`${rowIndex}-${columnIndex}`}
              className="h-[5px] w-[5px]"
              style={{ backgroundColor: rocketPixelColors[pixel] ?? "transparent" }}
            />
          )),
        )}
      </div>
    </div>
  );
}
