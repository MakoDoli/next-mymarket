import { getUsersProducts } from "@/services/getUsersProducts";
import { useQuery } from "@tanstack/react-query";

export default function useGetUsersItems(id: string) {
  const { data: products } = useQuery({
    queryKey: ["userProducts"],
    queryFn: () => getUsersProducts(id),
  });

  return products;
}
