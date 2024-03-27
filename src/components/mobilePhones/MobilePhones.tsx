import getProducts from "@/services/getProducts";
import supabase from "@/services/supabase";
import React from "react";
import CatProductCard from "../ui/CatProductCard";

export default async function MobilePhones() {
  const data = await getProducts("mobiles");
  console.log(data);
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-6">
      {data.map((product) => (
        <CatProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
