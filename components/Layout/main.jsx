import React from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { topup } from "stores/action/transaction";
import { useRouter } from "next/router";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logout } from "stores/action/auth";
import Cookie from "js-cookie";

export default function MainLayout(props) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = React.useState(false);

  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout())
      .then((res) => {
        Cookie.remove("token");
        Cookie.remove("id");
        localStorage.clear();
        router.push("/");
      })
      .catch((err) => console.log(err));
  };
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
            <div
              className="col-2  d-none d-lg-flex bg-white shadow rounder pt-5 align-items-start p-0"
              style={{ position: "relative" }}
            >
              <div
                className="nav flex-column nav-pills me-3 "
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className={`nav-link text-start  ${
                    props?.page == "dashboard" ? "active" : ""
                  }`}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => router.push("/dashboard")}
                >
                  <i className="bi bi-grid me-3 fs-4"></i>
                  <span>Dahsboard</span>
                </button>

                <button
                  className={`nav-link text-start  ${
                    props?.page == "transfer" ? "active" : ""
                  }`}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => router.push("/transfer")}
                >
                  <i className="bi bi-arrow-up me-3 fs-4"></i>
                  <span>Transfer</span>
                </button>

                <button
                  className={`nav-link text-start  ${
                    props?.page == "" ? "active" : ""
                  }`}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => setModalShow(true)}
                >
                  <i className="bi bi-plus me-3 fs-4"></i>
                  <span>Top Up</span>
                </button>

                <button
                  className={`nav-link text-start ${
                    props?.page == "Profile" ? "active" : ""
                  }`}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  onClick={() => router.push("/profile")}
                >
                  <i className="bi bi-person me-3 fs-4"></i>
                  <span>Profile</span>
                </button>

                <button
                  className={`nav-link text-start `}
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                  style={{ position: "absolute", bottom: "30px" }}
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right me-3 fs-4"></i>
                  <span>Logout</span>
                </button>
              </div>
            </div>
            <div
              className="col-12 col-lg-10 d-flex row m-0 p-0 px-lg-3 "
              style={{ maxHeight: "678px" }}
            >
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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        submit={(amount) =>
          dispatch(topup({ amount }))
            .then(
              (res) => (window.location.href = res.value.data.data.redirectUrl)
            )
            .catch((err) => alert(err))
        }
      />
    </>
  );
}

function MyVerticallyCenteredModal(props) {
  const [amount, setAmount] = React.useState(0);
  console.log(amount);
  return (
    <Modal
      {...props}
      size=""
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title id="contained-modal-title-vcenter">Topup </Modal.Title>
      </Modal.Header>
      <Modal.Body className="">
        <h6 className="text-black-50">
          Enter the amount of money, and click submit
        </h6>
        <div className="d-flex justify-content-center">
          <Form.Control
            type="number"
            size=""
            placeholder="_____________________________"
            className="text-center pt-3 text-black-50 fs-3 my-5 underlineInput"
            onChange={({ target }) => setAmount(target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0">
        <Button onClick={() => props.submit(amount)} className="p-2 px-4">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
