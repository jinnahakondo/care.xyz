// Next.js optimized image component (auto optimization, lazy loading)
import { getStarRating } from "@/lib/getStarRating";
import Image from "next/image";

// Next.js client-side navigation
import Link from "next/link";

import React from "react";

// Icons
import { CiHeart } from "react-icons/ci";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

export default function ServiceCard({ service }) {
  // Destructure service data
  const { _id, title, category, pricePerHour, rating, description, image } =
    service;

  return (
    // Main service card container
    <div className="card bg-base-100 border-base-300 shadow-sm rounded-2xl overflow-hidden group">
      {/* Service Image Section */}
      <figure className="h-48 relative">
        {/* Optimized Image */}
        <Image
          src={image}
          width={200}
          height={200}
          alt={title}
          className="w-full h-full object-cover scale-105 group-hover:scale-115 duration-300 transition-all"
        />

        {/* Category badge + wishlist icon */}
        <div className="absolute top-2 left-0 flex items-center justify-between w-full px-2">
          {/* Service category */}
          <span className="badge badge-primary badge-soft rounded-full">
            {category}
          </span>

          {/* Wishlist / favorite icon */}
          <div className="bg-white rounded-full p-2">
            <CiHeart size={20} />
          </div>
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body">
        {/* Service title */}
        <h2 className="text-lg font-bold text-neutral">{title}</h2>

        {/* Short description (2 lines clamp) */}
        <p className="text-base-content text-sm line-clamp-2">{description}</p>

        {/* Rating section */}
        <div className="flex items-center gap-1 font-medium">
          <span className="text-[#ccc5b0]">{getStarRating(rating)}</span>
          <span className="text-neutral">{rating}</span>
        </div>

        {/* Divider */}
        <div className="divider opacity-40"></div>

        {/* Price and action button */}
        <div className="flex items-center justify-between">
          {/* Price */}
          <p className="text-2xl font-bold text-primary flex items-center gap-1">
            <FaBangladeshiTakaSign /> {pricePerHour}{" "}
            <span className="text-base-content/60 text-xs">/hr</span>
          </p>

          {/* Navigate to service details page */}
          <Link
            href={`/service/${_id}`}
            className="btn btn-neutral rounded-2xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
