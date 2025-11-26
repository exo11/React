import { Link } from 'react-router'

function List({data}) {

  const addList = arr => {
    if (Array.isArray(arr)) {
      return arr.map(o => {
        return <Link key={o.id} to={`/${o.id}/details`}>{o.name}</Link>
      })
    }
  }
  
  return (
   <>{addList(data)}</>
  )

}

export default List