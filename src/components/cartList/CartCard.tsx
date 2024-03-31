"use client";
import { Product } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { UserActivityContext } from "../context/UserActivityContext";
import { slimFont } from "@/fonts/slimfont";
type Props = {
  product: Product;
};

export default function CartCard({ product }: Props) {
  const { imageURL, seller, title, description, price, vip, id, category } =
    product;
  const { total, setTotal, cartItems, setCartItems } =
    useContext(UserActivityContext);
  const [count, setCount] = useState(1);
  const sum = price * count;

  const handleDelete = () => {
    const filteredCart = cartItems.filter((item) => item.title !== title);
    setCartItems((prev: Product[]) => filteredCart);
    if (total - sum < 0) {
      setTotal((prev) => prev * 0);
    }
    setTotal((prev) => prev - sum);
  };
  useEffect(() => {
    if (count === 1 && total === 0) setTotal((prev) => prev + price / 2);
  }, [count, total, setTotal, price]);

  return (
    <div className="flex w-full gap-6 justify-between  bg-white rounded-lg p-3 items-center">
      <div className="  flex flex-col  w-56  bg-white rounded-lg p-3 relative">
        {vip && (
          <label className="text-white bg-blue-500 absolute w-12 rounded-sm left-3 text-center">
            VIP +
          </label>
        )}
        <Image
          className=" rounded-lg"
          src={imageURL}
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
        <Link
          href={`/electronics/${
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
        </div>
      </div>
      <div className="flex justify-center items-center ml-8 text-gray-600 gap-2 text-lg ">
        <div
          onClick={() => {
            if (count > 1) {
              setCount((prev) => prev - 1);
              setTotal((prev) => prev - price);
            }
          }}
          className="cursor-pointer rounded-lg w-8 h-4 bg-white shadow-md shadow-yellow-200 grid place-content-center "
        >
          <p>&minus;</p>
        </div>
        <p>{count}</p>
        <div
          onClick={() => {
            setCount((prev) => prev + 1);
            setTotal((prev) => prev + sum);
          }}
          className="cursor-pointer rounded-lg w-8 h-4 bg-white shadow-md shadow-yellow-200 grid place-content-center "
        >
          <p>&#43;</p>
        </div>
      </div>
      <p>{sum}₾</p>
      <div
        onClick={handleDelete}
        className="text-[12px] cursor-pointer text center text-gray-600 flex flex-col items-center"
      >
        <Image src="/icons/bin.png" alt="bin" width={24} height={24} />
        <p className={`${slimFont.className}`}> წაშლა</p>
      </div>
    </div>
  );
}
