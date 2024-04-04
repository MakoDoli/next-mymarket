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
    <Suspense fallback={<Spinner />}>
      <TVs query={query} />
    </Suspense>
  );
}
