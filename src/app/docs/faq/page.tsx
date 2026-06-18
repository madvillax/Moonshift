"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "Do I need to know how to code?", answer: "No. Moonshift is built for non-technical founders, creators, and business owners." },
  { question: "Can I use my own domain?", answer: "Yes. Starter plans and above let you connect a custom domain with free SSL." },
  { question: "How long does a build take?", answer: "Most first drafts are ready in about 6 minutes." },
  { question: "Can I edit the site after publishing?", answer: "Yes. You can edit copy, sections, styles, and pages at any time." },
  { question: "What are moons?", answer: "Moons are credits used for AI-generated builds, edits, and exports." },
  { question: "Is there a free plan?", answer: "Yes. You can build and publish one site on a free Moonshift subdomain." },
  { question: "Can I export my site?", answer: "Yes. Pro plans include code export so you can host it anywhere." },
  { question: "How do I cancel?", answer: "Cancel anytime from your billing settings with one click." },
];

export default function DocsFaqPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; the basics
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        FAQ
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Quick answers to common questions about Moonshift.
      </p>

      <div className="space-y-3 mb-12">
        {faqs.map((faq) => (
          <div key={faq.question} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>{faq.question}</h3>
            <p className="text-[13px] text-text-secondary">{faq.answer}</p>
          </div>
        ))}
      </div>

      <Link href="/faq" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        Full FAQ page
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
