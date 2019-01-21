import React from 'react'
import { connect } from 'react-redux'

import Layout from '../components/layout'
import SEO from '../components/seo'
import AllListo from './all-listo'
import ListoHeader from '../components/listo-header'

class IndexPage extends React.Component {
  setRef = input => {
    this.inputTodoRef = input
  }

  render() {
    console.log(this.inputTodoRef)
    const { isAddingNewTodo, onAddTodo, onSaveTodo } = this.props
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <ListoHeader
          addingNewTodo={isAddingNewTodo}
          onAddTodo={() => {
            onAddTodo(this.inputTodoRef)
          }}
          onSaveTodo={() => onSaveTodo(this.inputTodoRef.value)}
          textRef={this.setRef}
        />
        <div className="container mx-auto px-4 max-w-iphonex">
          <AllListo />
        </div>
      </Layout>
    )
  }
}

export default connect(
  state => ({
    isAddingNewTodo: state.toggleAddTodoReducer.isAddingNew,
  }),
  dispatch => ({
    onSaveTodo: text => {
      dispatch({
        type: 'ADD_TODO',
        text,
      })
      dispatch({
        type: 'TOGGLE_ADD',
      })
    },
    onAddTodo: input => {
      dispatch({
        type: 'TOGGLE_ADD',
      })
      // console.log(input)
    },
  })
)(IndexPage)
