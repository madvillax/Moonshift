"use client";

import { useState } from "react";
import { ArrowRight } from "iconoir-react";

type Source = "url" | "github" | "existing" | "zip";

const sources: { id: Source; label: string; description: string }[] = [
  { id: "url", label: "URL", description: "scrape live page" },
  { id: "github", label: "GITHUB", description: "public or private repo" },
  { id: "existing", label: "EXISTING RUN", description: "from your moonshift runs" },
  { id: "zip", label: "UPLOAD ZIP", description: "from local archive" },
];

export default function LaunchPage() {
  const [source, setSource] = useState<Source>("url");
  const [url, setUrl] = useState("");

  const sourceConfig = {
    url: {
      inputLabel: "LIVE PRODUCT URL",
      placeholder: "https://yourapp.com",
      helper: "We scrape the page and a full-page screenshot. Works with apps from Lovable, Bolt, v0, Vercel, or anywhere on the web.",
    },
    github: {
      inputLabel: "GITHUB REPO URL",
      placeholder: "https://github.com/username/repo",
      helper: "We read the repo, generate a README, and build a launch kit from your codebase.",
    },
    existing: {
      inputLabel: "SELECT RUN",
      placeholder: "Choose a run...",
      helper: "Pick a previous Moonshift run to generate launch assets from.",
    },
    zip: {
      inputLabel: "UPLOAD ARCHIVE",
      placeholder: "Drop .zip file here",
      helper: "Upload a local project archive and we'll build the launch kit.",
    },
  };

  const active = sourceConfig[source];

  return (
    <div className="min-h-screen flex flex-col bg-bg-deep text-text-primary animate-in fade-in duration-500">
      <main className="flex-1 flex flex-col items-center px-6 py-10 md:py-16">
        <h1
          className="text-3xl md:text-4xl font-normal tracking-tight text-text-primary mb-3 text-center"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What do you want to launch?
        </h1>
        <p className="text-[14px] text-text-secondary tracking-wide mb-8 text-center">
          Existing product · ~30 sec · launch kit + branded PDF
        </p>

        <div className="w-full max-w-[920px] border border-border-default bg-bg-elevated flex flex-col">
          <div className="p-5 sm:p-7 md:p-9">
            <span
              className="text-[11px] font-mono tracking-[0.18em] text-text-muted uppercase"
            >
              {'// SOURCE'}
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-4">
              {sources.map((s) => {
                const isActive = source === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSource(s.id)}
                    className={`text-left min-h-[120px] p-4 border transition-colors ${
                      isActive
                        ? "border-accent bg-accent-dim/40"
                        : "border-border-default bg-bg-deep hover:border-text-muted hover:bg-bg-surface"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-accent" : "bg-text-muted"}`} />
                      <span
                        className={`text-[12px] font-medium uppercase tracking-[0.16em] ${
                          isActive ? "text-accent" : "text-text-primary"
                        }`}
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        {s.label}
                      </span>
                    </div>
                    <span className="block text-[13px] leading-relaxed text-text-secondary">{s.description}</span>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-border-subtle my-7" />

            <div className="flex flex-col gap-3">
              <span
                className="text-[11px] font-mono tracking-[0.18em] text-text-muted uppercase"
              >
                {active.inputLabel}
              </span>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder={active.placeholder}
                className="w-full bg-bg-deep border border-border-subtle px-4 py-3.5 text-text-primary text-[15px] placeholder:text-text-muted outline-none hover:border-text-muted focus:border-accent transition-colors"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
              <p className="text-[13px] text-text-secondary leading-relaxed max-w-[780px]">
                {active.helper}
              </p>
            </div>

            <button className="w-full mt-8 flex items-center justify-between px-5 py-4 bg-accent/80 hover:bg-accent text-white transition-colors group">
              <span
                className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em]"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                <span className="w-2 h-2 rounded-full bg-white/70" />
                GENERATE LAUNCH KIT
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="mt-5 text-center text-[10px] sm:text-[11px] font-mono tracking-widest text-text-muted uppercase">
              FIRST KIT FREE · THEN 500 MOONS · REGENERATE PER ITEM 25 MOONS
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
