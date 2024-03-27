import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import React from "react";
import localFont from "next/font/local";
type Props = {
  title: string;
  options: string;
};

const slimFont = localFont({ src: "../../fonts/TBCXRegular.ttf" });

export default function AccordionSidebar({ title, options }: Props) {
  return (
    <div className={slimFont.className}>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-sm text-gray-600 text-left">
            {title}
          </AccordionTrigger>
          <AccordionContent>{options}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
