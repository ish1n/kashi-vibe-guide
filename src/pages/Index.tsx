import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import VibeSelector from "@/components/VibeSelector";
import VibeGrid from "@/components/VibeGrid";
import type { Mood } from "@/data/locations";

const Index = () => {
  const [activeMood, setActiveMood] = useState<Mood>("Peace");

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-white/5"
        style={{ background: "hsla(222, 47%, 11%, 0.8)" }}
      >
        <h2 className="text-xl font-bold tracking-tight">
          Kashi<span className="text-primary">.AI</span>
        </h2>
        <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
          Vibe-Based Travel Guide
        </span>
      </nav>

      <HeroSection />

      <VibeSelector activeMood={activeMood} onMoodChange={setActiveMood} />

      <VibeGrid activeMood={activeMood} />

      {/* Footer */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-white/5">
        Built with soul. Explore Kashi your way.
      </footer>
    </div>
  );
};

export default Index;
