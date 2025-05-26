"use client";
import React, { useContext, useEffect, useState } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import CartSidebar from "./CartSidebar";
import CartCard from "./CartCard";

import Link from "next/link";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { useGetUSerCart } from "@/hooks/useGetUsersItems";
import { Product } from "@/utils/types";

export default function CartList() {
  const { cartItems, total } = useContext(UserActivityContext);
  const { isAuthenticated, user } = useGetCurrentUser();
  const [cartList, setCartList] = useState<Product[] | []>([]);

  const cartProducts = useGetUSerCart(user?.id) as Product[];

  useEffect(() => {
    if (!isAuthenticated) setCartList(cartItems);
    if (isAuthenticated) setCartList(cartProducts);
  }, [isAuthenticated, cartItems, cartProducts, user]);
  return (
    <main className="p-4 flex flex-col-reverse bg-gray-100 lg:px-12 md:flex-row gap-2 lg:gap-4">
      <CartSidebar />
      <section className=" w-full  p-4 lg:pl-8 ">
        <div className="flex justify-between">
          <h2 className="text-2xl">ჩემი კალათა</h2>
          <div className="flex gap-3 items-center ">
            <p className="text-lg text-blue-600">{total} ₾</p>
            <Link href={isAuthenticated ? "/ka/purchase" : "/ka/login"}>
              <div className="bg-yellow-400 hover:bg-yellow-300 hover-ease px-3  h-[2rem] rounded-md text-center  text-md cursor-pointer ">
                ყიდვა
              </div>
            </Link>
          </div>
        </div>
        <div className="flex my-8 flex-col gap-x-4 gap-y-6">
          {cartList?.map((product, index) => (
            <CartCard product={product} key={index} user={user} isAuthenticated={isAuthenticated}/>
          ))}
        </div>
      </section>
    </main>
  );
}
