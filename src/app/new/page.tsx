import CreateNewProduct from "@/components/newProduct/CreateNewProduct";
import React from "react";

export default function AddNew() {
  return (
    <>
      <h1 className="text-lg m-4 font-bold md:mx-12">განცხადების დამატება</h1>
      <CreateNewProduct />
    </>
  );
}
