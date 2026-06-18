"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SharingAndDomainPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; your first 100
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Sharing + domain
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        A live URL is your first milestone. A custom domain is your second. Both are built in.
      </p>

      <section className="mb-10">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>Free Moonshift subdomain</h2>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Every site gets a free <code className="text-[13px] font-mono text-accent">yoursite.moonshift.io</code> URL. Share it instantly. Perfect for testing and early feedback.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>Connect a custom domain</h2>
        <ol className="space-y-3 mb-4">
          {[
            "Open your site settings and go to Domain.",
            "Enter the domain you own.",
            "Add the DNS records Moonshift gives you at your registrar.",
            "Wait for SSL to provision (usually a few minutes).",
          ].map((step, index) => (
            <li key={index} className="flex items-start gap-3 p-3 border border-border-subtle bg-bg-surface">
              <span className="text-[12px] font-mono text-accent flex-shrink-0">0{index + 1}</span>
              <p className="text-[14px] text-text-secondary">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-12">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>Where to share</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { title: "Twitter / X", description: "Share the problem you solve, not the tool." },
            { title: "LinkedIn", description: "Post the story behind the build." },
            { title: "Reddit / forums", description: "Answer questions where your audience hangs out." },
            { title: "Friends + customers", description: "Direct feedback beats vanity traffic." },
          ].map((channel) => (
            <div key={channel.title} className="p-4 border border-border-subtle bg-bg-surface">
              <h3 className="text-[14px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{channel.title}</h3>
              <p className="text-[13px] text-text-secondary">{channel.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Link href="/docs/use-cases" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        Use cases
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
