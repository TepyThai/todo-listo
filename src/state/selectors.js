export const getFilteredTodos = (state, filter) => {
  const stateValue = Object.values(state)
  if (filter === 'all') {
    return stateValue
  } else if (filter === 'active') {
    return stateValue.filter(todo => !todo.isDone)
  } else if (filter === 'done') {
    return stateValue.filter(todo => todo.isDone)
  } else {
    return stateValue
  }
}
