"use client";

import { motion } from "framer-motion";

const plans = [
  {
    label: "Try It",
    icon: "↯",
    price: "Free",
    billing: "",
    moons: "5,000 welcome moons",
    launches: "≈ 7 typical launches",
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
    price: "$49",
    billing: "/ mo",
    moons: "15,000 moons / mo",
    launches: "≈ 21 launches / month",
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
    price: "$99",
    billing: "/ mo",
    moons: "35,000 moons / mo",
    launches: "≈ 50 launches / month",
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
  return (
    <section id="pricing" className="relative overflow-hidden bg-bg-deep py-28 md:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-14 max-w-4xl text-center md:mb-16"
        >
          <p
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-accent"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Pricing
          </p>
          <h2
            className="text-[42px] font-medium leading-[0.98] tracking-[-0.045em] text-text-primary md:text-[72px] lg:text-[86px]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Simple,
            <br />
            Transparent Pricing
          </h2>
          <p
            className="mx-auto mt-7 max-w-3xl text-[13px] uppercase leading-[1.75] tracking-[0.08em] text-text-secondary md:text-[15px]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Choose a plan that fits your project goals. No hidden costs. No surprises.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3 lg:gap-4">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.08, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex min-h-[500px] flex-col overflow-hidden border p-5 md:p-6 ${
                plan.highlighted
                  ? "border-accent bg-[#008bff] text-white shadow-[0_0_0_1px_rgba(0,139,255,0.24),0_32px_120px_rgba(0,139,255,0.24)]"
                  : "border-border-default bg-bg-surface text-text-primary shadow-[0_24px_80px_rgba(0,0,0,0.32)]"
              }`}
            >
              {plan.highlighted && (
                <>
                  <div className="pointer-events-none absolute right-0 top-0 h-40 w-44 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.72)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:linear-gradient(135deg,black,transparent_72%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)] opacity-70" />
                </>
              )}
              <div className="relative flex flex-1 flex-col">
                {plan.recommended && (
                  <span
                    className="absolute right-6 top-6 hidden border border-white/35 bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-white xl:inline-flex"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    ✦ Recommended
                  </span>
                )}

                <div className="mb-6 flex items-start gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center border text-xl ${plan.highlighted ? "border-white/28 bg-white/8 text-white" : "border-border-default bg-bg-elevated text-accent"}`}>
                      {plan.icon}
                    </div>
                    <h3
                      className={`text-[17px] font-medium uppercase leading-none tracking-[0.32em] md:text-[19px] ${plan.highlighted ? "text-white" : "text-text-primary"}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      {plan.label}
                    </h3>
                  </div>
                </div>

                <div className="mb-6">
                  <div className={`flex items-end gap-3 ${plan.highlighted ? "text-white" : "text-text-primary"}`}>
                    <span
                      className="text-[58px] font-light leading-none tracking-[-0.075em] md:text-[72px] lg:text-[64px] xl:text-[78px]"
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
                    className={`mt-4 text-[12px] uppercase leading-[1.6] tracking-[0.2em] ${plan.highlighted ? "text-white/72" : "text-text-secondary"}`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    ☾ {plan.moons}
                  </p>
                  <p className={`mt-2 text-[14px] md:text-[15px] ${plan.highlighted ? "text-white/70" : "text-text-secondary"}`}>{plan.launches}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}
