import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import SimpleSlider from "../components/hero";
import Features from "../components/features";
import AboutSection from "../components/about";
import ServiceArea from "../components/ServiceArea";
import WpoFeatures from "../components/wpofeatures";
import TruckArea from "../components/Truck";
import PricingSection from "../components/Pricing";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <SimpleSlider />
    <AboutSection />
    <ServiceArea />
    <WpoFeatures />
    <TruckArea />
    <Newsletter />
  </Layout>
);

export default IndexPage;
