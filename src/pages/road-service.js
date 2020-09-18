import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import TransportAir from "../components/TransportAir";
import air1 from "../images/air/5.jpg";
import air2 from "../images/air/6.jpg";

const RoadServicePage = () => (
  <Layout>
    <SEO title="Road Freight Service" />
    <Breadcumb bdtitle={"Road Freight"} bdsub={"Road Freight"} />
    <TransportAir simg={air1} simg2={air2} />
  </Layout>
);

export default RoadServicePage;
