import React from "react";
type Props = {
  title: string;
  category: string;
  id: number;
  price: number;
  src: string;
};
export default function MainPageCard({
  title,
  category,
  id,
  src,
  price,
}: Props) {
  return (
    <div className="flex flex-col gap-4   w-48 justify-center rounded-lg ">
      <img className="w-48 h-44 rounded-lg" src={src} alt="product image" />
      <p className="text-sm opacity-80">{title}</p>
      <p className="text-blue-600 ">{price} ₾</p>
    </div>
  );
}
