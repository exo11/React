import { useNavigate, useParams, useLocation } from 'react-router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { fetchFilm } from '../store/action/filmSlice'
import { closeFilm } from '../store/action/filmSlice'

function BigCard() {

  const {film, loading} = useSelector((state: RootState) => state.film)
  const {id} = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (id) dispatch(fetchFilm(id))
  }, [id, dispatch])

  const onClose = () => {
    dispatch(closeFilm())
    if (location.pathname.includes('favourites')) { 
      navigate('/favourites') 
    } else {
      navigate('/')
    }
  }

  if (loading) return <h1 className="loading">LOADING...</h1>
  
  return (
    <div className="big-card">
      <img src={film?.Poster} alt="poster"></img>
      <div className="big-card-body">
        <h3>{film?.Title}</h3>
        <p>{`YEAR: ${film?.Year}`}</p>
        <p>{`GENRE: ${film?.Genre}`}</p>
        <p>{`RUNTIME: ${film?.Runtime}`}</p>
        <p>{`DIRECTOR: ${film?.Director}`}</p>
        <p>{`ACTORS: ${film?.Actors}`}</p>
        <p>{`RATING: ${film?.imdbRating}`}</p>
      </div>
      <button className="big-card-close" onClick={onClose}>
        <span className="material-icons">close</span>
      </button>
    </div>
  )

}

export default BigCard