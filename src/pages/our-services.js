import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BreadCumb from "../components/breadcumb";
import Features3 from "../components/features3";
import ServiceArea2 from "../components/ServiceArea2";
import Newsletter from "../components/Newsletter";

const OurService = () => (
  <Layout>
    <SEO title="Our Services" />
    <BreadCumb bdtitle={"Our Services"} bdsub={"Services"} />
    <Features3 />
    <ServiceArea2 />
    <Newsletter />
  </Layout>
);

export default OurService;
