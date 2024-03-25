import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div>
      <Image src="/logo.png" alt="logo" width={150} height={41} />
      <h1>Header</h1>
    </div>
  );
}
