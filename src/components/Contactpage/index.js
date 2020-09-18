import React from "react";
import ContactForm from "../ContactForm";

import "./style.css";

const Contactpage = () => {
  return (
    <div className="contact-page-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12">
            <div className="contact-page-item">
              <h2>Our Contacts</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classNameical Latin literature
                from 45 BC, making it over 2000 years old.
              </p>
              <div className="adress">
                <h3>Address</h3>
                <span>245 King Street, Touterie Victoria 8520 Australia</span>
              </div>
              <div className="phone">
                <h3>Phone</h3>
                <span>0-123-456-7890</span>
                <span>0-123-456-7890</span>
              </div>
              <div className="email">
                <h3>Email</h3>
                <span>sample@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="contact-area contact-area-2 contact-area-3">
              <h2>Quick Contact Form</h2>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-xs-12">
            <div className="contact-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27709.563521418073!2d-95.37558147006396!3d29.757526297188228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20Texas%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1600160122715!5m2!1ses!2sco"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
