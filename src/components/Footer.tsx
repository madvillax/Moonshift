"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  PRODUCT: [
    { name: "Features", href: "#features" },
    { name: "Showcase", href: "#showcase" },
    { name: "Pricing", href: "#pricing" },
    { name: "Changelog", href: "#changelog" },
  ],
  RESOURCES: [
    { name: "Documentation", href: "#docs" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "#blog" },
    { name: "Community", href: "#community" },
  ],
  COMPANY: [
    { name: "About", href: "#about" },
    { name: "Careers", href: "#careers" },
    { name: "Contact", href: "#contact" },
    { name: "Press", href: "#press" },
  ],
  LEGAL: [
    { name: "Terms", href: "#terms" },
    { name: "Privacy", href: "#privacy" },
    { name: "Cookies", href: "#cookies" },
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
  "...........BBB....",
  ".........BBBBBB...",
  ".......BBBWWBBB..",
  ".....BBBBWWWWBBB.",
  "...BBBBBWWWWWWBBB",
  ".BBBBBKKWWWWWWWWB",
  "BBBKKKKKWWCCWWWWB",
  ".BBBBBKKWWWWWWWWB",
  "...BBBBBWWWWWWBBB",
  ".....BBBBWWWWBBB.",
  ".......BBBWWBBB..",
  ".........BBBBBB...",
  "...........BBB....",
];

const shipColors: Record<string, string> = {
  B: "#0050B3",
  C: "#69C0FF",
  K: "#0A2640",
  W: "#FFFFFF",
};

function PixelShip({ className, delay = 0 }: { className: string; delay?: number }) {
  const pixelSize = 7;
  const width = Math.max(...shipArt.map((row) => row.length)) * pixelSize;
  const height = shipArt.length * pixelSize;

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute flex items-center ${className}`}
      initial={{ x: "-36vw", opacity: 0 }}
      animate={{ x: ["-36vw", "116vw"], y: [0, -5, 3, -2, 0], opacity: [0, 1, 1, 0] }}
      transition={{ duration: 5.2, delay, repeat: Infinity, ease: "linear" }}
    >
      <motion.div
        className="mr-[-3px] flex flex-col items-end gap-[6px]"
        animate={{ x: [0, -16, 0], opacity: [0.25, 1, 0.25] }}
        transition={{ duration: 0.18, repeat: Infinity, ease: "linear" }}
      >
        <div className="h-[7px] w-20 bg-white/80" />
        <div className="h-[10px] w-32 bg-[#69C0FF]" />
        <div className="h-[7px] w-16 bg-white/70" />
      </motion.div>
      <div className="drop-shadow-[0_10px_0_rgba(0,80,179,0.18)]" style={{ width, height }}>
        <svg width={width} height={height} shapeRendering="crispEdges">
          {shipArt.map((row, y) =>
            row.split("").map((char, x) => {
              if (char === ".") return null;
              if (char === "C") {
                return (
                  <motion.rect
                    key={`${x}-${y}`}
                    x={x * pixelSize}
                    y={y * pixelSize}
                    width={pixelSize}
                    height={pixelSize}
                    fill={shipColors[char]}
                    animate={{ opacity: [0.55, 1, 0.55] }}
                    transition={{ duration: 0.28, repeat: Infinity, ease: "linear" }}
                  />
                );
              }
              return (
                <rect
                  key={`${x}-${y}`}
                  x={x * pixelSize}
                  y={y * pixelSize}
                  width={pixelSize}
                  height={pixelSize}
                  fill={shipColors[char]}
                />
              );
            }),
          )}
        </svg>
      </div>
    </motion.div>
  );
}

function PixelCloud({ className, delay }: { className: string; delay: number }) {
  const pixelSize = 8;
  const width = Math.max(...cloudArt.map((row) => row.length)) * pixelSize;
  const height = cloudArt.length * pixelSize;

  return (
    <motion.div
      aria-hidden="true"
      className={`absolute drop-shadow-[0_18px_0_rgba(0,80,179,0.08)] ${className}`}
      style={{ width, height }}
      animate={{ x: [0, 20, 0] }}
      transition={{ duration: 8.5, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg width={width} height={height} shapeRendering="crispEdges">
        {cloudArt.map((row, y) =>
          row.split("").map((char, x) =>
            char === "." ? null : (
              <rect
                key={`${x}-${y}`}
                x={x * pixelSize}
                y={y * pixelSize}
                width={pixelSize}
                height={pixelSize}
                fill={cloudColors[char]}
              />
            ),
          ),
        )}
      </svg>
    </motion.div>
  );
}

function PixelSkyScene() {
  return (
    <div className="relative h-[360px] overflow-hidden bg-[#38BDF8] shadow-[inset_0_-120px_140px_rgba(0,139,255,0.38)] md:h-[430px]" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:100%_4px]" />
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#008BFF]/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[#008BFF]" />
      {clouds.map((cloud) => (
        <PixelCloud key={cloud.className} className={cloud.className} delay={cloud.delay} />
      ))}
      <PixelShip className="left-[-18%] top-[18%]" />
      <PixelShip className="left-[-28%] top-[48%] scale-75" delay={1.9} />
      <PixelShip className="left-[-22%] top-[70%] scale-90" delay={3.7} />
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0A0A0A] px-4 pb-8 pt-20 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-0"
        >
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
                      className="text-white/70 transition-colors duration-200 hover:text-white"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.14em] text-[#DDEFFF]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    {category}
                  </h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <a href={link.href} className="text-[13px] text-white/78 transition-colors duration-200 hover:text-white">
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
            <motion.h2
              className="select-none px-2 pb-4 pt-2 text-[20vw] font-semibold leading-[0.78] tracking-[-0.09em] text-white md:text-[16vw] lg:text-[180px]"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              initial={{ y: 48, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Moonshift
            </motion.h2>
            <div className="flex flex-col gap-3 px-5 py-5 text-[12px] uppercase tracking-[0.14em] text-white/70 md:flex-row md:items-center md:justify-between">
              <p>&copy; {new Date().getFullYear()} Moonshift Inc.</p>
              <div className="flex gap-5">
                <a href="#" className="transition-colors hover:text-accent">Status</a>
                <a href="#" className="transition-colors hover:text-accent">Security</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
