import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { type NavProps } from '../model/model'
import { Link } from 'react-router'
import Input from './Input'

function Nav({onSubmit, onClick} : NavProps) {

  const user = useContext(UserContext)

  const logout = (
    <div className="logout-container">
      <p>Hello, {user?.name}</p>
      <div className="avatar-wrapper">
        <img src={user?.avatar} alt={user?.name + ' avatar'} ></img>
      </div>
      <Link to="/">
        <button className="logout" onClick={onClick}>LOGOUT</button>
      </Link>
    </div>
  )
  
  const login = (
    <form onSubmit={onSubmit}>
      <Input name={'username'}/>
      <Input name={'password'}/>
      <button className="login" type="submit">LOGIN</button>
    </form>
  )

  return (
    <nav>
      <h4>Neto Social</h4>
      {user ? logout : login}
    </nav>
  )

}

export default Nav