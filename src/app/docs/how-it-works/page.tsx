"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Write your prompt",
    description: "One sentence is enough. Tell Moonshift what your product or business does and who it is for.",
  },
  {
    number: "02",
    title: "Get a first draft",
    description: "Moonshift builds a multi-section site with copy, layout, colors, and images. This takes about 6 minutes.",
  },
  {
    number: "03",
    title: "Claim your domain + share",
    description: "Publish to a Moonshift subdomain or connect your own. Share the link and start collecting real feedback.",
  },
  {
    number: "04",
    title: "Iterate",
    description: "Use chat to ask for changes, regenerate sections, A/B test headlines, and add pages as you learn what converts.",
  },
];

const uiFeatures = [
  { title: "Sections", description: "Each block is a section. Reorder, duplicate, delete, or regenerate any of them." },
  { title: "Drag and drop", description: "Move sections up or down to restructure your page." },
  { title: "Regenerate", description: "Stuck on a headline or layout? Ask Moonshift to try again." },
  { title: "Edit with chat", description: "Describe the change in plain English. The site updates." },
  { title: "Style upgrades", description: "Swap color palettes, fonts, and overall vibe in one click." },
  { title: "Custom domain", description: "Point your own domain when you are ready to look official." },
  { title: "SEO", description: "Edit titles, descriptions, and meta tags without touching code." },
];

export default function HowItWorksPage() {
  return (
    <>
      <span
        className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        &frasl;&frasl; start here
      </span>

      <h1
        className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        How it works
      </h1>

      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Four moves. You stay in control at every one.
      </p>

      <div className="space-y-4 mb-12">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4 p-5 border border-border-subtle bg-bg-surface">
            <span className="text-[13px] font-mono text-accent flex-shrink-0">{step.number}</span>
            <div>
              <h2
                className="text-[17px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.title}
              </h2>
              <p className="text-[14px] text-text-secondary">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          The editor at a glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {uiFeatures.map((feature) => (
            <div key={feature.title} className="p-4 border border-border-subtle bg-bg-surface">
              <h3
                className="text-[14px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {feature.title}
              </h3>
              <p className="text-[13px] text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          The real loop
        </h2>
        <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
          Build → Share → Measure → Improve. That is the whole playbook.
        </p>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Moonshift lowers the cost of each loop so you can run more of them in a day.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/docs/your-first-build"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors"
        >
          Your first build
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/docs/playbook"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-surface text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
        >
          0 to 100 playbook
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </>
  );
}
