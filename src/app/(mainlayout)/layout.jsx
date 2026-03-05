import Navbar from "@/components/Navbar";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
}
