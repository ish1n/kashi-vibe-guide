export type Mood = "Peace" | "Chaos" | "Devotion" | "Taste";

export interface Location {
  id: string;
  name: string;
  description: string;
  mood: Mood;
  image: string;
  tags: string[];
}

export const moods: { label: string; value: Mood; emoji: string }[] = [
  { label: "Peace", value: "Peace", emoji: "🌸" },
  { label: "Chaos", value: "Chaos", emoji: "🔥" },
  { label: "Devotion", value: "Devotion", emoji: "🙏" },
  { label: "Taste", value: "Taste", emoji: "🍲" },
];

export const locations: Location[] = [
  {
    id: "assi-ghat",
    name: "Assi Ghat",
    description: "Begin your morning with yoga by the river as the sun paints the ghats in gold. The quietest ghat in Varanasi, where stillness meets the sacred.",
    mood: "Peace",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    tags: ["Morning Yoga", "Sunrise", "Meditation"],
  },
  {
    id: "sarnath",
    name: "Sarnath — Deer Park",
    description: "Where Buddha gave his first sermon. Walk through ancient ruins wrapped in a silence that has lasted millennia.",
    mood: "Peace",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    tags: ["Buddhism", "History", "Serenity"],
  },
  {
    id: "subah-e-banaras",
    name: "Subah-e-Banaras",
    description: "A cultural dawn event at Assi Ghat blending classical music, dance, and the first light of day into pure magic.",
    mood: "Peace",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    tags: ["Cultural", "Dawn", "Music"],
  },
  {
    id: "godowlia",
    name: "Godowlia Crossing",
    description: "The beating heart of Varanasi. Rickshaws, cows, pilgrims, and vendors collide in beautiful, orchestrated chaos.",
    mood: "Chaos",
    image: "https://images.unsplash.com/photo-1533929736472-594e45aa86a6?auto=format&fit=crop&w=800&q=80",
    tags: ["Street Life", "Market", "Energy"],
  },
  {
    id: "thatheri-bazar",
    name: "Thatheri Bazar",
    description: "A UNESCO-recognized lane of brass artisans hammering out tradition, one vessel at a time. The sound is the experience.",
    mood: "Chaos",
    image: "https://images.unsplash.com/photo-1533929736472-594e45aa86a6?auto=format&fit=crop&w=800&q=80",
    tags: ["Artisans", "UNESCO", "Craft"],
  },
  {
    id: "dalmandi",
    name: "Dalmandi",
    description: "The wholesale spice and grain market that feeds the city. A sensory overload of colors, smells, and haggling.",
    mood: "Chaos",
    image: "https://images.unsplash.com/photo-1533929736472-594e45aa86a6?auto=format&fit=crop&w=800&q=80",
    tags: ["Spices", "Wholesale", "Vibrant"],
  },
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    description: "One of the 12 Jyotirlingas. The golden spire pierces the sky as thousands gather for darshan in devoted frenzy.",
    mood: "Devotion",
    image: "https://images.unsplash.com/photo-1561359313-0e395066927d?auto=format&fit=crop&w=800&q=80",
    tags: ["Shiva", "Jyotirlinga", "Sacred"],
  },
  {
    id: "sankat-mochan",
    name: "Sankat Mochan Temple",
    description: "Dedicated to Hanuman, this temple resonates with chanting and the gentle rustle of langurs in the trees above.",
    mood: "Devotion",
    image: "https://images.unsplash.com/photo-1561359313-0e395066927d?auto=format&fit=crop&w=800&q=80",
    tags: ["Hanuman", "Chanting", "Peaceful"],
  },
  {
    id: "manikarnika",
    name: "Manikarnika Ghat",
    description: "The great cremation ground where the cycle of life and death plays out in eternal flame. Profound and humbling.",
    mood: "Devotion",
    image: "https://images.unsplash.com/photo-1561359313-0e395066927d?auto=format&fit=crop&w=800&q=80",
    tags: ["Cremation", "Eternal", "Sacred"],
  },
  {
    id: "blue-lassi",
    name: "Blue Lassi Shop",
    description: "A tiny, legendary shop serving thick, creamy lassis in clay cups since 1925. The mango and saffron flavors are iconic.",
    mood: "Taste",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Lassi", "Iconic", "Since 1925"],
  },
  {
    id: "ram-bhandar",
    name: "Ram Bhandar",
    description: "Home of the best kachori-sabzi in Varanasi. Crispy, spicy, and served with a side of nostalgia since decades.",
    mood: "Taste",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Kachori", "Breakfast", "Heritage"],
  },
  {
    id: "kashi-chat",
    name: "Kashi Chat Bhandar",
    description: "Tamatar chaat, palak chaat, and dahi vada that will redefine your understanding of Indian street food.",
    mood: "Taste",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    tags: ["Chaat", "Street Food", "Flavors"],
  },
];
