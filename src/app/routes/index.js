import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ThemeProvider from "../theme";
// components
import { StyledChart } from "../component/chart";
import ScrollToTop from "../component/scroll-to-top";

import About from "../component/aboutus/About";
import AppLayout from "../component/app";
import Contact from "../component/contact/Contact";
import Home from "../component/home/Home";
import Ourproject from "../component/ourproject/Ourproject";
import Services from "../component/services/Services";
import ForgetPassword from "../containers/auth/forgetPassword/ForgetPassword";
import Login from "../containers/auth/login/Login";
import Register from "../containers/auth/register/Register";

import { AuthRoute } from "./routes";
import AdminDashboard from "../containers/Admin";
import Dashboard from "../containers/section";
import Page404 from "../pages/Page404";
import ResetPassword from "../containers/auth/resetPassword/ResetPassword";
import OtpPage from "../containers/auth/otpPage/OtpPage";
import RegisterOtpPage from "../containers/auth/otpPage/RegisterOtpPage";
import Page403 from "../pages/Page403";

const AppRoutes = () => {
  const { isAuthenticated = false } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <ScrollToTop />
        <StyledChart />
        <Routes>
          <Route
            path="/login"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Login />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/register"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Register />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/forget"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <ForgetPassword />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/resetpassword"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <ResetPassword />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/otppage"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <OtpPage />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/registerotppage"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <RegisterOtpPage />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Home />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/project"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Ourproject />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/services"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Services />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <Contact />
                </AppLayout>
              </AuthRoute>
            }
          />
          <Route
            path="/about"
            element={
              <AuthRoute isAuthenticated={isAuthenticated}>
                <AppLayout>
                  <About />
                </AppLayout>
              </AuthRoute>
            }
          />

          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="/403" element={<Page403 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
