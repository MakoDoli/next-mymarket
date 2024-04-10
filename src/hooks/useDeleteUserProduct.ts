import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteUserProduct } from "@/services/getUsersProducts";

export function useDeleteUserProduct() {
  const router = useRouter();

  const { mutate: deleteProduct, isPending } = useMutation({
    mutationFn: deleteUserProduct,

    onSuccess: () => {
      router.push("/my-products");
      toast.success("პროდუქტი წაშლილია");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteProduct, isPending };
}
