"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Review {
  id: string;
  platform: "x" | "reddit" | "anonymous";
  quote: string;
  name: string;
  handle: string;
  postUrl: string;
  profileUrl?: string;
  imageUrl?: string;
}

const reviews: Review[] = [
  {
    id: "froopyydoopp",
    platform: "x",
    quote: `Unbelievably cool what is being built here. This is going to streamline so much work, so quickly. Not to mention how much it can cut costs.`,
    name: "FrooppyDoopp",
    handle: "@FrooppyDoopp",
    postUrl: "https://x.com/FrooppyDoopp/status/2064631627834396798",
    profileUrl: "https://x.com/FrooppyDoopp",
    imageUrl: "https://unavatar.io/x/FrooppyDoopp?fallback=false",
  },
  {
    id: "ecodejr",
    platform: "x",
    quote: `Moonshift looks wild btw, idea to deployed overnight is insane. I love it.`,
    name: "Emma Nuel",
    handle: "@EcodeJR",
    postUrl: "https://x.com/EcodeJR/status/2061903228279595267",
    profileUrl: "https://x.com/EcodeJR",
    imageUrl: "https://unavatar.io/x/EcodeJR?fallback=false",
  },
  {
    id: "bryceeyd",
    platform: "x",
    quote: `Got my Moonshift backend API live. First health check response: {"ok":true,"service":"moonshift-backend-api"}`,
    name: "Bryce",
    handle: "@bryceeyd",
    postUrl: "https://x.com/bryceeyd/status/2061714556590686493",
    profileUrl: "https://x.com/bryceeyd",
    imageUrl: "https://unavatar.io/x/bryceeyd?fallback=false",
  },
  {
    id: "degencapitalllc",
    platform: "x",
    quote: `Idea to live domain in under 5 minutes is crazy.`,
    name: "DegenCapitalLLC",
    handle: "@DegenCapitalLLC",
    postUrl: "https://x.com/DegenCapitalLLC/status/2063919844194689136",
    profileUrl: "https://x.com/DegenCapitalLLC",
    imageUrl: "https://unavatar.io/x/DegenCapitalLLC?fallback=false",
  },
  {
    id: "matth4313",
    platform: "x",
    quote: `In a world full of AI code generators that hand you a zip file and say 'good luck,' Moonshift stands out.`,
    name: "Matth4313",
    handle: "@Matth4313",
    postUrl: "https://x.com/Matth4313/status/2065252184217038872",
    profileUrl: "https://x.com/Matth4313",
    imageUrl: "https://unavatar.io/x/Matth4313?fallback=false",
  },
  {
    id: "reddit-indiehackers",
    platform: "reddit",
    quote: `This will beat loveable. Just wait and see. May rival codex too`,
    name: "S-for-seeker-9526",
    handle: "r/indiehackersindia",
    postUrl: "https://www.reddit.com/r/indiehackersindia/comments/1qvfgom/comment/o84gnuk/",
    profileUrl: "https://www.reddit.com/user/S-for-seeker-9526",
  },
  {
    id: "anonymous-feedback",
    platform: "anonymous",
    quote: `Best tech I've used this year`,
    name: "Moonshift user",
    handle: "",
    postUrl: "",
    profileUrl: "",
  },
];

const badges = [
  { label: "#3 Product of the Day", url: "https://productwatch.io/products/moonshift" },
  { label: "#2 Product of the Week", url: "https://productwatch.io/products/moonshift" },
];

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.77 3H20.5L14.18 10.22L21.5 20.5H15.74L11.04 14.26L5.77 20.5H3.04L9.83 12.76L2.77 3H8.69L13.03 8.75L17.77 3ZM16.69 18.63H18.39L7.64 4.8H5.82L16.69 18.63Z" />
    </svg>
  );
}

function RedditIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.25c-.76 0-1.38.62-1.38 1.38 0 .52.29.97.71 1.21-1.57.43-2.92 1.38-3.85 2.63-.34-.18-.72-.28-1.12-.28-1.46 0-2.64 1.18-2.64 2.64 0 .98.54 1.83 1.34 2.29-.02.16-.04.33-.04.5 0 3.54 4.04 6.42 9.02 6.42s9.02-2.88 9.02-6.42c0-.17-.01-.34-.04-.5.8-.46 1.34-1.31 1.34-2.29 0-1.46-1.18-2.64-2.64-2.64-.4 0-.78.1-1.12.28-.93-1.25-2.28-2.2-3.85-2.63.42-.24.71-.69.71-1.21 0-.76-.62-1.38-1.38-1.38zm-4.7 7.78c.66 0 1.19.53 1.19 1.19s-.53 1.19-1.19 1.19-1.19-.53-1.19-1.19.53-1.19 1.19-1.19zm9.4 0c.66 0 1.19.53 1.19 1.19s-.53 1.19-1.19 1.19-1.19-.53-1.19-1.19.53-1.19 1.19-1.19zm-8.45 4.22c.34 0 .66.16.86.43.4.55 1.11.91 1.94.91.83 0 1.54-.36 1.94-.91.2-.27.52-.43.86-.43.72 0 1.14.79.73 1.39-.77 1.14-2.19 1.91-3.82 1.91s-3.05-.77-3.82-1.91c-.41-.6.01-1.39.73-1.39.34 0 .66.16.86.43z" />
    </svg>
  );
}

function UserIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TrophyIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
    </svg>
  );
}

function SocialAvatar({
  platform,
  imageUrl,
  name,
}: {
  platform: "x" | "reddit" | "anonymous";
  imageUrl?: string;
  name: string;
}) {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt={name}
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover border border-border-default"
        unoptimized
      />
    );
  }
  const bgColor = platform === "x" ? "#000" : platform === "reddit" ? "#FF4500" : "#555";
  const icon = platform === "x" ? <XIcon className="h-4 w-4 text-white" /> : platform === "reddit" ? <RedditIcon className="h-4 w-4 text-white" /> : <UserIcon className="h-4 w-4 text-white" />;
  return (
    <div className="h-10 w-10 rounded-full flex items-center justify-center border border-border-default" style={{ backgroundColor: bgColor }}>
      {icon}
    </div>
  );
}

function PlatformBadge({ platform }: { platform: "x" | "reddit" | "anonymous" }) {
  const config = {
    x: { icon: <XIcon className="h-4 w-4" />, label: "X" },
    reddit: { icon: <RedditIcon className="h-4 w-4" />, label: "Reddit" },
    anonymous: { icon: <UserIcon className="h-4 w-4" />, label: "Anonymous" },
  };
  const { icon, label } = config[platform];
  return (
    <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
      {icon}
      <span className="sr-only">{label}</span>
    </span>
  );
}

function BadgeCard({ label, url }: { label: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 border border-border-default bg-bg-surface px-4 py-3 transition-colors hover:border-accent"
    >
      <TrophyIcon className="h-4 w-4 text-accent" />
      <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-text-primary">{label}</span>
    </a>
  );
}

function ReviewCard({
  review,
  onMouseEnter,
  onMouseLeave,
}: {
  review: Review;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="shrink-0 w-[400px] border border-border-default bg-bg-surface p-5 mx-3 transition-colors hover:border-border-subtle"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <SocialAvatar platform={review.platform} imageUrl={review.imageUrl} name={review.name} />
          <div className="flex flex-col">
            {review.profileUrl ? (
              <a
                href={review.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-text-primary hover:underline leading-tight"
              >
                {review.name}
              </a>
            ) : (
              <span className="text-[14px] font-semibold text-text-primary leading-tight">{review.name}</span>
            )}
            {review.handle && (
              <span className="text-[13px] text-text-muted leading-tight">{review.handle}</span>
            )}
          </div>
        </div>
        <PlatformBadge platform={review.platform} />
      </div>
      <p className="text-[15px] leading-[1.6] text-text-primary mb-4">{review.quote}</p>
      {review.postUrl && (
        <a
          href={review.postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[13px] text-accent hover:underline transition-colors"
        >
          View post <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  speed = 40,
}: {
  items: Review[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const doubledItems = [...items, ...items, ...items, ...items];
  const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex w-max ${animationClass}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {doubledItems.map((review, index) => (
          <ReviewCard
            key={`${review.id}-${index}`}
            review={review}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  const topRow = reviews.slice(0, 4);
  const bottomRow = reviews.slice(4, 7);

  return (
    <section id="reviews" className="relative overflow-hidden bg-bg-deep py-20 md:py-28">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8 mb-14 md:mb-16">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
          Reviews
        </p>
        <h2
          className="text-4xl font-medium leading-[1.04] tracking-[-0.03em] text-text-primary md:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          What our clients say.
        </h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {badges.map((badge) => (
            <BadgeCard key={badge.label} label={badge.label} url={badge.url} />
          ))}
        </div>
      </div>

      <div className="relative space-y-6">
        <MarqueeRow items={topRow} direction="left" speed={35} />
        <MarqueeRow items={bottomRow} direction="right" speed={42} />
      </div>
    </section>
  );
}
