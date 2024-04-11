import { useMutation } from "@tanstack/react-query";
import { sendLink, userLogin } from "../services/getUser";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin() {
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: userLogin,
    onSuccess: () => router.push("/cart"),

    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Wrong login or password");
    },
  });
  return { mutate, isPending };
}

export function useReset() {
  const { mutate: resetLink, isPending } = useMutation({
    mutationFn: sendLink,
    onSuccess: () => {
      toast.success("ლინკი გაგზავნილია. გთხოვთ შეამოწმოთ ელ-ფოსტა");
    },
  });
  return { resetLink, isPending };
}
