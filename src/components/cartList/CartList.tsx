"use client";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";
import CartSidebar from "./CartSidebar";
import CartCard from "./CartCard";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import Link from "next/link";

export default function CartList() {
  const { cartItems, total } = useContext(UserActivityContext);

  const { isAuthenticated } = useGetCurrentUser();

  return (
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <CartSidebar />
      <section className=" w-full  p-4   lg:p-12">
        <div className="flex justify-between">
          <h2 className="text-2xl">ჩემი კალათა</h2>
          <div className="flex gap-3 items-center ">
            <p className="text-lg text-blue-600">{total} ₾</p>
            <Link href={isAuthenticated ? "/place-order" : "/login"}>
              <div className="bg-yellow-400 hover:bg-yellow-300 hover-ease px-3  h-[2rem] rounded-md text-center  text-md cursor-pointer ">
                ყიდვა
              </div>
            </Link>
          </div>
        </div>
        <div className="flex my-8 flex-col gap-x-4 gap-y-6">
          {cartItems.map((product, index) => (
            <CartCard product={product} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
