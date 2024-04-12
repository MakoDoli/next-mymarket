/* eslint-disable @next/next/no-img-element */
import { slimFont } from "@/fonts/slimfont";
import React from "react";
type Props = {
  arr: String[];
};
export default function LastSearch({ arr }: Props) {
  return (
    <div className="flex gap-4">
      <div className="ml-4 mt-8 lg:ml-12 flex gap-4 overflow-hidden relative flex-wrap lg:flex-nowrap text-xs">
        <div
          className={`${slimFont.className} text-white bg-black opacity-90  rounded-xl px-4 py-3 `}
        >
          <h2>ბოლოს მოძებნილი</h2>
        </div>
        <ul className="flex gap-8 items-center text-xs">
          {arr.map((str, index) => (
            <li key={index} className="flex gap-2">
              <img src="/icons/history.png" alt="search-history"></img>
              {str}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
