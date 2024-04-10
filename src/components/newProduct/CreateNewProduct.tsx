"use client";
import { useGetCurrentUser } from "@/hooks/useGetCurrentUser";
import { addNewProduct } from "@/services/getProducts";
import { useQueryClient } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function CreateNewProduct() {
  const { register, formState, handleSubmit } = useForm();
  const { errors } = formState;
  const { user } = useGetCurrentUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const submitFunction: SubmitHandler<FieldValues> = async (formData) => {
    addNewProduct({ ...formData, image: formData.image[0] }, user?.id);

    queryClient.invalidateQueries({
      queryKey: ["userProducts"],
    });
    router.push("/my-products");
  };

  return (
    <form
      className="flex flex-col gap-3 w-96 mx-auto text-sm text-gray-600"
      onSubmit={handleSubmit(submitFunction)}
    >
      <label htmlFor="title">პროდუქტის დასახელება</label>
      {errors.title && (
        <p className="text-xs text-red-400">{`${errors.title?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="productTitle"
        type="text"
        {...register("title", {
          required: "This field is requierd",
          maxLength: 60,
        })}
      />

      <label htmlFor="category">კატეგორია</label>
      {errors.category && (
        <p className="text-xs text-red-400">{`${errors.category?.message}`}</p>
      )}
      <select
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="seller"
        {...register("category", {
          required: "აირჩიე კატეგორია",
        })}
      >
        <option value="mobiles">მობილური ტელეფონები</option>
        <option value="laptops">კომპიუტერული ტექნიკა</option>
        <option value="tvs">ტელევიზორები</option>
      </select>
      <label htmlFor="description">პროდუქტის აღწერა </label>
      {errors.description && (
        <p className="text-xs text-red-400">{`${errors.description?.message}`}</p>
      )}
      <textarea
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="description"
        {...register("description", {
          required: "This field is required",
          maxLength: 300,
        })}
      />
      <label htmlFor="price">პროდუქტის ფასი</label>
      {errors.price && (
        <p className="text-xs text-red-400">{`${errors.price?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="price"
        type="number"
        {...register("price", {
          required: "This field is requierd",
          min: {
            value: 1,
            message: "ფასი უნდა აღემატებოდეს 0-ს",
          },
        })}
      />
      <label htmlFor="seller">გამყიდველის ტიპი</label>
      {errors.seller && (
        <p className="text-xs text-red-400">{`${errors.seller?.message}`}</p>
      )}
      <select
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="seller"
        {...register("seller", {
          required: "აირჩიე გამყიდველის ტიპი",
        })}
      >
        <option value="მფლობელი">მფლობელი</option>
        <option value="მაღაზია">მაღაზია</option>
      </select>

      <label htmlFor="image">დაამატე სურათი</label>
      {errors.image && (
        <p className="text-xs text-red-400">{`${errors.image?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin"
        id="image"
        type="file"
        accept="image/*"
        {...register("image", {
          required: "This field is requierd",
        })}
      />

      <label className="text-center" htmlFor="vip">
        VIP+
      </label>
      {errors.vip && (
        <p className="text-xs text-red-400">{`${errors.vip?.message}`}</p>
      )}
      <input
        className=" outline-none border border-1 border-gray-400 rounded-lg p-3 text-black font-thin "
        id="vip"
        type="checkbox"
        defaultChecked={false}
        {...register("vip")}
      />

      <button className="p-3 bg-yellow-400 hover:bg-yellow-300 hover-ease rounded-lg hover:text-black">
        დამატება
      </button>
    </form>
  );
}
