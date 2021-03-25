import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import QuoteForm from "../components/QuoteForm";

const QuoteRoadPage = () => {
  return (
    <Layout>
      <SEO title="Quote Road Service" />
      <Breadcumb bdtitle={"Quote Road Service"} bdsub={"Quote"} />
      <QuoteForm />
    </Layout>
  );
};

export default QuoteRoadPage;
