import React from "react";
import { useRouter } from "next/router";

export default function DetailUser() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>id: {router.query.id} </h1>
    </div>
  );
}
