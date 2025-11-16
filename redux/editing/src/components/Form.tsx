import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { EDIT, ADD, CHANGE } from '../store/actions/actionTypes'
import { type RootState } from '../store/store'
import Btn from './Btn'
import Inputs from './Inputs'

function Form() {

  const items = useSelector((state: RootState)  => state.serviceList)
  const edit = useSelector((state: RootState)  => state.serviceChange)
  const dispatch = useDispatch()
  
  const item = items.find(o => o.id === edit.id)
  const obj = item ? item : {id: '', name: '', price: ''}

  const onChancel = () => {dispatch({type: CHANGE, payload: {id: '', view: false}})}
  
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    const {serviceId, service, price, elements} = evt.target as HTMLFormElement
    const id = serviceId.value
    const obj = {name: service.value, price: price.value}
    if (id) {
      dispatch({type: EDIT, payload: {...obj, id}})
      onChancel()
    } else {
      dispatch({type: ADD, payload: obj})
    }
    Array.from(elements).forEach((e) => (e as HTMLInputElement).value = '')
  }
  
  return (
    <form onSubmit={onSubmit}>
      <Inputs {...obj}/>
      <Btn type={'submit'}>SAVE</Btn>
      {edit.view ? <Btn onClick={onChancel}>CHANCEL</Btn> : null}
    </form>
  )

}

export default Form