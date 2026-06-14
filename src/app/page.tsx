import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-deep text-text-primary">
      <main className="flex-1">
        <Hero />
        <Workflow />
        <Features />
        <Pricing />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
