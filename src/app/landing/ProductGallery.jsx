import React from "react";
import Image from "next/image";

export default function ProductGallery() {
  return (
    <div>
      <div className="flex justify-around items-center gap-[138.28px] w-[1110px] h-[560px] bg-[#D87D4A] rounded-lg px-[117.49px] relative">
        <div className="shrink-0 ">
          <Image
            className="top-0 left-0 border-px absolute filter brightness-80"
            src="/images/Oval Copy 2.png"
            width={944}
            height={944}
            alt="oval-bg"
          />

          <Image
            className="bottom-0 left-[55px] border-px absolute filter brightness-80"
            src="/images/Oval Copy.png"
            width={542}
            height={542}
            alt="oval-bg"
          />

          <Image
            className="bottom-0 left-[90px] border-px absolute filter brightness-80"
            src="/images/Oval.png"
            width={472}
            height={472}
            alt="oval-bg"
          />

          <Image
            className="shrink-0 -mb-[97px] z-[100px] relative"
            src="/images/zx9-speaker.png"
            width={410.23}
            height={493}
            alt="product-image"
          />
        </div>

        <div className="w-[349px] h-[303px] mt-[149px] mb-[149px] ">
          <h1 className="mt-6 text-[56px] leading-[58px] font-bold uppercase">
            ZX9 SPEAKER
          </h1>
          <p className="text-[15px] font-medium leading-[25px] my-6">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>

          <button className="bg-[#000000] w-40 h-12 hover:bg-[#4c4c4c] transition-colors duration-300 cursor-pointer">
            See Product
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className="w-[204px] h-[118px] mt-[101px] mb-[149px] absolute z-10 ml-[95px] my-[101]">
          <h4 className="text-[#000000] text-[28px] leading-[58px] font-bold uppercase">
            Zx7 Speaker
          </h4>

          <button className="mt-8 text-[#000000] border border-[#000000] font-bold w-40 h-12 hover:bg-[#000000] hover:text-[#ffffff] hover:border-[#000000] transition-colors duration-300 cursor-pointer">
            See Product
          </button>
        </div>

        <Image
          className="relative rounded-lg"
          src="/images/zx7-speaker.png"
          width={1110}
          height={320}
          alt="product-image"
        />
      </div>

      <div className="flex items-center gap-[30px] mt-12">
        <div>
          <Image
            src="/images/yx1-earphone.png"
            width={540}
            height={320}
            alt="product-image"
          />
        </div>

        <div className="text-[#000000] w-[540px] h-80 bg-[#F1F1F1] rounded-lg ">
          <div className="w-[204px] h-[118px] mt-[101px] mb-[149px]  z-10 pl-[95px] pr-[195px] ">
            <h4 className="w-[245px] h-[38px] mb-8 text-[#000000] text-[28px] leading-[58px] font-bold uppercase">
              yx1 Earphones
            </h4>

            <button className="border  border-[#000000] w-40 h-12 uppercase font-bold text-[13px] leading-px hover:bg-[#000000] hover:text-[#ffffff] hover:border-[#000000] transition-colors duration-300 cursor-pointer">
              See Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
