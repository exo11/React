import { NavLink } from "react-router"

function Menu() {
  
  const cls = 'menu__item'
  const addActive = ({isActive} : {isActive: boolean}) => isActive ? `${cls} ${cls}-active` : cls
  
  return (
    <nav className="menu">
      <NavLink className={addActive} to="/">Главная</NavLink>
      <NavLink className={addActive} to="/drift">Дрифт-такси</NavLink>
      <NavLink className={addActive} to="/timeattack">Time Attack</NavLink>
      <NavLink className={addActive} to="/forza">Forza Karting</NavLink>
    </nav>
  )

}

export default Menu