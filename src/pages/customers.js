import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import CustomersSection from "../components/CustomersSection"

const CustomerPage = () => {
  return (
    <Layout>
      <SEO title="Customer" />
      <CustomersSection subclass={"counter-style-2"}/>
    </Layout>
  );
};

export default CustomerPage;
