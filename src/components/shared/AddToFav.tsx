"use client";
import { Product } from "@/utils/types";
import Image from "next/image";

import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

type Props2 = {
  product: Product;
};

export default function AddToFavorites({ product }: Props2) {
  const { title } = product;
  const { favorites, setFavorites } = useContext(UserActivityContext);

  const isFavorite = favorites.includes(product);

  const handlefavorites = () => {
    if (!isFavorite) {
      setFavorites((prev: Product[]) => [...prev, product]);
    }
    if (isFavorite) {
      const filteredFavorites = favorites.filter(
        (item) => item.title !== title
      );
      setFavorites((prev: Product[]) => filteredFavorites);
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
          onClick={handlefavorites}
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
