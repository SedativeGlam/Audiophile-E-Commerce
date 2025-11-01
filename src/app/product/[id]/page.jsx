"use client";

import { use } from "react";

export default function ProductDetailPage({ params }) {
  const { id } = use(params);

  return <div>{id}</div>;
}
