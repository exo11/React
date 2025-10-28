import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Form from './Form'

interface IMsg {id: number, userId: string, content: string}

function Chat() {
  
  const [messages, setMessages] = useState<IMsg[]>([])
  const [data, setData] = useState<IMsg>()
  const [user, setUser] = useState<string>('')
  
  useEffect(() => {
    let id = 0

    if (!localStorage.getItem('id')) localStorage.setItem('id', nanoid())
    setUser(localStorage.getItem('id') as string)

    const _GET = () => {
      fetch('http://localhost:7070/messages?from=' + `{${id}}`)
        .then(res => res.ok ? res.json() : console.error(res.status))
        .then(arr => {
          const newId = arr.length > 0 ? arr[arr.length - 1].id : 0
          if (newId !== id) {
            id = newId
            setMessages(arr) 
          }
        }) 
        .catch(err => console.error(err)) 
    }
    
    _GET()
    
    const interval = setInterval(() => {_GET()}, 2500)  
    return () => {clearInterval(interval)}
  }, [])

  useEffect(() => {
    if (data) {
      const headers = {'Content-Type': 'application/json'}
      const options = {method: 'POST', headers, body: JSON.stringify(data)}
      fetch('http://localhost:7070/messages', options)
        .then(res => console.log(res.status)) 
        .catch(error => console.error(error)) 
    }
  }, [data])

  useEffect(() => {
    const msgCont = document.getElementById("msgCont") as HTMLElement
    msgCont.scrollTop = msgCont.scrollHeight
  }, [messages])

  const onSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const notes: FormData = new FormData(target)
    const obj = {id: 0, userId: user, content: String(notes.get('content'))}
    setData(obj)
    target.content.value = null
  }

  const addMsg = (arr: IMsg[]) => {
    return arr.map((obj) => {
      const cls = obj.userId === user ? 'right' : ''
      return (
        <div key={obj.id} className={`msg-wrapper ${cls}`}>
          <p className="msg">{obj.content}</p>
        </div>
      )
    })
  }

  return (
    <div className="cont">
      <h3>ANONYMOUS CHAT</h3>
      <div className="msg-cont" id="msgCont">
        {addMsg(messages)}
      </div>
      <Form onSubmit={onSubmit}/>
    </div>
  )

}

export default Chat