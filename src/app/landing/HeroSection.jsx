import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex items-start gap-[74.6px] w-[1109.83PX]  ">
      <div className="w-[398px] h-[346px] mt-[149px] mb-[149px] ">
        <h2 className="opacity-[49.64%] tracking-[10px] text-[14px]">
          New Product
        </h2>
        <h1 className="mt-6 text-[56px] leading-[58px] font-bold uppercase">
          XX99 Mark II Headphones
        </h1>
        <p className="text-[15px] font-medium leading-[25px] my-6">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <button className="bg-[#D87D4A] w-40 h-12 hover:bg-[#fbaf85] transition-colors duration-300 cursor-pointer">
          See Product
        </button>
      </div>

      <div className="shrink-0 self-start -mt-24">
        <Image
          className="shrink-0 "
          src="/images/hero-image.png"
          width={708.8}
          height={886}
          alt="hero"
        />
      </div>
    </div>
  );
}
