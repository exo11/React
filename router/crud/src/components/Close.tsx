import { Link } from 'react-router'
import { type CloseProps } from '../model/model'

function Close({link, cls = 'create-close', onClick} : CloseProps) {

  const icon = <span className="material-icons">close_small</span>
  const btn = <button className={cls} onClick={onClick} type="button">{icon}</button>
  
  return link ? <Link className={cls} to={link}>{icon}</Link> : btn

}

export default Close