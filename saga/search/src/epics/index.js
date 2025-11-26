import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import {map, filter, debounceTime, switchMap, catchError} from 'rxjs/operators'
import {CHANGE_FIELD, SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE} from '../actions/actiontype'

export const changeSearchEpic = action$ => action$.pipe(
  ofType(CHANGE_FIELD),
  map(o => o.payload.search.trim()),
  filter(o => o !== ''),
  debounceTime(300),
  map(o => ({type: SEARCH_REQUEST, payload:{search: o}}))
)

export const searchSkillsEpic = action$ => action$.pipe(
  ofType(SEARCH_REQUEST),
  map(o => o.payload.search),
  map(o => new URLSearchParams({q: o})),
  switchMap(o => ajax.getJSON(`http://localhost:7070/api/search?${o}`).pipe(
    map(o =>  ({type: SEARCH_SUCCESS, payload:{items: o} })),
    catchError(e => of({type: SEARCH_FAILURE, payload:{error: e} }))
  ))
)