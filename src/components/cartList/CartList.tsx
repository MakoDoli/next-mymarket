"use client";
import React, { useContext } from "react";

import { UserActivityContext } from "../context/UserActivityContext";
import ProductCard from "../ui/ProductCard";
import CartSidebar from "./CartSidebar";

export default function CartList() {
  const { cartItems } = useContext(UserActivityContext);
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <CartSidebar />
      <section className="   p-4   lg:p-12">
        <h2 className="text-2xl">ჩემი კალათა</h2>
        <div className="flex my-8 flex-wrap gap-x-4 gap-y-6">
          {cartItems.slice(0, 12).map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
