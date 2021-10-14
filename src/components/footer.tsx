import * as React from "react"
import PropTypes from "prop-types"
import { PageProps, Link, graphql } from "gatsby"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Footer: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <header
    style={{
      marginTop: `2rem`,
      background: `#F2E202`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1960,
        padding: `1.45rem 1.45rem`,
      }}
    >
    <p>
      You're currently on the page "{path}" which was built on{" "}
      {data.site.buildTime}.
      © {new Date().getFullYear()} J70
    </p>
    </div>
  </header>
)

export default Footer

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

