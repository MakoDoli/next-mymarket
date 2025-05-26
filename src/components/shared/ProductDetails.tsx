/* eslint-disable @next/next/no-img-element */
import { getProductDetails } from "@/services/getProducts";
import Image from "next/image";
import React from "react";
import AdContent from "../ui/AdContent";
import { slimFont } from "@/fonts/slimfont";
import AddButton from "./AddButton";
import AddToFavorites from "./AddToFav";
import CategoryLinks from "./CategoryLinks";
type Props = {
  id: number;
  category: string;
};

export default async function ProductDetails({ category, id }: Props) {
  const randomNum = (value: number) => {
    return Math.floor(Math.random() * value) + 1000;
  };

  const data = await getProductDetails(id);
  const { title, description, price, seller, image } = data[0];

  return (
    <>
      <AdContent />
      <main className="bg-gray-100 p-4 lg:px-12 ">
        <CategoryLinks category={category} title={title} />
        <section className="w-full mt-8 flex items-center md:flex-row md:justify-between flex-col  gap-4 bg-white lg:gap-8 rounded-xl p-2 ">
          <div className="flex flex-col items-end gap-8 w-[350px] h-[350px] border border-y-gray-400 rounded-xl p-2 lg:w-[420px] lg:h-[400px]">
            <img
              className="w-[300px] h-[250px] lg:w-[450px] lg:h-[320px] rounded-lg"
              src={image}
              alt="product image"
            />
            <AddToFavorites product={data[0]} />
          </div>
          <div className="flex min-w-44 justify-start flex-col text-left gap-4 ">
            <p>ID:{randomNum(90000)}</p>
            <hr></hr>
            <p className="italic">{title}</p>
            <hr></hr>
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
            <span className="flex gap-2 text-blue-800">
              <Image
                src="/icons/phone.png"
                alt="phone"
                width={24}
                height={24}
              />
              <p>599 458 ***</p>
            </span>
            <p>ფასი: {price}₾</p>
            <p className="text-gray-700">{description}</p>
          </div>
          <div className=" h-80 shadow-lg w-96 rounded-lg p-4 lg:p-12">
            <p className="font-bold text-lg">{price}₾</p>
            <AddButton product={data[0]} />
            <div className="bg-indigo-500 hover:bg-indigo-400 hover-ease w-[18rem] pt-3 m-auto h-[3rem]  rounded-xl text-center   text-white mt-4  text-md cursor-pointer ">
              <p>განვადებით შეძენა</p>
            </div>
            <div className="flex gap-3 mt-3">
              <img src="/icons/fast.png" alt="delivery" />
              <p className={` ${slimFont.className} text-gray-500  text-sm`}>
                მიტანა თბილისში <span className="text-black">5 ₾</span>
              </p>
            </div>
            <div className="flex gap-3 mt-3">
              <img src="/icons/return.png" alt="return" />
              <p className={` ${slimFont.className} text-gray-500  text-sm`}>
                არ ექვემდებარება დაბრუნებას
              </p>
            </div>
          </div>
        </section>
        <div className="flex flex-col my-6 bg-white  w-full p-4 lg:p-8 rounded-xl gap-6">
          <h2 className="text-gray-700 text-lg">მახასიათებლები</h2>
          <hr className="bg-yellow-400 h-1 w-1/6"></hr>
        </div>
      </main>
    </>
  );
}
