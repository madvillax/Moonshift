"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LayoutGrid, Plus, MessageSquare, Layers, Code, Moon, Sun, Eye, Paintbrush, Megaphone, Terminal, Paperclip, ArrowRight, Loader2, Hand, ChevronDown, Mic, ArrowUp, Folder, Monitor, GitBranch, PanelRightClose, PanelRight, Maximize2, MoreHorizontal, Target, Send } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import DashboardSidebar from "@/components/DashboardSidebar";

export default function CodePage() {
  const { theme, toggleTheme } = useTheme();
  const [prompt, setPrompt] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-bg-deep text-text-primary font-sans animate-in fade-in duration-500">
       <DashboardSidebar />

       {/* Main Layout Area */}
       <div className="flex-1 flex flex-col min-w-0">
          {/* Top Navbar */}
          <header className="h-[56px] flex-shrink-0 border-b border-border-subtle bg-bg-deep flex items-center justify-between px-6 z-10">
             <div className="flex items-center gap-2">
                 <Image src="/branding/moonshift-wordmark.svg" alt="Moonshift" width={110} height={22} className="object-contain object-left" style={theme !== "light" ? { filter: "brightness(0) invert(1)" } : {}} />
             </div>
             
             <div className="flex items-center gap-4">
                <div className="px-3 py-1 text-[11px] font-medium tracking-wide border border-border-default rounded-full text-text-secondary bg-bg-surface">
                   Spent 0
                </div>
                <div className="w-px h-4 bg-border-default hidden sm:block" />
                <button className="text-text-secondary hover:text-text-primary transition-colors">
                   <Code className="w-4 h-4" />
                </button>
                <button onClick={toggleTheme} className="text-text-secondary hover:text-text-primary transition-colors">
                   {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)} 
                  className={`text-text-secondary hover:text-text-primary transition-colors ${!isSidebarOpen ? "text-accent" : ""}`}
                  title="Toggle Sidebar"
                >
                   {isSidebarOpen ? <PanelRightClose className="w-4 h-4" /> : <PanelRight className="w-4 h-4" />}
                </button>
             </div>
          </header>

          {/* 2-Column Area */}
          <div className="flex-1 flex overflow-hidden">
             
             {/* Left: Preview Area */}
             <div className="flex-1 border-r border-border-subtle bg-bg-deep flex flex-col min-w-0">
                {/* Tabs */}
                <div className="h-[44px] flex items-center gap-6 px-4 border-b border-border-subtle bg-bg-surface overflow-x-auto text-[12px] font-medium">
                   <button className="flex items-center gap-2 h-full text-text-primary border-b-2 border-text-primary">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Preview</span>
                   </button>
                   <button className="flex items-center gap-2 h-full text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                      <Code className="w-3.5 h-3.5" />
                      <span>Code</span>
                   </button>
                   <button className="flex items-center gap-2 h-full text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                      <Paintbrush className="w-3.5 h-3.5" />
                      <span>Design</span>
                   </button>
                   <button className="flex items-center gap-2 h-full text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                      <Megaphone className="w-3.5 h-3.5" />
                      <span>Marketing</span>
                   </button>
                   <button className="flex items-center gap-2 h-full text-text-secondary hover:text-text-primary transition-colors border-b-2 border-transparent">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>Logs</span>
                   </button>
                </div>
                
                {/* Working Loader Area */}
                <div className="flex-1 flex flex-col items-center justify-center p-8 bg-bg-deep relative">
                   <div className="absolute top-4 left-4 flex items-center gap-2 text-[12px] text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      Working...
                   </div>

                   <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full border border-border-default text-[10px] text-text-muted bg-bg-surface">
                      v1
                   </div>
                </div>
              </div>

             {/* Right: Prompt Sidebar */}
             <div 
               className={`flex-shrink-0 bg-bg-deep flex flex-col border-l border-border-subtle transition-all duration-300 ease-in-out z-10 ${
                 isSidebarOpen ? "w-[450px] translate-x-0 opacity-100" : "w-0 translate-x-[450px] opacity-0 pointer-events-none"
               }`}
             >
                {/* Header */}
                <div className="h-[44px] flex items-center justify-between px-4 border-b border-border-subtle bg-bg-deep text-[13px]">
                   <div className="font-medium text-text-primary truncate pr-4">Shell Script Sum Using Arguments</div>
                   <div className="flex items-center gap-1 text-text-secondary flex-shrink-0">
                      <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-bg-surface transition-colors">
                         <Plus className="w-4 h-4" />
                      </button>
                      <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-bg-surface transition-colors">
                         <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                      <button className="w-7 h-7 flex items-center justify-center rounded hover:bg-bg-surface transition-colors">
                         <MoreHorizontal className="w-4 h-4" />
                      </button>
                   </div>
                </div>

                {/* Chat History */}
                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6 text-[13px] bg-bg-deep">
                   {/* Chat messages will appear here */}
                </div>
                
                {/* Input Area */}
                <div className="p-4 bg-bg-deep border-t border-border-subtle">
                   <div className="relative border border-border-default rounded-lg bg-bg-surface focus-within:border-text-muted transition-colors">
                      <textarea
                         value={prompt}
                         onChange={(e) => setPrompt(e.target.value)}
                         placeholder="Message the Agent, @ to include context, / for commands"
                         rows={3}
                         className="w-full bg-transparent text-[13px] text-text-primary placeholder:text-text-muted outline-none resize-none px-3 pt-3 pb-8 font-mono"
                         style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      />
                      <button className="absolute top-3 right-3 text-text-secondary hover:text-text-primary transition-colors">
                         <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      {/* Bottom Toolbar */}
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                         <div className="flex items-center gap-1 text-text-secondary">
                            <button className="w-6 h-6 flex items-center justify-center hover:text-text-primary transition-colors rounded">
                               <Plus className="w-4 h-4" />
                            </button>
                         </div>
                         <div className="flex items-center gap-2">
                            <button className={`w-6 h-6 flex items-center justify-center rounded transition-all ${
                              prompt.trim().length > 0 
                                ? "text-text-primary" 
                                : "text-text-muted cursor-not-allowed"
                            }`}>
                               <Send className="w-3.5 h-3.5" />
                            </button>
                         </div>
                      </div>
                   </div>
                </div>
             </div>

          </div>
       </div>
    </div>
  );
}
