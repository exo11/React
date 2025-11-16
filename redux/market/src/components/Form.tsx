import { useDispatch } from 'react-redux'
import { ADD } from '../store/actions/actionTypes'

function Form() {

  const dispatch = useDispatch()

  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    const formData = new FormData(evt.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    dispatch({type: ADD, payload: data})
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input name="title" placeholder="TITLE"  type="text" required></input>
        <input name="link" placeholder="LINK" type="text" required></input>
      </div>
      <div>
        <input name="price" placeholder="PRICE" type="text" required pattern='^\d+$'></input>
        <input name="discount" placeholder="DISCOUNT" type="text" required pattern='^\d+$'></input>
      </div>
      <div>
        <input className="image-input" name="image" placeholder="IMAGE" type="text" required></input>
      </div>
      <button className="btn">ADD PRODUCT</button>
    </form>
  )

}

export default Form