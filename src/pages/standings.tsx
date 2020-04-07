import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Standings = () =>
  <Layout>
    <SEO title="Standings"/>
    <h1>Standings</h1>
    <p>Hello there</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

export default Standings;
