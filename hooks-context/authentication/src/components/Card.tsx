import { type INews } from '../../model/model'

function Card(props: INews) {
  const {title, image, content} = props

  return (
    <div className="card">
      <img src={image} alt="news image"></img>
      <div>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )

}

 export default Card