import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul className="flex gap-2 lg:gap-6 items-center">
        <li>
          <div className="flex items-center bg-amber-100 hover:bg-amber-200 gap-2 bg-opacity-90 cursor-pointer w-32 h-10 rounded-xl px-3 hover-ease">
            <Image
              src="/icons/plus-icon.png"
              alt="plus"
              width={16}
              height={16}
            />
            <p className="text-xs">დამატება</p>
          </div>
        </li>
        <li className="flex gap-2 lg:gap-6">
          <Image
            className="cursor-pointer"
            src="/icons/message-icon.svg"
            alt="message-icon"
            width={21}
            height={20}
          />

          <Image
            className="cursor-pointer"
            src="/icons/favorites-icon.svg"
            alt="heart-icon"
            width={21}
            height={20}
          />

          <Image
            className="cursor-pointer"
            src="/icons/cart-icon.svg"
            alt="cart-icon"
            width={21}
            height={20}
          />
        </li>
        <li>
          <div className="flex w-28 h-10 rounded-xl px-3 justify-between items-center border border-grey-400 cursor-pointer">
            <Image
              src="/icons/user-icon.svg"
              alt="user-icon"
              width={18}
              height={18}
            />
            <p className=" font-medium text-sm">შესვლა</p>
          </div>
        </li>
        <li>
          <div className=" border rounded-full hover:border-blue-600 hover-ease">
            <Image
              className="cursor-pointer"
              src="/icons/tnet-icon.svg"
              alt="user-icon"
              width={40}
              height={40}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}