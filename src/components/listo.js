import React from 'react'
import { connect } from 'react-redux'
import { onToggleTodo, onDeleteTodo } from '../state/actions'
class Listo extends React.Component {
  renderToggle = done => {
    if (done) {
      return (
        <svg width="30" height="30" className="fill-header" viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="checkmark-circle-2">
              <rect width="24" height="24" opacity="0" />
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
            </g>
          </g>
        </svg>
      )
    }
    return (
      <svg width="30" height="30" className="fill-header" viewBox="0 0 24 24">
        <g data-name="Layer 2">
          <g data-name="checkmark-circle-2">
            <rect width="24" height="24" opacity="0" />
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
            <path d="M14.7 8.39l-3.78 5-1.63-2.11a1 1 0 0 0-1.58 1.23l2.43 3.11a1 1 0 0 0 .79.38 1 1 0 0 0 .79-.39l4.57-6a1 1 0 1 0-1.6-1.22z" />
          </g>
        </g>
      </svg>
    )
  }
  render() {
    const { done, todoText, onToggleTodo, todoId, onDeleteTodo } = this.props
    return (
      <div className="container mx-auto pt-4 pb-0 border-b-2 border-grey-lighter ">
        <div className="flex no-wrap items-center">
          <button
            className="mr-4 focus:outline-none"
            onClick={() => onToggleTodo(todoId)}
          >
            {this.renderToggle(done)}
          </button>

          <div className="flex flex-col flex-1 items-left px-4 py-2">
            <h3
              className={`${
                done ? 'line-through' : ''
              } font-sans antialiased text-grey-darkest font-semibold text-base tracking-normal leading-normal`}
            >
              {todoText}
            </h3>
          </div>
          <button className="focus:outline-none" onClick={() => onDeleteTodo(todoId)}>
            <svg width="24" height="24"  className="fill-grey-dark hover:fill-red-dark" viewBox="0 0 24 24"><g data-name="Layer 2"><g data-name="trash-2"><rect width="24" height="24" opacity="0"/><path d="M21 6h-5V4.33A2.42 2.42 0 0 0 13.5 2h-3A2.42 2.42 0 0 0 8 4.33V6H3a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2zM10 4.33c0-.16.21-.33.5-.33h3c.29 0 .5.17.5.33V6h-4zM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8h12z"/><path d="M9 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/><path d="M15 17a1 1 0 0 0 1-1v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1z"/></g></g></svg>
            </button>
      
        </div>
      </div>
    )
  }
}
export default connect(
  null,
  { onToggleTodo, onDeleteTodo }
)(Listo)
