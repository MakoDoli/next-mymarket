import { slimFont } from "@/fonts/slimfont";
import { useReset } from "@/hooks/useLogin";
import { useState } from "react";

type Props = {
  setShowReset: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ForgotPass({ setShowReset }: Props) {
  const [email, setEmail] = useState("");
  const { resetLink } = useReset();
  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!email) return;
    // const { data, error } = await supabase.auth.resetPasswordForEmail(email);
    resetLink(email);
  }

  return (
    <form
      className="flex flex-col gap-3  mx-auto text-sm text-gray-600 mt-10"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email">
        პაროლის აღსადგენი ლინკის გასაგზავნად შეიყვანეთ თქვენი ელ-ფოსტა
      </label>
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="email"
        type="email"
        autoComplete="username"
        required
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className="p-3 bg-blue-500 hover:bg-blue-300 hover-ease text-base rounded-full text-white">
        გაგზავნა
      </button>
      <p
        onClick={() => setShowReset(false)}
        className={`${slimFont.className} text-xs font-this text-blue-600 cursor-pointer my-8`}
      >
        ავტორიზაციის გვერდზე დაბრუნება
      </p>
    </form>
  );
}
