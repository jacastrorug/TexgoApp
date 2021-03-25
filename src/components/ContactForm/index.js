import React, { Component } from "react";
import { toast } from "react-toastify";

import { sendContactMail } from "../../utils/mails";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    delete error[e.target.name];

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, phone, address, message, error } = this.state;

    if (name === "") error.name = "Please enter your name";

    if (email === "") error.email = "Please enter your email";

    if (phone === "") error.phone = "Please enter your phone number";

    if (address === "") error.address = "Please enter your address";

    if (message === "") error.message = "Please enter your note";

    if (Object.keys(error).length > 0) {
      this.setState({
        error,
      });
      toast("Please fill all the inputs", { type: "error" });
    } else {
      const mailRequest = sendContactMail(this.state);

      mailRequest
        .then((response) => response.json())
        .then((response) => {
          toast(`📦 Thanks for your message, we will contact to you as soon as possible`, { type: "dark" });
          
          //Clean form
          this.setState({
            name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
            error: {},
          });
        })
        .catch((error) => {
          toast("We have some problems, please try again in a few moment", { type: "error" });
        });
    }
  };

  render() {
    const { name, email, phone, address, message, error } = this.state;

    return (
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
              type="phone"
              placeholder="Phone"
              onChange={this.changeHandler}
              value={phone}
              id="phone"
              name="phone"
              autoComplete="tel"
            />
            <p>{error.phone ? error.phone : ""}</p>
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
          <div className="col-12 col-sm-12">
            <textarea
              className="contact-textarea"
              value={message}
              onChange={this.changeHandler}
              placeholder="Message"
              name="message"
            ></textarea>
            <p>{error.message ? error.message : ""}</p>
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
