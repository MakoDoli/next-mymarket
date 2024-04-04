import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";

export default async function LaptopsList({ query }: { query: string }) {
  const data = await getProducts("laptops");
  const list = !query
    ? data
    : data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {list.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
