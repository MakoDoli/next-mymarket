"use client";
import { Product } from "@/utils/types";
import Image from "next/image";

import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

type Props2 = {
  product: Product;
};

export default function AddToCart({ product }: Props2) {
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
    <div
      className={`grid cursor-pointer hover-ease rounded-md w-8 h-8 ${
        isInCart ? "bg-yellow-400" : "bg-gray-200"
      } hover:bg-yellow-400`}
    >
      <Image
        onClick={handleCart}
        className=" place-self-center "
        src="/icons/cart-icon.svg"
        alt="favorite-icon"
        width={16}
        height={16}
      />
    </div>
  );
}
