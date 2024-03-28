/* eslint-disable @next/next/no-img-element */
import React from "react";
import { categoriesData } from "@/utils/categoriesData";
import CategoryCard from "./CategoryCard";
import Image from "next/image";

export default function CategoriesCarousel() {
  return (
    <div className="px-4 lg:px-12 flex gap-4 overflow-hidden  flex-wrap lg:flex-nowrap">
      <div className=" min-w-[180px] h-32 bg-black opacity-90 rounded-2xl p-6">
        <img
          src="/icons/menu-bar.png"
          className="cursor-pointer opacity-90 mb-2"
          alt="hamburger-menu"
        />
        <p className="text-white opacity-90 text-sm">
          ყველა <br></br> კატეგორია
        </p>
      </div>
      <div className="flex gap-4 relative flex-wrap lg:flex-nowrap">
        <Image
          src="/icons/left.png"
          alt="left-arrow"
          width={60}
          height={60}
          className="absolute z-10 left-0 opacity-0 cursor-pointer top-8 hidden lg:block hover:opacity-50"
        />
        <Image
          src="/icons/right.png"
          alt="left-arrow"
          width={60}
          height={60}
          className="absolute z-10 right-[400px] opacity-0 cursor-pointer top-8 hidden hover:opacity-50 lg:block"
        />
        {categoriesData.map((card, index) => (
          <CategoryCard
            key={index}
            path={card.path || ""}
            padding={card.margin}
            title={card.title}
            src={card.src}
          />
        ))}
      </div>
    </div>
  );
}
