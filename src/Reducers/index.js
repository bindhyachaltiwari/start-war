import { combineReducers } from 'redux'
import { planets, search } from './reducer'

const rootReducers = combineReducers({
  planets,
  search,
})

export default rootReducers;
