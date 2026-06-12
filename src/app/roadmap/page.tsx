"use client";

import dynamic from "next/dynamic";
import { roadmapData, statusColors } from "./data";

const RoadmapStage = dynamic(() => import("./RoadmapStage"), {
  ssr: false,
  loading: () => (
    <div className="relative hidden h-[2200px] lg:block">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-2 w-2 animate-pulse bg-accent/50" />
      </div>
    </div>
  ),
});

const RoadmapFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
  loading: () => <div className="h-24 bg-[#0A0A0A]" />,
});

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-bg-deep pt-28">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10 xl:px-14">
        <div className="animate-fade-up mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <h1
            className="text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-text-primary md:text-[56px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Roadmap.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-text-secondary">
            Moonshift is early, but the direction is clear. We&rsquo;re building a fully AI-native app development platform — not just &ldquo;generate an app and stop.&rdquo; We stay with your product after launch: build, fix, improve, maintain, deploy, and scale. Here&rsquo;s what&rsquo;s live today, and where we&rsquo;re headed.
          </p>
        </div>

        <RoadmapStage />

        <div className="space-y-4 lg:hidden">
          {roadmapData.map((item) => {
            const colors = statusColors[item.status];
            return (
              <article
                key={item.title}
                className="animate-fade-up border border-border-default bg-bg-surface p-5 shadow-[6px_6px_0_rgba(0,0,0,0.35)]"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`grid h-11 w-11 place-items-center border-2 ${colors.border} ${colors.bg}`}>
                    <span
                      className={`text-[13px] font-bold ${colors.text}`}
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {String(item.number).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className={`text-[11px] font-medium uppercase tracking-[0.14em] ${colors.text}`}
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {item.phase}
                  </span>
                </div>
                <h3
                  className="mb-2 text-[16px] font-medium leading-[1.3] text-text-primary"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[1.6] text-text-secondary">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
      <RoadmapFooter />
    </div>
  );
}
