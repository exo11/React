function ShopCard({props}) {
  
  const {name, price, color, img} = props
  
  return (
    <div className="card">
      <h2 className="card-title">{name}</h2>
      <p className="card-color">{color}</p>
      <img className="card-img" src={img} alt={name}></img>
      <div className="card-footer">
        <p className="card-price">{`$${price}`}</p>
        <button className="card-btn">ADD TO CART</button>
      </div>
    </div>
  )

}

export default ShopCard