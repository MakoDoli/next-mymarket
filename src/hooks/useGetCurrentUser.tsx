//"use client";
import { getCurrentUser } from "@/services/getUser";
import { useQuery } from "@tanstack/react-query";

export function useGetCurrentUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
