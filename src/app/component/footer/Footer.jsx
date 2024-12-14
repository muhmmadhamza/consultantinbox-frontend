import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import Footerlogo from "../../assets/footer-logo.png";
import Mapicon from "../../assets/map-icon.png";
import Emailicon from "../../assets/email-icon.png";
import Social1 from "../../assets/social1.png";
import Social2 from "../../assets/social2.png";
import Social3 from "../../assets/social3.png";
import Social4 from "../../assets/social4.png";
import Social5 from "../../assets/social5.png";
import Social6 from "../../assets/social6.png";
import Social7 from "../../assets/social7.png";
import Social8 from "../../assets/social8.png";
import Social9 from "../../assets/social9.png";
import axios from "axios";
import show_Toast from "../../helpers/toast.helper";

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const [apiData, setApiData] = useState({});
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

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-section">
            <div className="footer-logo">
              <Link to="/">
                {" "}
                <img src={Footerlogo} alt="" />
              </Link>
            </div>
            <div className="footer-block">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="footer-about">
                    <h2>{apiData?.attributes?.title || "COMPLYCORE"}</h2>
                    <p>
                      {apiData?.attributes?.description?.children?.text ||
                        "The Group is an international engineering and consulting firm that helps its clients successfully execute technically demanding industrial and infrastructure projects. With 2,500 highly qualified employees at more than 45 Offices across five continents, the companies of the ILF Group have a strong regional presence."}
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 col-sm-6">
                  <div className="footer-nav">
                    <h2>Main Nav</h2>
                    <ul className="footer-ul">
                      <li className="footer-li">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="footer-li">
                        <Link to="/about">About us</Link>
                      </li>
                      <li className="footer-li">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="footer-li">
                        <Link to="/project">Our Project</Link>
                      </li>
                      <li className="footer-li">
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer-services">
                    <h2>Our Services</h2>
                  <p>
                  {apiData?.attributes?.primarytitle ||
                      "Professional Services"}{" "}
                    <br />
                    {apiData?.attributes?.Secondarytitle ||
                      "Timely Services"}{" "}
                    <br />
                    {apiData?.attributes?.tertiarytitle ||
                      "Convenient Services"}
                  </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <div className="address">
                      <img src={Mapicon} alt="" />
                      <p>
                        Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
                      </p>
                    </div>
                    <div className="address">
                      <img src={Emailicon} alt="" />
                      <p>support@figma.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="follow-section">
            <h2>Follow us</h2>
            <ul className="follow-us-ul">
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social1} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social2} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social3} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social4} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social5} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social6} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social7} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social8} alt="" />
                </Link>
              </li>
              <li className="follow-us-li">
                <Link to="#">
                  <img src={Social9} alt="" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright d-flex align-items-center justify-content-between">
            <div className="copyright-left">
              <p>© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="copyright-reght">
              <ul className="copyright-ul d-flex align-items-center">
                <li className="copyright-li">
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li className="copyright-li">
                  <Link to="#">Terms of Use</Link>
                </li>
                <li className="copyright-li">
                  <Link to="#">Sales and Refunds</Link>
                </li>
                <li className="copyright-li">
                  <Link to="#">Legal</Link>
                </li>
                <li className="copyright-li">
                  <Link to="#">Site Map</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
