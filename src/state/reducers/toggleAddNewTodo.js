const toggleAddNewTodo = (state = { isAddingNew: false }, action) => {
  if (action.type === 'TOGGLE_ADD') {
    return { isAddingNew: !state.isAddingNew }
  }
  return state
}

export default toggleAddNewTodo
