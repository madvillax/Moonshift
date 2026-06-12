export const viewBox = { width: 1200, height: 2200 };

export const pathD = "M 110 220 L 1090 220 Q 1190 220, 1190 390 Q 1190 560, 1090 560 L 110 560 Q 10 560, 10 730 Q 10 900, 110 900 L 1090 900 Q 1190 900, 1190 1070 Q 1190 1240, 1090 1240 L 110 1240 Q 10 1240, 10 1410 Q 10 1580, 110 1580 L 1090 1580 Q 1190 1580, 1190 1750 Q 1190 1920, 1090 1920 L 110 1920";

export const roadmapData = [
  {
    number: 1,
    phase: "Live",
    title: "End-to-end autonomous build",
    description: "One prompt becomes a deployed working app in minutes.",
    status: "live",
    point: { x: 330, y: 220 },
    card: { x: 190, y: -46 },
  },
  {
    number: 2,
    phase: "Live",
    title: "Your repo, cloud, domain",
    description: "Every build lands in your GitHub and Vercel stack.",
    status: "live",
    point: { x: 870, y: 220 },
    card: { x: 730, y: -46 },
  },
  {
    number: 3,
    phase: "Live",
    title: "Iterate after ship",
    description: "Open builds in a workspace with versions and rollback.",
    status: "live",
    point: { x: 870, y: 560 },
    card: { x: 730, y: 294 },
  },
  {
    number: 4,
    phase: "Live",
    title: "Tested and audited",
    description: "E2E tests and security checks run before deploy.",
    status: "live",
    point: { x: 330, y: 560 },
    card: { x: 190, y: 294 },
  },
  {
    number: 5,
    phase: "Building",
    title: "Cloud IDE preview",
    description: "File tree, language server, and hot-reload preview.",
    status: "building",
    point: { x: 330, y: 900 },
    card: { x: 190, y: 634 },
  },
  {
    number: 6,
    phase: "Building",
    title: "Shell and devtools",
    description: "Interactive terminal with stdout, stderr, and traces.",
    status: "building",
    point: { x: 870, y: 900 },
    card: { x: 730, y: 634 },
  },
  {
    number: 7,
    phase: "Building",
    title: "Integrations",
    description: "GitHub, Vercel, Stripe, Supabase, Slack, Notion, Figma.",
    status: "building",
    point: { x: 870, y: 1240 },
    card: { x: 730, y: 974 },
  },
  {
    number: 8,
    phase: "Up next",
    title: "Run from Figma",
    description: "Paste a Figma link and preserve layout and tokens.",
    status: "upcoming",
    point: { x: 330, y: 1240 },
    card: { x: 190, y: 974 },
  },
  {
    number: 9,
    phase: "Up next",
    title: "AI PM",
    description: "Roadmaps, user stories, and GitHub issues generated.",
    status: "upcoming",
    point: { x: 330, y: 1580 },
    card: { x: 190, y: 1314 },
  },
  {
    number: 10,
    phase: "Up next",
    title: "Scale",
    description: "Infra scaling, sharding, and CDN optimization handled.",
    status: "upcoming",
    point: { x: 870, y: 1580 },
    card: { x: 730, y: 1314 },
  },
  {
    number: 11,
    phase: "Further out",
    title: "Market",
    description: "Landing copy, social posts, press kit, and changelog.",
    status: "upcoming",
    point: { x: 870, y: 1920 },
    card: { x: 730, y: 1654 },
  },
  {
    number: 12,
    phase: "Further out",
    title: "Deploy anywhere",
    description: "Ship to more cloud targets without touching config.",
    status: "upcoming",
    point: { x: 330, y: 1920 },
    card: { x: 190, y: 1654 },
  },
];

export const statusColors: Record<string, { border: string; bg: string; text: string; dot: string; svg: string }> = {
  live: { border: "border-[#22C55E]/70", bg: "bg-[#22C55E]/10", text: "text-[#22C55E]", dot: "bg-[#22C55E]", svg: "#22C55E" },
  building: { border: "border-accent/70", bg: "bg-accent/10", text: "text-accent", dot: "bg-accent", svg: "#008BFF" },
  upcoming: { border: "border-text-muted/60", bg: "bg-bg-elevated", text: "text-text-muted", dot: "bg-text-muted", svg: "#6B7280" },
};

export const asciiSigns = [
  { label: ">>>", x: 510, y: 156 },
  { label: "•••", x: 620, y: 156 },
  { label: "<<<", x: 500, y: 496 },
  { label: ">>>", x: 510, y: 836 },
  { label: "<<<", x: 500, y: 1176 },
  { label: ">>>", x: 510, y: 1516 },
  { label: "<<<", x: 500, y: 1856 },
];

export const pixelTiles = Array.from({ length: 55 }, (_, index) => ({
  x: 58 + (index % 11) * 108,
  y: 318 + Math.floor(index / 11) * 340,
}));

export const rocketPixels = [
  "000000000NNN0000000000",
  "00000000NBBBN000000000",
  "000000NBBBBBBN00000000",
  "0000NNBBBBBBBBNN000000",
  "00NNBBBBBWWWWWBN000000",
  "0NBBBBBBWWWWWWWBN00000",
  "NBBBBBBBWWCWWWWBN00000",
  "NBBBBBBBWWWWWWWBN00000",
  "NBBBBBBBWWCWWWWBN00000",
  "0NBBBBBBWWWWWWWBN00000",
  "00NNBBBBBWWWWWBN000000",
  "0000NNBBBBBBBBNN000000",
  "000000NBBBBBBN00000000",
  "00000000NBBBN000000000",
  "000000000NNN0000000000",
];

export const rocketPixelColors: Record<string, string> = {
  N: "#0A4FA7",
  B: "#1397FF",
  W: "#F7FBFF",
  C: "#55BDF2",
};
