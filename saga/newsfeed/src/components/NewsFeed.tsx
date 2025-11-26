import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../store/store'
import { newsRequest } from '../store/slice/newsSlice'
import { useEffect } from 'react'
import News from './News'

function NewsFeed() {

  const {news, loading, end} = useSelector((state: RootState) => state.news)
  const dispatch = useDispatch<AppDispatch>()
  const lastId = news.length ? news[news.length - 1].id : null

  useEffect(() => {
    dispatch(newsRequest({requestId: 0}))
  }, [dispatch])

  const onClick = (evt: React.MouseEvent) => {
    const requestId = Number((evt.target as HTMLButtonElement).dataset.id)
    dispatch(newsRequest({requestId}))
  }

  const btn = <button data-id={lastId} onClick={onClick}>К ПРЕДЫДУЩИМ ЗАПИСЯМ</button>

  return (
    <div className="cont">
      <News news={news}/>
      {loading && <h1>LOADING...</h1>}
      {lastId && !loading && !end && btn}
    </div>
  )

}

export default NewsFeed