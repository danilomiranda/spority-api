import { combineReducers } from 'redux'

import SearchReducer from './searchReducer'
import TokenReducer from './tokenReducer'

const rootReducer = combineReducers({
  SearchReducer,
  TokenReducer
})

export default rootReducer
