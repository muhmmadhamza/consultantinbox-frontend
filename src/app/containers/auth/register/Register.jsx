import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTimes } from "react-icons/fa";

import Webiste from "../../../assets/website.png";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useFormik } from "formik";
import { RegistrationScehma } from "../../../validation/registration";
import { RiErrorWarningLine } from "react-icons/ri";
import show_Toast from "../../../helpers/toast.helper";
import { RegisterUser } from "../../../services/index";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  avatarUrl: null,
};
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: RegistrationScehma,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      const role = 2;
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("password", values.password);
      formData.append("confirmPassword", values.confirmPassword);
      formData.append("phone", values.phone);
      formData.append("role_id", role);
      formData.append("profilePhoto", values.avatarUrl);
      try {
        setSubmitting(true);
        const response = await RegisterUser(formData);
        if (response?.data?.status === "success") {
          navigate("/registerotppage");
          const valuesString = JSON.stringify(values?.email);
          localStorage.setItem("accessRegisterToken", valuesString);
        }
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
        resetForm();
      } catch (error) {
        show_Toast({
          status: false,
          message: error?.response?.data?.message || "Something went wrong",
        });
      } finally {
        setSubmitting(false);
      }
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    const maxSize = 24 * 1024 * 1024; // 24MB
    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    try {
      if (!file) {
        throw new Error("No image selected.");
      }

      if (file.size > maxSize) {
        throw new Error("Image size Must Be Lesser than 24 MB");
      }

      const fileExtension = file.name.toLowerCase();

      if (
        !allowedExtensions.some((extension) =>
          fileExtension.endsWith(extension)
        )
      ) {
        throw new Error(
          "Invalid file extension. Allowed extensions are .jpg, .jpeg, and .png."
        );
      }

      reader.onloadend = () => {
        setFieldValue("avatarUrl", file);
      };

      reader.onerror = (error) => {
        throw new Error("Error occurred while reading the image file.");
      };

      reader.readAsDataURL(file);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.message || "Something went wrong",
      });
    }
  };

  const handleRemoveImage = () => {
    setFieldValue("avatarUrl", null);
  };

  return (
    <>
      <Helmet>
        <title>ComplyCore | Register</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Register</h1>
          </div>

          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo register-logo">
                  <img src={Webiste} alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-f">
                    <label htmlFor="name">Name</label>
                    <input
                      className={
                        errors.name && touched.name ? "inputError" : null
                      }
                      type="text"
                      name="name"
                      id="name"
                      placeholder="johan"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />

                    {errors.name && touched.name ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.name}</p>{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-f">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className={
                        errors.email && touched.email ? "inputError" : null
                      }
                      name="email"
                      id="email"
                      placeholder="username@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.email}</p>{" "}
                      </div>
                    ) : null}
                  </div>
                  <div className="input-f">
                    <label htmlFor="password">Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={
                        errors.password && touched.password
                          ? "inputError"
                          : null
                      }
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password ? (
                      <div>
                        {" "}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.password}</p>{" "}
                      </div>
                    ) : (
                      <span onClick={handleTogglePassword}>
                        {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                      </span>
                    )}
                  </div>
                  <div className="input-f">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "inputError"
                          : null
                      }
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.confirmPassword && touched.confirmPassword ? (
                      <div>
                        {" "}
                        <span>
                          <RiErrorWarningLine className="warning" />
                        </span>
                        <p className="form-errors">{errors.confirmPassword}</p>{" "}
                      </div>
                    ) : (
                      <span onClick={handleToggleConfirmPassword}>
                        {showConfirmPassword ? (
                          <AiFillEye />
                        ) : (
                          <AiFillEyeInvisible />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="input-f">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className={
                        errors.phone && touched.phone ? "inputError" : null
                      }
                      id="phone"
                      placeholder="123 - 4567- 34"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && touched.phone ? (
                      <div>
                        {" "}
                        <span>
                          {" "}
                          <RiErrorWarningLine className="warning" />{" "}
                        </span>
                        <p className="form-errors">{errors.phone}</p>{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="input-f">
                    <label htmlFor="phone">Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="avatarUrl"
                      onChange={handleImageChange}
                      id="file"
                      onBlur={handleBlur}
                    />
                    {values.avatarUrl && (
                      <div className="d-flex align-items-center">
                        <img
                          src={URL.createObjectURL(values.avatarUrl)}
                          alt="Selected"
                          style={{ maxWidth: "100px" }}
                        />
                        <FaTimes
                          className="ml-2"
                          onClick={handleRemoveImage}
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    )}
                  </div>

                  <div className="log-btn sign-up">
                    <Button
                      type="submit"
                      variant="outlined"
                      sx={{
                        backgroundColor: "#3C4256 !important",
                        color: "white !important",
                        borderColor: "#3C4256 !important",

                        "&:hover": {
                          backgroundColor: "transparent !important",
                          color: "black !important",
                          borderColor: "#3C4256 !important",
                        },
                      }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <CircularProgress
                          size={30}
                          color="primary"
                          style={{ color: "white" }}
                        />
                      ) : (
                        "Sign Up"
                      )}
                    </Button>
                  </div>
                  <div className="dont-account have-account">
                    <Link to="/login">
                      Already a user?<span> Login</span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
