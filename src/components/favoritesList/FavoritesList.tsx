"use client";
import React, { useContext } from "react";
import MainPageCard from "../mainSection/MainPageCard";
import { UserActivityContext } from "../context/UserActivityContext";

export default function FavoritesList() {
  const { favorites } = useContext(UserActivityContext);
  return (
    <section className=" mt-6  p-4   lg:p-12">
      <label>ახალი დამატებულები</label>
      <div className="flex my-8 flex-wrap gap-x-4 gap-y-6">
        {favorites.slice(0, 12).map((product, index) => (
          <MainPageCard
            id={product.id}
            src={product.imageURL}
            title={product.title}
            price={product.price}
            key={index}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}
