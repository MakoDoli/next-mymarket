import { slimFont } from "@/fonts/slimfont";
import { userMenu } from "@/utils/userMenu";
import Image from "next/image";
import React from "react";

export default function CartSidebar() {
  return (
    <aside className=" bg-white rounded-lg md:min-w-72 p-4 flex flex-col gap-8 ">
      <div className="flex gap-3 items-center">
        <Image
          src="/icons/femaleUser.png"
          alt="user-icon"
          width={50}
          height={50}
        />
        <p>შენი სახელი</p>
      </div>
      <ul
        className={`${slimFont.className} text-sm text-gray-500 px-4  list-disc`}
      >
        {userMenu.map((item, index) => (
          <li
            className="cursor-pointer hover:text-yellow-400 hover-ease  p-4"
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}