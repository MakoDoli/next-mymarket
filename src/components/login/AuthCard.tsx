"use client";
import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { slimFont } from "@/fonts/slimfont";
import ForgotPass from "./ForgotPass";

export default function AuthCard() {
  const [signIn, setSignIn] = useState(true);
  const [showReset, setShowReset] = useState<boolean>(false);

  if (showReset) return <ForgotPass setShowReset={setShowReset} />;
  return (
    <div className="mx-auto w-96 my-6">
      <div className="flex justify-between items-center">
        <h1 className="my-5 text-xl font-bold">
          {signIn ? "ავტორიზაცია" : "რეგისტრაცია"}
        </h1>
        <p
          className={`${slimFont.className} text-xs font-this text-blue-600 cursor-pointer`}
          onClick={() => setSignIn(!signIn)}
        >
          {signIn ? "არ გაქვს ანგარიში?" : "მაქვს ანგარიში"}
        </p>
      </div>
      {signIn ? <LoginForm setShowReset={setShowReset} /> : <SignUpForm />}
    </div>
  );
}
