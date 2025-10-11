import ShopCard from './ShopCard.jsx'

function CardsView({cards}) {
 
  const addCards = arr => {
    return arr.map((obj, i) => {
      return (
        <ShopCard key={`card_${i}`} props={obj}/>
      )
    })
  }
  
  return (
    <div className="card-container">{addCards(cards)}</div>
  )

}

export default CardsView