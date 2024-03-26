import supabase from "./supabase";

export default async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.warn(error.message);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
