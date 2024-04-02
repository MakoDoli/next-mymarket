import { useMutation, useQueryClient } from "@tanstack/react-query";

import { userLogin } from "../services/getUser";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isLoading } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => router.push("/cart"),

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Wrong login or password");
    },
  });
  return { mutate, isLoading };
}
