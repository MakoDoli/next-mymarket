/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { UserActivityContext } from "../../context/UserActivityContext";
import { useLogout } from "@/hooks/useLogout";

import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { useGetUSerCart, useGetUserFavorites } from "@/hooks/useGetUsersItems";
import { Product } from "@/utils/types";

export default function Navbar() {
  const { favorites, cartItems } = useContext(UserActivityContext);
  const { user, isAuthenticated } = useGetCurrentUser();
  const logout = useLogout();
  const router = useRouter();
  const favoritesDB = useGetUserFavorites(user?.id) as Product[];
  const cartProducts = useGetUSerCart(user?.id) as Product[];

  const favNum = favoritesDB ? favoritesDB.length : favorites.length;
  const cartNum = cartProducts ? cartProducts.length : cartItems.length;

  function handleLogin() {
    if (isAuthenticated) logout();
    if (!isAuthenticated) router.push("/ka/login");
  }

  return (
    <div>
      <ul className="flex gap-2 lg:gap-6 items-center">
        <li>
          <Link href={`${isAuthenticated ? "/ka/new" : "/ka/login"}`}>
            <div className="flex items-center bg-amber-100 hover:bg-amber-200 gap-2 bg-opacity-90 cursor-pointer w-32 h-10 rounded-xl px-3 hover-ease">
              <Image
                src="/icons/plus-icon.png"
                alt="plus"
                width={16}
                height={16}
              />
              <p className="text-xs">დამატება</p>
            </div>
          </Link>
        </li>
        <li className="flex gap-2 lg:gap-6">
          <Image
            className="cursor-pointer"
            src="/icons/message-icon.svg"
            alt="message-icon"
            width={21}
            height={20}
          />
          <Link href="/ka/favorites">
            <div className="w-[22px] h-[21px] relative">
              <div
                className={` bg-orange-500 rounded-full w-4 ${
                  favNum > 0 ? "block" : "hidden"
                } absolute left-3 bottom-3 min-w-5 text-center text-white text-[10px]`}
              >
                {favNum}
              </div>
              <Image
                className="cursor-pointer "
                src="/icons/favorites-icon.svg"
                alt="heart-icon"
                width={21}
                height={20}
              />
            </div>
          </Link>
          <Link href="/ka/cart">
            <div className="w-[22px] h=[21px] relative ">
              <div
                className={` bg-orange-500 rounded-full w-4 ${
                  cartNum > 0 ? "block" : "hidden"
                } absolute left-3 bottom-3 min-w-5 text-center text-white text-[10px]`}
              >
                {cartNum}
              </div>
              <Image
                className="cursor-pointer"
                src="/icons/cart-icon.svg"
                alt="cart-icon"
                width={21}
                height={20}
              />
            </div>
          </Link>
        </li>
        <li>
          <div
            className="flex w-28 h-10 rounded-xl px-3 justify-between items-center border border-grey-400 cursor-pointer hover-ease hover:bg-gray-100"
            onClick={handleLogin}
          >
            <Image
              src="/icons/user-icon.svg"
              alt="user-icon"
              width={18}
              height={18}
            />
            <p className=" font-medium text-sm">
              {isAuthenticated ? "გამოსვლა" : "შესვლა"}
            </p>
          </div>
        </li>
        <li>
          <Link
            href="https://auth.tnet.ge/ka/user/login/?Continue=https://www.mymarket.ge/ka"
            target="_blank"
            rel="norefferer"
          >
            <div className=" border rounded-full hover:border-blue-600 hover-ease">
              <Image
                className="cursor-pointer"
                src="/icons/tnet-icon.svg"
                alt="user-icon"
                width={40}
                height={40}
              />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
