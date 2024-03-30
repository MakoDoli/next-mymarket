"use client";
import { Product } from "@/utils/types";

import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

type Props2 = {
  product: Product;
};

export default function AddButton({ product }: Props2) {
  const { title } = product;
  const { cartItems, setCartItems } = useContext(UserActivityContext);

  const isInCart = cartItems.includes(product);

  const handleCart = () => {
    if (!isInCart) {
      setCartItems((prev: Product[]) => [...prev, product]);
    }
    if (isInCart) {
      const filteredCart = cartItems.filter((item) => item.title !== title);
      setCartItems((prev: Product[]) => filteredCart);
    }
  };
  return (
    <>
      <div
        onClick={handleCart}
        className="bg-yellow-400 hover:bg-yellow-300 hover-ease w-[18rem] m-auto pt-3 h-[3rem] rounded-xl text-center mt-4  text-md cursor-pointer "
      >
        <p>{isInCart ? "კალათიდან ამოღება" : "კალათაში დამატება"}</p>
      </div>
    </>
  );
}
