import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import Contactpage from "../components/Contactpage";

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <Breadcumb bdtitle={"Contact Us"} bdsub={"Contact"} />
      <Contactpage />
    </Layout>
  );
};

export default ContactPage;
