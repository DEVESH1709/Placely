import React, { useState } from "react";
import Image from "next/image";
import { Space } from "@/data/spaces";
import { CiStar } from "react-icons/ci";

type SpaceCardProps = {
  space: Space;
};

const SpaceCard = ({ space }: SpaceCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="group bg-white rounded-xl cursor-pointer overflow-hidden p-2 hover:shadow-2xl hover:shadow-blue-100/50 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-50 transition-all duration-500 ease-out h-[360px] flex flex-col border border-gray-100 hover:border-blue-200 hover:-translate-y-2 hover:scale-[1.02] transform-gpu">
      <div className="relative rounded-lg h-48 w-full flex-shrink-0 overflow-hidden">
        <Image
          src={space.image}
          alt={space.title}
          fill
          className="object-cover rounded-2xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      </div>
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2 flex item-center justify-between gap-2">
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-800 transition-colors duration-300">
              {space.title}
            </h3>
            <span className="text-lg text-gray-900 transition-colors duration-300">
              Rs.{" "}
              <span className="font-medium   transition-all duration-10">
                {space.price.toLocaleString()}{" "}
              </span>
              per hour
            </span>
          </div>

          <div className="flex items-center">
            <span
              onClick={toggleFavorite}
              className="mr-1 cursor-pointer transition-all duration-300"
            >
              <CiStar 
                size={24} 
                className={`transition-colors duration-300 ${
                  isFavorited 
                    ? 'text-yellow-500 ' 
                    : 'text-gray-400 hover:text-yellow-400'
                }`} 
              />
            </span>
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
              {space.rating}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 group-hover:font-medium">
          {space.tags.slice(0, 4).join(" • ")} • {space.location}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpaceCard);
