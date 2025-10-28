import Card from './Card'
import Form from './Form'
import { useState, useEffect } from 'react'

interface INote {id: string, content: string}

function Notes() {

  const [notes, setNotes] = useState<INote[]>([])
  const [data, setData] = useState<INote>()
  const [id, setId] = useState<string>()
  
  const _GET = () => { 
    fetch('http://localhost:7070/notes')
      .then(res => res.ok ? res.json() : console.error(res.status))
      .then(arr => setNotes(arr)) 
      .catch(err => console.error(err)) 
  }    
  
  useEffect(() => { _GET() }, []) 
  
  useEffect(() => { 
    if (data) {
      const headers = { 'Content-Type': 'application/json' }
      const options = {method: 'POST', headers, body: JSON.stringify(data)}
      fetch('http://localhost:7070/notes', options) 
        .then(res => res.ok ? _GET() : console.error(res.status)) 
        .catch(err => console.error(err))
    }  
  }, [data])

  useEffect(() => { 
    if (id) {
      fetch('http://localhost:7070/notes/' + id, {method: 'DELETE'}) 
        .then(res => res.ok ? _GET() : console.error(res.status)) 
        .catch(err => console.error(err)) 
    }
  }, [id])

  const onSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const fD: FormData = new FormData(target)
    const obj = {id: '0', content: String(fD.get('content'))}
    setData(obj)
    target.content.value = null
  }

  const deleteNote = (evt: React.MouseEvent): void => {
    setId(String((evt.target as HTMLButtonElement).dataset.id))
  }
  
  const addCard = (arr: INote[]) => {
    return arr.map((obj: INote) => {
      return (
        <div key={obj.id} className="card">
          <Card {...obj} onClick={deleteNote}/>
        </div>
      )
    })
  }

  return (
    <div className="cont">
      <div className="title-cont">
        <h1>Notes</h1>
        <button className="btn title-btn" onClick={_GET}>
          <span className="material-icons">autorenew</span>
        </button>
      </div>
      <div className="cards-cont">
        {addCard(notes)}
      </div>
      <div className="form-cont">
        <p className="form-label">New note</p>
        <Form onSubmit={onSubmit}/>
      </div>
    </div>
  )

}

export default Notes