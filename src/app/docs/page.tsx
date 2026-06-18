"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const flowSteps = [
  { number: "01", title: "Type your idea", description: "One sentence is enough" },
  { number: "02", title: "Get a shipped site", description: "About 6 minutes" },
  { number: "03", title: "Share + learn", description: "Real feedback, fast" },
  { number: "04", title: "Iterate to 100", description: "Customers, users, signups" },
];

const audienceCards = [
  { number: "01", title: "Founders with one sentence", description: "No team yet? Get a real site to test your idea with real people." },
  { number: "02", title: "Indie hackers + builders", description: "A working draft, not a blank page. Your starting point, not your finish line." },
  { number: "03", title: "Offline businesses going online", description: "Your shop or service is great in person. Moonshift puts it where new customers search: online, today." },
];

const quickLinks = [
  { title: "How it works", description: "The 6-minute build, plain.", href: "/docs/how-it-works" },
  { title: "Site anatomy", description: "What each section does + why.", href: "/docs/anatomy" },
  { title: "Iterating", description: "Improve the site after launch.", href: "/docs/iterating" },
  { title: "Pricing", description: "No card to start. 1-click cancel.", href: "/docs/pricing" },
  { title: "$MNSHFT token", description: "Hold it, get free moons monthly.", href: "/docs/mnshft-token" },
];

export default function DocsPage() {
  return (
    <>
      <span
        className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        &frasl;&frasl; the moonshift playbook
      </span>

      <h1
        className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        One sentence in. A shipped site out.
      </h1>

      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Moonshift writes your first site while you grab a coffee, then helps you share it and reach your first 100 users. No code, no jargon.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
        {flowSteps.map((step) => (
          <div key={step.number} className="p-4 border border-border-subtle bg-bg-surface">
            <span className="text-[11px] font-mono text-accent block mb-2">{step.number}</span>
            <h3
              className="text-[14px] font-medium text-text-primary mb-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {step.title}
            </h3>
            <p className="text-[12px] text-text-secondary">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="text-[14px] text-text-secondary mb-10">
        Four moves. You stay in control at every one.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <Link
          href="/docs/what-is-moonshift"
          className="group p-5 border border-border-subtle bg-bg-surface hover:border-border-default transition-colors"
        >
          <span
            className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase block mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &frasl;&frasl; start here
          </span>
          <h2
            className="text-[18px] font-medium text-text-primary mb-2 group-hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            What is Moonshift? →
          </h2>
          <p className="text-[13px] text-text-secondary">A two-minute read. What it does and who it is for.</p>
        </Link>

        <Link
          href="/docs/playbook"
          className="group p-5 border border-border-subtle bg-bg-surface hover:border-border-default transition-colors"
        >
          <span
            className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase block mb-3"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            &frasl;&frasl; the playbook
          </span>
          <h2
            className="text-[18px] font-medium text-text-primary mb-2 group-hover:text-accent transition-colors"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            0 to 100 playbook →
          </h2>
          <p className="text-[13px] text-text-secondary">From writing your prompt to your first 100 real users.</p>
        </Link>
      </div>

      <div className="mb-12">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          &frasl;&frasl; who this is for
        </span>
        <div className="space-y-3">
          {audienceCards.map((card) => (
            <div key={card.number} className="flex gap-4 p-4 border border-border-subtle bg-bg-surface">
              <span className="text-[12px] font-mono text-accent flex-shrink-0">{card.number}</span>
              <div>
                <h3
                  className="text-[15px] font-medium text-text-primary mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[13px] text-text-secondary">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          &frasl;&frasl; quick links
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="group flex items-center justify-between p-4 border border-border-subtle bg-bg-surface hover:border-border-default transition-colors"
            >
              <div>
                <h3
                  className="text-[14px] font-medium text-text-primary mb-0.5 group-hover:text-accent transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {link.title}
                </h3>
                <p className="text-[12px] text-text-secondary">{link.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      <div className="p-6 md:p-8 border border-border-subtle bg-bg-surface">
        <h2
          className="text-[20px] font-medium text-text-primary mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Type your idea. Wake up launched.
        </h2>
        <p className="text-[14px] text-text-secondary mb-5">
          Free to try. No card. Most people have a live URL inside 6 minutes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/dashboard/create"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors"
          >
            Start a build
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/docs/pricing"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-deep text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
          >
            See pricing
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <p className="text-[12px] text-text-secondary mt-5">
          New here? Start with{" "}
          <Link href="/docs/what-is-moonshift" className="text-accent hover:underline">
            What is Moonshift?
          </Link>{" "}
          Already shipped? Jump to the{" "}
          <Link href="/docs/iterating" className="text-accent hover:underline">
            iteration guide
          </Link>
          .
        </p>
      </div>
    </>
  );
}
