import * as actionTypes from '../actionTypes'

const setFilter = (state = { filter: 'all' }, action) => {
  if (action.type !== actionTypes.SET_FILTER) {
    return state
  }
  return {
    filter: action.filter,
  }
}

export default setFilter
