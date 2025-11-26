import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { servicesRequest }  from '../actions/actioncreators'
import ErrorModal from '../components/ErrorModal'
import List from '../components/List'
import Details from '../components/Details'

function Home() {

  const {id} = useParams()
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.services)
  
  useEffect(() => {dispatch(servicesRequest(id))}, [id, dispatch])

  const onQuery = ({target}) => {dispatch(servicesRequest(target.dataset.id))}
   
  return (
    <div>
      {loading && <h1>LOADING...</h1>}
      {error && <ErrorModal id={id} onClick={onQuery}/>}
      {id ? <Details data={data}/> : <List data={data}/>}
    </div>
  )

}

export default Home