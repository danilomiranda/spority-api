import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import SearchReducer from './searchReducer'
import TokenReducer from './tokenReducer'
import AlbumReducer from './albumReducer'

const rootReducer = combineReducers({
  SearchReducer,
  TokenReducer,
  AlbumReducer,
  routing: routerReducer
})

export default rootReducer
