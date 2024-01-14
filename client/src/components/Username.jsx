import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { usernameValidate } from "../helper/validate";
import { useAuthStore } from "../store/store";

import styles from "../styles/Username.module.css";
import Navbar from "./Navbar";
import { AuthorizeUser } from "../middleware/auth";

export default function Username() {
  const navigate = useNavigate();
  const setUsername = useAuthStore((state) => state.setUsername);

  const serverURL = "https://elevate2k23.onrender.com";
  const localURL = "http://localhost:8080";
  const URL = localURL;

  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      setUsername(values.username);
      navigate("/password");
    },
  });

   const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`${URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formik.values),
    });

    const data = await response.json();

    if (data.token) {
      toast.success('Login Successful');
      navigate("/profile");
    } else {
      toast.error('Login Failed')
    }
    console.log(data);
   }

  return (
    <>
      <Navbar />
      <div className="container ">
        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="flex justify-center items-center h-screen">
          {/* <div className={styles.glass}> */}
          <div className="form-bx">
            <div className="title flex flex-col items-center">
              <h4 className="text-5xl font-bold">Let's Converge</h4>
            </div>

            <form className="py-1 " onSubmit={login}>
              {/* <div className='profile flex justify-center py-4'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div> */}
              <div className="form-floating my-3">
                <input
                  {...formik.getFieldProps("username")}
                  className="form-control"
                  type="text"
                  placeholder="Username"
                />
                <label htmlFor="username">Username</label>
              </div>

              <div className="form-floating my-3">
              <input
                {...formik.getFieldProps("password")}
                className="form-control password"
                type="text"
                placeholder="Password"
              />
              <label htmlFor="password">Password</label>
              </div>



          <button
            className="btn btn-lg btn-primary btn-login fw-bold mt-4"
            type="submit"
          >
            Login
          </button>

          {/* <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("username")}
                className={styles.textbox}
                type="text"
                placeholder="Username"
              />
              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div> */}

          {/*<div className="text-center py-4">
                <span className="text-gray-500">
                  Not a Member{" "}
                  <Link className="register-here" to="/register">
                    Register Now
                  </Link>
                </span>
          </div>*/}

        </form>
      </div>
    </div >
      </div >
    </>
  );
}
