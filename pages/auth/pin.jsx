import React, { useState } from "react";
import Layout from "../../components/Layout/auth";
import axios from "../../utils/axios";
import Router from "next/router";
import Link from "next/link";
import Pin from "react-pin-field";

export default function Login() {
  const [pin, setPin] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //   const result = await axios.post("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout
      head="PIN"
      title="Create Security PIN"
      subTitle="Create a PIN that`s contain 6 digits number for security purpose in Zwallet."
      dTitle="Secure Your Account, Your Wallet,
      and Your Data With 6 Digits PIN
      That You Created Yourself."
      dSubTitle="Create 6 digits pin to secure all your money and your data in Zwallet app. 
      Keep it secret and don`t tell anyone about your Zwallet account password and the PIN."
    >
      <div className="mb-5 mt-5 d-flex flex-row">
        <Pin
          className={`btn btn-lg border col-2 text-black p-0 py-2 me-0 me-lg-2 pin ${
            pin.length == 6 ? "border-primary" : ""
          }`}
          length={6}
          validate="0123456789"
          inputMode="numeric"
          onChange={(code) => setPin(code)}
          autoFocus
        ></Pin>
      </div>
      <button
        className="btn btn-lg mt-5 bgMain w-100"
        onClick={handleSubmit}
        disabled={pin.length == 6 ? false : true}
      >
        Confirm
      </button>
    </Layout>
  );
}
