import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-24 pb-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 mb-6"
      >
        <MapPin className="w-5 h-5 text-primary" />
        <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Varanasi, India
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
      >
        Find Your Flow
        <br />
        <span className="text-primary">in Kashi.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-lg text-lg text-muted-foreground"
      >
        Select your current mood to discover the hidden soul of Varanasi.
      </motion.p>
    </section>
  );
};

export default HeroSection;
