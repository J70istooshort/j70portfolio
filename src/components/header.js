import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { topnavbar } from './cssmodules/navigationbar.module.css'

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
     <li><a class="active" href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
     <li><a href="#contact">Contact</a></li>
     <li><a href="#about">About</a></li>
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
