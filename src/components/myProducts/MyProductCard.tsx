import { slimFont } from "@/fonts/slimfont";
import { deleteUserProduct } from "@/services/getUsersProducts";
import { Product } from "@/utils/types";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface UserProduct extends Product {
  created_at: string;
}

type Props = {
  product: UserProduct;
};

export default function MyProductCard({ product }: Props) {
  const {
    image,
    title,
    description,
    price,
    seller,
    vip,
    category,
    id,
    created_at: added,
  } = product;
  const date = new Date(added).toLocaleDateString();
  const router = useRouter();
  const queryClient = useQueryClient();
  const handleDelete = async () => {
    await deleteUserProduct(category, id);
    queryClient.invalidateQueries({
      queryKey: ["userProducts"],
    });
    router.push("/my-products");
  };

  return (
    <div className="flex flex-col   gap-6 md:flex-row justify-between   bg-white rounded-lg p-3 items-center">
      <div className="lg:flex lg:flex-row">
        <div className="  flex flex-col   w-56  bg-white rounded-lg p-3 relative">
          {vip && (
            <label className="text-white bg-blue-500 absolute w-12 rounded-sm left-3 text-center">
              VIP +
            </label>
          )}
          <Image
            className=" rounded-lg"
            src={image}
            alt="product-image"
            width={116}
            height={116}
          />
          <div className="flex gap-2 mt-2  ">
            <Image
              className="opacity-80"
              src="/icons/seller2.png"
              alt="seller-icon"
              width={18}
              height={18}
            />
            <p className="text-xs text-gray-400">{seller}</p>
          </div>
        </div>
        <div>
          <p className="mt-8 cursor-pointer ">{title}</p>

          <p className=" text-xs mb-3 text-gray-600">
            {description.slice(0, 22)}..
          </p>
          <hr></hr>
          <div className="mt-1 flex justify-between items-center">
            <p>{price}ლ</p>
          </div>
        </div>
      </div>
      <div className={`${slimFont.className} text-blue-600 font-light text-sm`}>
        დამატებულია: {date}{" "}
      </div>
      <div
        onClick={handleDelete}
        className="text-[12px] cursor-pointer text center text-gray-600 flex flex-col items-center gap-2"
      >
        <Image src="/icons/bin.png" alt="bin" width={24} height={24} />
        <p className={`${slimFont.className}`}> წაშლა</p>
      </div>
    </div>
  );
}
