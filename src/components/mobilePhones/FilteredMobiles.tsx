"use client";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";
import MobilePhones from "./MobilePhones";

export default function FilteredMobiles() {
  const { searchValue } = useContext(UserActivityContext);
  return <MobilePhones filter={searchValue} />;
}
