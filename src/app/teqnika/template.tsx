import React, { ReactNode } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Layout of teqnika
      {children}
    </div>
  );
}
