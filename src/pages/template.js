import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TemplatePage = () => (
  <Layout>
    <Seo title="Template" />
    <h1>Template page!</h1>
    <p>Welcome to this page :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default TemplatePage