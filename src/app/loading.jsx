import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      {/* Loading spinner from DaisyUI */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium text-base-content">Loading...</p>
    </div>
  );
}
