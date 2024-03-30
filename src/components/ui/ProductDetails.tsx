/* eslint-disable @next/next/no-img-element */
import { getProductDetails } from "@/services/getProducts";
import Image from "next/image";
import React from "react";
import AdContent from "./AdContent";
import Link from "next/link";
import { translate } from "@/utils/translate";
import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path");

  if (path) {
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}

type Props = {
  id: number;
  category: string;
};

export default async function ProductDetails({ category, id }: Props) {
  const randomNum = (value: number) => {
    return Math.floor(Math.random() * value) + 1000;
  };
  const data = await getProductDetails(
    category === "computers" ? "laptops" : category,
    id
  );
  const { title, description, price, seller, imageURL } = data[0];

  const links = translate(category);

  return (
    <main className="bg-gray-100 p-4 lg:p-12">
      <AdContent />
      <div className="text-gray-400 text-sm flex gap-2 mt-4">
        <div className="flex gap-2 items-center">
          <Link href="/">მთავარი</Link>
          <span className="flex items-center">&gt;</span>
        </div>
        <div className="flex gap-2 items-center">
          <Link href={`/electronics/${category}`}>{links}</Link>
          <span className="flex items-center">&gt;</span>
        </div>
        <p>{title}</p>
      </div>
      <section className="w-full mt-8 flex gap-4 bg-white lg:gap-8 rounded-xl p-2 ">
        <div className="flex w-[350px] h-[350px] border border-y-gray-400 rounded-xl p-2 lg:w-[470px] lg:h-[470px]">
          <img
            className="w-[330px] h-[250px] lg:w-[450px] lg:h-[320px]"
            src={imageURL}
            alt="product image"
          />
        </div>
        <div className="flex flex-col text-left gap-4">
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
            {" "}
            <Image src="/icons/phone.png" alt="phone" width={24} height={24} />
            <p>599 458 ***</p>
          </span>
          <p>ფასი: {price}₾</p>
          <p className="text-gray-700">{description}</p>
        </div>
      </section>
      <div className="flex flex-col my-6 bg-white  w-full p-4 lg:p-8 rounded-xl gap-6">
        <h2 className="text-gray-700 text-lg">მახასიათებლები</h2>
        <hr className="bg-yellow-400 h-1 w-1/6"></hr>
      </div>
    </main>
  );
}
