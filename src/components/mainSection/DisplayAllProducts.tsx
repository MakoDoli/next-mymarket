import getAllProducts from "@/services/shuffledArrays";
import React from "react";
import MainPageCard from "./MainPageCard";

export default async function DisplayAllProducts() {
  const products = await getAllProducts();
  const vips = products.filter((item) => item.vip);

  return (
    <section className=" mt-6  p-4   lg:p-12">
      <label className="text-white bg-blue-500  w-16 rounded-sm px-2  text-center">
        VIP +
      </label>
      <div className="flex  justify-center flex-wrap  md:flex-wrap my-8 md:flex-row md:justify-normal  gap-x-4 gap-y-6">
        {vips.map((product, index) => (
          <MainPageCard
            id={product.id}
            src={product.image}
            title={product.title}
            price={product.price}
            key={index}
            category={product.category}
          />
        ))}
      </div>
      <label>ახალი დამატებულები</label>
      <div className="flex  justify-center flex-wrap  md:flex-wrap my-8 md:flex-row md:justify-normal  gap-x-4 gap-y-6">
        {products.slice(0, 12).map((product, index) => (
          <MainPageCard
            id={product.id}
            src={product.image}
            title={product.title}
            price={product.price}
            key={index}
            category={product.category}
          />
        ))}
      </div>
    </section>
  );
}
