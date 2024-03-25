import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="px-4 md:px-12 py-5 flex justify-between">
      <div className="flex gap-2">
        <Image src="/logo.svg" alt="logo" width={150} height={41} />
        <div className="flex w-96 ml-8 border border-grey-400 px-2 rounded-xl ">
          <Input />
          <Image
            src="/icons/camera-icon.svg"
            alt="camera-icon"
            width={21}
            height={20}
          />
          <div className="border-l border-grey-400 mx-4 h-6 my-auto"></div>
          <Image
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
