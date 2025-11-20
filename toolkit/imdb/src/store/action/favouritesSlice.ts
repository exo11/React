import { createSlice } from '@reduxjs/toolkit'
import { type ICard } from '../../model'

const initialState: {favourites: ICard[]} = {
 favourites: []
}

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourites(state, action) {
      state.favourites.push(action.payload)
    },
    removeFavourites(state, action) {
      const id = action.payload
      state.favourites = state.favourites.filter(o => o.imdbID !== id)
    }
  }
})

export const { addFavourites, removeFavourites } = favouritesSlice.actions
export default favouritesSlice.reducer