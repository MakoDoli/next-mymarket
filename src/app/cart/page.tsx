import CartList from "@/components/cartList/CartList";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ჩემი კალათა",
};

export default function Cart() {
  return <CartList />;
}
