"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring the platform",
    features: [
      "Limited application generations",
      "Basic deployment",
      "Access to core platform features",
      "Community support",
      "Public build logs",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For serious developers and startups",
    features: [
      "Increased generation limits",
      "Faster build times",
      "Advanced deployment features",
      "Priority processing",
      "Additional agent capabilities",
      "Custom domains",
      "Email support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$149",
    period: "/month",
    description: "For teams building together",
    features: [
      "Collaborative workflows",
      "Shared projects",
      "Team management",
      "Enterprise-level limits",
      "Advanced deployment controls",
      "SSO & SAML",
      "Dedicated support",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 text-center"
        >
          <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            PRICING
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary max-w-2xl mx-auto leading-[1.1]" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-[1.6]">
            Start free, upgrade when you need more power. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col bg-bg-surface rounded-none p-8 ${
                plan.highlighted
                  ? "border border-accent shadow-[0_0_15px_rgba(0,139,255,0.1)]"
                  : "border border-border-subtle"
              }`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>{plan.name}</h3>
                <p className="text-[14px] text-text-secondary">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-4xl font-medium text-text-primary">{plan.price}</span>
                <span className="text-text-secondary ml-1">{plan.period}</span>
              </div>
              
              <div className="bg-bg-elevated border border-border-subtle rounded-none p-6 mb-8 flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-text-muted mt-0.5 shrink-0" />
                      <span className="text-[14px] text-text-secondary leading-[1.5]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#"
                className={`w-full py-3 rounded-none font-medium text-[12px] tracking-[0.06em] text-center transition-all duration-150 ${
                  plan.highlighted
                    ? "bg-accent text-bg-deep hover:scale-[1.02]"
                    : "bg-transparent border border-border-default text-text-primary hover:border-text-muted"
                }`}
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
