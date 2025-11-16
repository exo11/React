import { nanoid } from 'nanoid'
import { ADD } from '../actions/actionTypes'
import { type IProduct } from '../../model/model'

interface IAction { payload: IProduct, type: string }

const initialState: IProduct[] = [{
  id: nanoid(), 
  title: 'Mobile phone', 
  price: 21000,
  discount: 10,
  link: '#',
  image: '../src/assets/image.jpg'
}]

function marketReducer(state = initialState, action: IAction) {
  switch (action.type) {
    
    case ADD: {
      const {title, price, discount, link, image} = action.payload
      const obj = {
        id: nanoid(),
        title,
        price: Number(price),
        discount: Number(discount),
        link,
        image
      }
      return [...state, obj]
    }
    
    default: {
      return state
    }
  
  }
}

export default marketReducer