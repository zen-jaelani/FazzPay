import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
    router.push("/login");
  };
  return (
    <div>
      {/* <Link href="/home">home</Link>
      <button onClick={handleLogout}>Logout</button> */}

      <div className="bg-white shadow-sm w-100 container-fluid py-4">
        <div className="container d-flex justify-content-between">
          <h3 className="textMain fw-bold mt-3">Zwallet</h3>
          <div className="row p-lg-0 m-lg-0 w-auto">
            <div
              className="col-3 ms-2 "
              style={{ height: "52px", width: "52px", position: "relative" }}
            >
              <Image src="/Group 57.png" alt="" layout="fill" />
            </div>
            <div className="col-6 col-lg-6 ">
              <h3 className="fw-bold">Name</h3>
              <p className="mb-1 fw-light">phoen</p>
            </div>
            <div className="col-1 ms-3">
              <i className="bi bi-bell fs-3 d-block"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
