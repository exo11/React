function Details({data}) {
  
  const {name, price, content} = data

  const details = (
    <div>
      <h3>{name}</h3>
      <p>{`ЦЕНА: ${price}`}</p>
      <p>{content}</p>
    </div>
  )

  return (
    <>{Array.isArray(data) ? null : details }</>
  )

}

export default Details