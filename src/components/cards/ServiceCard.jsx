import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";

export default function ServiceCard({ image, description }) {
  return (
    <div className="card bg-base-100 border-base-300 shadow-sm rounded-2xl overflow-hidden">
      <figure className="h-48">
        <Image
          src={image}
          width={200}
          height={200}
          alt={""}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center justify-between ">
          <h2 className="text-lg font-bold text-neutral">Sarah Mitchell</h2>
          <div className="flex items-center gap-1 font-medium">
            <span className="text-[#EAB308]">
              <CiStar size={22} />
            </span>
            <span className="text-neutral ">4.7</span>
          </div>
        </div>
        <p className="text-base-content text-sm line-clamp-2">{description}</p>
        {/* divider  */}
        <div className="divider opacity-40"></div>
        {/* price & buttons */}
        <div className="flex items-center justify-between">
          {/* price */}
          <p className="text-2xl font-bold text-primary">$24</p>
          <button className="btn btn-neutral rounded-2xl">View Details</button>
        </div>
      </div>
    </div>
  );
}
