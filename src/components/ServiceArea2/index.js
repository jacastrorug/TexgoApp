import React from "react";
import { Link } from "gatsby";
import sv1 from "../../images/service/1.jpg";
import sv2 from "../../images/service/2.jpg";
import sv3 from "../../images/service/3.jpg";
import sv4 from "../../images/service/4.jpg";
import sv5 from "../../images/service/5.jpg";
import sv6 from "../../images/service/6.jpg";

const ServiceArea2 = (props) => {
  return (
    <div className="wpo-service-area">
      <div className="container">
        <div className="col-l2">
          <div className="wpo-section-title text-center">
            <span>We Provide the Best</span>
            <h2>Our Service</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv1} alt="" />
                </div>
                <div className="service-content">
                  <h3>Land Transport</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv2} alt="" />
                </div>
                <div className="service-content2">
                  <h3>Sea Freight</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv3} alt="" />
                </div>
                <div className="service-content3">
                  <h3>Air Freight</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv4} alt="" />
                </div>
                <div className="service-content4">
                  <h3>Logistic Solutions</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv5} alt="" />
                </div>
                <div className="service-content5">
                  <h3>Packaging and Store</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="wpo-service-item">
              <div className="wpo-service-single">
                <div className="service-img">
                  <img src={sv6} alt="" />
                </div>
                <div className="service-content6">
                  <h3>Warehousing</h3>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority ,{" "}
                  </p>
                  <Link to="/our-services">See More...</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea2;
