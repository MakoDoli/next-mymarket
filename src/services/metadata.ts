import { Metadata, ResolvingMetadata } from "next";
import { getProductDetails } from "./getProducts";

type Props = {
  params: {
    id: number;
    category: string;
  };
};

export async function getMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  const product = await getProductDetails(id);
  const previousTitle = (await parent).title || "";
  return {
    title: product[0].title || previousTitle,
  };
}
