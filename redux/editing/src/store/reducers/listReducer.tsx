import { nanoid } from 'nanoid'
import {ADD, EDIT, REMOVE} from '../actions/actionTypes'
import { type IObj } from '../../model/model'

const initialState: IObj[] = [
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000}
]

function listReducer(state = initialState, action: { payload: IObj, type: string }) {
  switch (action.type) {
    
    case ADD: {
      const {name, price} = action.payload
      return [...state, {id: nanoid(), name, price: Number(price)}]
    }
    
    case EDIT: {
      const {id, name, price} = action.payload
      const service = state.find(o => o.id === id)
      if (service) {
        service.name = name
        service.price = Number(price)
      }
      return [...state]
    }
    
    case REMOVE: {
      const {id} = action.payload
      return state.filter(o => o.id !== id)
    }
    
    default: {
      return state
    }
  
  }
}

export default listReducer