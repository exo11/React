import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'
import Cards from '../components/Cards'

function Favourites() {

  const {favourites} = useSelector((state:RootState) => state.favourites)

  return (
     <div className="favourites-container">
      <div className="movie-wrapper">
        <Cards movies={favourites} path={'/favourites/'}/>
      </div>
    </div>
  )

}

export default Favourites