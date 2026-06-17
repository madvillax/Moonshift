"use client";

import { useState } from "react";
import { Plus, Megaphone, OpenNewWindow, RefreshDouble } from "iconoir-react";

export default function AdvertisingPage() {
  const [campaigns] = useState([]);

  return (
    <div className="flex flex-col gap-10 animate-in fade-in duration-500">
      <div>
        <h1
          className="text-4xl md:text-5xl font-normal tracking-tight text-text-primary mb-4"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Advertising
        </h1>
        <p className="text-[15px] text-text-secondary max-w-2xl leading-relaxed mb-6">
          Run ads on Google Ads. Create a campaign, track how it serves, and pause or
          resume any time. Meta (Facebook + Instagram) is coming soon.
        </p>
        <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 text-white text-[13px] font-medium transition-colors">
          <Plus className="w-4 h-4" />
          New campaign
        </button>
      </div>

      <div>
        <h2
          className="text-xl font-medium tracking-tight text-text-primary mb-5"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Campaigns
        </h2>

        {campaigns.length === 0 && (
          <div className="border border-border-default bg-bg-elevated flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-14 h-14 rounded-full border border-border-default flex items-center justify-center mb-5">
              <Megaphone className="w-6 h-6 text-text-muted" />
            </div>
            <h3
              className="text-xl font-medium text-text-primary mb-2"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              No campaigns yet
            </h3>
            <p className="text-[14px] text-text-secondary max-w-md leading-relaxed mb-6">
              Create your first campaign on Google or Meta: set a budget, let AI draft it, and launch. It shows up here ready to manage.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 text-white text-[13px] font-medium transition-colors">
              <Plus className="w-4 h-4" />
              New campaign
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        <div className="border border-border-default bg-bg-elevated p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3
              className="text-[16px] font-medium text-text-primary mb-1"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Google Ads
            </h3>
            <p className="text-[13px] text-text-secondary">
              Link the account that will run and pay for these ads.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-text-secondary hover:text-text-primary transition-colors">
              <RefreshDouble className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent/90 text-white text-[13px] font-medium transition-colors">
              <OpenNewWindow className="w-4 h-4" />
              Connect Google Ads
            </button>
          </div>
        </div>

        <div className="border border-border-default bg-bg-elevated p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3
                className="text-[16px] font-medium text-text-primary"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Meta · Facebook + Instagram
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-yellow-500 border border-yellow-500/30 bg-yellow-500/10">
                Coming soon
              </span>
            </div>
            <p className="text-[13px] text-text-secondary">
              Meta (Facebook + Instagram) ads are coming soon. Google Ads is available now.
            </p>
          </div>
          <span className="text-[13px] text-text-muted">Coming soon</span>
        </div>
      </div>
    </div>
  );
}
