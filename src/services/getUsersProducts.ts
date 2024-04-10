import supabase from "./supabase";
import { Product } from "@/utils/types";

interface UserProduct extends Product {
  created_at: string;
}

type Props = {
  category: string;
  id: number;
};
export async function getUsersProducts(id: string) {
  const { data: mobiles, error: mobilesError } = await supabase
    .from("mobiles")
    .select("*")
    .eq("user_id", id);

  if (mobilesError) {
    console.warn(mobilesError.message);
    throw new Error("Product could not be loaded");
  }

  const { data: laptops, error: laptopsError } = await supabase
    .from("laptops")
    .select("*")
    .eq("user_id", id);

  if (laptopsError) {
    console.warn(laptopsError.message);
    throw new Error("Product could not be loaded");
  }

  const { data: tvs, error: tvsError } = await supabase
    .from("tvs")
    .select("*")
    .eq("user_id", id);

  if (tvsError) {
    console.warn(tvsError.message);
    throw new Error("Product could not be loaded");
  }

  const allProducts: UserProduct[] = [...mobiles, ...laptops, ...tvs];
  return allProducts;
}

export async function deleteUserProduct(category: string, id: number) {
  const { error } = await supabase.from(category).delete().eq("id", id);

  if (error) {
    throw new Error("პროდუქტი ვერ მოიძებნა");
  }
}
