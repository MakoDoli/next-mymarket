import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";

export default async function LaptopsList() {
  const data = await getProducts("laptops");
  // const list = !filter
  //   ? data
  //   : data.filter((product) =>
  //       product.title.toLowerCase().includes(filter.toLowerCase())
  //     );
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
