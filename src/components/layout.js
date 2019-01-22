import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import '../css/style.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="h-screen flex flex-col justify-between relative bg-white-grey">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="w-screen flex-1">{children}</div>
        <footer className=" pin-b py-6 px-6 text-grey-dark">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            className="no-underline font-sans text-header"
          >
            Gatsby
          </a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
