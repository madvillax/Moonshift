import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roadmap · Moonshift",
  description: "What's live today and where we're headed. Moonshift is building a fully AI-native app development platform.",
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
