import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import AllListo from './all-listo'
import ListoHeader from '../components/listo-header'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ListoHeader />
    <div className="container mx-auto px-4 max-w-iphonex">
      <AllListo />
    </div>
  </Layout>
)

export default IndexPage
