"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { CheckCircle2, GitBranch, MousePointer2, Network, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Step = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  icon: LucideIcon;
  visual: "prompt" | "agents" | "launch" | "handoff";
};

const steps: Step[] = [
  {
    id: "01",
    eyebrow: "Prompt to executable plan",
    title: "Describe the outcome.",
    body: "Write what you want shipped in plain language. Moonshift turns the prompt into requirements, constraints, flows, data, gates, and a build plan you can approve.",
    icon: MousePointer2,
    visual: "prompt",
  },
  {
    id: "02",
    eyebrow: "Autonomy begins",
    title: "Approve once. Watch it build.",
    body: "Agents fan out across frontend, backend, tests, deploy, copy, and release work. Every phase streams progress so you are watching the launch, not managing tickets.",
    icon: Network,
    visual: "agents",
  },
  {
    id: "03",
    eyebrow: "Production-ready output",
    title: "Wake up launched.",
    body: "A deployed URL, repository, tests, release notes, and launch assets are prepared together. The product ships with the operational pieces already connected.",
    icon: Rocket,
    visual: "launch",
  },
  {
    id: "04",
    eyebrow: "Clean handoff",
    title: "Own the stack afterwards.",
    body: "Code, infrastructure, docs, and decisions stay transparent. Moonshift logs the handoff so your team can extend the product without reverse engineering the build.",
    icon: GitBranch,
    visual: "handoff",
  },
];

function PromptVisual() {
  return (
    <div className="space-y-4">
      <div className="border border-border-default bg-bg-surface p-4">
        <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
          <span className="h-2 w-2 bg-text-muted" />
          <span className="h-2 w-2 bg-border-default" />
          <span className="h-2 w-2 bg-border-subtle" />
          <span className="ml-2">/moonshift · prompt</span>
        </div>
        <div className="font-mono text-[13px] leading-[1.75] text-text-primary">
          <span className="text-[#008BFF]">&gt;</span> Internal admin panel
          <br />
          <span className="pl-5 text-text-secondary">refunds · users · roles · gates</span>
        </div>
        <div className="mt-4 border-t border-border-default pt-4 font-mono text-[12px] leading-[1.7] text-text-secondary">
          <span className="text-[#008BFF]">✓</span> planner · drafting contract
          <br />
          <span className="pl-5">flows · data · constraints</span>
        </div>
      </div>
      <div className="border border-border-default bg-bg-elevated px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
        ↳ Prompt becomes executable plan.
      </div>
    </div>
  );
}

const agentProgress = [
  ["planner", "100%"],
  ["backend", "92%"],
  ["frontend", "78%"],
  ["deployer", "64%"],
];

function AgentsVisual() {
  return (
    <div className="border border-border-default bg-bg-surface p-4">
      <div className="mb-5 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-text-secondary">
        <span><span className="text-[#008BFF]">●</span> phase 04 · streaming</span>
        <span>14/14</span>
      </div>
      <div className="space-y-4">
        {agentProgress.map(([agent, width], index) => (
          <div key={agent} className="grid grid-cols-[1fr_96px] items-center gap-4 font-mono text-[13px] text-text-secondary">
            <div><span className="text-[#008BFF]">•</span> {agent}</div>
            <div className="h-1.5 bg-border-default">
              <motion.div
                className="h-full bg-[#008BFF]"
                initial={{ width: 0 }}
                whileInView={{ width }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LaunchVisual() {
  return (
    <div className="space-y-4 border border-border-default bg-bg-surface p-4">
      <div className="flex items-center justify-between border border-border-default bg-bg-elevated px-4 py-3 font-mono text-[13px] text-text-primary">
        <span><span className="text-[#008BFF]">●</span> acme.moonshift.page</span>
        <span>→</span>
      </div>
      <div className="grid grid-cols-3 gap-3 border-b border-border-default pb-4 font-mono text-[11px] uppercase tracking-[0.16em] text-text-secondary">
        <span>repo</span>
        <span>vercel</span>
        <span className="text-[#008BFF]">live</span>
      </div>
      <div className="space-y-3 font-mono text-[13px] text-text-secondary">
        <div className="flex justify-between"><span>✓ X post · 270c</span><span className="text-text-muted">drafted</span></div>
        <div className="flex justify-between"><span>✓ LinkedIn · 1.1k</span><span className="text-text-muted">drafted</span></div>
        <div className="flex justify-between"><span className="text-[#008BFF]">◆ Publish gate</span><span className="text-[#008BFF]">awaiting</span></div>
      </div>
    </div>
  );
}

const handoffItems = ["repository", "environment", "test suite", "release notes", "handoff log"];

function HandoffVisual() {
  return (
    <div className="border border-border-default bg-bg-surface p-4">
      <div className="mb-5 text-[11px] uppercase tracking-[0.18em] text-text-secondary">handoff packet</div>
      <div className="space-y-3">
        {handoffItems.map((item, index) => (
          <motion.div
            key={item}
            className="flex items-center justify-between border border-border-default bg-bg-elevated px-4 py-3 text-[13px] text-text-secondary"
            initial={{ opacity: 0, x: 14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="capitalize">{item}</span>
            <CheckCircle2 className="h-4 w-4 text-[#008BFF]" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StepVisual({ visual }: { visual: Step["visual"] }) {
  if (visual === "prompt") return <PromptVisual />;
  if (visual === "agents") return <AgentsVisual />;
  if (visual === "launch") return <LaunchVisual />;
  return <HandoffVisual />;
}

function StackedStepCard({ step, index, progress }: { step: Step; index: number; progress: MotionValue<number> }) {
  const Icon = step.icon;
  const start = index * 0.19;
  const settle = start + 0.14;
  const y = useTransform(progress, [start, settle], index === 0 ? [0, 0] : [980, 0]);

  return (
    <motion.article
      className="absolute inset-0 transform-gpu overflow-hidden border border-border-default bg-bg-surface will-change-transform"
      style={{ y, zIndex: index + 1 }}
    >
      <div className="grid h-full lg:grid-cols-[1.35fr_1fr]">
        <div className="flex flex-col justify-between border-b border-border-default bg-bg-surface p-5 md:p-6 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[18px] leading-none text-text-primary">
                  {step.id}
                </span>
                <span className="font-mono text-[18px] leading-none text-text-muted">/ 04</span>
              </div>
              <Icon className="h-5 w-5 text-text-secondary" />
            </div>
            <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-accent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {step.eyebrow}
            </p>
            <h3 className="max-w-xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-text-primary md:text-[42px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
              {step.title}
            </h3>
            <p className="mt-4 max-w-xl text-[15px] leading-[1.65] text-text-secondary md:text-[16px]">
              {step.body}
            </p>
          </div>
          <a
            href="#pricing"
            className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-text-primary px-5 py-2.5 text-[13px] font-semibold text-bg-deep transition-transform duration-150 hover:scale-[1.02]"
          >
            Start building
          </a>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-accent p-5 md:p-8">
          <div className="relative w-full max-w-[300px]">
            <StepVisual visual={step.visual} />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function StepsStack() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="relative h-[430vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden py-24">
        <div className="relative isolate mx-auto h-[min(460px,calc(100vh-160px))] w-full max-w-[920px] [contain:layout]">
          {steps.map((step, index) => (
            <StackedStepCard key={step.id} step={step} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative bg-bg-deep py-24 md:py-32">
      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            How Moonshift works
          </div>
          <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-text-primary md:text-6xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
            From prompt to product, in four visible steps.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-text-secondary">
            Each card enters from below and stacks on the last one, so the full build sequence accumulates before the page releases to the next section.
          </p>
        </motion.div>

        <StepsStack />
      </div>
    </section>
  );
}
