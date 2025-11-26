import {useSelector, useDispatch} from 'react-redux'
import { CHANGE_FIELD } from '../actions/actiontype'

function Search() {

  const {items, loading, error, search} = useSelector(state => state.skills)
  const dispatch = useDispatch()
  
  const onSearch = evt => {
    const {value} = evt.target
    dispatch({type: CHANGE_FIELD, payload: {search: value}})
  };

  const hasQuery = search.trim() !== ''

  const addResult = (err, arr) => err ? <div>Error occured</div> :
    <ul>{arr.map((o) => <li key={o.id}>{o.name}</li>)}</ul> 
  

  return (
    <div className="container">
      <input type="search" value={search} onChange={onSearch}></input>
      <div className="answer-container">
        {!hasQuery && <div>Type something to search</div>}
        {hasQuery && loading && <div>searching...</div>}
        {addResult(error, items)}
      </div>
    </div>
  )

}

export default Search