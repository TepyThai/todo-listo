import { combineReducers } from 'redux'
import toggleAddNewTodo from './toggleAddNewTodo'
import todos from './todos'

export default combineReducers({ todos, toggleAddNewTodo })
