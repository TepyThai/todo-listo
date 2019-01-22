import * as actionTypes from './actionTypes'

export const onSaveTodo = text => ({
  type: actionTypes.ADD_TODO,
  text: text,
})

export const onToggleTodo = id => ({
  type: actionTypes.TOGGLE_TODO,
  id: id,
})

export const onSetFilter = filter => ({
  type: actionTypes.SET_FILTER,
  filter: filter,
})

export const onDeleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  id: id,
})
