import { Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";

const Workflow = dynamic(() => import("@/components/Workflow"));
const Features = dynamic(() => import("@/components/Features"));
const AgentCards = dynamic(() => import("@/components/AgentCards"));
const CliSection = dynamic(() => import("@/components/CliSection"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const FinalCTA = dynamic(() => import("@/components/FinalCTA"));
const Footer = dynamic(() => import("@/components/Footer"));

const SectionFallback = () => <div className="min-h-[400px] bg-bg-deep" />;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-deep text-text-primary overflow-x-hidden">
      <main className="flex-1">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <Workflow />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <AgentCards />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CliSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
