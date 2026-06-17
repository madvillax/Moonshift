const steps = [
  {
    number: "01",
    label: "PROMPT TO EXECUTABLE PLAN",
    title: "Describe the outcome.",
    description: "Write what you want shipped in plain language. Moonshift turns the prompt into requirements, constraints, flows, data, gates, and a build plan you can approve.",
    cta: "Start building",
    right: {
      header: "/MOONSHIFT · PROMPT",
      blocks: [
        { icon: ">", text: "Internal admin panel", tags: "refunds · users · roles · gates" },
        { icon: "✓", text: "planner · drafting plan", tags: "users · flows · data · constraints" },
      ],
    },
  },
  {
    number: "02",
    label: "AUTONOMY BEGINS",
    title: "Approve once. Watch it build.",
    description: "Agents fan out across frontend, backend, tests, deploy, copy, and release work. Every phase streams progress so you are watching the launch, not managing tickets.",
    cta: "Start building",
    right: {
      header: "PHASE 04 · STREAMING",
      count: "14/14",
      agents: [
        { name: "planner", w: "100%" },
        { name: "backend", w: "85%" },
        { name: "frontend", w: "70%" },
        { name: "deployer", w: "55%" },
      ],
    },
  },
  {
    number: "03",
    label: "PRODUCTION-READY OUTPUT",
    title: "Wake up launched.",
    description: "A deployed URL, repository, tests, release notes, and launch assets are prepared together. The product ships with the operational pieces already connected.",
    cta: "Start building",
    right: {
      header: "PHASE 04 · DEPLOYED",
      url: "acme.moonshift.page",
      tags: ["REPO", "VERCEL", "LIVE"],
      items: [
        { icon: "✓", text: "X post · 270c", status: "drafted" },
        { icon: "✓", text: "LinkedIn · 1.1k", status: "drafted" },
        { icon: "◆", text: "Publish gate", status: "awaiting" },
      ],
    },
  },
  {
    number: "04",
    label: "TEST-AND-GATE CULTURE",
    title: "Every run is checked.",
    description: "Tests run on every build. A security scan gates every deploy. You ship clean, or you don't ship.",
    cta: "Learn about security",
    right: {
      header: "PHASE 04 · AUDIT",
      items: [
        { icon: "✓", text: "contract.json", status: "ok" },
        { icon: "✓", text: "tests.playwright", status: "14 passed" },
        { icon: "✓", text: "audit.security", status: "clean" },
      ],
    },
  },
];

export default function Workflow() {
  return (
    <section id="solutions" className="relative bg-bg-deep">
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="sticky top-[80px] md:top-[112px]"
            style={{ zIndex: index + 1 }}
          >
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
              <div className="border border-border-default bg-bg-deep overflow-hidden">
                <div className="flex flex-col md:flex-row md:min-h-[480px]">

                  <div className="flex-1 md:w-[55%] p-5 md:p-8 lg:p-10 flex flex-col justify-between min-h-[400px] md:min-h-0">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl md:text-3xl font-mono font-medium text-text-primary">
                            {step.number}
                          </span>
                          <span className="text-text-muted text-xl">/</span>
                          <span className="text-2xl md:text-3xl font-mono font-medium text-text-muted">
                            04
                          </span>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-text-muted">
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </div>

                      <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                        {step.label}
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-[44px] font-medium leading-[1.1] tracking-[-0.02em] text-text-primary mb-4 text-balance" style={{ fontFamily: "var(--font-dm-sans)" }}>
                        {step.title}
                      </h3>

                      <p className="text-[14px] md:text-[15px] leading-[1.6] text-text-secondary max-w-md text-pretty">
                        {step.description}
                      </p>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 bg-text-primary text-bg-deep rounded-full font-medium text-[14px] tracking-[0.02em] hover:scale-[1.02] transition-transform duration-150 mt-8 w-fit"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {step.cta}
                    </a>
                  </div>

                  <div className="flex-1 md:w-[45%] p-5 md:p-8 lg:p-10 flex items-center justify-center bg-[#008BFF] min-h-[300px] md:min-h-0">
                    <div className="w-full max-w-[360px] bg-[#0A0A0A] border border-[#1A1A1A] p-5">

                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#008BFF]" />
                          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#888]">
                            {step.right.header}
                          </span>
                        </div>
                        {step.right.count && (
                          <span className="text-[11px] font-mono text-[#888]">{step.right.count}</span>
                        )}
                      </div>

                      {step.right.blocks && (
                        <div className="space-y-4">
                          {step.right.blocks.map((block, i) => (
                            <div key={i} className="border-b border-[#1A1A1A] pb-4 last:border-0 last:pb-0">
                              <div className="flex items-start gap-3">
                                <span className="text-[#008BFF] text-sm mt-0.5">{block.icon}</span>
                                <div>
                                  <div className="text-[14px] font-mono text-[#F0F0F0]">{block.text}</div>
                                  <div className="text-[12px] font-mono text-[#888] mt-1">{block.tags}</div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.right.agents && (
                        <div className="space-y-4">
                          {step.right.agents.map((agent, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#008BFF]" />
                              <span className="text-[14px] font-mono text-[#B0B0B0] flex-1">{agent.name}</span>
                              <div className="w-20 h-1 bg-[#1A1A1A]">
                                <div className="h-full bg-[#008BFF]" style={{ width: agent.w }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.right.url && (
                        <div className="space-y-4">
                          <div className="flex items-center gap-3 border border-[#1A1A1A] p-3">
                            <div className="w-2 h-2 rounded-full bg-[#008BFF]" />
                            <span className="text-[14px] font-mono text-[#F0F0F0]">{step.right.url}</span>
                            <span className="text-[#888] ml-auto text-sm">→</span>
                          </div>
                          <div className="flex items-center gap-6">
                            {step.right.tags.map((tag, i) => (
                              <span key={i} className="text-[11px] font-mono uppercase tracking-[0.15em] text-[#888]">{tag}</span>
                            ))}
                          </div>
                          <div className="border-t border-[#1A1A1A] pt-4 space-y-3">
                            {step.right.items.map((item, i) => (
                              <div key={i} className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-[#008BFF] text-sm">{item.icon}</span>
                                  <span className="text-[14px] font-mono text-[#B0B0B0]">{item.text}</span>
                                </div>
                                <span className={`text-[12px] font-mono ${item.status === "awaiting" ? "text-[#008BFF]" : "text-[#888]"}`}>{item.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {step.right.items && !step.right.url && !step.right.agents && !step.right.blocks && (
                        <div className="space-y-3">
                          {step.right.items.map((item, i) => (
                            <div key={i} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-[#008BFF] text-sm">{item.icon}</span>
                                <span className="text-[14px] font-mono text-[#B0B0B0]">{item.text}</span>
                              </div>
                              <span className="text-[12px] font-mono text-[#008BFF]">{item.status}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
