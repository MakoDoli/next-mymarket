import Sidebar from "@/components/sidebar/Sidebar";
import TVs from "@/components/tvs/TVs";
import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "ტელევიზორები",
};

export default function Laptops({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <div className="hidden md:block min-w-1/5  rounded-xl ">
        <Sidebar />
      </div>
      <Suspense fallback={<Spinner />}>
        <TVs query={query} />
      </Suspense>
    </main>
  );
}
