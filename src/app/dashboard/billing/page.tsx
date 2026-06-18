"use client";

import { useState } from "react";
import { Zap } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  icon: string;
  price: string;
  billing: string;
  moons: string;
  launches: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  recommended: boolean;
}

const plans: Plan[] = [
  {
    id: "free",
    name: "Try It",
    icon: "↯",
    price: "Free",
    billing: "",
    moons: "5,000 welcome moons",
    launches: "≈ 7 typical launches",
    features: [
      "Full launch: code, tests, deploy, copy, images",
      "Your GitHub, your Vercel, yours to keep",
      "Launch posts drafted for X + LinkedIn",
      "Security audit on every run",
      "No credit card. Full stop.",
    ],
    cta: "Claim 5,000 Free Moons",
    highlighted: false,
    recommended: false,
  },
  {
    id: "starter",
    name: "Starter",
    icon: "▣",
    price: "$49",
    billing: "/ mo",
    moons: "15,000 moons / mo",
    launches: "≈ 21 launches / month",
    features: [
      "Iterate tab — refine without full re-runs",
      "Run scrub + replay across every project",
      "Custom domains + priority build queue",
      "Email support within 24 hours",
      "Cancel anytime. Moons stay yours.",
    ],
    cta: "Start With Starter",
    highlighted: false,
    recommended: false,
  },
  {
    id: "pro",
    name: "Pro",
    icon: "∞",
    price: "$99",
    billing: "/ mo",
    moons: "35,000 moons / mo",
    launches: "≈ 50 launches / month",
    features: [
      "Everything in Starter",
      "Full-mode agent — deeper reasoning per phase",
      "Cinematic landing agent included",
      "Higher per-run cap for full + cinematic in one shot",
      "Priority support from real humans",
    ],
    cta: "Go Pro",
    highlighted: false,
    recommended: false,
  },
];

function TopUpWidget() {
  const [usd, setUsd] = useState("");
  const remaining = 10000;
  const total = 10000;
  const percentage = Math.round((remaining / total) * 100);
  const moons = usd ? Math.floor(Number(usd) / 0.001).toLocaleString() : "0";

  return (
    <div className="flex-1 p-4 border border-border-subtle bg-bg-surface min-w-0">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[14px] font-medium text-text-primary"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Moons remaining
        </span>
        <span
          className="text-xl font-normal text-text-primary"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {remaining.toLocaleString()}
        </span>
      </div>

      <div className="w-full h-2 bg-bg-deep border border-border-subtle mb-3">
        <div
          className="h-full bg-accent transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div>
          <span
            className="text-[14px] font-medium text-text-primary block"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Plan moons
          </span>
          <span className="text-[12px] text-text-secondary">Resets to {total.toLocaleString()} moons on next billing date</span>
        </div>
        <span
          className="text-xl font-normal text-text-secondary"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {total.toLocaleString()}
        </span>
      </div>

      <div className="pt-3 border-t border-border-subtle">
        <div className="flex flex-col sm:flex-row items-start sm:items-end gap-3">
          <div className="flex flex-col gap-1.5 w-full sm:w-auto">
            <span className="text-[11px] font-medium tracking-[0.1em] text-text-muted uppercase">Add $</span>
            <input
              type="number"
              min="0"
              step="0.01"
              value={usd}
              onChange={(e) => setUsd(e.target.value)}
              placeholder="Enter amount"
              className="w-full sm:w-48 h-10 px-3 bg-bg-deep border border-border-subtle text-[14px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setUsd("")}
              className="flex-1 sm:flex-none px-4 py-2.5 border border-border-subtle bg-bg-deep text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
              Add
            </button>
          </div>
        </div>
      </div>

      {usd && Number(usd) > 0 && (
        <p className="text-[12px] text-text-secondary mt-4">
          ${Number(usd).toFixed(2)} buys <span className="text-text-primary font-medium">{moons} moons</span>.
        </p>
      )}
    </div>
  );
}

const topUpPacks = [
  { price: "$5", moons: "1,000", bonus: null },
  { price: "$10", moons: "2,200", bonus: "+10%" },
  { price: "$25", moons: "6,000", bonus: "+20%" },
  { price: "$50", moons: "13,000", bonus: "+30%" },
  { price: "$100", moons: "30,000", bonus: "+50%" },
];

export default function BillingPage() {
  return (
    <div className="animate-in fade-in duration-500 max-w-5xl">
      <div className="mb-10">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-3 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          BILLING
        </span>
        <h1
          className="text-3xl md:text-4xl font-normal text-text-primary mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Plan & credits
        </h1>
        <p className="text-[14px] text-text-secondary max-w-xl leading-relaxed">
          Manage your subscription, upgrade when you scale, and buy extra moons for pay-as-you-go runs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="p-4 border border-border-subtle bg-bg-surface w-[240px] flex-shrink-0">
          <span
            className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase block mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Current plan
          </span>
          <div className="flex items-center gap-2 mb-1">
            <h2
              className="text-xl font-normal text-text-primary"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Free
            </h2>
            <span className="px-1.5 py-0.5 text-[9px] font-semibold tracking-wide border border-accent/30 bg-accent/10 text-accent uppercase">
              Active
            </span>
          </div>
          <span className="text-[13px] text-text-secondary block mb-3">$0 / mo</span>
          <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-accent text-white text-[11px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
            <Zap className="w-3.5 h-3.5" />
            Upgrade
          </button>
        </div>

        <TopUpWidget />
      </div>

      <div className="mb-10">
        <h3
          className="text-[16px] font-medium text-text-primary mb-5"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Choose a plan
        </h3>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          {plans.map((plan) => {
            const isCurrent = plan.id === "free";
            return (
              <article
                key={plan.id}
                className={`group relative flex min-h-[420px] flex-col overflow-hidden border p-5 md:p-6 ${
                  plan.highlighted
                    ? "border-accent bg-accent text-white"
                    : "border-border-default bg-bg-surface text-text-primary"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-0 right-0 px-3 py-1 bg-accent text-white text-[10px] font-semibold uppercase tracking-wide">
                    Recommended
                  </span>
                )}

                <div className="relative flex flex-1 flex-col">
                  <div className="mb-5 flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center border text-xl ${plan.highlighted ? "border-white/28 bg-white/8 text-white" : "border-border-default bg-bg-elevated text-accent"}`}>
                      {plan.icon}
                    </div>
                    <h4
                      className={`text-[15px] font-medium uppercase leading-none tracking-[0.32em] md:text-[17px] ${plan.highlighted ? "text-white" : "text-text-primary"}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {plan.name}
                    </h4>
                  </div>

                  <div className="mb-5">
                    <div className={`flex items-end gap-3 ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                      <span
                        className="text-[44px] font-light leading-none tracking-[-0.075em] md:text-[52px]"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {plan.price}
                      </span>
                      {plan.billing && (
                        <span
                          className={`pb-2 text-[13px] uppercase tracking-[0.24em] ${plan.highlighted ? "text-white/68" : "text-text-secondary"}`}
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {plan.billing}
                        </span>
                      )}
                    </div>
                    <p
                      className={`mt-3 text-[12px] uppercase leading-[1.6] tracking-[0.2em] ${plan.highlighted ? "text-white/72" : "text-text-secondary"}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      ☾ {plan.moons} moons
                    </p>
                    <p className={`mt-1 text-[14px] md:text-[15px] ${plan.highlighted ? "text-white/70" : "text-text-secondary"}`}>{plan.launches}</p>
                  </div>

                  <div className={`flex-1 border-t pt-5 ${plan.highlighted ? "border-white/18" : "border-border-default"}`}>
                    <p
                      className={`mb-4 text-[12px] uppercase tracking-[0.12em] ${plan.highlighted ? "text-white/68" : "text-text-muted"}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Includes:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex gap-3 text-[14px] leading-[1.45] tracking-[-0.03em] md:text-[15px] ${plan.highlighted ? "text-white/90" : "text-text-secondary"}`}
                        >
                          <span className={`mt-[0.16em] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[13px] ${plan.highlighted ? "border-white/35 bg-white/10 text-white" : "border-accent/45 bg-accent-dim text-accent"}`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    disabled={isCurrent}
                    className={`mt-6 inline-flex h-12 w-full items-center justify-center border text-center text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.99] ${
                      plan.highlighted
                        ? "border-white bg-white text-[#0050B3] hover:bg-white/90"
                        : isCurrent
                          ? "border-border-default bg-bg-elevated text-text-muted cursor-default"
                          : "border-border-default bg-bg-elevated text-text-primary hover:border-accent/70 hover:text-accent"
                    }`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {isCurrent ? "Current plan" : `${plan.cta} →`}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="p-5 md:p-6 border border-border-subtle bg-bg-surface mb-10">
        <h3
          className="text-[16px] font-medium text-text-primary mb-2"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Quick topup
        </h3>
        <p className="text-[13px] text-text-secondary max-w-xl leading-relaxed mb-5">
          One-time moon-pack purchases credit your wallet on payment receipt. Larger packs include a bonus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {topUpPacks.map((pack) => (
            <div
              key={pack.price}
              className="flex items-center justify-between p-4 border border-border-subtle bg-bg-deep"
            >
              <div>
                <span
                  className="text-2xl font-normal text-text-primary block mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {pack.price}
                </span>
                <span className="text-[11px] text-text-secondary uppercase tracking-[0.08em]">
                  {pack.moons} moons
                  {pack.bonus && <span className="ml-1.5 text-accent">· {pack.bonus}</span>}
                </span>
              </div>
              <button className="px-5 py-2 bg-accent text-white text-[11px] font-semibold tracking-[0.1em] uppercase hover:bg-accent/90 transition-colors">
                Buy
              </button>
            </div>
          ))}
        </div>

        <span
          className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          TEST MODE · DODO PAYMENTS
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-border-subtle bg-bg-surface">
          <h4
            className="text-[15px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            How moons work
          </h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 bg-accent/10 text-accent text-[10px] font-bold">1</span>
              <span>1 moon = $0.001. Prices include compute, egress and model calls.</span>
            </li>
            <li className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 bg-accent/10 text-accent text-[10px] font-bold">2</span>
              <span>We pre-authorize 1.2× the run estimate, then charge only what you actually spend.</span>
            </li>
            <li className="flex gap-3 text-[13px] text-text-secondary leading-relaxed">
              <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 bg-accent/10 text-accent text-[10px] font-bold">3</span>
              <span>Any unused balance is released back to your wallet within seconds.</span>
            </li>
          </ul>
        </div>

        <div className="p-5 border border-border-subtle bg-bg-surface">
          <h4
            className="text-[15px] font-medium text-text-primary mb-3"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Per-run cap
          </h4>
          <p className="text-[13px] text-text-secondary leading-relaxed mb-3">
            Each plan sets a maximum moons budget for a single run. This protects you from runaway costs on complex agents.
          </p>
          <div className="space-y-2">
            <div className="flex justify-between text-[13px]">
              <span className="text-text-secondary">Free</span>
              <span className="text-text-primary font-medium">4,000 moons</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-text-secondary">Pro</span>
              <span className="text-text-primary font-medium">20,000 moons</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-text-secondary">Business</span>
              <span className="text-text-primary font-medium">100,000 moons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
