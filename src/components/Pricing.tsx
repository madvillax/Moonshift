"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Billing = "monthly" | "annual";

const plans = [
  {
    label: "Try It",
    icon: "↯",
    monthly: { price: "Free", billing: "", moons: "5,000 welcome moons", launches: "≈ 7 typical launches" },
    annual: { price: "Free", billing: "", moons: "5,000 welcome moons", launches: "≈ 7 typical launches" },
    includes: [
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
    label: "Starter",
    icon: "▣",
    monthly: { price: "$49", billing: "/ mo", moons: "15,000 moons / mo", launches: "≈ 21 launches / month", save: "" },
    annual: { price: "$39", billing: "/ mo", moons: "15,000 moons / mo", launches: "≈ 21 launches / month", save: "save $120/yr" },
    includes: [
      "Iterate tab — refine without full re-runs",
      "Run scrub + replay across every project",
      "Custom domains + priority build queue",
      "Email support within 24 hours",
      "Cancel anytime. Moons stay yours.",
    ],
    cta: "Start With Starter",
    highlighted: true,
    recommended: true,
  },
  {
    label: "Pro",
    icon: "∞",
    monthly: { price: "$99", billing: "/ mo", moons: "35,000 moons / mo", launches: "≈ 50 launches / month", save: "" },
    annual: { price: "$79", billing: "/ mo", moons: "35,000 moons / mo", launches: "≈ 50 launches / month", save: "save $240/yr" },
    includes: [
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

export default function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");

  return (
    <section id="pricing" className="relative overflow-hidden bg-bg-deep py-28 md:py-36">
      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 max-w-4xl text-center md:mb-12"
        >
          <p
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Pricing
          </p>
          <h2
            className="text-[32px] font-medium leading-[0.98] tracking-[-0.045em] text-text-primary md:text-[52px] lg:text-[64px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Pay only for what <em className="italic">you ship.</em>
          </h2>
          <p
            className="mx-auto mt-7 max-w-3xl text-[15px] leading-[1.6] text-text-secondary md:text-[17px]"
          >
            Your first launch is free: <strong className="text-text-primary">5,000 moons, no card.</strong> A typical launch costs ~$0.60, and every run has a <strong className="text-text-primary">hard spend ceiling.</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-10 flex max-w-[1320px] flex-col items-center justify-between gap-5 md:mb-12 md:flex-row"
        >
          <div className="flex w-full flex-col gap-3 rounded-none border border-border-default bg-bg-surface p-4 md:w-auto md:min-w-[520px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-accent" />
                <span className="inline-block h-2 w-2 rotate-45 bg-accent/70" />
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Founding Pricing
                </span>
                <span className="text-[11px] text-text-muted">·</span>
                <span
                  className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Locks at #500
                </span>
              </div>
              <span
                className="text-[11px] font-medium uppercase tracking-[0.22em] text-text-muted"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                279 seats left
              </span>
            </div>
            <div className="h-1 w-full bg-border-default">
              <div className="h-full bg-accent" style={{ width: "44.2%" }} />
            </div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-text-muted">
              <span style={{ fontFamily: "var(--font-space-grotesk)" }}>221/500 claimed</span>
              <span>·</span>
              <span style={{ fontFamily: "var(--font-space-grotesk)" }}>44% gone</span>
            </div>
          </div>

          <div className="relative flex items-center rounded-none border border-border-default bg-bg-surface p-1">
            <button
              onClick={() => setBilling("monthly")}
              className="relative px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {billing === "monthly" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-none bg-text-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${billing === "monthly" ? "text-bg-deep" : "text-text-secondary hover:text-text-primary"}`}>
                Monthly
              </span>
            </button>
            <button
              onClick={() => setBilling("annual")}
              className="relative flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-200"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {billing === "annual" && (
                <motion.div
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-none bg-text-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${billing === "annual" ? "text-bg-deep" : "text-text-secondary hover:text-text-primary"}`}>
                Annual
              </span>
              <span
                className={`relative z-10 rounded-none px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] ${
                  billing === "annual"
                    ? "bg-white/20 text-bg-deep"
                    : "bg-accent/10 text-accent"
                }`}
              >
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          <AnimatePresence mode="wait">
            {plans.map((plan, index) => {
              const tier = plan[billing];
              return (
                <motion.article
                  key={`${plan.label}-${billing}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex min-h-[500px] flex-col overflow-hidden border p-5 md:p-6 ${
                    plan.highlighted
                      ? "border-accent bg-[#008bff] text-white"
                      : "border-border-default bg-bg-surface text-text-primary"
                  }`}
                >
                  <div className="relative flex flex-1 flex-col">
                    <div className="mb-6 flex items-start gap-4">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center border text-xl ${plan.highlighted ? "border-white/28 bg-white/8 text-white" : "border-border-default bg-bg-elevated text-accent"}`}>
                          {plan.icon}
                        </div>
                        <h3
                          className={`text-[15px] font-medium uppercase leading-none tracking-[0.32em] md:text-[17px] ${plan.highlighted ? "text-white" : "text-text-primary"}`}
                          style={{ fontFamily: "var(--font-space-grotesk)" }}
                        >
                          {plan.label}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className={`flex items-end gap-3 ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                        <span
                          className="text-[48px] font-light leading-none tracking-[-0.075em] md:text-[58px] lg:text-[52px] xl:text-[64px]"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {tier.price}
                        </span>
                        {tier.billing && (
                          <span
                            className={`pb-2 text-[13px] uppercase tracking-[0.24em] ${plan.highlighted ? "text-white/68" : "text-text-secondary"}`}
                            style={{ fontFamily: "var(--font-space-grotesk)" }}
                          >
                            {tier.billing}
                          </span>
                        )}
                      </div>
                      {"save" in tier && (tier as {save: string}).save && (
                        <p className={`mt-2 text-[13px] tracking-[0.04em] ${plan.highlighted ? "text-white/80" : "text-accent"}`}>
                          <span className="line-through opacity-50">{plan.monthly.price}{plan.monthly.billing}</span>
                          <span className="ml-2">{tier.price}{tier.billing}</span>
                          <span className="ml-2 text-[12px] uppercase tracking-[0.12em] opacity-80">· {(tier as {save: string}).save}</span>
                        </p>
                      )}
                      <p
                        className={`mt-4 text-[12px] uppercase leading-[1.6] tracking-[0.2em] ${plan.highlighted ? "text-white/72" : "text-text-secondary"}`}
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        ☾ {tier.moons}
                      </p>
                      <p className={`mt-2 text-[14px] md:text-[15px] ${plan.highlighted ? "text-white/70" : "text-text-secondary"}`}>{tier.launches}</p>
                    </div>

                    <div className={`flex-1 border-t pt-6 ${plan.highlighted ? "border-white/18" : "border-border-default"}`}>
                      <p
                        className={`mb-5 text-[12px] uppercase tracking-[0.12em] ${plan.highlighted ? "text-white/68" : "text-text-muted"}`}
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        Includes:
                      </p>
                      <ul className="space-y-3">
                        {plan.includes.map((feature) => (
                          <li
                            key={feature}
                            className={`flex gap-3 text-[15px] leading-[1.45] tracking-[-0.03em] md:text-[17px] lg:text-[15px] xl:text-[17px] ${plan.highlighted ? "text-white/90" : "text-text-secondary"}`}
                          >
                            <span className={`mt-[0.16em] flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[13px] ${plan.highlighted ? "border-white/35 bg-white/10 text-white" : "border-accent/45 bg-accent-dim text-accent"}`}>✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#"
                      className={`mt-7 inline-flex h-12 w-full items-center justify-center border text-center text-[12px] font-medium uppercase tracking-[0.18em] transition-all duration-200 active:scale-[0.99] ${
                        plan.highlighted
                          ? "border-white bg-white text-[#0050B3] hover:bg-white/90"
                          : "border-border-default bg-bg-elevated text-text-primary hover:border-accent/70 hover:text-accent"
                      }`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {plan.cta} →
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
