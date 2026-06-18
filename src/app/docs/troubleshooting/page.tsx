"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const issues = [
  { title: "My site is not loading", answer: "Check that you published the latest version. Clear your browser cache or try an incognito window." },
  { title: "Custom domain is not connecting", answer: "Verify your DNS records match exactly what Moonshift provided. DNS can take up to 24 hours to propagate." },
  { title: "A section looks wrong", answer: "Try regenerating the section or editing it with chat. Refresh the editor if styles look stuck." },
  { title: "Build failed", answer: "Check your prompt for unsupported requests. Simplify and try again, or contact support with the error code." },
  { title: "Moons not appearing", answer: "Allow a few minutes after purchase. If they still do not show, refresh the billing page or contact support." },
];

export default function TroubleshootingPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; the basics
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        Troubleshooting
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        Stuck? Try these fixes first.
      </p>

      <div className="space-y-3 mb-12">
        {issues.map((issue) => (
          <div key={issue.title} className="p-4 border border-border-subtle bg-bg-surface">
            <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{issue.title}</h3>
            <p className="text-[13px] text-text-secondary">{issue.answer}</p>
          </div>
        ))}
      </div>

      <div className="p-5 border border-border-subtle bg-bg-surface mb-10">
        <h2 className="text-[18px] font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>Still stuck?</h2>
        <p className="text-[14px] text-text-secondary mb-4">
          Reach out through the dashboard or email support@moonshift.io. Include your site URL and any error messages.
        </p>
        <Link href="/dashboard/support" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
          Contact support
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <Link href="/docs" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-subtle bg-bg-surface text-[12px] font-semibold tracking-[0.05em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors">
        Back to docs home
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
