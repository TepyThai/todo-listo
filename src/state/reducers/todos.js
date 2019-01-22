import * as type from '../actionTypes'

const initialState = {}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TODO: {
      const id = new Date().getTime()
      if (!action.text || action.text.trim().length < 1) {
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

    case type.TOGGLE_TODO: {
      const toggledId = action.id
      return {
        ...state,
        [toggledId]: {
          ...state[toggledId],
          isDone: !state[toggledId].isDone,
        },
      }
    }
    case type.DELETE_TODO: {
      //using destructuring for immuatability purpose
      const deletedId = action.id
      const { [deletedId]: value, ...newState } = state
      return newState
    }
    default:
      return state
  }
}

export default todos
