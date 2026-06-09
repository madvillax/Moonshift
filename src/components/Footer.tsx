"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, ExternalLink, Mail } from "lucide-react";

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
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Cookie Policy", href: "#cookies" },
  ],
};

const socialLinks = [
  { icon: Globe, href: "#", label: "Website" },
  { icon: MessageCircle, href: "#", label: "Community" },
  { icon: ExternalLink, href: "#", label: "External" },
  { icon: Mail, href: "#", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative bg-bg-deep border-t border-border-subtle pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <span className="text-xl font-medium tracking-tight text-text-primary" style={{ fontFamily: "var(--font-space-grotesk)" }}>moonshift</span>
            </a>
            <p className="text-[14px] text-text-secondary mb-8 max-w-xs leading-[1.6]">
              AI-powered autonomous software development platform. From prompt to production in minutes.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-text-muted hover:text-text-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="col-span-1">
              <h4 className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] text-text-secondary hover:text-text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-muted">
            &copy; {new Date().getFullYear()} Moonshift Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-text-muted hover:text-text-primary transition-colors">
              Status
            </a>
            <a href="#" className="text-[13px] text-text-muted hover:text-text-primary transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
