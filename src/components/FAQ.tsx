"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What if a run burns my wallet?",
    answer: "It can't. Every run has a hard spend ceiling. If an agent overshoots, the run stops and you only pay for what was used.",
  },
  {
    question: "Will I get locked in?",
    answer: "No. The app lives on your GitHub, your Vercel, your database. Cancel and keep everything.",
  },
  {
    question: "What does \"launched\" mean?",
    answer: "A live URL, the repo on your GitHub, X + LinkedIn posts drafted, and three hero images. You approve before anything publishes.",
  },
  {
    question: "How long does a launch take?",
    answer: "Median 6m 42s across logged beta runs, from prompt to live URL.",
  },
  {
    question: "Do you post to my socials automatically?",
    answer: "Never. Nothing publishes until you approve each post from the dashboard.",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-border-subtle bg-bg-surface">
      <button
        onClick={onToggle}
        className="w-full p-4 md:p-5 flex items-start justify-between text-left gap-4"
      >
        <h3
          className="text-[16px] md:text-[18px] font-medium text-text-primary leading-snug"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {faq.question}
        </h3>
        <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center border border-border-subtle bg-bg-deep text-text-secondary">
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 md:px-5 pb-4 md:pb-5 text-[14px] md:text-[15px] text-text-secondary leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-24 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span
              className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-3 block"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              FAQ
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-[42px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              The five questions <em className="not-italic font-normal" style={{ fontFamily: "var(--font-dm-sans)" }}>everyone asks.</em>
            </h2>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 border border-border-default bg-bg-surface text-[11px] font-semibold tracking-[0.1em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors">
              Read the full FAQ
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
