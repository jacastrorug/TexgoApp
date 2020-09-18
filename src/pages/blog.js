import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import BlogList from "../components/BlogList";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />
    <Breadcumb bdtitle={"Latest News"} bdsub={"Blog"} />
    <BlogList />
  </Layout>
);

export default BlogPage;
