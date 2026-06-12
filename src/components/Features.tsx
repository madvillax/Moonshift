"use client";

const features = [
  {
    id: "deploy",
    title: "One-Prompt Deploy",
    description: "Describe your app in plain text. Moonshift plans, builds, tests, and deploys it in ~6 minutes.",
    visual: "deploy",
  },
  {
    id: "infra",
    title: "Your Infra, Your Code",
    description: "Repo on your GitHub. Deployed to your Vercel. You own every line of code.",
    visual: "infra",
  },
  {
    id: "marketing",
    title: "Marketing on Autopilot",
    description: "Launch posts for X and LinkedIn are drafted automatically. One-click approval.",
    visual: "marketing",
  },
  {
    id: "url",
    title: "Branded URL + Custom Domain",
    description: "Get yourapp.moonshift.page instantly. Connect your own domain in one click.",
    visual: "url",
  },
  {
    id: "security",
    title: "Testing + Security Audit",
    description: "Automated tests and security audits run before every deploy. Vulnerabilities caught early.",
    visual: "security",
  },
  {
    id: "maintain",
    title: "Never-Stop Maintenance",
    description: "Agents keep monitoring, patching, and optimizing performance after you ship.",
    visual: "maintain",
  },
];

function DeployVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full border border-border-default bg-bg-surface p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-[#FF5F57]" />
          <div className="w-2 h-2 bg-[#FEBC2E]" />
          <div className="w-2 h-2 bg-[#28C840]" />
          <span className="text-[8px] font-mono text-text-muted ml-2">app.moonshift.page</span>
        </div>
        <div className="w-8 h-8 bg-[#008BFF] mb-2" />
        <div className="w-24 h-2 bg-border-default mb-1" />
        <div className="w-16 h-2 bg-border-default" />
      </div>
    </div>
  );
}

function InfraVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="rgba(0,139,255,0.15)" strokeWidth="1" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="rgba(0,139,255,0.1)" strokeWidth="1" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="45" ry="15" fill="none" stroke="rgba(0,139,255,0.1)" strokeWidth="1" transform="rotate(120 50 50)" />
          <path d="M50 20 L65 40 L65 60 L50 70 L35 60 L35 40 Z" fill="#008BFF" opacity="0.8" />
          <path d="M50 20 L50 70" stroke="#0050B3" strokeWidth="2" />
          <path d="M35 40 L65 40" stroke="#0050B3" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}

function MarketingVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4 gap-3">
      <div className="w-10 h-10 border border-border-default flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#008BFF]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <div className="w-10 h-10 border border-border-default flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#008BFF]">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </div>
      <div className="w-10 h-10 border border-border-default flex items-center justify-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#008BFF]">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </div>
    </div>
  );
}

function URLVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full space-y-3">
        <div className="flex items-center gap-2 border border-border-default bg-bg-surface p-3">
          <div className="w-2 h-2 bg-[#FF5F57]" />
          <div className="w-2 h-2 bg-[#FEBC2E]" />
          <div className="w-2 h-2 bg-[#28C840]" />
          <div className="flex-1 h-5 bg-bg-elevated flex items-center px-2">
            <span className="text-[9px] font-mono text-text-muted">yourapp.moonshift.page</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[10px] font-mono text-text-muted">or</span>
        </div>
        <div className="flex items-center gap-2 border border-border-default bg-bg-surface p-3">
          <div className="w-2 h-2 bg-[#FF5F57]" />
          <div className="w-2 h-2 bg-[#FEBC2E]" />
          <div className="w-2 h-2 bg-[#28C840]" />
          <div className="flex-1 h-5 bg-bg-elevated flex items-center px-2">
            <span className="text-[9px] font-mono text-[#008BFF]">yourapp.com</span>
          </div>
          <span className="text-[8px] font-mono uppercase tracking-wider text-[#22C55E] border border-[#22C55E] px-1.5 py-0.5">Custom</span>
        </div>
      </div>
    </div>
  );
}

function SecurityVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full border border-border-default bg-bg-surface p-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 border border-[#008BFF] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#008BFF" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-text-muted">Security Check</span>
        </div>
        <div className="space-y-3">
          {[
            { label: "Tests Passed", status: "14/14" },
            { label: "Security Scan", status: "Clean" },
            { label: "Ready to Deploy", status: "Yes" },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-text-secondary">{item.label}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-[#22C55E]">{item.status}</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full h-1 bg-bg-elevated mt-3">
          <div className="h-full bg-[#008BFF] w-full" />
        </div>
      </div>
    </div>
  );
}

function MaintainVisual() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full border border-border-default bg-bg-surface p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[9px] font-mono uppercase tracking-[0.15em] text-text-muted">System Health</span>
          <span className="text-[9px] font-mono text-[#008BFF]">99.9% uptime</span>
        </div>
        <div className="space-y-2">
          {[85, 70, 60].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#008BFF]" />
              <div className="flex-1 h-2 bg-bg-elevated">
                <div className="h-full bg-[#008BFF]" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const visualMap: Record<string, React.FC> = {
  deploy: DeployVisual,
  infra: InfraVisual,
  marketing: MarketingVisual,
  url: URLVisual,
  security: SecurityVisual,
  maintain: MaintainVisual,
};

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const Visual = visualMap[feature.visual];
  return (
    <div className="border border-border-default bg-bg-deep overflow-hidden flex flex-col h-[320px]">
      <div className="h-[160px] relative overflow-hidden">
        <Visual />
      </div>
      <div className="p-5 border-t border-border-default flex-1">
        <h3 className="text-lg font-medium text-text-primary mb-2" style={{ fontFamily: "var(--font-dm-sans)" }}>
          {feature.title}
        </h3>
        <p className="text-[13px] leading-[1.6] text-text-secondary font-sans">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative bg-bg-deep py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            Platform Features
          </div>
          <h2 className="text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-text-primary md:text-5xl lg:text-6xl" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Everything you need to ship faster.
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.7] text-text-secondary font-sans">
            From one prompt to a deployed product — Moonshift handles the entire lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-border-default border border-border-default" style={{ contain: "layout style" }}>
          {features.map((feature) => (
            <div key={feature.id} className="bg-bg-deep">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
