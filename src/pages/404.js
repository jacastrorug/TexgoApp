import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Breadcumb bdtitle={"Page Not Found"} bdsub={"Not Found"} />
  </Layout>
);

export default NotFoundPage;
