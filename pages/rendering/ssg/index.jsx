import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

export async function getStaticProps(context) {
  const { data } = await axios
    .get(`${process.env.URL_BACKEND2}users`)
    .then((res) => res)
    .catch((err) => []);
  console.log("render with server");
  return {
    props: {
      data,
    },
  };
}

export default function SSG(props) {
  const router = useRouter();
  const [data, setData] = useState(props.data);
  const handleDetailProfile = (id) => {
    router.push(`/rendering/ssg/${id}`);
  };
  return (
    <div>
      <h1>Rendering with SSG</h1> <hr />
      {data.map((item) => (
        <div key={item.id}>
          <button onClick={() => handleDetailProfile(item.id)}>
            {item.name}
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
