import { type NavProps } from '../../model/model'
import Input from './Input'

function Nav({user, onSubmit, onClick} : NavProps) {

  const logout = (
    <div className="logout-container">
      <p>Hello, {user?.name}</p>
      <div className="avatar-wrapper">
        <img src={user?.avatar} alt={user?.name + ' avatar'} ></img>
      </div>
      <button className="logout" onClick={onClick}>LOGOUT</button>
    </div>
  )
  
  const login = (
    <form onSubmit={onSubmit}>
      <Input name={'username'} />
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