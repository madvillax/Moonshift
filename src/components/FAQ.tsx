"use client";

import { useState } from "react";
import { NavArrowDown } from "iconoir-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";

const faqs = [
  {
    question: "What does Moonshift build?",
    answer: "Moonshift can build full-stack web applications including frontend interfaces, backend APIs, databases, authentication systems, and business logic. It supports modern frameworks like React, Next.js, Node.js, and various databases.",
  },
  {
    question: "How long does deployment take?",
    answer: "Most applications are deployed within 5 minutes. Complex applications with multiple integrations may take up to 15 minutes. The entire process from prompt to live URL is automated.",
  },
  {
    question: "Who owns the generated code?",
    answer: "You own everything. All generated source code, databases, and infrastructure belong entirely to you. Moonshift acts as your development team, but you retain full ownership.",
  },
  {
    question: "Can I export my project?",
    answer: "Yes, you can export your entire project at any time. We provide Git repository access, database dumps, and infrastructure as code configurations for complete portability.",
  },
  {
    question: "Is there vendor lock-in?",
    answer: "No. Moonshift is designed to be vendor-lock-in free. You can continue development independently, host elsewhere, or modify the generated code however you like.",
  },
  {
    question: "Which technologies are supported?",
    answer: "Moonshift supports React, Next.js, Vue, Node.js, Python, PostgreSQL, MongoDB, Redis, Prisma, Tailwind CSS, and many more. We're constantly adding new technologies.",
  },
  {
    question: "How does deployment work?",
    answer: "Applications are automatically containerized and deployed to production infrastructure. You can use Moonshift's managed infrastructure or connect your own cloud providers.",
  },
  {
    question: "What happens after cancellation?",
    answer: "Your deployed applications remain active until the end of your billing period. After that, you can export all your code and data. We provide a 30-day grace period for data retrieval.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-lg font-medium text-text-primary pr-4" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <NavArrowDown className="w-5 h-5 text-text-muted group-hover:text-accent transition-colors" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-6 text-[15px] text-text-secondary leading-[1.6]">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-32 bg-bg-deep overflow-hidden">
      <DotPattern className="text-[#008BFF]/25 dark:text-[#008BFF]/15 [mask-image:radial-gradient(ellipse_50%_60%_at_50%_0%,white,transparent)]" cr={1} width={20} height={20} />
      <div className="max-w-[800px] mx-auto px-6 lg:px-10">
        <BlurFade delay={0} duration={0.5} inView>
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-text-primary text-balance" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Frequently Asked Questions
          </h2>
        </div>
        </BlurFade>

        <div className="bg-bg-surface border border-border-subtle rounded-none p-6 md:p-8">
          {faqs.map((faq, i) => (
            <BlurFade key={faq.question} delay={i * 0.07} duration={0.4} inView>
            <FAQItem faq={faq} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
