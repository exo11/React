import { legacy_createStore, combineReducers } from 'redux'
import marketReducer from './reducers/marketReducer'

const reducer = combineReducers({productsReducer: marketReducer})

export const store = legacy_createStore(reducer)
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>