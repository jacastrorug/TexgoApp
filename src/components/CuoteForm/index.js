import React, { Component } from "react";

import "./style.css";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class CuoteForm extends Component {
  
  state = {
    name: "",
    email: "",
    number: "",
    address: "",
    notes: "",
    title: "",
    company: "",
    origin: "",
    destination: "",
    equipment: "Reefer truckload",
    size: "48 feet",
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

    const { name, email, company, title, number, address, origin, destination, equipment, size, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (company === ""){
      error.company = "Plase enter your company name"
    }
    if(title === ""){
      error.title = "Please enter the title of quote"
    }
    if (number === "") {
      error.number = "Please enter your number";
    }
    if (address === "") {
      error.address = "Please enter your address";
    }
    if(origin === ""){
      error.origin = "Plase enter the origin of quote";
    }
    if(destination === ""){
      error.destination = "Plase enter the destination of quote";
    }
    if(equipment === ""){
      error.equipment = "Please select an equipment";
    }
    if(size === ""){
      error.size = "Plase select an size";
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
      error.company === "" &&
      error.title === "" &&
      error.number === "" &&
      error.address === "" &&
      error.origin === "" &&
      error.destination === "" &&
      error.notes === ""
    ) {

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "quote", ...this.state })
      })
        .then(() => {
          this.setState({
            name: "",
            email: "",
            company: "",
            title: "",
            number: "",
            address: "",
            origin: "",
            destination: "",
            notes: "",
            error: {},
          });
        })
        .catch(error => alert(error));
    }
  };

  render() {
    const {
      name,
      email,
      number,
      address,
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
                <form onSubmit={this.subimtHandler} data-netlify="true" netlify-honeypot="bot-field" name="quote">
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
                      <p>{error.company ? error.company : ""}</p>
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
                      <p>{error.title ? error.title : ""}</p>
                    </div>
                    <div className="col-12  col-lg-6">
                      <input
                        type="address"
                        placeholder="Your address"
                        onChange={this.changeHandler}
                        value={address}
                        id="address"
                        name="address"
                      />
                      <p>{error.address ? error.address : ""}</p>
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
                      <p>{error.origin ? error.origin : ""}</p>
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
                      <p>{error.destination ? error.destination : ""}</p>
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
                        <option value={"Reefer truckload"}>Reefer truckload</option>
                        <option value={"LTL"}>LTL</option>
                      </select>
                      <p>{error.equipment ? error.equipment : ""}</p>
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
                        <option value={"48 feet"}>48 feet</option>
                        <option value={"53 feet"}>53 feet</option>
                      </select>
                      <p>{error.size ? error.size : ""}</p>
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

                    <input type="hidden" name="form-name" value="quote" />

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
