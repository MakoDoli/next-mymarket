"use client";
import React, { RefObject, useContext, useEffect, useRef } from "react";
import { Input } from "../ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UserActivityContext } from "../context/UserActivityContext";

export default function Searchbar() {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const { searchValue, setSearchValue } = useContext(UserActivityContext);

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
    setSearchValue(searchItem);
  }

  // clear searchbar input value
  useEffect(() => {
    const handlePathChange = () => {
      setSearchValue("");
    };
    handlePathChange();
  }, [pathName, setSearchValue]);
  return (
    <>
      <label className="text-white text-xs " htmlFor="search-input">
        Search for item
      </label>
      <Input
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}
