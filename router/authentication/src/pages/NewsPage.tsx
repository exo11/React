import { useContext } from 'react'
import useNewsQuerry from '../hooks/useNewsQuerry'
import { useParams } from 'react-router'
import { UserContext } from '../context/UserContext'
import { type INews } from '../model/model'
import Card from '../components/Card'
import NotFound from './ErrorPage'
import { Link } from 'react-router'

function News() {
  
  const {id} = useParams()
  const user = useContext(UserContext)
  const [news] = useNewsQuerry(user) 

  const addCards = (arr: INews[]) => arr.map((obj) => {
    return (
      <Link to={`/news/${obj.id}`} className="card-wrapper" key={obj.id}>
        <Card {...obj}/>
      </Link>
    )
  })

  const addcard = (arr: INews[], id: string) => {
    const obj = arr.find(o => o.id === id)
    return obj ? <div className="card-wrapper single"><Card {...obj}/></div> : 
      user ? <NotFound/> : null
  }

  return (
    <>{id ? addcard(news, id) : addCards(news)}</>
  )

}

export default News