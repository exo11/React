import {ofType} from 'redux-observable'
import {of} from 'rxjs'
import {ajax} from 'rxjs/ajax'
import {map, switchMap, catchError} from 'rxjs/operators'
import {SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILURE} from '../actions/actiontype'

const path = 'http://localhost:7070/api/services'
const createUrl = id => id ? path + `/${id}` : path

export const itemsServicesEpic = action$ => action$.pipe(
  ofType(SERVICES_REQUEST),
  map(o => o.payload.id),
  map(id => createUrl(id)),
  switchMap(url => ajax.getJSON(url).pipe(
    map(o =>  ({type: SERVICES_SUCCESS, payload:{data: o} })),
    catchError(e => of({type: SERVICES_FAILURE, payload:{error: e} }))
  ))
)