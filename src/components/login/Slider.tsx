/* eslint-disable @next/next/no-img-element */
import { loginSlider, reverseSlider } from "@/utils/slider";
import Image from "next/image";
import React from "react";

export default function Slider() {
  return (
    <div className="flex gap-6 flex-col lg:flex-row hover:paused ">
      <div className="flex animate-slider-up flex-col gap-6 hover:paused ">
        {loginSlider.map((item, index) => (
          <div className="rounded-xl " key={index}>
            <img
              src={item.image}
              alt="slider-image"
              className="rounded-xl cursor-pointer "
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:flex animate-slider-down hover:paused flex-col gap-6  ">
        {reverseSlider.map((item, index) => (
          <div
            className="rounded-xl cursor-pointer bg-gray-200 w-[300px] h-[290px] grid  "
            key={index}
          >
            <img
              src={item.image}
              alt="slider-image"
              className="rounded-xl absolute z-10 block hover:hidden "
            />
            <div className="grid place-items-center gap-4 rounded-xl  w-[200px] h-[290px]">
              <div className="flex flex-col w-full h-full justify-center items-center">
                <img src={item.logo} alt="slider-logo" className="w-20 h-6" />
                <p className="text-sm text-gray-700 m-auto">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
