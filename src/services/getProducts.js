import supabase from "./supabase";

export default async function getProducts(category) {
  const { data, error } = await supabase.from(category).select("*");
  if (error) {
    console.warn(error.message);
    throw new Error("Data could not be loaded");
  }

  return data;
}
