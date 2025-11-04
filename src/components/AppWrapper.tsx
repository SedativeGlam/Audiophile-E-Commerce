"use client";
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function AppWrapper({ children }: { children: any }) {
  const pathname = usePathname();
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
