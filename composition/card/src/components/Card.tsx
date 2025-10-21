import { type ReactNode } from 'react'

function Card({children, url}: {children: ReactNode, url?: string}) {

  return (
    <div className="card">
      {url ? <img src={url} className="card-img-top" alt="..."></img> : <></>}
      {children}
    </div>
  )
  
}

export default Card