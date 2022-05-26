import axios from "axios";
import React, { useState, useEffect } from "react";

export async function getServerSideProps(context) {
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

export default function SSR(props) {
  //   console.log(props);
  const [data, setData] = useState(props.data);

  return (
    <div>
      <h1>Rendering with ssr</h1> <hr />
      {data.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3> <hr />
        </div>
      ))}
    </div>
  );
}
