import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto pt-8 px-2">
      {/* header */}
      <header className="text-sm breadcrumbs pt-0">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/">Details</Link>
          </li>
        </ul>
      </header>
      <main>
        {/* service image, title & rating */}
        <div className="relative my-6 h-100 rounded-2xl overflow-hidden">
          {/* image  */}
          <Image
            src={"/assets/service/service_details.png"}
            alt=""
            width={200}
            height={400}
            className="w-full h-full object-cover"
          />
          {/* other info */}
          <div className="absolute bottom-8 left-8">
            {/* service category badge  */}
            <span className="badge badge-primary rounded-full">Baby Care</span>
            {/* servie title  */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold my-2">
              Professional In-Home Companion Care
            </h2>
            <div className="text-white/80 text-xs md:text-sm flex items-center gap-8">
              {/* service rating */}
              <p className="flex items-center gap-1">
                <CiStar size={22} className="text-yellow-400" /> 4.9 (1,240
                reviews)
              </p>
              <p>Verified Caregivers</p>
            </div>
          </div>
        </div>
        {/* service description & pricing  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* description & service info */}
          <div className="col-span-2 ">
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              About this service
            </h3>
            <p className="text-base-content">
              Our Companion Care service is designed to help seniors stay active
              and socially engaged while ensuring their safety and comfort at
              home. We believe that aging in place should be a dignified and
              joyful experience.
              <br />
              <br />
              Every caregiver in our network is thoroughly vetted,
              background-checked, and specifically trained in geriatric
              companionship. Whether your loved one needs help with daily
              activities or just a friendly face to share a cup of tea with, we
              are here to support your family.
            </p>
          </div>
          {/* pricing  */}
          <div></div>
        </div>
      </main>
    </div>
  );
}
