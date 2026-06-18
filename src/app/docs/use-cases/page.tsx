"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const useCases = [
  { title: "SaaS landing page", description: "Explain your product, capture waitlist emails, and run early validation." },
  { title: "Local business site", description: "Hours, services, location, and contact — live in minutes." },
  { title: "Portfolio", description: "Showcase work for designers, developers, photographers, and creatives." },
  { title: "Personal brand", description: "A home for your writing, links, and projects." },
  { title: "Event or launch page", description: "Countdown, details, and RSVP in one link." },
  { title: "E-commerce starter", description: "Product pages, checkout, and payment-ready sections." },
];

export default function UseCasesPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; your first 100
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Use cases
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Moonshift works for almost any site that needs to ship fast and look credible. Here are the most common ones.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
        {useCases.map((useCase) => (
          <div key={useCase.title} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{useCase.title}</h3>
            <p className="text-[13px] text-text-secondary">{useCase.description}</p>
          </div>
        ))}
      </div>
      <p className="text-[14px] text-text-secondary mb-6">
        Do not see yours? The prompt is flexible. Describe what you need and Moonshift will build a version you can refine.
      </p>
      <Link href="/docs/pricing" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        Pricing
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
