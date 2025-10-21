import { type IData } from '../model/model'

function CardBody({title, text, btn}: IData) {
   
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={btn.href} className="btn btn-secondary">{btn.text}</a>
    </div>
  )

}

export default CardBody
