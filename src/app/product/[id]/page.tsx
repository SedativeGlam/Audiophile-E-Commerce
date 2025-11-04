"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import { use } from "react";
import { products } from "../../../lib/products";
import ProductDetails from "../../../components/ProductDetails";
import ProductCategory from "../../../components/landing/ProductCategory";
import About from "../../../components/About";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import NavBar from "@/components/NavBar";

export default function Product({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = use(params);

  const product = products.find((item) => item.id.toString() === id);

  if (!product) notFound();

  const router = useRouter();

  return (
    <article>
      <div className="bg-[#000000]">
        <div>
          <NavBar />
        </div>
      </div>

      <main className="text-[#000000] w-[1110px] mx-auto top-[977px] left-[165px] ">
        <div className="mt-[79px]">
          <button
            onClick={() => router.back()}
            className="opacity-50 text-[15px] font-medium leading-[25px] cursor-pointer"
          >
            Go Back
          </button>
        </div>

        <ProductDetails
          key={product.id}
          id={product.id.toString()}
          image={product.displayImage}
          spanDetail={product.spanDetail}
          title={product.title}
          description={product.description}
          price={product.price}
        />

        <div className="text-[#000000] mb-40 flex gap-[125px]">
          <div className="w-[635px] h-[315px] top-[977px] left-[165px]  ">
            <h3 className="w-[445px] h-9 font-bold text-[32px] leading-9 tracking-[1.14px] uppercase ">
              Features
            </h3>

            <div className="w-[635px] h-[250px] top-[68px] opacity-50 font-medium text-[15px] leading-[25px] flex flex-col gap-8 mt-8">
              {product.features.map((text, i) => {
                return (
                  <div key={i}>
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="w-[350px] h-9 font-bold text-[32px] leading-8 tracking-[1.14px] uppercase mb-8">
              In the Box
            </h3>

            <div className="flex flex-col gap-2">
              {product.box.map((item, i) => {
                return (
                  <div key={i}>
                    <span className="w-[15px] h-[25px] font-bold text-[#d87d4a]">
                      {item.quantity}
                    </span>
                    <span className="w-[115px] h-[25px] left-[39px] opacity-50 font-medium text-[15px] leading-[25px] ml-6 ">
                      {item.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <Image
            className="mb-40 top-[1445px] left-[165px]"
            src={product.featureImage}
            width={1110}
            height={592}
            alt="feature-image"
          />
        </div>

        <div className="w-[1110px] h-[571px] top-[2207px] left-[165px] mb-40 flex flex-col items-center">
          <h3 className=" h-9 left-[396px] font-bold text-[32px] leading-9 tracking-[1.14px] mb-16 uppercase ">
            You may also like this
          </h3>

          <div className="flex items-center gap-[30px]">
            {product?.otherProducts?.map((item, i) => {
              return (
                <div
                  className="flex flex-col justify-center items-center"
                  key={i}
                >
                  <Image
                    src={item.image}
                    width={350}
                    height={318}
                    alt={item.name}
                  />

                  <h4 className=" h-[33px] top-[358px] left-[94px] font-bold text-[24px] leading-[100%] tracking-[1.17px] uppercase mt-10 mb-8">
                    {item.name}
                  </h4>

                  <button className=" bg-[#D87D4A] text-[#ffffff] w-40 h-12 hover:bg-[#fbaf85] transition-colors duration-300 font-bold text-[13px] uppercase cursor-pointer">
                    See Product
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <ProductCategory />
        </div>

        <div className="flex justify-center items-center mt-0">
          <About />
        </div>
      </main>
    </article>
  );
}
