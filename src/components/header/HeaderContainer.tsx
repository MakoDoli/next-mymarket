"use client";
import Image from "next/image";
import { Suspense } from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import Searchbar from "./Searchbar";
import HeaderAds from "./HeaderAds";

export default function HeaderContainer() {
  return (
    <header className="sticky top-0 bg-white z-20">
      <HeaderAds />
      <div className="px-4 lg:px-12 py-8 flex gap-3 flex-col lg:flex-row 2xl:px-20 justify-between  bg-white w-full  ">
        <div className="flex gap-3">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={150} height={41} />
          </Link>
          <div className="flex  w-96  border border-grey-400 pr-2 rounded-xl ">
            <Suspense>
              <Searchbar />
            </Suspense>
            <Image
              className="cursor-pointer"
              src="/icons/camera-icon.svg"
              alt="camera-icon"
              width={21}
              height={20}
            />
            <div className="border-l border-grey-400 mx-4 h-6 my-auto cursor-pointer"></div>
            <Image
              className="cursor-pointer"
              src="/icons/search-icon.svg"
              alt="camera-icon"
              width={21}
              height={20}
            />
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  );
}
