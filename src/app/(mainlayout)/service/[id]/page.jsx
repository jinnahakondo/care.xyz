import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ServiceDetails({ params }) {
  const { id } = await params;

  return (
    <div className="max-w-7xl mx-auto pt-8">
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
        <Image
          src={"/assets/service/baby.png"}
          alt=""
          width={200}
          height={400}
          className="w-full h-100 object-cover border border-red-500 rounded-2xl my-6"
        ></Image>
      </main>
    </div>
  );
}
