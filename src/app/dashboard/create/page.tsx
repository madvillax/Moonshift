"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Zap,
  Box,
  Rocket,
  ArrowRight,
  Mic,
  Paperclip,
  ChevronDown,
  MessageSquare,
  Wand2,
} from "lucide-react";

type Mode = "fast" | "standard" | "full";

const modes: { id: Mode; label: string; icon: typeof Zap; estimate: string; price: string }[] = [
  { id: "fast", label: "FAST", icon: Zap, estimate: "deploys app · ~3m", price: "~$0.50" },
  { id: "standard", label: "STANDARD", icon: Box, estimate: "real deploy · ~8m", price: "~$2.50" },
  { id: "full", label: "FULL", icon: Rocket, estimate: "deploys app · ~12m", price: "~$6.00" },
];

const categories = [
  "Tasks & Workflows",
  "CRM & Sales",
  "Content & Sites",
  "Finance",
  "Booking",
  "More",
];

const projectTypes = [
  "Auto-detect",
  "Web app",
  "Backend",
  "CLI",
  "Chatbot",
  "SDK/Library",
  "MCP server",
  "Browser Extension",
];

const MIN_TEXTAREA_HEIGHT = 40;
const MAX_TEXTAREA_HEIGHT = 160;

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState<Mode>("standard");
  const [projectType, setProjectType] = useState("Auto-detect");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const activeMode = modes.find((m) => m.id === mode)!;

  const adjustTextareaHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    const nextHeight = Math.max(Math.min(el.scrollHeight, MAX_TEXTAREA_HEIGHT), MIN_TEXTAREA_HEIGHT);
    el.style.height = `${nextHeight}px`;
  }, []);

  useEffect(() => {
    adjustTextareaHeight();
  }, [prompt, adjustTextareaHeight]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const appendCategory = (category: string) => {
    const prefix = prompt.length > 0 && !prompt.endsWith(" ") ? " " : "";
    setPrompt((prev) => `${prev}${prefix}Build a ${category.toLowerCase()} app that `.trimStart());
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-deep text-text-primary animate-in fade-in duration-500">
      <main className="flex-1 flex flex-col items-center px-6 py-12 md:py-20">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-text-primary mb-10 text-center"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          What do you want to launch?
        </h1>

        <div className="w-full max-w-[640px] border border-border-default bg-bg-elevated flex flex-col">
          <div className="px-5 py-4">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the app you want to create..."
              rows={1}
              className="w-full min-h-[40px] max-h-[160px] overflow-y-auto bg-transparent text-text-primary text-[15px] leading-[1.5] placeholder:text-text-muted outline-none resize-none py-0"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            />
          </div>

          <div className="border-t border-border-subtle px-4 py-3 flex items-center justify-between gap-3 bg-bg-surface/50">
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors">
                <Paperclip className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors">
                <Wand2 className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors">
                <Mic className="w-4 h-4" />
              </button>
              <button className="w-9 h-8 flex items-center justify-center bg-accent text-white hover:opacity-90 transition-opacity">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="border-t border-border-subtle px-4 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-bg-surface/30">
            <div className="flex items-center gap-2 border border-border-default bg-bg-deep w-fit">
              {modes.map((m) => {
                const Icon = m.icon;
                const isActive = mode === m.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.1em] transition-all ${
                      isActive
                        ? "bg-accent text-white"
                        : "text-text-secondary hover:bg-accent/10 hover:text-text-primary"
                    }`}
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    title={`${m.estimate} · ${m.price}`}
                  >
                    <Icon className="h-3 w-3" />
                    {m.label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-3">
              <div className="text-[10px] font-mono text-text-muted">{activeMode.estimate} · {activeMode.price}</div>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-bg-deep border border-border-subtle text-text-primary text-[11px] py-1.5 pl-3 pr-2 hover:border-text-muted transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {projectType}
                  <ChevronDown className={`w-3 h-3 text-text-muted transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute right-0 bottom-full mb-1 w-44 border border-border-default bg-bg-surface shadow-lg z-10">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        onClick={() => {
                          setProjectType(type);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-[12px] transition-colors ${
                          projectType === type
                            ? "bg-accent/10 text-accent"
                            : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
                        }`}
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[640px] mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => appendCategory(category)}
              className="px-3 py-1.5 text-[11px] font-medium tracking-wide text-text-secondary border border-border-subtle bg-bg-surface hover:border-text-muted hover:text-text-primary transition-colors"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="mt-6 text-[13px] text-text-muted">
          Need your own agent?{" "}
          <a href="#" className="text-accent hover:underline">
            Create superagent
          </a>
        </p>
      </main>

      <button className="fixed bottom-6 right-6 flex items-center gap-2 px-4 py-2.5 border border-border-default bg-bg-surface text-text-secondary hover:text-text-primary hover:border-text-muted transition-colors text-[11px] font-medium uppercase tracking-[0.1em] shadow-lg">
        <MessageSquare className="w-3.5 h-3.5" />
        FEEDBACK
      </button>
    </div>
  );
}
