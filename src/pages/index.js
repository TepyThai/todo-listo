import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AllListo from '../components/all-listo'
import ListoHeader from '../components/listo-header'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ListoHeader />
        <div className="container mx-auto px-4 max-w-iphonex">
          <AllListo />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
