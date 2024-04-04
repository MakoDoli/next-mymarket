import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/utils/types";

export default async function MobilePhones({ query }: { query: string }) {
  const data = await getProducts("mobiles");

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
