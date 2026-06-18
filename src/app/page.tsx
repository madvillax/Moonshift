import Hero from "@/components/Hero";
import CliSection from "@/components/CliSection";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-deep text-text-primary">
      <main className="flex-1">
        <Hero />
        <Workflow />
        <CliSection />
        <Features />
        <Pricing />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
