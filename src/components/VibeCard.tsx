import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@/data/locations";

interface VibeCardProps {
  location: Location;
  index: number;
}

const VibeCard = ({ location, index }: VibeCardProps) => {
  // 🐛 BUG FIX: The previous URL was broken and missing the '$'. 
  // This is now a working Google Maps search URL tailored to Varanasi!
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + " Varanasi")}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card-hover overflow-hidden bg-white/5 rounded-xl border border-white/10 flex flex-col"
    >
      <div className="h-[200px] overflow-hidden shrink-0">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3 gap-2">
          <h3 className="text-xl font-semibold text-foreground">{location.name}</h3>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            // FIX: Added a nice hover background to the map button
            className="text-muted-foreground hover:text-[#ff9933] transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10 shrink-0"
            title={`View ${location.name} on Google Maps`}
          >
            <MapPin size={18} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {location.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {location.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VibeCard;