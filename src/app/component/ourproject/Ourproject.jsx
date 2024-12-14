import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import show_Toast from "../../helpers/toast.helper";
import Pro1 from "../../assets/pro1.png";
import Pro2 from "../../assets/pro2.png";
import Pro3 from "../../assets/pro3.png";
import Pro4 from "../../assets/pro4.png";
import Proc1 from "../../assets/proc1.png";
import Proc2 from "../../assets/proc2.png";
import Proc3 from "../../assets/proc3.png";
import Proc4 from "../../assets/proc4.png";
import Proc5 from "../../assets/proc5.png";
import Proc6 from "../../assets/proc6.png";
import Proc7 from "../../assets/proc7.png";
import Proc8 from "../../assets/proc8.png";
import Proc9 from "../../assets/proc9.png";
import Proc10 from "../../assets/proc10.png";
import Proc11 from "../../assets/proc11.png";
import Proc12 from "../../assets/proc12.png";

const Ourproject = () => {
  const [loading, setLoading] = useState(true);
  const [loadings, setLoadings] = useState(true);
  const [apiData, setApiData] = useState({});
  const [apiDatas, setApiDatas] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  const token = process.env.REACT_APP_API_TOKEN;

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/ourprojects?populate=*`, {
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

  const fetchDatas = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/ourproject-middlesections?populate=*`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = response?.data?.data || [];
      setApiDatas(Array.isArray(data) ? data : []);
    } catch (error) {
      show_Toast({
        status: false,
        message: error.response?.data?.message || "Something went wrong",
      });
      setApiDatas([]);
    } finally {
      setLoadings(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchDatas();
  }, []);

  return (
    <>
      <Helmet>
        <title>ComplyCore | OurProject</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Our Project</h1>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="featuresblock">
              <div className="why-choose-comply about-chose">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="choose-comply-left ourproject-left">
                      <h1>{apiData?.attributes?.primaryheading || "WE CONSTRUCTED A SECURE EXPERIENCE FOR YOU"}</h1>
                      <p>
                        {apiData?.attributes?.Primarydescription?.[0]?.children?.[0]?.text ||
                          "Comply Core has many years of experience in the preparation and execution of large-scale, interdisciplinary projects. Drawing on this experience, Comply is competent to perform project management tasks as prime consultant."}
                      </p>
                      <ul className="project-ul">
                        <li className="project-li">
                          <div className="project-card">
                            <div className="project-icon">
                              <img src={Pro1} alt="" />
                            </div>
                            <div className="pro-title">
                              <h3>SELECT YOUR SERVICES</h3>
                            </div>
                          </div>
                        </li>
                        <li className="project-li">
                          <div className="project-card">
                            <div className="project-icon">
                              <img src={Pro2} alt="" />
                            </div>
                            <div className="pro-title">
                              <h3>COMPLETE YOUR DATA</h3>
                            </div>
                          </div>
                        </li>
                        <li className="project-li">
                          <div className="project-card">
                            <div className="project-icon">
                              <img src={Pro3} alt="" />
                            </div>
                            <div className="pro-title">
                              <h3>MAKE AN APPOINTMENT</h3>
                            </div>
                          </div>
                        </li>
                        <li className="project-li">
                          <div className="project-card">
                            <div className="project-icon">
                              <img src={Pro4} alt="" />
                            </div>
                            <div className="pro-title">
                              <h3>GET AMAZING SERVICES</h3>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="chose-right">
                      <img 
                        src={`${apiUrl}${apiData?.attributes?.image?.data?.attributes?.url}`} 
                        alt="Project Image" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features features2 our-project-features">
          <div className="container">
            <div className="featuresblock">
              <ul className="feaure-card-ul">
                {apiDatas.map(item => (
                  <li key={item.id} className="feature-card-li">
                    <div className="feature-card">
                      <div className="card-imgs">
                        <img 
                          src={`${apiUrl}${item.attributes.image.data[0].attributes.url}`} 
                          alt={item.attributes.title} 
                        />
                      </div>
                      <div className="f-card-body">
                        <h3>{item.attributes.title}</h3>
                        <p>
                          {item.attributes.description[0].children[0].text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ourproject;
