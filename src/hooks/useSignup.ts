import { useMutation } from "@tanstack/react-query";
import { register, resetPassword } from "../services/getUser";
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

export function useResetPass() {
  const router = useRouter();
  const { mutate: resetPass, isPending } = useMutation({
    mutationFn: resetPassword,
    onSuccess: () => {
      toast.success("პაროლი წარმატებით შეიცვალა");
      router.push("/login");
    },
    onError: (err) => {
      console.warn(err);
      toast.error("სამწუხაროდ მოხდა შეცდომა");
    },
  });

  return { resetPass, isPending };
}
