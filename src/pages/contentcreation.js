import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContentCreationPage = () => (
  <Layout>
    <Seo title="Content creation" />
    <h1>ContentCreationPage!</h1>
    <p>Welcome to this page :)</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContentCreationPage