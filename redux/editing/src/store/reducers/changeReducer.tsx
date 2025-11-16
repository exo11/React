import {CHANGE, FILTER} from '../actions/actionTypes'
import { type IEdit } from '../../model/model'

const initialState: IEdit = {id: '',  view: false, filter: ''}
  
function changeReducer(state = initialState, action: { payload: IEdit, type: string }) {
  switch (action.type) {
    
    case CHANGE: {
      const {id, view} = action.payload
      const filter = state.filter
      return {id, view, filter}
    }

    case FILTER: {
      const {filter} = action.payload
      const {id, view} = state
      return {id, view, filter: filter.toLowerCase()}
    }
    
    default: {
      return state
    }
  
  }
}

export default changeReducer