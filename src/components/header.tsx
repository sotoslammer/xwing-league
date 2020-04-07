import { Link } from "gatsby"
import React from "react"
import headerStyles from './header.module.css';

type Props = {
  siteTitle?: string
}

const Header = ({ siteTitle = "" }: Props) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
      className={headerStyles.navContainer}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={headerStyles.link}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <Link to="/standings" className={headerStyles.link}>Standings</Link>
      </div>
    </div>
  </header>
)

export default Header
