import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import BannerLogo from "../components/BannerLogo";
import CounterSection from "../components/CounterSection";
import TruckArea from "../components/Truck"

const CarriersPage = () => {
  return (
    <Layout>
      <SEO title="Carriers" />
      <Breadcumb bdtitle={"Carriers"} bdsub={"Carriers"} />
      <BannerLogo/>
      <CounterSection subclass={"counter-style-2"}/>
    </Layout>
  );
};

export default CarriersPage;
