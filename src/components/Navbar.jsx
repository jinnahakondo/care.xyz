import Link from "next/link";
import React from "react";
import NavLink from "./NavLink/NavLink";
import Logo from "./logo/Logo";

export default function Navbar() {
  const links = (
    <>
      <li>
        {" "}
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink href={"/service"}>Service</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 border-b border-base-300">
      <div className="flex justify-between items-center-safe max-w-7xl mx-auto py-5">
        {/* logo */}
        <Link href={"/"} className="btn btn-ghost text-xl">
          <Logo />
        </Link>

        {/* nav links */}
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* buttons  */}

        <div className="hidden lg:flex gap-3 ">
          <button className="btn btn-primary rounded-lg px-6 py-2">
            Button
          </button>
          <button className="btn btn-secondary rounded-lg px-6 py-2">
            Login
          </button>
        </div>
        {/* manu bar for small device  */}
        <div className="lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow right-0"
            >
              {links}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
