/* eslint-disable @next/next/no-img-element */

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function HeaderBanner({
  setShowBanner,
}: {
  setShowBanner: Dispatch<SetStateAction<boolean>>;
}) {
  const randomAd = Math.floor(Math.random() * 10);

  return (
    <>
      <div
        className={`${
          randomAd <= 5 ? "block" : "hidden"
        } rounded-xl  m-2 flex justify-center`}
      >
        <div className="relative">
          <Link href="https://ilove.ge/" target="_blank">
            <img
              src="/images/banner.webp"
              alt="banner-image"
              className="rounded-xl"
            />
          </Link>
          <Link href="https://ilove.ge/" target="_blank">
            <img
              src="/images/i-love-logo.png"
              alt="logo"
              className="absolute w-28 h-12  left-0 ml-4 lg:ml-8 lg:w-52 lg:h-20 top-1/4 md:animate-scale-up  "
            />
          </Link>
          <div
            className=" w-8 h-8 rounded-full bg-violet-200 absolute grid place-items-center top-2 right-2 cursor-pointer "
            onClick={() => setShowBanner(false)}
          >
            <img src="/icons/close.png" alt="close" />
          </div>
        </div>
      </div>
      <div
        className={`${
          randomAd > 5 ? "block" : "hidden"
        } rounded-xl shadow-lg my-2 mx-8 md:mx-20 relative lg:mx-56 flex justify-around items-center bg-gradient-to-l from-white via-white to-pink-100  `}
      >
        <Link href="https://ilove.ge/" target="_blank">
          <img
            src="/images/i-love-logo.png"
            alt="logo"
            className=" w-28 h-12   ml-4 lg:ml-8 lg:w-52 lg:h-20 md:animate-scale-up "
          />
        </Link>
        <Link href="https://ilove.ge/" target="_blank">
          <img src="/images/shower.jpg" alt="banner-image" />
        </Link>
        <div
          className=" w-8 h-8 rounded-full bg-gray-100 absolute grid place-items-center top-2 right-2 cursor-pointer "
          onClick={() => setShowBanner(false)}
        >
          <img src="/icons/close.png" alt="close" />
        </div>
      </div>
    </>
  );
}
