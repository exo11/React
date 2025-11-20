import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import { type IFilm } from '../../model'

const initialState: IFilm = {
  film: null,
  loading: false,
  error: null
}

export const fetchFilm = createAsyncThunk(
  'film/fetchFilm',
  async(id: string) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=9713c5e7&i=${id}`)
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    return data
  }
)

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    closeFilm(state) {
      state.film = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilm.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.loading = false
      state.film = action.payload
    })
    builder.addCase(fetchFilm.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const {closeFilm} = filmSlice.actions
export default filmSlice.reducer