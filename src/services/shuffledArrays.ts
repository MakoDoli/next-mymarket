import getProducts from "@/services/getProducts";
import { Product } from "@/utils/types";

export default async function getAllProducts() {
  const mobiles = await getProducts("mobiles");
  const laptops = await getProducts("laptops");
  const tvs = await getProducts("tvs");

  // const [mobiles, laptops, tvs] = await Promise.all([
  //   getProducts("mobiles"),
  //   getProducts("laptops"),
  //   getProducts("tvs"),
  // ]);
  const allProducts: Product[] = [...mobiles, ...laptops, ...tvs];

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
