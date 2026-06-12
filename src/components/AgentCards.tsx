"use client";


import {
  Brain,
  Database,
  Code2,
  Layout,
  TestTube2,
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Megaphone,
  ImageIcon,
  Bug,
} from "lucide-react";

const agents = [
  {
    icon: Brain,
    label: "PLANNING",
    name: "Planning Agent",
    status: "Active",
    description: "Architects the entire application structure and defines the technical stack.",
  },
  {
    icon: Database,
    label: "DATA LAYER",
    name: "Database Agent",
    status: "Active",
    description: "Designs schemas, writes migrations, and manages the data layer.",
  },
  {
    icon: Code2,
    label: "BACKEND",
    name: "Backend Agent",
    status: "Active",
    description: "Builds APIs, authentication, and core business logic.",
  },
  {
    icon: Layout,
    label: "FRONTEND",
    name: "Frontend Agent",
    status: "Active",
    description: "Creates responsive UI components and connects to APIs.",
  },
  {
    icon: TestTube2,
    label: "QA",
    name: "Testing Agent",
    status: "Active",
    description: "Validates functionality end-to-end with automated test suites.",
  },
  {
    icon: ShieldCheck,
    label: "SECURITY",
    name: "Security Agent",
    status: "Active",
    description: "Scans for vulnerabilities and ensures secure defaults.",
  },
  {
    icon: Rocket,
    label: "DEVOPS",
    name: "Deployment Agent",
    status: "Active",
    description: "Configures CI/CD and deploys to production infrastructure.",
  },
  {
    icon: Megaphone,
    label: "GROWTH",
    name: "Marketing Agent",
    status: "Standby",
    description: "Generates promotional content and SEO metadata.",
  },
  {
    icon: Bug,
    label: "MAINTENANCE",
    name: "Issue Resolution",
    status: "Standby",
    description: "Monitors logs, fixes bugs, and handles incidents automatically.",
  },
];

export default function AgentCards() {
  return (
    <section id="showcase" className="relative py-32 bg-bg-deep">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="mb-20">
          <div className="text-[11px] md:text-[13px] font-medium uppercase tracking-[0.1em] text-text-muted mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
            THE AGENT SYSTEM
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-text-primary max-w-2xl leading-[1.1]" style={{ fontFamily: "var(--font-dm-sans)" }}>
            A specialized team of <span className="text-text-secondary">AI developers</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            const isActive = agent.status === "Active";
            
            return (
              <div
                key={agent.name}
                className="group bg-bg-surface border border-border-subtle rounded-none p-6 hover:border-border-default transition-colors duration-150 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-text-muted group-hover:text-text-primary transition-colors" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                      {agent.label}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-none border text-[11px] font-medium ${
                    isActive 
                      ? 'bg-[#22C55E]/10 text-[#22C55E] border-[#22C55E]/20' 
                      : 'bg-bg-elevated text-text-muted border-border-subtle'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#22C55E]' : 'bg-text-muted'}`} />
                    {agent.status}
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-text-primary" style={{ fontFamily: "var(--font-dm-sans)" }}>{agent.name}</h3>
                <p className="text-[15px] text-text-secondary leading-[1.6] mb-6 flex-grow">
                  {agent.description}
                </p>
                
                <div className="mt-auto pt-4 border-t border-border-subtle">
                  <a href="#" className="inline-flex items-center text-[14px] font-medium text-text-muted group-hover:text-text-primary transition-colors" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    View capabilities &rarr;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
