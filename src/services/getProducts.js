import supabase, { supabaseUrl } from "./supabase";

export default async function getProducts(category) {
  const { data, error } = await supabase.from(category).select("*");
  if (error) {
    console.warn(error.message);
    throw new Error("Data could not be loaded");
  }

  return data;
}

export async function getProductDetails(category, id) {
  const { data, error } = await supabase
    .from(category)
    .select("*")
    .eq("id", id);

  if (error) {
    console.warn(error.message);
    throw new Error("Product could not be loaded");
  }

  return data;
}

export async function addNewProduct(newProduct, userID) {
  const imageName = `${Math.random()}-${newProduct.image.name}`.replaceAll(
    "/",
    ""
  );

  const { data, error: storageError } = await supabase.storage
    .from("mobile-phones")
    .upload(imageName, newProduct.image);

  if (storageError) {
    console.warn(storageError.message);
    throw new Error("სურათი ვერ აიტვირთა");
  }

  const imagePath = `${supabaseUrl}/storage/v1/object/public/mobile-phones/${imageName}`;

  const { error: insertError } = await supabase
    .from(newProduct.category)
    .insert([{ ...newProduct, image: imagePath, user_id: userID }]);

  if (insertError) {
    console.warn(insertError.message);
    throw new Error("პროდუქტი ვერ დაემატა");
  }

  return data;
}
