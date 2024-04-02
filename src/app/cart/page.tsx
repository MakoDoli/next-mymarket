import CartList from "@/components/cartList/CartList";
import React from "react";
import { Metadata } from "next";
import ProtectedCart from "@/components/cartList/ProtectedCart";

export const metadata: Metadata = {
  title: "ჩემი კალათა",
};

export default function Cart() {
  return (
    // <ProtectedCart>
    //   <CartList />
    // </ProtectedCart>
    <CartList />
  );
}
