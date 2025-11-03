import { type INews } from '../../model/model'
import Card from './Card'

function News({news}: {news: INews[]}) {

  const addCards = (arr: INews[]) => arr.map((obj, key) => {
    return (<div className="card-wrapper" key={key}><Card {...obj}/></div>)
  })

  return (
    <>{addCards(news)}</>
  )

}

export default News