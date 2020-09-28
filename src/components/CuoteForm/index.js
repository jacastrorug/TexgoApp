import React, { Component } from "react";

import "./style.css";

class CuoteForm extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    adress: "",
    notes: "",
    title: "",
    company: "",
    origin: "",
    destination: "",
    equipment: "",
    size: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, number, adress, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (number === "") {
      error.number = "Please enter your number";
    }
    if (adress === "") {
      error.adress = "Please enter your adress";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.email === "" &&
      error.number === "" &&
      error.adress === "" &&
      error.notes === ""
    ) {
      this.setState({
        name: "",
        email: "",
        number: "",
        adress: "",
        notes: "",
        error: {},
      });
    }
  };

  render() {
    const {
      name,
      email,
      number,
      adress,
      notes,
      title,
      company,
      origin,
      destination,
      equipment,
      size,
      error,
    } = this.state;

    return (
      <div className="contact-page-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="contact-area contact-area-2 contact-area-3">
                <h2>QUOTE FORM</h2>
                <form onSubmit={this.subimtHandler}>
                  <div className="contact-form form-style row">
                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        value={name}
                        onChange={this.changeHandler}
                        placeholder="Your Name*"
                        id="fname"
                        name="name"
                      />
                      <p>{error.name ? error.name : ""}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                      <input
                        type="email"
                        placeholder="Your Email"
                        onChange={this.changeHandler}
                        value={email}
                        id="email"
                        name="email"
                      />
                      <p>{error.email ? error.email : ""}</p>
                    </div>
                    <div className="col col-lg-6">
                      <input
                        type="text"
                        placeholder="Company"
                        onChange={this.changeHandler}
                        value={company}
                        id="company"
                        name="company"
                      />
                      <p>{error.number ? error.number : ""}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                      <input
                        type="text"
                        placeholder="Title"
                        onChange={this.changeHandler}
                        value={title}
                        id="title"
                        name="title"
                      />
                      <p>{error.adress ? error.adress : ""}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                      <input
                        type="adress"
                        placeholder="Your adress"
                        onChange={this.changeHandler}
                        value={adress}
                        id="adress"
                        name="adress"
                      />
                      <p>{error.adress ? error.adress : ""}</p>
                    </div>
                    <div className="col12 col-lg-6">
                      <input
                        type="text"
                        placeholder="Phone"
                        onChange={this.changeHandler}
                        value={number}
                        id="number"
                        name="number"
                      />
                      <p>{error.number ? error.number : ""}</p>
                    </div>

                    <div className="col-12 col-lg-6">
                      <input
                        type="text"
                        placeholder="ORIGIN: City/State/Province/Zip"
                        onChange={this.changeHandler}
                        value={origin}
                        id="origin"
                        name="origin"
                      />
                      <p>{error.number ? error.number : ""}</p>
                    </div>

                    <div className="col col-lg-6">
                      <input
                        type="text"
                        placeholder="DESTINATION: City/State/Province/Zip"
                        onChange={this.changeHandler}
                        value={destination}
                        id="destination"
                        name="destination"
                      />
                      <p>{error.number ? error.number : ""}</p>
                    </div>

                    <div className="col-12 col-lg-6">
                      <select
                        placeholder="Equipment"
                        onChange={this.changeHandler}
                        value={equipment}
                        id="equipment"
                        name="equipment"
                        className="form-control"
                      >
                        <option value={""}>Dry Van / Truckload</option>
                        <option value={"a"}>Flatbed / Stepdeck</option>
                      </select>
                      <p>{error.number ? error.number : ""}</p>
                    </div>

                    <div className="col-12 col-lg-6">
                      <select
                        placeholder="Trailer Size"
                        onChange={this.changeHandler}
                        value={size}
                        id="size"
                        name="size"
                        className="form-control"
                      >
                        <option value={""}>48 feet</option>
                        <option value={"a"}>45 feet</option>
                      </select>
                      <p>{error.number ? error.number : ""}</p>
                    </div>

                    <div className="col-12 col-sm-12">
                      <textarea
                        className="contact-textarea"
                        value={notes}
                        onChange={this.changeHandler}
                        placeholder="Freight Description / Shipping Details / Comments"
                        name="notes"
                      ></textarea>
                      <p>{error.notes ? error.notes : ""}</p>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="theme-btn pull-right">
                        Get Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CuoteForm;
