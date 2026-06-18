"use client";

import { useState } from "react";
import { Star, ExternalLink, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  type: string;
  status: "live" | "draft" | "building";
  updatedAt: string;
  fav: boolean;
}

const initialProjects: Project[] = [
  { id: "1", name: "SaaS Dashboard", type: "Web app", status: "live", updatedAt: "2 days ago", fav: true },
  { id: "2", name: "Portfolio Site", type: "Landing page", status: "live", updatedAt: "1 week ago", fav: true },
  { id: "3", name: "Trip Planner", type: "Web app", status: "draft", updatedAt: "3 days ago", fav: false },
  { id: "4", name: "Bookshelf Online", type: "Web app", status: "building", updatedAt: "Just now", fav: false },
  { id: "5", name: "Dog Walker Finder", type: "Mobile app", status: "draft", updatedAt: "2 weeks ago", fav: false },
  { id: "6", name: "Budget Tracker", type: "Web app", status: "live", updatedAt: "5 days ago", fav: true },
];

function CreditWidget() {
  const remaining = 10000;
  const total = 10000;
  const percentage = Math.round((remaining / total) * 100);

  return (
    <div className="p-4 border border-border-subtle bg-bg-surface">
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[11px] font-medium tracking-[0.15em] text-text-muted uppercase"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Current credit usage
        </span>
        <span className="text-[13px] text-text-secondary">Free plan</span>
      </div>
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-xl font-normal text-text-primary"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {remaining.toLocaleString()} / {total.toLocaleString()} moons
        </span>
        <span className="text-[13px] text-text-secondary">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-bg-deep border border-border-subtle">
        <div className="h-full bg-accent transition-all duration-500" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [projects, setProjects] = useState(initialProjects);

  const toggleFav = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, fav: !p.fav } : p))
    );
  };

  const statusClasses: Record<Project["status"], string> = {
    live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    draft: "bg-text-muted/10 text-text-muted border-text-muted/30",
    building: "bg-accent/10 text-accent border-accent/30",
  };

  return (
    <div className="flex flex-col gap-8 pb-20 pt-6 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span
            className="text-[11px] font-medium tracking-[0.2em] text-text-muted uppercase block mb-2"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            OPERATOR CONSOLE
          </span>
          <h1
            className="text-3xl md:text-4xl font-normal tracking-tight text-text-primary"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Your projects
          </h1>
        </div>
        <Link
          href="/dashboard/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-white text-[12px] font-semibold tracking-[0.05em] uppercase hover:bg-accent/90 transition-colors self-start md:self-auto"
        >
          <Plus className="w-4 h-4" />
          New project
        </Link>
      </div>

      <CreditWidget />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative p-4 border border-border-subtle bg-bg-surface hover:border-border-default transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-border-subtle bg-bg-deep flex items-center justify-center text-[15px] font-medium text-text-secondary">
                  {project.name.charAt(0)}
                </div>
                <div>
                  <h3
                    className="text-[15px] font-medium text-text-primary"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {project.name}
                  </h3>
                  <span className="text-[12px] text-text-secondary">{project.type}</span>
                </div>
              </div>
              <button
                onClick={() => toggleFav(project.id)}
                className={`p-1.5 border transition-colors ${
                  project.fav
                    ? "border-accent/30 bg-accent/10 text-accent"
                    : "border-border-subtle bg-bg-deep text-text-muted hover:text-text-primary"
                }`}
                title={project.fav ? "Unfavorite" : "Favorite"}
              >
                <Star className={`w-3.5 h-3.5 ${project.fav ? "fill-current" : ""}`} />
              </button>
            </div>

            <div className="flex items-center justify-between mb-4">
              <span
                className={`px-2 py-0.5 text-[10px] font-semibold tracking-wide uppercase border ${statusClasses[project.status]}`}
              >
                {project.status}
              </span>
              <span className="text-[11px] text-text-muted">{project.updatedAt}</span>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-border-subtle bg-bg-deep text-[11px] font-medium uppercase tracking-[0.08em] text-text-secondary hover:text-text-primary hover:border-border-default transition-colors">
                Open
                <ExternalLink className="w-3 h-3" />
              </button>
              <button className="p-2 border border-border-subtle bg-bg-deep text-text-secondary hover:text-text-primary hover:border-border-default transition-colors">
                <MoreHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
