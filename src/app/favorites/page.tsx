import FavoritesList from "@/components/favoritesList/FavoritesList";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <FavoritesList />
    </Suspense>
  );
}
