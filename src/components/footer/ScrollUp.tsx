"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } bg-yellow-400 text-white w-full  shadow-md hover-ease hover:bg-yellow-300 rounded-md flex justify-center cursor-pointer my-6`}
        onClick={scrollToTop}
      >
        <Image src="/icons/arrow-up.png" alt="to-top" width={40} height={40} />
      </div>
    </div>
  );
}
