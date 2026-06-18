"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Try Moonshift. Build and publish one site on a subdomain.",
    features: ["1 live site", "Moonshift subdomain", "Basic analytics", "Community support"],
  },
  {
    name: "Starter",
    price: "$12",
    description: "For founders and indie hackers shipping their first real site.",
    features: ["3 live sites", "Custom domain", "Advanced analytics", "AI chat edits", "Email support"],
  },
  {
    name: "Pro",
    price: "$39",
    description: "For builders running multiple sites and experiments.",
    features: ["10 live sites", "Custom domains", "A/B testing", "Priority support", "Team members"],
  },
];

export default function PricingDocsPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; the basics
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Pricing
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        No card to start. Upgrade when you are ready to look official.
      </p>

      <div className="space-y-4 mb-12">
        {plans.map((plan) => (
          <div key={plan.name} className="p-5 border border-border-subtle bg-bg-surface">
            <div className="flex items-baseline justify-between mb-2">
              <h2 className="text-[18px] font-medium text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>{plan.name}</h2>
              <span className="text-[20px] font-medium text-accent" style={{ fontFamily: "var(--font-dm-sans)" }}>{plan.price}<span className="text-[13px] text-text-muted">/mo</span></span>
            </div>
            <p className="text-[13px] text-text-secondary mb-4">{plan.description}</p>
            <ul className="space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[13px] text-text-secondary">
                  <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="mb-10">
        <h2 className="text-[22px] font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>Moons</h2>
        <p className="text-[15px] text-text-secondary leading-relaxed">
          Some AI actions cost moons. Plans include a monthly moon allowance. You can top up anytime from your dashboard.
        </p>
      </section>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/pricing" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
          View full pricing
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <Link href="/docs/mnshft-token" className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-surface text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors">
          $MNSHFT token
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </>
  );
}
