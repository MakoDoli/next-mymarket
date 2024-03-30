import Sidebar from "@/components/sidebar/Sidebar";
import FilteredTvs from "@/components/tvs/FilteredTvs";
import TVs from "@/components/tvs/TVs";
import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "ტელევიზორები",
};

export default function Laptops() {
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <div className="hidden md:block min-w-1/5  rounded-xl ">
        <Sidebar />
      </div>
      <Suspense fallback={<Spinner />}>
        <TVs />
      </Suspense>
      {/* <FilteredTvs /> */}
    </main>
  );
}
