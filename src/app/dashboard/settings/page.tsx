"use client";

import { useState } from "react";
import { ArrowRight, Bell, User, CreditCard, Plug, Share2 } from "lucide-react";
import Link from "next/link";

function Toggle({ checked, onChange }: { checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative w-10 h-5 border transition-colors ${
        checked ? "bg-accent border-accent" : "bg-bg-deep border-border-default"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 bg-white transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

function SettingCard({
  title,
  description,
  href,
  icon: Icon,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
  cta: string;
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 border border-border-subtle bg-bg-surface">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 flex items-center justify-center border border-border-subtle bg-bg-deep flex-shrink-0">
          <Icon className="w-4 h-4 text-accent" />
        </div>
        <div>
          <h3 className="text-[15px] font-medium text-text-primary mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
            {title}
          </h3>
          <p className="text-[13px] text-text-secondary leading-relaxed max-w-md">{description}</p>
        </div>
      </div>
      <Link
        href={href}
        className="inline-flex items-center gap-2 px-4 py-2 border border-border-subtle bg-bg-deep text-[11px] font-semibold tracking-[0.08em] uppercase text-text-secondary hover:text-text-primary hover:border-border-default transition-colors whitespace-nowrap self-start sm:self-auto"
      >
        {cta}
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

export default function SettingsPage() {
  const [advancedMode, setAdvancedMode] = useState(true);
  const [runMode, setRunMode] = useState("autonomous");

  return (
    <div className="animate-in fade-in duration-500 max-w-3xl">
      <div className="mb-10">
        <span
          className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-3 block"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          ACCOUNT · SETTINGS
        </span>
        <h1
          className="text-3xl md:text-4xl font-normal text-text-primary mb-3"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Settings
        </h1>
        <p className="text-[14px] text-text-secondary max-w-xl leading-relaxed">
          Everything about your Moonshift account, in one spot.
        </p>
      </div>

      <div className="border border-border-subtle bg-bg-surface mb-8">
        <div className="flex items-center justify-between px-4 py-3 border-b border-border-subtle">
          <span
            className="text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Account
          </span>
          <span
            className="text-[10px] font-semibold tracking-[0.1em] text-text-muted uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Signed in
          </span>
        </div>
        <div className="p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 shadow-[0_0_12px_rgba(236,72,153,0.25)] flex-shrink-0" />
          <div>
            <h2
              className="text-[16px] font-medium text-text-primary mb-0.5"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Mohit Sharma
            </h2>
            <p className="text-[13px] text-text-secondary font-mono">mohit.sharma80805@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border border-border-subtle bg-bg-surface mb-8">
        <div className="px-4 py-3 border-b border-border-subtle">
          <span
            className="text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Preferences
          </span>
        </div>

        <div className="p-4 space-y-6">
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-border-subtle">
            <div>
              <h3
                className="text-[13px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Advanced mode
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed max-w-lg">
                Advanced mode is on. You see everything: run ids, phases, token usage, costs, and logs. Turn this off for a friendlier, plain-language view.
              </p>
            </div>
            <Toggle checked={advancedMode} onChange={setAdvancedMode} />
          </div>

          <div className="pb-6 border-b border-border-subtle">
            <label
              className="text-[13px] font-medium text-text-primary block mb-2"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Default run mode
            </label>
            <select
              value={runMode}
              onChange={(e) => setRunMode(e.target.value)}
              className="w-full sm:w-72 h-10 px-3 bg-bg-deep border border-border-subtle text-[13px] text-text-primary focus:outline-none focus:border-accent transition-colors appearance-none"
              style={{ backgroundImage: "none" }}
            >
              <option value="autonomous">Autonomous (run end-to-end)</option>
              <option value="assisted">Assisted (ask before each phase)</option>
              <option value="review">Review (draft only, no deploy)</option>
            </select>
            <p className="text-[12px] text-text-secondary mt-2">
              Sets the default for new runs from /create. You can always override it per run.
            </p>
          </div>

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="text-[13px] font-medium text-text-primary mb-1"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Browser notifications
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                Blocked. Re-enable notifications for this site in your browser settings.
              </p>
            </div>
            <Bell className="w-5 h-5 text-text-muted flex-shrink-0" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <SettingCard
          title="Public profile"
          description="Pick your moonshift.io/u/handle, set a tagline, opt out of the weekly digest."
          href="/dashboard/settings/profile"
          icon={User}
          cta="Edit profile"
        />
        <SettingCard
          title="Billing & credits"
          description="Top up moons, review transactions, manage subscriptions, download invoices."
          href="/dashboard/billing"
          icon={CreditCard}
          cta="Manage billing"
        />
        <SettingCard
          title="Integrations"
          description="Bring-your-own Vercel team, Turso org, Cloudflare account, and other deploy targets."
          href="/dashboard/integrations"
          icon={Plug}
          cta="Manage integrations"
        />
        <SettingCard
          title="Connected publishers"
          description="Link or disconnect GitHub, LinkedIn, and X / Twitter for one-click publishing."
          href="/dashboard/integrations"
          icon={Share2}
          cta="Manage connections"
        />
      </div>
    </div>
  );
}
