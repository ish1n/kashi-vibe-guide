import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { Location } from "@/data/locations";

interface VibeCardProps {
  location: Location;
  index: number;
}

const VibeCard = ({ location, index }: VibeCardProps) => {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name)}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card-hover overflow-hidden bg-white/5"
    >
      <div className="h-[200px] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-foreground">{location.name}</h3>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label={`View ${location.name} on Google Maps`}
          >
            <MapPin size={18} />
          </a>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {location.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {location.tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default VibeCard;
