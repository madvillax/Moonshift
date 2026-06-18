"use client";

import { useState } from "react";
import { Plus, Minus, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

type Category = "All" | "Basics" | "Pricing" | "Trust" | "Stack";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
}

const categories: Category[] = ["All", "Basics", "Pricing", "Trust", "Stack"];

const faqs: FAQItem[] = [
  {
    id: "01",
    question: "What if a run burns my wallet?",
    category: "Pricing",
    answer: "It can't. Every run has a hard per-run spend ceiling enforced between phases. Every LLM call is metered. If an agent overshoots its phase budget, the orchestrator aborts the run and you're only charged for what was actually consumed. No surprise bills.",
  },
  {
    id: "02",
    question: "Will I get locked in?",
    category: "Trust",
    answer: "No. The generated app lands on your GitHub, deploys to your Vercel, and writes to your Turso. If you cancel, you keep the repo, the live URL, the database, the hero images, the marketing copy. Moonshift is the orchestrator. The product is yours.",
  },
  {
    id: "03",
    question: "What does \"launched\" actually mean?",
    category: "Basics",
    answer: "A live URL, the repo on your GitHub, X + LinkedIn posts drafted, and three hero images. You approve before anything publishes.",
  },
  {
    id: "04",
    question: "How long does one launch take?",
    category: "Basics",
    answer: "Median 6m 42s across logged beta runs, from prompt to live URL. Simple landing pages can be faster; complex full-stack apps with auth and payments may take a few minutes more.",
  },
  {
    id: "05",
    question: "Do you post to my X or LinkedIn automatically?",
    category: "Trust",
    answer: "Never. Nothing publishes until you approve each post from the dashboard. We draft the copy and images, but you hit the button.",
  },
  {
    id: "06",
    question: "What stack does Moonshift generate?",
    category: "Stack",
    answer: "Next.js, React, TypeScript, Tailwind CSS on the frontend. Node.js for backend logic. PostgreSQL via Turso or your own database. Deployed to Vercel by default, with Cloudflare and Netlify as alternatives.",
  },
  {
    id: "07",
    question: "What if the agents generate broken code?",
    category: "Trust",
    answer: "Every run includes automated tests, type checks, and a security scan. If tests fail, the run replays the failing phase. You're shown the issue before anything ships.",
  },
  {
    id: "08",
    question: "Can I iterate on a project after the first launch?",
    category: "Basics",
    answer: "Yes. Open any project and describe the change. Moonshift diffs against your existing repo, runs tests, and deploys the update without rebuilding from scratch.",
  },
  {
    id: "09",
    question: "What LLMs power this?",
    category: "Stack",
    answer: "We route prompts across best-in-class models based on the task — planning, coding, copywriting, and image generation each use the model that performs best for that phase. You don't have to choose.",
  },
];

const counts = categories.reduce<Record<Category, number>>((acc, category) => {
  acc[category] = category === "All" ? faqs.length : faqs.filter((f) => f.category === category).length;
  return acc;
}, { All: 0, Basics: 0, Pricing: 0, Trust: 0, Stack: 0 });

function FAQRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border-subtle bg-bg-surface">
      <button
        onClick={onToggle}
        className="w-full p-5 md:p-6 flex items-start justify-between text-left gap-4"
      >
        <div className="flex items-start gap-4">
          <span className="text-[12px] font-mono text-accent mt-1">{item.id}</span>
          <div>
            <h3
              className="text-[17px] md:text-[19px] font-medium text-text-primary leading-snug mb-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              {item.question}
            </h3>
            <span
              className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              — {item.category}
            </span>
          </div>
        </div>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-border-subtle bg-bg-deep text-text-secondary mt-0.5">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 md:px-6 pb-5 md:pb-6 pl-[60px] md:pl-[68px] text-[14px] md:text-[15px] text-text-secondary leading-relaxed max-w-3xl">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [openId, setOpenId] = useState<string | null>("01");

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-bg-deep text-text-primary pt-24 md:pt-32 pb-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span
              className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              FAQ
            </span>
            <h1
              className="text-3xl md:text-4xl lg:text-[44px] font-normal leading-[1.08] tracking-[-0.02em] text-text-primary mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Everything you&apos;d ask,{" "}
              <em className="not-italic" style={{ fontFamily: "var(--font-dm-sans)" }}>
                answered upfront.
              </em>
            </h1>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-6">
              We know what you&apos;re thinking. Here&apos;s the honest answer. Didn&apos;t find it?{" "}
              <a href="mailto:hello@moonshift.io" className="text-accent hover:underline">
                hello@moonshift.io
              </a>{" "}
              → real reply, real human.
            </p>

            <a
              href="mailto:hello@moonshift.io"
              className="inline-flex items-center gap-2 px-4 py-2.5 border border-border-default bg-bg-surface text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors mb-10"
            >
              <Mail className="w-3.5 h-3.5" />
              hello@moonshift.io
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <div>
              <span
                className="text-[10px] font-medium tracking-[0.15em] text-text-muted uppercase block mb-3"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Jump to
              </span>
              <div className="space-y-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-[13px] transition-colors border-b border-border-subtle ${
                      activeCategory === category
                        ? "text-text-primary bg-bg-surface border-border-default"
                        : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-text-muted">—</span>
                      {category}
                    </span>
                    <span className="text-[11px] font-mono text-text-muted">{counts[category].toString().padStart(2, "0")}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {filtered.map((item) => (
              <FAQRow
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => setOpenId(openId === item.id ? null : item.id)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mt-20">
        <div className="border border-border-subtle bg-bg-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2
              className="text-[18px] font-medium text-text-primary mb-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Still have questions?
            </h2>
            <p className="text-[14px] text-text-secondary">We&apos;re around. Expect a human reply within a few hours.</p>
          </div>
          <Link
            href="mailto:hello@moonshift.io"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors"
          >
            Contact support
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
