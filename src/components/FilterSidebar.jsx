"use client";
import { FaBaby, FaStar } from "react-icons/fa";
import { MdElderly } from "react-icons/md";
import { RiHospitalLine } from "react-icons/ri";
import { FiSliders } from "react-icons/fi";
import { useState } from "react";

export default function FilterSidebar() {
  const [isChecked, setIsChecked] = useState("all");
  return (
    <div className=" w-full bg-base-200 rounded-2xl space-y-8">
      {/* filter title */}
      <div className="flex items-center gap-2 font-semibold ">
        <FiSliders size={18} />
        <span>Filters</span>
      </div>

      {/* care type section */}
      <div className="space-y-4 ">
        <p className="text-xs font-semibold opacity-60 tracking-wider">
          CARE TYPE
        </p>

        <div className="text-sm">
          {/* all */}
          <label
            className={`
            ${isChecked === "all" && "bg-base-300"}
            flex items-center justify-between p-3 rounded-xl cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <FaBaby />
              <span>All</span>
            </div>
            <input
              onChange={(e) => setIsChecked("all")}
              name="care"
              type="radio"
              defaultChecked={isChecked === "all"}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
          {/* babysitting */}
          <label
            className={`
            ${isChecked === "babysitting" && "bg-base-300"}
            flex items-center justify-between p-3 rounded-xl cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <FaBaby />
              <span>Babysitting</span>
            </div>
            <input
              onChange={(e) => setIsChecked("babysitting")}
              name="care"
              type="radio"
              defaultChecked={isChecked === "babysitting"}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>

          {/* elderly care */}
          <label
            className={`
            ${isChecked === "elderly_care" && "bg-base-300"}
            flex items-center justify-between p-3 rounded-xl cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <MdElderly />
              Elderly Care
            </div>
            <input
              onChange={(e) => setIsChecked("elderly_care")}
              name="care"
              type="radio"
              defaultChecked={isChecked === "elderly_care"}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>

          {/* sick care */}
          <label
            className={`
            ${isChecked === "sick_care" && "bg-base-300"}
            flex items-center justify-between p-3 rounded-xl cursor-pointer`}
          >
            <div className="flex items-center gap-3">
              <RiHospitalLine />
              <span>Sick Care</span>
            </div>
            <input
              onChange={(e) => setIsChecked("sick_care")}
              type="radio"
              name="care"
              defaultChecked={isChecked === "sick_care"}
              className="checkbox checkbox-primary checkbox-sm"
            />
          </label>
        </div>
      </div>

      {/* rating section */}
      <div className="space-y-3">
        <p className="text-xs font-semibold opacity-60 tracking-wider">
          MINIMUM RATING
        </p>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="radio" name="rating" className="radio radio-sm" />

          <div className="flex items-center gap-1">
            <FaStar className="text-warning text-sm" />
            <FaStar className="text-warning text-sm" />
            <FaStar className="text-warning text-sm" />
            <FaStar className="text-warning text-sm" />
            <FaStar className="text-base-300 text-sm" />
          </div>

          <span className="text-sm">& Up</span>
        </label>
      </div>

      {/* availability section */}
      <div className="space-y-3">
        <p className="text-xs font-semibold opacity-60 tracking-wider">
          AVAILABILITY
        </p>

        <div className="flex flex-wrap gap-2">
          <button className="btn btn-sm rounded-full">Today</button>
          <button className="btn btn-sm rounded-full">This Weekend</button>
          <button className="btn btn-sm rounded-full">Overnight</button>
        </div>
      </div>

      {/* apply button */}
      <button className="btn btn-primary w-full rounded-xl">
        Apply Changes
      </button>
    </div>
  );
}
