import { useSelector } from 'react-redux'
import useFilter from '../hooks/useFilter'
import { type RootState } from '../store/store'
import { type IObj } from '../model/model'
import { type ItemsProps } from '../model/model'
import Btn from './Btn'

function Items({items, onEdit, onRemove}: ItemsProps) {

  const change = useSelector((state: RootState) => state.serviceChange)
  const filtredItems = useFilter(items, change.filter)

  const addItem = (arr: IObj[]) => arr.map(({id, name, price}) => {
    return (
      <li key={id}>
        <div>
          <div className="marker"></div>
          <p>{`${name} ${price}`}</p>
        </div>
        <div>
          <Btn cls={'small-btn'} id={id} onClick={onEdit}>
            <span className="material-icons">edit</span>
          </Btn>
          <Btn cls={'small-btn'} id={id} onClick={onRemove}>
            <span className="material-icons">close_small</span>
          </Btn>
        </div>
      </li>
    )
  })

  return (
    <>{addItem(filtredItems)}</>
  )

}

export default Items