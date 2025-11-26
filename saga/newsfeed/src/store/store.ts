import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import newsSlice from './slice/newsSlice'
import saga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
  reducer: {news: newsSlice},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(saga)

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch