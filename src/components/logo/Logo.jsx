import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Image src={"/logo.png"} width={25} height={25} alt="care.xyz logo" />
      <span className="text-primary font-bold">Care.xyz</span>
    </div>
  );
}
