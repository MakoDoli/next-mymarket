"use client";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";
import TVs from "./TVs";

export default function FilteredTvs() {
  const { searchValue } = useContext(UserActivityContext);
  return <TVs filter={searchValue} />;
}
