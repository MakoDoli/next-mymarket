"use client";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { ReactNode, useEffect } from "react";
import Spinner from "../ui/Spinner";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
};

export default function ProtectedCart({ children }: Props) {
  const router = useRouter();
  const { isLoading, isAuthenticated } = useGetCurrentUser();
  useEffect(() => {
    if (!isAuthenticated && !isLoading) router.push("/login");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isLoading]);

  if (isLoading) return <Spinner />;
  if (isAuthenticated) return children;
}
