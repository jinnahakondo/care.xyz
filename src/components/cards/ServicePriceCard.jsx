"use client";

import { useRouter } from "next/navigation";
import { FiArrowRight } from "react-icons/fi";

export default function ServicePriceCard() {
  const router = useRouter();
  return (
    // Main card container
    <div className=" rounded-2xl bg-base-100 shadow-md  p-6">
      {/* Top section */}
      <div className="flex justify-between items-start mb-6">
        {/* Starting text */}
        <p className="text-base-content text-sm">Starting at</p>

        {/* Price */}
        <h2 className="text-3xl font-bold">
          $25 <span className="text-sm font-normal text-base-content">/hr</span>
        </h2>
      </div>

      {/* Divider */}
      <div className="divider my-2"></div>

      {/* Information rows */}
      <div className="space-y-4 text-sm">
        {/* Minimum Booking */}
        <div className="flex justify-between">
          <span className="text-base-content">Minimum Booking</span>
          <span className="font-medium">4 Hours</span>
        </div>

        {/* Caregiver Tier */}
        <div className="flex justify-between">
          <span className="text-base-content">Caregiver Tier</span>
          <span className="font-medium">Standard / Premium</span>
        </div>

        {/* Service Fee */}
        <div className="flex justify-between">
          <span className="text-base-content">Service Fee</span>
          <span className="font-medium">$5.00</span>
        </div>
      </div>

      {/* Booking button */}
      <button
        onClick={() => router.push(`/booking`)}
        className="btn btn-primary w-full mt-6 rounded-xl text-white flex items-center justify-center gap-2"
      >
        Book Service
        <FiArrowRight size={18} />
      </button>

      {/* Footer text */}
      <p className="text-center text-xs text-base-content/80 mt-4">
        No commitment required. Cancel anytime.
      </p>
    </div>
  );
}
