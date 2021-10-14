/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
      }
    }
  `)

  type DataProps = {
    site: {
      buildTime: string
    }
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
        <footer
      style={{
        margin: `0 auto`,
        maxWidth: 1960,
        background: `#F2E202`,
        MarginTop: `3rem`,
      }}
        >
          © {new Date().getFullYear()} J70

          <p>
            You're currently on the page "{path}" which was built on{" "}
            {data.site.buildTime}.
          </p>

        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout