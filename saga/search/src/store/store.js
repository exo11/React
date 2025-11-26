import { combineReducers, applyMiddleware, compose, legacy_createStore } from 'redux'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import skillsReducer from '../actions/reducers/skills'
import {changeSearchEpic, searchSkillsEpic} from '../epics'
const reducer = combineReducers({skills: skillsReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epic = combineEpics(changeSearchEpic, searchSkillsEpic)
const epicMiddleware = createEpicMiddleware()
const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(epicMiddleware)))
epicMiddleware.run(epic)
export default store
