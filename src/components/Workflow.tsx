"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Idea Submission", desc: "Describe your application in plain text" },
  { title: "Planning & Architecture", desc: "AI designs the system architecture" },
  { title: "Database Design", desc: "Schema and data models created" },
  { title: "Backend Development", desc: "APIs and business logic built" },
  { title: "Frontend Development", desc: "Responsive UI components generated" },
  { title: "Testing", desc: "Automated test suites executed" },
  { title: "Security Review", desc: "Vulnerability scanning and fixes" },
  { title: "Deployment", desc: "Deployed to production infrastructure" },
  { title: "Launch Assets", desc: "Marketing materials generated" },
  { title: "Product Delivery", desc: "Your application is live and ready" },
];

export default function Workflow() {
  return (
    <section className="relative py-32 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            DEVELOPMENT PIPELINE
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary max-w-2xl leading-[1.1]" style={{ fontFamily: "var(--font-dm-sans)" }}>
            From idea to <span className="text-text-secondary">production</span>
          </h2>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-[1.6]">
            A fully automated pipeline that takes your concept and delivers a working application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <div className="text-3xl font-mono font-medium text-border-default mb-4">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>{step.title}</h3>
              <p className="text-[14px] text-text-secondary leading-[1.6]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
