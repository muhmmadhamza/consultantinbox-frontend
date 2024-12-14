import React from "react";
import { Helmet } from "react-helmet-async";

import { Link } from "react-router-dom";
import Phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import LocationIcon from "../../assets/location.png";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>ComplyCore | Contactus</title>
      </Helmet>
      <div className="home-page">
        <section className="home Login-home">
          <div className="container">
            <div className="home-block"></div>
          </div>
        </section>
        <section className="Login-section">
          <div className="title">
            <h1>Get In Touch</h1>
          </div>
        </section>
        <section className="office-contact-box">
          <div className="container">
            <ul className="contact-card-ul">
              <li className="contact-card-li">
                <div className="contact-card">
                  <div className="card-imgs">
                    <img src={LocationIcon} alt="" />
                  </div>
                  <h2>OFFICE</h2>
                  <p>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</p>
                </div>
              </li>
              <li className="contact-card-li">
                <div className="contact-card">
                  <div className="card-imgs">
                    <img src={Phone} alt="" />
                  </div>
                  <h2>PHONE</h2>
                  <p>999 111 222 333</p>
                </div>
              </li>
              <li className="contact-card-li">
                <div className="contact-card">
                  <div className="card-imgs">
                    <img src={mail} alt="" />
                  </div>
                  <h2>EMAIL</h2>
                  <p>
                    <Link to="mailto:support@figma.com">support@figma.com</Link>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="contact-us-form">
          <div className="container">
            <div className="contact-form">
              <div className="row">
                <div className="col-lg-6">
                  <div className="contact-left">
                    <div className="map-card">
                      <div className="mapouter">
                        <div className="gmap_canvas">
                          <iframe
                            className="gmap_iframe"
                            width="100%"
                            frameBorder={0}
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=600&height=450&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                          />
                          <a href="https://capcuttemplate.org/">
                            Capcuttemplate.org
                          </a>
                        </div>
                        <style
                          dangerouslySetInnerHTML={{
                            __html:
                              ".mapouter{position:relative;text-align:right;width:100%;height:450px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:450px;}.gmap_iframe {height:450px!important;}",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="contact-right">
                    <h1>LEAVE A MESSAGE</h1>
                    <form action="">
                      <div className="input-field">
                        <input type="text" name="name" placeholder="Name" />
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
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

export default Contact;
