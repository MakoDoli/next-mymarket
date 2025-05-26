import { slimFont } from "@/fonts/slimfont";
import { translate } from "@/utils/translate";
import Link from "next/link";
import React from "react";

export default function CategoryLinks({
  category,
  title,
}: {
  category: string;
  title: string;
}) {
  const links = translate(category);
  return (
    <div
      className={`${slimFont.className} text-gray-600 text-sm flex gap-2 mt-4`}
    >
      <div className="flex gap-2 items-center">
        <Link href="/">მთავარი</Link>
        <span className="flex items-center">&gt;</span>
      </div>
      <div className="flex gap-2 items-center">
        <Link href={`/ka/electronics/${category}`}>{links}</Link>
        <span className="flex items-center">&gt;</span>
      </div>
      <p>{title}</p>
    </div>
  );
}
