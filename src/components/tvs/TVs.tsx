"use client";
import React from "react";
import ProductCard from "../shared/ProductCard";
import Sidebar from "../sidebar/Sidebar";
import CategoryLinks from "../shared/CategoryLinks";
import { useGetTvs } from "@/hooks/useGetAllProducts";

export default function TVs({ query }: { query: string }) {
  const data = useGetTvs();
  // const data = await getProducts("tvs");
  const list = !query
    ? data
    : data?.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex flex-col gap-2 lg:gap-4 2xl:px-20">
      <CategoryLinks category="tvs" title="" />
      <div className="mt-2 bg-gray-100  flex gap-2 lg:gap-4">
        <div className="hidden md:block min-w-1/5  rounded-xl ">
          <Sidebar />
        </div>
        <div className="flex  flex-wrap gap-x-3 gap-y-6">
          {list?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}
