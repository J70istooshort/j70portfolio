import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { topnavbar, topnavbaritem } from './cssmodules/navigationbar.module.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6B534`,
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
       <li className={topnavbaritem}><Link to="/">Home</Link></li>
       <li className={topnavbaritem}><Link to="/servers/">Servers</Link></li>
       <li className={topnavbaritem}><Link to="/minecraftmaps/">Maps</Link></li>
       <li className={topnavbaritem}><Link to="/moderation/">Moderation</Link></li>
       <li className={topnavbaritem}><Link to="/contentcreation/">Content</Link></li>
       <li className={topnavbaritem}><Link to="/builds/">Builds</Link></li>
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
