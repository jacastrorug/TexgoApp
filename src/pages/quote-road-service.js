import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import CuoteForm from "../components/CuoteForm";

const QuoteRoadPage = () => {
  return (
    <Layout>
      <SEO title="Quote Road Service" />
      <Breadcumb bdtitle={"Quote Road Service"} bdsub={"Quote"} />
      <CuoteForm />
    </Layout>
  );
};

export default QuoteRoadPage;
