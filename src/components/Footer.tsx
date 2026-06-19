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
    { name: "Status", href: "https://status.moonshift.io" },
  ],
  LEGAL: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "AUP", href: "/aup" },
  ],
};

const socialLinks = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    href: "https://x.com/moonshiftio",
    label: "X (Twitter)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    href: "https://www.linkedin.com/company/moonshift/",
    label: "LinkedIn",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    href: "https://github.com/moonshiftio",
    label: "GitHub",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    href: "https://t.me/moonshiftio",
    label: "Telegram",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.865-.608 1.25-1.845-.277-3.68-.277-5.487 0-.163-.394-.405-.875-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.319 13.58.1 18.058a.082.082 0 0 0 .031.056c2.053 1.508 4.041 2.423 5.993 3.03a.077.077 0 0 0 .084-.028c.462-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.042-.105 12.299 12.299 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.01c.12.099.246.198.373.292a.077.077 0 0 1-.007.127 12.299 12.299 0 0 1-1.873.892.076.076 0 0 0-.041.106c.36.699.772 1.363 1.225 1.993a.076.076 0 0 0 .084.028c1.961-.606 3.95-1.521 6.002-3.029a.077.077 0 0 0 .032-.055c.5-5.177-.838-9.674-3.548-13.66a.061.061 0 0 0-.031-.029zM8.02 15.331c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.211 0 2.176 1.095 2.157 2.419 0 1.333-.946 2.419-2.157 2.419z" />
      </svg>
    ),
    href: "https://discord.com/invite/s94tVxqzGn",
    label: "Discord",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    href: "mailto:contact@moonshift.io",
    label: "Email",
  },
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
    <footer className="relative overflow-hidden bg-[#0A0A0A] w-full pt-0 text-white">
      <div className="w-full">
        <div className="space-y-0">
          <PixelSkyScene />

          {/* Unified gradient section: info + wordmark */}
          <div className="bg-[linear-gradient(180deg,#008BFF_0%,#0050B3_30%,#001A4D_58%,#0A0A0A_82%)]">

            {/* Info + links row */}
            <div className="grid gap-8 p-5 md:grid-cols-[1.2fr_2fr] md:p-8">
              {/* Left: description + socials */}
              <div>
                <p className="mb-6 max-w-sm text-[14px] leading-[1.6] text-white/85">
                  AI-powered autonomous software development platform. Type your idea, wake up launched.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="h-6 w-6 text-white transition-colors duration-200 hover:text-[#69C0FF]"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Right: nav columns */}
              <div className="grid grid-cols-3 gap-3 md:gap-6">
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

            <div className="overflow-hidden pt-24">
              <h2
                className="select-none px-2 pb-4 pt-2 text-[20vw] font-semibold leading-[0.78] tracking-[-0.03em] text-white md:text-[16vw] md:tracking-[-0.06em] lg:text-[244px] lg:tracking-[-0.09em]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Moonshift
              </h2>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
