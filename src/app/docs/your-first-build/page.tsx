"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const prompts = [
  "I run a small bakery in Austin and want a site where people can see our cakes, find our hours, and order custom orders online.",
  "I am building a habit tracker app for remote workers. I need a landing page that explains the product and collects waitlist emails.",
  "I am a freelance designer looking for a portfolio site with a dark theme, project gallery, and contact form.",
];

const tips = [
  "Say what the product or business does, not just what it is called.",
  "Mention the audience you want to reach.",
  "Include one goal: book a call, collect emails, sell a product, show a portfolio.",
  "Keep it to 1-3 sentences. You can add details later.",
];

const afterBuild = [
  "Review each section and delete anything that misses the mark.",
  "Use chat to ask for rewrites, new sections, or style changes.",
  "Publish to a free Moonshift subdomain to share instantly.",
  "Connect your own domain when you are ready.",
];

export default function YourFirstBuildPage() {
  return (
    <>
      <span
        className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        &frasl;&frasl; ship it
      </span>

      <h1
        className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        Your first build
      </h1>

      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Most people go from prompt to live site in about 6 minutes. Here is how to write a prompt that gets you there.
      </p>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What makes a great prompt
        </h2>
        <div className="space-y-2 mb-6">
          {tips.map((tip) => (
            <div key={tip} className="flex items-start gap-3 p-3 border border-border-subtle bg-bg-surface">
              <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-[14px] text-text-secondary">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Example prompts
        </h2>
        <div className="space-y-3">
          {prompts.map((prompt, index) => (
            <div key={index} className="p-4 border border-border-subtle bg-bg-surface">
              <p className="text-[14px] text-text-secondary italic leading-relaxed">&ldquo;{prompt}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What happens after you hit build
        </h2>
        <div className="space-y-3">
          {[
            { title: "1. Moonshift writes your site", description: "It chooses sections, writes copy, and applies a color palette based on your prompt." },
            { title: "2. You review the draft", description: "Scroll through the page. Each section can be edited, moved, deleted, or regenerated." },
            { title: "3. Publish or refine", description: "Publish immediately to share, or use chat to improve it first." },
          ].map((step) => (
            <div key={step.title} className="p-4 border border-border-subtle bg-bg-surface">
              <h3
                className="text-[14px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {step.title}
              </h3>
              <p className="text-[13px] text-text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-[22px] font-medium text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          If you do not love it
        </h2>
        <div className="space-y-2">
          {afterBuild.map((item) => (
            <div key={item} className="flex items-start gap-3 p-3 border border-border-subtle bg-bg-surface">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              <p className="text-[14px] text-text-secondary">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="p-6 border border-border-subtle bg-bg-surface mb-10">
        <h2
          className="text-[18px] font-medium text-text-primary mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Ready to try?
        </h2>
        <p className="text-[14px] text-text-secondary mb-4">
          No card required. Get a live URL in minutes.
        </p>
        <Link
          href="/dashboard/create"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors"
        >
          Start a build
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/docs/anatomy"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-surface text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
        >
          Site anatomy
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
