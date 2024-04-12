import PlaceOrder from "@/components/order/PlaceOrder";
import Spinner from "@/components/ui/Spinner";
import React, { Suspense } from "react";

export default function Order() {
  return (
    <Suspense fallback={<Spinner />}>
      <PlaceOrder />
    </Suspense>
  );
}
