import Watch from './Watch'
import Form from './Form'
import moment from 'moment'
import { useState } from 'react'

interface IData {id: string, title: string, zone: string}

function Time() {

  const [state, setState] = useState<IData[]>([])

  const onSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const el = target.elements 
    const data: FormData = new FormData(target)
    const id = String(moment().unix())
    const obj = {id, title: String(data.get('title')), zone: String(data.get('zone'))}
    
    setState([...state, obj])
    
    Array.from(el).forEach((e: Element): string => (e as HTMLInputElement).value = '')
  }  

  const deleteWatch = (evt: React.MouseEvent): void => {
    const id = (evt.target as HTMLButtonElement).dataset.id
    const index: number = state.findIndex((o: IData): boolean => o.id === id)
    state.splice(index, 1)
    setState([...state])
  }

  const addWatch = (arr: IData[]) => {
    return arr.map((obj) => {
      return (
        <div className="watch-wrapper" key={obj.id}>
          <Watch {...obj} onClick={deleteWatch}/>
        </div>
      )
    })
  }

  return (
    <div className="container d-flex justify-content-center flex-wrap">
      <Form onSubmit={onSubmit}/>
      <div className="watch-container d-flex justify-content-start flex-wrap">
        {addWatch(state)}
      </div>
    </div>
  )

}

export default Time