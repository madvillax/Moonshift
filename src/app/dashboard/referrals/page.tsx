"use client";

import { useState } from "react";
import { Copy, Check, Mail, Share2, MessageCircle } from "lucide-react";

const referralCode = "HQRB4G5N";
const shareLink = "https://moonshift.io/login?mode=signup&ref=HQRB4G5N";
const suggestedMessage = `I've been using Moonshift to turn ideas into deployed apps in about 5 minutes. Sign up with my code (HQRB4G5N) and we both get 100 moons - good for a launch each: https://moonshift.io/login?mode=signup&ref=HQRB4G5N`;

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted hover:text-text-primary transition-colors"
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-accent" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied" : label}
    </button>
  );
}

function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.77 3H20.5L14.18 10.22L21.5 20.5H15.74L11.04 14.26L5.77 20.5H3.04L9.83 12.76L2.77 3H8.69L13.03 8.75L17.77 3ZM16.69 18.63H18.39L7.64 4.8H5.82L16.69 18.63Z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function StatCard({ label, value, description }: { label: string; value: string; description: string }) {
  return (
    <div className="border border-border-default bg-bg-elevated p-5">
      <span
        className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
        style={{ fontFamily: "var(--font-space-grotesk)" }}
      >
        {label}
      </span>
      <div className="text-4xl font-normal text-text-primary my-3" style={{ fontFamily: "var(--font-dm-sans)" }}>
        {value}
      </div>
      <p className="text-[13px] text-text-secondary">{description}</p>
    </div>
  );
}

export default function ReferralsPage() {
  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500">
      <div className="border border-border-default bg-bg-elevated p-6 md:p-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
          <div>
            <span
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              INVITE FRIENDS · EARN MOONS
            </span>
            <h1
              className="text-3xl md:text-4xl xl:text-5xl font-normal tracking-tight text-text-primary mt-4 mb-5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Both of you get <span className="text-accent">100 moons</span> when they sign up.
            </h1>
            <p className="text-[14px] text-text-secondary leading-relaxed">
              One launch typically uses ~30-50 moons. Share your code, and the next person who joins through it lands with a launch already funded - and credits the same amount back to your wallet.
            </p>
          </div>

          <div className="border border-border-default bg-bg-deep p-5 md:p-6">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              YOUR REFERRAL CODE
            </span>
            <div className="flex items-center justify-between gap-4 mt-3 mb-4 overflow-x-auto">
              <span
                className="text-xl sm:text-2xl md:text-3xl font-medium tracking-[0.1em] sm:tracking-[0.15em] text-text-primary whitespace-nowrap"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                {referralCode.split("").join(" ")}
              </span>
              <CopyButton text={referralCode} label="Copy" />
            </div>
            <p className="text-[12px] text-text-secondary">
              Anyone who signs up at moonshift.io/login?ref={referralCode} triggers the grant automatically.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="FRIENDS INVITED" value="0" description="Share your code to land the first one." />
        <StatCard label="MOONS EARNED" value="0" description="Each redemption nets you 100 moons." />
        <StatCard label="NEXT MILESTONE" value="1" description="1 more invite → First Light badge." />
      </div>

      <div className="border border-border-default bg-bg-elevated p-6 md:p-10">
        <span
          className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          SHARE KIT
        </span>
        <h2
          className="text-2xl md:text-3xl font-normal tracking-tight text-text-primary mt-3 mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Send it out in one tap.
        </h2>
        <p className="text-[14px] text-text-secondary mb-6">
          Pre-written copy that doesn&apos;t sound like a referral spam. Edit any of it before posting - your call.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { label: "TWITTER / X", icon: XIcon },
            { label: "LINKEDIN", icon: LinkedInIcon },
            { label: "WHATSAPP", icon: MessageCircle },
            { label: "EMAIL", icon: Mail },
            { label: "MORE...", icon: Share2 },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex items-center justify-center gap-2 px-3 py-2.5 border border-border-default bg-bg-deep text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <Icon className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium tracking-[0.1em]">{label}</span>
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-border-subtle bg-bg-deep p-4">
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                SHARE LINK
              </span>
              <CopyButton text={shareLink} label="Copy" />
            </div>
            <p className="text-[13px] text-text-primary break-all" style={{ fontFamily: "var(--font-mono)" }}>
              {shareLink}
            </p>
          </div>

          <div className="border border-border-subtle bg-bg-deep p-4">
            <div className="flex items-center justify-between mb-2">
              <span
                className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                SUGGESTED MESSAGE
              </span>
              <CopyButton text={suggestedMessage} label="Copy" />
            </div>
            <p className="text-[13px] text-text-secondary leading-relaxed">
              {suggestedMessage}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-border-default bg-bg-elevated p-6 md:p-8">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            HOW IT WORKS
          </span>
          <ol className="mt-5 space-y-4">
            {[
              "Share your code or link. Anyone can use it - the cookie sticks for seven days, so it works even if your friend bounces and signs up later.",
              "They create their first Moonshift account. The redemption fires automatically the moment their account is created.",
              "You both get 100 moons credited to your wallet. No invoice, no review, no waiting.",
              "One redemption per new account. Existing users can't redeem; that keeps the system fair for everyone.",
            ].map((text, idx) => (
              <li key={idx} className="flex gap-3">
                <span
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center border border-border-default text-[10px] text-text-muted"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {idx + 1}
                </span>
                <p className="text-[13px] text-text-secondary leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-border-default bg-bg-elevated p-6 md:p-8">
          <span
            className="text-[10px] font-medium uppercase tracking-[0.12em] text-text-muted"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            WHERE IT ACTUALLY LANDS
          </span>
          <div className="mt-5 space-y-5">
            {[
              {
                title: "DM the right 3 friends",
                description: "Beats any group post. The people who'll actually try a launch tool know who they are - send the link with one sentence on why you thought of them.",
              },
              {
                title: "Reply to a build-in-public post",
                description: "Drop a screenshot of your last launch + your code in any thread where someone is bemoaning a slow build. Helpful first, link second.",
              },
              {
                title: "Pin a quote-tweet",
                description: "Take a launch you're proud of, quote-tweet your own deploy URL with the code in the reply. Free top-of-profile slot for the week.",
              },
              {
                title: "Newsletter / community footer",
                description: "If you run one - tuck the code into the closing line for two issues. Compounds without feeling pushy.",
              },
            ].map(({ title, description }) => (
              <div key={title}>
                <h3 className="text-[14px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
                  {title}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
