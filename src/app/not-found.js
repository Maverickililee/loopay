import Link from "next/link";
import React from "react";

export default function custom404() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-[55vh] gap-4 container">
      <div className="text-[120px] text-mainBlue font-bold">404</div>
      <span className="font-medium text-[20px]">
        Page no found!
      </span>
      <Link
        className="bg-mainBlue p-4 rounded-[40px] text-white font-semibold text-[18px] hover:bg-darkBlue transition-[var(--transition)]"
        href={"/"}
      >
        Go to home page
      </Link>
    </div>
  );
}
