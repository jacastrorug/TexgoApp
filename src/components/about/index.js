import React from "react";

import abimg3 from "../../images/about/3.jpg";

import "./style.css";

const AboutSection = () => {
  return (
    <div className="wpo-about-style-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 about-wrap">
            <div className="wpo-about-content">
              <h2>Who We Are?</h2>
              <p>
              TexGo Transport is a company that is small enough to care but backed
              by big business! We are an agent office of Freight-Tec. We offer solutions
              for clients in multiple modes of transport. Whether dry goods or temp controlled,
              heavy machinery or simple building materials. 
              </p>
              <p>
              We can handle your shipment needs 
              across the U.S. and Canada with competitive options from China as well. 
              We started with the backbone of truckers in mind! We offer dispatches services for Owner -Ops to help increase their bottom line. With decades of experience, we are certain to find the right solution for you!
              </p>
            </div>
            <div className="signature-section"></div>
          </div>
          <div className="col-lg-6 about-ss">
            <div className="about-title">
              <div className="img-holder">
                <img src={abimg3} alt="" />
                <div className="social-1st2">
                  <ul>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
