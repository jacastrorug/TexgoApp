import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import MobileMenu from "../../components/MobileMenu";
import logo from "../../images/logo/logo-1.png";

import "./style.css";

const Header = () => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="header-style-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-10 col-sm-10 col-8 col-t">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" className="logo-header" />
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block col-m">
              <div className="main-menu">
                <nav className="nav_mobile_menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/our-services">Service</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/our-services">Our Services</Link>
                        </li>
                        <li>
                          <Link to="/road-service">Road Freight</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/carriers">Carriers</Link>
                    </li>
                    <li>
                      <Link to="/customers">Customers</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 col-2 search">
              <ul>
                <li>
                  <Link to="/">
                    <i className="fa fa-search"></i>
                  </Link>
                  <ul>
                    <li>
                      <form onSubmit={SubmitHandler}>
                        <input type="text" placeholder="search here.." />
                        <button type="btn">
                          <i className="fa fa-search"></i>
                        </button>
                      </form>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-1 col-sm-1 col-2">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: "",
};

export default Header;
