import React from "react";

import "./style.css";

const TruckArea = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="wpo-track-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="track">
              <h3>Enter Your Email and Track Your Cargo</h3>
              <div className="wpo-tracking-form">
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tracking Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                      <button type="submit">Track Your Cargo</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruckArea;
