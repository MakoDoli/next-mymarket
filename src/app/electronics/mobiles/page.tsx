import MobilePhones from "@/components/mobilePhones/MobilePhones";
import Sidebar from "@/components/sidebar/Sidebar";
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
    <main className="p-4 bg-gray-100 lg:px-12 flex gap-2 lg:gap-4">
      <div className="hidden md:block min-w-1/5  rounded-xl ">
        <Sidebar />
      </div>
      <Suspense fallback={<Spinner />}>
        <MobilePhones query={query} />
      </Suspense>
    </main>
  );
}
