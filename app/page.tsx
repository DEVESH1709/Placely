"use client";

import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { Space } from "@/data/spaces";
import { AnimatePresence, motion } from "framer-motion";
import SpaceCard from "@/components/SpaceCard";
import FilterPanel from "@/components/FilterPanel";
import { FiMail, FiPhone } from "react-icons/fi";

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
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [originalMinPrice, setOriginalMinPrice] = useState(0);
  const [originalMaxPrice, setOriginalMaxPrice] = useState(20000);
  const [location, setLocation] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Spaces");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/spaces");
        const data: Space[] = await res.json();
        setSpaces(data);
        const prices = data.map((s) => s.price);
        const minPriceValue = Math.min(...prices);
        const maxPriceValue = Math.max(...prices);
        setMinPrice(minPriceValue);
        setMaxPrice(maxPriceValue);
        setOriginalMinPrice(minPriceValue);
        setOriginalMaxPrice(maxPriceValue);
      } catch (err) {
        console.error("Failed to fetch spaces", err);
      } finally {
        setLoading(false);
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
          <h1 className="font-bold text-black text-6xl">
            {currentCategory.title}
          </h1>
          <div className="h-24 flex items-center justify-center">
            <p className="text-2xl md:text-2xl text-gray-500 line-clamp-2">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="hidden md:flex flex-wrap justify-center gap-6">
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
                      : "text-gray-500"
                  }`}
                >
                  {category.name}
                </span>
              </button>
            ))}
          </div>

          <div className="md:hidden overflow-x-auto">
            <div
              className="flex gap-4 pb-2"
              style={{ minWidth: "max-content" }}
            >
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex flex-col cursor-pointer items-center p-3 rounded-xl transition-all duration-200 hover:shadow-md flex-shrink-0 w-20 ${
                    selectedCategory === category.name
                      ? "bg-blue-50 border-2 border-blue-200 shadow-sm"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  <div className="w-12 h-12 mb-2 flex items-center justify-center">
                    <Image
                      src={category.icon}
                      alt={`${category.name} icon`}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <span
                    className={`text-xs font-medium text-center leading-tight ${
                      selectedCategory === category.name
                        ? "text-blue-700"
                        : "text-gray-500"
                    }`}
                  >
                    {category.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="w-full px-4 py-8">
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
              />
            </svg>
            <span className="font-medium text-gray-700">Filters</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block lg:w-1/5">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
              <FilterPanel
                locations={locationOptions}
                activities={activityOptions}
                selectedLocation={location}
                selectedActivities={activities}
                minPrice={minPrice}
                maxPrice={maxPrice}
                originalMinPrice={originalMinPrice}
                originalMaxPrice={originalMaxPrice}
                onLocationChange={setLocation}
                onActivitiesChange={setActivities}
                onPriceChange={(min, max) => {
                  setMinPrice(min);
                  setMaxPrice(max);
                }}
              />
            </div>
          </div>

          <div
            className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
              isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-transparent"
              onClick={() => setIsFilterOpen(false)}
            ></div>
            <div
              className={`absolute left-0 top-0 h-full w-80 max-w-[85vw] bg-white transform transition-transform duration-300 ease-out ${
                isFilterOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="p-6 h-full overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Filters
                  </h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <FilterPanel
                  locations={locationOptions}
                  activities={activityOptions}
                  selectedLocation={location}
                  selectedActivities={activities}
                  minPrice={minPrice}
                  maxPrice={maxPrice}
                  originalMinPrice={originalMinPrice}
                  originalMaxPrice={originalMaxPrice}
                  onLocationChange={setLocation}
                  onActivitiesChange={setActivities}
                  onPriceChange={(min, max) => {
                    setMinPrice(min);
                    setMaxPrice(max);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3.5/4">
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-medium text-gray-700">
                      Loading spaces...
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Please wait while we fetch the best locations
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
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

                {filteredSpaces.length > 0 && (
                  <motion.div
                    className="text-right py-12 pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                      ...and more yet to come.
                    </p>
                  </motion.div>
                )}

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
              </>
            )}
          </div>
        </div>
      </main>
      <div className="fixed bottom-8 right-4 md:right-8 z-50 ">
        <div className="group flex items-center">
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 group-hover:rounded-r-none group-hover:pr-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail className="w-4 md:w-5 h-4 md:h-5" />
            <span className="font-medium cursor-pointer text-sm md:text-base">
              Get in Touch
            </span>
          </motion.button>

          <motion.div
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 group-hover:rounded-l-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPhone className="w-4 md:w-5 h-4 md:h-5 cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;
