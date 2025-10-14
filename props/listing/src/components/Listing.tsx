interface IItem {
  listing_id: number,
  url: string,
  title: string,
  price: string,
  quantity: number,
  currency_code: string,
  MainImage: {url_570xN: string}
}

interface ListinigProps {
  items: IItem[]
}

const getCutTitle = (title: string): string => {
  return title.length > 50 ? `${title.slice(0,50)} ...` : title;
}

const getPrice = (obj: IItem): string => {
  const {currency_code: code, price} = obj
  let sign: string | undefined
  
  switch(code) {
    case'USD':
    sign = '$'
    break
    case'EUR':
    sign = '€'
    break
  }
  
  return sign ? sign + price : price + ' ' + code;
}

const getLevel = (num: number): string => num <= 10 ? 'low' : num <= 20 ? 'medium' : 'high'
 
function Listing({items = []}: ListinigProps) {
  
  const addItems = (arr: IItem[]) => {
    return arr.map((obj: IItem) => {
      return (
        <div className="item" key={obj.listing_id}>
          <div className="item-image">
            <a href={obj.url}>
              <img src={obj.MainImage.url_570xN}></img>
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{getCutTitle(obj.title)}</p>
            <p className="item-price">{getPrice(obj)}</p>
            <p className={`item-quantity level-${getLevel(obj.quantity)}`}>{obj.quantity}</p>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="item-list">{addItems(items)}</div>
  )

}

export default Listing