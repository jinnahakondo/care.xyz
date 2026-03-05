"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function NavLink({ children, href, className }) {
  const pathName = usePathname();
  return (
    <Link
      href={href}
      className={`${pathName.endsWith(href) && "text-primary"} ${className && className}`}
    >
      {children}
    </Link>
  );
}
