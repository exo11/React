import {put, retry, spawn, takeLatest} from 'redux-saga/effects'
import { newsRequest, newsSuccess, newsFailure } from '../store/slice/newsSlice'
import type { IAction } from '../model/model'

const newsFetch = async (id: number) => {
  const path = 'http://localhost:7070/api/news'
  const url = id ? `${path}?lastSeenId=${id}` : path
  const response = await fetch(url)
  if (!response.ok) throw new Error(response.statusText)
  return await response.json()
}

function* handleNewsRequestSaga(action: IAction): Generator {
  try {
    const delay = 3000
    const data = yield retry(Infinity, delay, newsFetch, action.payload.requestId)
    yield put(newsSuccess({news: data}))
  } catch (e) {
    yield put(newsFailure({error: (e as Error).message}))
  }
}

function* watchNewsRequestSaga() {
  yield takeLatest(newsRequest.type, handleNewsRequestSaga)
}

function* saga() { 
  yield spawn(watchNewsRequestSaga) 
}

export default saga