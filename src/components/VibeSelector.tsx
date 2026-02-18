import { moods, type Mood } from "@/data/locations";

interface VibeSelectorProps {
  activeMood: Mood;
  onMoodChange: (mood: Mood) => void;
}

const VibeSelector = ({ activeMood, onMoodChange }: VibeSelectorProps) => {
  return (
    <div className="sticky top-[57px] z-30 py-4 backdrop-blur-xl border-b border-white/5"
      style={{ background: "hsla(222, 47%, 11%, 0.85)" }}
    >
      <div className="flex justify-center gap-3 flex-wrap px-4">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onMoodChange(mood.value)}
            className={activeMood === mood.value ? "vibe-pill-active" : "vibe-pill"}
          >
            {mood.emoji} {mood.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default VibeSelector;
