import { useMutation } from "@tanstack/react-query";
import { register } from "../services/getUser";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export function useSignup() {
  const router = useRouter();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      router.push("/cart");
      toast.success("Account created");
    },
  });

  return { signUp, isPending };
}
