import CategoriesCarousel from "@/components/categories/CategoriesCarousel";
import DisplayAllProducts from "@/components/mainSection/DisplayAllProducts";
import Spinner from "@/components/ui/Spinner";
import { useTranslations } from "next-intl";
import { Suspense } from "react";

export default function Home() {
  const t = useTranslations("Index");
  console.log(t);
  return (
    <main className="2xl:px-8">
      <h1>{t("title")}</h1>
      <CategoriesCarousel />
      <Suspense fallback={<Spinner />}>
        <DisplayAllProducts />
      </Suspense>
    </main>
  );
}
