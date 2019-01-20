import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="bg-header shadow-md z-50">
    <div className="container mx-auto px-4 max-w-iphonex ">
      <div className="py-2 flex justify-between items-center">
        <h1 className="font-mono font-bold text-2xl text-white ">TODOLISTO</h1>
        <button type="button" className="">
          <img
            src={`https://avatars1.githubusercontent.com/u/6161814?s=460&v=4`}
            alt="tepythai image"
            className="w-8 h-8 rounded-full mb-none hover:border-white border border-transparent"
          />
        </button>
      </div>
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
