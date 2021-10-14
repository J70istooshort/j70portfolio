import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer: React.FC = () => {

  const {
    siteBuildMetadata,
  }: {
    siteBuildMetadata: {
      buildTime: string
    }
  } = useStaticQuery(
    graphql`
      query {
        siteBuildMetadata {
          buildTime(formatString: "YYYY/MM/DD hh:mm z")
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
        padding: `1.45rem 1.45rem`,
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
    <p style={{
        color: `white`,
        textDecoration: `none`,
      }}>          

      Last built: {siteBuildMetadata.buildTime}<br>
      © {new Date().getFullYear()} J70  
    </p>
    </div>
  </footer>
  )
}

export default Footer