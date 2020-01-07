import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  notes: anecdoteReducer,
  filter: notificationReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store