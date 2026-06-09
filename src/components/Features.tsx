"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Layers,
  TestTube,
  Shield,
  Rocket,
  Server,
  GitBranch,
  Megaphone,
  FileCheck,
  ScrollText,
  Lock,
} from "lucide-react";

const features = [
  {
    id: "01",
    title: "AI-Powered Product Generation",
    description: "Generate complete applications from natural language prompts. Describe what you want, and Moonshift handles the rest.",
    code: `$ moonshift generate "E-commerce platform"
● Analyzing requirements...
● Generating architecture...
● Scaffolding frontend...
● Scaffolding backend...
✨ Generation complete in 45s`
  },
  {
    id: "02",
    title: "Autonomous Development Agents",
    description: "Multiple specialized AI agents collaborate to build and launch products. Each agent handles a specific domain with expertise.",
    code: `[Agent: Architect] Designing system...
[Agent: Frontend] Building React components...
[Agent: Backend] Creating API routes...
[Agent: DevOps] Configuring deployment...
● Agents synchronized successfully`
  },
  {
    id: "03",
    title: "Full-Stack Application Development",
    description: "Frontend, backend, APIs, database, authentication, and business logic generation. Everything you need in one platform.",
    code: `├── src/
│   ├── app/          # Next.js App Router
│   ├── components/   # React Components
│   ├── lib/          # Utilities
│   └── api/          # Backend Routes
├── prisma/           # Database Schema
└── package.json      # Dependencies`
  },
  {
    id: "04",
    title: "Automated Testing",
    description: "Automatic validation of application functionality and workflows. Catch issues before they reach production.",
    code: `$ moonshift test
● Running test suite...
✓ Frontend components (124 tests)
✓ API endpoints (45 tests)
✓ Database queries (32 tests)
✓ E2E workflows (12 tests)
✨ All tests passed`
  },
];

const subFeatures = [
  { icon: Server, label: "INFRASTRUCTURE", title: "Infrastructure Ownership", desc: "Users maintain ownership of hosting, databases, and deployment environments." },
  { icon: GitBranch, label: "SOURCE CODE", title: "Source Code Ownership", desc: "Generated repositories belong entirely to the user. Export anytime." },
  { icon: Megaphone, label: "MARKETING", title: "Marketing Asset Generation", desc: "Create launch-ready content and promotional materials automatically." },
  { icon: FileCheck, label: "LAUNCH", title: "Launch Automation", desc: "Generate everything required to release a product publicly." },
  { icon: ScrollText, label: "TRANSPARENCY", title: "Public Build Logs", desc: "Transparent visibility into application creation and deployment processes." },
  { icon: Lock, label: "FREEDOM", title: "Vendor Lock-In Free", desc: "Users can continue development independently of the platform." },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative py-32 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            THE PLATFORM
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary max-w-2xl leading-[1.1]" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Everything you need to <span className="text-accent">build and ship</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-[1.6]">
            From idea to deployment, Moonshift handles every step of the software development lifecycle automatically.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`cursor-pointer group ${activeFeature === index ? 'opacity-100' : 'opacity-50 hover:opacity-80 transition-opacity'}`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="flex gap-6">
                  <div className={`text-3xl font-mono font-medium ${activeFeature === index ? 'text-accent' : 'text-text-muted'}`}>
                    {feature.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-text-primary mb-3" style={{ fontFamily: "var(--font-dm-sans)" }}>{feature.title}</h3>
                    <p className="text-text-secondary leading-[1.6]">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 sticky top-32"
          >
            <div className="bg-bg-elevated border border-border-subtle rounded-none overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border-subtle bg-bg-surface">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EF4444]/20 border border-[#EF4444]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#F59E0B]/20 border border-[#F59E0B]/50" />
                  <div className="w-3 h-3 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/50" />
                </div>
                <div className="mx-auto text-[12px] font-mono text-text-muted">terminal</div>
              </div>
              <div className="p-8 font-mono text-[13px] leading-[1.7] overflow-x-auto min-h-[300px]">
                <pre className="text-text-secondary whitespace-pre-wrap">
                  {features[activeFeature].code}
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-bg-surface border border-border-subtle rounded-none p-6 hover:border-border-default transition-colors duration-150"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {feature.label}
                    </span>
                  </div>
                  <h4 className="text-xl font-medium mb-3 text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>{feature.title}</h4>
                  <p className="text-[15px] text-text-secondary leading-[1.6] mb-6">{feature.desc}</p>
                  <a href="#" className="inline-flex items-center text-[14px] font-medium text-text-muted group-hover:text-text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    Learn more &rarr;
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
