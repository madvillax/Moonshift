"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    number: "0",
    title: "Before you build",
    items: ["Write one clear sentence describing what you do and for whom.", "Pick one conversion goal: email, sign-up, book, buy."],
  },
  {
    number: "1",
    title: "Build the first draft",
    items: ["Use the prompt to generate a full site.", "Publish to a free subdomain immediately."],
  },
  {
    number: "10",
    title: "Share with 10 people",
    items: ["Send the link to friends, customers, or communities.", "Ask: would you sign up? What is confusing?"],
  },
  {
    number: "100",
    title: "Iterate to 100",
    items: ["Rewrite the headline based on feedback.", "Add social proof, FAQ, or a stronger CTA.", "Connect your own domain and start ads or SEO."],
  },
];

export default function PlaybookPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; your first 100
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        0 to 100 playbook
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        The fastest path from idea to 100 real users. Each phase has one job.
      </p>
      <div className="space-y-4 mb-12">
        {phases.map((phase) => (
          <div key={phase.number} className="p-5 border border-border-subtle bg-bg-surface">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[12px] font-mono text-accent">PHASE {phase.number}</span>
              <h2 className="text-[18px] font-medium text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>{phase.title}</h2>
            </div>
            <ul className="space-y-2">
              {phase.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[14px] text-text-secondary">
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Link href="/docs/iterating" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        Iterating
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
