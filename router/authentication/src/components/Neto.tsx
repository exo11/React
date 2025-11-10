import { useState } from 'react'
import { UserContext } from '../context/UserContext'
import useTokenQuerry from '../hooks/useTokenQuerry'
import useUserQuerry from '../hooks/useUserQuerry'
import { type IAuth } from '../model/model'
import { Outlet } from 'react-router'
import Nav from './Nav'

function Neto() {

  const [auth, setAuth] = useState<IAuth | null>(null)
  const [{token, setToken}] = useTokenQuerry(auth, setAuth)
  useUserQuerry(token, setToken)
  
  const loginHandler = (evt: React.FormEvent) => {
    evt.preventDefault()
    const {username, password} = evt.target as HTMLFormElement
    setAuth({login: username.value, password: password.value})
  }    

  const logoutHandler = () => {
    localStorage.removeItem('user')
  }

  const getUser = () => {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : user
  }

  return (
    <div className="container">
      <UserContext value={getUser()}>
        <Nav onSubmit={loginHandler} onClick={logoutHandler}/>
        <main>
          <Outlet/>
        </main>
      </UserContext>
    </div>
  )

}

export default Neto