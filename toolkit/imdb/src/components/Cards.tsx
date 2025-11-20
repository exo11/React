import { Link } from 'react-router'
import { type ICard } from '../model'
import Card from './Card'

function Cards({movies, path}: {movies: ICard[], path: string}) {

  const addCard = (arr: ICard[]) => arr.map((movie) => {
    const id = movie.imdbID
    return (
      <Link to={`${path}${id}`} className="card" key={id}>
        <Card {...movie}/>
      </Link>
    )
  })

  return (addCard(movies))

}

export default Cards