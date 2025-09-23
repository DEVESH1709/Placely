export interface Space {
    id :number;
    title:string;
    description:string;
    location :string;
    activities:string[];
    price:number;
    rating :number;
    image: string;
    tags :string[];
}

export const spaces: Space[] = [
  {
    id: 1,
    title: "Haveli of Timeless Frames",
    description: "Restored Haveli • Old Delhi",
    location: "Old Delhi",
    activities: ["Photoshoot", "Video Shoot"],
    price: 4500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    tags: ["Heritage", "Culture & Performance", "Curated artefacts", "Jewels Tones", "Antique Furniture"]
  },
  {
    id: 2,
    title: "Colonial Courtyard of Lutyen's Delhi",
    description: "Colonial Corridors • Whitewashed Arches • Green Emerald Door • Delhi Heritage home",
    location: "New Delhi",
    activities: ["Photoshoot", "Film Shoot"],
    price: 7500,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Colonial", "Heritage", "Arches", "Courtyard"]
  },
  {
    id: 3,
    title: "Creation's Kaleidoscope",
    description: "Maximalist Living Room • Jewel Tone Shoot Space • Bohemian Eclectic Interiors • colorful set location • Art-Filled Walls • Natural Light",
    location: "Gurgaon",
    activities: ["Photoshoot", "Video Shoot"],
    price: 12900,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Maximalist", "Jewel Tone", "Bohemian", "Eclectic Interiors", "Natural Light"]
  },
  {
    id: 4,
    title: "The Sunday Home",
    description: "Art director's home • Quirky Interiors • Hand-painted walls • Bold striped decor • Eclectic Props • Bold Colors",
    location: "Delhi",
    activities: ["Photoshoot", "Video Shoot"],
    price: 1200,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Art Director's Home", "Quirky", "Hand-painted", "Bold Colors"]
  },
  {
    id: 5,
    title: "Pristine White Foam Factory",
    description: "Industrial • Foam warehouse with Bamboo Scaffolding • Unique Textural Backdrop • 30 feet high ceiling",
    location: "Delhi",
    activities: ["Photoshoot", "Video Shoot", "Film Shoot"],
    price: 7800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["Industrial", "Warehouse", "High Ceiling", "Unique Backdrop"]
  },
  {
    id: 6,
    title: "A Stairway Through Time",
    description: "European Stairway • Lime-washed walls • Rustic interiors • Delhi Heritage",
    location: "Delhi",
    activities: ["Photoshoot", "Film Shoot"],
    price: 4000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["European", "Heritage", "Rustic", "Stairway"]
  },
  {
    id: 7,
    title: "Baithak for the Modern Mughals",
    description: "Maximalist Home • Contemporary Durbar • Eclectic Regal Interiors • Bold Color-tones and Textures • Heritage meets Modern • Artist's Home",
    location: "Delhi",
    activities: ["Photoshoot", "Video Shoot"],
    price: 11400,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Maximalist", "Regal", "Contemporary", "Heritage", "Artist's Home"]
  },
  {
    id: 8,
    title: "The Forgotten Fireplace",
    description: "Colonial Bungalow • Courtyard House • Lutyen's Bungalows • Whitewashed walls • Colonial Architecture • Arched Corridor Home • Delhi Heritage home • Green Emerald Door • Classic Delhi Homes",
    location: "Delhi",
    activities: ["Photoshoot", "Film Shoot"],
    price: 4000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Colonial", "Fireplace", "Heritage", "Classic"]
  },
  {
    id: 9,
    title: "A Collector's Vault",
    description: "Collector's Home • Artefacts Fireplace • Vintage Soul • Rustic Brickwalls • Vaulted High Ceiling • Timeless tapestries",
    location: "Delhi",
    activities: ["Photoshoot", "Video Shoot"],
    price: 3600,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    tags: ["Collector's Home", "Vintage", "Artefacts", "High Ceiling"]
  },
  {
    id: 10,
    title: "Dawat-e-Design",
    description: "Maximalist Vintage Kitchen & Artistic Dining Room for Shoots in Delhi",
    location: "Gurgaon",
    activities: ["Photoshoot", "Video Shoot"],
    price: 8700,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Kitchen", "Vintage", "Dining Room", "Maximalist"]
  },
  {
    id: 11,
    title: "A Gallery to the Greens",
    description: "Colonial Bungalow • Lawn • Garden • Passage • Lutyen's Bungalows • Whitewashed walls • Colonial Architecture • Arched Corridor Home • Delhi Heritage home • Green Emerald Door • Classic Delhi Homes",
    location: "Delhi",
    activities: ["Photoshoot", "Events", "Workshops"],
    price: 3500,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Lawn", "Garden", "Colonial", "Heritage"]
  },
  {
    id: 12,
    title: "A Sailor's Paradise",
    description: "Chic Vintage • Powder Blue • Sea-scape Artwork • Pop Furnishing • Natural Light • Green Balcony",
    location: "Gurgaon",
    activities: ["Photoshoot", "Video Shoot"],
    price: 3600,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Vintage", "Sea-scape", "Natural Light", "Balcony"]
  },
  {
    id: 13,
    title: "Urban Loft Studio",
    description: "Industrial Loft • Exposed Brick • High Ceilings • Natural Light • Urban Backdrop • Modern Minimalist",
    location: "Mumbai",
    activities: ["Photoshoot", "Video Shoot", "Podcast"],
    price: 9500,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["Industrial", "Exposed Brick", "High Ceiling", "Minimalist"]
  },
  {
    id: 14,
    title: "Rooftop Garden Terrace",
    description: "Open Sky • Garden Setup • City Views • Natural Light • Outdoor Setup • Green Backdrop",
    location: "Bangalore",
    activities: ["Events", "Workshops", "Dance shoot"],
    price: 5500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Rooftop", "Garden", "City Views", "Outdoor"]
  },
  {
    id: 15,
    title: "Vintage Library Lounge",
    description: "Old Books • Leather Chairs • Warm Lighting • Academic Atmosphere • Wooden Shelves • Classic Decor",
    location: "Kolkata",
    activities: ["Photoshoot", "Podcast", "Film Shoot"],
    price: 4200,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    tags: ["Library", "Vintage", "Academic", "Warm Lighting"]
  },
  {
    id: 16,
    title: "Modern Art Gallery",
    description: "White Walls • Contemporary Art • Gallery Lighting • Exhibition Space • Clean Minimalist • Professional Setup",
    location: "Chennai",
    activities: ["Exhibitions", "Events", "Photoshoot"],
    price: 8900,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["Gallery", "Contemporary", "Exhibition", "Minimalist"]
  },
  {
    id: 17,
    title: "Bohemian Artist's Studio",
    description: "Colorful Tapestries • Art Supplies • Creative Chaos • Eclectic Decor • Natural Light • Artistic Vibes",
    location: "Pune",
    activities: ["Workshops", "Photoshoot", "Video Shoot"],
    price: 3800,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Bohemian", "Artist Studio", "Colorful", "Creative"]
  },
  {
    id: 18,
    title: "Luxury Hotel Suite",
    description: "Five Star Amenities • Elegant Interiors • City Views • Premium Furnishing • Marble Bathroom • Royal Setup",
    location: "Mumbai",
    activities: ["Photoshoot", "Video Shoot", "Events"],
    price: 15000,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Luxury", "Hotel Suite", "Premium", "Elegant"]
  },
  {
    id: 19,
    title: "Warehouse Dance Floor",
    description: "Open Space • Wooden Floors • Mirror Walls • Sound System • Dance Setup • Industrial Aesthetic",
    location: "Delhi",
    activities: ["Dance shoot", "Events", "Workshops"],
    price: 6700,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["Warehouse", "Dance Floor", "Mirror Walls", "Sound System"]
  },
  {
    id: 20,
    title: "Cozy Cafe Corner",
    description: "Rustic Interior • Coffee Bar Setup • Warm Ambiance • Vintage Furniture • Brick Walls • Intimate Setting",
    location: "Goa",
    activities: ["Photoshoot", "Video Shoot", "Podcast"],
    price: 2800,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    tags: ["Cafe", "Rustic", "Coffee Bar", "Intimate"]
  },
  {
    id: 21,
    title: "Tech Startup Office",
    description: "Modern Workspace • Glass Walls • Open Layout • Tech Setup • Contemporary Furniture • Innovation Hub",
    location: "Hyderabad",
    activities: ["Video Shoot", "Photoshoot", "Events"],
    price: 7200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["Tech Office", "Modern", "Glass Walls", "Innovation"]
  },
  {
    id: 22,
    title: "Heritage Palace Courtyard",
    description: "Royal Architecture • Marble Floors • Intricate Carvings • Palace Setting • Grand Pillars • Regal Atmosphere",
    location: "Jaipur",
    activities: ["Film Shoot", "Events", "Photoshoot"],
    price: 18500,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=800&h=600&fit=crop",
    tags: ["Palace", "Royal", "Heritage", "Marble"]
  },
  {
    id: 23,
    title: "Beach House Studio",
    description: "Ocean Views • Natural Light • Coastal Decor • Sand & Sea • Relaxed Vibes • Tropical Setting",
    location: "Goa",
    activities: ["Photoshoot", "Video Shoot", "Events"],
    price: 12000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    tags: ["Beach House", "Ocean Views", "Coastal", "Tropical"]
  },
  {
    id: 24,
    title: "Minimalist White Studio",
    description: "Pure White Backdrop • Clean Lines • Professional Lighting • Photography Setup • Seamless Walls • Studio Equipment",
    location: "Mumbai",
    activities: ["Photoshoot", "Video Shoot", "Workshops"],
    price: 8500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop",
    tags: ["White Studio", "Professional", "Clean", "Photography"]
  }


];
