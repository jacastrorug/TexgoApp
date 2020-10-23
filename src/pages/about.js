import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import BannerLogo from "../components/BannerLogo";
import Features2 from "../components/features2";
import AboutSection2 from "../components/about2";
import Mission from "../components/Mission";
import Newsletter from "../components/Newsletter";

const AboutUsPage = () => (
  <Layout>
    <SEO title="About Us" />
    <Breadcumb bdtitle={"About Us"} bdsub={"About"} />
    <BannerLogo />
    <AboutSection2 />
    <Mission />
    <Newsletter />
  </Layout>
);

export default AboutUsPage;
