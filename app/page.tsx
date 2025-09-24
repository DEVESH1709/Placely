"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { Space } from "@/data/spaces";
import { AnimatePresence, motion } from "framer-motion";
import SpaceCard from "@/components/SpaceCard";
import FilterPanel from "@/components/FilterPanel";

const categories = [
  {
    name: "All Spaces",
    icon: "https://framerusercontent.com/images/TBqgxKfCDdkKLLKY0CNIDycSM.svg",
    title: "All Spaces",
    description:
      "Enjoy, browse & book the most unique locations for any purpose",
  },
  {
    name: "Photoshoot",
    icon: "https://framerusercontent.com/images/bcqOHYjT4w1Eg0uoCF5cuiRNE.svg",
    title: "Photoshoot",
    description:
      "Discover unique backdrops for Fashion shoots • Product photography • Brand campaigns • Portrait sessions • Lifestyle content • Editorial spreads and more...",
  },
  {
    name: "Video Shoot",
    icon: "https://framerusercontent.com/images/w30ZmPzohGdnDlrKqUcR24pS8.svg",
    title: "Video Shoot",
    description:
      "Browse spaces for Brand videos • Instagram reels • Music videos • YouTube content • Product demos • Testimonials and more...",
  },
  {
    name: "Workshops",
    icon: "https://framerusercontent.com/images/qbe2qJ2DQW4PbMTevIe4xVQYvco.svg",
    title: "Workshops",
    description:
      "Inspirational venues for Creative workshops • Skill-building sessions • Yoga Session • Team Brainstorming • Art & Music Groups  •  and more...",
  },
  {
    name: "Podcast",
    icon: "https://framerusercontent.com/images/wYDgcaJWY91ZFkq4SA9KddORLa4.svg",
    title: "Podcast",
    description:
      "Unique space for Podcast episodes • Interview series • Talk shows • Storytelling sessions • Conversations • Poetry Recitals and more...",
  },
  {
    name: "Dance shoot",
    icon: "https://framerusercontent.com/images/pb9oEob1iKiGtbwpKrY3jQLt5G4.svg",
    title: "Dance shoot",
    description:
      "Unique space for Choreography videos • Dance reels • Performance captures • Dance tutorials • Competition prep • Movement art and more...",
  },
  {
    name: "Film Shoot",
    icon: "https://framerusercontent.com/images/90TkSxcig4ojJZzyWdohod9pgh8.svg",
    title: "Film Shoot",
    description:
      "Book locations for Short films • Documentaries • Commercial productions • Web series • Short-form Drama • Indie projects • Cinematic storytelling and more...",
  },
  {
    name: "Events",
    icon: "https://framerusercontent.com/images/z8SB3GmjLkT6GruBLCtYAQPn4g.svg",
    title: "Events",
    description:
      "Create memorable gatherings for Brand Launch parties • Networking events • Brand activations • Performances • Celebrations • Corporate events • Baithaks • Book Launches and more...",
  },
  {
    name: "Exhibitions",
    icon: "https://framerusercontent.com/images/7h3M2XKerpPBACMLPpA6tNnCM0.svg",
    title: "Exhibitions",
    description:
      "Showcase in untapped spaces for Art exhibitions • Product displays • Gallery shows • Creative showcases • Installation art • Visual presentations and more...",
  },
];

const Page = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [location, setLocation] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Spaces");

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const res = await fetch("/api/spaces");
        const data: Space[] = await res.json();
        setSpaces(data);
        const prices = data.map((s) => s.price);
        setMinPrice(Math.min(...prices));
        setMaxPrice(Math.max(...prices));
      } catch (err) {
        console.error("Failed to fetch spaces", err);
      }
    };
    fetchSpaces();
  }, []);

  const locationOptions = useMemo(
    () => Array.from(new Set(spaces.map((s) => s.location))),
    [spaces]
  );

  const activityOptions = useMemo(
    () => Array.from(new Set(spaces.flatMap((s) => s.activities))),
    [spaces]
  );

  const filteredSpaces = useMemo(() => {
    return spaces.filter((space) => {
      if (location && space.location !== location) return false;
      if (
        activities.length &&
        !activities.some((act) => space.activities.includes(act))
      )
        return false;
      if (space.price < minPrice || space.price > maxPrice) return false;
      if (
        selectedCategory !== "All Spaces" &&
        !space.activities.includes(selectedCategory)
      )
        return false;
      return true;
    });
  }, [spaces, location, activities, minPrice, maxPrice, selectedCategory]);

  const currentCategory =
    categories.find((cat) => cat.name === selectedCategory) || categories[0];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center min-h-[300px] flex flex-col justify-center">
          <h1 className="font-bold text-black text-7xl">
            {currentCategory.title}
          </h1>
          <div className="h-24 flex items-center justify-center">
            <p className="text-2xl md:text-3xl text-gray-500 line-clamp-2">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex flex-col cursor-pointer items-center p-4 rounded-xl transition-all duration-200 hover:shadow-md min-w-[100px] ${
                  selectedCategory === category.name
                    ? "bg-blue-50 border-2 border-blue-200 shadow-sm"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <div className="w-16 h-16 mb-3 flex items-center justify-center gap-5">
                  <Image
                    src={category.icon}
                    alt={`${category.name} icon`}
                    width={48}
                    height={48}
                    className="w-19 h-15"
                  />
                </div>
                <span
                  className={`text-1xl font-medium text-center leading-tight ${
                    selectedCategory === category.name
                      ? "text-blue-700"
                      : "text-gray-700"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <main className="w-full px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <FilterPanel
                locations={locationOptions}
                activities={activityOptions}
                selectedLocation={location}
                selectedActivities={activities}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onLocationChange={setLocation}
                onActivitiesChange={setActivities}
                onPriceChange={(min, max) => {
                  setMinPrice(min);
                  setMaxPrice(max);
                }}
              />
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="mb-6">
              <p className="text-gray-600">
                {filteredSpaces.length} spaces found
                {selectedCategory !== "All Spaces" &&
                  ` for ${selectedCategory}`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              <AnimatePresence>
                {filteredSpaces.map((space) => (
                  <motion.div
                    key={space.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SpaceCard space={space} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredSpaces.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No spaces found matching your criteria.
                </p>
                <p className="text-gray-400 mt-2">
                  Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
