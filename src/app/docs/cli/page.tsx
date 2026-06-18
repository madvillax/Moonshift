"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

const commands = [
  { command: "moonshift login", description: "Log in to your Moonshift account from the terminal." },
  { command: "moonshift init", description: "Create a new project locally and link it to Moonshift." },
  { command: "moonshift dev", description: "Run a local development server with live reload." },
  { command: "moonshift build", description: "Build your site for production." },
  { command: "moonshift deploy", description: "Deploy your site to a live URL." },
  { command: "moonshift pull", description: "Pull the latest version of your site from Moonshift." },
  { command: "moonshift push", description: "Push local changes back to Moonshift." },
];

export default function CliPage() {
  return (
    <>
      <span className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase mb-4 block" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        &frasl;&frasl; ship it
      </span>
      <h1 className="text-3xl md:text-4xl lg:text-[46px] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        CLI
      </h1>
      <p className="text-[16px] md:text-[17px] text-text-secondary leading-relaxed mb-10">
        The Moonshift CLI lets developers work locally, version control their site, and deploy from the terminal.
      </p>
      <div className="p-4 border border-border-subtle bg-bg-surface mb-10 flex items-center gap-3">
        <Terminal className="w-5 h-5 text-accent" />
        <code className="text-[13px] font-mono text-text-primary">npm install -g @moonshift/cli</code>
      </div>
      <div className="space-y-3 mb-12">
        {commands.map((cmd) => (
          <div key={cmd.command} className="p-4 border border-border-subtle bg-bg-surface">
            <code className="text-[13px] font-mono text-accent block mb-1">{cmd.command}</code>
            <p className="text-[13px] text-text-secondary">{cmd.description}</p>
          </div>
        ))}
      </div>
      <p className="text-[14px] text-text-secondary mb-6">
        Run <code className="text-[13px] font-mono text-accent">moonshift --help</code> for the full list of flags and options.
      </p>
      <Link href="/docs/playbook" className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors">
        0 to 100 playbook
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </>
  );
}
