import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import BannerLogo from "../components/BannerLogo";
import CarriersSection from "../components/CarriersSection";
import TruckArea from "../components/Truck"

const CarriersPage = () => {
  return (
    <Layout>
      <SEO title="Carriers" />
      <CarriersSection subclass={"counter-style-2"}/>
    </Layout>
  );
};

export default CarriersPage;
