import moment from 'moment/min/moment-with-locales'
import type { INews } from '../model/model'

function News({news}: {news: INews[]}) {
 
  const addDateStr = (dt: number) => {
    const date = moment.unix(dt).locale('ru')
    const dM = date.format('D MMM').slice(0, -1)
    const hour = date.format('H')
    const min = date.format('mm')
    return `${dM} в ${hour}:${min}`
  }

  const addCards = (arr: INews[]) => arr.map((o) => {
    return  (
      <div key={o.id} className="news">
        <p className="date">{addDateStr(o.date)}</p>
        <p>{o.text}</p>
        <div className="news-footer">
          <span>{`comments: ${o.comments.count}`}</span>
          <span>{`likes: ${o.likes.count}`}</span>
          <span>{`reposts: ${o.reposts.count}`}</span>
          <span>{`views: ${o.views.count}`}</span>
        </div>
      </div>
    )
  })

  return <>{addCards(news)}</>
  
}

export default News