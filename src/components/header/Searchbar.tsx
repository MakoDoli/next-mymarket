"use client";
import React, { ChangeEvent, useContext, useRef, useState } from "react";
import { Input } from "../ui/input";
import { UserActivityContext } from "../context/UserActivityContext";

export default function Searchbar() {
  const { setSearchValue } = useContext(UserActivityContext);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      setSearchValue(e.target.value);
    }, 1000);
  }

  return (
    <>
      <label className="text-white " htmlFor="search-input">
        Search for item
      </label>
      <Input id="search-input" onChange={handleChange} />
    </>
  );
}
