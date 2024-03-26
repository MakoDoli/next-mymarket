"use client";
import getCabins from "@/services/apiMobiles";
import React, { useEffect } from "react";

export default function MobilePhones() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return <div>mobilePhones arrived</div>;
}
