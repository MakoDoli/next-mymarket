import LaptopsList from "@/components/laptops/Laptops";
import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "კომპიტუერული ტექნიკა",
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
      <LaptopsList query={query} />
    </Suspense>
  );
}
