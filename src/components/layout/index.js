import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Navbar";
import FooterSection from "../Footer";

import "../../css/font-awesome.min.css";
import "../../css/responsive.css";
import "../../css/flaticon.css";
import "../../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]');
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar />
      <ToastContainer />
      {children}
      <FooterSection />
    </>
  );
};

Layout.propTyoes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
