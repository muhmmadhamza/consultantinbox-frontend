import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@mui/material";

import "./otppage.css";
import Passwordimg from "../../../assets/forgot-password.png";
import { useNavigate } from "react-router-dom";
import show_Toast from "../../../helpers/toast.helper";
import { UpdateOtp } from "../../../services/index";
import { ForgotPassword } from "../../../services/index";

const RegisterOtpPage = () => {
  const [otp, setOTP] = useState(new Array(6).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  const startTimer = () => {
    setIsButtonDisabled(true);
    setRemainingTime(60);
  };

  const navigate = useNavigate();

  const inputRefs = useRef([]);

  const storedValuesString = localStorage.getItem("accessRegisterToken");

  useEffect(() => {
    if (!storedValuesString) {
      navigate("/login");
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!isNaN(value) && value.length <= 1) {
      setOTP((prevOTP) => {
        const newOTP = [...prevOTP];
        newOTP[index] = value;
        return newOTP;
      });

      if (value !== "") {
        let nextEmptyIndex = index + 1;
        while (
          nextEmptyIndex <= 5 &&
          inputRefs.current[nextEmptyIndex]?.value !== ""
        ) {
          nextEmptyIndex++;
        }

        if (nextEmptyIndex <= 5) {
          inputRefs.current[nextEmptyIndex]?.focus();
        } else {
          let prevNonEmptyIndex = index - 1;
          while (
            prevNonEmptyIndex >= 0 &&
            inputRefs.current[prevNonEmptyIndex]?.value !== ""
          ) {
            prevNonEmptyIndex--;
          }

          if (prevNonEmptyIndex >= 0) {
            inputRefs.current[prevNonEmptyIndex]?.focus();
          } else {
            e.target.blur();
          }
        }
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === "Backspace") {
      if (e.target.value === "") {
        if (index > 0) {
          inputRefs.current[index - 1]?.focus();
        }
      } else {
        setOTP((prevOTP) => {
          const newOTP = [...prevOTP];
          newOTP[index] = "";
          return newOTP;
        });
      }
    }

    // Move cursor to input if left or right arrow is pressed after Backspace or Delete
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      const input = inputRefs.current[index];
      if (input) {
        input.setSelectionRange(input.value.length, input.value.length);
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault(); // Prevent default paste behavior
    const pastedData = e.clipboardData.getData("Text").trim();
    const sanitizedData = pastedData.replace(/\D/g, ""); // Remove non-digits

    const newOtp = [...otp];

    // Start pasting only if there's numeric data and we have empty fields
    if (/^\d+$/.test(sanitizedData) && newOtp.some((digit) => digit === "")) {
      let nextEmptyIndex = newOtp.findIndex((digit) => digit === ""); // Find next empty field

      // Paste the numeric data into empty fields
      for (let i = 0; i < sanitizedData.length && nextEmptyIndex !== -1; i++) {
        newOtp[nextEmptyIndex] = sanitizedData[i];
        nextEmptyIndex = newOtp.findIndex(
          (digit) => digit === "",
          nextEmptyIndex + 1
        );
      }

      setOTP(newOtp);

      // Move focus to the last pasted input field
      const lastPastedIndex = nextEmptyIndex - 1;
      const lastPastedInput = inputRefs.current[lastPastedIndex];

      if (lastPastedInput) {
        lastPastedInput.focus();

        // If there's an empty field next to the last pasted index, move focus to it
        if (
          newOtp[lastPastedIndex + 1] === "" &&
          inputRefs.current[lastPastedIndex + 1]
        ) {
          inputRefs.current[lastPastedIndex + 1].focus();
        }

        // Check if all fields are filled and blur the last input field
        if (newOtp.every((digit) => digit !== "")) {
          lastPastedInput.blur();
        }
      }

      // If all fields are filled, find the focused input and blur it
      if (newOtp.every((digit) => digit !== "")) {
        const focusedInput = inputRefs.current.find(
          (input) => document.activeElement === input
        );
        if (focusedInput) {
          focusedInput.blur();
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOTP = otp.join("").replace(/,/g, ""); // Remove commas from joined OTP

    // Retrieve email from localStorage
    const storedValuesString = localStorage.getItem("accessRegisterToken");
    const storedValues = JSON.parse(storedValuesString);
    const userEmail = storedValues;
    const values = { email: userEmail, otp: enteredOTP };

    try {
      const response = await UpdateOtp(values);
      if (response?.data?.status === "success") {
        navigate("/login");
        localStorage.removeItem("accessRegisterToken");
      }
      show_Toast({
        status: true,
        message: response?.data?.message || "Success",
      });
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }

    // Clear the OTP input fields
    setOTP(new Array(6).fill(""));
  };

  useEffect(() => {
    let timer;

    if (isButtonDisabled && remainingTime > 0) {
      timer = setTimeout(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsButtonDisabled(false);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [isButtonDisabled, remainingTime]);

  const handleResendClick = async () => {
    startTimer();
    const storedValuesString = localStorage.getItem("accessRegisterToken");
    const storedValues = JSON.parse(storedValuesString);
    const userEmail = storedValues;
    const values = { email: userEmail };

    try {
      const response = await ForgotPassword(values);
    } catch (error) {
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };
  return (
    <>
      <Helmet>
        <title>ComplyCore | OtpPage</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Verify OTP</h1>
          </div>
          <div className="login-block">
            <div className="container">
              <div className="login-form">
                <div className="login-logo">
                  <img src={Passwordimg} className="forgetimg" alt="" />
                </div>
                <div className="otp_p">
                  <p>Your code was sent to you via email</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-f">
                    <div className="otp-field">
                      {otp.map((value, index) => (
                        <input
                          required
                          key={index}
                          id={`otp-input-${index}`}
                          type="text"
                          value={value}
                          maxLength={1}
                          onChange={(e) => handleChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onPaste={(e) => handlePaste(e, index)}
                          ref={(el) => (inputRefs.current[index] = el)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="log-btn">
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
                    >
                      Submit
                    </Button>
                  </div>
                </form>
                <div
                  style={{
                    textAlign: "right",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <p style={{ marginTop: "1rem" }}>
                    Didn’t you receive the OTP?
                  </p>
                  <button
                    className="btn"
                    onClick={handleResendClick}
                    disabled={isButtonDisabled}
                  >
                    Resend OTP
                  </button>
                </div>
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  {isButtonDisabled && <p>Time Remaining: {remainingTime}</p>}{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RegisterOtpPage;
