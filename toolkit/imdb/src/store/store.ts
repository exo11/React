import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './action/moviesSlice'
import filmSlice from './action/filmSlice'
import favouritesSlice from './action/favouritesSlice'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    film: filmSlice, 
    favourites: favouritesSlice
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch