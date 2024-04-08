import Image from "next/image";
import React from "react";

export default function AdContent() {
  return (
    <div className="bg-gray-100 px-4 lg:px-12 pt-6 ">
      <div className="flex justify-between items-center bg-gradient-to-r 2xl:mx-10 from-white via-white to-blue-100 rounded-xl py-4 pl-8 pr-8 md:pr-24 overflow-x-hidden ">
        <Image
          src="/logos/smart.jpg"
          alt="smat-logo"
          width={100}
          height={100}
        />
        <div className=" animate-move-left overflow-x-hidden ">
          <p className="text-xl lg:text-4xl text-blue-600">
            {" "}
            Smart Solutions AI
          </p>
          <p className="text-blue-600 m-2 lg:text-lg italic">
            We bring AI to business
          </p>
        </div>
      </div>
    </div>
  );
}
