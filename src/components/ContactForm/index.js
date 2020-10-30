import React, { Component } from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    adress: "",
    notes: "",
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

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => {
          this.setState({
            name: "",
            email: "",
            number: "",
            adress: "",
            notes: "",
            error: {},
          });
        })
        .catch(error => alert(error));


    }
  };

  render() {
    const { name, email, number, adress, notes, error } = this.state;

    return (
      <form onSubmit={this.subimtHandler} data-netlify="true" netlify-honeypot="bot-field" name="contact">
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
              type="phone"
              placeholder="Phone"
              onChange={this.changeHandler}
              value={number}
              id="number"
              name="number"
            />
            <p>{error.number ? error.number : ""}</p>
          </div>
          <div className="col-12  col-lg-6">
            <input
              type="address"
              placeholder="Your adress"
              onChange={this.changeHandler}
              value={adress}
              id="adress"
              name="adress"
            />
            <p>{error.adress ? error.adress : ""}</p>
          </div>
          <div className="col-12 col-sm-12">
            <textarea
              className="contact-textarea"
              value={notes}
              onChange={this.changeHandler}
              placeholder="Message"
              name="notes"
            ></textarea>
            <p>{error.notes ? error.notes : ""}</p>
          </div>
          <input type="hidden" name="form-name" value="contact" />
          <div className="col-12">
            <button type="submit" className="theme-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
