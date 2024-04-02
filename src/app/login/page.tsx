import LoginForm from "@/components/login/LoginForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ავტორიზაცია",
};
export default function LoginPage() {
  return (
    <div className="mx-auto w-96 my-6">
      <h2 className="my-5 text-xl font-bold">ავტორიზაცია</h2>
      <LoginForm />
    </div>
  );
}
