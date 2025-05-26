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

  // const allProducts: UserProduct[] = [...mobiles, ...laptops, ...tvs];
  const { data: allProducts, error } = await supabase
    .from("electronics")
    .select("*")
    .eq("author", id);
  if (error) throw new Error("განცხადება ვერ მოიძებნა");
  return allProducts;
}

export async function deleteUserProduct(category: string, id: number) {
  const { error } = await supabase.from(category).delete().eq("id", id);

  if (error) {
    throw new Error("პროდუქტი ვერ მოიძებნა");
  }
}

export async function addToFavorites(productID: number, userID: string) {
  const { data, error: favoritesError } = await supabase
    .from("favorites")
    .insert([{ product_id: productID, user_id: userID }]);

  if (favoritesError) {
    console.warn(favoritesError.message);
    throw new Error("პროდუქტი რჩეულებში ვერ დაემატა");
  }
  return data;
}

export async function addToCart(
  productID: number,
  userID: string,
  quantity = 1
) {
  const { data, error: cartError } = await supabase
    .from("cart")
    .insert([{ product_id: productID, user_id: userID, quantity }]);

  if (cartError) throw new Error("პროდუქტი კალათაში ვერ დაემატა");

  return data;
}

export async function getUserFavorites(userID?: string) {
  const { data: favorites, error: favoritesListError } = await supabase
    .from("favorites")
    .select("product_id")
    .eq("user_id", userID);

  if (favoritesListError) throw new Error("რჩეულები ვერ მოიძებნა");

  const productIDs = favorites.map((product) => product.product_id);

  if (productIDs.length === 0) return [];

  const { data: products, error } = await supabase
    .from("electronics")
    .select("*")
    .in("id", productIDs);

  if (error) throw new Error("რჩეულები ვერ მოიძებნა");

  return products;
}
export async function getUserCart(userID?: string) {
  const { data: cart, error: cartError } = await supabase
    .from("cart")
    .select("product_id")
    .eq("user_id", userID);

  if (cartError) throw new Error("კალათა ვერ მოიძებნა");

  const productIDs = cart.map((item) => item.product_id);

  if (productIDs.length === 0) return [];

  const { data: products, error } = await supabase
    .from("electronics")
    .select("*")
    .in("id", productIDs);

  if (error) throw new Error("კალათა ვერ მოიძებნა");

  return products;
}

export async function deleteFromCart(productID: number, userID: string) {
  const { error } = await supabase.from("cart").delete().eq('user_id',userID).eq("product_id",productID);
  if (error) throw new Error ("პროდუქტი ვერ წაიშალა")
}
