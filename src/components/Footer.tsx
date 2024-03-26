/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-4 lg:px-12 py-5 ">
      <div className="flex items-center justify-between w-3/5 mb-6">
        <p className="cursor-pointer text-xs underline text-gray-400 hover:text-gray-600">
          წესები და პირობები
        </p>
        <p className="cursor-pointer text-xs underline text-gray-400 hover:text-gray-600">
          კონფიდენციალურობის პოლიტიკა
        </p>
        <p className="cursor-pointer text-xs underline text-gray-400 hover:text-gray-600">
          დაბრუნების პოლიტიკა
        </p>
        <div className="border gap-2 border-gray-400 rounded-lg flex px-4 py-1 cursor-pointer hover:bg-gray-100 items-center hover-ease">
          <Image
            src="/icons/globe.png"
            alt="globe-icone"
            width={21}
            height={21}
          />
          <p className="text-gray-800 text-sm ">ქართული</p>
        </div>
      </div>
      <ul className="flex justify-between w-full items-center">
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/tnet-footer.png" alt="tnet" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/myauto.png" alt="myauto" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/myparts.png" alt="myparts" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/myhome.png" alt="myhome" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/mymarket.png" alt="mymarket" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/superapp.png" alt="superapp" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/myshop.png" alt="myshop" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/swopp.png" alt="swoop" />
        </li>
        <li className="cursor-pointer hover:opacity-70">
          <img src="/logos/vendoo.png" alt="vendoo" />
        </li>
      </ul>
    </footer>
  );
}
