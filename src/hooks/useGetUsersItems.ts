import {
  getUserCart,
  getUserFavorites,
  getUsersProducts,
} from "@/services/getUsersProducts";
import { useQuery } from "@tanstack/react-query";

export default function useGetUsersItems(id: string) {
  const { data: products } = useQuery({
    queryKey: ["userProducts"],
    queryFn: () => getUsersProducts(id),
  });

  return products;
}

export function useGetUserFavorites(userID?: string) {
  const { data: favoritesDB } = useQuery({
    queryKey: ["favorites"],
    queryFn: () => getUserFavorites(userID),
    enabled: !!userID, // prevents the query from running until user.id is available
  });
  return favoritesDB;
}

export function useGetUSerCart(userID?: string){
const {data: cartItems} = useQuery({
  queryKey: ["cart"],
  queryFn: ()=>getUserCart(userID),
  enabled: !!userID
})

return cartItems
}