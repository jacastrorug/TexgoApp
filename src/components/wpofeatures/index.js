import React from "react";
import feimg from "../../images/features/3.png";
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
          <div className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
            <div className="wpo-features-item-2">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon2">
                    <i className="fi flaticon2-buscar"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>Attention to Detail</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="feature-icon3">
                    <i className="fi flaticon-truck"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>$100,000 bond</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <div className="wpo-features-item">
              <div className="wpo-feature-img">
                <img src={feimg} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
            <div className="wpo-features-item">
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon">
                    <i className="fi flaticon2-goal"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>Single Point Contact</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-6 col-sm-12">
                <div className="wpo-feature-wrap">
                  <div className="wpo-features-icon">
                    <i className="fi flaticon-truck-1"></i>
                  </div>
                  <div className="wpo-features-text">
                    <h3>24/7 Availability</h3>
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
