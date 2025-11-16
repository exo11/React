import { type BtnProps } from '../model/model'

function Btn(props: BtnProps) {
  const {children, cls = '', type = 'button', id, onClick} = props
  
  return (
    <button className={`btn ${cls}`} onClick={onClick} type={type} data-id={id}>
      {children}
    </button>
  ) 

}

export default Btn