import FavoritesList from "@/components/favoritesList/FavoritesList";
import Spinner from "@/components/ui/Spinner";
import React, { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<Spinner />}>
      <FavoritesList />
    </Suspense>
  );
}
