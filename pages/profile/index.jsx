import React, { useEffect, useState } from "react";
import Layout from "components/Layout/main";
import PrivateRoute from "components/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteImage,
  getUser,
  updateImage,
  updateProfile,
} from "stores/action/user";
import { useRouter } from "next/router";
import Image from "next/image";
import Cookie from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { logout } from "stores/action/auth";
import { Dropdown, DropdownButton } from "react-bootstrap";

function Profile() {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

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

  const handleSubmit = (form) => {
    console.log(form);
    dispatch(updateProfile(Cookie.get("id"), form))
      .then((res) => {
        getData();
        setModalShow(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const handleImage = (event) => {
    console.log(event);
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    dispatch(updateImage(Cookie.get("id"), formData)).then((res) => {
      getData();
    });
  };

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

  const handleDelete = (event) => {
    event.stopPropagation();
    dispatch(deleteImage(Cookie.get("id")))
      .then((res) => {
        alert("image deleted");
        getData();
      })
      .catch((err) => alert(err));
  };

  return (
    <Layout page="Profile" head="Profile">
      <div
        className="bg-white rounder shadow p-3 pb-5 overflow-auto text-center"
        style={{ maxHeight: "inherit", height: "100vh" }}
      >
        <div className="text-center">
          <DropdownButton
            variant=""
            title={
              <Image
                src={
                  data.image
                    ? `${process.env.IMAGE_URL}${data.image}`
                    : "https://res.cloudinary.com/qxtlp/image/upload/v1651069637/default-profile.jpg"
                }
                width="100"
                height="100"
                alt=""
                className="visible"
              ></Image>
            }
            id="input-group-dropdown-1"
          >
            <Dropdown.Item className="text-center">
              <label htmlFor="imageInput" className="invisible ">
                <span className="visible" onClick={(e) => e.stopPropagation()}>
                  Edit
                </span>
              </label>
            </Dropdown.Item>
            <Dropdown.Item className="text-center">
              <span className="visible" onClick={(e) => handleDelete(e)}>
                Delete
              </span>
            </Dropdown.Item>
          </DropdownButton>

          <input
            type="file"
            accept="image/*"
            className="d-none"
            name="image"
            id="imageInput"
            onChange={(event) => handleImage(event)}
          />
        </div>
        <Button variant="" onClick={() => setModalShow(true)}>
          <i className="bi bi-pen me-2"></i>
          Edit
        </Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          handleSubmit={(form) => handleSubmit(form)}
        />
        <h3 className="my-3">
          {data.firstName} {data.lastName}
        </h3>
        <h5 className="text-black-50">{data.noTelp || "+00 000 000 000"}</h5>
        <div className="mt-5 col-lg-6 container text-start">
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

          <button
            className="btn btn-lg bg-light w-100 py- d-flex justify-content-between mt-4"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
}

function MyVerticallyCenteredModal(props) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
  });

  const handleChangeForm = ({ target: { name, value } }) => {
    console.log(name);
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post("/auth/register", form);
      console.log(result);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Name</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-5">
        <div
          className={`input-group my-4  border-bottom ${
            form.firstName ? "border-primary" : ""
          }`}
        >
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i
              className={`bi bi-person fs-3 ${
                form.firstName ? "textMain" : ""
              }`}
            ></i>
          </span>
          <input
            type="text"
            className="form-control border-0 fs-6"
            placeholder="Enter your firstname"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="firstName"
            onChange={(event) => handleChangeForm(event)}
            required
          />
        </div>
        <div
          className={`input-group my-4  border-bottom ${
            form.lastName ? "border-primary" : ""
          }`}
        >
          <span
            className="input-group-text border-0 bg-white ps-0 text-black-50"
            id="basic-addon1"
          >
            <i
              className={`bi bi-person fs-3 ${form.lastName ? "textMain" : ""}`}
            ></i>
          </span>
          <input
            type="text"
            className="form-control border-0 fs-6"
            placeholder="Enter your lastname"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="lastName"
            onChange={(event) => handleChangeForm(event)}
            required
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" onClick={props.onHide}>
          Cancel
        </Button>
        <Button onClick={() => props.handleSubmit(form)}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrivateRoute(Profile);
