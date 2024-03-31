"use client";
import { Product } from "@/utils/types";
import Image from "next/image";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

type Props2 = {
  product: Product;
};

export default function AddToCart({ product }: Props2) {
  const { title, price } = product;
  const { cartItems, setCartItems, setTotal } = useContext(UserActivityContext);

  const isInCart = cartItems.find((item) => item.title === title);
  const newItem = { itemTitle: title, quantity: 1 };
  const handleCart = () => {
    if (!isInCart) {
      setCartItems((prev: Product[]) => [...prev, product]);

      setTotal((prev) => prev + price);
    }
    if (isInCart) {
      const filteredCart = cartItems.filter((item) => item.title !== title);
      setCartItems((prev: Product[]) => filteredCart);
      setTotal((prev) => prev - price);
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
