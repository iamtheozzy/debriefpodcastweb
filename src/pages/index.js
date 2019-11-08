import React from "react"
import Logo from "../images/debrief-main-logo.png"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles.css";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <img class="heroImg" src={Logo} alt="Mary and Eneida"/>
      <h1>Stay Tuned!</h1>
      <p>Get it?</p>
    </div>
  </Layout>
)

export default IndexPage
