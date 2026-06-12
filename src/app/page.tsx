import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import AgentCards from "@/components/AgentCards";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-deep text-text-primary">
      <main className="flex-1">
        <Hero />
        <Workflow />
        <Features />
        <AgentCards />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
