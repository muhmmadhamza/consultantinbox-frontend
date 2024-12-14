import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import show_Toast from "../../helpers/toast.helper";

import { Link } from "react-router-dom";
// import './style.scss'
import { BsArrowRight } from "react-icons/bs";
import Companylogo1 from "../../assets/companylogo1.png";
import Companylogo2 from "../../assets/companylogo2.png";
import Companylogo3 from "../../assets/companylogo3.png";
import Companylogo4 from "../../assets/companylogo4.png";
import Companylogo5 from "../../assets/companylogo5.png";
import Feature1 from "../../assets/feature1.png";
import Feature2 from "../../assets/feature2.png";
import Chooseleft from "../../assets/choose-left.png";
import Calender from "../../assets/calender.png";
import Customer1 from "../../assets/customer1.png";
import Customer2 from "../../assets/customer2.png";
import Customer3 from "../../assets/customer3.png";
import Customer4 from "../../assets/customer4.png";
import Contactleft from "../../assets/contact-left.png";
import CardSwiper from "../cardSlider/CardSwiper";
import User1 from "../../assets/user1.png";
import User2 from "../../assets/user2.png";
import User3 from "../../assets/user3.png";
import User4 from "../../assets/user4.png";
import User5 from "../../assets/user5.png";
import User6 from "../../assets/user6.png";
import { BsArrowLeft } from "react-icons/bs";
import Card1 from "../../assets/card1.png";
import Star from "../../assets/Star.png";
import axios from "axios";
import HomeCommen from "../commen/HomeCommen";

const Home = () => {
  const data = [
    {
      id: 1,
      title: "Conversational AI Support:",
      description:
        "Engage in natural conversations with our AI-powered compliance assistant, eliminating the need for expensive consultants. Get instant and accurate guidance on DOT regulations and procedures.",
      image: "https://leadconcept.net/Employee/Ali/waqar/assets/proc11.png",
    },
    {
      id: 2,
      title: "Streamlined Compliance Documentation",
      description:
        "Simplify your compliance tasks with our user-friendly interface. Create and manage forms, documents, and reports effortlessly, saving time and reducing administrative burden.",
      image: "https://leadconcept.net/Employee/Ali/waqar/assets/proc2.png",
    },
    {
      id: 3,
      title: "Up-to-Date Regulatory Knowledge:",
      description:
        "Stay ahead of the curve with our continuously updated knowledge base. Our AI system ensures that you are always informed about the latest changes in DOT regulations",
      image: "https://leadconcept.net/Employee/Ali/waqar/assets/proc9.png",
    },
    {
      id: 4,
      title: "Cost-Effective Solution",
      description:
        "We understand the financial constraints of small operators. Comply Core offers an affordable compliance management solution that fits within your budget, allowing you to focus on growing your business",
      image: "https://leadconcept.net/Employee/Ali/waqar/assets/proc4.png",
    },
  ];
  const dataAbout = {
    title: "Why Choose Comply Core?",
    description:
      "Affordable compliance management specifically tailored for small natural gas operators Conversational AI support that provides expert guidance on DOT regulations Streamlined documentation and reporting to simplify your compliance tasks Up-to-date regulatory knowledge to ensure compliance excellence <br /> Cost-effective solution to optimize your resources and budget",
  };

  const [homedata, setHomeData] = useState({
    pageData: {},
    otherData1: [],
    otherData2: {},
    otherData3: [],
  });
 

  const [loading, setLoading] = useState(true);

  const apiUrl = process.env.REACT_APP_API_URL;
  const token = process.env.REACT_APP_API_TOKEN;

  const fetchData = async () => {
    try {
      const [
        pageResponse,
        otherData1Response,
        otherData2Response,
        otherData3Response,
      ] = await Promise.all([
        axios.get(`${apiUrl}/api/homepage-firstsections`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
        axios.get(`${apiUrl}/api/homepage-featuressections?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
        axios.get(`${apiUrl}/api/homepage-whyhooses?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
        axios.get(`${apiUrl}/api/homepage-calendorsections?populate=*`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }),
      ]);

      setHomeData({
        pageData: pageResponse.data,
        otherData1: otherData1Response.data?.data || [],
        otherData2: otherData2Response.data?.data[0] || {},
        otherData3: otherData3Response.data?.data || [],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
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

  const { pageData, otherData1, otherData2, otherData3 } = homedata;
  console.log(otherData3,"hamza")

  const renderRichText = (content) => {
    return content?.map((block, index) => {
      switch (block.type) {
        case "paragraph":
          return (
            <p key={index}>
              {block.children.map((child, idx) => (
                <span key={idx}>{child.text}</span>
              ))}
            </p>
          );
        default:
          return null;
      }
    });
  };

  const title =
    pageData?.data?.attributes?.title || "Empowering Natural Gas Compliance";
  const subHeading =
    pageData?.data?.attributes?.subHeading?.[0]?.children?.[0]?.text ||
    "Affordable Compliance Made Simple";
  const content =
    pageData?.data?.attributes?.content?.[0]?.children?.[0]?.text ||
    `
  Comply Core is an innovative web application designed specifically for small natural gas operators. 
  We understand the challenges faced by operators who struggle to navigate the complexities of state and 
  federal Department of Transportation (DOT) regulations while operating on limited budgets. Comply Core 
  combines cutting-edge AI technology with conversational language interface to provide cost-effective 
  compliance solutions and expert guidance. Say goodbye to compliance worries and say hello to streamlined 
  operations with Comply Core.`;

  return (
    <>
      <Helmet>
        <title>ComplyCore | Home</title>
      </Helmet>
      <div className="home-page">
        <section className="home">
          <div className="container">
            <div className="home-block col-xl-7 col-lg-8">
              <div className="home-heading">
                <h1> {title}</h1>
              </div>
              <div className="home-sub-head">
                <h4>{subHeading}</h4>
              </div>
              <div className="home-description">
                <p>{content}</p>
              </div>
              <div className="home-btn">
                <Link to="#">Lorem Ipsum</Link>
              </div>

              <div className="companies-link d-flex align-items-center">
                <div className="logo-title">
                  Trusted by <br />
                  leading companies
                </div>
                <div className="compaines-logo d-flex align-items-center">
                  <img src={Companylogo1} alt="" />
                  <img src={Companylogo2} alt="" />
                  <img src={Companylogo3} alt="" />
                  <img src={Companylogo4} alt="" />
                  <img src={Companylogo5} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="features">
          <div className="container">
            <div className="featuresblock">
              <h2>Key Features:</h2>
              <ul className="feaure-card-ul">
                {otherData1?.map((curElem) => {
                  return <CardSwiper key={curElem.id} curElem={curElem} />;
                })}
              </ul>
              <HomeCommen
                dataAbout={dataAbout}
                Chooseleft={Chooseleft}
                otherData2={otherData2}
              />
            </div>
          </div>
        </section>
        <section className="getstarted">
          <div className="container">
            <div className="row Getstarted-block ">
              <div className="col-lg-6">
                <div className="getstarted-title">
                  <h1>{otherData2?.attributes?.subtitle}</h1>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="getstarted-btn">
                  <Link to="">{otherData2?.attributes?.buttontext}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-customer">
          <div className="container">
            <div className="customer-block">
              <div className="customers-sec">
                <h1>{otherData2.attributes?.primarysubheading}</h1>
                <p className="customer-info">
                  {renderRichText(otherData2.attributes?.Primarydescriptions)}
                </p>
                <div className="card-slider">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-indicators">
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active user-testi user-testi1"
                        aria-current="true"
                        aria-label="Slide 1"
                      >
                        <img src={User1} alt="" className="customer-img4" />
                      </div>
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        className=" user-testi user-testi2"
                        aria-label="Slide 2"
                      >
                        <img src={User2} alt="" className="customer-img5" />
                      </div>
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        className="user-testi user-testi3"
                        aria-label="Slide 3"
                      >
                        <img src={User3} alt="" className="customer-img6" />
                      </div>
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        className=" user-testi user-testi4"
                        aria-label="Slide 4"
                      >
                        <img src={User4} alt="" className="customer-img6" />
                      </div>
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="4"
                        className=" user-testi user-testi5"
                        aria-label="Slide 5"
                      >
                        <img src={User5} alt="" className="customer-img6" />
                      </div>
                      <div
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="5"
                        className=" user-testi user-testi6"
                        aria-label="Slide 6"
                      >
                        <img src={User6} alt="" className="customer-img6" />
                      </div>
                    </div>

                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="card-info">
                          <div className="card-details">
                            <img src={Card1} alt="" className="card-Imag" />
                            <div className="ratting-star">
                              <ul>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                                <li>
                                  <img src={Star} alt="" />
                                </li>
                              </ul>
                            </div>
                            <p>
                              Yet preference connection unpleasant yet
                              melancholy but end appearance. And excellence
                              partiality estimating terminated day everything.
                            </p>
                            <div className="name">Sam</div>
                            <div className="username">@Migelko</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-btns">
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <BsArrowLeft className="next-icon" />
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <BsArrowRight className="prev-icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="customer-card-ul">
                {otherData3?.map((item) => (
                  <li key={item.id} className="customer-card-li">
                    <div className="customer-card">
                      <div className="card-imgs">
                        <img
                         src={`${apiUrl}${item?.attributes?.image?.data?.[0]?.attributes?.url}`}
                          alt={item?.attributes?.image?.data?.[0]?.attributes?.alternativeText || ''}
                        />
                      </div>
                      <div className="c-card-body">
                        <h5>{item.attributes.PrimaryHeading}</h5>
                        <p>{item.attributes.description[0].children[0].text}</p>
                        <div className="card-date d-flex align-items-center">
                          <div className="calender-icon">
                            <img src={Calender} alt="" />
                          </div>
                          <div className="date-info">
                            <p>2023-03-21 05-20-34</p>
                          </div>
                        </div>
                        {/* <div className="read-more">
                          <Link to="">
                            Read More <BsArrowRight className="arrow-icon" />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </li>
                ))}

                {/* <li className="customer-card-li">
                  <div className="customer-card">
                    <div className="card-imgs">
                      <img src={Customer2} alt="" />
                    </div>
                    <div className="c-card-body">
                      <h5>What is lorem Ipsum</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard
                      </p>
                      <div className="card-date d-flex align-items-center">
                        <div className="calender-icon">
                          <img src={Calender} alt="" />
                        </div>
                        <div className="date-info">
                          <p>2023-03-21 05-20-34</p>
                        </div>
                      </div>
                      <div className="read-more">
                        <Link to="">
                          Read More <BsArrowRight className="arrow-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="customer-card-li">
                  <div className="customer-card">
                    <div className="card-imgs">
                      <img src={Customer3} alt="" />
                    </div>
                    <div className="c-card-body">
                      <h5>What is lorem Ipsum</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard
                      </p>
                      <div className="card-date d-flex align-items-center">
                        <div className="calender-icon">
                          <img src={Calender} alt="" />
                        </div>
                        <div className="date-info">
                          <p>2023-03-21 05-20-34</p>
                        </div>
                      </div>
                      <div className="read-more">
                        <Link to="">
                          Read More <BsArrowRight className="arrow-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="customer-card-li">
                  <div className="customer-card">
                    <div className="card-imgs">
                      <img src={Customer4} alt="" />
                    </div>
                    <div className="c-card-body">
                      <h5>What is lorem Ipsum</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard
                      </p>
                      <div className="card-date d-flex align-items-center">
                        <div className="calender-icon">
                          <img src={Calender} alt="" />
                        </div>
                        <div className="date-info">
                          <p>2023-03-21 05-20-34</p>
                        </div>
                      </div>
                      <div className="read-more">
                        <Link to="">
                          Read More <BsArrowRight className="arrow-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </section>
        <section className="contact-us-form">
          <div className="container">
            <div className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-left">
                    <img src={Contactleft} alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-right">
                    <h1>Contact Us</h1>
                    <form action="">
                      <div className="input-field">
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="phone" placeholder="Phone" />
                      </div>
                      <div className="text-area">
                        <textarea
                          name="message"
                          id=""
                          cols="30"
                          rows="4"
                          placeholder="Message"
                        ></textarea>
                      </div>
                      <div className="submit-btn">
                        <button>Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
