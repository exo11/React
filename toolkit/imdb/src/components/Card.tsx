import { type ICard } from '../model'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourites, removeFavourites } from '../store/action/favouritesSlice'
import type { RootState, AppDispatch } from '../store/store'

function Card(props: ICard) {

  const {imdbID, Title, Year, Poster} = props
  const dispatch = useDispatch<AppDispatch>()
  const {favourites} = useSelector((state:RootState) => state.favourites)
  const film = favourites.find(o => o.imdbID === imdbID)
  
  const toggleFavourites = (evt: React.MouseEvent) => {
    evt.preventDefault()
    const {movie, favouritesId} = (evt.target as HTMLButtonElement).dataset
    if (favouritesId) {
      dispatch(removeFavourites(favouritesId))
    } else {
      dispatch(addFavourites(JSON.parse(movie as string)))
    }
  }

  return (
    <div className="card">
      <img src={Poster} alt="poster"></img>
      <div className="card-body">
        <h3>{`${Title} ${Year}`}</h3>
      </div>
      <button 
        className={`favourites-btn ${film ? 'active' : ''}`}
        data-movie={JSON.stringify(props)} 
        data-favourites-id={film ? film.imdbID : ''}
        onClick={toggleFavourites}
      >
        <span className="material-icons">favorite</span>
      </button>
    </div>
  )

}

export default Card