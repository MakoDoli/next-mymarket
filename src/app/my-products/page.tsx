import MyProducts from "@/components/myProducts/MyProducts";
import Spinner from "@/components/ui/Spinner";
import React, { Suspense } from "react";

export default function myPage() {
  return (
    <Suspense fallback={<Spinner />}>
      <MyProducts />
    </Suspense>
  );
}
