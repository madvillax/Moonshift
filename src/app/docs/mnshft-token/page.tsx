"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const benefits = [
  { title: "Free moons every month", description: "Hold $MNSHFT and receive a monthly moon allowance for AI builds and edits." },
  { title: "Discounts on plans", description: "Token holders unlock reduced subscription pricing." },
  { title: "Governance", description: "Vote on roadmap priorities and new features." },
];

export default function MnshftTokenPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; the basics
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        $MNSHFT token
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Hold $MNSHFT to earn free moons, unlock discounts, and help steer the future of Moonshift.
      </p>

      <div className="space-y-3 mb-12">
        {benefits.map((benefit) => (
          <div key={benefit.title} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{benefit.title}</h3>
            <p className="text-[13px] text-text-secondary">{benefit.description}</p>
          </div>
        ))}
      </div>

      <section className="mb-10">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>How to get $MNSHFT</h2>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          $MNSHFT is available on supported exchanges and through the Moonshift dashboard. Connect your wallet to claim holder benefits.
        </p>
      </section>

      <Link href="/docs/faq" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        FAQ
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
