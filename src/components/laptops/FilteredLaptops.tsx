"use client";
import React, { useContext } from "react";
import { UserActivityContext } from "../context/UserActivityContext";

import LaptopsList from "./Laptops";

export default function FilteredLaptops() {
  const { searchValue } = useContext(UserActivityContext);
  return <LaptopsList />;
}
