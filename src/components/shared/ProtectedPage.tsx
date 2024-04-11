"use client";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { ReactNode } from "react";
import Spinner from "../ui/Spinner";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

export default function ProtectedPage({ children }: Props) {
  const { isLoading, isAuthenticated } = useGetCurrentUser();

  if (isLoading) return <Spinner />;
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center gap-6 justify-center w-96 h-56 m-auto">
        <h1>განცხადების დასამატებლად გაიარეთ </h1>
        <Link href="/login">
          <button className="w-44 h-12 bg-yellow-400 hover:bg-yellow-300 text-gray-800 hover:text-gray-600 hover-ease rounded-md">
            ავტორიზაცია
          </button>
        </Link>
      </div>
    );
  }

  if (isAuthenticated) return <div>{children}</div>;
}
