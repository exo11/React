import { useState } from 'react'
import Form from './Form'
import Table from './Table'
import { type FormEvent } from 'react'
import { type MouseEvent } from 'react'
import { type IData } from '../../model/model'
import { type IState } from '../../model/model'

function Steps() {

  const [state, setState] = useState<IState>({inputs: {date: null, distance: null}, data: []})

  const onSubmit = (evt: FormEvent): void => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const data: FormData = new FormData(target)
    
    const obj: IData = {
      date: data.get('date') as string, 
      distance: data.get('distance') as string
    }
    
    const item = state.data.find((o: IData) => o.date === obj.date)

    if (item) {
      item.distance = `${Number(item.distance) + Number(obj.distance)}`
    } else {
      state.data.push(obj)
    }
    
    const el = target.elements 
    const inputs = {date: el.namedItem('date'), distance: el.namedItem('distance')}
    
    setState({inputs, data: state.data})
    
    Array.from(el).forEach((e: Element): string => (e as HTMLInputElement).value = '')
  }  

  const deleteRow = (arr: IData[], evt: MouseEvent): IData[] => {
    const id = (evt.target as HTMLButtonElement).dataset.id
    const index: number = arr.findIndex((o: IData): boolean => o.date === id)
    return arr.splice(index, 1)
  }

  const onDelete = (evt: MouseEvent): void => {
    deleteRow(state.data, evt)
    setState({...state})
  }

  const onEdit = (evt: MouseEvent): void => {
    const obj: IData = deleteRow(state.data, evt)[0]
    const inputDate = state.inputs.date as HTMLInputElement
    const inputDistance = state.inputs.distance as HTMLInputElement
    inputDate.value = obj.date
    inputDistance.value = obj.distance
    setState({...state})
  }

  return (
    <div className="container">
      <Form onSubmit={onSubmit}/>
      <Table data={state.data} onDelete={onDelete} onEdit={onEdit}/>
    </div>
  )

}

export default Steps