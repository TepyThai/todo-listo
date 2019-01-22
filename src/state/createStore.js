import { createStore as reduxCreateStore } from 'redux'
import appReducers from './reducers'

const createStore = () => reduxCreateStore(appReducers)

export default createStore
