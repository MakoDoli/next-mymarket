import { slimFont } from "@/fonts/slimfont";
import { userMenu } from "@/utils/userMenu";
import Image from "next/image";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import Link from "next/link";

export default function CartSidebar() {
  const { user } = useGetCurrentUser();

  const username = user?.identities
    ? user.identities[0].identity_data?.fullName
    : "შენი სახელი";

  return (
    <aside className=" bg-white rounded-lg md:min-w-72 p-4 flex flex-col gap-8  ">
      <div className="flex gap-3 items-center">
        <Image
          src="/icons/femaleUser.png"
          alt="user-icon"
          width={50}
          height={50}
        />
        <p>{username}</p>
      </div>
      <ul
        className={`${slimFont.className} text-sm text-gray-500 px-4   list-disc`}
      >
        {userMenu.map((item, index) => (
          <li
            className="cursor-pointer hover:text-yellow-400 hover-ease  p-4"
            key={index}
          >
            <Link
              href={`${
                item === "ჩემი რჩეულები"
                  ? "/favorites"
                  : item === "ჩემი განცხადებები"
                  ? "/my-products"
                  : item === "განცხადების დამატება"
                  ? "/new"
                  : ""
              }`}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
