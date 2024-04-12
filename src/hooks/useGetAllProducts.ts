"use client";
import getProducts from "@/services/getProducts";
import { useQuery } from "@tanstack/react-query";

export function useGetMobiles() {
  const { data: mobiles } = useQuery({
    queryKey: ["mobiles"],
    queryFn: () => getProducts("mobiles"),
  });

  return mobiles;
}
export function useGetlaptops() {
  const { data: laptops } = useQuery({
    queryKey: ["laptops"],
    queryFn: () => getProducts("laptops"),
  });

  return laptops;
}

export function useGetTvs() {
  const { data: tvs } = useQuery({
    queryKey: ["tvs"],
    queryFn: () => getProducts("tvs"),
  });

  return tvs;
}
