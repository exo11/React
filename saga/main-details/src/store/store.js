import { combineReducers, applyMiddleware, compose, legacy_createStore } from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import servicesReducer from '../actions/reducers/services'
import {itemsServicesEpic} from '../epics'
const reducer = combineReducers({services: servicesReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epic = combineEpics(itemsServicesEpic)
const epicMiddleware = createEpicMiddleware()
const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)))
epicMiddleware.run(epic)
export default store