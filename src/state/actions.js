import * as actionTypes from './actionTypes'

export const onSaveTodo = text => ({
  type: actionTypes.ADD_TODO,
  text,
})

export const onAddTodo = () => ({
  type: actionTypes.TOGGLE_ADD,
})

export const onToggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id: id,
})
