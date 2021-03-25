import React from "react";
import ContactForm from "../ContactForm";

import logo from "../../images/logo/logo-1.png"

import "./style.css";

const Contactpage = () => {
  return (
    <div className="contact-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="contact-page-item">
              <div className="adress">
                <div className="logo">
                  <img src={logo} alt="" className="logo-contact" />
              </div>
              </div>
              <div className="adress">
                <h3>Address</h3>
                <span>Pobox 1314 Spring, Texas</span>
              </div>
              <div className="phone">
                <h3>Phone</h3>
                <span>+1 281 505 8558</span>
              </div>
              <div className="email">
                <h3>Email</h3>
                <span>ghunt@texgotrans.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="contact-area contact-area-2 contact-area-3">
              <h2>Quick Contact Form</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
