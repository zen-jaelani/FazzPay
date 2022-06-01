import React from "react";
import Image from "next/image";

export default function HandleImage() {
  const imageProfile = {
    width: "200px",
    backgroundColor: "red",
  };
  return (
    <div className="container text-center">
      <h1>handle image</h1>
      <hr />
      <h1>WIthout next image</h1>
      <img src="/vercel.svg" alt="" style={imageProfile} />
      <hr />
      <h1>with next image</h1>
      <div className="text-start">
        <Image
          src="/vercel.svg"
          alt="nextImage"
          width={100}
          height={100}
          style={imageProfile}
        ></Image>
      </div>
      <hr />
      <Image
        src="/vercel.svg"
        alt="nextImage"
        width={100}
        height={100}
        style={imageProfile}
      ></Image>
    </div>
  );
}
