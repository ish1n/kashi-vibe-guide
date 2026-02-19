import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import VibeSelector from "@/components/VibeSelector";
import VibeGrid from "@/components/VibeGrid";
import type { Mood } from "@/data/locations";

const Index = () => {
  const [activeMood, setActiveMood] = useState<Mood>("Peace");

  return (
    // FIX: Added flex and flex-col to keep the footer at the very bottom
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 backdrop-blur-xl border-b border-white/5"
        style={{ background: "hsla(222, 47%, 11%, 0.8)" }}
      >
        <h2 className="text-xl font-bold tracking-tight">
          Kashi<span className="text-[#ff9933]">.AI</span>
        </h2>
        <span className="text-xs text-muted-foreground tracking-widest uppercase hidden sm:block">
          Vibe-Based Travel Guide
        </span>
      </nav>

      <main className="flex-grow">
        <HeroSection />
        <VibeSelector activeMood={activeMood} onMoodChange={setActiveMood} />
        <VibeGrid activeMood={activeMood} />
      </main>

      {/* Footer FIX: Added the Saffron gradient to "Varanasi" and dark background */}
      <footer className="text-center py-8 text-sm text-muted-foreground border-t border-white/5 bg-black/20 mt-8">
        Made with 🧡 in <span className="bg-gradient-to-r from-[#ff9933] to-yellow-500 bg-clip-text text-transparent font-bold">Varanasi</span> | Kashi.AI
      </footer>
    </div>
  );
};

export default Index;