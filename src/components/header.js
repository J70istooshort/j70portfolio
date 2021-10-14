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


    <div>
     <ul className={topnavbar}>
      <li><Link to="/" className={topnavbaritem}>Home</Link></li>
      <li><Link to="/template/" className={topnavbaritem}>Templates</Link></li>
      <li><Link to="/servers/" className={topnavbaritem}>Servers</Link></li>
      <li><Link to="/minecraftmaps/" className={topnavbaritem}>Maps</Link></li>
      <li><Link to="/moderation/" className={topnavbaritem}>Moderation</Link></li>
      <li><Link to="/contentcreation/" className={topnavbaritem}>Content</Link></li>
     </ul>
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
