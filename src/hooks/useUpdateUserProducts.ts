import { addToCart, addToFavorites } from "@/services/getUsersProducts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productID,
      userID,
    }: {
      productID: number;
      userID: string;
    }) => addToCart(productID, userID),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["cart"] }),
  });
}

export function useAddToFavorites() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productID,
      userID,
    }: {
      productID: number;
      userID: string;
    }) => addToFavorites(productID, userID),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });
}
