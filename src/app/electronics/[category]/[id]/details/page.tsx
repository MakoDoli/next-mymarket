import ProductDetails from "@/components/ui/ProductDetails";
//import Spinner from "@/components/ui/Spinner";

import { getMetadata } from "@/services/metadata";
import { Metadata, ResolvingMetadata } from "next";

import React, { Suspense } from "react";

type Props = {
  params: {
    category: string;
    id: number;
  };
};

export async function generateMetadata(
  params: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  return getMetadata(params, parent);
}

export default function Userpage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<h1>LOADING...</h1>}>
        <ProductDetails id={params.id} category={params.category} />
      </Suspense>
    </>
  );
}
