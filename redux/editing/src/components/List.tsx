import { useDispatch, useSelector } from 'react-redux'
import { REMOVE, CHANGE } from '../store/actions/actionTypes'
import { type RootState } from '../store/store'
import Items from './Items'

function List() {

  const items = useSelector((state: RootState)  => state.serviceList)
  const edit = useSelector((state: RootState)  => state.serviceChange)
  const dispatch = useDispatch()

  const onEdit = (evt: React.MouseEvent) => {
    const id = (evt.target as HTMLButtonElement).dataset.id
    dispatch({type: CHANGE, payload: {id, view: true}})
  }

  const onRemove = (evt: React.MouseEvent) => {
    const id = (evt.target as HTMLButtonElement).dataset.id
    dispatch({type: REMOVE, payload: {id}})
    if (id === edit.id) {
      dispatch({type: CHANGE, payload: {id: '', view: false}})
    }
  }
  
  return (
    <ul>
      <Items items={items} onEdit={onEdit} onRemove={onRemove}/>
    </ul>
  )

}

export default List