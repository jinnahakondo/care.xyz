import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

export default function ServicesHeaderSection() {
  return (
    <section className="">
      {/* container */}
      <div>
        {/* breadcrumb navigation */}
        <div className="text-sm breadcrumbs mb-4 pt-0">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Services</li>
          </ul>
        </div>

        {/* heading and description */}
        <div className="">
          <h1 className="text-4xl text-neutral font-bold mb-2">
            Verified Professional Care
          </h1>

          <p className="text-base-content/70">
            Browse 120+ top-rated caregivers in your area.
          </p>
        </div>

        {/* result count and sort section */}
        <div className="flex items-center justify-between text-sm mt-8">
          {/* caregiver count */}
          <p className="text-base-content/70">48 caregivers found</p>

          {/* sort dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-base-content/70">Sort by:</span>
            <select >
              <option value="top_rated">Top Rated</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
