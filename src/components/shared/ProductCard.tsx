import { Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import AddToFavorites from "./AddToFav";
import AddToCart from "./AddToCart";

type Props2 = {
  product: Product;
};

export default function ProductCard({ product }: Props2) {
  const { image, seller, title, description, price, vip, id, category } =
    product;

  return (
    <div className="  flex flex-col  w-56 h-[350px] bg-white rounded-lg p-3 relative">
      {vip && (
        <label className="text-white bg-blue-600 absolute w-12 rounded-sm left-3 text-center">
          VIP +
        </label>
      )}
      <Image
        className="w-[216px] h-[180px] rounded-lg"
        src={image}
        alt="product-image"
        width={216}
        height={216}
      />
      <div className="flex gap-2 mt-2  ">
        <Image
          className="opacity-80"
          src="/icons/seller2.png"
          alt="seller-icon"
          width={18}
          height={18}
        />
        <p className="text-xs text-gray-500">{seller}</p>
      </div>
      <Link
        href={`/ka/electronics/${
          category === "computers" ? "laptops" : category
        }/${id}/details`}
      >
        <p className="mt-8 cursor-pointer ">{title}</p>
      </Link>
      <p className=" text-xs mb-3 text-gray-600">
        {description.slice(0, 22)}..
      </p>
      <hr></hr>
      <div className="mt-1 flex justify-between items-center">
        <p>{price}ლ</p>

        <div className="flex gap-2">
          <AddToFavorites product={product} />
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}
