import { sidebarTexts } from "@/utils/sidebarTexts";
import React from "react";
import AccordionSidebar from "./AccordionSidebar";

export default function Sidebar() {
  return (
    <div className="px-2 bg-white rounded-lg md:min-w-56 ">
      {sidebarTexts.map((item, index) => (
        <AccordionSidebar
          key={index}
          title={item.title}
          options={item.options}
        />
      ))}
    </div>
  );
}
