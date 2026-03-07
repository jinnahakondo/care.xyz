import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function OverViewServiceCard({ image, title, description }) {
  return (
    <div className="bg-base-200 p-4 rounded-2xl h-full flex flex-col group ">
      {/* card image  */}
      <div className="h-48 w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          className="h-full w-full object-cover  transition duration-300 group-hover:scale-110 "
        />
      </div>
      <div className="mt-4 flex flex-col flex-1">
        {/* card title  */}
        <h4 className="text-xl font-bold text-neutral mb-1">{title}</h4>
        {/* card description  */}
        <p className="text-xs text-base-content mb-4 line-clamp-2">
          {description}
        </p>
        {/* link  */}
        <Link
          href={"/"}
          className="text-primary text-xs font-medium flex items-center gap-2 mt-auto hover:gap-5 transition-[gap]"
        >
          Learn more <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
