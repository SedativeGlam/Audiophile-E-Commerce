import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" h-[365px] top-[3528px] -left-16 bg-[#101010]">
      <div className="w-[1110px] mx-auto">
        <div className="border border-solid bg-[#d87d4a] w-[101px] h-1 text-[#d87d4a] top-[3528px] left-[101px]"></div>

        <div>
          <div className="pt-[75px]">
            <div className="flex justify-between items-center">
              <Image
                src="/images/logo.png"
                width={143}
                height={25}
                alt="audiophile-logo"
              />

              <ul className="flex gap-12 text-[13px] font-bold leading-[25px] tracking-[2px] uppercase text-white opacity-75 w-[429px] h-[25px] ">
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
            </div>
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 items-center">
            <p className="w-[540px]font-medium text-[15px] leading-[25px] mb-14 mt-9 opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <div className="flex gap-4 ml-auto mt-9">
              <Image
                className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                src="/images/fb-icon.svg"
                width={24}
                height={24}
                alt="social-icon"
              />

              <Image
                className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                src="/images/twitter.svg"
                width={24}
                height={19.5}
                alt="social-icon"
              />

              <Image
                className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                src="/images/instagram.svg"
                width={24}
                height={24}
                alt="social-icon"
              />
            </div>
          </div>
          <p className="w-[540px] font-bold text-[15px] opacity-50">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
