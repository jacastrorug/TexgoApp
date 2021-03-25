import React, { useEffect } from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Breadcumb from "../components/breadcumb";
import Contactpage from "../components/Contactpage";

const ContactPage = () => {

  useEffect(() => {
    // fetch("/.netlify/functions/send-contact-mail",
    //   {
    //     method: "POST", mode: "cors", cache: "no-cache",
    //     credentials: "same-origin", headers: { "Content-Type": "application/json" },
    //     redirect: "follow", referrerPolicy: "no-referrer",
    //     body: JSON.stringify({ name: 'Julian', email: 'abcd@gmail.com' })
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data));
  }, []);

  return (
    <Layout>
      <SEO title="Contact" />
      <Breadcumb bdtitle={"Contact Us"} bdsub={"Contact"} />
      <Contactpage />
    </Layout>
  );
};

export default ContactPage;
