"use client";
import React, { useContext, useEffect, useRef } from "react";
import { Input } from "../ui/input";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { UserActivityContext } from "../context/UserActivityContext";

export default function Searchbar() {
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const { searchValue, setSearchValue, setLastSearch } =
    useContext(UserActivityContext);

  function handleChange(searchItem: string) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      if (pathName.includes("electronics")) {
        const params = new URLSearchParams(searchParams);
        if (searchItem) {
          params.set("query", searchItem);
          setLastSearch((prev: String[]) => [searchItem, ...prev]);
        } else {
          params.delete("query");
        }

        replace(`${pathName}?${params.toString()}`);
      }
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
        ძებნა
      </label>
      <Input
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      />
    </>
  );
}
