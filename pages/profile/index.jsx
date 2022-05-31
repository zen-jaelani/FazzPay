import React, { useEffect, useState } from "react";
import Layout from "components/Layout/main";
import PrivateRoute from "components/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "stores/action/user";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookie from "js-cookie";

function Profile() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user);
  const { data } = user;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getUser(Cookie.get("id")))
        .then((res) => console.log(res.value.data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout page="Profile" head="Profile">
      <div
        className="bg-white rounder shadow p-3 pb-5 overflow-auto text-center"
        style={{ maxHeight: "inherit", position: "" }}
      >
        <div className="text-center">
          <Image
            src={
              data.image
                ? `${process.env.IMAGE_URL}${data.image}`
                : "https://res.cloudinary.com/qxtlp/image/upload/v1651069637/default-profile.jpg"
            }
            width="150"
            height="150"
            alt=""
            className=""
          ></Image>
        </div>
        <button className="btn mt-0">
          <i className="bi bi-pen me-2"></i>
          Edit
        </button>
        <h3 className="my-3">
          {data.firstName} {data.lastName}
        </h3>
        <h5 className="text-black-50">{data.noTelp || "+00 000 000 000"}</h5>
        <div className="mt-5 w-50 container text-start">
          <button
            className="btn btn-lg bg-light w-100 py- d-flex justify-content-between"
            onClick={() => router.push("/profile/info")}
          >
            Personal Information
            <i className="bi bi-arrow-right"></i>
          </button>
          <button
            className="btn btn-lg bg-light w-100 py- d-flex justify-content-between mt-4"
            onClick={() => router.push("/profile/password")}
          >
            Change Password
            <i className="bi bi-arrow-right"></i>
          </button>

          <button
            className="btn btn-lg bg-light w-100 py- d-flex justify-content-between mt-4"
            onClick={() => router.push("/profile/pin")}
          >
            Change PIN
            <i className="bi bi-arrow-right"></i>
          </button>

          <button className="btn btn-lg bg-light w-100 py- d-flex justify-content-between mt-4">
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default PrivateRoute(Profile);
