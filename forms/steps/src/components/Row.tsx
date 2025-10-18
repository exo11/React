import { type RowProps } from '../../model/model'

function Row ({data, onDelete, onEdit}: RowProps) {
  const {date, distance} = data
  
  return (
    <>
      <p>{date}</p>
      <p>{distance}</p>
      <div className="button-container">
        <button data-id={date} onClick={onDelete}>
          <span className="material-icons">close_small</span>
        </button>
        <button data-id={date} onClick={onEdit}>
          <span className="material-icons">edit</span>
        </button>
      </div>
    </> 
  )
    
}

export default Row