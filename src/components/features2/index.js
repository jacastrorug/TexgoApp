import React from "react";
import { Link } from "gatsby";

import "./style.css";

const Features2 = () => {
  return (
    <div className="wpo-section-style-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="wpo-section-item-2">
              <div className="wpo-section-icon">
                <i className="fi flaticon-ship"></i>
              </div>
              <div className="wpo-section-content">
                <p>
                  <Link to="/about">Ocean Freight</Link>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="wpo-section-item-2">
              <div className="wpo-section-icon">
                <i className="fi flaticon-truck"></i>
              </div>
              <div className="wpo-section-content">
                <p>
                  {" "}
                  <Link to="/about">Road Freight</Link>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 col-d">
            <div className="wpo-section-item-2">
              <div className="wpo-section-icon">
                <i className="fi flaticon-plane"></i>
              </div>
              <div className="wpo-section-content">
                <p>
                  {" "}
                  <Link to="/about">Air Freight</Link>
                </p>
                <span>
                  There are many variations of passages of Lorem Ipsum
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features2;
