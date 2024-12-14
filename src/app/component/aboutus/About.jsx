import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Chooseleft from "../../assets/aboutleft.png";
import Aboutleft1 from "../../assets/aboutleft2.png";
import Video from "../../assets/video.png";
import Commen from "../commen/Commen";
import Videopopup from "../videoPopup/Videopopup";
import show_Toast from "../../helpers/toast.helper";
import axios from "axios";

const About = () => {
  const [show, setShow] = useState(false);
  const [play, setPlay] = useState(false);
  const [apiData, setApiData] = useState({});
  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;
  const token = process.env.REACT_APP_API_TOKEN;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/aboutus-pages?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setApiData(response?.data?.data[0]);
    } catch (error) {
      show_Toast({
        status: false,
        message: error.response?.data?.message || "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const {
    PrimaryHeading,
    Primarydescription,
    SecondaryHeading,
    Secondarydescription,
    subtitle,
    subdescription,
    secondaryimage,
    primaryimage,
  } = apiData?.attributes || {};

  return (
    <>
      <Helmet>
        <title>ComplyCore | About Us</title>
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
                className="about-chose"
                dataAbout={{
                  title: PrimaryHeading || "Why Choose Us?",
                  description:
                    Primarydescription?.[0]?.children?.[0]?.text ||
                    "Default description...",
                }}
                Chooseleft={`${apiUrl}${secondaryimage?.data?.attributes?.url || Aboutleft1}`}
              />
            </div>
          </div>
        </section>
        <section className="achievements">
          <div className="container">
            <div className="achievements-block">
              <h1>{SecondaryHeading || "Our Achievements"}</h1>
              <p>
                {Secondarydescription?.[0]?.children?.[0]?.text ||
                  "Default achievements description..."}
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
                    <div className="choose-comply-left">
                      <h1>{subtitle || "Our Mission"}</h1>
                      {subdescription?.map((desc, index) => (
                        <p key={index} className="list">
                          {desc?.children?.[0]?.text || "Default mission description..."}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="chose-right">
                      <img
                        src={`${apiUrl}${primaryimage?.data?.attributes?.url || Chooseleft}`}
                        alt=""
                      />
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
