"use client";
import { Product } from "@/utils/types";

import React, { useContext } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";

type Props2 = {
  product: Product;
};

export default function AddButton({ product }: Props2) {
  const { title, price } = product;
  const { cartItems, setCartItems, setTotal } = useContext(UserActivityContext);

  const isInCart = cartItems.find((item) => item.title === title);

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
