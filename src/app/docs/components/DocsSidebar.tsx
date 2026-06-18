"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Rocket, Users, Settings } from "lucide-react";

interface NavGroup {
  title: string;
  icon: React.ElementType;
  links: { label: string; href: string }[];
}

const navGroups: NavGroup[] = [
  {
    title: "Start here",
    icon: BookOpen,
    links: [
      { label: "Welcome", href: "/docs" },
      { label: "What is Moonshift?", href: "/docs/what-is-moonshift" },
      { label: "How it works", href: "/docs/how-it-works" },
    ],
  },
  {
    title: "Ship it",
    icon: Rocket,
    links: [
      { label: "Your first build", href: "/docs/your-first-build" },
      { label: "Site anatomy", href: "/docs/anatomy" },
      { label: "CLI", href: "/docs/cli" },
    ],
  },
  {
    title: "Your first 100",
    icon: Users,
    links: [
      { label: "0 to 100 playbook", href: "/docs/playbook" },
      { label: "Iterating", href: "/docs/iterating" },
      { label: "Sharing + domain", href: "/docs/sharing-and-domain" },
      { label: "Use cases", href: "/docs/use-cases" },
    ],
  },
  {
    title: "The basics",
    icon: Settings,
    links: [
      { label: "Pricing", href: "/docs/pricing" },
      { label: "$MNSHFT token", href: "/docs/mnshft-token" },
      { label: "FAQ", href: "/docs/faq" },
      { label: "Troubleshooting", href: "/docs/troubleshooting" },
    ],
  },
];

const sectionTitles: Record<string, string> = {
  "Start here": "Start here",
  "Ship it": "Build your first site",
  "Your first 100": "The playbook",
  "The basics": "Practical",
};

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-[280px] lg:flex-shrink-0 border-r border-border-subtle bg-bg-deep">
      <div className="p-5 lg:p-6">
        <Link
          href="/docs"
          className="flex items-center gap-2 text-[13px] font-semibold tracking-[0.05em] text-text-primary uppercase mb-8"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          <BookOpen className="w-4 h-4 text-accent" />
          Docs
        </Link>

        <nav className="space-y-8">
          {navGroups.map((group) => (
            <div key={group.title}>
              <span
                className="text-[10px] font-medium tracking-[0.2em] text-text-muted uppercase block mb-2"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                &frasl;&frasl; {group.title}
              </span>
              <h3
                className="text-[20px] font-normal text-text-primary mb-3"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {sectionTitles[group.title]}
              </h3>
              <ul className="space-y-1">
                {group.links.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-2 px-3 py-2 text-[12px] font-medium tracking-[0.08em] uppercase transition-colors ${
                          isActive
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "text-text-secondary hover:text-text-primary hover:bg-bg-surface"
                        }`}
                        style={{ fontFamily: "var(--font-space-grotesk)" }}
                      >
                        <span className={`w-1 h-1 rounded-full ${isActive ? "bg-accent" : "bg-text-muted"}`} />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
