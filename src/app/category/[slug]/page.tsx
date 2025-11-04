"use client";

import { use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../../../lib/products";
import About from "../../../components/About";
import ProductCategory from "../../../components/landing/ProductCategory";
import NavBar from "../../../components/NavBar";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const filteredProducts = products.filter((item) => item.category === slug);

  filteredProducts.length === 0 && notFound();

  return (
    <article className="mx-auto bg-[#000000]">
      <div className="w-[1110px] h-[336px] mx-auto rounded-b-2xl flex flex-col items-center">
        <NavBar />

        <h2 className="text-[40px] font-bold leading-11 tracking-[1.43px]  uppercase w-[283px] h-11 text-center mt-[98px]">
          {slug}
        </h2>
      </div>

      <div className="bg-[#ffffff] text-[#000000] pt-40">
        {filteredProducts.map((product, i) => {
          return (
            <div
              key={product.id}
              className="grid grid-cols-2 items-center gap-[125px] w-[1110px] h-[560px] top-[496px] left-[165px] mx-auto mb-40"
            >
              <div className={`${i % 2 === 0 ? "order-1" : "order-2"}`}>
                <Image
                  src={product.categoryProduct}
                  width={540}
                  height={560}
                  alt={product.category}
                />
              </div>

              <div
                className={`${i % 2 === 0 ? "order-2" : "order-1"} w-[445px] h-[343px] mt-[149px] mb-[149px] top-[605px] left-[830px] `}
              >
                <span className="w-[199px] h-[19px] text-[#d87d4a] tracking-[10px] leading-[100%] text-[14px] uppercase">
                  {product.span}
                </span>
                <h2 className="top-[35px] mt-6 text-[40px] leading-11 tracking-[1.43px] font-bold uppercase">
                  {product.title}
                </h2>
                <p className="h-[100px] top-[155px] opacity-50 text-[15px] font-medium leading-[25px] tracking-[0px] mt-8 mb-10">
                  {product.description}
                </p>

                <Link href={`/product/${product.id}`}>
                  <button className="bg-[#D87D4A] text-[#ffffff] w-40 h-12 hover:bg-[#fbaf85] transition-colors duration-300 cursor-pointer text-[13px] font-bold uppercase">
                    See Product
                  </button>
                </Link>
              </div>
            </div>
          );
        })}

        <div className="flex justify-center items-center">
          <ProductCategory />
        </div>

        <div className="flex justify-center items-center mt-0">
          <About />
        </div>
      </div>
      {/*  */}
    </article>
  );
}
