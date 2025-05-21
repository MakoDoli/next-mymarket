"use client";
import { useContext, useEffect, useState } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import ProductCard from "../shared/ProductCard";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { useGetUserFavorites } from "@/hooks/useGetUsersItems";
import { Product } from "@/utils/types";

export default function FavoritesList() {
  const { favorites } = useContext(UserActivityContext);
  const { user, isAuthenticated } = useGetCurrentUser();
  const [favoritesList, setFavoritesList] = useState<Product[] | []>([]);

  const favoritesDB = useGetUserFavorites(user?.id) as Product[];

  useEffect(() => {
    if (!isAuthenticated) setFavoritesList(favorites);
    if (isAuthenticated) setFavoritesList(favoritesDB);
  }, [isAuthenticated, favoritesDB, favorites, user]);
  return (
    <section className=" mt-6  p-4   lg:p-12">
      <label className="text-xl">შენი რჩეულები</label>
      <div className="flex my-8 flex-wrap gap-x-4 gap-y-6">
        {favoritesList?.slice(0, 12).map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </section>
  );
}
