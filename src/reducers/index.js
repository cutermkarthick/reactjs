import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import visibilityFilter2 from './visibilityFilter2'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  visibilityFilter2
})

console.log("reducers index file");

export default todoApp