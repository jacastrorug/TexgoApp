import React from "react";
import feimg from "../../images/features/1.png";
import "./style.css";

const WpoFeatures = () => {
  return (
    <div className="wpo-features-area">
      <div className="container">
        <div className="wpo-section-title text-center">
          <span>We Provide the Best</span>
          <h2>Our Awesome Features</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="wpo-features-item-2">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon2">
                    <i className="fi flaticon-plane"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>First Air Freight</h3>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="feature-icon3">
                    <i className="fi flaticon-truck"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>First Ground Shipping</h3>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="wpo-features-item">
              <div className="wpo-feature-img">
                <img src={feimg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="wpo-features-item">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon">
                    <i className="fi flaticon-ship"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>Quickest Cargo</h3>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text,
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon">
                    <i className="fi flaticon-truck-1"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>Timely Delivery</h3>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WpoFeatures;
