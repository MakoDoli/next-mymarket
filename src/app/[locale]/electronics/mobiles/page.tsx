import MobilePhones from "@/components/mobilePhones/MobilePhones";
import Spinner from "@/components/ui/Spinner";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "მობილური ტელეფონები",
};

export default function Mobiles({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <Suspense fallback={<Spinner />}>
      <MobilePhones query={query} />
    </Suspense>
  );
}
