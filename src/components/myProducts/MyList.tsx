"use client";
import MyProductCard from "./MyProductCard";
import useGetUsersItems from "@/hooks/useGetUsersItems";
type Props = {
  id: string;
};

export default function MyList({ id }: Props) {
  const myItems = useGetUsersItems(id);

  return (
    <div className="flex my-12 flex-col gap-x-4 gap-y-6">
      {myItems?.map((product, index) => (
        <MyProductCard key={index} product={product} />
      ))}
    </div>
  );
}
