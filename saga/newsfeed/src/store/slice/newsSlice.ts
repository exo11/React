import { createSlice } from '@reduxjs/toolkit'
import type { IState } from '../../model/model'

const initialState: IState = {
  requestId: 0, 
  news: [], 
  loading: false, 
  error: null, 
  end: false
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    
    newsRequest(state, action) {
      state.requestId = action.payload.requestId
      state.loading = true
    },
    
    newsSuccess(state, action) {
      const news = action.payload.news
      state.news = [...state.news, ...news]
      state.error = null
      state.loading = false
      state.end = news.length < 5
    },
    
    newsFailure(state, action) {
      const error = action.payload.error
      state.error = error
      state.loading = false
    }
  
  }
})

export const {newsRequest, newsSuccess, newsFailure} = newsSlice.actions
export default newsSlice.reducer