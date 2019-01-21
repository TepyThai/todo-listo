import React, { Component } from 'react'
import { connect } from 'react-redux'
import { onToggleTodo } from '../state/actions'
import Listo from '../components/listo'

class AllListo extends Component {
  renderAllListo = (todos, onToggleTodo) => {
    if (!todos) {
      return <h2>No items</h2>
    }
    return Object.values(todos).map(todo => (
      <Listo
        key={todo.id}
        todoId={todo.id}
        done={todo.isDone}
        todoText={todo.text}
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

export default connect(state => ({ todos: state.todos }))(AllListo)
