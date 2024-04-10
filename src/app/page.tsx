import CategoriesCarousel from "@/components/categories/CategoriesCarousel";
import Header from "@/components/header/Header";
import DisplayAllProducts from "@/components/mainSection/DisplayAllProducts";
import Spinner from "@/components/ui/Spinner";
import { revalidatePath } from "next/cache";
import { Suspense } from "react";
revalidatePath("/");
export default function Home() {
  return (
    <main className="xl:px-8">
      <CategoriesCarousel />
      <Suspense fallback={<Spinner />}>
        <DisplayAllProducts />
      </Suspense>
    </main>
  );
}
