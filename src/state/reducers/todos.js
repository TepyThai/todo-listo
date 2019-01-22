const uuidv4 = require('uuid/v4')

const initialState = {}
const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
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

export default todos
