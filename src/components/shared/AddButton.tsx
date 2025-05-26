"use client";
import { Product } from "@/utils/types";

import React, { useContext } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import { useGetUSerCart } from "@/hooks/useGetUsersItems";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { addToCart } from "@/services/getUsersProducts";
import { revalidatePath } from "next/cache";
import { useAddToCart } from "@/hooks/useUpdateUserProducts";

type Props2 = {
  product: Product;
};

export default function AddButton({ product }: Props2) {
  const { title, price } = product;
  const { cartItems, setCartItems, setTotal } = useContext(UserActivityContext);
  const { isAuthenticated, user } = useGetCurrentUser();
  const { mutate: addToCart } = useAddToCart();

  const cartProducts = useGetUSerCart(user?.id) as Product[];
  const isInCart = !isAuthenticated
    ? cartItems.find((item) => item.title === title)
    : cartProducts?.find((item) => item.id === product.id);
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
      addToCart({ productID: product.id, userID: user!.id });
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
