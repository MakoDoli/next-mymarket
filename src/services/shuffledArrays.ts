import getProducts, { getItems } from "@/services/getProducts";
import { Product } from "@/utils/types";

export default async function getAllProducts() {
  const allProducts: Product[] = await getItems("electronics");

  function shuffleArray(array: Product[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const shuffledArr = shuffleArray(allProducts);

  return shuffledArr;
}
