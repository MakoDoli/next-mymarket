"use client";
import { Product, UserProduct } from "@/utils/types";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { addToCart } from "@/services/getUsersProducts";
import { useGetUSerCart } from "@/hooks/useGetUsersItems";

type Props2 = {
  product: Product;
};

export default function AddToCart({ product }: Props2) {
  const { title, price } = product;
  const { cartItems, setCartItems, setTotal } = useContext(UserActivityContext);
  const { isAuthenticated, user } = useGetCurrentUser();

  const [isInCart, setIsInCart] = useState(
    cartItems.some((item) => item.title === title)
  );

  const cartProducts = useGetUSerCart(user?.id) as UserProduct[];
  const handleCart = async () => {
    if (!isAuthenticated) {
      if (!isInCart) {
        setCartItems((prev: Product[]) => [...prev, product]);

        setTotal((prev) => prev + price);
      }
      if (isInCart) {
        const filteredCart = cartItems.filter((item) => item.title !== title);
        setCartItems((prev: Product[]) => filteredCart);
        setTotal((prev) => prev - price);
      }
    }

    if (isAuthenticated) {
      await addToCart(product.id, user!.id);
    }
  };
  useEffect(() => {
    if (cartProducts?.length > 0)
      setIsInCart(cartProducts.some((item) => item.product_id === product.id));
  }, [cartProducts, product.id]);
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
