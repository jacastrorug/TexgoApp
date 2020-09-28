import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";

const CarriersPage = () => {
  return (
    <Layout>
      <SEO title="Carriers" />
      <Breadcumb bdtitle={"Our Carriers"} bdsub={"Carriers"} />
    </Layout>
  );
};

export default CarriersPage;
