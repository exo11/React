import Star from "./Star"

function Stars({count = 0}: {count: number}) {

  const addStar = (num: number) => {
    const arr = []
    
    if (typeof count === 'number' && count > 0 && count <= 5) {
      for (let i: number = 0; i < num; i++) {
        arr.push(<li key={i}><Star/></li>)
      }
    }
    
    return arr
  }
  
  return (
    <ul className="card-body-stars u-clearfix">
      {addStar(count)}
    </ul>
  )

}

export default Stars