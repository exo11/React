import { Link } from 'react-router'

function Nav({onSubmit}: {onSubmit: (evt: React.FormEvent) => void}) {

  return (
    <nav className="toolbar">
      <Link className="favourites-link" to={'favourites'}>
        <span className="material-icons">favorite</span>
        <span>FAVOURITES</span>
      </Link>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="SEARCH" name="search" required></input>
        <button className="btn">SEARCH</button>
      </form>
    </nav>
  )

}

export default Nav