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
    <form
      className="flex flex-col gap-3 w-96 mx-auto text-sm text-gray-600"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">ელ-ფოსტა</label>
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="email"
        type="email"
        autoComplete="username"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">პაროლი</label>
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="password"
        type="password"
        autoComplete="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <p
        onClick={() => setShowReset(true)}
        className={`${slimFont.className} text-xs font-this text-blue-600 cursor-pointer mb-4`}
      >
        დაგავიწყდა პაროლი?
      </p>
      <button
        className="p-3 bg-yellow-400 hover:bg-yellow-300 hover-ease rounded-lg hover:text-black"
        disabled={isPending}
      >
        შესვლა
      </button>
    </form>
  );
}
