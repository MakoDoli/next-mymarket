import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-12 py-8 flex gap-3 flex-col lg:flex-row justify-between ">
      <div className="flex ">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={150} height={41} />
        </Link>
        <div className="flex  w-96 ml-2 lg:ml-8 border border-grey-400 px-2 rounded-xl ">
          <Input />
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
    </header>
  );
}
