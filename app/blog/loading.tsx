import Link from "next/link";
import React from "react";

export default function Loading() {
  return (
    <div className="text-center pt-[20px]">
      <div className="text-red-700 text-3xl">Loading...</div>
      <p className="pt-2">It might takes some time.</p>
      <Link href={"/"} className="text-blue-700 underline">
        Go to home
      </Link>
    </div>
  );
}
