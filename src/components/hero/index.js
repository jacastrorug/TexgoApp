import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "gatsby";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: true,
      speed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      fade: true,
    };

    return (
      <section className="hero hero-slider-wrapper hero-style-1">
        <div className="hero-slider">
          <Slider {...settings}>
            <div className="slide1 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>We take</span>
                      <br />
                      <span>Freight Personally.</span>
                    </h2>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/quote-road-service">Request Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide2 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>We take</span>
                      <br />
                      <span>Freight Personally.</span>
                    </h2>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/quote-road-service">Request Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide3 slide">
              <div className="container">
                <div className="row">
                  <div className="col col-lg-9 slide-caption">
                    <h2>
                      <span>We take</span>
                      <br />
                      <span>Freight Personally.</span>
                    </h2>
                    <div className="btns">
                      <div className="btn-style">
                        <Link to="/quote-road-service">Request Quote</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default SimpleSlider;
