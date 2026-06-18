"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tactics = [
  { title: "Rewrite the headline", description: "Your headline should pass the 'so what?' test. Make the outcome obvious." },
  { title: "Add social proof", description: "Even one real testimonial beats a wall of marketing text." },
  { title: "Sharpen the CTA", description: "Use verbs and specifics: 'Get the checklist', not 'Submit'." },
  { title: "Cut sections", description: "The best second version usually removes content, not adds it." },
  { title: "A/B test the hero", description: "Try two headlines and see which one converts better in analytics." },
];

export default function IteratingPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; your first 100
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Iterating
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        The first draft gets you live. Iteration makes you convert. Here are the highest-impact changes to make next.
      </p>
      <div className="space-y-3 mb-12">
        {tactics.map((tactic) => (
          <div key={tactic.title} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{tactic.title}</h3>
            <p className="text-[13px] text-text-secondary">{tactic.description}</p>
          </div>
        ))}
      </div>
      <section className="mb-10">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>Use analytics to decide</h2>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Check your dashboard to see where visitors drop off. High traffic but low signups? Fix the CTA. Low traffic? Focus on sharing and SEO.
        </p>
      </section>
      <Link href="/docs/sharing-and-domain" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        Sharing + domain
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
