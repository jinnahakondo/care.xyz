import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ image, title, description }) {
  return (
    <div className="bg-base-200 p-4 rounded-2xl">
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        className="h-49.5 rounded-2xl object-cover w-full"
      />
      <div className="mt-4">
        <h4 className="text-xl font-bold text-neutral mb-1">{title}</h4>
        <p className="text-xs text-base-content mb-4">
          {description.slice(0, 80)}
        </p>
        <Link href={"/"} className="text-primary text-xs font-medium">
          Learn more
        </Link>
      </div>
    </div>
  );
}
