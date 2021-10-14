import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ServersPage = () => (
  <Layout>
    <Seo title="Servers" />
    <h1>ServersPage!</h1>
    <p>Welcome to this page :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServersPage
