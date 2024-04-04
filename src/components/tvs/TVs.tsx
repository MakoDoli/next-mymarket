import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";
import Sidebar from "../sidebar/Sidebar";

export default async function TVs({ query }: { query: string }) {
  const data = await getProducts("tvs");
  const list = !query
    ? data
    : data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <div className="hidden md:block min-w-1/5  rounded-xl ">
        <Sidebar />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-6">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
