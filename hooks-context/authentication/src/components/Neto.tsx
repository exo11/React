import { useState } from 'react'
import { type IAuth } from '../../model/model'
import useNewsQuerry from '../../hooks/useNewsQuerry'
import useProfileQuerry from '../../hooks/useProfileQuerry'
import News from './News'
import Plug from './Plug'
import Nav from './Nav'

function Neto() {

  const [auth, setAuth] = useState<IAuth | null>(null)
  const [{user, setUser}] = useProfileQuerry(auth, setAuth)
  const [news] = useNewsQuerry(user, setUser) 

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