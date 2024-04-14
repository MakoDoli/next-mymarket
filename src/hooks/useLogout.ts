import { logout } from "@/services/getUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export function useLogout() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { mutate: userLogout } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries();
      router.push("/");
    },
  });
  return userLogout;
}
