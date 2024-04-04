import PlaceOrder from "@/components/order/PlaceOrder";
import React, { Suspense } from "react";

export default function Order() {
  return (
    <Suspense>
      <PlaceOrder />
    </Suspense>
  );
}
