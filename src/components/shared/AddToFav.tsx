"use client";
import { Product } from "@/utils/types";
import Image from "next/image";

import React, { useContext } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { addToFavorites } from "@/services/getProducts";

type Props2 = {
  product: Product;
};

export default function AddToFavorites({ product }: Props2) {
  const { title } = product;
  const { favorites, setFavorites } = useContext(UserActivityContext);
  const { isAuthenticated, user } = useGetCurrentUser();

  const isFavorite = favorites.find((item) => item.title === product.title);

  const handleFavorites = async () => {
    console.log("STARTING!!");
    if (!isAuthenticated) {
      if (!isFavorite) {
        setFavorites((prev: Product[]) => [...prev, product]);
      }
      if (isFavorite) {
        const filteredFavorites = favorites.filter(
          (item) => item.title !== title
        );
        setFavorites((prev: Product[]) => filteredFavorites);
      }
    }

    if (isAuthenticated) {
      console.log("Starting from comp");
      await addToFavorites(product.id, user!.id);
    }
  };

  return (
    <div className="flex gap-2">
      <div
        className={`grid cursor-pointer hover-ease rounded-md w-8 h-8 ${
          isFavorite ? "bg-yellow-400" : "bg-gray-200"
        } hover:bg-yellow-400`}
      >
        <Image
          onClick={handleFavorites}
          className=" place-self-center "
          src="/icons/heart.png"
          alt="favorite-icon"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
}
