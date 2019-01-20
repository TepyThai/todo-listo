import { createStore as reduxCreateStore } from 'redux'

const appReducer = (state, action) => {
  switch (action.type) {
    case 'incrementCounter':
      return { ...state, counter: state.counter + 1 }
    case 'decrementCounter':
      return { ...state, counter: state.counter - 1 }
  }
  return state
}
const initialState = { counter: 0 }
const createStore = () => reduxCreateStore(appReducer, initialState)

export default createStore
