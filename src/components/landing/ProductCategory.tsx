import React from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { productCategories } from "../../lib/products";
import Link from "next/link";

export default function ProductCategory() {
  return (
    <div className=" h-[284px] grid grid-cols-3 items-end gap-[30px] font-bold mb-[168px]">
      {productCategories.map((category, i) => {
        return (
          <Link href={`/category/${category.slug}`} key={i}>
            {" "}
            <div className="group w-[350px] h-[204px] bg-[#F1F1F1] grid  place-items-center rounded-lg cursor-pointer relative">
              <div className="-mt-20">
                <Image
                  className="drop-shadow-[0_34px_15px_rgba(0,0,0,0.35)]"
                  src={category.image}
                  width={category.width}
                  height={category.height}
                  alt="category-image"
                />
              </div>

              <div className="flex flex-col items-center">
                <h6 className="text-[18px] text-[#000000] mt-[30px] uppercase">
                  {category.title}
                </h6>

                <button className="w-[57.32px] h-[18px]  text-[#000000] text-[13px] text-center mt-[15px] mb-[30px] leading-px flex items-center gap-2 uppercase opacity-50 group-hover:text-[#d87d4a] transition-colors duration-300 cursor-pointer">
                  Shop{" "}
                  <span className="text-[#D87D4A] w-[5px] h-2.5">
                    <IoIosArrowForward />
                  </span>
                </button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
