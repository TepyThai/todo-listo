import React, { Component } from 'react'
import { connect } from 'react-redux'

import Listo from '../components/listo'

class AllListo extends Component {
  renderAllListo = (todos, onToggleTodo) => {
    if (todos === null) {
      return <h2>No items</h2>
    }
    return Object.values(todos).map(todo => (
      <Listo
        key={todo.id}
        todoId={todo.id}
        done={todo.isDone}
        todoText={todo.text}
        onToggle={() => onToggleTodo(todo.id)}
      />
    ))
  }
  render() {
    const { todos, onToggleTodo } = this.props
    console.log(todos)

    return (
      <React.Fragment>
        <div className="pb-12" />
        {this.renderAllListo(todos, onToggleTodo)}
      </React.Fragment>
    )
  }
}

export default connect(
  state => ({ todos: state.todoReducer }),
  dispatch => ({
    onToggleTodo: id =>
      dispatch({
        type: 'TOGGLE_TODO',
        id: id,
      }),
  })
)(AllListo)
