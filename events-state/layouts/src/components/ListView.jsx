import ShopItem from './ShopItem.jsx'

function ListView({items}) {

  const addItems = arr => {
    return arr.map((obj, i) => {
      return (
        <ShopItem key={`items_${i}`} props={obj}/>
      )
    })
  }
    
  return (
    <ul className="item-container">{addItems(items)}</ul>
  )

}

export default ListView