import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    // Hero section wrapper
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div>
          {/* Top badge */}
          <span className="badge badge-soft badge-primary uppercase font-medium">
            Trusted by 50K+ Families
          </span>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mt-4">
            Professional Care <br />
            <span className="text-primary">At Your Doorstep</span>
          </h1>

          {/* Short description */}
          <p className="mt-4  max-w-lg text-base-content">
            Book vetted babysitters, compassionate elderly care, and expert sick
            care services in minutes. Your peace of mind is our priority.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="btn btn-primary px-6 rounded-lg">
              Book Care Now
            </button>

            <button className="btn btn-outline px-6 rounded-lg">
              View Pricing
            </button>
          </div>

          {/* Testimonial section */}
          <div className="flex items-center gap-3 mt-8">
            {/* User avatars */}
            <div className="flex -space-x-3">
              <Image
                src="/user.png"
                alt="user"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-base-300"
              />
              <Image
                src="/user.png"
                alt="user"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-base-300"
              />
              <Image
                src="/user.png"
                alt="user"
                width={32}
                height={32}
                className="w-8 h-8 rounded-full border-2 border-base-300"
              />
            </div>

            {/* Testimonial text */}
            <p className="text-sm text-base-content italic">
              "Found a wonderful nanny in less than 2 days!"
            </p>
          </div>
        </div>

        {/* Right side image area */}
        <div className="relative">
          {/* Main hero image */}
          <div className="max-h-112.5 h-full w-full max-w-112.5">
            <Image
              src="/hero_image.png"
              alt="Care service"
              width={600}
              height={600}
              className="w-full h-auto rounded-3xl shadow-lg"
            />
          </div>

          {/* Verification card */}
          <div className="absolute bottom-6 left-6 bg-base-100 rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
            {/* Icon */}
            <div className="bg-green-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            {/* Verification text */}
            <div>
              <p className="text-sm font-semibold">100% Verified</p>
              <p className="text-xs text-base-content">
                Background checked staff
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
