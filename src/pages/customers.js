import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";

const CustomerPage = () => {
  return (
    <Layout>
      <SEO title="Customer" />
      <Breadcumb bdtitle={"Customers"} bdsub={"Customer"} />
    </Layout>
  );
};

export default CustomerPage;
