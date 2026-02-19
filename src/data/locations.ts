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
  // PEACE (Ghats & Morning Vibes)
  { 
    id: "assi-ghat", 
    name: "Assi Ghat", 
    description: "Begin your morning with yoga by the river as the sun paints the ghats in gold. The quietest ghat in Varanasi, where stillness meets the sacred.", 
    mood: "Peace", 
    // Image: Boats on the river at sunrise
image: "/images/assighat.jpg",
    tags: ["Morning Yoga", "Sunrise", "Meditation"] 
  },
  { 
    id: "sarnath", 
    name: "Sarnath — Deer Park", 
    description: "Where Buddha gave his first sermon. Walk through ancient ruins wrapped in a silence that has lasted millennia.", 
    mood: "Peace", 
    // Image: The Dhamek Stupa (Sarnath)
    image: "/images/sarnarthdeer.jpg", 
    tags: ["Buddhism", "History", "Serenity"] 
  },
  { 
    id: "subah-e-banaras", 
    name: "Subah-e-Banaras", 
    description: "A cultural dawn event at Assi Ghat blending classical music, dance, and the first light of day into pure magic.", 
    mood: "Peace", 
    // Image: Morning Aarti/Ganga view
    image: "/images/Subah-e-Banaras.jpg", 
    tags: ["Cultural", "Dawn", "Music"] 
  },

  // CHAOS (Markets & Streets)
  { 
    id: "godowlia", 
    name: "Godowlia Crossing", 
    description: "The beating heart of Varanasi. Rickshaws, cows, pilgrims, and vendors collide in beautiful, orchestrated chaos.", 
    mood: "Chaos", 
    // Image: Crowded Indian Market Street
    image: "/images/Godowlia Crossing.jpg", 
    tags: ["Street Life", "Market", "Energy"] 
  },
  { 
    id: "thatheri-bazar", 
    name: "Thatheri Bazar", 
    description: "A UNESCO-recognized lane of brass artisans hammering out tradition, one vessel at a time. The sound is the experience.", 
    mood: "Chaos", 
    // Image: Narrow lanes of Varanasi
    image: "/images/Thatheri Bazar.jpg", 
    tags: ["Artisans", "UNESCO", "Craft"] 
  },
  { 
    id: "dalmandi", 
    name: "Dalmandi", 
    description: "The wholesale spice and grain market that feeds the city. A sensory overload of colors, smells, and haggling.", 
    mood: "Chaos", 
    // Image: Colorful spices/market
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop", 
    tags: ["Spices", "Wholesale", "Vibrant"] 
  },

  // DEVOTION (Temples)
  { 
    id: "kashi-vishwanath", 
    name: "Kashi Vishwanath Temple", 
    description: "One of the 12 Jyotirlingas. The golden spire pierces the sky as thousands gather for darshan in devoted frenzy.", 
    mood: "Devotion", 
    // Image: Temple architecture/Spire
    image: "/images/Kashi Vishwanath Temple.jpg", 
    tags: ["Shiva", "Jyotirlinga", "Sacred"] 
  },
  { 
    id: "sankat-mochan", 
    name: "Sankat Mochan Temple", 
    description: "Dedicated to Hanuman, this temple resonates with chanting and the gentle rustle of langurs in the trees above.", 
    mood: "Devotion", 
    // Image: Orange Marigold flowers (symbolic of Hanuman/Puja)
    image: "/images/Sankat Mochan Temple.jpg", 
    tags: ["Hanuman", "Chanting", "Peaceful"] 
  },
  { 
    id: "manikarnika", 
    name: "Manikarnika Ghat", 
    description: "The great cremation ground where the cycle of life and death plays out in eternal flame. Profound and humbling.", 
    mood: "Devotion", 
    // Image: Burning Ghats/River fire (Artistic/Respectful)
    image: "/images/Manikarnika Ghat.jpg", 
    tags: ["Cremation", "Eternal", "Sacred"] 
  },

  // TASTE (Food)
  { 
    id: "blue-lassi", 
    name: "Blue Lassi Shop", 
    description: "A tiny, legendary shop serving thick, creamy lassis in clay cups since 1925. The mango and saffron flavors are iconic.", 
    mood: "Taste", 
    // Image: Clay cup (Kulhad) drink
    image: "/images/Blue Lassi Shop.jpg", 
    tags: ["Lassi", "Iconic", "Since 1925"] 
  },
  { 
    id: "ram-bhandar", 
    name: "Ram Bhandar", 
    description: "Home of the best kachori-sabzi in Varanasi. Crispy, spicy, and served with a side of nostalgia since decades.", 
    mood: "Taste", 
    // Image: Kachori/Puri Sabzi
    image: "/images/Ram Bhandar.jpg", 
    tags: ["Kachori", "Breakfast", "Heritage"] 
  },
  { 
    id: "kashi-chat", 
    name: "Kashi Chat Bhandar", 
    description: "Tamatar chaat, palak chaat, and dahi vada that will redefine your understanding of Indian street food.", 
    mood: "Taste", 
    // Image: Indian Chaat/Snacks
    image: "/images/Kashi Chat Bhanda.jpg", 
    tags: ["Chaat", "Street Food", "Flavors"] 
  },
];