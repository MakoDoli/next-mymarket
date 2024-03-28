import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";

export default async function Computers() {
  const data = await getProducts("laptops");
  console.log(data);
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
