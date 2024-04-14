"use client";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import CartSidebar from "../cartList/CartSidebar";
import MyList from "./MyList";

export default function MyProducts() {
  const { user } = useGetCurrentUser();

  const userID = user?.id || "";

  return (
    <main className="p-4 flex flex-col-reverse bg-gray-100 lg:px-12 md:flex-row gap-2 lg:gap-4">
      <CartSidebar />
      <section className=" w-full  p-4 lg:pl-8 ">
        <div className="flex justify-between">
          <h2 className="text-2xl">ჩემი განცხადებები </h2>
        </div>
        {userID && <MyList id={userID} />}
      </section>
    </main>
  );
}
