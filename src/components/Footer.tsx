"use client";

import { ExternalLink, Globe, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  PRODUCT: [
    { name: "Showcase", href: "#showcase" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
  ],
  RESOURCES: [
    { name: "Docs", href: "#docs" },
    { name: "Blog", href: "#blog" },
    { name: "About", href: "#about" },
    { name: "Status", href: "#status" },
  ],
  LEGAL: [
    { name: "Privacy", href: "#privacy" },
    { name: "Terms", href: "#terms" },
    { name: "AUP", href: "#aup" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: ExternalLink, href: "#", label: "External" },
  { icon: Mail, href: "#", label: "Email" },
];

const clouds = [
  { className: "left-[4%] top-[14%] scale-[0.9]", delay: 0 },
  { className: "left-[-3%] top-[60%] scale-[1.25]", delay: 1.4 },
  { className: "left-[42%] top-[22%] scale-[0.95]", delay: 0.7 },
  { className: "left-[58%] top-[63%] scale-[1.35]", delay: 2 },
  { className: "left-[80%] top-[20%] scale-[0.8]", delay: 1.1 },
];

const cloudArt = [
  "....................",
  "........WWW.........",
  "......WWWWW..WW.....",
  ".....WWWWWWWWWWW....",
  "...LLLWWWWWWWWWWWW..",
  "..LLLLLWWWWWWWWWWWW.",
  ".LLLLLLLWWWWWWWWLLL.",
  "LLLLLLLLLLLLLLLLLLL.",
  ".LLLLLLLLLLLLLLLLL..",
  "...BBBBBBBBBBBBB....",
];

const cloudColors: Record<string, string> = {
  B: "rgba(0,139,255,0.28)",
  L: "#DDEFFF",
  W: "#FFFFFF",
};

const shipArt = [
  "........BB....",
  "......BBBBB...",
  "....BBWWWWBB.",
  "..BBKWWWCWWB",
  "BBBBKKWWWWWB",
  "..BBKWWWCWWB",
  "....BBWWWWBB.",
  "......BBBBB...",
  "........BB....",
];

const shipColors: Record<string, string> = {
  B: "#0050B3",
  C: "#69C0FF",
  K: "#0A2640",
  W: "#FFFFFF",
};

const SHIP_PIXEL_SIZE = 6;
const shipWidth = Math.max(...shipArt.map((row) => row.length)) * SHIP_PIXEL_SIZE;
const shipHeight = shipArt.length * SHIP_PIXEL_SIZE;

const CLOUD_PIXEL_SIZE = 8;
const cloudWidth = Math.max(...cloudArt.map((row) => row.length)) * CLOUD_PIXEL_SIZE;
const cloudHeight = cloudArt.length * CLOUD_PIXEL_SIZE;

function PixelShip({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute flex items-center ship-anim ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="ship-exhaust mr-[-2px] flex flex-col items-end gap-[5px]">
        <div className="h-[5px] w-10 bg-white/65" />
        <div className="h-[7px] w-20 bg-[#69C0FF]/85" />
        <div className="h-[5px] w-8 bg-white/55" />
      </div>
      <div className="drop-shadow-[0_7px_0_rgba(0,80,179,0.14)]" style={{ width: shipWidth, height: shipHeight }}>
        <svg width={shipWidth} height={shipHeight} shapeRendering="crispEdges">
          {shipArt.map((row, y) =>
            row.split("").map((char, x) => {
              if (char === ".") return null;
              return (
                <rect
                  key={`${x}-${y}`}
                  x={x * SHIP_PIXEL_SIZE}
                  y={y * SHIP_PIXEL_SIZE}
                  width={SHIP_PIXEL_SIZE}
                  height={SHIP_PIXEL_SIZE}
                  fill={shipColors[char]}
                />
              );
            }),
          )}
        </svg>
      </div>
    </div>
  );
}

function PixelCloud({ className, delay }: { className: string; delay: number }) {
  return (
    <div
      aria-hidden="true"
      className={`cloud-anim absolute drop-shadow-[0_18px_0_rgba(0,80,179,0.08)] ${className}`}
      style={{ width: cloudWidth, height: cloudHeight, animationDelay: `${delay}s` }}
    >
      <svg width={cloudWidth} height={cloudHeight} shapeRendering="crispEdges">
        {cloudArt.map((row, y) =>
          row.split("").map((char, x) =>
            char === "." ? null : (
              <rect
                key={`${x}-${y}`}
                x={x * CLOUD_PIXEL_SIZE}
                y={y * CLOUD_PIXEL_SIZE}
                width={CLOUD_PIXEL_SIZE}
                height={CLOUD_PIXEL_SIZE}
                fill={cloudColors[char]}
              />
            ),
          ),
        )}
      </svg>
    </div>
  );
}

const cssAnimations = `
  @keyframes ship-fly { 0% { transform: translate(-36vw, 0); opacity: 0; } 15% { opacity: 0.9; } 85% { opacity: 0.9; } 100% { transform: translate(116vw, 0); opacity: 0; } }
  @keyframes ship-exhaust-pulse { 0%,100% { transform: translateX(0); opacity: 0.22; } 50% { transform: translateX(-10px); opacity: 0.72; } }
  @keyframes cloud-drift { 0%,100% { transform: translateX(0); } 50% { transform: translateX(20px); } }
  .ship-anim { animation: ship-fly 6.4s linear infinite; }
  .ship-exhaust { animation: ship-exhaust-pulse 0.24s linear infinite; }
  .cloud-anim { animation: cloud-drift 8.5s ease-in-out infinite; }
`;

function PixelSkyScene() {
  return (
    <div className="relative h-[360px] overflow-hidden bg-[#38BDF8] shadow-[inset_0_-120px_140px_rgba(0,139,255,0.38)] md:h-[430px]" aria-hidden="true">
      <style>{cssAnimations}</style>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:100%_4px]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#008BFF]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[#008BFF]" />
      {clouds.map((cloud) => (
        <PixelCloud key={cloud.className} className={cloud.className} delay={cloud.delay} />
      ))}
      <PixelShip className="left-[-18%] top-[24%]" />
      <PixelShip className="left-[-28%] top-[64%] scale-90" delay={3.2} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] w-screen pb-8 pt-0 text-white">
      <div className="w-full">
        <div className="space-y-0">
          <PixelSkyScene />

          <div className="grid gap-8 bg-[linear-gradient(180deg,#008BFF_0%,#008BFF_26%,#0050B3_48%,#0A0A0A_72%,#0A0A0A_100%)] p-5 md:grid-cols-[1.2fr_2fr] md:p-8">
            <div>
              <p className="mb-6 max-w-sm text-[14px] leading-[1.6] text-white/85">
                AI-powered autonomous software development platform. Type your idea, wake up launched.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-white transition-colors duration-200 hover:text-[#69C0FF]"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#DDEFFF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-[13px] font-medium text-white transition-colors duration-200 hover:text-[#69C0FF]">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden bg-[#0A0A0A]">
            <h2
              className="select-none px-2 pb-4 pt-2 text-[20vw] font-semibold leading-[0.78] tracking-[-0.09em] text-white md:text-[16vw] lg:text-[180px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Moonshift
            </h2>

          </div>
        </div>
      </div>
    </footer>
  );
}
