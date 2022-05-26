import { useRouter } from "next/router";
import React from "react";

export default function DetailProfile() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>DetailProfile</h1>
      <hr />
      <h5>name</h5>
      <h6>email</h6>
    </div>
  );
}
