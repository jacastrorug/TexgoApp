import React from "react";
import "./style.css";

const ServiceArea3 = () => {
  return (
    <div id="service-home-section" className="service-style-3">
      <div className="container">
        <div className="col-l2">
          <div className="wpo-section-title text-center">
            <span>We Provide the Best</span>
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon2-copo-de-nieve-1"></i>
              </div>
              <div className="service-text">
                <h3>Truckload Freight</h3>
                <p>Whether dry goods or temp controlled it’s our specialty</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon-ship-1"></i>
              </div>
              <div className="service-text">
                <h3>Ocean Freight</h3>
                <p>Specialized in China and South America transport</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="400" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon-box"></i>
              </div>
              <div className="service-text">
                <h3>LTL</h3>
                <p>From 1 box to a few pallets, We have a solution</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon2-remolque"></i>
              </div>
              <div className="service-text">
                <h3>Expedite</h3>
                <p>If needs to move quickly we have options</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="600" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon2-carga"></i>
              </div>
              <div className="service-text">
                <h3>Flatbed</h3>
                <p>From coils to building materials we can have it</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12" data-sal="slide-up" data-sal-delay="700" data-sal-easing="ease">
            <div className="wpo-service-item">
              <div className="wpo-service-icon">
                <i className="fi flaticon2-laptop"></i>
              </div>
              <div className="service-text">
                <h3>Dispatch Services</h3>
                <p>Matching the best loads to the driver’s needs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea3;
