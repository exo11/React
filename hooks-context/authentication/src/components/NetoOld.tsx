import { useEffect, useState } from 'react'
import { type IAuth } from '../../model/model'
import { type IUser } from '../../model/model'
import { type INews } from '../../model/model'
import News from './News'
import Plug from './Plug'
import Nav from './Nav'

function Neto() {

  const [auth, setAuth] = useState<IAuth | null>(null)
  const [user, setUser] = useState<IUser | null>(null)
  const [news, setNews] = useState<INews[]>([])

  useEffect(() => {
    const profile = localStorage.getItem('user')
    if (!user && profile) setUser(JSON.parse(profile as string))
    
    if (user) {
      const newsQuerry = () => {
        const headers = {headers: {'Authorization': `Bearer ${user.token}`}}
          fetch('http://localhost:7070/private/news', headers)
            .then(res => {
              if (res.status === 401) logoutHandler()
              return res.ok ? res.json() : console.error(res.status)
            })
            .then(news =>  setNews(news)) 
            .catch(err => console.error(err)) 
      }
      newsQuerry()
    }
  }, [user])

  useEffect(() => { 
    if (auth) {
      
      const profileQuerry = (token: string) => { 
        const headers = {headers: {'Authorization': `Bearer ${token}`}}
        fetch('http://localhost:7070/private/me', headers)
          .then(res => res.ok ? res.json() : console.error(res.status))
          .then(profile =>  {
            profile.token = token
            localStorage.setItem('user', JSON.stringify(profile))
            setUser(profile)
            setAuth(null)
          }) 
          .catch(err => console.error(err)) 
      }    
      
      const tokenQuerry = () => {
        const headers = { 'Content-Type': 'application/json' }
        const options = {method: 'POST', headers, body: JSON.stringify(auth)}
        fetch('http://localhost:7070/auth', options) 
          .then(res => res.ok ? res.json() : console.error(res.status)) 
          .then(({token}) => profileQuerry(token))
          .catch(err => console.error(err))
      }
      
      tokenQuerry()
    }  
  }, [auth])

  const loginHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    const target = evt.target as HTMLFormElement
    const el = target.elements 
    const data: FormData = new FormData(target)
    setAuth({login: String(data.get('username')), password: String(data.get('password'))})
    Array.from(el).forEach((e: Element): string => (e as HTMLInputElement).value = '')
  }

  const logoutHandler = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <div className="container">
      <Nav user={user} onSubmit={loginHandler} onClick={logoutHandler}/>
      <main>
        {user ? <News news={news} /> : <Plug />}
      </main>
    </div>
  )

}

export default Neto