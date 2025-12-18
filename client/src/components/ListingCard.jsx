import React from "react";
import { BadgeCheck, LineChart, MapPin, Users } from "lucide-react";
import { platformIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ListingCard = ({ listing }) => {
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  return (
    <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition">
      {listing.featured && (
        <>
          <p className="py-1" />
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center text-xs font-semibold py-1 tracking-wide uppercase">
            Featured
          </div>
        </>
      )}

      <div className="p-5 pt-8">
        <div className="flex items-center gap-3 mb-3">
          {platformIcons[listing.platform]}

          <div className="flex flex-col">
            <h2 className="text-gray-800 font-semibold text-base">
              {listing.title}
            </h2>
            <p className="text-sm text-gray-500">
              @{listing.username} -{" "}
              <span className="capitalize">{listing.platform}</span>
            </p>
          </div>
          {listing.verified && (
            <BadgeCheck className="text-green-500 ml-auto w-5 h-5" />
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-between max-w-lg items-center gap-3 my-5">
          <div className="flex items-center text-sm text-gray-600">
            <Users className="size-6 mr-1 text-gray-400" />
            <span className="text-lg font-medium text-slate-800 mr-1.5">
              {listing.followers_count.toLocaleString()}
            </span>{" "}
            followers
          </div>
          {listing.engagement_rate && (
            <div className="flex items-center text-sm text-gray-600">
              <LineChart className="size-6 mr-1 text-gray-400" />
              <span className="text-lg font-medium text-slate-800 mr-1.5">
                {listing.engagement_rate}
              </span>{" "}
              % engagement
            </div>
          )}
        </div>

        {/* Tags & Location */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-medium bg-pink-100 text-pink-600 px-3 py-1 rounded-full capitalize">
            {listing.niche}
          </span>
          {listing.country && (
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="size-6 mr-1 text-gray-400" />
              {listing.country}
            </div>
          )}
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {listing.description}
        </p>

        <hr className="my-5 border-gray-200" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline ">
            <span className="text-2xl font-medium text-slate-800">
              {currency}
              {listing.price.toLocaleString()}
            </span>
            <span className="text-xs text-gray-500 ml-1.5">USD</span>
          </div>

          <button
            onClick={() => {
              navigate(`/listing/${listing.id}`);
              scrollTo(0, 0);
            }}
            className="px-7 py-3 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
          >
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
