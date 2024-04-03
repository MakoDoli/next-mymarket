import AuthCard from "@/components/login/AuthCard";

import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "ავტორიზაცია",
};
export default function LoginPage() {
  return <AuthCard />;
}
