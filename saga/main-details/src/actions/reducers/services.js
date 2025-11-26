import { SERVICES_REQUEST, SERVICES_SUCCESS, SERVICES_FAILURE } from '../actiontype'

const initialState = {data: [], loading: false, error: null} 
    
function servicesReducer(state = initialState, action) {
  switch (action.type) {
    
    case SERVICES_REQUEST: {
      return {...state, loading: true, error: null}
    }

    case SERVICES_SUCCESS: {
      const {data} = action.payload
      return {...state, data, loading: false, error: null}
    }
    
    case SERVICES_FAILURE: {
      const {error} = action.payload
      return {...state, loading: false, error}
    }
    
    default: {
      return state
    }
  
  }
}

export default servicesReducer