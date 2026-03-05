import Link from "next/link";
import React from "react";
import NavLink from "./NavLink/NavLink";

export default function Navbar() {
  const links = (
    <>
      <NavLink href={"/"} className={"font-medium"}>
        Home
      </NavLink>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex justify-between items-center-safe max-w-7xl mx-auto py-5">
        {/* 1 */}
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            Care.xyz
          </Link>
        </div>
        {/* 2 */}
        <div className="">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* 3 */}
        <div className="hidden lg:flex gap-3 ">
          <button className="btn btn-primary rounded-lg px-6 py-2">
            Button
          </button>
          <button className="btn btn-secondary rounded-lg px-6 py-2">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
