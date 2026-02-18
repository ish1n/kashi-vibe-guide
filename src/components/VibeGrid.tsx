import { AnimatePresence } from "framer-motion";
import { locations, type Mood } from "@/data/locations";
import VibeCard from "./VibeCard";

interface VibeGridProps {
  activeMood: Mood;
}

const VibeGrid = ({ activeMood }: VibeGridProps) => {
  const filtered = locations.filter((loc) => loc.mood === activeMood);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filtered.map((location, i) => (
            <VibeCard key={location.id} location={location} index={i} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default VibeGrid;
