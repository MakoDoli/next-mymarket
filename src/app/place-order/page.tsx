import ProtectedPage from "@/components/order/ProtectedPage";
import React from "react";

export default function PlaceOrder() {
  return (
    <ProtectedPage>
      <PlaceOrder />
    </ProtectedPage>
  );
}
