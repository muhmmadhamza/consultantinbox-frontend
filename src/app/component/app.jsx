import React, { Fragment } from "react";
import Footer from "../component/footer/Footer";
import Header from "../component/header/Header";
import { ToastContainer } from "react-toastify";

const AppLayout = (props) => {
  return (
    <Fragment>
      <div className="page-wrapper">
        <div className="page-body-wrapper">
          <Header />
          <div className="page-body">{props.children}</div>
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </Fragment>
  );
};

export default AppLayout;
