/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  src: string;
  padding: string | undefined;
  path: string;
};

export default function CategoryCard({ title, src, padding, path }: Props) {
  return (
    <Link href={path}>
      <div className="w-44 h-32 bg-amber-100 rounded-xl flex flex-col items-end px-4 py-2">
        <p className="text-sm text-black opacity-90">{title}</p>

        <Image
          className={padding}
          src={src}
          width={80}
          height={80}
          alt="catgory-logo"
        />
      </div>
    </Link>
  );
}
