interface CardProps {
  id: string, 
  content: string,
  onClick: (evt: React.MouseEvent) => void
}

function Card({id, content, onClick}: CardProps) {

  return (
    <>
      <p className="card-text">{content}</p>
      <button data-id={id} className="btn card-btn" onClick={onClick}>
        <span className="material-icons">close</span>
      </button>
    </>
  )

}

export default Card