"use client";
import { Product, UserProduct } from "@/utils/types";
import Image from "next/image";

import React, { useContext, useEffect, useState } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { addToFavorites } from "@/services/getUsersProducts";
import { useGetUserFavorites } from "@/hooks/useGetUsersItems";

type Props2 = {
  product: Product;
};

export default function AddToFavorites({ product }: Props2) {
  const { title } = product;
  const { favorites, setFavorites } = useContext(UserActivityContext);
  const { isAuthenticated, user } = useGetCurrentUser();

  const favoritesDB = useGetUserFavorites(user?.id) as UserProduct[];

  const [isFavorite, setIsFavorite] = useState(
    favorites.some((item) => item.title === product.title)
  );

  const handleFavorites = async () => {
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
      await addToFavorites(product.id, user!.id);
    }
  };
  useEffect(() => {
    if (favoritesDB?.length > 0)
      setIsFavorite(favoritesDB.some((item) => item.product_id === product.id));
  }, [favoritesDB, product.id]);
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
