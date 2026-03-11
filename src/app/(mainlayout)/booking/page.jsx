import Link from "next/link";
import React from "react";

export default function BookingPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb navigation */}
      <header className="text-sm breadcrumbs pt-8">
        {/* header links  */}
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/booking">booking</Link>
          </li>
        </ul>
        {/* page title */}
        <div className="pt-6">
          <h2 className="text-3xl font-bold text-neutral">
            Book Your Caregiver
          </h2>
          <p className="text-base-content/70">
            Schedule your trusted caregiver in 3 easy steps.
          </p>
        </div>
      </header>
    </div>
  );
}
