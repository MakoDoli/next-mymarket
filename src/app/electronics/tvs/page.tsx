import Sidebar from "@/components/sidebar/Sidebar";
import TVs from "@/components/tvs/TVs";
import React from "react";

export default function Laptops() {
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <div className="hidden md:block min-w-1/5  rounded-xl ">
        <Sidebar />
      </div>
      <TVs />
    </main>
  );
}
