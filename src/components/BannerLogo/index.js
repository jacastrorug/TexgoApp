import React from "react";
import logo from "../../images/banner-logo/logo.png";
import "./style.css";

const BannerLogo = () => {
  return (
    <div className="bannerlogo-area bannerlogo-features-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6"></div>
          <div className="col-lg-4 col-md-6">
            <div className="bannerlogo-features-item">
              <div className="bannerlogo-feature-img">
                <img src={logo} alt="logo texgo trasnport" />
              </div>
            </div>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default BannerLogo;
