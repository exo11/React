import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store/store'
import { fetchMovies } from '../store/action/moviesSlice'
import Nav from '../components/Nav'
import Cards from '../components/Cards'


function Home() {

  const [searchValue, setSearchValue] = useState<string>('')
  const dispatch = useDispatch<AppDispatch>()
  const {movies, loading} = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    if (searchValue) {
      dispatch(fetchMovies(searchValue))
    }
  }, [searchValue, dispatch])
  
  const onSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    const {search} = evt.target as HTMLFormElement
    setSearchValue(search.value)
    search.value = ''
  }

  if (loading) return <h1 className="loading">LOADING...</h1>

  return (
    <div className="container">
      <Nav onSubmit={onSubmit}/>
      <div className="movie-wrapper">
        <Cards movies={movies} path={'/'}/>
      </div>
    </div>
  )

}

export default Home