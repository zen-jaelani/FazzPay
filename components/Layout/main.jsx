import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";

export default function MainLayout(props) {
  return (
    <>
      <Head>
        <title>{props.head}</title>
      </Head>
      <div className="bgSecondary m-0 p-0 ">
        <div className="d-none d-lg-block">
          <Navbar />
        </div>
        <div className="container-fluid d-flex mt-lg-5 m-0 p-0">
          <div className="container row mx-auto m-0 p-0">
            <div className="col-2  d-none d-lg-flex bg-white shadow rounder pt-5 align-items-start ">
              <div
                className="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link text-start active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Dahsboard
                </button>
                <button
                  className="nav-link text-start"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
                <button
                  className="nav-link text-start"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Messages
                </button>
                <button
                  className="nav-link text-start"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Settings
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-10 d-flex row m-0 p-0 px-lg-3">
              {props.children}
            </div>
          </div>
        </div>
        <footer
          className="container-fluid bgMain w-100 pt-4 mt-auto d-none d-lg-block"
          style={{ height: "68px", position: "absolute", bottom: 0 }}
        >
          <div className="container d-flex justify-content-between">
            <p>2020 Zwallet. All right reserved.</p>
            <div className="d-flex">
              <p className="me-4">+62 5637 8882 9901</p>
              <p>contact@zwallet.com </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
