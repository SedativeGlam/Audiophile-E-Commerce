import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div className="lg:flex items-center lg:gap-[125px] mb-[143px] ">
      <div className="w-[445px] h-[295px] top-[2944px] left-[165px] text-[#000000]">
        <h2 className="w-[445px] h-[88px] font-bold text-[40px] leading-11 tracking-[1.43px] uppercase">
          Bringing you the <span className="text-[#d87d4a]">best</span> audio
          gear
        </h2>
        <p className="font-normal text-[15px] leading-[25px] mt-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <div>
        <Image
          src="/images/About-image.png"
          width={540}
          height={588}
          alt="about-image"
        />
      </div>
    </div>
  );
}
