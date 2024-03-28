import AdContent from "@/components/ui/AdContent";
import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <AdContent />
      {children}
    </div>
  );
}
