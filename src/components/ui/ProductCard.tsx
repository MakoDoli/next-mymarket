import Image from "next/image";
import React from "react";

type Props = {
  product: {
    imageURL: string;
    seller: string;
    title: string;
    description: string;
    price: string;
    vip: boolean;
  };
};

export default function ProductCard({ product }: Props) {
  const { imageURL, seller, title, description, price, vip } = product;
  return (
    <div className=" flex flex-col  w-56 h-[350px] bg-white rounded-lg p-3 relative">
      {vip && (
        <label className="text-white bg-blue-500 absolute w-12 rounded-sm left-3 text-center">
          VIP +
        </label>
      )}
      <Image
        className="w-[216px] h-[180px] rounded-lg"
        src={imageURL}
        alt="product-image"
        width={216}
        height={216}
      />
      <div className="flex gap-2 mt-2 ">
        <Image
          className="opacity-80"
          src="/icons/seller2.png"
          alt="seller-icon"
          width={18}
          height={18}
        />
        <p className="text-xs text-gray-400">{seller}</p>
      </div>
      <p className="mt-8">{title}</p>
      <p className=" text-xs mb-3 text-gray-600">
        {description.slice(0, 22)}..
      </p>
      <hr></hr>
      <div className="mt-1 flex justify-between items-center">
        <p>{price}ლ</p>
        <div className="grid cursor-pointer hover-ease rounded-md w-8 h-8 bg-gray-200 hover:bg-yellow-400">
          <Image
            className=" place-self-center "
            src="/icons/heart.png"
            alt="favorite-icon"
            width={16}
            height={16}
          />
        </div>
      </div>
    </div>
  );
}
