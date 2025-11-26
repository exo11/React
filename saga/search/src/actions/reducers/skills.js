import { SEARCH_REQUEST, SEARCH_FAILURE, SEARCH_SUCCESS, CHANGE_FIELD } from '../actiontype'

const initialState = {items: [], loading: false, error: null, search: ''}

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    
    case SEARCH_REQUEST: {
      return {...state, loading: true, error: null}
    }
    
    case SEARCH_FAILURE: {
      const {error} = action.payload
      return {...state, loading: false, error}
    }
    
    case SEARCH_SUCCESS: {
      const {items} = action.payload
      return {...state, items, loading: false, error: null}
    }
    
    case CHANGE_FIELD: {
      const {search} = action.payload
      return {...initialState, search}
    }
    
    default: {
      return state
    }
  
  }
}

export default skillsReducer