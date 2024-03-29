import CategoriesCarousel from "@/components/categories/CategoriesCarousel";
import DisplayAllProducts from "@/components/mainSection/DisplayAllProducts";
import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <CategoriesCarousel />
      <Suspense fallback={<Spinner />}>
        <DisplayAllProducts />
      </Suspense>
    </main>
  );
}
