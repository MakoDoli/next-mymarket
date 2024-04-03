/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { categoriesData } from "@/utils/categoriesData";
import CategoryCard from "./CategoryCard";
import { slimFont } from "@/fonts/slimfont";

export default function CategoriesCarousel() {
  const [all, setAll] = useState(false);

  return (
    <div>
      <div className="flex flex-col gap-6 md:gap-1 md:flex-row justify-between text-gray-500 m-4 lg:m-12 ">
        <div
          className={`${slimFont.className} text-sm flex gap-2 lg:gap-8 items-center`}
        >
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            მეორადი განვადებით
          </p>
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            Trade In
          </p>
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            მაღაზიები
          </p>
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            ჩემით წავიღებ
          </p>
        </div>
        <div
          className={`${slimFont.className} text-sm flex gap-2 lg:gap-8 items-center`}
        >
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            გახსენი მაღაზია
          </p>
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            დახმარება
          </p>
          <p className="hover:text-yellow-400 hover-ease cursor-pointer">
            კონტაქტი
          </p>
        </div>
      </div>
      <div className="ml-4 lg:ml-12 flex gap-4 overflow-hidden relative flex-wrap lg:flex-nowrap">
        <div
          className=" min-w-[180px] z-10 h-32 bg-black opacity-90 rounded-2xl p-6 cursor-pointer"
          onClick={() => setAll(!all)}
        >
          <img
            src="/icons/menu-bar.png"
            className="cursor-pointer opacity-90 mb-2"
            alt="hamburger-menu"
          />
          <p className="text-white opacity-90 text-sm">
            ყველა <br></br> კატეგორია
          </p>
        </div>
        <div
          className={`flex gap-4  flex-wrap   ${
            !all ? "lg:flex-nowrap lg:hover:animate-move-spin" : "lg:flex-wrap"
          } `}
        >
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
    </div>
  );
}
