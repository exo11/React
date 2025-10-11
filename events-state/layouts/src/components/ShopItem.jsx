function ShopItem({props}) {

  const {name, price, color, img} = props
  
  return (
    <li className="item">
      <img className="item-img" src={img} alt={name}></img>
      <h2 className="item-title">{name}</h2>
      <p className="item-color">{color}</p>
      <p className="item-price">{`$${price}`}</p>
      <button className="item-btn">ADD TO CART</button>
    </li>
  )

}

export default ShopItem