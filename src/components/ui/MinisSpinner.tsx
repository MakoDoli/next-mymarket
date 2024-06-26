import React from "react";

export default function MinisSpinner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-gray-400 to-gray-300 w-[1.5rem] h-[1.5rem]  animate-spin mx-auto   dark:bg-slate-800 rounded-full border-3 flex justify-center items-center">
      <div className=" bg-blue-100 w-[1rem] h-[1rem] rounded-full"></div>
    </div>
  );
}
