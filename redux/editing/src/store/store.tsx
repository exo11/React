import { legacy_createStore, combineReducers } from 'redux'
import listReducer from './reducers/listReducer'
import changeReducer from './reducers/changeReducer'

const reducer = combineReducers({
  serviceList: listReducer,
  serviceChange: changeReducer
})

export const store = legacy_createStore(reducer)
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
