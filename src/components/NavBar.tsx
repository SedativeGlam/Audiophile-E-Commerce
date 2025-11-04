"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Cart from "./Cart";
import { useState } from "react";

export default function NavBar() {
  // useEffect(() => {
  //   const handleResize = () => setWindowWidth(window.innerWidth);
  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <nav>
      <div className="py-[35px] mx-auto">
        <div className="flex justify-between items-center mx-auto max-w-[1110px] h-7">
          <Image
            src="/images/logo.png"
            width={143}
            height={25}
            alt="audiophile-logo"
          />

          {/* Desktop */}
          <ul className="flex gap-12 text-[13px] font-bold tracking-[2px] uppercase text-white opacity-75 w-[429px] h-[25px] ">
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <Link href="/category/headphones">Headphones</Link>
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <Link href="/category/speakers">Speakers</Link>
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <Link href="/category/earphones">Earphones</Link>
            </li>
          </ul>

          <div className="relative">
            {isCartOpen && <Cart />}
            <AiOutlineShoppingCart
              onClick={() => {
                setIsCartOpen(true);
              }}
              className="w-[23.33px] h-5 z-10 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="h-px w-[1110px] bg-white opacity-20 my-auto"></div>
      {isCartOpen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-100"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </nav>
  );
}
