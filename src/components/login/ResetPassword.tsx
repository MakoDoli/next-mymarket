"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useResetPass } from "../../hooks/useSignup";

export default function ResetPassword() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { resetPass } = useResetPass();

  const submitFunction: SubmitHandler<FieldValues> = async (formData) => {
    const { password } = formData;
    resetPass(password);
  };
  return (
    <form
      className="flex flex-col gap-3 w-96 mx-auto text-sm text-gray-600"
      onSubmit={handleSubmit(submitFunction)}
    >
      <label htmlFor="password">ახალი პაროლი (მინ 8 სიმბოლო)</label>
      {errors.password && (
        <p className="text-xs text-red-400">{`${errors.password?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="password"
        type="password"
        {...register("password", {
          required: "This field is requierd",
          minLength: {
            value: 8,
            message: "min 8 characters",
          },
        })}
      />
      <label htmlFor="confirm">გაიმეორე ახალი პაროლი</label>
      {errors.confirm && (
        <p className="text-xs text-red-400">{`${errors.confirm?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="confirm"
        type="password"
        {...register("confirm", {
          required: "This field is requierd",
          validate: (value) =>
            value === getValues().password || "Passwords need to match",
        })}
      />

      <button className="p-3 bg-yellow-400 hover:bg-yellow-300 hover-ease rounded-lg hover:text-black">
        შეცვლა
      </button>
    </form>
  );
}
