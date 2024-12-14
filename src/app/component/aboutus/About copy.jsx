import React from "react";
import { Helmet } from "react-helmet-async";

import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import Chooseleft from "../../assets/aboutleft.png";
import Aboutleft1 from "../../assets/aboutleft2.png";
import Video from "../../assets/video.png";
import Commen from "../commen/Commen";
import Videopopup from "../videoPopup/Videopopup";

const About = () => {
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);

  const className = "about-chose";
  const htmlTag = (
    <p>
      {" "}
      This results in clear project responsibility and minimal coordination of
      tasks for Comply Core clients throughout project execution.{" "}
    </p>
  );
  const dataAbout = {
    title: "Why Choose Comply Core?",
    description: `Affordable compliance management specifically tailored for small natural gas operators Conversational AI support that provides expert guidance on DOT regulations Streamlined documentation and reporting to simplify your compliance tasks Up-to-date regulatory knowledge to ensure compliance excellence Cost-effective solution to optimize your resources and budget`,
  };

  return (
    <>
      <Helmet>
        <title>ComplyCore | AboutUs</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>About Us</h1>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="featuresblock">
              <Commen
                dataAbout={dataAbout}
                Chooseleft={Chooseleft}
                className={className}
              />
            </div>
          </div>
        </section>
        <section className="achievements">
          <div className="container">
            <div className="achievements-block">
              <h1>Our Achievements</h1>
              <p>
                The Company's main business is producing, marketing and selling
                various gases for industry and related products in the Republic
                of Indonesia in the form of liquefied gas or solid gas. Aside
                from that, the Company trades gas products from other producers
                to customers, particularly for products such as Specialty Gas,
                Rare Gas and many more.
              </p>
            </div>
          </div>
        </section>
        <section className="vedio">
          <div className="container">
            <div className="vedio-img">
              <img src={Video} alt="" />
              <div
                className="play-btn"
                onClick={() => {
                  setShow(true);
                  setPlay(true);
                }}
              >
                <span></span>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="featuresblock">
              <div className="why-choose-comply about-chose">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="choose-comply-left ">
                      <h1>Our Mission</h1>
                      <p>
                        To be the most desirable company that continuously grows
                        and expands by utilizing natural resources that are
                        beneficial for life
                      </p>
                      <p className="list">
                        1. Give the best for the stakeholders
                      </p>
                      <p className="list">
                        2. Integrity and commitment to quality, HSE (Health
                        Safety Environment) and GCG (Good Corporate Governance)
                      </p>
                      <p className="list">
                        3. Enhance Total Customer Solution (TCS)
                      </p>
                      <p className="list">
                        4. Expand the business area coverage and develop
                        products, services and technologies
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="chose-right">
                      <img src={Aboutleft1} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Videopopup
          show={show}
          setShow={setShow}
          play={play}
          setPlay={setPlay}
        />
      </div>
    </>
  );
};

export default About;