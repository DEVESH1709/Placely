import React from "react";
import Image from "next/image";
import { Space } from "@/data/spaces";
import { CiStar } from "react-icons/ci";

type SpaceCardProps = {
  space: Space;
};

const SpaceCard = ({ space }: SpaceCardProps) => {
  return (
    <div className="bg-white rounded-xl cursor-pointer overflow-hidden p-2 hover:shadow-xl hover:bg-gray-200 transition-all duration-300 h-[360px] flex flex-col border border-gray-100 ">
      <div className="relative rounded-lg h-48 w-full flex-shrink-0">
        <Image
          src={space.image}
          alt={space.title}
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="p-2 flex-1 flex flex-col justify-between">
        <div>
          <div className="mb-2 flex item-center justify-between">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {space.title}
            </h3>
            <span className="text-lg text-gray-900">
              Rs.{" "}
              <span className="font-medium">
                {space.price.toLocaleString()}{" "}
              </span>
              per hour
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-yellow-400 mr-1 cursor-pointer">
              <CiStar size={24} />
            </span>
            <span className="text-sm font-medium text-gray-700">
              {space.rating}
            </span>
          </div>
        </div>

        <div className="text-sm text-gray-600">
          {space.tags.slice(0, 4).join(" • ")} • {space.location}
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpaceCard);
