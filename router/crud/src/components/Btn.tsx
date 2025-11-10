import { Link } from 'react-router'
import { type BtnProps } from '../model/model'

function Btn({cls = '', link, title, onClick}: BtnProps) {
  
  const btn = <button className={`btn ${cls}`} onClick={onClick}>{title}</button>

  return (
    link ? <Link to={link}>{btn}</Link> : btn
  ) 

}

export default Btn