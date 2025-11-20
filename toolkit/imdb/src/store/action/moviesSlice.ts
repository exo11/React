import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { type IMovies } from '../../model'

const initialState: IMovies = {
  movies: [],
  loading: false,
  error: null
}

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async(value: string) => {
    const res = await fetch(`http://www.omdbapi.com/?apikey=9713c5e7&s=${value}`)
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    return data.Search
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  }
})

export default moviesSlice.reducer