import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";

export default function TrustCard({ user, description }) {
  return (
    // Card container
    <div className="p-8 bg-base-200 rounded-2xl">
      <div className="flex flex-col gap-4 h-full">
        {/* Rating stars */}
        <div className="flex items-center">
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
          <CiStar />
        </div>

        {/* Review description */}
        <p className="text-base-content text-sm">{description}</p>

        {/* User information */}
        <div className="flex items-center gap-2 mt-auto">
          {/* User profile image */}
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={user?.image}
              alt={user?.name}
              width={40}
              height={40}
              className="h-full w-full"
            />
          </div>

          {/* User name and location */}
          <div>
            {/* Name */}
            <h4 className="text-sm font-bold">{user.name}</h4>

            {/* Location */}
            <p className="text-base-content text-sm mt-1">{user.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
