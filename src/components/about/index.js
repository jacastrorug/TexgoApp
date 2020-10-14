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
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
              </p>
              <p>
                content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <span>Long established fact that a reader</span>
              <span>We making it look like readable English.</span>
              <span>Long established fact that a reader</span>
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
