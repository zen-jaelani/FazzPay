import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const { query } = useRouter();
  return <div>Product: {query.slug} </div>;
}
