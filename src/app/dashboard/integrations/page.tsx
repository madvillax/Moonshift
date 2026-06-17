"use client";

import { useMemo, useState } from "react";
import { Search, Plug, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

type Category = "All" | "Deploy" | "Social" | "Database" | "Advertising";

interface Integration {
  id: string;
  name: string;
  description: string;
  category: Category;
  logo: React.ReactNode;
  colors: {
    light: string;
    dark: string;
  };
}

const categories: Category[] = ["All", "Deploy", "Social", "Database", "Advertising"];

const LogoVercel = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="m12 1.608 12 20.784H0Z" />
  </svg>
);

const LogoNetlify = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M6.49 19.04h-.23L5.13 17.9v-.23l1.73-1.71h1.2l.15.15v1.2L6.5 19.04ZM5.13 6.31V6.1l1.13-1.13h.23L8.2 6.68v1.2l-.15.15h-1.2L5.13 6.31Zm9.96 9.09h-1.65l-.14-.13v-3.83c0-.68-.27-1.2-1.1-1.23-.42 0-.9 0-1.43.02l-.07.08v4.96l-.14.14H8.9l-.13-.14V8.73l.13-.14h3.7a2.6 2.6 0 0 1 2.61 2.6v4.08l-.13.14Zm-8.37-2.44H.14L0 12.82v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14Zm17.14 0h-6.58l-.14-.14v-1.64l.14-.14h6.58l.14.14v1.64l-.14.14ZM11.05 6.55V1.64l.14-.14h1.65l.14.14v4.9l-.14.14h-1.65l-.14-.13Zm0 15.81v-4.9l.14-.14h1.65l.14.13v4.91l-.14.14h-1.65l-.14-.14Z" />
  </svg>
);

const LogoGitHub = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LogoCloudflare = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727" />
  </svg>
);

const LogoTurso = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="m23.31.803-.563-.42-1.11 1.189-.891-1.286-.512.235.704 1.798-.326.35L18.082 0l-.574.284 2.25 4.836-2.108.741h-.05l-1.143-1.359-1.144 1.36H8.687l-1.144-1.36-1.146 1.363H6.36l-2.12-.745L6.491.284 5.919 0l-2.53 2.668-.327-.349.705-1.798-.512-.236-.89 1.287L1.253.382.69.804 2.42 3.69l-.89.939.311 2.375 2.061.787L3.9 8.817H1.947v.444l.755 1.078 1.197.433v6.971l3.057 4.55L7.657 24l1.101-1.606L9.9 24l.999-1.606L12 24l1.102-1.606L14.1 24l1.141-1.606L16.343 24l.701-1.706 3.058-4.55v-6.972l1.196-.433.756-1.078v-.444h-1.952l.003-1.03 2.054-.784.311-2.375-.89-.939zm-8.93 18.718H8.033l.793-1.615.794 1.615.793-1.083.793 1.083.794-1.083.793 1.083.794-1.083.793 1.083.793-1.615.794 1.615zm3.886-7.39-3.3 1.084-.143 3.061-2.827.627-2.826-.627-.142-3.06-3.3-1.085v-1.635l4.266 1.21-.052 4.126h4.109l-.052-4.127 4.266-1.209z" />
  </svg>
);

const LogoLinkedIn = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LogoX = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z" />
  </svg>
);

const LogoMeta = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z" />
  </svg>
);

const integrations: Integration[] = [
  {
    id: "vercel",
    name: "Vercel",
    description: "Deploy your agents to the fastest edge network with one click.",
    category: "Deploy",
    logo: <LogoVercel />,
    colors: { light: "#000000", dark: "#FFFFFF" },
  },
  {
    id: "netlify",
    name: "Netlify",
    description: "Ship static and serverless agent frontends in seconds.",
    category: "Deploy",
    logo: <LogoNetlify />,
    colors: { light: "#00D1B2", dark: "#00D1B2" },
  },
  {
    id: "github",
    name: "GitHub",
    description: "Sync repos, trigger workflows and version your prompts.",
    category: "Deploy",
    logo: <LogoGitHub />,
    colors: { light: "#181717", dark: "#FFFFFF" },
  },
  {
    id: "cloudflare",
    name: "Cloudflare",
    description: "Run agents on Workers and protect them behind the edge.",
    category: "Deploy",
    logo: <LogoCloudflare />,
    colors: { light: "#F48120", dark: "#F48120" },
  },
  {
    id: "turso",
    name: "Turso",
    description: "Store agent memory, logs and state in edge SQLite.",
    category: "Database",
    logo: <LogoTurso />,
    colors: { light: "#0A4D40", dark: "#4FF8D2" },
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Publish agent updates and reach professional audiences.",
    category: "Social",
    logo: <LogoLinkedIn />,
    colors: { light: "#0A66C2", dark: "#0A66C2" },
  },
  {
    id: "x",
    name: "X",
    description: "Deploy agents that post, reply and monitor in real time.",
    category: "Social",
    logo: <LogoX />,
    colors: { light: "#000000", dark: "#FFFFFF" },
  },
  {
    id: "meta",
    name: "Meta Ads",
    description: "Connect ad accounts to automate campaigns and creative tests.",
    category: "Advertising",
    logo: <LogoMeta />,
    colors: { light: "#0081FB", dark: "#0081FB" },
  },
];

export default function IntegrationsPage() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");
  const [connected, setConnected] = useState<Record<string, boolean>>({
    github: true,
    vercel: true,
  });

  const filtered = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const toggleConnection = (id: string) => {
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center justify-center w-10 h-10 border border-border-subtle bg-bg-surface">
            <Plug className="w-5 h-5 text-accent" />
          </div>
          <h1
            className="text-2xl md:text-3xl font-normal tracking-tight text-text-primary"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Integrations
          </h1>
        </div>
        <p className="text-[14px] text-text-secondary max-w-xl">
          Connect the tools you already use to deploy, promote and operate your agents.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-[13px] font-medium tracking-wide border transition-colors duration-200 ${
                activeCategory === category
                  ? "bg-accent text-white border-accent"
                  : "bg-bg-surface text-text-secondary border-border-subtle hover:border-border-default hover:text-text-primary"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search integrations..."
            className="w-full h-10 pl-9 pr-4 bg-bg-surface border border-border-subtle text-[13px] text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 border border-border-subtle bg-bg-surface">
          <Plug className="w-8 h-8 text-text-muted mb-3" />
          <p className="text-[14px] text-text-secondary">No integrations found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((item) => {
            const isConnected = connected[item.id];
            return (
              <div
                key={item.id}
                className="group relative flex flex-col p-5 border border-border-subtle bg-bg-surface hover:border-border-default transition-colors duration-200"
              >
                <div className="mb-4">
                  <div
                    className="w-11 h-11 flex items-center justify-center p-2.5 border border-border-subtle bg-bg-deep"
                    style={{ color: theme === "dark" ? item.colors.dark : item.colors.light }}
                  >
                    {item.logo}
                  </div>
                </div>

                <h3
                  className="text-[16px] font-medium text-text-primary mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {item.name}
                </h3>
                <p className="text-[13px] text-text-secondary leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                <button
                  onClick={() => toggleConnection(item.id)}
                  className={`self-start inline-flex items-center gap-2 px-4 py-2 text-[12px] font-semibold tracking-wide border transition-colors duration-200 ${
                    isConnected
                      ? "bg-bg-deep border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-default"
                      : "bg-accent text-white border-accent hover:bg-accent/90"
                  }`}
                >
                  {isConnected ? "DISCONNECT" : "CONNECT"}
                  {!isConnected && <ArrowUpRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
