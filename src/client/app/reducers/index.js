import { combineReducers } from 'redux'

import SearchReducer from './searchReducer'
import TokenReducer from './tokenReducer'
import AlbumReducer from './albumReducer'

const rootReducer = combineReducers({
  SearchReducer,
  TokenReducer,
  AlbumReducer
})

export default rootReducer
