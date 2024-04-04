"use client";
import React, { useRef } from "react";
import { Input } from "../ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Searchbar() {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  function handleChange(searchItem: string) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (searchItem) {
        params.set("query", searchItem);
      } else {
        params.delete("query");
      }
      console.log(params.toString());
      replace(`${pathName}?${params.toString()}`);
    }, 1000);
  }

  return (
    <>
      <label className="text-white text-xs " htmlFor="search-input">
        Search for item
      </label>
      <Input onChange={(e) => handleChange(e.target.value)} />
    </>
  );
}
