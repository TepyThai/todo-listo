import { createStore as reduxCreateStore, combineReducers } from 'redux'
import appReducers from './reducers'

const createStore = () => reduxCreateStore(appReducers)

export default createStore
