import { useDispatch } from 'react-redux'
import { FILTER } from '../store/actions/actionTypes'

function Filter() {
  const dispatch = useDispatch()

  const onFilter = (evt: React.FormEvent) => {
    const {value} = evt.target as HTMLInputElement
    dispatch({type: FILTER, payload: {filter: value}})
  }

  return (
    <div className="filter-container">
      <input type="text" placeholder="FILTER" onInput={onFilter}></input>
    </div>
  )

}

export default Filter