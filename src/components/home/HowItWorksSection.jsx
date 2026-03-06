import React from "react";
import SectionTitle from "../Title/SectionTitle";
import { AiOutlineSearch } from "react-icons/ai";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { MdVerifiedUser } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";

export default function HowItWorksSection() {
  // Data for how the service works
  const howItWorks = [
    {
      icon: AiOutlineSearch,
      title: "1. Search",
      description:
        "Browse profiles of qualified caregivers in your area. Filter by experience and availability.",
    },
    {
      icon: LuCalendarDays,
      title: "2. Book",
      description:
        "Schedule a time that works for you and pay securely through our encrypted platform.",
    },
    {
      icon: FaRegHeart,
      title: "3. Care",
      description:
        "Enjoy professional, empathetic care delivered directly to your home by experts.",
    },
    {
      icon: MdVerifiedUser,
      title: "4. Verified",
      description:
        "All caregivers are background-checked and verified to ensure safety and trust.",
    },
  ];

  return (
    // Section wrapper
    <div className="bg-base-200 py-20 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Section heading */}
        <SectionTitle
          sub_title={
            "Getting the right care for your family is simple, secure, and stress-free."
          }
        >
          How it Works
        </SectionTitle>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step cards */}
          {howItWorks.map((data, i) => (
            <div
              key={i}
              className="bg-base-100 rounded-2xl p-8 flex flex-col gap-6 items-center"
            >
              {/* Icon */}
              <span className="p-4 rounded-full bg-base-200 text-primary">
                <data.icon size={24} />
              </span>

              {/* Text content */}
              <div>
                <h4 className="text-xl text-neutral font-bold mb-1 text-center">
                  {data.title}
                </h4>
                <p className="text-base-content text-sm text-center">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
