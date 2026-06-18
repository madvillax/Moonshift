"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sections = [
  { title: "Hero", description: "The top of your page. Headline, subheadline, and primary call to action." },
  { title: "Features", description: "Three to six value props, usually with icons and short descriptions." },
  { title: "How it works", description: "A simple 3-4 step explanation of what you do." },
  { title: "Social proof", description: "Testimonials, logos, reviews, or stats that build trust." },
  { title: "Pricing", description: "Plans, features, and a clear way to start." },
  { title: "FAQ", description: "Questions your visitors are likely to ask before converting." },
  { title: "Final CTA", description: "One last push to sign up, book, or buy." },
  { title: "Footer", description: "Links, contact info, and legal pages." },
];

export default function AnatomyPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; ship it
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Site anatomy
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        A Moonshift site is built from sections. Each one has a job. Mix, reorder, or remove them to match your story.
      </p>
      <div className="space-y-3 mb-12">
        {sections.map((section) => (
          <div key={section.title} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{section.title}</h3>
            <p className="text-[13px] text-text-secondary">{section.description}</p>
          </div>
        ))}
      </div>
      <section className="mb-12">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>How to edit a section</h2>
        <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
          Click any section to select it. From there you can edit copy, regenerate the section, move it up or down, duplicate it, or delete it.
        </p>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          You can also ask the chat to add a new section anywhere on the page.
        </p>
      </section>
      <Link href="/docs/cli" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        CLI reference
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
