import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  navbar: {
    list-style-type: 'none',
    margin: 0,
    padding: 0,
  }
}}


const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6B534`,
      marginBottom: `0.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1960,
        padding: `1.45rem 1.45rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#1E2328`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
