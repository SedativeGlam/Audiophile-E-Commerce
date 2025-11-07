import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" h-[365px] top-[3528px] bg-[#101010]">
      <div className="lg:max-w-[1110px] mx-auto">
        <div className="border border-solid bg-[#d87d4a] w-[101px] h-1 text-[#d87d4a]"></div>

        <div className="pt-[75px] w-full">
          <div className="flex justify-between items-center gap-10 w-full">
            <Image
              src="/images/logo.png"
              width={143}
              height={25}
              alt="audiophile-logo"
            />

            <ul className="flex gap-12 text-[13px] font-bold tracking-[2px] uppercase text-white opacity-75 h-[25px] ">
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
          </div>
        </div>

        <div className="">
          <div className="grid grid-cols-2 items-center">
            <p className="w-[540px] font-medium text-[15px] leading-[25px] mb-14 mt-9 opacity-50">
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we're open 7 days a week.
            </p>
            <div className="flex items-center gap-4 ml-auto mt-9">
              <Link href="#">
                <Image
                  className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                  src="/images/fb-icon.svg"
                  width={24}
                  height={24}
                  alt="social-icon"
                />
              </Link>

              <Link href="#">
                <Image
                  className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                  src="/images/twitter.svg"
                  width={24}
                  height={19.5}
                  alt="social-icon"
                />
              </Link>

              <Link href="#">
                <Image
                  className="hover:filter-[brightness(0)_saturate(100%)_invert(82%)_sepia(26%)_saturate(7315%)_hue-rotate(326deg)_brightness(90%)_contrast(88%)] transition duration-200 cursor-pointer"
                  src="/images/instagram.svg"
                  width={24}
                  height={24}
                  alt="social-icon"
                />
              </Link>
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
