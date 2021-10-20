import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { topnavbar, topnavbaritem, topnavbarlistitem } from './cssmodules/navigationbar.module.css'
import { linkBar, topHeadBar } from './cssmodules/header.module.css'
import { discord, youtube, twitter, tiktok, twitch} from './cssmodules/linkbuttons.module.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F6B534`,
    }}
  >
    <div
      className={topHeadBar}
      style={{
        margin: `0`,
        maxWidth: 1960,
        padding: `14px`,
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

      <div className={linkBar}>
        <a href="https://www.discord.gg/TFxRJHa" target="_blanks" rel="noreferrer" className={discord} alt = "discord"> </a>
        <a href="https://www.tiktok.com/@j70istooshort" target="_blank" rel="noreferrer" className={tiktok} alt = "tiktok"> </a>
        <a href="https://www.twitch.tv/j70istooshort" target="_blank" rel="noreferrer" className={twitch} alt = "twitch"> </a>
        <a href=" https://www.youtube.com/J70istooshort" target="_blank" rel="noreferrer" className={youtube} alt = "youtube"> </a>
        <a href="https://twitter.com/J70IsTooShort" target="_blank" rel="noreferrer" className={twitter} alt = "twitter"> </a>
      </div>
    </div>

    <ul className={topnavbar}>
      <li className={topnavbarlistitem}><Link to="/" className={topnavbaritem}>Home</Link></li>
      <li className={topnavbarlistitem}><Link to="/about/" className={topnavbaritem}>About me</Link></li>
      <li className={topnavbarlistitem}><Link to="/servers/" className={topnavbaritem}>Servers</Link></li>
      <li className={topnavbarlistitem}><Link to="/minecraftmaps/" className={topnavbaritem}>Maps</Link></li>
      <li className={topnavbarlistitem}><Link to="/moderation/" className={topnavbaritem}>Moderation</Link></li>
      <li className={topnavbarlistitem}><Link to="/contentcreation/" className={topnavbaritem}>Content</Link></li>
      <li className={topnavbarlistitem}><Link to="/builds/" className={topnavbaritem}>Builds</Link></li>
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
