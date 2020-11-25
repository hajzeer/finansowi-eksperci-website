import React from "react"


import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import About from "../components/About/About";
import Services from "../components/Services/services";
import Contact from "../components/Contact/Contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <About/>
    <Services/>
    <Contact/>
  </Layout>
)

export default IndexPage
