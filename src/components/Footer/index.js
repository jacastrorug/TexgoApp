import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo/logo-1.png";
import in1 from "../../images/instragram/1.jpg";
import in2 from "../../images/instragram/2.jpg";
import in3 from "../../images/instragram/3.jpg";
import in4 from "../../images/instragram/4.jpg";
import in5 from "../../images/instragram/5.jpg";
import in6 from "../../images/instragram/6.jpg";
import "./style.css";

const FooterSection = () => {
  return (
    <div className="wpo-footer-area">
      <div className="wpo-footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
              <div className="wpo-footer-logo">
                <img src={logo} alt="" className="logo-footer" />
              </div>
              <p>Powered by Freight Tec</p>
              <div className="social">
                <ul className="d-flex">
                  <li>
                    <a href="https://www.linkedin.com/">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-t">
              <div className="footer-link">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Services</Link>
                  </li>
                  <li>
                    <Link to="/">Location</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 footer-b">
            <div className="footer-link">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <Link to="/">Testimonial</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/">Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div className="wpo-footer-bottom">
        <div className="container">
          <div className="wpo-footer-bottom-content">
            <div className="row">
              <div className="col-12">
                <span>© Copyrights 2020. All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
