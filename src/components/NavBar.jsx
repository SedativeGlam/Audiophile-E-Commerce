import Image from "next/image";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function NavBar() {
  return (
    <nav>
      <div className="py-[35px]">
        <div className="flex justify-between items-center">
          <Image
            src="/images/logo.png"
            width={143}
            height={25}
            alt="audiophile-logo"
          />

          <ul className="flex gap-12 text-[13px] font-bold tracking-[2px] uppercase text-white opacity-75 w-[429px] h-[25px] ">
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <a href="#"></a>Home
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <a href="#"></a>Headphones
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <a href="#"></a>Speakers
            </li>
            <li className="hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
              <a href="#"></a>Earphones
            </li>
          </ul>

          <AiOutlineShoppingCart className="w-[23.33px] h-5 z-10 cursor-pointer" />
        </div>
      </div>

      <div className="h-px w-[1110px] bg-white opacity-20 my-auto"></div>
    </nav>
  );
}
