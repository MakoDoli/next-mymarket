"use client";
import React, { useContext } from "react";

import { UserActivityContext } from "../context/UserActivityContext";

import CartSidebar from "./CartSidebar";
import CartCard from "./CartCard";

export default function CartList() {
  const { cartItems, total } = useContext(UserActivityContext);
  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <CartSidebar />
      <section className=" w-full  p-4   lg:p-12">
        <div className="flex justify-between">
          <h2 className="text-2xl">ჩემი კალათა</h2>
          <p className="text-lg text-blue-600">{total} ₾</p>
        </div>
        <div className="flex my-8 flex-col gap-x-4 gap-y-6">
          {cartItems.slice(0, 12).map((product, index) => (
            <CartCard product={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
