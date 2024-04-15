/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import { slimFont } from "@/fonts/slimfont";

type Props = {
  setShowReset: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function LoginForm({ setShowReset }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useLogin();
  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!email || !password) return;
    mutate({ email, password });
  }

  return (
    <div>
      <form
        className="flex flex-col gap-3 w-full mx-auto text-sm text-gray-600"
        onSubmit={handleSubmit}
      >
        <label htmlFor="email" className="text-white">
          ელ-ფოსტა
        </label>
        <input
          className=" outline-none border border-1 border-gray-300 rounded-lg p-4 text-black font-thin"
          id="email"
          type="email"
          autoComplete="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="text-white h-2 relative">
          პაროლი
          <img
            src="/icons/track.png"
            alt="show-password"
            className="absolute opacity-70 z-10 w-6 h-6 right-3 top-8 hover:opacity-100 cursor-pointer "
          />
        </label>
        <input
          className=" outline-none border border-1 border-gray-300 rounded-lg p-4 text-black font-thin"
          id="password"
          type="password"
          autoComplete="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <p
          onClick={() => setShowReset(true)}
          className={` text-base text-black cursor-pointer text-md text-right mb-4`}
        >
          პაროლის აღდგენა
        </p>
        <button
          className="p-4 bg-blue-500 hover:bg-blue-300 hover-ease text-white text-base rounded-full"
          disabled={isPending}
        >
          შესვლა
        </button>
      </form>
    </div>
  );
}
