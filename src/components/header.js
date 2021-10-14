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
     <li><a class="active" href="#home" className={topnavbaritem}>Home</a></li>
     <li><a href="#news" className={topnavbaritem}>News</a></li>
     <li><a href="#contact" className={topnavbaritem}>Contact</a></li>
     <li><a href="#about" className={topnavbaritem}>About</a></li>
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
