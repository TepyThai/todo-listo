import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListoHeader from '../components/listo-header'
import Listo from '../components/listo'

class AllListo extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="pb-12">
          <Listo todoText="Yo dude, make something cool, man !@!@" />
          <Listo done todoText="Yo dude, make something cool, man !@!@" />
          <Listo todoText="Yo dude, make something cool, man !@!@" />
          <Listo todoText="Yo dude, make something cool, man !@!@" />
          <Listo done todoText="Yo dude, make something cool, man !@!@" />
          <Listo todoText="Yo dude, make something cool, man !@!@" />
          <Listo todoText="Yo dude, make something cool, man !@!@" />
          <Listo done todoText="Yo dude, make something cool, man !@!@" />
          <Listo todoText="Yo dude, make something cool, man !@!@" />
        </div>
      </React.Fragment>
    )
  }
}

// const Item =

export default AllListo
