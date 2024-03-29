import getProducts from "@/services/getProducts";
import React from "react";
import ProductCard from "../ui/ProductCard";
import { Product } from "@/utils/types";

export default async function MobilePhones() {
  const data = await getProducts("mobiles");

  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {data.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
