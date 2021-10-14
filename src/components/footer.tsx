import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer: React.FC = () => {

  const {
    siteBuildMetadata,
  }: {
    siteBuildMetadata: {
      lastBuildTime: string
    }
  } = useStaticQuery(
    graphql`
      query {
        siteBuildMetadata {
          buildTime(formatString: "YYYY-MM-DD HH:mm z")
        }
      }
    `,
  )
  return (
   <footer
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
      Last build:{siteBuildMetadata.lastBuildTime}.
      © {new Date().getFullYear()} J70
    </p>
    </div>
  </footer>
  )
}

export default Footer