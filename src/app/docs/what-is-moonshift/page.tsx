"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const features = [
  { title: "AI site builder", description: "Turns your description into a working, styled website." },
  { title: "Built-in growth tools", description: "SEO, analytics, lead capture, contact forms, and payment-ready pages." },
  { title: "Launch + iterate fast", description: "No wireframes. No back-and-forth. Publish, learn, improve." },
];

export default function WhatIsMoonshiftPage() {
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
        What is Moonshift?
      </h1>

      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Moonshift is an AI site builder that ships your site, fast.
      </p>

      <div className="p-5 md:p-6 border border-border-subtle bg-bg-surface mb-10">
        <p className="text-[15px] text-text-primary leading-relaxed mb-4">
          You describe your idea. Moonshift writes the copy, picks a look, and produces a real, working website you can publish in minutes.
        </p>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Then it gives you the tools to share that site, collect leads, and improve it — all without writing code.
        </p>
      </div>

      <div className="space-y-8 mb-12">
        <section>
          <h2
            className="text-[22px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What it does
          </h2>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature.title} className="flex gap-3 p-4 border border-border-subtle bg-bg-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                <div>
                  <h3
                    className="text-[14px] font-medium text-text-primary mb-0.5"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[13px] text-text-secondary">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2
            className="text-[22px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Two jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-border-subtle bg-bg-surface">
              <span className="text-[11px] font-mono text-accent block mb-2">01</span>
              <h3
                className="text-[16px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Ship fast
              </h3>
              <p className="text-[13px] text-text-secondary">
                Get from idea to live URL in a few minutes. No blank page, no setup marathon.
              </p>
            </div>
            <div className="p-4 border border-border-subtle bg-bg-surface">
              <span className="text-[11px] font-mono text-accent block mb-2">02</span>
              <h3
                className="text-[16px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Find your first 100
              </h3>
              <p className="text-[13px] text-text-secondary">
                Built-in analytics and sharing tools help you learn what works and reach real users.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-[22px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Who it is for
          </h2>
          <div className="space-y-2">
            {[
              "Founders with an idea but no team yet",
              "Indie hackers who want a fast draft",
              "Offline businesses finally going online",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 p-3 border border-border-subtle bg-bg-surface">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                <p className="text-[14px] text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2
            className="text-[22px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What it is not
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed mb-4">
            Moonshift is a starting point, not a replacement for a full design studio. It gets you live fast, then lets you improve based on real feedback.
          </p>
          <p className="text-[15px] text-text-secondary leading-relaxed">
            The first version will be good. It will not be the final version — and it is not supposed to be.
          </p>
        </section>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/docs/how-it-works"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors"
        >
          How it works
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link
          href="/docs/your-first-build"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-surface text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
        >
          Your first build
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </>
  );
}
