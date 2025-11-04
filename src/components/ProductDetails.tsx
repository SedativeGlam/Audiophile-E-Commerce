"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

export interface ProductDetailsProps {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  spanDetail?: string;
  slug?: string;
}

export default function ProductDetails({
  id,
  image,
  title,
  description,
  price,
  spanDetail = "New Product",
  slug,
}: ProductDetailsProps) {
  const [count, setCount] = useState(1);
  const { addItem, isLoading } = useCart();

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleAddToCart = () => {
    addItem({
      productId: id,
      name: title,
      price,
      quantity: count,
      image,
      slug,
    });

    setCount(1);
  };

  return (
    <div>
      <div className="flex items-center gap-[124.5px] w-[1109.83px] mt-14 mb-[237px] ">
        <div className="flex justify-center items-center w-[540px] h-[560px] top-[257px] left-[165px] bg-[#f1f1f1] rounded-lg">
          <Image
            className="rounded-lg "
            src={image}
            width={349.24}
            height={386}
            alt={title}
          />
        </div>

        <div className="w-[445.5px] h-[407px]">
          {spanDetail && (
            <span className="w-[199px] h-[19px] left-[0.5px] font-medium  tracking-[10px] leading-[100%] text-[14px] text-[#d87d4a] uppercase">
              {spanDetail}
            </span>
          )}

          <h2 className="w-[445px] h-[88px] mt-4 text-[40px] leading-11 tracking-[1.43px] font-bold uppercase">
            {title}
          </h2>
          <p className="w-[445px] h-[100px] top-[155px] left-[0.5x] opacity-50 text-[15px] font-medium leading-[25px] my-8">
            {description}
          </p>

          <h6 className="w-[73px] h-[25px] top-[287px] font-bold text-[18px] ">
            $ {price.toLocaleString()}
          </h6>

          <div className="flex items-cente w-[296px] h-12 top-[359px] left-[0.5px] gap-4  mt-[47px]">
            <div className="flex justify-center items-center w-[120px] h-12 text-[#000000] bg-[#f1f1f1] gap-5 ">
              <button
                onClick={decrement}
                disabled={count <= 1}
                className="w-4 opacity-25 font-bold text-[13px] tracking-[1px] leading-auto hover:text-[#d87d4a] cursor-pointer"
                aria-label="Decrease quantity"
              >
                -
              </button>

              <span className="w-4 font-bold text-[13px] tracking-[1px]">
                {count}
              </span>

              <button
                onClick={increment}
                className="w-4 opacity-25 font-bold text-[13px] trackin-[1px] leading-auto tracking-[1px] hover:text-[#d87d4a] cursor-pointer"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className="bg-[#D87D4A] w-40 h-12 hover:bg-[#fbaf85] text-[#ffffff] transition-colors duration-300 cursor-pointer"
            >
              {isLoading ? "Loading..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
