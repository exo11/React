import { useEffect, useState } from 'react'
import Details from './Details'

interface IData {id: number, name: string}

function List({url}: {url: string}) {

  const [data, setData] = useState<IData[]>([])
  const [user, setUser] = useState<number | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.ok ? res.json() : console.error(res.status))
      .then(arr => {setData(arr)})
      .catch(err => console.error(err))
  }, [url])

  const onClick = (evt: React.MouseEvent) => {
    const target = evt.target as HTMLButtonElement
    setUser(Number(target.dataset.id))
  }

  const addBtn = (arr: IData[]) => {
    return arr.map(({id, name}) => {
      return (<button key={id} data-id={id} onClick={onClick}>{name}</button>)
    })
  }

  return (
    <div className="container">
      <div className="list">{addBtn(data)}</div>
      <Details id={user}/>
    </div>
  )

}

export default List