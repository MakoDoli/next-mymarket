"use client";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";
import ProductCard from "../ui/ProductCard";

export default function FavoritesList() {
  const { favorites } = useContext(UserActivityContext);
  return (
    <section className=" mt-6  p-4   lg:p-12">
      <label className="text-xl">შენი რჩეულები</label>
      <div className="flex my-8 flex-wrap gap-x-4 gap-y-6">
        {favorites.slice(0, 12).map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
}
