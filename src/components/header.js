import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { topnavbar, topnavbaritem } from './cssmodules/navigationbar.module.css'

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

    <ul className={topnavbar}>
     <li><a href="home" className={topnavbaritem}>Home</a></li>
     <li><a href="template" className={topnavbaritem}>Templates</a></li>
     <li><a href="servers" className={topnavbaritem}>Servers</a></li>
     <li><a href="minecraftmaps" className={topnavbaritem}>Maps</a></li>
     <li><a href="moderation" className={topnavbaritem}>Moderation</a></li>
    </ul>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
