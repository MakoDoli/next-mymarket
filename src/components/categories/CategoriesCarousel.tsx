/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useContext, useState } from "react";
import { categoriesData } from "@/utils/categoriesData";
import CategoryCard from "./CategoryCard";
import Image from "next/image";
import { UserActivityContext } from "../context/UserActivityContext";

export default function CategoriesCarousel() {
  const [all, setAll] = useState(false);

  return (
    <div className="px-4 lg:px-12 flex gap-4 overflow-hidden  flex-wrap lg:flex-nowrap">
      <div
        className=" min-w-[180px] h-32 bg-black opacity-90 rounded-2xl p-6 cursor-pointer"
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
        className={`flex gap-4 relative overflow-hidden flex-wrap ${
          !all ? "lg:flex-nowrap" : "lg:flex-wrap"
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
  );
}
