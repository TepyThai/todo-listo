import { createStore as reduxCreateStore, combineReducers } from 'redux'
const uuidv4 = require('uuid/v4')

const initialState = {}
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const id = uuidv4()
      if (action.text === null || action.text.trim().length < 1) {
        return state
      }
      return {
        ...state,
        [id]: {
          id: id,
          text: action.text,
          isDone: false,
        },
      }
    }

    case 'TOGGLE_TODO': {
      const toggledId = action.id
      return {
        ...state,
        [toggledId]: {
          ...state[toggledId],
          isDone: !state[toggledId].isDone,
        },
      }
    }
    default:
      return state
  }
}
const toggleAddTodoReducer = (state = { isAddingNew: false }, action) => {
  if (action.type === 'TOGGLE_ADD') {
    return { isAddingNew: !state.isAddingNew }
  }
  return state
}

const appReducer = combineReducers({ todoReducer, toggleAddTodoReducer })

const createStore = () => reduxCreateStore(appReducer)

export default createStore
