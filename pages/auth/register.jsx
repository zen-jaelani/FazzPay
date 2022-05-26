import React from "react";
import Layout from "../../components/Layout/auth";

export default function Register() {
  return (
    <Layout
      head="Sign Up"
      title="Sign Up"
      subTitle="Create your account to access Zwallet."
      dTitle="Start Accessing Banking Needs With All Devices and All
    Platforms With 30.000+ Users"
      dSubTitle="Transfering money is eassier than ever, you can access Zwallet
      wherever you are. Desktop, laptop, mobile phone? we cover all
      of that for you!"
    >
      <form className="mt-5">
        <div className="input-group my-4  border-bottom ">
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i className="bi bi-person fs-3"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 fs-6"
            placeholder="Enter your firstname"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group my-4  border-bottom ">
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i className="bi bi-person fs-3"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 fs-6"
            placeholder="Enter your lastname"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group  border-bottom ">
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i className="bi bi-envelope fs-3"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 fs-6"
            placeholder="Enter your e-mail"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group border-0 border-bottom mt-4">
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i className="bi bi-lock fs-3"></i>
          </span>
          <input
            type="password"
            className="form-control border-0 fs-6"
            placeholder="Enter your password"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text bg-white border-0 text-black-50">
            <i className="bi bi-eye"></i>
            <i className="bi bi-eye-slash"></i>
          </span>
        </div>
        <p className="invisible text-danger">Email or Password Invalid</p>
        <button className="btn-lg w-100 bgMain">Sign Up</button>
        <p className="my-5  text-center">
          Already have an account? Let`s <span>Login</span>
        </p>
      </form>
    </Layout>
  );
}
