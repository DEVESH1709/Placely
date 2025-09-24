"use client";
import React from "react";

type FilterPanelProps = {
  locations: string[];
  activities: string[];
  selectedLocation: string;
  selectedActivities: string[];
  minPrice: number;
  maxPrice: number;
  onLocationChange: (loc: string) => void;
  onActivitiesChange: (acts: string[]) => void;
  onPriceChange: (min: number, max: number) => void;
};

const FilterPanel = ({
  locations,
  activities,
  selectedLocation,
  selectedActivities,
  minPrice,
  maxPrice,
  onLocationChange,
  onActivitiesChange,
  onPriceChange,
}: FilterPanelProps) => {
  const toggleActivity = (activity: string) => {
    const updated = selectedActivities.includes(activity)
      ? selectedActivities.filter((a) => a !== activity)
      : [...selectedActivities, activity];
    onActivitiesChange(updated);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Location
        </label>
        <select
          value={selectedLocation}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full p-3 border border-gray-300 cursor-pointer rounded-lg focus:ring-2 focus:ring-black text-black focus:border-transparent"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Activities
        </label>
        <div className="space-y-2">
          {activities.map((act) => (
            <label key={act} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                value={act}
                checked={selectedActivities.includes(act)}
                onChange={() => toggleActivity(act)}
                className="h-4 w-4 text-black focus:ring-black cursor-pointer border-gray-300 rounded"
              />
              <span className="ml-3 text-sm text-gray-700">{act}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price Range (per hour)
        </label>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">
                Min Price
              </label>
              <input
                type="number"
                value={minPrice}
                min={0}
                onChange={(e) =>
                  onPriceChange(Number(e.target.value), maxPrice)
                }
                className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="₹0"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-gray-500 mb-1">
                Max Price
              </label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) =>
                  onPriceChange(minPrice, Number(e.target.value))
                }
                className="w-full p-2 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder="₹20,000"
              />
            </div>
          </div>
          <div className="text-xs text-gray-500">
            ₹{minPrice.toLocaleString()} - ₹{maxPrice.toLocaleString()}
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          onLocationChange("");
          onActivitiesChange([]);
        }}
        className="w-full py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default React.memo(FilterPanel);
