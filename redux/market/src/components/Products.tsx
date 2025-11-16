import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'
import { type IProduct } from '../model/model'

function Products() {

  const products = useSelector((state: RootState) => state.productsReducer)
  console.log(products)

  const addDisPrice = (p: number, d: number) => (p - (p * (d / 100)))

  const addCard = (arr: IProduct[]) => arr.map((o) => {
    return (
      <div className="card" key={o.id}>
        <img src={o.image} alt="product image"></img>
        <div className="card-body">
          <div className="price-wrapper">
            <p className="discount-price">{addDisPrice(o.price, o.discount)}</p>
            <p className="price">{o.price}</p>
          </div>
          <h5><a href={o.link}>{o.title}</a></h5>
        </div>
        <div className="discount-wrapper">
          <p>{`${o.discount}%`}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="products-container">
      {addCard(products)}
    </div>
  )

}

export default Products