"use client";

import NavBar from "@/components/NavBar";
import { products } from "@/lib/products";
import { use } from "react";

export default function CategoryPage({ params }) {
  const { slug } = use(params);

  return (
    <article className="mx-auto bg-[#141414]">
      <div className="max-w-[1440px] w-[1109.83px] mx-auto rounded-b-2xl">
        <NavBar />
      </div>
    </article>
  );
}
