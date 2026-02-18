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
  { id: "assi-ghat", name: "Assi Ghat", description: "Begin your morning with yoga by the river as the sun paints the ghats in gold. The quietest ghat in Varanasi, where stillness meets the sacred.", mood: "Peace", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop", tags: ["Morning Yoga", "Sunrise", "Meditation"] },
  { id: "sarnath", name: "Sarnath — Deer Park", description: "Where Buddha gave his first sermon. Walk through ancient ruins wrapped in a silence that has lasted millennia.", mood: "Peace", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=800&auto=format&fit=crop", tags: ["Buddhism", "History", "Serenity"] },
  { id: "subah-e-banaras", name: "Subah-e-Banaras", description: "A cultural dawn event at Assi Ghat blending classical music, dance, and the first light of day into pure magic.", mood: "Peace", image: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=800&auto=format&fit=crop", tags: ["Cultural", "Dawn", "Music"] },
  { id: "godowlia", name: "Godowlia Crossing", description: "The beating heart of Varanasi. Rickshaws, cows, pilgrims, and vendors collide in beautiful, orchestrated chaos.", mood: "Chaos", image: "https://images.unsplash.com/photo-1533929736472-594e45aa86a6?q=80&w=800&auto=format&fit=crop", tags: ["Street Life", "Market", "Energy"] },
  { id: "thatheri-bazar", name: "Thatheri Bazar", description: "A UNESCO-recognized lane of brass artisans hammering out tradition, one vessel at a time. The sound is the experience.", mood: "Chaos", image: "https://images.unsplash.com/photo-1622194993926-1926673cb7fa?q=80&w=800&auto=format&fit=crop", tags: ["Artisans", "UNESCO", "Craft"] },
  { id: "dalmandi", name: "Dalmandi", description: "The wholesale spice and grain market that feeds the city. A sensory overload of colors, smells, and haggling.", mood: "Chaos", image: "https://images.unsplash.com/photo-1519955045385-7cdb8e35c83b?q=80&w=800&auto=format&fit=crop", tags: ["Spices", "Wholesale", "Vibrant"] },
  { id: "kashi-vishwanath", name: "Kashi Vishwanath Temple", description: "One of the 12 Jyotirlingas. The golden spire pierces the sky as thousands gather for darshan in devoted frenzy.", mood: "Devotion", image: "https://images.unsplash.com/photo-1561359313-0e395066927d?q=80&w=800&auto=format&fit=crop", tags: ["Shiva", "Jyotirlinga", "Sacred"] },
  { id: "sankat-mochan", name: "Sankat Mochan Temple", description: "Dedicated to Hanuman, this temple resonates with chanting and the gentle rustle of langurs in the trees above.", mood: "Devotion", image: "https://images.unsplash.com/photo-1606293926075-69a00febf352?q=80&w=800&auto=format&fit=crop", tags: ["Hanuman", "Chanting", "Peaceful"] },
  { id: "manikarnika", name: "Manikarnika Ghat", description: "The great cremation ground where the cycle of life and death plays out in eternal flame. Profound and humbling.", mood: "Devotion", image: "https://images.unsplash.com/photo-1627916607164-7b69678c1879?q=80&w=800&auto=format&fit=crop", tags: ["Cremation", "Eternal", "Sacred"] },
  { id: "blue-lassi", name: "Blue Lassi Shop", description: "A tiny, legendary shop serving thick, creamy lassis in clay cups since 1925. The mango and saffron flavors are iconic.", mood: "Taste", image: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=800&auto=format&fit=crop", tags: ["Lassi", "Iconic", "Since 1925"] },
  { id: "ram-bhandar", name: "Ram Bhandar", description: "Home of the best kachori-sabzi in Varanasi. Crispy, spicy, and served with a side of nostalgia since decades.", mood: "Taste", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop", tags: ["Kachori", "Breakfast", "Heritage"] },
  { id: "kashi-chat", name: "Kashi Chat Bhandar", description: "Tamatar chaat, palak chaat, and dahi vada that will redefine your understanding of Indian street food.", mood: "Taste", image: "https://images.unsplash.com/photo-1606491956689-2ea28c674675?q=80&w=800&auto=format&fit=crop", tags: ["Chaat", "Street Food", "Flavors"] },
];
