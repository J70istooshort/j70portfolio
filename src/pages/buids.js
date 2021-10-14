import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BuildsPage = () => (
  <Layout>
    <Seo title="Builds" />
    <h1>Builds page!</h1>
    <p>Welcome to this page :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BuildsPage