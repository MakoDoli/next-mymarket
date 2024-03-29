"use client";
import { Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

type Props = {
  product: {
    imageURL: string;
    seller: string;
    title: string;
    description: string;
    price: string;
    vip: boolean;
    id: number;
    category: string;
  };
}; //delete this one if second one works

type Props2 = {
  product: Product;
};

export default function ProductCard({ product }: Props2) {
  const { imageURL, seller, title, description, price, vip, id, category } =
    product;
  const { favorites, setFavorites } = useContext(UserActivityContext);
  const isFavorite = favorites.includes(product);

  const handfavorites = () => {
    if (!isFavorite) {
      setFavorites((prev: Product[]) => [...prev, product]);
    }
    if (isFavorite) {
      const filteredFavorites = favorites.filter(
        (item) => item.title !== title
      );
      setFavorites((prev: Product[]) => filteredFavorites);
    }
  };

  return (
    <div className="  flex flex-col  w-56 h-[350px] bg-white rounded-lg p-3 relative">
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
      <Link
        href={`/electronics/${
          category === "computers" ? "laptops" : category
        }/${id}/details`}
      >
        {" "}
        <p className="mt-8 cursor-pointer ">{title}</p>
      </Link>
      <p className=" text-xs mb-3 text-gray-600">
        {description.slice(0, 22)}..
      </p>
      <hr></hr>
      <div className="mt-1 flex justify-between items-center">
        <p>{price}ლ</p>
        <div
          className={`grid cursor-pointer hover-ease rounded-md w-8 h-8 ${
            isFavorite ? "bg-yellow-400" : "bg-gray-200"
          } hover:bg-yellow-400`}
        >
          <Image
            onClick={handfavorites}
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
