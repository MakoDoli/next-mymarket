"use client";
import { useState } from "react";
import HeaderContainer from "./HeaderContainer";
import HeaderBanner from "./HeaderBanner";
import { usePathname } from "next/navigation";
export default function Header() {
  const [showBanner, setShowBanner] = useState(true);

  const pathname = usePathname();
  if (pathname.includes("login"))
    return <header className="hidden">login</header>;
  return (
    <>
      {showBanner && <HeaderBanner setShowBanner={setShowBanner} />}
      <HeaderContainer />
    </>
  );
}
