import React from "react";

export default function SectionTitle({ children, sub_title }) {
  return (
    <div className="mb-12">
      <h2 className="font-extrabold text-2xl lg:text-4xl text-center text-neutral">
        {children}
      </h2>
      ;{/* <span className="h-1.5 w-20 rounded-full bg-primary"></span> */}
      <p className="text-base-content text-lg text-center font-medium">
        {sub_title}
      </p>
    </div>
  );
}
