"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";

export default function SignUpForm() {
  const { register, formState, getValues, handleSubmit } = useForm();
  const { errors } = formState;
  const { signUp } = useSignup();

  const submitFunction: SubmitHandler<FieldValues> = async (formData) => {
    const { fullName, email, password } = formData;
    signUp({ fullName, email, password });
  };

  return (
    <form
      className="flex flex-col gap-3 w-full mx-auto text-sm text-gray-600"
      onSubmit={handleSubmit(submitFunction)}
    >
      <label htmlFor="fullName" className="text-white text-xs">
        სახელი
      </label>
      {errors.fullName && (
        <p className="text-xs text-red-400">{`${errors.fullName?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="fullName"
        type="text"
        placeholder="სახელი"
        {...register("fullName", {
          required: "This field is requierd",
          maxLength: 30,
        })}
      />
      <label htmlFor="email" className="text-white text-xs h-1">
        ელ-ფოსტა{" "}
      </label>
      {errors.email && (
        <p className="text-xs text-red-400">{`${errors.email?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="email"
        type="email"
        placeholder="ელფოსტა"
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please enter a valid email address",
          },
        })}
      />
      <label htmlFor="password" className="text-white text-xs h-1">
        პაროლი
      </label>
      {errors.password && (
        <p className="text-xs text-red-400">{`${errors.password?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="password"
        type="password"
        placeholder="პაროლი (მინ 8 სიმბოლო)"
        {...register("password", {
          required: "This field is requierd",
          minLength: {
            value: 8,
            message: "min 8 characters",
          },
        })}
      />
      <label htmlFor="confirm" className="text-white text-xs h-1">
        გაიმეორე პაროლი
      </label>
      {errors.confirm && (
        <p className="text-xs text-red-400">{`${errors.confirm?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="confirm"
        type="password"
        placeholder="გაიმეორეთ პაროლი"
        {...register("confirm", {
          required: "This field is requierd",
          validate: (value) =>
            value === getValues().password || "Passwords need to match",
        })}
      />

      <button className="p-4 bg-blue-500 hover:bg-blue-300 hover-ease text-white text-base rounded-full">
        დარეგისტრირდი
      </button>
    </form>
  );
}
