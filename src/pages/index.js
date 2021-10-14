import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>WIP :-)</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/template/">Go to template page</Link> <br />
      <Link to="/minecraftmaps/">My maps!</Link> <br />
      <Link to="/servers/">Servers I run</Link> <br />
      <Link to="/moderation/">Stuff I mod</Link> <br />
      <Link to="/contentcreation/">Content creation</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
